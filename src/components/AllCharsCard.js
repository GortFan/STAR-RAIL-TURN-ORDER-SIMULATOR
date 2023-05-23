import {InputFieldContext} from '../Contexts/InputFieldContext'
import React, {useContext} from 'react'

import classes from './CharCards.module.css'

export default function AllCharsCard(props){

    const {actionOrder, setActionOrder, teamSelect, setTeamSelect} = useContext(InputFieldContext)
    const [isOn, setIsOn] = React.useState(true)

    function handleClick(){
        console.log(props)
        let temp = [...teamSelect]
        if(isOn === true){
            if(temp.length === 4){
                console.log('team is full')
            }
            else{
                temp.push(props)
            }
            setIsOn(!isOn)
        }
        if(isOn !== true){
            let removeIndex = teamSelect.findIndex(object=>object.id===props.name)
            temp.splice(removeIndex, 1)
            setIsOn(!isOn)
        }
        setTeamSelect(temp)
        setActionOrder(teamSelect)

    }

    return(
        <div className={classes.card} onClick={handleClick}>
            <img src={props.path}/>
        </div>
    ) 
}