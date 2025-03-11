import {Routes, Route} from 'react-router-dom'

import SignupPage from './pages/SignupPage';
import GoogleKeepClone from "./pages/Dashboard"
import {ThemeProvider} from './context/ThemeContext'
import LoginPage from "./pages/Login";
import GoogleKeepLanding from './pages/LandingPage';
import ApiTest from './pages/ApiTest';
import CreateNote from './components/CreateNote';
import EditTask from './components/EditTask';

const App = () => {

  return (
    
    <ThemeProvider>
      <Routes>
      <Route path='/' element={<GoogleKeepLanding/>}/>
      <Route path='/dashboard' element={<GoogleKeepClone/>}/>
      <Route path='/dashboard/create' element={<CreateNote/>}/>
      <Route path='/dashboard/edit' element={<EditTask/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/api' element={<ApiTest/>}/>
      
      </Routes>
    </ThemeProvider>  
  );
};

export default App;
