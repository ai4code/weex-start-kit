export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    back: function () {
  	  this.$router.back()
  	}
  }
}
