import Link from "next/link";
import BookCard from "../components/BookCard";
import { useState } from "react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (book) => {
    if (favorites.find(f => f.id === book.id)) {
      setFavorites(favorites.filter(f => f.id !== book.id));
    } else {
      setFavorites([...favorites, book]);
    }
  };

  if (!favorites || favorites.length === 0) return <p className="text-center mt-10">No favorites yet ❤️</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map(book => (
          <BookCard key={book.id} book={book} onToggleFavorite={toggleFavorite} isFavorite={true} />
        ))}
      </div>
    </div>
  );
}
