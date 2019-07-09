import css from 'styled-jsx/css';

export const modal = css`
  .modal {
    min-height: 0;
    min-width: 0;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: rgba(0,0,0,.5);
    z-index: 15;
    overflow: auto;
    min-height: 0;
    min-width: 0;
    font-size: 0;
    text-align: center;
  }

  .modal-holder {
    font-size: 14px;
    min-height: 0;
    min-width: 0;
    outline: none;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
  }
`;