import InputField from './components/InputField'
import CharCardsMapper from './components/CharCardsMapper'
function App() {

  let TurnOrder=[
    {
      id: 1,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1101.png',
      speed: 100
    },
    {
      id: 2,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1201.png',
      speed: 110
    },
    {
      id: 3,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1009.png',
      speed: 92
    },
    {
      id: 4,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1104.png',
      speed: 98
    }
  ]
  return (
    <div>
      <InputField 
      TurnOrder = {TurnOrder}
      />
      <CharCardsMapper
      TurnOrder = {TurnOrder}
      />
    </div>
  );
}

export default App;
