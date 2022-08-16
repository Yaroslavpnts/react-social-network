// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/login/LoginContainer';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';

// function App(props) {
//   return (
//     <div className="app-wrapper">
//       <HeaderContainer />
//       <Navbar />;
//       <div className="app-wrapper-content">
//         <Routes>
//           <Route path="/dialogs/*" element={<DialogsContainer />} />
//           <Route path="/profile/:userId" element={<ProfileContainer />} />
//           <Route path="/profile/*" element={<ProfileContainer />} />
//           <Route path="/users" element={<UsersContainer />} />
//           <Route path="/login" element={<LoginContainer />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    /*
    чтобы не переделывать в классовую компоненту для вызова сервера this.props.initializeApp(),
    можно было бы использовать хук useEffect(() => {
      props.initializeApp();
    }, [])
    он заменяет componentDidMount
  */

    if (!this.props.initialized) return <Preloader />;

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />;
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
