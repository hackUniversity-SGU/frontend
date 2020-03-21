<template>
  <div class="tariff">
    <header-page />
    <main>
      <h1>Доступная линейка тарифов</h1>
      <div class="description">
        Подберите наиболее подходящий для вас тариф.
        <br />Вот что мы можем предложить.
      </div>
      <div class="tariff__list">
        <div class="list__item"></div>
        <sui-card-group :items-per-row="3">
          <sui-card>
            <!-- <sui-image src="static/images/avatar/large/matthew.png" /> -->
            <sui-card-content>
              <sui-card-header>Тариф «Базовый»</sui-card-header>
              <sui-card-meta>Для желающих попробывать</sui-card-meta>
              <sui-card-description>Matthew is an interior designer living in New York.</sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="user" />75 Friends
              <span slot="right">Joined in 2013</span>
            </sui-card-content>
          </sui-card>
          <sui-card>
            <!-- <sui-image src="static/images/avatar/large/molly.png" /> -->
            <sui-card-content>
              <sui-card-header>Тариф «Золотой»</sui-card-header>
              <sui-card-meta>Универсальный</sui-card-meta>
              <sui-card-description>Molly is a personal assistant living in Paris.</sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="user" />35 Friends
              <span slot="right">Joined in 2011</span>
            </sui-card-content>
          </sui-card>
          <sui-card>
            <!-- <sui-image src="static/images/avatar/large/elyse.png" /> -->
            <sui-card-content>
              <sui-card-header>Тариф «Платина»</sui-card-header>
              <sui-card-meta>Для любителей литературы</sui-card-meta>
              <sui-card-description>Elyse is a copywriter working in New York.</sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="user" />151 Friends
              <span slot="right">Joined in 2014</span>
            </sui-card-content>
          </sui-card>
        </sui-card-group>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../../../components/Header";
import "../../../assets/MuseoSansCyrl-700.woff2";
import "../../../assets/MuseoSansCyrl-900.woff2";

export default {
  data() {
    return {};
  },
  components: {
    "header-page": Header
  }
};
</script>

<style lang="scss">
.tariff {
  .tariff__list {
    max-width: 960px;
    margin-top: 55px;
    margin-left: auto;
    margin-right: auto;
  }

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
    margin: 0px 40px;
  }
}

@font-face {
  font-family: "font700";
  src: url("../../../assets/MuseoSansCyrl-700.woff2");
}

@font-face {
  font-family: "font900";
  src: url("../../../assets/MuseoSansCyrl-900.woff2");
}
</style>
