import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'
import Button from '@mui/material/Button';
require('../App.css')


function MyNav(props) {

const {user, Logout} = props

return (
	<Navbar className='Navbar'  bg="dark"  expand="lg">
		
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
				<Link className='Link' to="/homepage">Home</Link>    
				<Link  className='Link' to="/add-form">Add Ball</Link>
				<Link className='Link' to="/profile">Profile</Link>
				</Nav>
				</Navbar.Collapse>
				<div><h1 className='title'> THE BALL PIT</h1></div>
				<div>

{ !user ? (
				<div>
						<Link  className='Link' to="/signin">SignIn</Link>
						<Link className='Link'  to="/signup">SignUp</Link>
					</div> ) : (

						<Button  variant="contained" color="primary" onClick={Logout}>Logout</Button> )
}
						</div>

		
	</Navbar>
	)
}
export default MyNav