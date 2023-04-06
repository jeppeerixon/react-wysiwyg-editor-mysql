import './start.scss';

const Start = () => {
  
    return (
      
      <form id="loginForm">
        <h2>Welcome</h2>
        <label>Username
            <input placeholder="Enter Username" type="text" id="username" name="username" required />
        </label>
        <label>Password
            <input placeholder="Enter Password" type="password" id="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </form>

    );
  };
  
export default Start;