// src/App.js
import { Routes, Route } from 'react-router-dom';
/* pages */
import Main from "./page/Main";
import MyPage from "./page/MyPage";
/* Header , Footer */
import Header from "./page/Header";
import Footer from "./page/Footer";

function App() {
  return (
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/myPage" element={<MyPage/>}></Route>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
