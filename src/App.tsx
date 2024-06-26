import Header from "./components/Header";
import Why from "./components/Why";
import Products from "./components/Products";
import Experiences from "./components/Experiences";
import Materials from "./components/Materials";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Why />
      <Products />
      <Experiences />
      <Materials />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App