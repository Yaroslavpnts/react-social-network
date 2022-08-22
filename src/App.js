// import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/login/LoginContainer';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store.js';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </Suspense>
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

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SocialNetworkApp = props => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default SocialNetworkApp;
