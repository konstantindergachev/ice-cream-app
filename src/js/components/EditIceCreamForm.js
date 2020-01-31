import PropTypes from 'prop-types';
import React from 'react';

class EditIceCreamForm extends React.Component {
  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    const { iceCream, updateIceCream, index } = this.props;
    //обновим название мороженного
    //1.получить копию текущей мороженного
    const newIceCream = { ...iceCream };
    const updatedIceCream = {
      newIceCream,
      [name]: value, //динам. вычисляемое св-во
    };
    updateIceCream(index, updatedIceCream);
  };
  render() {
    const { iceCream, deleteIceCream, index } = this.props;
    return (
      <div className="ice-cream__edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={iceCream.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={iceCream.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={iceCream.status}
        >
          <option value="available">Есть!</option>
          <option value="unavailable">Продано!</option>
        </select>
        <textarea
          name="desc"
          placeholder="Desc"
          onChange={this.handleChange}
          value={iceCream.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={iceCream.image}
        />
        <button onClick={() => deleteIceCream(index)}>Удалить мороженое</button>
      </div>
    );
  }
}

EditIceCreamForm.propTypes = {
  iceCream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
    status: PropTypes.string.isRequired,
  }),
  index: PropTypes.string.isRequired,
  updateIceCream: PropTypes.func.isRequired,
};

export default EditIceCreamForm;
