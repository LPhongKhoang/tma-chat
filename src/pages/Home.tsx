import { useState } from 'react'
import WebApp from '@twa-dev/sdk'

function Home() {
  const [count, setCount] = useState(0)

  WebApp.themeParams.bg_color;

  // Get query params from URL and parse it to object
  const urlParams = new URLSearchParams(window.location.search);


  return (
    <>
      <h1>Home page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h2>Query params</h2>
        <pre>{JSON.stringify(Object.fromEntries(urlParams.entries()), null, 2)}</pre>
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