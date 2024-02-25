import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './componets/Navbar/Navbar'
import Home from './componets/Home/Home'
import AnimatedCursor from "react-animated-cursor"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>
       <AnimatedCursor
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)'
      }}
      outerStyle={{
        border: '3px solid var(--cursor-color)'
      }}
    />
     <Home/>
    </div>
  )
}

export default App
