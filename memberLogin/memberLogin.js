//登入
const loginAccount = document.querySelector(".account");
const loginPassword = document.querySelector(".password");
const login = document.querySelector(".sendBtn");
console.log(loginAccount, loginPassword, login);

const apiURL = `http://localhost:3000`;
let token = ""; //尚未取得token，設為空值
let id = "";
login.addEventListener("click", function (e) {
  console.log("是否被登入");
  loginUp();
});

function loginUp() {
  // let loginObj = {
  //   user: {
  //     email: loginAccount.value,
  //     password: loginPassword.value,
  //   },
  // };
  // console.log(loginObj);

  axios
    .post(`${apiURL}/login`, {
      email: loginAccount.value,
      password: loginPassword.value,
    })
    .then((res) => {
      console.log(res);
      token = response.data.accessToken; //取得token
      id = response.data.user.id; //取得id
      console.log(token, id);
      //token = res.headers.authorization; //成功取得token
      localStorage.setItem("tokenKEY", token);
      alert("登入成功");
      //console.log(res);
      //console.log(res.data.nickname);
      //const nickVALUE = res.data.nickname;
      //console.log(nickVALUE);
      //localStorage.setItem("nicknameKEY", nickVALUE);
      //location.href = "/member/member.html";
      //loginAccount.value = ""; //輸入完將填寫欄位自動清空
      //loginPassword.value = ""; //輸入完將填寫欄位自動清空
    })
    .catch((error) => {
      console.log(error.response);
      alert("登入失敗，此帳號不存在或帳號密碼錯誤");
    }); //失敗時
}

//註冊
const signUp = document.querySelector(".signUpBtn");
console.log("999", signUp);
signUp.addEventListener("click", function (e) {
  console.log("是否註冊");
  location.href = "/memberSignUp/memberSignUp.html";
});

// location.href = './20220308%20myfavorite%20.htm';
