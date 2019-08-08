window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

  var app = new Vue ({
    el:"#app",
    data: {
      part_1: "spice",
      part_2: "blanket"
    }
  });