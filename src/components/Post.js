import React from 'react'
import '../styles/App.css'

function Post() {

    return (
        <div className="Post-Section">
            <div>
            <p className="Post-Title">Pineapple on Pizza is terrible</p>
            </div>
            <div className="Post-Body">
                <div className="Content-Wrapper">
                <p id="Content">I don't think pineapple on pizza should exist. Whoever thought of that is probably in jail for 
                    culinary crimes. 
                    <br/>Bear with me here, it's just not a good combination. It's like having tangerine on quesadillas: doesn't work, it's a complete
                    sacrilege but even worse because it's pizza we're talking about. Pineapple should only go on salads.
                    <br/>And by the way, have you seen Little Caesar's so-called 4-flavored pizza? One fourth of that pizza is pepperoni. With pineapple.
                    Are you kidding? Ham and pineapple was already crazy, but PEPPERONI and PINEAPPLE??? 
                    I cannot exagerate this, it is an abomination. 
                    <br/>Anyways my mom is calling me for dinner so I have to go. Bye! 
                </p>
                </div>
                <div className="Count-Wrapper">
                    <p>Comments: 0</p>
                </div>
            </div>
        </div>
    )
}

export default Post;