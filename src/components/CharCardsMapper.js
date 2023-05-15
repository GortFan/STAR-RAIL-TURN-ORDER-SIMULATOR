import CharCard from './CharCard'

export default function CharCardsMapper(props){
    return(
        <ul>
            {props.TurnOrder.map(e=><CharCard key={e.id} id={e.id} path={e.path} speed={e.speed} AV={e.AV} gauge={e.Gauge}/>)}
        </ul>
    )
}