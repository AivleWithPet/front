import { Provider } from "react-redux";
import Layout from "../src/commons/layout";
import { globalStyles } from "../styles/globalStyle";
import { Global } from '@emotion/react';
import store from "../src/commons/store/store.js"
import { useLoading } from "../src/commons/useLoading/useLoading";
import { LoadingSpinner } from "../src/components/LoadingSpinner/LoadingSpinner";

// 이 export default 함수가 필요하다.
export default function App({ Component, pageProps }) {
  const isLoading = useLoading();

  return (
    <>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <Layout>
          {isLoading ? <LoadingSpinner /> : null} 
          <Component {...pageProps}></Component>
        </Layout>
      </Provider>
    </>
  );
}
