import { useContext } from "react"
import {InputFieldContext} from '../Contexts/InputFieldContext'
import classes from './ActionController.module.css'

export default function ActionController(){
    
    const{turn, setTurn, teamSelect, actionOrder, setActionOrder, actionHistory,setActionHistory} = useContext(InputFieldContext)

    function Sort(turnOrder) {
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
    function handleAdvance(){

        let newAction = []

        let editActionOrder = JSON.parse(JSON.stringify(actionOrder))

        let multiplier = editActionOrder[1].AV
        //1st element
        editActionOrder[0].Gauge = 10000
        editActionOrder[0].AV = editActionOrder[0].Gauge/editActionOrder[0].speed

        //2nd element
        editActionOrder[1].Gauge = 0
        editActionOrder[1].AV = 0

        //other elements
        for(let i=2; i<editActionOrder.length; i++){
            editActionOrder[i].Gauge = editActionOrder[i].Gauge - (editActionOrder[i].speed*multiplier)
            editActionOrder[i].AV = editActionOrder[i].Gauge/editActionOrder[i].speed
        }
        
        newAction.push("Turn " + turn + ": " + editActionOrder[0].name + " has moved. ")

        for(let i = 1; i < editActionOrder.length; i++){
            newAction.push(editActionOrder[i].name + " => Prev AV: " + actionOrder[i].AV + " Current AV: " + editActionOrder[i].AV)
        }

        newAction.push('=======================================================================================')

        console.log(newAction)
        setActionHistory([...actionHistory, newAction])
        setTurn(turn + 1)
        Sort(editActionOrder)
    }
    
    function handleReset(){
        setActionOrder(teamSelect)
        setActionHistory([])
        setTurn(1)
    }
    
    return(
        <div>
            <button className={classes.turnBtn} onClick={handleAdvance}>Advance Turn</button>
            <button className={classes.turnBtn} onClick={handleReset}>Reset</button>
        </div>
    )
}