import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContent from './components/homePage';
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HomeContent />
    </div>
  );
}

export default App