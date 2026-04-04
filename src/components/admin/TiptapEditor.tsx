"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import { useRef } from "react";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

async function uploadImage(file: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: formData });
  if (!res.ok) {
    const data = await res.json();
    alert(data.error || "アップロードに失敗しました");
    return null;
  }
  const data = await res.json();
  return data.url;
}

function MenuBar({ editor, onImageUpload }: { editor: ReturnType<typeof useEditor>; onImageUpload: () => void }) {
  if (!editor) return null;

  const btn = (active: boolean) =>
    `px-2.5 py-1.5 text-sm rounded-md font-medium transition-colors ${
      active ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="flex flex-wrap gap-1 p-2.5 border-b bg-gray-50">
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btn(editor.isActive("heading", { level: 2 }))}>H2</button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btn(editor.isActive("heading", { level: 3 }))}>H3</button>
      <div className="w-px bg-gray-300 mx-1" />
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={btn(editor.isActive("bold"))}>B</button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={btn(editor.isActive("italic"))}>I</button>
      <div className="w-px bg-gray-300 mx-1" />
      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btn(editor.isActive("bulletList"))}>リスト</button>
      <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btn(editor.isActive("orderedList"))}>番号</button>
      <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={btn(editor.isActive("blockquote"))}>引用</button>
      <div className="w-px bg-gray-300 mx-1" />
      <button
        type="button"
        onClick={() => {
          const url = window.prompt("リンクURL:");
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}
        className={btn(editor.isActive("link"))}
      >
        リンク
      </button>
      <button type="button" onClick={onImageUpload} className="px-2.5 py-1.5 text-sm rounded-md font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        画像
      </button>
      <div className="w-px bg-gray-300 mx-1" />
      <button type="button" onClick={() => editor.chain().focus().undo().run()} className="px-2.5 py-1.5 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">戻す</button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()} className="px-2.5 py-1.5 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">やり直す</button>
    </div>
  );
}

export default function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ allowBase64: false }),
      LinkExtension.configure({ openOnClick: false }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      handleDrop(view, event) {
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
          const file = files[0];
          if (file.type.startsWith("image/")) {
            event.preventDefault();
            uploadImage(file).then((url) => {
              if (url) {
                const { tr } = view.state;
                const pos = view.posAtCoords({ left: event.clientX, top: event.clientY })?.pos;
                if (pos !== undefined) {
                  const node = view.state.schema.nodes.image.create({ src: url });
                  view.dispatch(tr.insert(pos, node));
                }
              }
            });
            return true;
          }
        }
        return false;
      },
      handlePaste(view, event) {
        const files = event.clipboardData?.files;
        if (files && files.length > 0) {
          const file = files[0];
          if (file.type.startsWith("image/")) {
            event.preventDefault();
            uploadImage(file).then((url) => {
              if (url) {
                const { tr, selection } = view.state;
                const node = view.state.schema.nodes.image.create({ src: url });
                view.dispatch(tr.insert(selection.from, node));
              }
            });
            return true;
          }
        }
        return false;
      },
    },
  });

  function handleImageUpload() {
    fileInputRef.current?.click();
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    const url = await uploadImage(file);
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
    e.target.value = "";
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <MenuBar editor={editor} onImageUpload={handleImageUpload} />
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none p-4 min-h-[300px] focus:outline-none [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[300px] [&_.ProseMirror_img]:max-w-full [&_.ProseMirror_img]:rounded-lg [&_.ProseMirror_img]:my-4"
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
