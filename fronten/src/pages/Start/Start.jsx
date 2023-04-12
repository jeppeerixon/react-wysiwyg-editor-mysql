import './start.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Start = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [newuser, setNewuser] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const navigate = useNavigate();

  let handleLoginSubmit = async (e) => {
    e.preventDefault();
    let theUser = {
      username: user,
      password: password,
    }

    try {
      let res = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(theUser),
      });
      if (res.status === 200) {
        navigate('/overview', {
          state: {
              username: user,
          }
        }); 
      } else {
        alert("Wrong username or password!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // fetch.post funktion för register
  let handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      username: newuser,
      password: newpassword,
    }

    try {
      let res = await fetch("http://localhost:3000/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(newUser),
      });
      if (res.status === 201) {
        alert("New user added: Please login to continue!");
        closeSignUp()
      } else {
        alert("Sorry, something went wrong!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect för localstorage ifall någon är inloggad

  function handleSignUp() {
    let regForm = document.querySelector('#registerForm')
    regForm.style.display = 'block'
  }

  function closeSignUp() {
    let regForm = document.querySelector('#registerForm')
    regForm.style.display = 'none'
  }
  
    return (
      <>
      <form id="loginForm" onSubmit={handleLoginSubmit}>
        <h2>Welcome</h2>
        <label>Username
            <input placeholder="Enter Username" type="text" id="username" name="username" required value={user} onChange={(e) => setUser(e.target.value)}/>
        </label>
        <label>Password
            <input placeholder="Enter Password" type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Login</button>
        <a onClick={handleSignUp}>Not registered? Sign up here!</a>
      </form>

      <form id="registerForm" onSubmit={handleRegisterSubmit} hidden>
      <h2>Sign Up</h2>
      <label>Username
          <input placeholder="Enter Username" type="text" id="newusername" name="newusername" required value={newuser} onChange={(e) => setNewuser(e.target.value)}/>
      </label>
      <label>Password
          <input placeholder="Enter Password" type="password" id="newpassword" name="newpassword" required value={newpassword} onChange={(e) => setNewpassword(e.target.value)}/>
      </label>
      <button type="submit">Sign Up</button>
      </form>
    </>

    );
  };
  
export default Start;