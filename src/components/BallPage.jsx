import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'

function BallPage(props) {
    // We get this 'ballId' from the <Route path="/ball/:ballId "> we defined in App.js
    const {ballId} = useParams()

    const [ballPage, setballPage] = useState(null)

    // This will run just ONCE after the component has mounted
    useEffect(() => {
        const getData = async () => {
           // Fetching info for a single todo  
           let response = await axios.get(`http://localhost:5005/api/ball/${ballId}`)
           setballPage(response.data)
        }
        getData()
    }, [ballId])

    if(!ballPage) {
        return <Spinner animation="grow" variant="dark" />
    }

    const {btnDelete, btnComment} = props


    return (
        <div>
            <h2>Ball Detail Component</h2>
            <h4>Name: {ballPage.name}</h4>
            <h4>Desc: {ballPage.description}</h4>
            <button>
                <Link to={`/ball/${ballPage._id}/edit`} >Edit</Link>
            </button>
            <form onSubmit={btnComment}>
			<input  name="comment"  type="text"  placeholder="Enter Your Comment"/>
		

			<button  type="submit"  >Submit</button>
		</form>

            <button onClick={() => { btnDelete(ballPage._id)  }  } >Delete</button>
        </div>
    )
}

export default BallPage