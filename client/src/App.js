import Cart from "./components/cart/Cart";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import data from  "./data.json"

function App() {

  console.log(data)
  return (
    
      <div className="layout">
        <Header/>
        <main> 
          <div className="product-filter">
            <Product/>
            <Filter/> 
          </div>  
          <Cart/>
        </main>
        <Footer/>
      </div>
  
  );
}

export default App;
