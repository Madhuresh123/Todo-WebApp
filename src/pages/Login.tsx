import React, { useState } from 'react'

interface UserData {
    id: string;
    username: string;
    password: string;
  }


function Login() {

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [userData, setUserData] = useState<UserData[]>([]);


    const handleloginButton = () => {
        console.log('clicked')
        const data = {
            id: new Date().getTime().toString(),
            username: loginUsername,
            password: loginPassword
        }
        
        setUserData([...userData, data])
    }

  return (
    <div className='login'>
        <form className='loginForm'>
            <input type='text' placeholder='Enter your username' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/>
            <input type='password' placeholder='Enter your password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            <button  onClick={handleloginButton} >Login</button>
        </form>
    </div>
  )
}

export default Login