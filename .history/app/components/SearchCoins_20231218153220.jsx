"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function SearchCoins() {
const [query, setQuery] = useState('')


const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/coins/search?query=${query}`)
}
    return (
    <div>SearchCoins</div>
  )
}

