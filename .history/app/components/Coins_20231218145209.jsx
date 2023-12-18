
export default function Coins({coins}) {
  return (
    <>
    <ul>
{coins.map(coin => (
<li key={coin.uui}>




</li>
))}

    </ul>
    
    
    </>
  )
}
