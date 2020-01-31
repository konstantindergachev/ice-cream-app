import firebase from 'firebase';
import PropTypes from 'prop-types';
import React from 'react';
import { base, firebaseApp } from '../data/base';
import AddIceCreamForm from './AddIceCreamForm';
import EditIceCreamForm from './EditIceCreamForm';
import Login from './Login';

class Inventory extends React.Component {
  state = {
    user: {},
    uid: null,
    owner: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
        this.setState({ user });
      }
    });
  }

  authHandler = async (authData) => {
    const { storeId } = this.props;
    //1. Находим текущий store в firebase базе
    const store = await base.fetch(storeId, { context: this });
    //2. Если пользователь не зарегестрирован сказать об этом
    if (!store.owner) {
      //сохраняем его как владельца
      await base.post(`${storeId}/owner`, {
        data: authData.user.uid,
      });
    }
    //3. Установить state если есть такой пользователь
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.id,
    });
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const {
      iceCreams,
      updateIceCream,
      deleteIceCream,
      addIceCream,
    } = this.props;
    const { uid, owner } = this.state;
    const logout = <button onClick={this.logout}>Выйти!</button>;

    //1. Проверим являются ли они пользователями
    if (!uid) {
      return <Login authenticate={this.authenticate} />;
    }
    //2. Проверим являются ли они собственниками store
    if (uid !== owner) {
      return (
        <div>
          <p>Извините. Вы не являетесь владельцем!</p>
          {logout}
        </div>
      );
    }
    //3. Проверим являются ли они собственниками
    return (
      <div className="inventory">
        <h2>Товары</h2>
        {logout}
        {Object.keys(iceCreams).map((key) => (
          <EditIceCreamForm
            key={key}
            index={key}
            iceCream={iceCreams[key]}
            updateIceCream={updateIceCream}
            deleteIceCream={deleteIceCream}
          />
        ))}
        <AddIceCreamForm addIceCream={addIceCream} />
      </div>
    );
  }
}

Inventory.propTypes = {
  iceCreams: PropTypes.object.isRequired,
  updateIceCream: PropTypes.func.isRequired,
  deleteIceCream: PropTypes.func.isRequired,
  addIceCream: PropTypes.func.isRequired,
};

export default Inventory;
