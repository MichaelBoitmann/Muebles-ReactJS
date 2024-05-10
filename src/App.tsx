import Header from "./components/Header";
import Why from "./components/Why";
import Products from "./components/Products";
import Experiences from "./components/Experiences";

const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Why />
      <Products />
      <Experiences />
    </div>
  )
}

export default App