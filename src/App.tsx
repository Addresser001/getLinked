import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import AppHeader from './component/header';
import RegisterPage from './pages/register/register';
import ContactPage from './pages/contact/contact';
import MobileNavigation from './component/mobileNavigation';

function App() {


  return (
    <div className='App'>
      <AppHeader />
      <MobileNavigation />
      <img src="/images/hero-light-bg.png" className='light_bg' alt="hero light bg" />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/register' component={RegisterPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
