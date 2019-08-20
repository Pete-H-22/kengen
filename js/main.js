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
    $("#button-defs").addClass("hidden");
    $("#defs-list").html("");
    if (meanings[app._data.part_1+"-"+app._data.part_2]) {
      console.log("previously defined!")
      $("#button-defs").removeClass("hidden");
    }
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

  $("#button-defs").click(function(){
    console.log("*");
    if ($("#defs-list").html() == "") {
      for (i in meanings[$(".container h1").text()]) {
        $("#defs-list").append("<p>"+meanings[$(".container h1").text()][i]+"</p>");
      }
    } else {
      $("#defs-list").html("");
    }
  });

