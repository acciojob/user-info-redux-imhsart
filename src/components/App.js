
import React from "react";
import './../styles/App.css';
import { update_email, update_name } from "../redux/userActionCreator";
import {useDispatch, useSelector} from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const {name, email} = useSelector(state => state.user)
  return (
    <div>
        <h1>User Information</h1>
        <form style={{display:'flex', flexDirection: 'column', width: '250px'}}>
          <label htmlFor="name">Name:<input type="text" id="name" value={name} onChange={(e) => dispatch(update_name(e.target.value))} /></label>
          <label htmlFor="email">Email:<input type="email" id="email" value={email} onChange={(e) => dispatch(update_email(e.target.value))} /></label>
        </form>
        <p>Current values in store:</p>
        <div className="output">
          <p>Name - {name}</p>
          <p>Name - {email}</p>
        </div>
    </div>
  )
}

export default App
