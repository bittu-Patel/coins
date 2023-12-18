"use client"

import { useState, useEffect } from "react"
import Coins from "./components/Coins";
import SearchCoins from "./components/SearchCoins";


export default function Home() {
const [coins, SetCoins] = useState([]);

useEffect(() => {
  const getCoins = async () => {
    const response = await fetch('/api/coins');
    const coins = await response.json();
    SetCoins(coins.data.coins);
  }

  getCoins();
  }, []);


  return (
   <div className="text-center">
<h1 className="font-bold text-6xl mt-6 py-4 border border-emerald-500 bg-emerald-500 rounded-full">Crypto Coins</h1>

<SearchCoins getSearchResults={(results) => SetCoins(results)}  />
<Coins coins={coins} />
   </div>
  )
}
