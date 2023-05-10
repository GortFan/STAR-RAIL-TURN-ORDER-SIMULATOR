import CharCardsMapper from './CharCardsMapper'
import React, {useState} from 'react'
import classes from './InputField.module.css'
export default function InputField(props){

  const [array, setArray] = useState(props.TurnOrder)
  const [selected, setSelected] = useState(false);
  const [val, setVal] = useState();

        function handleSubmit(e) {
          // Prevent the browser from reloading the page
          e.preventDefault();
      
          const form = e.target;
          const formData = new FormData(form);
         
          const formJson = Object.fromEntries(formData.entries());

          //validation
          if(formJson.Speed <= 0 || isNaN(formJson.Speed) || formJson.Speed > 99999){
            alert('invalid input');
          }
          else{
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

        //Logic for disabling and re-enabling checkboxes 
        function handleChange(e){
          setSelected(!selected)
          setVal(e.target.value)
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

        React.useEffect(()=>{
        }, [array])

        return (
          <div className={classes.container}>

            <div>
            <form method="post" onSubmit={handleSubmit}>
              <p className={classes.parameters}>Change Speed: </p>
              <input type='number' name="Speed"/>

              <div className={classes.container}>
              <p className={classes.parameters}>Break:</p>
              <input type='checkbox' name ='Break' value='Break' onChange={handleChange} disabled={selected === true && val !== 'Break'}></input>
              </div>

              <div className={classes.container}>
              <p className={classes.parameters}>Imprisonment:</p>
              <input type='checkbox' name ='Imprisonment' value='Imprisonment' onChange={handleChange} disabled={selected === true && val !== 'Imprisonment'}></input>
              </div>

              <div className={classes.container}>
              <p className={classes.parameters}>Entanglement:</p>
              <input type='checkbox' name ='Entanglement' value='Entanglement' onChange={handleChange} disabled={selected === true && val !== 'Entanglement'}></input>
              </div>

              <button type="submit">Apply</button>
            </form>
            </div>

            <div>
              <CharCardsMapper
                TurnOrder = {array}/>
            </div>

          </div>
          );
      }
