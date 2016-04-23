import Vue from 'vue'

export default Vue.extend({
  name: 'Shoes',
  template: require('./template.html'),

  data () {
    return {
      msg: 'Shoes'
    }
  }
})
