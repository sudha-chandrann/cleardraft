
'use client';
import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
// @ts-ignore
import Warning from '@editorjs/warning';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      id: 'oUq2g_tl8y',
      type: 'header',
      data: {
        text: 'Editor.js',
        level: 2,
      },
    },
    {
      id: 'zbGZFPM-iI',
      type: 'paragraph',
      data: {
        text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.',
      },
    },
  ],
  version: '2.8.1',
};

function Editor({ onSaveTrigger,fileId }: any) {
  const ref = useRef<EditorJS>();
  const [document, setDocument] = useState(rawDocument);
   const updateDocument=useMutation(api.files.updateDocument);

  useEffect(() => {
    initEditor();

    return () => {
      // Cleanup on unmount
      if (ref.current) {
        ref.current.destroy();
        ref.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (onSaveTrigger) {
      console.log('Trigger Value:', onSaveTrigger);
      onSaveDocument();
    }
  }, [onSaveTrigger]);

  const onSaveDocument = () => {
    if (ref.current) {
      console.log('EditorJS instance:', ref.current);
      if (ref.current.save) {
        ref.current
          .save()
          .then((outputData) => {
            console.log('Article data: ', outputData);
            updateDocument({
              fileId:fileId,
              document:JSON.stringify(outputData)
            }).then(resp=>{
              console.log(resp);
              toast('document is updated successfully')
            }),(e:any)=>{
              toast('server error')
            }
          })
          .catch((error) => {
            console.error('Saving failed: ', error);
          });
      } else {
        console.warn('ref.current.save is not defined');
      }
    } else {
      console.warn('ref.current is null or undefined');
    }
  };

  const initEditor = () => {
    const editor = new EditorJS({
      tools: {
        header: {
          // @ts-ignore
          class: Header,
          shortcut: 'CMD+SHIFT+H',
          config: {
            placeholder: 'Enter a Header',
          },
        },
        list: {
          // @ts-ignore
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+W',
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },
        paragraph: Paragraph,
      },
      holder: 'editorjs',
      data: document,
    });
    ref.current = editor;
  };

  return (
    <div className="h-full">
      <div id="editorjs" className="ml-20"></div>
    </div>
  );
}

export default Editor;
