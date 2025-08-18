import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import booksData from "../data/books";
import BookCard from "../components/BookCard";

export default function Home() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (book) => {
    if (favorites.find(f => f.id === book.id)) {
      setFavorites(favorites.filter(f => f.id !== book.id));
    } else {
      setFavorites([...favorites, book]);
    }
  };

  return (
    <>
      <Head>
        <title>Online Book Library</title>
        <meta name="description" content="Browse our collection of classic and modern books." />
      </Head>

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Online Book Library</h1>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-lg mb-8 shadow-lg">
          <h2 className="text-2xl font-bold">📚 Featured Book</h2>
          <p className="mt-2">Check out our top pick this week: <span className="font-semibold">"{booksData[0].title}"</span></p>
          <Link href={`/books/${booksData[0].id}`} className="mt-4 inline-block bg-white text-indigo-600 px-4 py-2 rounded shadow hover:bg-gray-100">
            Read More
          </Link>
        </div>

        <div className="mb-8 flex justify-between">
          <Link href="/search">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out">
              Go to Search Page
            </button>
          </Link>

          <Link href="/favorites">
            <button className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300 ease-in-out">
              Favorites ({favorites.length})
            </button>
          </Link>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {booksData.map(book => (
            <BookCard 
              key={book.id} 
              book={book} 
              onToggleFavorite={toggleFavorite} 
              isFavorite={favorites.find(f => f.id === book.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
