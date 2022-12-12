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
    --error-color: #EB5757
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
