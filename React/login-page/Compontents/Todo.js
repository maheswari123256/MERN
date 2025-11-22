import React, { useState, useEffect } from 'react';

const Todo = () => {
  // State for product list
  const [list, setList] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  // States for input fields
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  // Save list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(list));
  }, [list]);

  const handleAdd = () => {
    if (!title || !image || !price) {
      alert("Please fill all fields!");
      return;
    }

    if (edit) {
      const updatedList = [...list];
      updatedList[editId] = { title, image, price };
      setList(updatedList);
      setEdit(false);
      setEditId(null);
    } else {
      const newProduct = { title, image, price };
      setList([...list, newProduct]);
    }

    // Clear inputs
    setTitle("");
    setImage("");
    setPrice("");
  };

  const handleDelete = (id) => {
    const newList = list.filter((_, index) => index !== id);
    setList(newList);
  };

  const handleEdit = (id) => {
    setTitle(list[id].title);
    setImage(list[id].image);
    setPrice(list[id].price);
    setEdit(true);
    setEditId(id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Product</h1>
      <input
        placeholder="Title"
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={image}
        type="text"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        type="text"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAdd}>{edit ? "Update" : "Add"}</button>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {list.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 0 5px #aaa",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
