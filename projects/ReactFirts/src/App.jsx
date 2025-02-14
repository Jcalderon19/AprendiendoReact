import './App.css'
import { TwiterFollowCard } from './TwuiterFollowCard.jsx'

export function App(){
    return (
        <>
        <div className='container-Follow'>
            <div>
            <TwiterFollowCard  Name="Juan David" username="JuanitoAlimaña" />
            <TwiterFollowCard  Name="Fabio" username="FabioLomas" />
            <TwiterFollowCard  Name="Raquel" username="Requlita" />
            <TwiterFollowCard  Name="Rosa" username="Rosita" />
            </div>
        </div>
        </>
    )
}