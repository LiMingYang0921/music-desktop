<template>
  <div class="header">
    <div class="left">
      <div class="logo_box">
        <div class="logo_icon">
          <Performance />
        </div>
        <span class="logo_text">小可爱专属音乐播放器</span>
      </div>
      <div class="input_box">
        <div class="input">
          <i>
            <Search />
          </i>
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="right">
      <Minus class="upper_right_icon" @click="minimizeWinClick" />
      <OverallReduction v-if="maxSize" class="upper_right_icon" @click="UnmaxWindowClick" />
      <Square v-else class="upper_right_icon" @click="maximizeWinClick" />
      <Close class="upper_right_icon" @click="closeWindowClick" />
    </div>
  </div>
</template>

<script>
import { Performance, Minus, Square, Close, OverallReduction, Search } from '@icon-park/vue-next'
import { ref } from 'vue'
export default {
  components: {
    Performance,
    Minus,
    Square,
    Close,
    OverallReduction,
    Search
  },
  setup() {
    const maxSize = ref(false)
    const minimizeWinClick = async () => {
      window.electron.mainWindowMin()
    }
    const maximizeWinClick = () => {
      maxSize.value = true
      window.electron.mainWindowMax()
    }
    const UnmaxWindowClick = () => {
      maxSize.value = false
      window.electron.mainWindowUnmaximize()
    }
    const closeWindowClick = () => {
      window.electron.mainWindowClose()
    }
    return {
      maxSize,
      minimizeWinClick,
      maximizeWinClick,
      closeWindowClick,
      UnmaxWindowClick
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 30px;
  height: 30px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  background: rgb(236, 65, 65);
  padding: 0 20px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 20px;

  .left {
    display: flex;
    align-items: center;
    color: rgb(236, 65, 65);

    .logo_box {
      display: flex;
      align-items: center;

      .logo_icon {
        background: #ffffff;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          margin-top: 2px;
        }
      }
    }

    .input_box {
      display: flex;
      align-items: center;
      margin-left: 32px;
      background: rgb(227, 62, 62);
      width: 160px;
      height: 32px;
      border-radius: 16px;
      color: #ffffff;
      padding: 0 8px;

      .input {
        display: flex;
        align-items: center;

        i {
          font-size: 14px;
        }

        input {
          width: 125px;
          border: none;
          outline: none;
          height: 16px;
          background-color: rgb(227, 62, 62);
          color: #fff;
          line-height: 16px;
          margin-left: 4px;
        }
      }
    }

    .logo_text {
      margin-left: 10px;
      color: #ffffff;
    }
  }

  .right {
    .upper_right_icon {
      margin-left: 20px;
      color: #ebe5e5;
      cursor: pointer;
    }

    .upper_right_icon:hover {
      color: #ffffff;
    }
  }
}
</style>
