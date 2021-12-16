import { Header, Footer } from 'components/common/common';

const MainLayout = (props) => {
  const {children, activeLink} = props;
  return (
    <>
      <Header activeLink={activeLink}/>
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
