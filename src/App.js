import React, {useState} from 'react'
import LoginForm from './Components/LoginForm.js'
import Mailboxes from './Components/Mailboxes.js'
import LogInErrorMessages from './Components/LogInErrorMessages.js'
import './App.css'

function App() {
  //authentication details
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginFormDisplay, setloginFormDisplay] = useState(true)
  const [isUsernameValid, setIsUsernameValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  const proxyUser = 'random@user.com'
  const proxyPassword = 'random@password.com'

  const handleLoginFormSubmit = (e)=> {
    e.preventDefault()
    //login errors
    if(username !== proxyUser) setIsUsernameValid(false)
    if(password !== proxyPassword) setIsPasswordValid(false)
    //login
    if(username === proxyUser) setIsUsernameValid(true)
    if(password === proxyPassword) setIsPasswordValid(true)

    if(username === proxyUser && password === proxyPassword){
      setloginFormDisplay(!loginFormDisplay)
      document.title = username
    }
  }
  //logout
  const logout = ()=> setloginFormDisplay(!loginFormDisplay)
  
  return (
    <div className='main-container'>
      <LoginForm setPassword={setPassword} setUsername={setUsername} handleLoginFormSubmit={handleLoginFormSubmit}  
        username={ username} password={password} loginFormDisplay={loginFormDisplay} logout={logout}
      />
      <LogInErrorMessages isUsernameValid={isUsernameValid} isPasswordValid={isPasswordValid}/>
      <Mailboxes style={{display: loginFormDisplay? 'none': 'flex'}} logout={logout}/>
    </div>
  );
}

export default App;
