import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AddUser, AllUser, EditUser } from './Pages'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
       
        <Routes>
          <Route exact path='/' element={<AllUser />} />
          <Route exact path='/users/add/new-user' element={<AddUser />} />
          <Route exact path='/users/edit' element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)