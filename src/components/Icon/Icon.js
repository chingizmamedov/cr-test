import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Icon(props) {
  const { name, className } = props;
  const classes = classNames('icon', className);
  return (
    <svg className={ classes }>
      <use xlinkHref={ `#${ name }` } />
    </svg>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};


export default Icon;