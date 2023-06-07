import "../styles/globals.css";
import Layout from "../src/commons/layout";

// 이 export default 함수가 필요하다.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
      <Component {...pageProps}></Component>
      </Layout>
    </>
  );
}

