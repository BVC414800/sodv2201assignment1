
import './App.css';
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import LogInPage from './components/LogInPage';
import RegistrationPage from './components/RegistrationPage';
import SchoolSchedule from './components/SchoolSchedule';
import WorkSchedule from './components/WorkSchedule';
import FreeTimeSchedule from './components/FreeTimeSchedule';
function App() {
  return (
    <div> 
    <NavBar />
    <WelcomePage />
    <RegistrationPage />
    <LogInPage />
    <SchoolSchedule />
    <WorkSchedule />
    <FreeTimeSchedule />
    </div>
  );
}

export default App;
