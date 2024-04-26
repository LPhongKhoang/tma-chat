import { useState } from 'react'
import WebApp from '@twa-dev/sdk'

function Home() {
  const [count, setCount] = useState(0)

  WebApp.themeParams.bg_color;

  // Get query params from URL and parse it to object
  const urlParams = new URLSearchParams(window.location.search);

  const handleValidateMiniAppData = () => {
    const res = fetch('https://nxc1wjwh-3000.asse.devtunnels.ms/users/api/v1/users/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-telebot-token': WebApp.initData
      },
      body: JSON.stringify({
        name: 'Lucas',
        email: 'abc@gmail.com',
      }),
    }).then((res) => res.json());

    console.log('res', res);
  }

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
            Show Alert in TeleBot
        </button>
        <button onClick={handleValidateMiniAppData}>
            Test validate MiniApp
        </button>
      </div>
    </>
  )
}

export default Home