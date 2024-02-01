import { Outlet } from 'react-router'
import TopHeader from './components/TopHeader'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
