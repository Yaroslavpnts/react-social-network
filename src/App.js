// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import StoreContext from './StoreContex';

function App(props) {
  console.log('app.js');
  return (
    <div className="app-wrapper">
      <Header />
      <StoreContext.Consumer>
        {store => {
          let state = store.getState();
          return <Navbar friends={state.sidebar.friends} />;
        }}
      </StoreContext.Consumer>

      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
