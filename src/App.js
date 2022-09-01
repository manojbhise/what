import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gyms from "./pages/Gyms";

function App() {
  return (
    <div>
      <Navbar />
      <Gyms />
      <Footer />
    </div>
  );
}

export default App;
