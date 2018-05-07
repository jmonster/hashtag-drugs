export default function() {
  this.timing = 0;
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/users');
  this.get('/users/:id');
  this.patch('/users/:id');
  this.post('/users');

  this.get('/brands');
  this.get('/brands/:id');
  this.post('/brands');
  this.delete('/brands/:id');

  this.get('/vendors');
  this.get('/vendors/:id');
  this.post('/vendors');
  this.delete('/vendors/:id');

  this.get('/products');
  this.get('/products/:id');
  this.post('/products');
  this.delete('/products');

  this.get('/reviews/:id');
  this.post('/reviews');
  this.delete('/reviews');

  this.delete('/pictures');
  this.post('/pictures');

  this.get('/locations');
  this.post('/locations');
  this.delete('/locations');

  this.get('/carts/:id');
  this.post('/carts');
  this.patch('/carts/:id')
  this.patch('/cart-items/:id')
  this.delete('/cart-items/:id')

  this.get('/orders');
  this.get('/deliveries/:id');

  this.get('/blogPosts');
  this.get('/blogPosts/:id');
  this.get('/announcements');
  this.get('/announcements/:id');

  // Firebase Auth ////
  this.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo', {
    "kind": "identitytoolkit#GetAccountInfoResponse",
    "users": [
      {
        "localId": "currentUser",
        "lastLoginAt": "1525488927000",
        "createdAt": "1525488927000"
      }
    ]
  });

  this.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser', {
    "kind": "identitytoolkit#SignupNewUserResponse",
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NGQ1ZjMyZTE4NmRjMWUxNjA0MjhiZDdhODE1NDI2ZjI3NDg4MmIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9wcG90c3RvcCIsInByb3ZpZGVyX2lkIjoiYW5vbnltb3VzIiwiYXVkIjoidG9wcG90c3RvcCIsImF1dGhfdGltZSI6MTUyNTYwNjU3OSwidXNlcl9pZCI6IlExWjBINU15V3RUNW1NamducDdyc0h5NHEzZzEiLCJzdWIiOiJRMVowSDVNeVd0VDVtTWpnbnA3cnNIeTRxM2cxIiwiaWF0IjoxNTI1NjA2NTc5LCJleHAiOjE1MjU2MTAxNzksImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiYW5vbnltb3VzIn19.1zpR3jdGSkBRM8Op5lU9stB04jXURQHAOMOn7327fZM07e0_0BLmarXbtVJPLW6WTwZj54Z3-baFlaAU_WcfKuP3N7fyNWSfRG3OPRm5MtLhc27WLiitmNmjnE2ZCU0egolR43W1m3ZOulvzGzB0smg6vJ3y14qlIur83fpfQxg7-WdMjqvTo3MPsBntlV7j2SghfPqz3tVzn0VpPqdOoLv2AUy6h9Awx60kX2wsGl0rs7IMqaOIgG4oGkVO8fHhQEMf_0F2r8bFVhdt8b47xfl3isqEJJ2ynzGWHamPiJjRRy6ZE_L_w8wuQ2nqz4UONA2nGvPVGg5Afkfj_6XGuA",
    "refreshToken": "AK2wQ-xgnbYH_N6TwZB2LWBJeR1fpJNxUA-4dYqGB5WzAeHGorKHqNrXL8Q8ugWqyhvMMbRJ3Gs2WIsRnC-3-am5veeuP9o7mo9aRlYQAoinUsCOFYsVUkR5_7F1YMQ48jly13K3WqpKsjICwcZFYvXfiCnXoqqo3TW02dzCCOAeguT2ZAjbrio",
    "expiresIn": "3600",
    "localId": "currentUser"
  });

  this.post('https://securetoken.googleapis.com/v1/token', {
    "access_token": "eyJhbGciOiJSUzI1NiIsImtpZdOslaPQEri1ZjMyZTE4NmRjMWUxNjA0MjhiZDdhODE1NDI2ZjI3NDg4MmIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9wcG90c3RvcCIsInByb3ZpZGVyX2lkIjoiYW5vbnltb3VzIiwiYXVkIjoidG9wcG90c3RvcCIsImF1dGhfdGltZSI6MTUyNTYwNjU3OSwidXNlcl9pZCI6IlExWjBINU15V3RUNW1NamducDdyc0h5NHEzZzEiLCJzdWIiOiJRMVowSDVNeVd0VDVtTWpnbnA3cnNIeTRxM2cxIiwiaWF0IjoxNTI1NjU5Mzc2LCJleHAiOjE1MjU2NjI5NzYsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiYW5vbnltb3VzIn19.sZOZnyywXcFhUWp9oj6LffWV4EhjwF_hluRtOcZogCv32YsUOIh_5zDwm7LQwQGdAiRFsrTYB-okv8-j39J4SBvn3im4XDmYrzT_TvOsI9FYiJvm_7cuvwhF2LA3cagO_9b-cdgZYm1dvjNtBojb511k1zSbofj8F_-TXTioo-4iDyf6Prw5IQhiZe_IanofPTxNdlM-_3SoSzCoZpX4tfBtWtxqpCvJpELqvOEWCddEZxqNn6_DscKqj9tYyyrSOLxBlU1llpVfOrux1K5zjFGnvCmcvXJDh0F-1U64Sbd42KQXQ9cnhA2VTha20PGbButjtq7PTPEwx7GKOgTocg",
    "expires_in": "3600",
    "token_type": "Bearer",
    "refresh_token": "AK2wQ-xgnbYH_N6TAoslqEprit031fpJNxUA-4dYqGB5WzAeHGorKHqNrXL8Q8ugWqyhvMMbRJ3Gs2WIsRnC-3-am5veeuP9o7mo9aRlYQAoinUsCOFYsVUkR5_7F1YMQ48jly13K3WqpKsjICwcZFYvXfiCnXoqqo3TW02dzCCOAeguT2ZAjbrio",
    "id_token": "eyJhbGciOiJSUzI1NiIlsaldSlwelqNmRjMWUxNjA0MjhiZDdhODE1NDI2ZjI3NDg4MmIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9wcG90c3RvcCIsInByb3ZpZGVyX2lkIjoiYW5vbnltb3VzIiwiYXVkIjoidG9wcG90c3RvcCIsImF1dGhfdGltZSI6MTUyNTYwNjU3OSwidXNlcl9pZCI6IlExWjBINU15V3RUNW1NamducDdyc0h5NHEzZzEiLCJzdWIiOiJRMVowSDVNeVd0VDVtTWpnbnA3cnNIeTRxM2cxIiwiaWF0IjoxNTI1NjU5Mzc2LCJleHAiOjE1MjU2NjI5NzYsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiYW5vbnltb3VzIn19.sZOZnyywXcFhUWp9oj6LffWV4EhjwF_hluRtOcZogCv32YsUOIh_5zDwm7LQwQGdAiRFsrTYB-okv8-j39J4SBvn3im4XDmYrzT_TvOsI9FYiJvm_7cuvwhF2LA3cagO_9b-cdgZYm1dvjNtBojb511k1zSbofj8F_-TXTioo-4iDyf6Prw5IQhiZe_IanofPTxNdlM-_3SoSzCoZpX4tfBtWtxqpCvJpELqvOEWCddEZxqNn6_DscKqj9tYyyrSOLxBlU1llpVfOrux1K5zjFGnvCmcvXJDh0F-1U64Sbd42KQXQ9cnhA2VTha20PGbButjtq7PTPEwx7GKOgTocg",
    "user_id": "Q1Z0H5MyWtT5mMjgnp7rsHy4q3g1",
    "project_id": "296002376021"
  });
}
