import Navbar from "./components/navbar";
import About from "./components/about";
import Hero from "./components/hero";
import Services from "./components/services";
import Tours from "./components/tours";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <h1 className='text-center mt-5'>OUR SERVICES</h1>
     <Services/>
     <h1 className='text-center mt-5'>OUR FEATURES</h1>
     <Tours/>
     <Footer/>
    </div>
  );
}

export default App;
