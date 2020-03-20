<template>
    <div class="app">
        <header />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import Header from './components/Header';

export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    margin: 0;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

main {
    position: relative;
    top: 70px;
}
</style>
