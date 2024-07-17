import logo from './logo.svg';
import './App.css';
// import secureEnv from 'secure-env';
// global.env = secureEnv({secret:'mySecretPassword'});


function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

    return (
      <div>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <form>
          <h1>  defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} </h1>
          <p>API URL: {apiUrl}</p>
          <p>API Key: {apiKey}</p>
        </form>
      </div>
    );
  
}

export default App;
