import React from 'react';
import StoreCard from '../component/StoreCard';

function AllStore({ allStoreInfo }) {
  return (
    <div>
      <>
        {allStoreInfo.map((storeInfo) => {
          return (
            <>
              <StoreCard
                key={`storeCard${storeInfo.shop.id}`}
                storeInfo={storeInfo}
                className="center"
              />
            </>
          );
        })}
      </>
    </div>
  );
}

export default AllStore;
