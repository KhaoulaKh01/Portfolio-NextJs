//_app.js
import { Provider } from 'react-redux';
import store from '../src/Store/index'; // Assurez-vous que le chemin est correct

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
