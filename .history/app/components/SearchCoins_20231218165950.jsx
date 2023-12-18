"use client";
import Link from "next/link";
import { useState } from "react";

export default function SearchCoins({ getSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/coins/search?query=${query}`);
    const coin = await response.json();

    getSearchResults(coin)
  };
  return (
    <div className="py-12">
      <form onSubmit={handleSubmit}>
        <input
          className="text-black border-black border-2 rounded-full  px-6 py-4  mr- "
          type="text"
          placeholder="search coin... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="absolute bg-black hover:bg-black/60  text-white rounded-full px-6 py-4 " type="submit">Search</button>
      </form>
    </div>
  );
}
