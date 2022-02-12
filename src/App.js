import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(){
    return(
        <div className="App-header">
            <div className="container">
                <Header/>
                <Navbar/>
                <Profile/>
            </div>
        </div>
    );
}




export default App;
