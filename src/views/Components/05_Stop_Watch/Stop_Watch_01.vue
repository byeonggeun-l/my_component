<template>
  <div>
    <h1 class="title">
      Stopwatch
    </h1>
    <div class="stopwatch">
      <div
        ref="refDisplay"
        class="display"
      >
        00:00:00
      </div>
      <button
        ref="refStartOrStop"
        class="control"
        @click="startOrStop"
      >
        Start
      </button>
      <button
        ref="refResetOrLap"
        class="control"
        disabled
        @click="resetOrLap"
      >
        Reset
      </button>

      <div
        ref="refLaps"
        class="laps"
      >
        <div class="lap-title">
          Laps
        </div>
        <div class="lap-title">
          Time
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StopWatch',
  data() {
    return {
      isRunning: false,
      elapsedTime: { mm: 0, ss: 0, ms: 0 },
      timeId: null,
      laps: [],
    }
  },
  mounted() {
  },
  unmounted() {
    clearInterval(this.timeId);
  },
  methods:{
    startOrStop() {
      const start = () => {
        let { mm, ss, ms } = this.elapsedTime;

        this.timeId = setInterval(() => {
          ms += 1;
          if (ms >= 100) {
            ss += 1;
            ms = 0;
          }
          if (ss >= 60) {
            mm += 1;
            ss = 0;
          }

          // $btnResetOrLap의 disabled 상태 변경
          this.$refs.refResetOrLap.disabled = !(mm + ss + ms);

          this.elapsedTime = { mm, ss, ms };
          this.renderElapsedTime(this.elapsedTime);
        }, 10);
      };
      const stop = () => clearInterval(this.timeId);
      
      this.isRunning ? stop() : start();
      this.isRunning = !this.isRunning;

      // isRunning이 변경되면 버튼 텍스트를 변경한다.
      this.$refs.refStartOrStop.textContent = this.isRunning ? 'Stop' : 'Start';
      this.$refs.refResetOrLap.textContent = this.isRunning ? 'Lap' : 'Reset';

    },
    renderElapsedTime(elapsedTime) {
      this.$refs.refDisplay.innerText = this.formatElapsedTime(elapsedTime);
    },
    formatElapsedTime(Time) {
      // 1 => '01', 10 => '10'
      const format = n => (n < 10 ? '0' + n : n + '');
      return `${format(Time.mm)}:${format(Time.ss)}:${format(Time.ms)}`;
    },
    resetOrLap() {
      const reset = () => {
        // $btnResetOrLap의 disabled 상태 변경
        this.$refs.refResetOrLap.disabled = true;

        this.elapsedTime = { mm: 0, ss: 0, ms: 0 };
        this.renderElapsedTime(this.elapsedTime);

        this.laps = [];
        this.renderLaps();
      };
      
      const addLap = () => {
        this.laps = [...this.laps, this.elapsedTime];
        this.renderLaps();
      };

      this.isRunning ? addLap() : reset();

    },
    renderLaps() {
      const $laps = this.$refs.refLaps;
      const formatElapsedTime = this.formatElapsedTime;

      const createLapElement = function(newLap, index) {
        const $fragment = document.createDocumentFragment();

        const $index = document.createElement('div');
        $index.textContent = index;
        $fragment.appendChild($index);

        const $newLab = document.createElement('div');
        console.log(newLap);
        $newLab.textContent = formatElapsedTime(newLap);
        $fragment.appendChild($newLab);

        $laps.appendChild($fragment);

        $laps.style.display = 'grid';
      };
      

      // 랩 타임을 초기화(DOM에서 모두 제거)한다.
      const removeAllLapElement = () => {
        // laps 클래스 아래에 있는 것들 중
        // div 태그 중 la-title 클래스네임이 아닌 것들을
        // 모두 지운다.
        document.querySelectorAll('.laps > div:not(.lap-title)').forEach($lap => $lap.remove());
        $laps.style.display = 'none';
      };

      const { length } = this.laps;
      
      if (length) {
        const newLap = this.laps[length - 1]; // 마지막 lap을 DOM에 append한다.
        createLapElement(newLap, length);
      } else {
        removeAllLapElement();
      }

      
    }
  }
}
</script>

<style>
*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    font-family: 'Source Code Pro', monospace;
}

.title {
    color: #db5b33;
    font-weight: 300;
    text-align: center;
}

.stopwatch {
    text-align: center;
    font-size: 3em;
    padding: 30px;
}

.control {
    width: 120px;
    padding: 5px;
    margin: 15px;
    font-size: 36px;
    font-weight: bold;
    border: 2px solid #f44336;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
}

.control:hover:enabled {
    background: #f44336;
    color: aliceblue;
}

.control:disabled {
    color: gray;
    cursor: not-allowed;
}

.laps {
    display: grid;
    grid-template-columns: 70px 1fr;
    column-gap: 50px;
    row-gap: 10px;
    width: 260px;
    margin: 10px auto;
    font-size: 0.5em;
    display: none;
}
</style>