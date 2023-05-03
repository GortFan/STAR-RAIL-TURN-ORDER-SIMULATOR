import InputField from './components/InputField'
import CharCardsMapper from './components/CharCardsMapper'
function App() {

  let TurnOrder=[
    {
      id: 1,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1101.png'
    },
    {
      id: 2,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1201.png'
    },
    {
      id: 3,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1009.png'
    },
    {
      id: 4,
      path: 'https://rerollcdn.com/STARRAIL/Characters/Full/1104.png'
    }
  ]
  return (
    <div>
      <InputField/>
      <CharCardsMapper
      TurnOrder = {TurnOrder}
      />
    </div>
  );
}

export default App;
