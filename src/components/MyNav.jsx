import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'

function MyNav(props) {

const {Logout} = props

return (
	<Navbar  bg="light"  expand="lg">
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
				<Link  to="/homepage">Balls</Link>    
				<Link  style={{marginLeft: '10px'}}  to="/add-form">Add Ball</Link>
				<button onClick={Logout}>Logout</button>
				<>
						<Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
						<Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
						</>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
export default MyNav