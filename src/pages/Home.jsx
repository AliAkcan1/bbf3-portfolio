import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import Navbar from "../components/Navbar"

function Home(){
    return(
        <div className="home">
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home