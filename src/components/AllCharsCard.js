import {InputFieldContext} from '../Contexts/InputFieldContext'
import React, {useContext} from 'react'

import classes from './CharCards.module.css'

export default function AllCharsCard(props){
    const {actionOrder, setActionOrder, teamSelect, setTeamSelect} = useContext(InputFieldContext)
    const [isOn, setIsOn] = React.useState(true)
    let temp = [...teamSelect]
    //console.log(teamSelect)
    function handleClick(){
        console.log(props.type)
        if(props.type==='C'){
            let counter = 0 
            for(let i=0; i<teamSelect.length; i++){
                if(teamSelect[i].type==='C'){
                    counter = counter + 1
                    console.log('hi im on mars')
                }
            }
            if(counter===4){
                console.log('team slots are filled')
                if(isOn !== true){
                    let removeIndex = teamSelect.findIndex(object=>object.name===props.name)
                    temp.splice(removeIndex, 1)
                    setIsOn(!isOn)
                }
            }
            else{
                if(isOn === true){
                    temp.push(props)
                    setIsOn(!isOn)
                }
                if(isOn !== true){
                    let removeIndex = teamSelect.findIndex(object=>object.name===props.name)
                    temp.splice(removeIndex, 1)
                    setIsOn(!isOn)
                }
            }
        }
        if(props.type==='E'){
            console.log('is enemy')
            if(isOn !== true){
                let removeIndex = teamSelect.findIndex(object=>object.name===props.name)
                //console.log(removeIndex)
                temp.splice(removeIndex, 1)
                setIsOn(!isOn)
            }
            if(isOn === true){
                temp.push(props)
                setIsOn(!isOn)
            }
        }
        initialSort(temp)
    }
    
    function initialSort(turnOrder) {
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
        setTeamSelect(turnOrder)
      }
    

    return(
        <div className={classes.card} onClick={handleClick}>
            <img src={props.path} alt=''/>
        </div>
    ) 
}