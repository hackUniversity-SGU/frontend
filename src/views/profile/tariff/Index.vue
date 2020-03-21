<template>
  <div class="tariff">
    <main>
      <h1>Доступная линейка тарифов</h1>
      <div class="description">
        Подберите наиболее подходящий для вас тариф.
        <br />Вот что мы можем предложить.
      </div>
      <div class="tariff__list">
        <div class="list__item">
          <div class="item__name">Тариф «Базовый»</div>
          <div class="item__target">Для тех, кто хочет попробывать сервис.</div>
          <div class="item__opportunities">
            <h3>Возможности:</h3>
            <ul>
              <li>Возможность брать любую доступную книгу в ближайщих постоматах</li>
              <li>Бесплатный период пользования книгой 7 дней</li>
              <li>Возможность заказа 1 доступной в интернет-магазине книги за месяц любой в 
                ближайщий постомат </li>
              <li>Скидка при покупке взятой книги 15%</li>
            </ul>
          </div>
          <div class="item__price">290 руб.</div>
          <div class="item__action">
            <button>Оформить</button>
          </div>
        </div>
        <div class="list__item">
          <div class="item__name">Тариф «Продвинутый»</div>
          <div class="item__target">Для тех, кто любит читать.</div>
          <div class="item__opportunities">
            <h3>Возможности:</h3>
            <ul>
              <li>Возможность брать любую доступную книгу в ближайщих постоматах</li>
              <li>Бесплатный период пользования книгой 14 дней</li>
              <li>Возможность заказа 2 доступных в интернет-магазине книг за месяц любой в 
                ближайщий постомат </li>
              <li>Скидка при покупке взятой книги 25%</li>
            </ul>
          </div>
          <div class="item__price">790 руб.</div>
          <div class="item__action">
            <button>Оформить</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import "../../../assets/MuseoSansCyrl-700.woff2";
import "../../../assets/MuseoSansCyrl-900.woff2";

export default {
  data() {
    return {};
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;

    .list__item {
      position: relative;
      margin-bottom: 130px;
      height: 680px;
      background: #fbfbfb;
      border-radius: 7px;
      box-shadow: 0 10px 34px 0 rgba(175, 196, 208, 0.47);
      padding-bottom: 10px;
      padding: 50px 40px 30px;

      .item__name {
        font-family: "font900";
        font-size: 2em;
      }

      .item__target {
        margin: 25px 5px 10px;
        line-height: 1.9em;
        font-size: 15.5px;
      }

      .item__opportunities {
        margin-top: 30px;
        line-height: 1.9em;
        font-size: 15.5px;

        h3 {
          font-size: 1.5em;
          font-family: "font900";
        }
      }

      .item__price {
        position: absolute;
        font-family: "font900";
        font-size: 1.9em;
        color: red;
        bottom: 135px;
        right: 60px;
      }

      .item__action {
        position: absolute;
        bottom: 50px;
        right: 50px;

        button {
          font-family: "font900";
          padding: 15px 50px;
          border: none;
          color: #fff;
          background: #525252;
          font-size: 1.1em;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0 7px 9px rgba(33, 33, 33, 0.2);
        }
      }
    }
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
    margin: 0px 60px;
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
