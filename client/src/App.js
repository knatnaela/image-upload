import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const upload = async () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", "this");
    const header = {
      "Content-Type": "multipart/form-data",
    };
    const data = await axios.post(
      "http://localhost:3000/create",
      formData,
      header
    );
    console.log(data);
  };
  return (
    <div className="App">
      <input type="file" onChange={handleFile} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default App;
