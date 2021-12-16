import React from 'react'
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

function ProfilePage(props){

    const {user} = props
    console.log('hellooo', user)

    if(!user) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
        <div>
            <p>BallList Component</p>
            {
                user.addedBall ? (
                user.addedBall.map((elem) => {
                    return (
                        <div key={elem.id}>
                            
                            <h4>{elem.name}</h4>
                            <h4>{elem.desc}</h4>
                        </div>    
                    )
                }))
                : null
            }
        </div>
    )
}
export default ProfilePage