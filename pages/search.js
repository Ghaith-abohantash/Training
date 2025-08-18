import { useState } from "react";
import booksData from "../data/books";
import BookCard from "../components/BookCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("title");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (book) => {
    if (favorites.find(f => f.id === book.id)) {
      setFavorites(favorites.filter(f => f.id !== book.id));
    } else {
      setFavorites([...favorites, book]);
    }
  };

  const categories = ["All", ...new Set(booksData.map(b => b.category))];

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase()) &&
    (category === "All" || book.category === category)
  );

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "author") return a.author.localeCompare(b.author);
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Search Books</h1>

      <div className="flex gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Search by title..."
          className="border p-2 rounded flex-grow"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <select className="border p-2 rounded" value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <select className="border p-2 rounded" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedBooks.map(book => (
          <BookCard key={book.id} book={book} onToggleFavorite={toggleFavorite} isFavorite={favorites.find(f => f.id === book.id)} />
        ))}
      </div>
    </div>
  );
}
