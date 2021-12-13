import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'
import Button from '@mui/material/Button';


function MyNav(props) {

const {Logout} = props

return (
	<Navbar  bg="light"  expand="lg">
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
				<Link  to="/homepage">Home</Link>    
				<Link  style={{marginLeft: '10px'}}  to="/add-form">Add Ball</Link>
				<Link style={{marginLeft: '10px'}} to="/profile">Profile</Link>
			
				<>
						<Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
						<Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
						<Button  variant="contained" color="primary" onClick={Logout}>Logout</Button>
						</>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
export default MyNav