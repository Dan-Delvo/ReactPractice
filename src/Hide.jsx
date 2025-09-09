import { useState } from "react";

export default function HideAndSeek() {
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
      
      <button className='px-5 py-2 text-white bg-blue-500 border-2'>
  Subscribe
</button>

    </>
  )
}