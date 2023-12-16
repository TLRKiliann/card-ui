import FirstCard from './components/FirstCard';
import SecondCard from './components/SecondCard';
import ThirdCard from './components/ThirdCard';
import FourthCards from './components/FourthCards';
import './App.css'

function App() {
  return (
    <>
      <div className='bloc-comp'>
        <FirstCard />
      </div>
      
      <hr />

      <div className='bloc-comp'>
        <SecondCard />
      </div>

      <hr />

      <div className='bloc-comp'>
        <ThirdCard />
      </div>

      <hr />

      <div className='bloc-comp'>
        <FourthCards />
      </div>

      <hr />
      
    </>
  )
}

export default App;
