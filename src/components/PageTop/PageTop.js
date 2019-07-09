import React from 'react';

import './page-top.scss';

function PageTop(props) {
  const { children } = props;
  return <div className="page-top">{ children }</div>
}

export default PageTop;