import Layout from "../src/commons/layout";
import { globalStyles } from "../styles/globalStyle"
import { Global } from '@emotion/react'

// 이 export default 함수가 필요하다.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
      <Component {...pageProps}></Component>
      </Layout>
    </>
  );
}

