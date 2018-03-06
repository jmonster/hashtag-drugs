import { inject } from '@ember/service';
import Service from '@ember/service';
const STORAGE_PATH = "uploads/"

export default Service.extend({
  firebaseApp: inject(),
  session: inject(),

  upload(name, blobOrFile) {
    const session = this.get('session');
    const userId = session.get('currentUser.id');

    const firebase = this.get('firebaseApp');
    const imagePath = `${STORAGE_PATH}/users/${userId}/${name}`
    const storageRef = firebase.storage().ref(imagePath);

    return storageRef.put(blobOrFile);
  }
});
