// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Nav.jsx';
import Profile from './components/profile.jsx';

// Каждый раз когда мы объявляем компоненту, в реакте у нас появляется, можно считать что новый тэг, в данном случае <App />
// И этот тэг можно куда-то вставить и все заработает
// <App />

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
