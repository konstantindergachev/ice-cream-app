import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { formatPrice, getTotalPrice } from '../helpers/helpers';

class Basket extends React.Component {
  renderBasket = (key) => {
    const { iceCreams, basket, removeFromBasket } = this.props;
    const iceCream = iceCreams[key];
    const count = basket[key];
    const isAvailable = iceCream && iceCream.status === 'available';
    const transitionOptionsOuter = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 },
    };
    const transitionOptionsInner = {
      classNames: 'count',
      key: count,
      timeout: { enter: 500, exit: 500 },
    };
    //Убедись, что мороженое загружено перед тем как продолжить
    if (!iceCream) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptionsOuter}>
          <li key={key}>
            Извините {iceCream ? iceCream.name : 'мороженое'} больше нет
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptionsOuter}>
        <li className="order__item" key={key}>
          <TransitionGroup component="span" className="order__count">
            <CSSTransition {...transitionOptionsInner}>
              <span>{count}</span>
            </CSSTransition>
          </TransitionGroup>
          {iceCream.name}: &nbsp;
          {formatPrice(count * iceCream.price)}
          <button className="order__btn" onClick={() => removeFromBasket(key)}>
            &times;
          </button>
        </li>
      </CSSTransition>
    );
  };
  render() {
    const { basket, iceCreams } = this.props;
    return (
      <div className="basket__wrap">
        <h2 className="basket__title">Корзина</h2>
        <TransitionGroup component="ul" className="order">
          {Object.keys(basket).map(this.renderBasket)}
        </TransitionGroup>
        <div className="total">
          Всего:
          <strong> {getTotalPrice(basket, iceCreams)}</strong>
        </div>
      </div>
    );
  }
}

Basket.propTypes = {
  iceCreams: PropTypes.object.isRequired,
  basket: PropTypes.object.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};

export default Basket;
