import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App-wrapper">
                <div className="container">

                    <Header/>
                    <Navbar/>

                    <div className='App-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs' element={<Dialogs/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                        </Routes>
                    </div>

                </div>
            </div>
        </Router>
    );
}




export default App;
