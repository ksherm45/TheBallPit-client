
import {Button} from  'react-bootstrap' // make this into material ui after the structure is set up

function AddForm(props){

	const {btnSubmit} = props
	return (
		<form onSubmit={btnSubmit}>
			<input  name="name"  type="text"  placeholder="Create Ball"/>
			<input  name="description"  type="text"  placeholder="Enter desc"/>
			<Button  type="submit"  >Submit</Button>
		</form>
	)
}

export default AddForm