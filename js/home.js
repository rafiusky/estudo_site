document.querySelector('#form-busca').onsubmit = function () {
  if (document.querySelector('#q').value == '') {
    document.querySelector('#form-busca').style.background = 'red';
    return false;
  }
}

var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocabanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('.destaque img').src = banners[bannerAtual];
}

/*setInterval(trocabanner, 4000);*/

var timer = setInterval(trocabanner, 4000);

var controle = document.querySelector('.pause');

controle.onclick = function () {
  if (controle.className == 'pause') {
    clearInterval(timer);
    controle.className = 'play';
  } else {
    timer = setinterval(trocabanner, 4000);
    controle.className = 'pause';
  }
  return false
}