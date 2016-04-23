import Vue from 'vue'
import 'gsap'
import Data from '../../data'
// import Parallax from '../../utils/parallax'

export default Vue.extend({
  name: 'Career',
  template: require('./template.html'),
  /* eslint-disable no-new */

  ready () {
    this.data = Data.career
    this.shownSeason = this.data.seasons[0]
    // new Parallax()
  },
  data () {
    return {
      data: this.data,
      shownSeason: {}
    }
  },
  methods: {
    showSeason (index) {
      let current = document.querySelectorAll('.articles__nav__item__elem')[index]
      if (document.querySelector('.articles__nav__item__elem.active')) {
        document.querySelector('.articles__nav__item__elem.active').classList.remove('active')
      }
      current.classList.add('active')
      this.shownSeason = this.data.seasons[index]
      this.animation()
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
    },
    animation () {
      let $img = document.querySelector('.article__image')
      let $season = document.querySelector('.season')
      let $banner = document.querySelector('.article__titles')
      let $title = $banner.querySelector('h2')
      let $text = $banner.querySelector('p')
      let tl = new TimelineMax({
        delay: 0.2
      })
      tl.from($img, 0.4, {
        opacity: 0,
        ease: Power0.easeInOut
      })
      tl.from($season, 0.4, {
        opacity: 0,
        ease: Power0.easeInOut
      })
      tl.from($banner, 0.3, {
        scaleX: 0,
        ease: Circ.easeOut
      })
      tl.from($title, 0.3, {
        opacity: 0,
        y: -5,
        ease: Power2.easeOut
      })
      tl.from($text, 0.3, {
        opacity: 0,
        y: 10,
        ease: Power2.easeOut
      })
    }
  }
})
