import './Estilos/App.css'
import './Estilos/EstilosSugerencias.css'
import './Estilos/EstilosBuscador.css'
import './Estilos/EstilosLeft.css'
import { TwiterFollowCard } from './Components/TwuiterFollowCard.jsx'
import { Navbar } from './Components/Buscador.jsx'
import { ComponentLeft } from './Components/ComponenteIZquierdo.jsx'
import { Useer } from './Components/User.jsx'

export function App() {
    return (
        <>
            <div className='Container-grid'>
                <div className='Container-left'>
                    <div className='Container-left-main'>
                        <ComponentLeft />
                        <Useer Name="Juan David" username="JuanitoAlimaña"></Useer>
                    </div>
                </div>
                <div className='Container-Center'>
                    <div className='Container-Navbar'>
                        <div className='Navbar'>
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div className='container-Follow'>
                    <h1 className='Titulo-Sugerencias'>Sugerencias</h1>
                    <TwiterFollowCard Name="Juan David" username="JuanitoAlimaña" />
                    <TwiterFollowCard Name="Fabio" username="FabioLomas" />
                    <TwiterFollowCard Name="Raquel" username="Requlita" />
                    <TwiterFollowCard Name="Rosa" username="Rosita" />
                </div>

            </div>
        </>
    )
}