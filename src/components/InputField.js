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

          let speed = parseInt(formJson.Speed);

          //validation

          if(speed <= 0 || isNaN(speed)){
            alert('invalid input');
          }

          else{
            let AV = 10000/speed;
            if(AV-Math.floor(AV)>0){
                AV = Math.ceil(AV)
                setOrder(AV)
            }
            else{

                setOrder(AV)
            }
          }
        }

        function setOrder(AV){
          var editArray = [...array]
          var bronyaIndex = editArray.findIndex(object => object.id === 1)
          editArray[bronyaIndex].AV = AV
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
        }

        React.useEffect(()=>{
          console.log('Re-render')
        }, [array])
      
      
        return (
          <div>
            <form method="post" onSubmit={handleSubmit}>
              <input type='number' name="Speed"/>
              <button type="submit">Submit form</button>
            </form>
            <CharCardsMapper
              TurnOrder = {array}/>
          </div>
          );
      }
