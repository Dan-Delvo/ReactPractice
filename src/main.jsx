import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {Form, ApiTypeShi, WeatherWeatherLang} from './App'
import ParentComponent from './ParentComponent'
import Users from './NameList'
import ButtonPress from './StateOfTheNation'
import tryLang from './StateOfTheNation'
import Clicky from './clicky'
import './index.css';
import LetterGlitch from './LetterGlitch';
  






// function App() {
//   return <h1>Hello World</h1>
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <ParentComponent />
    <Users />
    <ButtonPress />
    <Clicky />    
    <HideAndSeek />
    <Form />
    <ApiTypeShi /> */}
    <LetterGlitch glitchSpeed={50} centerVignette>
      <WeatherWeatherLang />
    </LetterGlitch>
  </React.StrictMode>,
)
