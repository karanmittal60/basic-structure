class Auth {
  constructor() {
    this.authenticated = true;

    const userData = localStorage.getItem("user")
    console.log("==useData==", userData)
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
