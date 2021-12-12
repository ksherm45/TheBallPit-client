import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'

function MyNav(props) {

const {Logout} = props

return (
	<Navbar  bg="light"  expand="lg">
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
				<Link  to="/">Balls</Link>
				<Link  style={{marginLeft: '10px'}}  to="/add-form">Add Ball</Link>
				<button onClick={Logout}>Logout</button>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
export default MyNav