import React, { useEffect, useState } from 'react';
import { api, getShopList } from '../shared/api/api';
import { Shop } from '../shared/types/shops';
import ShopCard from './shopcard/ShopCard';

export const ShopList: React.FC = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    api;
    getShopList()
      .then((response) => {
        setShops(response.data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, []);

  return (
    <div>
      {shops.length === 0 ? (
        <p>Магазины не найдены.</p>
      ) : (
        <div>
          {shops.map((shop) => (
            <ShopCard
              key={shop.id}
              name={shop.name}
              address={shop.address}
              stylebook={shop.stylebook}
            />
          ))}
        </div>
      )}
    </div>
  );
};
