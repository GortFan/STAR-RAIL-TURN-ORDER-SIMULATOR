import classes from './CharCards.module.css'
import img from '../resources/1101.png'

export default function CharCards(){
    return(
        <div className={classes.card}>
            <img src={img} alt='' className={classes.img}/>
        </div>
    )
}