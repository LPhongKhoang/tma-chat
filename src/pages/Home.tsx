import { useState } from 'react'
import { BackButton, MainButton } from '@twa-dev/sdk/react'
import WebApp from '@twa-dev/sdk'

function Home() {
  const [count, setCount] = useState(0)

  WebApp.themeParams.bg_color;

  return (
    <>
      <h1>Home page 122</h1>
      <div>
        <BackButton onClick={() => window.history.back()} />
        <MainButton text="Submit ABC" onClick={() => alert('submitted: ' + count)} />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Lucas Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
    </>
  )
}

export default Home