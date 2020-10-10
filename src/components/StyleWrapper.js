import styled from 'styled-components';

const Wrapper = styled.div`
  .container {
    display: flex;
  }

  .leftPane {
    height: 200px;
    background: blue;
  }

  .rightPane {
    width: 300px;
    height: 200px;
    background: red;
  }

  .seperator {
    display: flex;
    cursor: col-resize;
    width: 6px;

    div {
      width: 3px;
      &:nth-child(1) {
        background: blue;
      }
      &:nth-child(2) {
        background: red;
      }
    }
  }
`;

export default Wrapper;

