import Utils from './utils'
// class SmoothScroll {
//   constructor () {
//     let scrollTime = 0.5
//     let scrollDistance = 200
//     let listenScroll = (event) => {
//       event.preventDefault()
//
//       let delta = event.wheelDelta / 120 || -event.detail / 3
//       let scrollTop = window.pageYOffset
//       let finalScroll = scrollTop - parseInt(delta * scrollDistance)
//
//       TweenMax.to(window, scrollTime, {
//         scrollTo: { y: finalScroll, autoKill: true },
//         ease: Power1.easeOut,
//         overwrite: 5
//       })
//     }
//
//     window.addEventListener('mousewheel', listenScroll, false)
//     window.addEventListener('DOMMouseScroll', listenScroll, false)
//   }
// }
// /* eslint-disable no-new */
// new SmoothScroll()

class Parallax {
  constructor () {
    this.addListeners()
  }

  addListeners () {
    let els = document.querySelectorAll('.parallax')
    let wHeight = window.innerHeight
    window.addEventListener('scroll', (e) => {
      let scrollY = window.pageYOffset
      for (let el of els) {
        let d = el.offsetTop - scrollY
        let elHeight = el.offsetHeight
        let delta = 0

        if (d < (wHeight) && d > -elHeight) { // visible
          if (d + (elHeight / 2) > (wHeight / 2)) { // bottom part
            delta = Utils.map(d, wHeight / 2, wHeight, 0, 1) > 0 ? Utils.map(d, wHeight / 2, wHeight, 0, 1) : 0
          } else { // top part
            delta = Utils.map((d + elHeight / 2), -elHeight, wHeight / 2, 0, 1) > 0 ? Utils.map((d + elHeight / 2), wHeight / 2, wHeight, 0, 1) : 0
          }
          TweenMax.to(el, 0.1, {
            y: `-${Math.abs(10 * delta)}%`,
            ease: SlowMo.ease.config(0.7, 0.7, false)
          })
        }
      }
    })
  }
}

export default Parallax
