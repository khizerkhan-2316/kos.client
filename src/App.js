import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App flex flex-wrap w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
