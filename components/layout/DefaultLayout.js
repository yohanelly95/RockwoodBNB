import Footer from '../common/Footer';
import Nav from '../common/Nav';

const DefaultLayout = ({ wrapperClass, title, children }) => (
  <div className={wrapperClass}>
    <title>{title}</title>
    <Nav />
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
