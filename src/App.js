import './App.css';
import Navbar from './component/nav';
import Footer from './component/footer';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
