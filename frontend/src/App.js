import { Outlet } from 'react-router'
import TopHeader from './components/TopHeader'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
