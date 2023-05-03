import CharCard from './CharCard'

export default function CharCardsMapper(props){
    console.log(props)
    return(
        <ul>
            {props.TurnOrder.map(e=><CharCard key={e.id} path={e.path}/>)}
        </ul>
    )
}