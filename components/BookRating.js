import { useState } from "react";

export default function BookRating({ book }) {
  const [rating, setRating] = useState(book.rating || 0);

  return (
    <div className="mt-4">
      <p className="font-semibold">Rate this book:</p>
      <div className="flex gap-2 mt-1">
        {[1,2,3,4,5].map(star => (
          <button 
            key={star} 
            onClick={() => setRating(star)}
            className={star <= rating ? "text-yellow-500" : "text-gray-400"}
          >
            ★
          </button>
        ))}
      </div>
      {rating > 0 && <p className="mt-2 text-sm text-gray-600">You rated: {rating} ⭐</p>}
    </div>
  );
}
