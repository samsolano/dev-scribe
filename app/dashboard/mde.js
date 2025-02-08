"use client"; // Ensure it runs only on the client side

import { useEffect, useRef } from "react";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";

const EasyMDEEditor = ({content}) => {

  const textareaRef = useRef(null);
  const easyMDERef = useRef(null);

  useEffect(() => {
    if (textareaRef.current && !easyMDERef.current) {
        easyMDERef.current = new EasyMDE({ element: textareaRef.current });
    //   easyMDE.value('New input for **EasyMDE**');
    }
}, []);


    useEffect(() => {
    if (easyMDERef.current) {
        console.log("hello: ",  content, typeof content)
        easyMDERef.current.value(content.message); // Update content dynamically
      }

  }, [content]);



//   useEffect(() => {
//     if (textareaRef.current && !easyMDERef.current) {
//       easyMDERef.current = new EasyMDE({ element: textareaRef.current });
//     }

//     if (easyMDERef.current) {
//       easyMDERef.current.value(content); // Update content dynamically
//     }
//   }, [content]); 



  return <textarea ref={textareaRef} />;
};


export default EasyMDEEditor;