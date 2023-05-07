export default function InputField(props){

  var TurnOrder = props.TurnOrder; 
        function handleSubmit(e) {
          // Prevent the browser from reloading the page
          e.preventDefault();
      
          // Read the form data
          const form = e.target;
          const formData = new FormData(form);
         
          // Or you can work with it as a plain object:
          const formJson = Object.fromEntries(formData.entries());
          console.log(formJson);

          //testing math
          let speed = parseInt(formJson.Speed);
          console.log("The speed is " + speed);

          //validation

          if(speed <= 0){
            console.log('error');
          }

          else{
            let AV = 10000/speed;
            if(AV-Math.floor(AV)>0){
                console.log('float');
                AV = Math.ceil(AV)
                console.log('AV is ' + AV)
                setArray(AV)
            }
            else{
                console.log('int');
                console.log('AV is ' + AV)
                setArray(AV)
            }
          }
        }

        function setArray(AV){
          TurnOrder[0].AV = AV
          bubbleSort(TurnOrder)
        }

        function bubbleSort(TurnOrder) {
          console.log('hi')
          console.log(TurnOrder[0].AV)
          console.log(TurnOrder[1].AV)
          console.log(TurnOrder[2].AV)
          console.log(TurnOrder[3].AV)

          var i, j;
          var len = TurnOrder.length;
        
          var isSwapped = false;
        
          for (i = 0; i < len; i++) {
        
              isSwapped = false;
        
              for (j = 0; j < len; j++) {
                  if (TurnOrder[j].AV > TurnOrder[j + 1].AV) {
                      var temp = TurnOrder[j].AV
                      TurnOrder[j].AV = TurnOrder[j + 1].AV;
                      TurnOrder[j + 1].AV = temp;
                      isSwapped = true;
                  }
              }
        
              // IF no two elements were swapped
              // by inner loop, then break 
              if (!isSwapped) {
                  break;
              }
          }
        
          // Print the array
          console.log(TurnOrder)
      }
        
      
        
      // calling the bubbleSort Function
      // bubbleSort(TurnOrder)
      
      
        return (
          <form method="post" onSubmit={handleSubmit}>
            <input type='number' name="Speed"/>
            {/* <input name="Gauge"/>
            <input name="AV"/> */}
            <button type="submit">Submit form</button>
          </form>
        );
      }
