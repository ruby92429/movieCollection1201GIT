const bytoken = localStorage.getItem("tokenKEY");
const byid = localStorage.getItem("idKEY");
const bynickname = localStorage.getItem("nicknameKEY");
console.log(bytoken, byid, bynickname);
const apiURL = `http://localhost:3000`;

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
