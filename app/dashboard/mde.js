"use client"; // Ensure it runs only on the client side

import { useEffect, useRef } from "react";
import EasyMDE from "easymde";
import "easymde/dist/easymde.min.css";

const EasyMDEEditor = () => {
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      new EasyMDE({ element: textareaRef.current });
    }
  }, []);

  return <textarea ref={textareaRef} />;
};

export default EasyMDEEditor;