// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  console.log('app.js');
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
          <Route path="/profile" element={<Profile store={props.store} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
