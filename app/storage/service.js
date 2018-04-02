import { inject } from '@ember/service';
import Service from '@ember/service';
const STORAGE_PATH_PREFIX = "uploads/"

export default Service.extend({
  firebaseApp: inject(),
  session: inject(),

  // TODO remove this function (+ update code that uses it)
  upload2(name, blobOrFile) {
    const session = this.get('session');
    const userId = session.get('currentUser.id');

    const firebase = this.get('firebaseApp');
    const imagePath = `${STORAGE_PATH_PREFIX}/users/${userId}/${name}`
    const storageRef = firebase.storage().ref(imagePath);

    return storageRef.put(blobOrFile);
  },

  upload(name, blobOrFile, path) {
    const firebase = this.get('firebaseApp');
    const storageRef = firebase.storage().ref(`${STORAGE_PATH_PREFIX}/${path}/${name}`);
    return storageRef.put(blobOrFile);
  }
});
