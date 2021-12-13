import React from "react";
import {Routes, Route} from 'react-router-dom';
import AddForm from './components/AddForm';
import BallPage from './components/BallPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import MyNav from "./components/MyNav";
import EditForm from './components/EditForm'
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp'
import {API_URL} from './config'
import {useContext} from 'react'
import Button from '@mui/material/Button';
import SaveIcon from '@material-ui/icons/'

function App() {

  

  const [balls, setBalls] = useState([])
  const [user, setUser] = useState(null)
  const [myError, setError] = useState(null)  
  // setting it to ‘true’ so that we can show a loading screen and make the user wait until this API finishes
  const [fetchingUser, setFetchingUser] = useState(true)
  // This hook is for us to redirect users to different urls
  const navigate = useNavigate()          // reinstate this if all fails 1
  // This runs only --ONCE-- when the component is mounted
  useEffect(() => {
      const getData = async () => {
          let response  = await axios.get(`${API_URL}/balls`,{withCredentials: true})
          setBalls(response.data)
          // -----------------------------------------------
          // we make the user requst here to know if the user is logged in or not
          try {
            let userResponse = await axios.get(`${API_URL}/user`,{withCredentials: true})
            setFetchingUser(false)
            setUser(userResponse.data)
          }
          catch(err){
            // the request will fail if the user is not logged in
            setFetchingUser(false)
          }
          // -----------------------------------------------
      }
      getData()
  }, [setUser])
  // Runs everytime ‘balls’ gets updates - a conditional did update
  useEffect(() => {
   // navigate('/')       // check back here  2
  }, [balls, user])       // add back use navigate here if all fails 3
 
  
  // This hook is for us to redirect users to different urls
  // This runs only --ONCE-- when the component is mounted
  useEffect(() => {

      const getData = async () => {
          let response  = await axios.get('http://localhost:5005/api/homepage')
         console.log(response.data)
          setBalls(response.data)
      }

      getData()

  }, [])

  // // Runs everytime 'balls' gets updates - a conditional did update
  // useEffect(() => {
  //   navigate('/')
  // }, [balls])

  const handleSubmit = async (event) => {
      event.preventDefault()
      let newBall = {
        name: event.target.name.value,
        description: event.target.description.value,
      
      }
      console.log(newBall)
      // Pass an object as a 2nd param in POST requests
      let response = await axios.post('http://localhost:5005/api/create', newBall)
      setBalls([response.data, ...balls])
  }

  const handleEdit = async (event, id) => {
      event.preventDefault()
      let editedBall = {
        name: event.target.name.value,
        description: event.target.description.value,
       
      }
      // Pass an object as a 2nd param in POST requests
      let response = await axios.patch(`http://localhost:5005/api/balls/${id}`, editedBall)
      // Update our state 'balls' with the edited ball so that the user see the upadted info without refrshing the page

      // We have the updated todo here
      console.log(response.data)

      let updatedBalls = balls.map((elem) => {
          if (elem._id === id) {
              elem.name = response.data.name
              elem.description = response.data.description
          }
          return elem
      })

      setBalls(updatedBalls)
      
  }

  const handleDelete = async (id) => {
    console.log(id,'wooo josh is back!!')
    // make a request to the server to delete it from the database
    await axios.delete(`http://localhost:5005/api/ball/${id}`)

    // Update your state 'todos' and remove the todo that was deleted
    let filteredBalls = balls.filter((elem) => {
      return elem._id !== id
    })

    setBalls(filteredBalls)
  }
 

    const handleSignIn = async (event) => {
    event.preventDefault()
    try {
      let newUser = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      console.log("signin",newUser)
      let response = await axios.post(`${API_URL}/signin`, newUser, {withCredentials: true})
      setUser(response.data)
      navigate('/homepage')
    }
    catch(err){
      //console.log(err.response)
      setError(err.response.data)
    }
  }

  
  const handleLogout = async () => {
    await axios.post(`${API_URL}/logout`, {}, {withCredentials: true})
    setUser(null)

    navigate('/signin')
}

const handleComment = async (event) => {
  event.preventDefault()
  console.log(event.target.comment.value)
  let newComment = {comment: event.target.comment.value}
  let commentResponse = await axios.post(`${API_URL}/comment`, newComment)
  console.log(commentResponse.data)

}

  
  return (

    <div>

    <Button
   
     variant="contained"
     color="primary" >
     Hello world
     
     </Button>
    <MyNav Logout={handleLogout} />
 
  <Routes>
  <Route path="/" element={<LandingPage  /> } />
  <Route path='/homepage' element={<HomePage balls={balls}/> } />
  <Route path="/add-form" element={<AddForm btnSubmit={handleSubmit}/> } />
  <Route path="/ball/:ballId" element={<BallPage btnDelete={handleDelete} btnComment={handleComment} />} />
  <Route path="/ball/:ballId/edit" element={<EditForm btnEdit={handleEdit}/>} />
  <Route path='/signin' element={<SignIn myError={myError} onSignIn={handleSignIn}/>} />
  <Route path='/signup' element={<SignUp />} /> 
  <Route path='/profile' element={<ProfilePage balls={balls} />} />
  <Route path='/404' element={<ErrorPage />} />
  </Routes>

    </div>
  
  );
}

export default App;
