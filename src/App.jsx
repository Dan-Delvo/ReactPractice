import { useState } from 'react'
import { useEffect } from 'react'
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

function Form() {

  const [name, setName] = useState();
  const [nameError, setNameError] = useState();

  const handleSubmit = (a) => {
    a.preventDefault(); 

    if(nameError) {
      alert('BAwallll')
    }
    else {
      alert(name)
    }

  }
  
  const handleName = (a) => {
    const{ value } = a.target;
    setName(value);

    if(value.length <= 6){
      setNameError('Username Length must be more than 6')
    }
    else {
      setNameError()
    }
  }

  return (
      <form onSubmit={handleSubmit}>
        Username: {name} <br></br>
        <input tpe='text' name='name' value={name} onChange={handleName} />
        <p>{setNameError}</p>
        <button> Submit </button>
      </form>
  )
}

function ApiTypeShi() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const task = await response.json();

    console.log (task)
    setTitle(task.title)

  }

    return (
      <>
       <h1>{title} kasdjkasldj</h1>
       <p>kamustasa kalabasa</p>
      </>
    );
}

function WeatherWeatherLang() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:5097/weatherforecast');
    const task = await response.json();

    console.log (task)
    setTitle(task[1].summary)

  }

    return (
      <>
       <h1>{title} kasdjkasldj</h1>
       <p>kamustasa kalabasa</p>
      </>
    );
}

export default App
export {Form, ApiTypeShi, WeatherWeatherLang}
