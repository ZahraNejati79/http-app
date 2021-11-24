import Footer from "./Component/RouterComponents/Footer";
import Header from "./Component/RouterComponents/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
