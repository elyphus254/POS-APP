import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import POSPage from './pages/POSPage';

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/POS-APP" element={<HomePage />} />
        <Route path="/POS-APP/" element={<POSPage />} />
      </Routes>

    </Router>
  );
}

export default App;
