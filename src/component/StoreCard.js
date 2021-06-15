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
  const { storename, phone } = shop;

  return (
    <div className="storeCard container bgLightGray">
      <div className="storeInfo">
        <span className="tagContainer">
          {tags.map((tag) => {
            return (
              <p className="tag" key={tag.id}>
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
        <div className="slideIcon">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="slideItemCard">
          {items.map((el) => {
            return <Item item={el} isBtn={false} />;
          })}
        </div>
        <div className="slideIcon">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
