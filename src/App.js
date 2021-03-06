import React from 'react'
import SearchPresentationalComponent from './components/SearchPresentationalComponent'
import AddContact from './containers/AddContact'
import VisibleContactList from './containers/VisibleContactList'

const App = () => (
  <div>
    <SearchPresentationalComponent/>
    <AddContact/>
    <VisibleContactList/>
  </div>
)

export default App
