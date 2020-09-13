import '../styles/index.css';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';
import {ToastContainer} from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}/>
}

export default MyApp
