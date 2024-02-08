import logo from './logo.svg';
// import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Youtubeshowthevideo from './component/Youtubeshowthevideo';
import Second from './component/Second';
import Notfound from './component/Notfound';
import Formholder from './component/Formholder';
import Tableusershow from './component/Tableusershow';
import Displaydata from './component/Displaydata';

function App() {
  return (


    <>
    <Routes>
      <Route path='/'element={<Youtubeshowthevideo />}></Route>
      <Route path='/home'element={<Navigate to={"/"} />}></Route>
      <Route path='/second'element={<Second />}></Route>
      <Route path='/form'element={<Formholder />}></Route>
      <Route path='/table'element={<Tableusershow />}></Route>
      <Route path='/seedata'element={<Displaydata />}></Route>
      <Route path='/*'element={<Notfound />}></Route>
    </Routes>
    </>




    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
