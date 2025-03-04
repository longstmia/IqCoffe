import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontStyles } from './styles/FontStyles';
import GlobalStyles from './GlobalStyles';
import ShopListPage from './pages/ShopsListPage';
import ShopPage from './pages/ShopPage';
const App = () => (
  <>
    <GlobalStyles />
    <FontStyles />
    <Router>
      <Routes>
        <Route path="/" element={<ShopListPage />} />
        <Route path="/:shop" element={<ShopPage />} />
      </Routes>
    </Router>
  </>
);

export default App;
