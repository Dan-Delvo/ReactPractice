import { useState } from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import SevereColdIcon from '@mui/icons-material/SevereCold';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";       // Bracing
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined"; // Chilly
import CloudIcon from "@mui/icons-material/Cloud";         // Cool
import WbSunnyIcon from "@mui/icons-material/WbSunny";     // Mild
import Brightness5Icon from "@mui/icons-material/Brightness5"; // Warm
import SpaIcon from "@mui/icons-material/Spa";             // Balmy
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"; // Hot
import WhatshotIcon from "@mui/icons-material/Whatshot";   // Sweltering
import FlareIcon from "@mui/icons-material/Flare";         // Scorching
import ASCIIText from './ASCIIText';
import GlassSurface from './GlassSurface'



  
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
  const [data, setData] = useState([]);
  const bull = <span>•</span>;


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:5097/weatherforecast');
    const task = await response.json();
    setData(task);
  }

  const weatherIcons = {
  Freezing: <SevereColdIcon color="primary" fontSize="large" />,
  Bracing: <AcUnitIcon color="info" fontSize="large" />,
  Chilly: <AcUnitOutlinedIcon color="info" fontSize="large" />,
  Cool: <CloudIcon color="action" fontSize="large" />,
  Mild: <WbSunnyIcon color="warning" fontSize="large" />,
  Warm: <Brightness5Icon color="warning" fontSize="large" />,
  Balmy: <SpaIcon color="success" fontSize="large" />,
  Hot: <LocalFireDepartmentIcon color="error" fontSize="large" />,
  Sweltering: <WhatshotIcon color="error" fontSize="large" />,
  Scorching: <FlareIcon color="error" fontSize="large" />
};

  return (
    <>
      <header
        style={{
          width: "100%",
          height: "200px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <ASCIIText
          text="WEATHER"
          asciiFontSize={5}
          textFontSize={200}
          planeBaseHeight={6}
          enableWaves={false}
        />
      </header>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", padding: "2rem" }}>
        {data.map((item, index) => (
          <GlassSurface
            key={index}
            width={300}
            height={200}
            borderRadius={24}
            blur={25}          // strong blur for frosted effect
            opacity={0.8}      // semi-transparent
            brightness={30}  
            className="my-custom-class"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }} 
          >
            <Card
              sx={{
                width: 265,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: "1rem",
                textColor: "white",
                color: "white", 
                backgroundColor: "transparent", // allow glass effect to show
                boxShadow: "none" // optional, remove default MUI shadow
              }}
            >
              <CardContent>
                {weatherIcons[item.summary] || null}
                <Typography gutterBottom sx={{ color: 'white', fontSize: 14 }}>
                  Weather for Day:
                </Typography>
                <Typography variant="h5" component="div">
                  {item.date}
                </Typography>
                <Typography sx={{ color: 'white', mb: 1.5 }}>Date</Typography>
                <Typography variant="body2">
                  Summary: {item.summary}
                  <br />
                  Temp C: {item.temperatureC}
                  <br />
                  Temp F: {item.temperatureF}
                </Typography>
              </CardContent>
            </Card>
          </GlassSurface>
        ))}
      </div>
    </>
  );

}

export default App
export {Form, ApiTypeShi, WeatherWeatherLang}
