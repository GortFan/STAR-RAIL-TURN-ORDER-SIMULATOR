import CharCardsMapper from './CharCardsMapper'
import React, {useState} from 'react'
import classes from './InputField.module.css'
export default function InputField(props){

  const [array, setArray] = useState(props.TurnOrder)
  const [selected, setSelected] = useState(false);
  const [val, setVal] = useState();

        function changeSpeed(e) {
          //validation
          if(e.target.value <= 0 || isNaN(e.target.value) || e.target.value > 999){
            alert('invalid input');
          }
          else{
            calcChar(e.target.value)
          }
        }

        function calcChar(speed){
          //Character Math
          let editArray = [...array]
          let charIndex = editArray.findIndex(object => object.id === 1)
          editArray[charIndex].speed = speed
          editArray[charIndex].AV = Math.ceil(10000/editArray[charIndex].speed)
          bubbleSort(editArray)
        }

        function calcEnemy(debuff){
          let editArray = [...array]
          let enemyIndex = editArray.findIndex(object => object.id === 5)
          if(debuff === 'Break'){
            editArray[enemyIndex].Gauge = 10000+(10000*(0.25))
            editArray[enemyIndex].AV = Math.ceil(editArray[enemyIndex].Gauge/editArray[enemyIndex].speed )
          }
          if(debuff === 'Imprisonment'){
            editArray[enemyIndex].speed = Math.ceil((editArray[enemyIndex].speed)*(1-0.1))
            editArray[enemyIndex].Gauge = 10000+(10000*(0.3*(1+0.15))) //0.15 is break effect %
            editArray[enemyIndex].AV = Math.ceil(editArray[enemyIndex].Gauge/editArray[enemyIndex].speed)
          }
          if(debuff === 'Entanglement'){
            editArray[enemyIndex].Gauge = 10000+(10000*(0.3*(1+0.15))) //0.15 is break effect %
            editArray[enemyIndex].AV = Math.ceil(editArray[enemyIndex].Gauge/editArray[enemyIndex].speed)
          }
          // if(selected === true){
          //   editArray[enemyIndex].AV = 80
          //   editArray[enemyIndex].Gauge = 10000
          //   editArray[enemyIndex].speed = 125
          // }
          bubbleSort(editArray)
        }

        function handleAdvance(){
          let editArray = [...array]
          console.log(editArray[0].AV)
          let multiplier = editArray[0].AV
          //1st element
          editArray[0].Gauge = 10000
          editArray[0].AV = Math.ceil(editArray[0].Gauge/editArray[0].speed)
          if(editArray[0].id===5){
            console.log('reset enemy')
            editArray[0].speed=125
          }
          //2nd element
          editArray[1].Gauge = editArray[1].Gauge - (editArray[1].speed*multiplier)
          editArray[1].AV = Math.ceil(editArray[1].Gauge/editArray[1].speed)
          //3rd element
          editArray[2].Gauge = editArray[2].Gauge - (editArray[2].speed*multiplier)
          editArray[2].AV = Math.ceil(editArray[2].Gauge/editArray[2].speed)
          //4th element
          editArray[3].Gauge = editArray[3].Gauge - (editArray[3].speed*multiplier)
          editArray[3].AV = Math.ceil(editArray[3].Gauge/editArray[3].speed)
          //5th element
          editArray[4].Gauge = editArray[4].Gauge - (editArray[4].speed*multiplier)
          editArray[4].AV = Math.ceil(editArray[4].Gauge/editArray[4].speed)
          bubbleSort(editArray)
        }

        function handleReset(){
          let editArray = [...array]
          //1st element
          editArray[0].Gauge = 10000
          editArray[0].AV = Math.ceil(editArray[0].Gauge/editArray[0].speed)
          //2nd element
          editArray[1].Gauge = 10000
          editArray[1].AV = Math.ceil(editArray[1].Gauge/editArray[1].speed)
          //3rd element
          editArray[2].Gauge = 10000
          editArray[2].AV = Math.ceil(editArray[2].Gauge/editArray[2].speed)
          //4th element
          editArray[3].Gauge = 10000
          editArray[3].AV = Math.ceil(editArray[3].Gauge/editArray[3].speed)
          //5th element
          editArray[4].Gauge = 10000
          editArray[4].AV = Math.ceil(editArray[4].Gauge/editArray[4].speed)
          bubbleSort(editArray)
        }

        //Logic for disabling and re-enabling checkboxes 
        function handleChange(e){
          setSelected(!selected)
          setVal(e.target.value)
          calcEnemy(e.target.value)
        }

        //Sorting array by AV
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


        return (
          <div className={classes.container}>

            <div className={classes.formflex}>
              <div>
              
              <div className={classes.speedflex}>
              <p className={classes.parameters}>Change Speed</p>
              <input type='number' name="Speed" onChange={changeSpeed}/>
              </div>

              <div className={classes.delayflex}>
              <input className={classes.checkbox} type='checkbox' name ='Break' value='Break' onChange={handleChange} disabled={selected === true && val !== 'Break'}></input>
              <p className={classes.parameters}>Break</p>
              </div>

              <div className={classes.delayflex}>
              <input className={classes.checkbox} type='checkbox' name ='Imprisonment' value='Imprisonment' onChange={handleChange} disabled={selected === true && val !== 'Imprisonment'}></input>
              <p className={classes.parameters}>Imprisonment</p>
              </div>

              <div className={classes.delayflex}>
              <input className={classes.checkbox} type='checkbox' name ='Entanglement' value='Entanglement' onChange={handleChange} disabled={selected === true && val !== 'Entanglement'}></input>
              <p className={classes.parameters}>Entanglement</p>
              </div>

              <div className={classes.flexbtn}>
              <div>
              <button onClick={handleAdvance}>Advance Turn</button>
              <button onClick={handleReset}>Reset</button>
              </div>
              </div>
              
              </div>

            </div>

            <div>
              <CharCardsMapper
                TurnOrder = {array}/>
            </div>

          </div>
          );
      }
