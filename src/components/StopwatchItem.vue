<template>
  <div class="stopwatch" :class="{ active: isActive }">

    <div class="digits">
      <span :class="{ display: hideHours }">{{ hours }}:</span>
      <span :class="{ display: hideMins }">{{ minutes }}:</span>
      <span>{{ seconds }}</span>
    </div>

    <hr>

    <div class="controls">
      <button id="start" class="controls__btn btn_start" :class="{ active: !isActive }" @click="start"></button>
      <button id="pause" class="controls__btn btn_pause" :class="{ active: isActive }" @click="pause"></button>
      <button id="reset" class="controls__btn btn_reset" :class="{ active: isActive }" @click="reset"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      hideMins: true,
      hideHours: true,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: 0
    }
  },

  methods: {
    start() {
      this.isActive = true;
      this.interval = setInterval(this.timeCount, 1);
    },
    pause() {
      this.isActive = false;
      clearInterval(this.interval);
    },
    reset() {
      this.isActive = false;
      clearInterval(this.interval);
      this.hideMins = true;
      this.hideHours = true;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    },

    timeCount: function () {
      this.seconds++;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
        this.hideMins = false;
        if (this.minutes >= 60) {
          this.minutes = 0;
          this.hours++;
          this.hideHours = false;
        }
      }
      this.addNull()
    },

    addNull: function () {
      if (this.seconds < 9 && !this.hideMins) {
        this.seconds = '0' + this.seconds;
      }

      if (this.minutes < 9 && !this.hideHours) {
        this.minutes = '0' + this.seconds;
      }
    }
  }
}
</script>

<style lang="scss">
$color: #9E9E9E;
$color-active: #FFFFFF;

.display {
  display: none;
}

.stopwatch {
  position: relative;

  box-sizing: border-box;
  width: 225px;
  height: 120px;
  padding: 20px 0;

  background-color: #696969;
  font-size: 22px;
  color: $color;


  display: flex;
  flex-direction: column;
  align-items: center;

  animation-name: fade;
  animation-duration: 1.2s;
}

@keyframes fade {
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

.stopwatch .digits {
  margin-bottom: 20px;
}

hr {
  border: none;
  border-bottom: 1px solid;
  width: 100%;
}

.controls {
  margin-top: 20px;

  display: flex;
}

.controls__btn {
  display: block;

  position: relative;
  width: 20px;
  height: 20px;

  border: none;
  background: none;

  cursor: pointer;

  color: $color;
  transition: all .5s;
}

.controls__btn:hover {
  color: $color-active;
}

.active {
  color: $color-active
}

.controls .active {
  display: block;
}

.btn_start {
  display: none;
  color: $color;
}

.btn_start::before {
  position: absolute;
  top: 0;
  left: 0;

  content: "\e902";
  font-family: 'icomoon';
  font-size: 20px;
}

.btn_pause {
  display: none;
}

.btn_pause::before {
  position: absolute;
  top: 0;
  left: 0;

  content: "\e901";
  font-family: 'icomoon';
  font-size: 20px;
  color: $color-active;
}

.btn_reset {
  margin-left: 50px;
}

.btn_reset::before {
  position: absolute;
  top: 0;
  left: 0;

  content: "\e900";
  font-family: 'icomoon';
  font-size: 20px;
}
</style>