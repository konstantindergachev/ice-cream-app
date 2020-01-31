import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from '../helpers/helpers';

const IceCream = ({
  index,
  details: { name, image, desc, price, status },
  addToBasket,
}) => {
  const isAvailable = status === 'available';
  return (
    <li className="ice__creams-cream">
      <img className="cream__img" src={image} alt={name} />
      <h3 className="cream__name">{name}</h3>
      <span className="cream__price">{formatPrice(price)}</span>
      <p>{desc}</p>
      <button
        className="addToBasket__btn"
        disabled={!isAvailable}
        onClick={() => addToBasket(index)}
      >
        {isAvailable ? 'Добавить в корзину!' : 'Продано!'}
      </button>
    </li>
  );
};

IceCream.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
    status: PropTypes.string.isRequired,
  }),
  addTobasket: PropTypes.func,
  index: PropTypes.string.isRequired,
};

export default IceCream;
