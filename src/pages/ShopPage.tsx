import { useParams } from 'react-router-dom';
import HeaderShop from '../components/header/HeaderShop';
import Footer from '../components/footer/Footer';

const ShopPage = () => {
  const { shop } = useParams();
  return (
    <>
      <HeaderShop />
      <div>{shop}</div>
      <Footer />
    </>
  );
};
export default ShopPage;
