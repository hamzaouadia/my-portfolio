import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {

  return (
    <>
      <CustomCursor />
      <NavBar />
      <Home />
      <Footer />
    </>
  )
}

export default App
