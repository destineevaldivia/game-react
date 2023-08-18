

function Player (props) {
    return (
        <div className='player'> 
            <h2 className='score'> {props.name} Score: {props.score}</h2>
        </div>
    )
}

export default Player;