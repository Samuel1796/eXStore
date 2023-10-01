import Header from "./nav/Header"
import Gsapp from './nav/Gsapp'
import Slider from "./slider/Slider"
import Main from "./banner/Main"
import Footer from "./Footer"
// import Loader from "./Loader"
const Home = ()=>{

    return(
        <div>
            {/* <Loader/> */}
            {/* <Header/> */}
            {/* <Header/> */}
            <Slider/>
            {/* Banner */}
            <Main/>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Home