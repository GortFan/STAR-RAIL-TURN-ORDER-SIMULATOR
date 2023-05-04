import InputField from './components/InputField'
import CharCardsMapper from './components/CharCardsMapper'
import {useState} from 'react'

function App() {

  const [turnOrder, setTurnOrder] = useState([
    {
      id: 1,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1101.png',
      speed: 110
    },
    {
      id: 2,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1201.png',
      speed: 100
    },
    {
      id: 3,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1009.png',
      speed: 98
    },
    {
      id: 4,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1104.png',
      speed: 92
    }
  ])

console.log(turnOrder)

  return (
    <div>
      <InputField 
      TurnOrder = {turnOrder}
      />
      <CharCardsMapper
      TurnOrder = {turnOrder}
      />
    </div>
  );
}

export default App;
