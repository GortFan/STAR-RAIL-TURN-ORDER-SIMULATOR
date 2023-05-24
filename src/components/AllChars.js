import {InputFieldContext} from '../Contexts/InputFieldContext'
import React, {useContext} from 'react'

import AllCharsCard from './AllCharsCard'
import classes from './AllChars.module.css'
//Imports for mapping
import MarchImg from '../resources/1001.png'
import DanImg from '../resources/1002.png'
import HimekoImg from '../resources/1003.png'
import WeltImg from '../resources/1004.png'
import KafkaImg from '../resources/1005.png'
import SilverwolfImg from '../resources/1006.png'
import ArlanImg from '../resources/1008.png'
import AstaImg from '../resources/1009.png'
import HertaImg from '../resources/1013.png'
import BronyaImg from '../resources/1101.png'
import SeeleImg from '../resources/1102.png'
import ServalImg from '../resources/1103.png'
import GepardImg from '../resources/1104.png'
import NatashaImg from '../resources/1105.png'
import PelaImg from '../resources/1106.png'
import ClaraImg from '../resources/1107.png'
import SampoImg from '../resources/1108.png'
import HookImg from '../resources/1109.png'
import CaelusPhysImg from '../resources/8001.png'
import StelleFireImg from '../resources/8004.png'
import RobotImg from '../resources/Monster_1013010.png'
import DeerImg from '../resources/Monster_2024010.png'
import BatImg from '../resources/Monster_9001030.png'

const CharData =[{
    type: 'C',
    name: "March",
    path: MarchImg,
    speed: 101,
    Gauge: 10000,
    AV: 99.00990099009901
}, 
{
    type: 'C',
    name: "Dan",
    path: DanImg,
    speed: 110,
    Gauge: 10000,
    AV: 90.90909090909091
}, 
{
    type: 'C',
    name: "Himeko",
    path: HimekoImg,
    speed: 96,
    Gauge: 10000,
    AV: 104.1666666666667
}, 
{
    type: 'C',
    name: "Welt",
    path: WeltImg,
    speed: 102,
    Gauge: 10000,
    AV: 98.03921568627451
}, 
{
    type: 'C',
    name: "Kafka",
    path: KafkaImg,
    speed: 103,
    Gauge: 10000,
    AV: 97.0873786407767
}, 
{
    type: 'C',
    name: "Silverwolf",
    path: SilverwolfImg,
    speed: 105,
    Gauge: 10000,
    AV: 95.23809523809524
}, 
{
    type: 'C',
    name: "Arlan",
    path: ArlanImg,
    speed: 102,
    Gauge: 10000,
    AV: 98.03921568627451
}, 
{
    type: 'C',
    name: "Asta",
    path: AstaImg,
    speed: 106,
    Gauge: 10000,
    AV: 94.33962264150943
}, 
{
    type: 'C',
    name: "Herta",
    path: HertaImg,
    speed: 100,
    Gauge: 10000,
    AV: 100
}, 
{
    type: 'C',
    name: "Bronya",
    path: BronyaImg,
    speed: 99,
    Gauge: 10000,
    AV: 101.010101010101
}, 
{
    type: 'C',
    name: "Seele",
    path: SeeleImg,
    speed: 115,
    Gauge: 10000,
    AV: 86.95652173913043
}, 
{
    type: 'C',
    name: "Serval",
    path: ServalImg,
    speed: 104,
    Gauge: 10000,
    AV: 96.15384615384615
}, 
{
    type: 'C',
    name: "Gepard",
    path: GepardImg,
    speed: 92,
    Gauge: 10000,
    AV: 108.695652173913
}, 
{
    type: 'C',
    name: "Natasha",
    path: NatashaImg,
    speed: 98,
    Gauge: 10000,
    AV: 102.0408163265306
}, 
{
    type: 'C',
    name: "Pela",
    path: PelaImg,
    speed: 105,
    Gauge: 10000,
    AV: 95.23809523809524
}, 
{
    type: 'C',
    name: "Clara",
    path: ClaraImg,
    speed: 90,
    Gauge: 10000,
    AV: 111.1111111111111
}, 
{
    type: 'C',
    name: "Sampo",
    path: SampoImg,
    speed: 102,
    Gauge: 10000,
    AV: 98.03921568627451
}, 
{
    type: 'C',
    name: "Hook",
    path: HookImg,
    speed: 94,
    Gauge: 10000,
    AV: 106.3829787234043
}, 
{
    type: 'C',
    name: "CaelusPhys",
    path: CaelusPhysImg,
    speed: 100,
    Gauge: 10000,
    AV: 100
}, 
{
    type: 'C',
    name: "StelleFire",
    path: StelleFireImg,
    speed: 100,
    Gauge: 10000,
    AV: 100
}
]

const EnemyData =[{
    type: 'E',
    id: Number(1),
    name: "Robot",
    path: RobotImg,
    speed: 101,
    Gauge: 10000,
    AV: 99.00990099009901
},
{
    type: 'E',
    id: Number(1),
    name: "Deer",
    path: DeerImg,
    speed: 101,
    Gauge: 10000,
    AV: 99.00990099009901
},
{
    type: 'E',
    id: Number(1),
    name: "Bat",
    path: BatImg,
    speed: 101,
    Gauge: 10000,
    AV: 99.00990099009901
},
]
export default function AllChars(){

    const {teamSelect, setTeamSelect} = useContext(InputFieldContext)
    return(
        <div className={classes.flexcontainer}>
        <div>
        <div className={classes.gridcontainer}>
            {CharData.map(e=><AllCharsCard key={e.name} type={e.type} name={e.name} path={e.path} speed={e.speed} Gauge={e.Gauge} AV={e.AV}/>)}
        </div>
        </div>
        <div>
        <div className={classes.gridcontainer}>
            {EnemyData.map(e=><AllCharsCard key={e.name} type={e.type} name={e.name} path={e.path} speed={e.speed} Gauge={e.Gauge} AV={e.AV}/>)}
        </div>
        </div>
        </div>
    )
}
