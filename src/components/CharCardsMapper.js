import CharCard from './CharCard'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import React, {useContext} from 'react'

export default function CharCardsMapper(props){
    const {actionOrder, setActionOrder, formType, setFormType} = useContext(InputFieldContext)
    console.log(actionOrder)
    return(

        <ul>
            {actionOrder.map(e=><CharCard key={e.name} path={e.path} speed={e.speed} AV={e.AV} gauge={e.Gauge}/>)}
        </ul>
    )
}