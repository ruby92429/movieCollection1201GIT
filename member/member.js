const bytoken = localStorage.getItem("tokenKEY");
console.log(bytoken);
const byid = localStorage.getItem("idKEY");
const bynickname = localStorage.getItem("nicknameKEY");
console.log(bytoken, byid, bynickname);
const popcorn = document.querySelector(".cornNav img");
const navbar = document.querySelector(".navbar-right");
const logout = document.querySelector("#out");
const login = document.querySelector("#in");
const apiURL = `http://localhost:3000`;
memberAccount();
/*近期欣賞*/
getRecent();
let recentData = [];
function getRecent() {
  axios
    .get(`${apiURL}/user/${byid}/recents?_expand=movie&_limit=3`)
    .then(function (res) {
      console.log(bytoken, byid, bynickname);
      console.log(res);
      recentData = res.data;
      console.log(recentData);
      renderRecent(recentData);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const recentRow = document.querySelector(".defrecent .imgRow");
function renderRecent(movie) {
  console.log(movie);
  let str = "";
  movie.forEach((item) => {
    str += `
    <div class="poster-recent">
                  <img
                    src="${item.movie.cover}"
                    alt=""
                  />

                  <div class="recentTitle">
                    <h3>${item.movie.title}</h3>
                  </div>
                </div>
    `;
    //於href寫入要連結的網頁網址並加上id
  });
  recentRow.innerHTML = str;
}

/*相似推薦*/
getSimilar();
let similarData = [];
function getSimilar() {
  axios
    .get(`${apiURL}/user/${byid}/recommendations?_expand=movie&_limit=3`)
    .then(function (res) {
      console.log(bytoken, byid, bynickname);
      console.log(res);
      similarData = res.data;
      console.log(similarData);
      renderSimilar(similarData);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const similarRow = document.querySelector(".defsimilar .imgRow");
function renderSimilar(movie) {
  console.log(movie);
  let str = "";
  movie.forEach((item) => {
    str += `
    <div class="poster-recent">
                  <img
                    src="${item.movie.cover}"
                    alt=""
                  />

                  <div class="recentTitle">
                    <h3>${item.movie.title}</h3>
                  </div>
                </div>
    `;
    //於href寫入要連結的網頁網址並加上id
  });
  similarRow.innerHTML = str;
}

//判斷使用者有沒有登入
function memberAccount() {
  console.log("777");
  console.log(bynickname);

  let str = "";
  //如果沒有登入
  if (bytoken == "") {
    str += `<button class="login">登入</button>`;
    navbar.innerHTML = str;
    alert("沒有登入");
  } else {
    //如果有登入
    str += `<button class="myaccount">${bynickname}</button>
    <button class="logout">登出</button>`;
    navbar.innerHTML = str;
    alert("有登入");
  }
}

//綁定登出按鈕的部分獨立寫在外面
document.querySelector(".logout").addEventListener("click", (e) => {
  console.log(e.target);
  const target = e.target.getAttribute("class");
  if (target === "logout") {
    //localStorage.setItem("tokenKEY", ""); /*清空tokenKEY資料*/
    localStorage.clear(); /*清空所有登入資料*/

    location.href = "/memberLogin/memberLogin.html";
  }
});

/*
logout.addEventListener("click", loginAccount);
function loginAccount() {
  console.log("555");
  localStorage.clear();
  // console.log(bytoken);
  // localStorage.removeItem(bytoken);

  alert("登出");
  location.href = "/memberLogin/memberLogin.html";
}
*/

popcorn.addEventListener("click", turnHTML);
function turnHTML() {
  location.href = "/index.html";
  alert("跳到首頁");
}
