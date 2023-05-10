import CharCardsMapper from './CharCardsMapper'
import React, {useState} from 'react'
import classes from './InputField.module.css'
export default function InputField(props){

          // if(val === 'Break'){
          //   editArray[enemyIndex].AV = (2500+10000)/editArray[enemyIndex].speed
          //   console.log(editArray[enemyIndex].AV)
          // }
          // if(val === 'Imprisonment'){
          //   editArray[enemyIndex].AV = (10000+(10000*0.3*(1+0.2)))/editArray[enemyIndex].speed
          // }
          // if(val === 'Entanglement'){
          // }
          // if(val===null){
          //   console.log('hi')
          //   editArray[enemyIndex].AV = 10000/editArray[enemyIndex].speed
          //   console.log(editArray[enemyIndex].AV)
          // }
          
  const [array, setArray] = useState(props.TurnOrder)
<<<<<<< Updated upstream
  console.log('default: ')
  console.log(array)
=======
  const [selected, setSelected] = useState(false);
  const [val, setVal] = useState();

>>>>>>> Stashed changes
        function handleSubmit(e) {
          // Prevent the browser from reloading the page
          e.preventDefault();
      
          const form = e.target;
          const formData = new FormData(form);
         
          const formJson = Object.fromEntries(formData.entries());
<<<<<<< Updated upstream
          console.log(formJson)
          let speed = parseInt(formJson.Speed);
=======
>>>>>>> Stashed changes

          //validation
          if(formJson.Speed <= 0 || isNaN(formJson.Speed) || formJson.Speed > 99999){
            alert('invalid input');
          }
          else{
<<<<<<< Updated upstream
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
=======
            Calc(formJson)
          }
        }

        function Calc(formJson){
          //Character Math
          let editArray = [...array]
          let charIndex = editArray.findIndex(object => object.id === 1)
          editArray[charIndex].speed = formJson.Speed
          let charSpeed = editArray[charIndex].speed
          let AV = Math.ceil(10000/charSpeed)
          editArray[charIndex].AV = AV

          //Enemy Math
          let enemyIndex = editArray.findIndex(object => object.id === 5)
          if(formJson.Break === 'Break'){
            let enemySpeed = editArray[enemyIndex].speed 
            editArray[enemyIndex].AV = Math.ceil((10000+2500)/enemySpeed)
          }
          if(formJson.Imprisonment === 'Imprisonment'){
            let enemySpeed = (editArray[enemyIndex].speed)*(1-0.1)
            editArray[enemyIndex].AV = Math.ceil((10000)/enemySpeed)
            console.log(editArray[enemyIndex].AV)
          }
          if(formJson.Entanglement === 'Entanglement'){
            let enemySpeed = editArray[enemyIndex].speed
            editArray[enemyIndex].AV = Math.ceil((10000+2000)/enemySpeed)
          }
          if(formJson.Break === undefined && formJson.Imprisonment === undefined && formJson.Entanglement === undefined){
            editArray[enemyIndex].AV = 80
          }
          console.log(formJson.Imprisonment)
          bubbleSort(editArray)
        }

        function handleChange(e){
          setSelected(!selected)
          setVal(e.target.value)
        }
>>>>>>> Stashed changes

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
        }

        React.useEffect(()=>{
<<<<<<< Updated upstream
          console.log('Re-render')
        }, [array])
      
=======
          console.log('rr')
        }, [array])

>>>>>>> Stashed changes
        return (
          <div className={classes.container}>

            <div>
            <form method="post" onSubmit={handleSubmit}>
<<<<<<< Updated upstream
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
=======
              <p>Change Speed: </p>
              <input type='number' name="Speed"/>

              <div className={classes.container}>
              <p>Break:</p>
              <input type='checkbox' name ='Break' value='Break' onChange={handleChange} disabled={selected === true && val !== 'Break'}></input>
              </div>

              <div className={classes.container}>
              <p>Imprisonment:</p>
              <input type='checkbox' name ='Imprisonment' value='Imprisonment' onChange={handleChange} disabled={selected === true && val !== 'Imprisonment'}></input>
              </div>

              <div className={classes.container}>
              <p>Entanglement:</p>
              <input type='checkbox' name ='Entanglement' value='Entanglement' onChange={handleChange} disabled={selected === true && val !== 'Entanglement'}></input>
              </div>

              <button type="submit">Apply</button>
            </form>
            </div>

>>>>>>> Stashed changes
            <div>
              <CharCardsMapper
                TurnOrder = {array}/>
            </div>

          </div>
          );
      }
