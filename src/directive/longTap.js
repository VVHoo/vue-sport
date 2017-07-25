export default{
  bind(el, binding){
    console.log(binding)
    let touchStartTime = 0
    let touchEndTime = 0
    let lessonTimer = null
    let triggerClick = true
    el.addEventListener('touchstart', () => {
      triggerClick = true;
      touchStartTime = new Date().getTime();
      lessonTimer = setTimeout(function () {
        console.log('longTap')
      }, 300)
    })
    el.addEventListener('touchmove', () => {
      clearTimeout(lessonTimer);
      lessonTimer = null;
    })
    el.addEventListener('touchend', () => {
      touchEndTime = new Date().getTime();
      clearTimeout(lessonTimer);
      lessonTimer = null;
    })
  }
}
