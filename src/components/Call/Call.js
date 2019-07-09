import React from 'react';
import './call.scss';

function Call() {
  return (
    <div className="call">
      <a href="tel: +73433021022" className="call__phone">+7 (343) 302-10-22</a>
      <button className="call__order-button">Заказать звонок</button>
    </div>
  )
}

export default Call;