import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'

function EditForm(props) {
    const {ballId} = useParams()

    const [ballDetail, setBallDetail] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`http://localhost:5005/api/balls/${ballId}`)
           setBallDetail(response.data)
        }
        getData()
    }, [ballId])

    if(!ballDetail) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnEdit} = props
    return (
        <div>
            <h3>Edit Component</h3>

            <form onSubmit={(event) => { btnEdit(event, ballDetail._id)  }} >
            
            {/* event is passed automatically when 'btnEdit' is invoked by the browser */}
            {/* <form onSubmit={btnEdit} > */}

                <input defaultValue={ballDetail.name} name="name"  type="text"  placeholder="Enter name"/>
                <input defaultValue={ballDetail.description} name="description"  type="text"  placeholder="Enter desc"/>
                <button  type="submit"  >Edit</button>
		    </form>
        </div>
    )
}

export default EditForm