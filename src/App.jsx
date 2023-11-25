
import{Route, Routes} from 'react-router-dom'
import ChatScreen from './screens/ChatScreen'
import Diagnosis from './screens/Diagnosis'
import Update from './screens/Update'

// import ThirtyDays from './components/ThirtyDays'
const App = () => {
  return (
    <div>
        <Routes>
           <Route path='/chat' element={<ChatScreen />}/>
           <Route path='/diagnosis' element={<Diagnosis />}/>
           <Route path='/update' element={<Update />}/>
        </Routes>
      
    </div>
  )
}

export default App