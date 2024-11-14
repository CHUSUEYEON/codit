import React from "react";

export default function FileUpload({ setPdfUrl }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      console.log(url);
      setPdfUrl(url);
    } else {
      alert("PDF 파일만 업로드 가능합니다.");
    }
  };

  return (
    <section className="FileUpload">
      <h2>PDF 파일 업로드</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </section>
  );
}
