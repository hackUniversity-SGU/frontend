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
$modal-radius: 10px;

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

.ui.modals.dimmer {
    background: rgba(0, 0, 0, 0.2);
}

.ui.modal {
    border-radius: $modal-radius !important;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    margin: 0 !important;
    margin-left: 2.5% !important;

    .modal-header {
        border-bottom: none !important;
        border-radius: $modal-radius $modal-radius 0 0 !important;
    }

    .modal-content {
        // height: 79vh;
        padding-top: 0 !important;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        border-radius: 0 0 $modal-radius $modal-radius !important;
    }
}

.ui.rating {
    i.icon {
        color: #aaa;
        &:hover {
            color: #efefef;
        }
    }
    i.active.icon {
        color: yellow !important;
    }
}
</style>
