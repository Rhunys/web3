import { useState } from 'react'

function ClickCounter({ title, message }) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log(`value of count before click: ${count}`);
    setCount((count) => count + 1);
  }

  return (
    <div>
        <h1>{title}</h1>
        <button onClick={handleClick}>
            count is {count}
        </button>
        <p>
          {count>=10 ? `${message}` : "nul"}
        </p>
    </div>
  )
}

export default ClickCounter
