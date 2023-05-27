import CharCard from './CharCard'
import {InputFieldContext} from '../Contexts/InputFieldContext'
import React, {useContext} from 'react'
import InputForm from './InputForm'
import classes from './Mapper.module.css'

export default function CharCardsMapper(props){
    const {actionOrder} = useContext(InputFieldContext)
    return(
        <div>
            {actionOrder.map(e=>
                <div>
                    <div className={classes.flexcontainer}>
                        <CharCard key={e.name} path={e.path} speed={e.speed} AV={e.AV} gauge={e.Gauge}/>
                        <InputForm name={e.name} speed={e.speed} AV={e.AV} Gauge={e.Gauge}/>
                    </div>
                </div>)}
        </div>
    )
}