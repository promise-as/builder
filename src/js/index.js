$(function () {
  theaMsForm($('.sign-in'));

  /**
   * @param { 目标元素 } aimEle 
   * @param { 内容元素 } contEle 
   * @param { 类名 } className 
   */
  function tabHandle(aimEle, contEle, className){
    $(aimEle).each(function(i){
      $(this).mouseenter(function(){
        $(this).addClass(className).siblings().removeClass(className);
        $($(contEle)[i]).addClass(className).siblings().removeClass(className);
      })
    })
  }
  tabHandle('.builder-nav li', '.builder-inquire .inquire-item', 'cur');

  /**
   * @param { 点击元素 } clickEle 
   * @param { 响应元素 } responseEle 
   * @param { 类名 } className 
   * @param { 标识 } flag  true：选中，false：未选中
   */
  function radioHandle(clickEle, responseEle, className, flag) {
    $(clickEle).click(function () {
      $(this).toggleClass(className)
      if (flag) {
        $(responseEle).addClass('disable').attr('disabled', 'disabled');
      } else {
        $(responseEle).removeClass('disable').removeAttr("disabled");
      }
      flag = !flag;
    })
  }
  radioHandle('#radioBtn', '#submit', 'sel', 'true')
})