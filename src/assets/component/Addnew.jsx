
import axios from "axios";
import React, { useState } from "react";

function Addnew() {
  const [file, setFile] = useState();
  const [imageName, setImagename] = useState("");
  const [price, setPrice] = useState("");

  const Submit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", imageName);
    formData.append("price", price);
    axios.post("http://localhost:3000/upload", formData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div>
        <p>Product Title</p>
        <input value={imageName} onChange={(e) => setImagename(e.target.value)} type="text" name="name" placeholder="product name" />
      </div>
      <div>
        <p>Price</p>
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" placeholder="price" />
      </div>
      <div>
        <label htmlFor="image">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} name="image" id="image" accept="image/*" />
        </label>
      </div>
      <button type="button" onClick={Submit}>
        ADD
      </button>
    </div>
  );
}

export default Addnew;

