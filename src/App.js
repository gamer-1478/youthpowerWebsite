import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <div className="App">
      <Router>

        <NavigationBar />
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Landing/>} />
        </Routes>
      </Router >

    </div>

  );
}

export default App;
