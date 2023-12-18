
export default function Coins({coins}) {
  return (
    <>
    <ul>
{coins.map(coin => (
<li key={coin.uuid}>
    <h3>{coin.name}</h3>
    <p>{coin.symbol}</p>
<



</li>
))}

    </ul>
    
    
    </>
  )
}
