"use client";

import { useEditor, EditorContent, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import { useRef, useCallback } from "react";

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
  return (await res.json()).url;
}

// Prevent focus loss from editor when clicking toolbar buttons
const prevent = (e: React.MouseEvent) => e.preventDefault();

function MenuBar({ editor, onImageUpload }: { editor: ReturnType<typeof useEditor> | null; onImageUpload: () => void }) {
  // useEditorState for reactive toolbar state - only re-renders when active states change
  const state = useEditorState({
    editor: editor,
    selector: (ctx) => {
      const e = ctx.editor;
      if (!e) return null;
      return {
        isBold: e.isActive("bold"),
        isItalic: e.isActive("italic"),
        isH2: e.isActive("heading", { level: 2 }),
        isH3: e.isActive("heading", { level: 3 }),
        isBulletList: e.isActive("bulletList"),
        isOrderedList: e.isActive("orderedList"),
        isBlockquote: e.isActive("blockquote"),
        isLink: e.isActive("link"),
        canUndo: e.can().undo(),
        canRedo: e.can().redo(),
      };
    },
  });

  if (!editor || !state) return null;

  const btn = (active: boolean, disabled = false) =>
    `px-2.5 py-1.5 text-sm rounded-md font-medium transition-colors select-none ${
      disabled
        ? "bg-gray-50 text-gray-300 cursor-not-allowed"
        : active
          ? "bg-[var(--color-primary)] text-white shadow-sm"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300"
    }`;

  return (
    <div className="flex flex-wrap items-center gap-1 p-2.5 border-b bg-gray-50" role="toolbar" aria-label="テキスト書式">
      {/* Block level */}
      <button type="button" onMouseDown={prevent} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btn(state.isH2)} title="見出し2">H2</button>
      <button type="button" onMouseDown={prevent} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btn(state.isH3)} title="見出し3">H3</button>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      {/* Inline marks */}
      <button type="button" onMouseDown={prevent} onClick={() => editor.chain().focus().toggleBold().run()} className={btn(state.isBold)} title="太字 (Ctrl+B)">
        <span className="font-bold">B</span>
      </button>
      <button type="button" onMouseDown={prevent} onClick={() => editor.chain().focus().toggleItalic().run()} className={btn(state.isItalic)} title="斜体 (Ctrl+I)">
        <span className="italic">I</span>
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      {/* Lists */}
      <button type="button" onMouseDown={prevent} onClick={() => editor.chain().focus().toggleBulletList().run()} className={btn(state.isBulletList)} title="箇条書きリスト">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <line x1="9" y1="6" x2="20" y2="6" /><line x1="9" y1="12" x2="20" y2="12" /><line x1="9" y1="18" x2="20" y2="18" />
          <circle cx="5" cy="6" r="1.5" fill="currentColor" /><circle cx="5" cy="12" r="1.5" fill="currentColor" /><circle cx="5" cy="18" r="1.5" fill="currentColor" />
        </svg>
      </button>
      <button type="button" onMouseDown={prevent} onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btn(state.isOrderedList)} title="番号付きリスト">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <line x1="10" y1="6" x2="20" y2="6" /><line x1="10" y1="12" x2="20" y2="12" /><line x1="10" y1="18" x2="20" y2="18" />
          <text x="3" y="8" fontSize="7" fill="currentColor" stroke="none" fontWeight="bold">1</text>
          <text x="3" y="14" fontSize="7" fill="currentColor" stroke="none" fontWeight="bold">2</text>
          <text x="3" y="20" fontSize="7" fill="currentColor" stroke="none" fontWeight="bold">3</text>
        </svg>
      </button>
      <button type="button" onMouseDown={prevent} onClick={() => editor.chain().focus().toggleBlockquote().run()} className={btn(state.isBlockquote)} title="引用">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      {/* Link */}
      <button
        type="button"
        onMouseDown={prevent}
        onClick={() => {
          if (state.isLink) {
            editor.chain().focus().unsetLink().run();
          } else {
            const url = window.prompt("リンクURL:");
            if (url) {
              // テキストが選択されていない場合はURLをテキストとして挿入
              const { from, to } = editor.state.selection;
              if (from === to) {
                editor.chain().focus()
                  .insertContent(`<a href="${url}">${url}</a>`)
                  .run();
              } else {
                editor.chain().focus()
                  .extendMarkRange("link")
                  .setLink({ href: url })
                  .run();
              }
            }
          }
        }}
        className={btn(state.isLink)}
        title="リンク"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      </button>

      {/* Image */}
      <button type="button" onMouseDown={prevent} onClick={onImageUpload} className={btn(false)} title="画像を挿入">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      {/* Undo / Redo */}
      <button type="button" onMouseDown={prevent} onClick={() => editor.chain().focus().undo().run()} className={btn(false, !state.canUndo)} disabled={!state.canUndo} title="元に戻す (Ctrl+Z)">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
        </svg>
      </button>
      <button type="button" onMouseDown={prevent} onClick={() => editor.chain().focus().redo().run()} className={btn(false, !state.canRedo)} disabled={!state.canRedo} title="やり直す (Ctrl+Shift+Z)">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
        </svg>
      </button>
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
    content: content || "<p></p>",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[300px]",
      },
      handleDrop(view, event) {
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
          const file = files[0];
          if (file.type.startsWith("image/")) {
            event.preventDefault();
            uploadImage(file).then((url) => {
              if (url) {
                const pos = view.posAtCoords({ left: event.clientX, top: event.clientY })?.pos;
                if (pos !== undefined) {
                  const node = view.state.schema.nodes.image.create({ src: url });
                  view.dispatch(view.state.tr.insert(pos, node));
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
                const node = view.state.schema.nodes.image.create({ src: url });
                view.dispatch(view.state.tr.insert(view.state.selection.from, node));
              }
            });
            return true;
          }
        }
        return false;
      },
    },
  });

  const handleImageUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !editor) return;
      const url = await uploadImage(file);
      if (url) editor.chain().focus().setImage({ src: url }).run();
      e.target.value = "";
    },
    [editor]
  );

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <MenuBar editor={editor} onImageUpload={handleImageUpload} />
      <div className="p-4">
        <EditorContent
          editor={editor}
          className="prose prose-sm max-w-none prose-headings:font-bold prose-h2:text-xl prose-h3:text-lg prose-blockquote:border-l-4 prose-blockquote:border-[var(--color-primary)] prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-img:max-w-full prose-img:rounded-lg prose-img:my-4 prose-a:text-[var(--color-primary)] prose-a:underline"
        />
      </div>
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
