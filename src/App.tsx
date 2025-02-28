import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontStyles } from './styles/FontStyles';
import GlobalStyles from './GlobalStyles';
import ShopListPage from './pages/ShopsListPage';
const App = () => (
  <>
    <GlobalStyles />
    <FontStyles />
    <Router>
      <Routes>
        <Route path="/" element={<ShopListPage />} />
      </Routes>
    </Router>
  </>
);

export default App;
