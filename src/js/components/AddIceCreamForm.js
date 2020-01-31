import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

class AddIceCreamForm extends React.Component {
  state = {
    name: '',
    price: '',
    status: 'available',
    desc: '',
    image: '',
  };

  handleChange = (ev) => {
    const { name, price, status, desc, image, value } = ev.target;
    this.setState({
      [name]: value,
      [price]: value,
      [status]: value,
      [desc]: value,
      [image]: value,
    });
  };

  createIceCream = (ev) => {
    ev.preventDefault();
    const { name, price, status, desc, image } = this.state;
    const newIceCream = { name, price, status, desc, image };
    this.props.addIceCream(newIceCream);
    this.setState({
      name: '',
      price: '',
      status: 'available',
      desc: '',
      image: '',
    });
  };
  render() {
    const { name, price, status, desc, image } = this.state;
    return (
      <Fragment>
        <form className="ice-cream__edit" onSubmit={this.createIceCream}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Название"
          />
          <input
            type="text"
            name="price"
            value={price}
            onChange={this.handleChange}
            placeholder="Цена"
          />
          <select name="status" value={status} onChange={this.handleChange}>
            <option value="available">Есть!</option>
            <option value="unavailable">Продано!</option>
          </select>
          <textarea
            name="desc"
            value={desc}
            onChange={this.handleChange}
            placeholder="Описание"
          />
          <input
            type="text"
            name="image"
            value={image}
            onChange={this.handleChange}
            placeholder="Путь к изображению"
          />
          <button type="submit">+ Добавить мороженое</button>
        </form>
      </Fragment>
    );
  }
}

AddIceCreamForm.propTypes = {
  addIceCream: PropTypes.func,
};

export default AddIceCreamForm;
