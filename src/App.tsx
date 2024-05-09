import Header from "./components/Header";
import Why from "./components/Why";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Why />
      <Products />
    </div>
  )
}

export default App