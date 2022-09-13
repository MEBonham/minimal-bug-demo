import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
// import Mention from '@tiptap/extension-mention';

function App() {
  const [count, setCount] = useState(0)

  const editor = useEditor({
      extensions: [
          StarterKit,
          // Mention.configure({
          //     HTMLAttributes: {
          //         class: "mention"
          //     },
          //     suggestion
          // })
      ],
      content: "<p>This is a TipTap editor.</p>"
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <EditorContent editor={editor} />      
    </div>
  )
}

export default App
