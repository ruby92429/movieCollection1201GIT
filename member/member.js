let token = "";
let id = "";

//註冊功能
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

//登入功能
function login() {
  axios
    .post("http://localhost:3000/login", {
      email: "peter@mail.com",
      password: "peterChangePassword",
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

//新增功能
//addPost()的存放id位置方法一
function addPost() {
  axios
    .post(
      `http://localhost:3000/600/collections`,
      {
        movieId: 9,
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
/*
  //addPost()的存放id位置方法二
  function addPost() {
    axios
      .post(
        `http://localhost:3000/600/users/${id}/collections`,
        {
          movieId: 17,
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

//修改密碼功能
function updatePassword(updateid) {
  axios
    .patch(
      `http://localhost:3000/600/users/${updateid}`,
      {
        password: "peterChangePassword",
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

//刪除收藏collection
//刪除的collectionId要再去用if判斷此user有無收藏此collectionId，如果user一開始就沒有收藏此collectionId就會出錯
function remove(collectid) {
  axios
    .delete(
      `http://localhost:3000/600/collections/${collectid}`,

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
