export default function InputField(){
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
          let speed = parseInt(formJson.Speed)
          console.log(speed)

          //validation

          if(speed < 0){
            console.log('error')
          }

          else{
            let AV = 10000/speed
            if(AV-Math.floor(AV)>0){
                console.log('float')
            }
            else{
                console.log('int')
            }
            console.log(AV)
          }

        }
      
        return (
          <form method="post" onSubmit={handleSubmit}>
            <input type='number' name="Speed"/>
            {/* <input name="Gauge"/>
            <input name="AV"/> */}
            <button type="submit">Submit form</button>
          </form>
        );
      }
