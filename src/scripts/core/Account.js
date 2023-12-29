import {firebaseAuth} from "src/scripts/firebase";
import {onAuthStateChanged} from "firebase/auth";

export class Account {

  /**
   * This method registers an event handler that is called when the current Firebase account has changed in any way.
   * @param handler A function that is called when the event has occurred. The function has the account object that
   * has changed as parameter. If there is no active Firebase account then the parameter is null.
   * @return {Promise<void>} Nothing.
   */
  static async registerEventAccountStateChanged(handler) {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user === null) {
        handler(null);
      }
    });
  }
}
