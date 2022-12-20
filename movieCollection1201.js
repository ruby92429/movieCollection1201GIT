const navbar = document.querySelector(".navbar-right");
const logout = document.querySelector("#out");
const login = document.querySelector("#in");
const bytoken = localStorage.getItem("tokenKEY");
const byid = localStorage.getItem("idKEY");
const bynickname = localStorage.getItem("nicknameKEY");
console.log(bytoken);
memberAccount();

let movieData = []; // 雲端資料的本地紀錄

// 關鍵字搜尋
const searchInput = document.querySelector(".keyword");
const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", keywordSearch);
let keyword = "";
function keywordSearch() {
  keyword = searchInput.value.trim().toLowerCase();
  console.log(keyword);
  compare();
}

async function compare() {
  movieData = await getMovie(); //得到雲端資料的本地紀錄
  console.log(movieData);
  let targetMovie = [];
  targetMovie = movieData.filter(function (item) {
    let title = item.title.toLowerCase(); //電影標題一個個轉小寫為title
    return title.match(keyword); //再將轉小寫為title電影標題去做match比對放入targetMovie
  });
  renderMovie(targetMovie);
}

const baseUrl = "http://localhost:3000";

function getMovie() {
  // let url = `${baseUrl}/movies?_limit=1`;
  let url = `${baseUrl}/movies`;
  return axios
    .get(url)
    .then(function (res) {
      console.log(res);
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

const defNew = document.querySelector(".defNew");
function renderMovie(movie) {
  console.log(movie);
  let str = "";
  movie.forEach((item) => {
    if (item["overview"].length > 120) {
      item["overview"] = item["overview"].substring(0, 120) + "...";
    } //避免內容太多切字串
    str += `
    <div class="col-sm-12"></div>
    <!-- Bootstrap格線系統與RWD的應用 -->

    <div class="new">
      <div class="mainTitle">搜尋結果</div>
      <div class="subTitle">詳請點擊 more 進入~</div>
    </div>

    <div class="col-md-4 col-sm-6">
      <div class="new_wrap">
        <div class="new_item pic">
          <img
            src="${item.cover}"
            alt=""
            width="350"
            height="500"
          />
        </div>

        <div class="new_item text">
          <h4>
            <!-- <div class="html5-video-container" data-layer="0"><video tabindex="-1" class="video-stream html5-main-video" controlslist="nodownload" src="blob:https://www.youtube.com/fd04e121-c822-4f07-bf84-4a541385e4bc" style="width: 894px; height: 503px; left: 0px; top: 0px;"></video></div> -->
            <!-- <video src="clip.mp4" controls></video> -->
            <iframe
              width="300"
              height="150"
              src="${item.video}"
              title="${item.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            <h1>${item.title}</h1>
            <p>
            ${item.overview}

              <a href="detail.html?id=${item.id}"" class="btn">more</a>
              
            </p>
          </h4>
        </div>
      </div>
    </div>

    <div class="defNew_left_top"></div>
    <div class="defNew_right_top"></div>
    <div class="defNew_left_bottom"></div>
    <div class="defNew_right_bottom"></div>
  </div>
    `;
    //於href寫入要連結的網頁網址並加上id
  });
  defNew.innerHTML = str;
}

//判斷使用者有沒有登入
function memberAccount() {
  console.log("777");
  console.log(bytoken);
  let str = "";
  //如果沒有登入
  if (bytoken == null) {
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

// document.querySelector(".logout").addEventListener("click", (e) => {
//   console.log(e.target);
//   const target = e.target.getAttribute("class");
//   if (target === "logout") {
//     localStorage.clear(); /*清空所有登入資料*/

//     location.href = "/memberLogin/memberLogin.html";
//   }
// });

document.querySelector(".login").addEventListener("click", (e) => {
  console.log(e.target);
  const target = e.target.getAttribute("class");
  if (target === "login") {
    location.href = "/memberLogin/memberLogin.html";
  }
});
