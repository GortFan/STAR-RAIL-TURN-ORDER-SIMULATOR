import classes from './CharCards.module.css'

export default function CharCards(props){
    return(
        <div className={classes.card}>
            <img src={props.path} alt=''/>
        </div>
    )
}