import React from 'react'
//import SearchPresentationalComponent from './components/SearchPresentationalComponent'
import AddContact from './containers/AddContact'
import VisibleContactList from './containers/VisibleContactList'
import './bootstrap.min.css'

const App = () => (
  <div>
    <AddContact/>
    <VisibleContactList/>
  </div>
)

export default App
