import { Reset } from 'styled-reset';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root{
    --main-color: #a8bc93;
    /* 비활성화 버튼*/
    --sub-color: #dbe3d2;
    /* 서브폰트 (어두운 회색) */
    --sub-font:#767676;
    /* 어두운 폰트 */
    --font-color:  #515a48;
    --border-color: #dbdbdb;
    /* 배경컬러 */
    --bg-color: #f2f2f2;
    /* error 컬러 */
    --error-color: #EB5757;
    /* 서브보더 */
    --sub-border: #c4c4c4;
    --font-family: 'Spoqa Han Sans Neo', 'sans-serif';
   }
    .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body,button{
        font-family: var(--font-family);
        font-size:14px;
        line-height:18px;
    }
body{
  overflow-x: hidden;
}
    a {
        display: block;
        text-decoration: none;
        color: #000;
    }
    ::-webkit-scrollbar {
    width: 0px;
  }
img{
    object-fit: cover;
}
.react-confirm-alert-button-group{
  justify-content: flex-end;
  z-index: 300;
  button{
    border: 1px solid var(--main-color);
    background-color: var(--main-color);
    color: #fff;
  }
  button[label='취소']{
    background-color: #fff;
    border: 1px solid var(--main-color);
    box-sizing: border-box;
    color: var(--font-color);
  }
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Reset />
      <Router />
    </>
  );
}
export default App;
