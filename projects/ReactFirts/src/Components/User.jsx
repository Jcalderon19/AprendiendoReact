export function Useer({Name,username}) {
    return (
        <article className='Container-x'>
            <header className='Container-x-header'>
                <img className='Container-x-Avatar' alt="avatar de Juan David" src="https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg" />
                <div>
                    <strong className='Container-x-Avatar-Name'>{Name}</strong>
                    <span className='Container-x-Avatar-User'>@{username}</span>
                </div>
            </header>
        </article>
    )
}
