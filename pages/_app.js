import { Provider } from "react-redux";
import Layout from "../src/commons/layout";
import { globalStyles } from "../styles/globalStyle";
import { Global } from '@emotion/react';
import store from "../src/commons/store/store.js"

// 이 export default 함수가 필요하다.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </Provider>
    </>
  );
}
