import React, { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

const renderPage = async (pdfUrl, pageNumber, canvasId) => {
  try {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(pageNumber);

    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext("2d");

    const viewport = page.getViewport({ scale: 1 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context,
      viewport: viewport,
    }).promise;
  } catch (error) {
    console.error("Error rendering PDF page: ", error);
  }
};

export default function PDFViewer({ pdfUrl }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (pdfUrl) {
      renderPage(pdfUrl, 1, "pdf-canvas");
    }
  }, [pdfUrl]);

  return (
    <div className="PdfViewer">
      <h2>PDF 뷰어</h2>
      <canvas id="pdf-canvas" ref={canvasRef}></canvas>
    </div>
  );
}
