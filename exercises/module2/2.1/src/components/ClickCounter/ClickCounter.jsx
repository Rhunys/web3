import { useState } from 'react'

function ClickCounter({ title, message, messageHover }) {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0);
  const [messageDisplay, setMessageDisplay] = useState(false);

  const handleCount = () => {
    console.log(`value of count before click: ${count}`);
    setCount((count) => count + 1);
  }

  localStorage.setItem("count", JSON.stringify(count));

  const handleMouse = () => {
    console.log(`value of messageDisplay before mouse on: ${messageDisplay}`);
    setMessageDisplay(!messageDisplay);
  }

  return (
    <div>
        <h1>{title}</h1>
        <p>
          {messageDisplay ? `${messageHover}` : ""}
        </p>
        <button onClick={handleCount} onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
            count is {count}
        </button>
        <p>
          {count>=10 ? `${message}` : "nul"}
        </p>
    </div>
  )
}

export default ClickCounter
