"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function SearchCoins() {
const [query, setQuery] = useState('')


const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/coins/search?query=${query}`)


    const coin = await response.json()

}
    return (
   <div>
   <form onSubmit={handleSubmit}>
    <input type="text" placeholder='search coin... ' value={query} onChange={(e) => setQuery(e.target.value)} />
    <button type=''>Search</button>
    </div>
  )
}

