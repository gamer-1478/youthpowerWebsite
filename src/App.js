import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';
import Team from './pages/team/Team';

function App() {
  return (
    <div className="App">
      <Router>

        <NavigationBar />
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Landing/>} />
          <Route path={process.env.PUBLIC_URL + '/team'} element={<Team />} />
        </Routes>
      </Router >

    </div>

  );
}

export default App;
