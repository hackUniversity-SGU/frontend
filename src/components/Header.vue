<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo.png" />
    </div>
    <div class="nav">
      <div class="nav__item">
        <a href="/parcels">Карта постоматов</a>
      </div>
      <div class="nav__item">
        <a href="/profile/tariff">Линейка тарифов</a>
      </div>
    </div>
    <div class="auth">
      <a class="profile-btn" href="#">
        <sui-icon name="user" />
      </a>
    </div>
    <div class="toggle">
      <div class="toggle__btn">
        <sui-icon name="th" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 70px;
  background: #fff;
  z-index: 1000;
  display: flex;
  margin: 0px 10px;
}

.logo img {
  height: 42px;
  margin: 14px;
}

.header .nav {
  display: flex;
  margin-left: 20px;
}

.header .nav__item {
  display: flex;
  height: 100%;
  margin-left: 35px;
  align-items: center;
}

.header .nav__item a {
  color: #111111;
  font-size: 15px;
  font-weight: 500;
}

.header .auth {
  display: flex;
  margin-left: auto;
  margin-right: 25px;
}

.header .auth .profile-btn {
  position: relative;
  top: 0px;
  width: 48px;
  height: 48px;
  margin-left: 42px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: opacity 0.4s ease;
  align-self: center;
  display: inline-block;
}

.header .auth .profile-btn i {
  position: absolute;
  top: 15px;
  left: 15px;
  color: #e44613;
  font-size: 15px;
}

.header .toggle {
  display: flex;
  align-items: center;
}
.header .toggle__btn {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  padding: 15px;
  font-size: 19px;
  margin-right: 21px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  color: #060606;
}

.header .toggle__btn i {
  position: absolute;
  left: 13px;
  top: 15px;
}
</style>
