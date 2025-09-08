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



export default App
