export default{
  bind(el){
    let touchStartTime = 0
    let touchEndTime = 0
    let lessonTimer = null
    let triggerClick = true
    el.addEventListener('touchstart', () => {
      triggerClick = true;
      touchStartTime = new Date().getTime();
      lessonTimer = setTimeout(function () {
      }, 300)
      console.log('touchstart')
    })
    el.addEventListener('touchmove', () => {
      clearTimeout(lessonTimer);
      lessonTimer = null;
      console.log('touchmove')
    })
    el.addEventListener('touchend', () => {
      console.log('touchend')
      touchEndTime = new Date().getTime();
      clearTimeout(lessonTimer);
      lessonTimer = null;
      if(touchEndTime - touchStartTime < 300 && triggerClick){
        console.log('longTap')
      }
    })
  }
}
