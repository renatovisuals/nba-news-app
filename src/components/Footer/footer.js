import React from 'react';
import styles from './footer.css';
import {Link} from 'react-router-dom';

const footer = () => (
      <div className={styles.footer}>
        <Link to="/" className={styles.logo}>
          <img alt="nba logo" src="/images/nba_logo.png" />
        </Link>
        <div>
          @NBA 2018 All rights reserved.
        </div>
      </div>
)


export default footer;
