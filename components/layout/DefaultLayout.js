import Footer from '../common/Footer';
import Nav from '../common/Nav';
import {ToastContainer} from 'react-toastify';

const DefaultLayout = ({ wrapperClass, title, children }) => (
  <div className={wrapperClass}>
    <title>{title}</title>
    <Nav />
    {children}
    <ToastContainer position="top-center" />
    <Footer />
  </div>
);

export default DefaultLayout;
