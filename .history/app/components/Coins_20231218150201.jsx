import Image from "next/image"


export default function Coins({coins}) {
  return (
    <>
    <ul>
{coins.map(coin => (
<li key={coin.uuid}>
    <Image
    src={coin.iconUrl}
    alt
    
    
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
