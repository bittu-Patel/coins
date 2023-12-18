import Image from "next/image"


export default function Coins({coins}) {
  return (
    <>
    <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-12">
{coins.map(coin => (
<li key={coin.uuid} className="flex flex-col gap-6">
    <Image
    src={coin.iconUrl}
    alt={coin.name}
width={70}
height={70}    
    priority
    />
    <h3>{coin.name}</h3>
    <p>{coin.symbol}</p>
<p>{coin.price}</p>
</li>
))}

    </ul>
    
    
    </>
  )
}
