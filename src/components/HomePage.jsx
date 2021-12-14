import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
require('../App.css')


function HomePage(props) {

    const {balls} = props

    if(!balls.length) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
        <div>
            <p>BallList Component</p>
            {
                balls.map((elem) => {
                    return (
                        <div key={elem._id} className = "BallDecoraction"  >
                            <Link to={`/ball/${elem._id}`}>{elem.name}</Link>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default HomePage