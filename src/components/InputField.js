import React, {useState, useContext} from 'react'
import classes from './InputField.module.css'
import {InputFieldContext} from '../Contexts/InputFieldContext'
///
import CharInput from './CharInput'
import EnemyInput from './EnemyInput'
///
export default function InputField(props){
  
  const [array, setArray] = useState(props.TurnOrder)
 
  const {actionOrder, setActionOrder, formType, setFormType} = useContext(InputFieldContext)
  
        return (
          <div>
          {/* <h1>{form}</h1> */}
          {formType === 5 ? <EnemyInput/>:<></>}
          {formType === 1 || formType === 2 || formType === 3 || formType === 4 ? <CharInput/>:<></>}
          </div>
          );
      }
