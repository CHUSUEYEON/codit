import React, { useState } from "react";
import axios from "axios";

export default function FileUpload({ setPdfUrl }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setPdfUrl(`http://localhost:8080/${res.data.pdfPath}`);
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("pdf파일만 업로드 가능합니다.");
    }
  };

  return (
    <section className="FileUpload">
      <h2>PDF 파일 업로드</h2>
      <input
        type="text"
        id="title"
        placeholder="제목"
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <br />
      <button type="submit" onClick={handleUpload}>
        업로드
      </button>
    </section>
  );
}
