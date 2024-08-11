// src/App.js
import { Routes, Route } from 'react-router-dom';
/* pages */
import Main from "./page/Main";
import MyPage from "./page/MyPage";
import Login from "./page/Login";
/* Header , Footer */
import Header from "./component/sidebar/Header";
import Footer from "./component/sidebar/Footer";

function App() {
  return (
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/myPage" element={<MyPage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
