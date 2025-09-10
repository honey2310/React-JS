import './App.css'
import Card from './Components/Card/Card'
import Carousel from './Components/Carousel/Carousel'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Heros from './Components/Heros/Heros'
import Info from './Components/Info/Info'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Heros/>
    <Carousel/>
    <Card/>
    <Info/>
    <Features/>
    <Footer/>
    </>
  )
}

export default App
