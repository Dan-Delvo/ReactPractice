export default function clicky() {
  const handleClick = (event) => {
    console.log("Helloworld")
    console.log(event)
  }

  return(
    <button onClick={handleClick}>ClickME</button>
  )
}
