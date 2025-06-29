import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UserContext from './context/UserContext'


function App() {
  const [count, setCount] = useState()

  return (
    <UserContextProvider>
      
      <login>

      </login>
      <profile>

      </profile>
        </UserContextProvider>
  )
}

export default App
