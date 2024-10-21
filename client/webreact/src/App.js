import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
// import Main from './components/Home';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />

        {/* <Route path="main" element={<PrivateRoute element={<Main />} />} /> */}

        <Route path="*" element={<h1>404 - Страница не найдена</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;