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
      part_1: nouns[Math.floor(Math.random()*nouns.length)],
      part_2: nouns[Math.floor(Math.random()*nouns.length)]
    }
  });

  //FUNCTIONS

  function kennings_replace() {
    app._data.part_1 = nouns[Math.floor(Math.random()*nouns.length)];
    app._data.part_2 = nouns[Math.floor(Math.random()*nouns.length)];
  }

  //BUTTONS
  
  $("#button-new").click(function(){
    console.log("*");
    kennings_replace();
  });

  $("#button-reject").click(function(){
    console.log("*");
    kennings_replace();
  });

  $("#button-approve").click(function(){
    console.log("*");
    if ($("#desc").val() != "") {
      if ( !(meanings[$(".container h1").text()]) ) {
        meanings[$(".container h1").text()] = [$("#desc").val()];
      } else {
        meanings[$(".container h1").text()].push($("#desc").val());
      }
      kennings_replace();
      $("#desc").val("");
    }
  });

