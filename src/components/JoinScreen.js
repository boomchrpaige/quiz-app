function JoinScreen({start})  {
    return (
        <div className="join-screen">
            <h2>Join trivia</h2>
            <p>You will have 10 seconds to mark your answer for each of the following trivia questions. <br/><br></br>
                Be sure to highlight your answer in blue before the timer runs out. <br/><br></br>
                The player with the highest percentage correct in the shortest time wins.<br/><br></br>
                Good luck!</p>
            <button onClick={start}>Start</button>
        </div>
    )
    }
export default JoinScreen;