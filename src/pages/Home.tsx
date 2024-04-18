import { useState } from 'react'
import WebApp from '@twa-dev/sdk'

function Home() {
  const [count, setCount] = useState(0)

  WebApp.themeParams.bg_color;

  return (
    <>
      <h1>Home page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Lucas Hello World! Current count is ${count}`)}>
            Show Alert 12
        </button>
      </div>
    </>
  )
}

export default Home