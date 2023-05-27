import classes from './InputForm.module.css'
import { useContext } from 'react'
import { InputFieldContext } from '../Contexts/InputFieldContext'
//A general form that wil be applied to all participants in the battle
export default function InputForm(props){
    const {turn, actionOrder, setActionOrder, actionHistory, setActionHistory} = useContext(InputFieldContext)

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

    function changeSpeed(e){
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())
        let newSpeed = Number(formJson.Speed)

        //Character Math
        let editActionOrder = actionOrder.map((object, index)=>{
            if(object.name === props.name){
                return{
                    ...object,
                    speed: newSpeed,
                    AV: object.Gauge / newSpeed
                }
            }
            return object;
        })
        Sort(editActionOrder)
        let newAction = ['Turn ' + turn + ': Changed ' + props.name +  "'s SPEED to " + newSpeed]
        setActionHistory([...actionHistory, newAction])
      }

    function modifySpeed(e){
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())

        let modifier = Number(formJson.Modifier)
        //Character Math
        let editActionOrder = actionOrder.map((object, index)=>{
            if(object.name === props.name){
                return{
                    ...object,
                    speed: object.speed + modifier,
                    AV: object.Gauge / (object.speed + modifier)
                }
            }
            return object;
        })
        Sort(editActionOrder)
        let newAction = ['Turn ' + turn + ': Added ' + formJson.Modifier + " SPEED to " + props.name]
        setActionHistory([...actionHistory, newAction])
      }

    function modifyAG(e){
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())

        let AdvanceForward = Number(formJson.reduceAG)
        let ActionDelay = Number(formJson.addAG)
        
        let OldGauge = props.Gauge
        let OldAV = props.AV

        let editActionOrder = actionOrder.map((object, index)=>{
            if(object.name === props.name){
                return{
                    ...object,
                    Gauge: Math.max(0,object.Gauge - (10000*(AdvanceForward-ActionDelay))),
                }
            }
            return object;
            
        })
        editActionOrder = editActionOrder.map((object, index)=>{
            if(object.name === props.name){
                return{
                    ...object,
                    AV: object.Gauge / object.speed
                }
            }
            return object;
            
        })
        
        Sort(editActionOrder)

        let newAction = ['Turn ' + turn + ': Using Advance Forward of: ' + formJson.reduceAG + " and Action Delay of: " + formJson.addAG + ", modified Gauge and AV of: " + props.name
        + ". Previous Gauge: " + OldGauge + " New Gauge: " + editActionOrder[editActionOrder.findIndex(object=>object.name===props.name)].Gauge + " Previous AV: " + OldAV + 
        " New AV: " + editActionOrder[editActionOrder.findIndex(object=>object.name===props.name)].AV]

        setActionHistory([...actionHistory, newAction])
    }

    function handleRemove(){
        setActionOrder(actionOrder.filter(object=>object.name !== props.name))
        let newAction = ['Turn ' + turn + ': ' + props.name + ' has been removed from the battle.']
        setActionHistory([...actionHistory, newAction])
    }


    return(
        <div>
        <div className={classes.flexcontainer}>
            <form method='post' onSubmit={changeSpeed}>
                <p>Speed</p>
                <input type='float' name="Speed"/>
                <button type='submit'>Submit</button>
            </form>
            <form method='post' onSubmit={modifySpeed}>
                <p>+/- Speed</p>
                <input type='float' name="Modifier"/>
                <button type='submit'>Submit</button>
            </form>
            <form method='post' onSubmit={modifyAG}>
                <p>AG Advance/Delay</p>
                <input type='float' name="reduceAG"/>
                <input type='float' name="addAG"/>
                <button type='submit'>Submit</button>
            </form>
            <div>
            <button onClick={handleRemove}>Remove from battle</button>
            </div>
        </div>
        </div>
    )
}