import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}

export default App
