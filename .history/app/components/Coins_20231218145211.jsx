
export default function Coins({coins}) {
  return (
    <>
    <ul>
{coins.map(coin => (
<li key={coin.uuid}>




</li>
))}

    </ul>
    
    
    </>
  )
}
