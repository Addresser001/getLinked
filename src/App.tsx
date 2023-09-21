import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './pages/home';
import AppHeader from './component/header';
import RegisterPage from './pages/register/register';
import ContactPage from './pages/contact/contact';

function App() {
  const location = useLocation();
  let cursorRef = useRef<any>(null);
  let cursorRef2 = useRef<any>(null);

  return (
    <div className='App'>
      <AppHeader />
      <div ref={cursorRef} className='cursor'></div>
      <div ref={cursorRef2} className='cursor cursor2'></div>
      <AnimatePresence initial={false} mode='wait'>
        <Switch location={location} key={location.pathname}>
          <Route path='/' component={HomePage} exact />
          <Route path='/register' component={RegisterPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
