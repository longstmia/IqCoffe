import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ShopList } from '../components/ShopList';

const ShopListPage = () => (
  <>
    <Header />
    <div style={{ marginTop: '7rem' }}>
      <ShopList />
    </div>
    <Footer />
  </>
);

export default ShopListPage;
