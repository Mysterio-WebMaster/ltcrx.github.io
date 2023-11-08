import './App.css';
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Body from "./components/Body";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Body/>
            <Home/>
        </div>
    );
}

export default App;
