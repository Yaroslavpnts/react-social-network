// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { Routes, Route } from 'react-router-dom';

// „K„p„w„t„„z „‚„p„x „{„€„s„t„p „}„ „€„q„Œ„‘„r„|„‘„u„} „{„€„}„„€„~„u„~„„„…, „r „‚„u„p„{„„„u „… „~„p„ƒ „„€„‘„r„|„‘„u„„„ƒ„‘, „}„€„w„~„€ „ƒ„‰„y„„„p„„„ „‰„„„€ „~„€„r„„z „„„„s, „r „t„p„~„~„€„} „ƒ„|„…„‰„p„u <App />
// „I „„„„€„„ „„„„s „}„€„w„~„€ „{„…„t„p-„„„€ „r„ƒ„„„p„r„y„„„ „y „r„ƒ„u „x„p„‚„p„q„€„„„p„u„„
// <App />

function App() {
  return (
    // <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;
