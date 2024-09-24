import { useState } from 'react'

function ClickCounter({ title, message, messageHover }) {
  const [count, setCount] = useState(0)
  const [messageDisplay, setMessageDisplay] = useState(false);

  const handleClick = () => {
    console.log(`value of count before click: ${count}`);
    setCount((count) => count + 1);
  }

  const handleMouse = () => {
    console.log(`value of messageDisplay before mouse on: ${messageDisplay}`);
    setMessageDisplay(!messageDisplay);
  }

  return (
    <div>
        <h1>{title}</h1>
        <button onClick={handleClick} onMouseOver={handleMouse} onMouseLeave={handleMouse}>
            count is {count}
        </button>
        <p>
          {messageDisplay ? `${messageHover}` : ""}
        </p>
        <p>
          {count>=10 ? `${message}` : "nul"}
        </p>
    </div>
  )
}

export default ClickCounter
