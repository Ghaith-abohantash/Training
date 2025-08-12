import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import books from "../data/books";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Search Books</h1>
      <input
        type="text"
        placeholder="Search by title..."
        className="border p-2 rounded w-full mb-6"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.map(book => (
          <div key={book.id} className="bg-white shadow-lg rounded-lg p-4">
            <Image src={book.image} alt={book.title} width={300} height={400} className="rounded" />
            <h2 className="text-xl font-semibold mt-4">{book.title}</h2>
            <Link href={`/books/${book.id}`} className="text-blue-500 mt-2 inline-block">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
