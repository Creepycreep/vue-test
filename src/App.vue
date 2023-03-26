<template>
  <div class="main">
    <div class="stopwatches">
      <StopwatchItem v-for="n in items" :key="n" />

      <div class="stopwatch stopwatch__btn">
        <button class="controls__btn btn_plus" @click="addStopwatch"></button>
      </div>
    </div>
  </div>
</template>

<script>

import StopwatchItem from './components/StopwatchItem.vue'

export default {
  name: 'App',
  components: {
    StopwatchItem
  },

  data() {
    return {
      items: []
    }
  },

  methods: {
    addStopwatch() {
      this.items.push(StopwatchItem);
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Gotham Pro';
  src: url('../assets/fonts/GothamPro.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'icomoon';
  src: url(../assets/fonts/icomoon.ttf);
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Gotham Pro', sans-serif;
}

.main {
  box-sizing: border-box;
  padding: 70px 0;

  background-color: #353638;

  min-height: 100vh;
  display: flex;
  align-items: center;
}

.stopwatches {
  width: 100%;
  display: grid;

  grid-template-columns: 1, 225px;
  gap: 45px 50px;

  align-items: center;

  justify-content: center
}

@media (min-width: 768px) {
  .stopwatches {
    grid-template-columns: repeat(2, 225px);
  }
}

@media (min-width: 1200px) {
  .stopwatches {
    grid-template-columns: repeat(3, 225px);
  }
}


.stopwatch__btn {
  justify-content: center;
}

.btn_plus::before {
  position: absolute;
  top: 0;
  left: 0;

  content: "\e903";
  font-family: 'icomoon';
  font-size: 20px;
}
</style>
