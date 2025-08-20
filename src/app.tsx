import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cours from './pages/cours';
import Contact from './pages/contact';
import Layout from './layout/layout';
import Activity from './pages/activity';
import Calendrier from './pages/calendrier';

function App() {
  return (
    <div className="min-vh-100 p-0 m-0" style={{ width: '100vw', overflowX: 'hidden' ,}}>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/calendrier" element={<Calendrier />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
