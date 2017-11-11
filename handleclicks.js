AFRAME.registerComponent('handleclicks', {
    init: function () {
      var el = this.el;  // <a-box>
      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', 'white');  
      });
      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', 'black');  
      });
      el.addEventListener('click', function () {
        el.sceneEl.querySelector('#ocean').setAttribute("sealevelmap", {start: true})
        el.sceneEl.removeChild(el)
      });
    } 
  });