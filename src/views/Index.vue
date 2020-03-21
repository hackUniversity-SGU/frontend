<template>
  <div class="index-page">
    <main>
      <div class="cover">
        <h1>
          Безлимитная коллекция
          <br />печатных книг по подписке
        </h1>
        <div class="description">
          Зарегистрируйтесь и берите интересную для вас литературу в
          <br />ближайщих от вас постаматах.
        </div>
        <div class="video">
          <youtube :video-id="videoId"></youtube>
        </div>
      </div>
      <div class="steps">
        <div class="title">
          <h1>Как пользоваться</h1>
          <div class="step">
            <div class="num">1</div>
            <div class="text">Зарегистрироваться и оформить подписку</div>
          </div>
          <div class="step">
            <div class="num">2</div>
            <div class="text">Найти интересную книгу в ближайщих постаматах или заказать конкретную</div>
          </div>
          <div class="step">
            <div class="num">3</div>
            <div class="text">Предъявить QR или ввести присланный код на пункте выдачи</div>
          </div>
          <div class="step">
            <div class="num">4</div>
            <div class="text">Радоваться получению книги</div>
          </div>
          <div class="step">
            <div class="num">5</div>
            <div class="text">
              По истечении бесплатного периода вернуть книгу,
              доплатить за продлении или купить со скидкой
            </div>
          </div>
        </div>
        <div class="to-tariff">
          <router-link to="/profile/tariff">Перейти к тарифам</router-link>
        </div>
      </div>
    </main>
    <div class="back-shape" />
  </div>
</template>

<script>
import "../assets/MuseoSansCyrl-700.woff2";
import "../assets/MuseoSansCyrl-900.woff2";

export default {
  data() {
    return {
      videoId: "eup3_i_5uaw"
    };
  }
};
</script>

<style lang="scss">
.index-page {
  .description {
    font-family: "font700";
    font-size: 1.3em;
    line-height: 1.6em;
    color: #525252;
    margin-top: 30px;
    margin-left: 30px;
  }

  main {
    position: relative;

    h1 {
      font-family: "font900";
      font-size: 3.2em;
      color: red;
    }

    .cover {
      padding: 0px 60px;
    }

    .video {
      position: absolute;
      right: 100px;
      top: 145px;
      width: 660px;
      height: 380px;
      background: #fbfbfb;
      border-radius: 7px;
      box-shadow: 0 5px 11px 0 rgba(192, 193, 193, 0.47);
      padding: 10px;
    }
  }

  .steps {
    position: relative;
    top: calc(100vh - 350px);
    height: 1100px;
    width: 100%;
    background: #212121;
    padding: 100px;

    h1 {
      font-family: "font900";
      font-size: 3em;
      color: #fff;
    }

    .step {
      margin-top: 70px;
      margin-left: 30px;
      display: flex;
      color: #fff;
      font-family: "font700";
      line-height: 2em;

      .num {
        font-size: 2.3em;
        padding: 11px 15px;
        border: 6px solid;
        border-radius: 50%;
      }

      .text {
        margin-left: 30px;
        font-size: 1.6em;
        padding-top: 15px;
      }
    }

    .to-tariff {
      padding: 100px;
      text-align: center;

      a {
        display: inline-block;
        font-family: "font900";
        padding: 20px 60px;
        border: none;
        color: #fff;
        background: #e44613;
        font-size: 1.2em;
        border-radius: 65px;
        cursor: pointer;
        box-shadow: 0 7px 9px rgba(33, 33, 33, 0.2);
      }
    }
  }

  .back-shape {
    position: absolute;
    top: 0px;
    height: calc(100vh - 70px);
    width: 100%;
    background: #212121;
    clip-path: polygon(70% 0, 100% 0, 100% 100%, 20% 100%);
    z-index: -1;
  }
}

@font-face {
  font-family: "font700";
  src: url("../assets/MuseoSansCyrl-700.woff2");
}

@font-face {
  font-family: "font900";
  src: url("../assets/MuseoSansCyrl-900.woff2");
}
</style>
