import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "./styles.css"

function App() {
  console.log(window.location.pathname)

  const path = window.location.pathname;
  let Component 
  switch (path) {
    case "/":
      Component = <Home/>;
      break;
    case "/products":
      Component = <Products/>;
      break;
    case "/about":
      Component = <About/>;
      break;  
    
    default:
      break;
  }

  return ( <>
    
    <Navbar></Navbar>      

    <div style={{textAlign: 'center', 'margin': "1rem"}}>
      {Component}
    </div>
    
    </>);
}

export default App;
