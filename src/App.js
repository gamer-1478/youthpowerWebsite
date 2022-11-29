import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import NavigationBar from './components/navbar/Navbar';
import Blogs from './pages/blog_activities/Blogs.jsx';
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
          <Route path={process.env.PUBLIC_URL + '/about'} element={<Landing />} />
          <Route path={process.env.PUBLIC_URL + '/activities'} element={<Blogs />} />
        </Routes>
        <Footer/>
      </Router >

    </div>

  );
}

export default App;
