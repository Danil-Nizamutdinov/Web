import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {Routes , Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileParams from './components/Profile/ProfileParams';
import Login from './components/Login/Login';

function App(props) {

    return (
        
        <div className="App-wrapper">
            <div className="container">

                 <HeaderContainer/>
                 <Navbar/>

                <div className='App-wrapper-content'>
                    <Routes>
                           <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                           <Route path='/profile/:userId' element={<ProfileParams/>}/>
                           <Route path='/users' element={<UsersContainer/>}/>
                           <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>

            </div>
        </div>
        
    );
}




export default App;
