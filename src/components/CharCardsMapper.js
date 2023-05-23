import CharCard from './CharCard'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import React, {useContext} from 'react'

export default function CharCardsMapper(props){
    const {actionOrder, setActionOrder, formType, setFormType} = useContext(InputFieldContext)
    //console.log(props)

    return(
        <ul>
            {actionOrder.map(e=><CharCard key={e.id} id={e.id} path={e.path} speed={e.speed} AV={e.AV} gauge={e.Gauge}/>)}
        </ul>
    )
}