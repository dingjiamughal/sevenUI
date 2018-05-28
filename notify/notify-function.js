import Notification from "./notify.vue"

export default {
  extends: Notification,
  computed:{
    style() {
      return {
        position:"fixed",
        right:"20px",
        bottom:`${this.verticalOffset}px`
      }
    }
  },
  data() {
    return {
      verticalOffset: 0,
      autoClose:3000
    }
  },
  mounted() {
    this.createTimer()
  },
  methods:{
    createTimer() {
      if(this.autoClose) {
        this.timer = setTimeout(()=> {
          this.visible = false
        },this.autoClose)
      }
    },
    clearTimer() {
      if(this.timer) {
        clearTimeout(this.timer)
      }
    }
  },
  beforeDestory() {
    this.clearTimer()
  }
}
