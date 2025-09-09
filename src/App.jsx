import { useState } from 'react'
import { Fragment } from 'react'

function App() {
      const helloElement = <h1>Hello World</h1>
      const h2Element = <h2>React Aral aral rin pag my time</h2>

      const lowercaseClass = 'text-lowercase';
      const text = 'HELLO';
      const app = <h1 className={lowercaseClass}>{text}</h1>

      return ( // Returning many element
        <>
          {helloElement}
          {h2Element}
          {app}
        </>
      )
}

function Clicky() {
  const handleClick = (event) => {
    console.log("Helloworld")
    console.log(event)
  }

  return(
    <button onClick={handleClick}>ClickME</button>
  )


}

function HideAndSeek() {
  const [paragraph, setParagraph] = useState(true)

  const toggleStatus = () => {setParagraph(!paragraph)};


  return(
    <>

      <h1> Change UI Based on click</h1>
      {paragraph && ( //if paragraph true papakita niya to && is like if
        <p> This is paragraph</p>
      )}

      <button onClick={toggleStatus}>
        {paragraph ? 'Hide' : 'Show'} Paragraph
      </button>

    </>
  )


}

export default App
