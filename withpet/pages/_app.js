import "../styles/globals.css";
import NavBar from '../src/component/navBar.js';

// 이 export default 함수가 필요하다.
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps}></Component>
    </>
  );
}