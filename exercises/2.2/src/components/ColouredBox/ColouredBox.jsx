import { useState } from 'react'

function ColouredBox() {
  const [colourIndex, setColourIndex] = useState(0)
  const colours = ['red', 'green','blue','yellow','purple']

  const handleColour = () => {
    setColourIndex(colourIndex + 1);
    if(colourIndex === colours.length - 1){
      setColourIndex(0);
    }
  }

  return (
    <>
      <div>
        <button style={{ backgroundColor: colours[colourIndex] }} onClick={handleColour}>
          {colourIndex === colours.length-1 ? colours[0] : colours[colourIndex + 1]}
        </button>
        <p>
          {colours[colourIndex]}
        </p>
      </div>
    </>
  )
}

export default ColouredBox
