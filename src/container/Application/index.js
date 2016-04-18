import Vue from 'vue'
import Data from '../../data'

export default Vue.extend({
  template: require('./template.html'),

  created () {
    this.data = Data
  }
})
