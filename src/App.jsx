import Header from "./components/Header"
import Navbar from "./components/Navbar"

function App() {
  /*  background: rgb(255,134,96);
  background: radial-gradient(circle, rgba(255,134,96,1) 0%, rgba(128,0,255,1) 100%); */

  return (
    <div>
      <Navbar />
      <div>
        <Header />
      </div>
    </div>
  )
}

export default App
