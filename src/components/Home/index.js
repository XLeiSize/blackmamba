import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  template: require('./template.html'),

  data () {
    return {
      msg: 'Home'
    }
  }
})
