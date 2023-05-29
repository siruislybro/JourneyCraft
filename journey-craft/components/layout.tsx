import Navbar from './navigationBar';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className='mt-20'>{children}</main>
    </div>
  );
}

export default Layout;