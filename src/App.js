import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes , Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
    return (
        
        <div className="App-wrapper">
            <div className="container">

                 <Header/>
                 <Navbar/>

                <div className='App-wrapper-content'>
                    <Routes>
                           <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                           <Route path='/profile' element={<Profile/>}/>
                           <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>

            </div>
        </div>
        
    );
}




export default App;
