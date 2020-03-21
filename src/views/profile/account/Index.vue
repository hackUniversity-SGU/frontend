<template>
  <div class="account">
    <main>
      <div class="profile">
        <div class="avatar">
          <img src="@/assets/avatar.png" />
        </div>
        <div class="name">Кар Карыч</div>
        <div class="status">Читает 6 месяцев</div>
      </div>
      <div class="orders">
        <div class="title">Взятые книги</div>
        <div class="table">
          <sui-table basic="very" celled>
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Наименование</sui-table-header-cell>
                <sui-table-header-cell>Дата выдачи</sui-table-header-cell>
                <sui-table-header-cell>Дата возврата</sui-table-header-cell>
                <sui-table-header-cell>Статус</sui-table-header-cell>
                <sui-table-header-cell>Действия</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>

            <sui-table-body>
              <sui-table-row>
                <sui-table-cell>
                  <h4 is="sui-header" image>
                    <sui-header-content>
                      Lena
                      <sui-header-subheader>Human Resources</sui-header-subheader>
                    </sui-header-content>
                  </h4>
                </sui-table-cell>
                <sui-table-cell>20.03.2020</sui-table-cell>
                <sui-table-cell>03.04.2020</sui-table-cell>
                <sui-table-cell>Выдана</sui-table-cell>
                <sui-table-cell>
                  <button>Продлить</button>
                  <button>Купить</button>
                </sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>
                  <h4 is="sui-header" image>
                    <sui-header-content>
                      Matthew
                      <sui-header-subheader>Fabric Design</sui-header-subheader>
                    </sui-header-content>
                  </h4>
                </sui-table-cell>
                <sui-table-cell>06.04.2020</sui-table-cell>
                <sui-table-cell>-</sui-table-cell>
                <sui-table-cell>Куплена</sui-table-cell>
                <sui-table-cell></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>
                  <h4 is="sui-header" image>
                    <sui-header-content>
                      Lindsay
                      <sui-header-subheader>Entertainment</sui-header-subheader>
                    </sui-header-content>
                  </h4>
                </sui-table-cell>
                <sui-table-cell>05.03.2020</sui-table-cell>
                <sui-table-cell>19.03.2020</sui-table-cell>
                <sui-table-cell>Возвращена</sui-table-cell>
                <sui-table-cell></sui-table-cell>
              </sui-table-row>
              <sui-table-row>
                <sui-table-cell>
                  <h4 is="sui-header" image>
                    <sui-header-content>
                      Mark
                      <sui-header-subheader>Executive</sui-header-subheader>
                    </sui-header-content>
                  </h4>
                </sui-table-cell>
                <sui-table-cell>20.02.2020</sui-table-cell>
                <sui-table-cell>03.03.2020</sui-table-cell>
                <sui-table-cell>Возвращена</sui-table-cell>
                <sui-table-cell></sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>
        </div>
      </div>
    </main>
    <div class="back-shape" />
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
.account {
  main {
    padding: 0px 60px;

    .profile {
      position: relative;
      display: flex;

      .avatar {
        height: 250px;
        width: 250px;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid red;

        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      }

      .name {
        font-family: "font900";
        font-size: 4em;
        padding: 100px 80px;
      }

      .status {
        position: absolute;
        left: 330px;
        top: 165px;
        font-size: 1.3em;
      }
    }

    .orders {
      position: relative;
      min-height: 100px;
      max-width: 1100px;
      margin: 100px auto;
      height: 500px;
      background: #fbfbfb;
      border-radius: 7px;
      box-shadow: 0 3px 5px 0 rgba(199, 204, 207, 0.47);
      padding-bottom: 10px;
      border: 3px solid;

      .title {
        font-family: "font900";
        font-size: 1.9em;
        padding: 50px;
      }

      .table {
        padding: 0px 30px;
        font-size: 16px;

        button {
          font-family: "font900";
          padding: 10px 20px;
          margin-right: 10px;
          border: none;
          color: #fff;
          background: #212121;
          font-size: 1.1em;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0 7px 9px rgba(33, 33, 33, 0.2);
        }
      }
    }
  }
  .back-shape {
    position: absolute;
    top: 500px;
    right: 0px;
    left: 0px;
    height: 600px;
    background: #212121;
    z-index: -1;
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
