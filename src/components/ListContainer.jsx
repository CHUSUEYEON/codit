import React, { useState } from "react";
import FileUpload from "./FileUpload";
import PDFViewer from "./PDFViewer";

export function ListContainer() {
  const [pdfUrl, setPdfUrl] = useState(null);
  return (
    <div className="ListContainer">
      <FileUpload setPdfUrl={setPdfUrl} />
      {pdfUrl && <PDFViewer pdfUrl={pdfUrl} />}
    </div>
  );
}

export default ListContainer;
