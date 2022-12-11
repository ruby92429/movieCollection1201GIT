const id = location.href.split("=")[1]; //從網址中取出id，以利後續的axios得以利用
console.log(id);
const defIntro = document.querySelector(".defIntro");
const defColumn = document.querySelector(".defColumn");
const local = document.querySelector(".local");
const remote = document.querySelector(".remote");
const dialogue = document.querySelector(".dialogue");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
let idData = [];
let commentData = [];
const _url = "http://localhost:3000";
initIntroColumn();
initComment();
function initIntroColumn() {
  console.log(id);
  axios
    .get(`${_url}/movies?id=${id}`)
    .then(function (res) {
      console.log(res);
      idData = res.data;
      console.log(idData);
      renderIntro(idData);
      renderColumn(idData);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderIntro(intro) {
  console.log(intro);
  let str = "";
  intro.forEach((item) => {
    str += `
    <div class="col-sm-12"></div>
    <!-- Bootstrap格線系統與RWD的應用 -->

    <div class="intro">
      <div class="mainTitle">電影介紹</div>
      <div class="subTitle">最詳細的內容都在這~</div>
    </div>

    <div class="col-md-4 col-sm-6">
      <div class="intro_wrap">
        <div class="intro_item pic">
          <img
            src="${item.cover}"
            alt=""
            width="350"
            height="500"
          />
        </div>

        <div class="intro_item text">
          <div class="infomation">
            <h1>${item.title}</h1>
            <div class="release">上映日期:${item.date}</div>
            <div class="time">片長:${item.runtime}</div>
            <div class="director">
            導演:${item.director}
            </div>
            <div class="actor">
            演員:${item.characters}
            </div>
          </div>

          <div class="deatil">
            <div class="type">
              <div class="genre">${item.genre}</div>
              <div class="mark">${item.mark}</div>
            </div>

            <iframe
              width="300"
              height="150"
              src="${item.video}"
              title="${item.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="defIntro_left_top"></div>
    <div class="defIntro_right_top"></div>
    <div class="defIntro_left_bottom"></div>
    <div class="defIntro_right_bottom"></div>
        `;
  });
  defIntro.innerHTML = str;
}

function renderColumn(column) {
  console.log(column);
  let str = "";
  column.forEach((item) => {
    str += `<div class="col-sm-12"></div>
    <!-- Bootstrap格線系統與RWD的應用 -->

    <div class="column">
      <div class="mainTitle">電影專欄</div>
    </div>

    <div class="col-md-4 col-sm-6">
      <div class="column_wrap">
        <div class="column_item pic">
          <img
            src="${item.posters}"
            alt=""
            width="250"
            height="350"
          />
        </div>

        <div class="column_item text">
          <h1>${item.title}</h1>
          <p>
          ${item.column}
          </p>
        </div>
      </div>
    </div>

    <div class="defColumn_left_top"></div>
    <div class="defColumn_right_top"></div>
    <div class="defColumn_left_bottom"></div>
    <div class="defColumn_right_bottom"></div>
    `;
  });
  defColumn.innerHTML = str;
}

function initComment() {
  console.log(id);
  axios
    .get(`${_url}/movies/${id}/comments`)
    .then(function (res) {
      console.log(res);
      commentData = res.data;
      console.log(commentData);
      renderComment(commentData);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderComment(comment) {
  console.log(comment);
  let oddstr = "";
  let evenstr = "";
  comment.forEach((item, index) => {
    if (index % 2 == 0) {
      console.log(item);
      oddstr += ` <div class="user remote">
      <div class="reply">
        <div class="pic">
          <img src="${item.photo}" alt="" />
        </div>
        <div class="name">${item.name}</div>
      </div>
      <div class="txt">
      ${item.content}
      </div>
    </div>`;
    } else {
      console.log(item);
      evenstr += ` <div class="user local">
      <div class="reply">
        <div class="pic">
          <img src="${item.photo}" alt="" />
        </div>
        <div class="name">${item.name}</div>
      </div>
      <div class="txt">
      ${item.content}
      </div>
    </div>`;
    }
  });
  one.innerHTML = oddstr;
  two.innerHTML = evenstr;
}
