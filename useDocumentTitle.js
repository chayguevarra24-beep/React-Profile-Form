import { useEffect } from "react";

function useDocumentTitle(title) {
  useEffect(() => {
    if (title.trim() !== "") {
      document.title = `Student: ${title}`;
    } else {
      document.title = "React Profile Form";
    }
  }, [title]);
}

export default useDocumentTitle;