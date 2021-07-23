import AppNav from '../../components/AppNav';
import Footer from '../../components/Footer';
const Layout = ({ children }) => {
  return (
    <div className="container">
      <AppNav />
      {children}
      <Footer />
    </div>
  )
};

export default Layout;
