import Vue from 'vue'
import Data from '../../data'

export default Vue.extend({
  name: 'Career',
  template: require('./template.html'),
  /* eslint-disable no-new */

  ready () {
    this.data = Data.career
    this.shownSeason = this.data.seasons[0]
  },
  data () {
    return {
      data: this.data,
      shownSeason: {}
    }
  },
  methods: {
    showSeason (index) {
      this.shownSeason = this.data.seasons[index]
    },
    nextSeason (index) {
      console.log('next')
      if (index < 20) {
        this.shownSeason = this.data.seasons[index + 1]
      } else {
        this.shownSeason = this.data.seasons[19]
      }
    },
    prevSeason (index) {
      console.log('prev')
      if (index > 0) {
        this.shownSeason = this.data.seasons[index - 1]
      } else {
        this.shownSeason = this.data.seasons[0]
      }
    }
  }
})
