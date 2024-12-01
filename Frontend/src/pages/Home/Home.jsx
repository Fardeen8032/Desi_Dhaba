import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Gallery from '../../components/Gallery/Gallery'
import Slidercomponent from '../../components/Slidercomponent/Slidercomponent'
import Scrolltotop from '../../components/Scrolltotop/Scrolltotop'
const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Gallery/>
      <Slidercomponent/>
      <Scrolltotop/>

    </div>
  )
}

export default Home