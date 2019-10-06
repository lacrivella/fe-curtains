import React from 'react';

// Firebase.
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Styles
import styles from './app.css'; // This uses CSS modules.
import './firebaseui-styling.global.css'; // Import globally.

// Get the Firebase config from the auto generated file.
// const firebaseConfig = require('./firebase-config.json').result;

// Instantiate a Firebase app.
const firebaseApp = firebase.initializeApp(firebaseConfig);


class Firebase extends React.Component {
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  state = {
    isSignedIn: undefined,
  };

  /**
   * @inheritDoc
   */
  componentDidMount() {
    this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  }

  /**
   * @inheritDoc
   */
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  /**
   * @inheritDoc
   */
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <i className={styles.logoIcon + ' material-icons'}>photo</i> My App
        </div>
        <div className={styles.caption}>This is a cool demo app</div>
        {this.state.isSignedIn !== undefined && !this.state.isSignedIn &&
          <div>
            <StyledFirebaseAuth className={styles.firebaseUi} uiConfig={this.uiConfig}
              firebaseAuth={firebaseApp.auth()}/>
          </div>
        }
        {this.state.isSignedIn &&
          <div className={styles.signedIn}>
            Hello {firebaseApp.auth().currentUser.displayName}. You are now signed In!
            <a className={styles.button} onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
          </div>
        }
      </div>
    );
  }
}

export default Firebase;
