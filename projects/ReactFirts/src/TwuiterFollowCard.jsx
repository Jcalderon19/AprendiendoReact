import { useState } from "react"
export function TwiterFollowCard({Name,username}){
    //estado interno
    const [isfollow,setFollowing] = useState(false)
    const text = isfollow ? 'Siguiendo': 'Seguir'
    const buttonClas = isfollow ? 'Container-x-Seguir is-follow':'Container-x-Seguir'
    const handelclic= () =>{
        setFollowing(!isfollow)
    }
    return (
        <article className='Container-x'>
        <header className='Container-x-header'>
            <img className='Container-x-Avatar' alt="avatar de Juan David" src="https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg" />
            <div>
                <strong className='Container-x-Avatar-Name'>{Name}</strong>
                <span className='Container-x-Avatar-User'>@{username}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClas} onClick={handelclic}>{text}</button>
        </aside>
       </article>
    )
}