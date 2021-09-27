//로그인 역활만함
import firebase from 'firebase/app';
import firebaseApp from './firebase';

class AuthService {
  //로그인
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  //로그인 상태를 확인
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    firebaseApp
      .auth()
      .signOut()
      .catch((error) => {
        console.log('e', error);
      });
  }
}

export default AuthService;
