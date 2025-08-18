import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book, onToggleFavorite, isFavorite }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <Image src={book.image} alt={book.title} width={300} height={400} className="rounded" />
      <h2 className="text-xl font-semibold mt-4">{book.title}</h2>
      <p className="text-gray-500">{book.author}</p>
      <p className="text-sm bg-gray-200 inline-block px-3 py-1 rounded mt-1">{book.category}</p>

      <div className="flex justify-between items-center mt-4">
        <Link href={`/books/${book.id}`} className="text-blue-500">Read More</Link>
        <button
          onClick={() => onToggleFavorite(book)}
          className={`px-3 py-1 rounded text-sm ${isFavorite ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}
