import './App.css'
import DaisyNav from './components/daisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>


      <NavBar></NavBar>

      {/* <DaisyNav></DaisyNav> */}

      <h1 className='text-3xl font-bold bg-gray-400'>Vite + React</h1>

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>


    </>
  )
}

export default App
