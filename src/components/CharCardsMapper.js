import CharCard from './CharCard'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import React, {useContext} from 'react'

export default function CharCardsMapper(props){
    const {form, setForm} = useContext(InputFieldContext)
    console.log(form)
    React.useEffect(()=>{console.log('re-render')},[form])

    return(
        <ul>
            {props.TurnOrder.turnOrder.map(e=><CharCard key={e.id} id={e.id} path={e.path} speed={e.speed} AV={e.AV} gauge={e.Gauge}/>)}
        </ul>
    )
}