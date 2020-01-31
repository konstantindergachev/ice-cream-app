import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Checker = ({ checked, onChange }) => {
  return (
    <Fragment>
      <input
        id="book__checker"
        type="checkBox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="book__checker">Буклетный вид</label>
    </Fragment>
  );
};

Checker.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checker;
