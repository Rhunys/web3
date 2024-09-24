import { useState } from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log(`value of count before click: ${count}`);
    setCount((count) => count + 1);
  }

  return (
    <div>
        <button onClick={handleClick}>
            count is {count}
        </button>
    </div>
    
  )
}

export default ClickCounter
