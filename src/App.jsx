
import{Route, Routes} from 'react-router-dom'
import ChatScreen from './screens/ChatScreen'
import Diagnosis from './screens/Diagnosis'
import Update from './screens/Update'
import WelcomeScreen from './screens/WelcomeScreen'
import WelcomeScreen2 from './screens/WelcomeScreen2'
import WelcomeScreen3 from './screens/Welcomescreen3'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'

// import ThirtyDays from './components/ThirtyDays'
const App = () => {
  return (
    <div>
        <Routes>
           <Route index element={<WelcomeScreen />}/>
           <Route path='/screen2' element={<WelcomeScreen2 />}/>
           <Route path='/screen3' element={<WelcomeScreen3 />}/>
           <Route path='/signUp' element={<RegisterScreen />}/>
           <Route path='/login' element={<LoginScreen />}/>
           <Route path='/chat' element={<ChatScreen />}/>
           <Route path='/diagnosis' element={<Diagnosis />}/>
           <Route path='/update' element={<Update />}/>
        </Routes>
      
    </div>
  )
}

export default App