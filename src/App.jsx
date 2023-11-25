import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {ChatScreen, Diagnosis, Update} from './index'
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