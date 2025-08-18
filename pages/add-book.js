import { useState } from "react";
import booksData from "../data/books";

export default function AddBook() {
  const [books, setBooks] = useState(booksData);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: (books.length + 1).toString(),
      title,
      author,
      category,
      description,
      image: "/images/default.jpg",
      rating: 0
    };
    setBooks([...books, newBook]);
    alert("Book added!");
    setTitle(""); setAuthor(""); setCategory(""); setDescription("");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Title" className="border p-2 rounded" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" className="border p-2 rounded" value={author} onChange={e => setAuthor(e.target.value)} required />
        <input type="text" placeholder="Category" className="border p-2 rounded" value={category} onChange={e => setCategory(e.target.value)} required />
        <textarea placeholder="Description" className="border p-2 rounded" value={description} onChange={e => setDescription(e.target.value)} required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add Book</button>
      </form>
    </div>
  );
}
