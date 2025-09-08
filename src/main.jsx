import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ParentComponent from './ParentComponent'
import Users from './NameList'


// function App() {
//   return <h1>Hello World</h1>
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ParentComponent />
    <Users />
  </React.StrictMode>,
)
