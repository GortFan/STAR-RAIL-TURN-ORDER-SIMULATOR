import InputField from './components/InputField'
import CharCardsMapper from './components/CharCardsMapper'
function App() {

  let TurnOrder=[
    {
      id: 1,
      path: './resources/1101.png'
    },
    {
      id: 2,
      path: './resources/1109.png'
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
