import Footer from './Footer';
import Header from './Header';

const DefaultLayout = ({ wrapperClass, title, children }) => (
  <div className={wrapperClass}>
    <title>{title}</title>
    <Header />
    {children}
    <Footer />
  </div>
);

export default DefaultLayout;
