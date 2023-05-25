import classes from './InputForm.module.css'
import { useContext } from 'react'
import { InputFieldContext } from '../Contexts/InputFieldContext'
//A general form that wil be applied to all participants in the battle
export default function InputForm(props){
    console.log(props)
    const {actionOrder, setActionOrder, actionHistory, setActionHistory} = useContext(InputFieldContext)
    console.log(actionOrder)
    function editSpeed(e){
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())
        let newSpeed = Number(formJson.Speed)
        //Character Math
        let editActionOrder = [...actionOrder]
        editActionOrder[editActionOrder.findIndex(object => object.name === props.name)].speed = newSpeed
        // editArray[editArray.findIndex(object => object.name === props.name)].AV = editArray[editArray.findIndex(object => object.name === props.name)].Gauge/editArray[editArray.findIndex(object => object.name === props.name)].speed
        // bubbleSort(editArray)
        // let temp = actionHistory
        // let action = 'Changed ' + props.name +  "'s SPEED to " + formJson.Speed
        // temp.push(action)
        // setActionHistory(temp)
      }

    function bubbleSort(turnOrder) {
    let i, j;
    let len = turnOrder.length;
    
    let isSwapped = false;
    
        for (i = 0; i < len; i++) {
    
        isSwapped = false;
    
        for (j = 0; j < len-1; j++) {
            if (turnOrder[j].AV > turnOrder[j + 1].AV) {
                let temp = turnOrder[j]
                turnOrder[j] = turnOrder[j + 1];
                turnOrder[j + 1] = temp;
                isSwapped = true;
            }
        }

        if (!isSwapped) {
            break;
        }
    }

    setActionOrder(turnOrder)
    }
    return(
        <div>
        <div className={classes.flexcontainer}>
            <form method='post' onSubmit={editSpeed}>
                <p>Change Speed</p>
                <input type='float' name="Speed"/>
                <button type='submit'>Submit</button>
            </form>
            <form method='post'>
                <p>Add or Subtract Speed</p>
                <input type='float'/>
                <button type='submit'>Submit</button>
            </form>
            <form method='post'>
                <p>Action Advance (%,idk)</p>
                <input type='float'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
        </div>
    )
}