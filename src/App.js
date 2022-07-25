import "./App.css";
import { Header } from "./components/Header";
import { Upload } from "./components/Upload";
import { ImageGrid } from "./components/ImageGrid";
import { Modal } from "./components/Modal";
import { useState } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="app">
      <Header />
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />

      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
