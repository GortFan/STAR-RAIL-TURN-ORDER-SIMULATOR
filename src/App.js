import InputField from './components/InputField'
import Id1Img from './resources/1101.png'
import Id2Img from './resources/1013.png'
import Id3Img from './resources/1009.png'
import Id4Img from './resources/1104.png'
import Id5Img from './resources/Monster_1013020.png'

function App() {

  var turnOrder = [
    {
      id: 5,
      path: Id5Img,
      speed: 125,
      AV: 80,
      Gauge: 10000
    },
    {
      id: 1,
      path: Id1Img,
      speed: 110,
      AV: 91,
      Gauge: 10000
    },
    {
      id: 2,
      path: Id2Img,
      speed: 100,
      AV: 100,
      Gauge: 10000
    },
    {
      id: 3,
      path: Id3Img,
      speed: 98,
      AV: 103,
      Gauge: 10000
    },
    {
      id: 4,
      path: Id4Img,
      speed: 92,
      AV: 109,
      Gauge: 10000
    },
  ]
  console.log(turnOrder[0].path)

  return (
    <div>
      <InputField 
      TurnOrder = {turnOrder}
      />
    </div>
  );
}

export default App;
