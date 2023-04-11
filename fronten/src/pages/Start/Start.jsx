import './start.scss';

const Start = () => {

  function handleSignUp() {
    let regForm = document.querySelector('#registerForm')
    regForm.style.display = 'block'

  }
  
    return (
      <>
      <form id="loginForm">
        <h2>Welcome</h2>
        <label>Username
            <input placeholder="Enter Username" type="text" id="username" name="username" required />
        </label>
        <label>Password
            <input placeholder="Enter Password" type="password" id="password" name="password" required />
        </label>
        <button type="submit">Login</button>
        <a onClick={handleSignUp}>Not registered? Sign up here!</a>
      </form>

      <form id="registerForm" hidden>
      <h2>Sign Up</h2>
      <label>Username
          <input placeholder="Enter Username" type="text" id="newusername" name="newusername" required />
      </label>
      <label>Password
          <input placeholder="Enter Password" type="password" id="newpassword" name="newpassword" required />
      </label>
      <button type="submit">Sign Up</button>
      </form>
    </>

    );
  };
  
export default Start;