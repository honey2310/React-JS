import './App.css'
import User from './components/User';
import { UserData } from './assets/main';

function App() {

  return (
    <>
    {UserData.map((user,index)=>(
      <User key={index} name={user.name} email={user.email}/>
    ))}
    </>
  )
}

export default App;
