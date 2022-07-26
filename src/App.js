// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    // <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route
            path="/profile"
            element={<Profile state={props.state.profilePage} addPost={props.addPost} />}
          />
        </Routes>
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;
