import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function ErrorPage(){

    return(

<React.Fragment>
<div>
<h1>You have wandered too far, lets head on home</h1>
</div>

     
      
          <Link to="/homepage" >Home
         
          </Link>
      
</React.Fragment>
    )
}


export default ErrorPage