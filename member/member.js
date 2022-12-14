let token = "";
let id = "";

//註冊
function signUp() {
  axios
    .post("http://localhost:3000/signup", {
      email: "peter@mail.com",
      password: "peterPassword",
      nickName: "PETER",
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}

//登入
function login() {
  axios
    .post("http://localhost:3000/login", {
      email: "peter@mail.com",
      password: "peterPassword",
    })
    .then(function (response) {
      console.log(response.data);
      token = response.data.accessToken; //取得token
      id = response.data.user.id; //取得id
    })
    .catch(function (error) {
      console.log(error.response);
    });
}

//addPost()的存放id位置方法一
function addPost() {
  axios
    .post(
      `http://localhost:3000/600/collections`,
      {
        movieId: 2,
        userId: id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}

//addPost()的存放id位置方法二
/*
      function addPost() {
        axios
          .post(
            `http://localhost:3000/600/users/${id}/posts`,
            {
              content: "今天要洗臉4",
            },
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          )
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error.response);
          });
      }
      */

//修改密碼
function updatePassword(updateid) {
  axios
    .patch(
      `http://localhost:3000/600/users/${updateid}`,
      {
        password: "peterChangePassw0rd",
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
