import Hero from "./components/2-Hero/Hero";
import Header from "./components/1-Header/Header";
import Main from "./components/3-Main/Main";
import Footer from "./components/4-Footer/Footer";
function App() {
  return (
    <div className="contaner">
    <Header />
    <div >
    <Hero/>
    </div>
    <br/>
    <br/>
    <div>
    <Main/>
    </div>
    <br/>
    <div>
      <Footer/>
    </div>
    </div>

  
  );
}

export default App;
