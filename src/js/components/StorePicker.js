import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Footer from './Footer';

class StorePicker extends React.Component {
  state = {
    name: '',
  };
  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  goToStore = (ev) => {
    ev.preventDefault();
    const storeName = this.state.name;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <Fragment>
        <form className="enter" onSubmit={this.goToStore}>
          <h4 className="greeting__text">Вас приветствует магазин</h4>
          <h2 className="greeting__title">"Сладкий морозко"</h2>
          <h4 className="greeting__text">Для входа введите имя</h4>
          <input
            className="enter__input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            placeholder="ваше имя"
          />
          <button className="enter__btn">Вход -></button>
        </form>
        <Footer />
      </Fragment>
    );
  }
}

StorePicker.propTypes = {
  history: PropTypes.object,
};

export default StorePicker;
