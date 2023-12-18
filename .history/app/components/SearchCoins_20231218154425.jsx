"use client";
import Link from "next/link";
import { useState } from "react";

export default function SearchCoins() {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/coins/search?query=${query}`);
    const coin = await response.json();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black border-black border-2 rounded-full px-3 py-2"
          type="text"
          placeholder="search coin... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-black text-white " type="submit">Search</button>
      </form>
    </div>
  );
}
