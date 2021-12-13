import React from 'react'
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

function ProfilePage(props){

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
                        <div key={elem._id}>
                            <Link to={`/ball/${elem._id}`}>{elem.name}</Link>
                        </div>    
                    )
                })
            }
        </div>
    )
}
export default ProfilePage