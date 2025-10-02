import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OlaComponente from './olacomponente'
import RegrasComponente from './RegrasComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world</h1>
      <OlaComponente nome={'André'} idade={101}/>
      <OlaComponente nome={''} idade={99}/>
      <RegrasComponente nome={'João Silva-professor'} idade={26} email={'jsilva@ipt.pt'}/>
      <RegrasComponente nome={'André Vassalo-aluno'} idade={30} email={'aluno27454@ipt.pt'}/>
      <RegrasComponente nome={'João Silva'} idade={26} email={'@ipt.pt'}/>
      <RegrasComponente nome={''} idade={26} email={'jsilva@.pt'}/>
      <RegrasComponente nome={''} idade={26} email={'ipt.pt'}/>
      <RegrasComponente nome={'João Silva-professor'} idade={26} email={'jsilva@ipt.pt'}/>
    </>
  )
}

export default App
