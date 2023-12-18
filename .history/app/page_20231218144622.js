"use client"

import { useState, useEffect } from "react"

export default function Home() {
const [coins, SetCoins] = useState([]);

useEffect(() => {
  const getCoins = async () => {
    const response = await('/api/coins');
    const coins = await response.json();
    SetCoins(coins.data.coins);
  }

  getCoins();
  }, []);


  return (
   <div className="text-center">
<h1 className="font-bold text-6xl mt-14 ">Crypto Coins</h1>
<Coins coin></Coins>
   </div>
  )
}
