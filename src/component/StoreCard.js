import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faStar,
  faStarHalf,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Item from './Item';

function StoreCard({ storeInfo }) {
  const { shop, tags, items } = storeInfo;
<<<<<<< HEAD
  const { storename, phone } = shop;
=======
  const { storename, phone, id } = shop;
  let count = 0;
  let aaa;
  useEffect(() => {
    aaa = document.querySelector(`.slideAnimation${id}`);
  }, []);
  const prev = () => {
    console.log(aaa);
    count--;
    aaa.style.marginLeft = `${count * 222.5}px`;
  };

  const next = () => {
    count++;
    aaa.style.marginLeft = `${count * 222.5}px`;
  };
>>>>>>> 223341ba273c9cc3ba94823dcdd7fa7b5b84a445

  return (
    <div className="storeCard container bgLightGray">
      <div className="storeInfo">
        <span className="tagContainer">
          {tags.map((tag) => {
            return (
              <p className="tag" key={`tag${tag.id}`}>
                #{tag.tagname}
              </p>
            );
          })}
        </span>

        <h2 className="storename">{storename}</h2>
        <span className="phone">
          <FontAwesomeIcon icon={faPhoneAlt} className="phoneIcon" />
          {phone}
        </span>
        <span className="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalf} />
        </span>
      </div>
      <div className="slideContainer">
        <div className="slideIcon left " onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="slideItemCard">
          <div className={`slideAnimation${id} slideAnimation`}>
            {items.map((item) => {
              return <Item item={item} isBtn={false} key={`tag${item.id}`} />;
            })}
          </div>
        </div>
        <div className="slideIcon right" onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
