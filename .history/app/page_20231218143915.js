"use client"

import { useState, useEffect } from "react"

export default function Home() {
const [coins, SetCoins] = useState([]);

useEffect(() => {
  const getCoins = async () => {
    const response = await('/api')
  }
})

  return (
   <div>
<h1>hello</h1>

   </div>
  )
}
