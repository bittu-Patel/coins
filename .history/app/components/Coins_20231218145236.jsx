
export default function Coins({coins}) {
  return (
    <>
    <ul>
{coins.map(coin => (
<li key={coin.uuid}>
    <h3>{coin}</h3>




</li>
))}

    </ul>
    
    
    </>
  )
}
