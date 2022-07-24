// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';

// �K�p�w�t���z ���p�x �{���s�t�p �}�� ���q�����r�|���u�} �{���}�����~�u�~����, �r ���u�p�{���u �� �~�p�� �������r�|���u������, �}���w�~�� �����y���p���� ������ �~���r���z �����s, �r �t�p�~�~���} ���|�����p�u <App />
// �I �������� �����s �}���w�~�� �{���t�p-���� �r�����p�r�y���� �y �r���u �x�p���p�q�����p�u��
// <App />

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;
