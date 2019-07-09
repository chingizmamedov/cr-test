import React from 'react';
import PropTypes from 'prop-types';

import './page-title.scss';

function PageTitle(props) {
  return createTitle(props);
}

function createTitle(props) {
  const { type, title, ...restProps } = props;

  switch(type) {
    case 'h1':
    default:
      return <h1 className="page-title" { ...restProps }>{ title }</h1>;
    case 'h2':
      return <h2 className="page-title page-title_sub-title" { ...restProps }>{ title }</h2>;
  }
}

PageTitle.defaultProps = {
  type: 'h1'
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isSubTitle: PropTypes.bool
};

export default PageTitle;