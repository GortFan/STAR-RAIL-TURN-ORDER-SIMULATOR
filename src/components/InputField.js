import CharCardsMapper from './CharCardsMapper'
import React, {useState} from 'react'
import classes from './InputField.module.css'
export default function InputField(props){

  const [array, setArray] = useState(props.TurnOrder)
  console.log('default: ')
  console.log(array)
        function handleSubmit(e) {
          // Prevent the browser from reloading the page
          e.preventDefault();
      
          const form = e.target;
          const formData = new FormData(form);
         
          const formJson = Object.fromEntries(formData.entries());
          console.log(formJson)
          let speed = parseInt(formJson.Speed);

          //validation

          if(speed <= 0 || isNaN(speed) || speed > 99999){
            alert('invalid input');
          }

          else{
            let AV = 10000/speed;
            if(AV-Math.floor(AV)>0){
                AV = Math.ceil(AV)
                setOrder(AV, speed)
            }
            else{
                setOrder(AV, speed)
            }
          }
        }

        function setOrder(AV, speed){
          let editArray = [...array]
          let bronyaIndex = editArray.findIndex(object => object.id === 1)
          editArray[bronyaIndex].AV = AV
          editArray[bronyaIndex].speed = speed
          bubbleSort(editArray)
        }

        function handleBreak(){
          let editArray = [...array]
          let enemyIndex = editArray.findIndex(object => object.id === 5)
          editArray[enemyIndex].AV += 2500
          console.log(editArray[enemyIndex].AV)
          bubbleSort(editArray)
        }
        
        function handleImprisonment(){
          let editArray = [...array]
          let enemyIndex = editArray.findIndex(object => object.id === 5)
          let BreakEffect = 0.2
          editArray[enemyIndex].AV += 10000*(0.3*(1+BreakEffect))
          console.log(editArray[enemyIndex].AV)
          bubbleSort(editArray)
        }

        function bubbleSort(editArray) {
          var i, j;
          var len = editArray.length;
        
          var isSwapped = false;
        
           for (i = 0; i < len; i++) {
        
              isSwapped = false;
        
              for (j = 0; j < len-1; j++) {
                  if (editArray[j].AV > editArray[j + 1].AV) {
                      var temp = editArray[j]
                      editArray[j] = editArray[j + 1];
                      editArray[j + 1] = temp;
                     isSwapped = true;
                  }
              }

              if (!isSwapped) {
                  break;
              }
          }
        
          setArray(editArray)
          console.log(array)
        }

        React.useEffect(()=>{
          console.log('Re-render')
        }, [array])
      
        return (
          <div className={classes.container}>
            <div>
            <form method="post" onSubmit={handleSubmit}>
                <p>Manipulate Bronya's Speed: </p>
                <input type='number' name="Speed"/>
                <button type="submit">Apply</button>
            </form>

            <div className={classes.container}>
              <p>Toughness Break:</p>
              <input type='checkbox' name="Toughness Break" onChange={handleBreak}></input>
            </div>

            <div className={classes.container}>
              <p>Imprisonment - Imaginary:</p>
              <input type='checkbox' name="Imprisonment" onChange={handleImprisonment}></input>
            </div>

            <div className={classes.container}>
              <p>Entanglement - Quantum:</p>
              <input type='checkbox' name="Entanglement"></input>
            </div>
            </div>
            <div>
              <CharCardsMapper
                TurnOrder = {array}/>
            </div>
          </div>
          );
      }
