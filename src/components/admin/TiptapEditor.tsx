"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

function MenuBar({ editor }: { editor: ReturnType<typeof useEditor> }) {
  if (!editor) return null;

  const buttonClass = (active: boolean) =>
    `px-2 py-1 text-sm rounded ${
      active ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-50">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={buttonClass(editor.isActive("heading", { level: 2 }))}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={buttonClass(editor.isActive("heading", { level: 3 }))}
      >
        H3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive("bold"))}
      >
        B
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive("italic"))}
      >
        I
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClass(editor.isActive("bulletList"))}
      >
        リスト
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={buttonClass(editor.isActive("orderedList"))}
      >
        番号リスト
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={buttonClass(editor.isActive("blockquote"))}
      >
        引用
      </button>
      <button
        type="button"
        onClick={() => {
          const url = window.prompt("リンクURL:");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        className={buttonClass(editor.isActive("link"))}
      >
        リンク
      </button>
      <button
        type="button"
        onClick={() => {
          const url = window.prompt("画像URL:");
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
        className="px-2 py-1 text-sm rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
      >
        画像
      </button>
      <div className="border-l mx-1" />
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        className="px-2 py-1 text-sm rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
      >
        戻す
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        className="px-2 py-1 text-sm rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
      >
        やり直す
      </button>
    </div>
  );
}

export default function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      LinkExtension.configure({ openOnClick: false }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-lg overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none p-4 min-h-[300px] focus:outline-none [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[300px]"
      />
    </div>
  );
}
