import React from 'react';
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css';

function LandingPage() {
  return (
    <React.Fragment>
      <h1>Accessible Components</h1>
      <nav className={s.page_layout}>
        <Link to="/material">Material-UI</Link>
        <Link to="/chakra">Chakra UI</Link>
      </nav>
    </React.Fragment>
  );
}

export default LandingPage;
