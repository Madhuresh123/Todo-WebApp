import React, { useState } from 'react';

interface data {
    id: string;
    username: string;
    password: string;
  }



export default function Register(): JSX.Element {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const [userData, setuserData] = useState<any[]>([]);

  const handleRegisterButton = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const data = {
        id: new Date().getTime().toString(),
        usename: registerUsername,
        password: registerPassword
    }

    setuserData([...userData, data]);
    setIsRegister(true)

    console.log(userData)
  };

  const handleloginButton = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
        id: new Date().getTime().toString(),
        username: loginUsername,
        password: loginPassword
    }
    
}

  return (
    <>
    {!isRegister ?   <div className='register'>
      <form className='registerForm' onSubmit={handleRegisterButton}>
        <input
          type='text'
          placeholder='Enter your username'
          value={registerUsername}
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter your password'
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
    
    : 
    <div className='login'>
    <form className='loginForm' onSubmit={handleloginButton}>
        <input type='text' placeholder='Enter your username' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/>
        <input type='password' placeholder='Enter your password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        <button  type='submit' >Login</button>
    </form>
</div>
    
    }
   
    </>
  );
}
