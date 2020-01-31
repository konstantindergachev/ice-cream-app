import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { base } from '../data/base';
import BackButton from './BackButton';
import Basket from './Basket';
import Checker from './Checker';
import Footer from './Footer';
import Header from './Header';
import IceCream from './IceCream';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    iceCreams: {},
    basket: {},
    isChecked: false,
  };
  componentDidMount() {
    const { params } = this.props.match;
    //1. пересоздаем данные из localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    //2. соединяемся с firebase database
    this.ref = base.syncState(`${params.storeId}/iceCreams`, {
      context: this,
      state: 'iceCreams',
    });
  }
  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.storeId, JSON.stringify(this.state.basket));
  }
  componentWillUnmount() {
    //разъединяемся с firebase database
    base.removeBinding(this.ref);
  }

  addIceCream = (iceCream) => {
    //1. Получить копию существующего state.
    const iceCreams = { ...this.state.iceCreams };
    //2. Добавить новое мороженое к существующим
    iceCreams[`iceCream${Date.now()}`] = iceCream;
    //3. Создать новый объект с новым мороженым
    this.setState({ iceCreams });
  };

  updateIceCream = (key, updatedIceCream) => {
    //1. Получить копию текущего state
    const iceCreams = { ...this.state.iceCreams };
    //2. Обновить полученный state
    iceCreams[key] = updatedIceCream;
    //3. Отправить это в state
    this.setState({ iceCreams });
  };
  deleteIceCream = (key) => {
    //1. Получить копию текущего state
    const iceCreams = { ...this.state.iceCreams };
    //2. Обновить полученный state
    iceCreams[key] = null;
    //3. Обновить state
    this.setState({ iceCreams });
  };
  addToBasket = (key) => {
    //1. Получить копию существующего state.
    const basket = { ...this.state.basket };
    //2. Добавить в корзину или обновить количество мороженого в корзине
    basket[key] = basket[key] + 1 || 1; //если мороженое в корзине есть тогда увелич на 1, иначе добавить первое
    //3. Вызвать обновление state объекта
    this.setState({ basket });
  };
  removeFromBasket = (key) => {
    //1. Получить копию существующего state.
    const basket = { ...this.state.basket };
    //2. Удалить позицию из корзины
    delete basket[key];
    //3. Вызвать обновление state объекта
    this.setState({ basket });
  };
  toggleCheckbox = () => {
    this.setState((oldState) => ({ isChecked: !oldState.isChecked }));
  };
  render() {
    const { isChecked, iceCreams, basket } = this.state;
    const { match, history } = this.props;
    return (
      <Fragment>
        <Checker checked={isChecked} onChange={this.toggleCheckbox} />
        <BackButton history={history} />
        <div className="book">
          <div className="left__page">
            <Header tagline="магазин мороженого" />
            <ul className="ice__creams">
              {Object.keys(iceCreams).map((key) => (
                <IceCream
                  key={key}
                  index={key}
                  details={iceCreams[key]}
                  addToBasket={this.addToBasket}
                />
              ))}
            </ul>
          </div>
          <Basket
            iceCreams={iceCreams}
            basket={basket}
            removeFromBasket={this.removeFromBasket}
          />
          <Inventory
            addIceCream={this.addIceCream}
            iceCreams={iceCreams}
            updateIceCream={this.updateIceCream}
            deleteIceCream={this.deleteIceCream}
            storeId={match.params.storeId}
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired,
};
export default App;
