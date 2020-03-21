<template>
  <div class="index-page">
    <main>
      <h1>Безлимитная коллекция <br /> печатных книг по подписке</h1>
      <div class="description">
        Зарегистрируйтесь и берите интересную для вас литературу в <br/>
        ближайщих от вас постаматах.
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
    return {};
  }
};
</script>

<style lang="scss">
.index-page {

  h1 {
    font-family: "font900";
    font-size: 3.2em;
    color: red;
  }

  .description {
    font-family: "font700";
    font-size: 1.3em;
    line-height: 1.6em;
    color: #525252;
    margin-top: 30px;
    margin-left: 30px;
  }

  main {
    padding: 0px 60px;
  }

  .back-shape {
    position: absolute;
    top: 0px;
    height: calc(100vh - 70px);
    width: 100%;
    background: #212121;
    clip-path: polygon(60% 0, 100% 0, 100% 100%, 10% 100%);
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
