const account = document.querySelector(".account");
const nickname = document.querySelector(".nickname");
const password = document.querySelector(".password");
const signUpBtn = document.querySelector(".signUpBtn");
console.log(account, nickname, password, signUpBtn);

const apiURL = `http://localhost:3000`;

signUpBtn.addEventListener("click", function (e) {
  console.log("是否被點擊");
  // signUp();
  callSingUp();
});

// function signUp(email, nickname, pwd) {
//   axios
//     .post(`${apiURL}/users`, {
//       user: {
//         email: email,
//         nickname: nickname,
//         password: pwd,
//       },
//     })
//     .then((res) => console.log(res)) //成功時
//     .catch((error) => console.log(error.response)); //失敗時
// }

function callSingUp() {
  if (account.value == "" || password.value == "" || nickname.value == "") {
    //如果其中一個為空，則return中斷，且後面程式都不跑
    alert("請填寫正確資訊");
    return; //中斷此函示後面也就不會繼續跑
  } else {
    // let obj = {
    //   user: {
    //     email: account.value,
    //     password: password.value,
    //     nickName: nickname.value,
    //   },
    // };
    // console.log(obj);

    axios
      .post(`${apiURL}/signup`, {
        email: account.value,
        password: password.value,
        nickName: nickname.value,
      })
      .then(function (response) {
        console.log(response);

        alert("恭喜帳號註冊成功");

        // if (response.data.message == "帳號註冊成功") {
        //   //利用data中的 message屬性的內容告知已成功，印在網頁上告訴顧客
        //   alert("恭喜帳號註冊成功");
        //   location.href = "/password todolist0901/password%20todolist0901.html";
        // } else {
        //   alert("帳號註冊失敗");
        // }
        account.value = ""; //輸入完將填寫欄位自動清空
        nickname.value = ""; //輸入完將填寫欄位自動清空
        password.value = ""; //輸入完將填寫欄位自動清空
      })
      .catch(function (error) {
        alert("帳號註冊有誤");
        console.log(error.response);
      });
  }
}

//登入

const login = document.querySelector(".sendBtn");
console.log("999", login);
login.addEventListener("click", function (e) {
  console.log("是否登入");
  location.href = "/memberLogin/memberLogin.html";
});
