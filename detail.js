const id = location.href.split("=")[1]; //從網址中取出id，以利後續的axios得以利用
console.log(id);
const defIntro = document.querySelector(".defIntro");
let introData = [];
const _url = "http://localhost:3000";
getIntro();
function getIntro() {
  console.log(id);
  axios
    .get(`${_url}/movies?id=${id}`)
    .then(function (res) {
      console.log(res);
      introData = res.data;
      console.log(introData);
      renderIntro(introData);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderIntro(intro) {
  let str = "";
  intro.forEach((item) => {
    if (item["overview"].length > 120) {
      item["overview"] = item["overview"].substring(0, 120) + "...";
    } //避免內容太多切字串
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
    
        <div class="defIntro_left_top"></div>
        <div class="defIntro_right_top"></div>
        <div class="defIntro_left_bottom"></div>
        <div class="defIntro_right_bottom"></div>
      </div>
        `;
  });
  defIntro.innerHTML = str;
}
