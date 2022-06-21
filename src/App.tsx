import 'animate.css';
import './App.css';
import DashboardComponent from './pages/dashboardComponent/dashboardComponent';
import MenuContextProvider from './contexts/menuContext';
import { Toaster } from 'react-hot-toast';
import UserContextProvider from './contexts/usersContext';
function App() {
  return (
    <MenuContextProvider>
      <UserContextProvider>
        <DashboardComponent />
        <Toaster />
      </UserContextProvider>
    </MenuContextProvider>
  );
}

export default App;
