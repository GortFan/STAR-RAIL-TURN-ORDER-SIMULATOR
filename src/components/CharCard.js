import classes from './CharCards.module.css'

export default function CharCards(props){
    return(
        <div className={classes.container}>
            <div className={classes.card}>
            <img src={props.path} alt=''/>
            </div>
            <div className={classes.valcontainer}>
                <div className={classes.values}>Speed: {props.speed}</div>
                <div className={classes.values}>AV: {props.AV}</div>
            </div>
        </div>

    )
}
