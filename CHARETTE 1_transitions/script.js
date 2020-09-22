/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

$(document).ready(function() {
  
   //ITEM 1
  $("#item1").mousedown(function(){
    $("#item2").css({
      borderTopLeftRadius: "100%",
      backgroundColor: "rgba(255, 255, 255, 1)",
      width: "10%"
      }, 100, function() {
    });
    $("#item3").css({
      borderTopRightRadius: "100%",
      backgroundColor: "rgba(255, 255, 255, 1)",
      width: "10%"
      }, 100, function() {
    });
    $(".container").css({
      backgroundColor: "rgba(0, 0, 255, 0.5)"
      }, 100, function() {
    });
  })
  .mouseup(function(){
    $("#item2").css({
      borderTopLeftRadius: "0%",
      borderTopRightRadius: "0%",
      backgroundColor: "lightsalmon",
      width: "32.33%"
      }, 100, function() {
    });
    $("#item3").css({
      borderTopRightRadius: "0%",
      backgroundColor: "lightsalmon",
      width: "32.33%"
      }, 100, function() {
    });
    $(".container").css({
      backgroundColor: "peachpuff"
      }, 100, function() {
    });
  });
  
  
    
  //ITEM 4: ROUND
  $('#item4').mousedown(function() {
    $('.item').css({
      borderTopLeftRadius: "4em",
      borderTopRightRadius: "4em",
      borderBottomLeftRadius: "4em",
      borderBottomRightRadius: "4em"
    }, 100, function() {
    });
	})
  .mouseup(function() {
    // $('.item').append( "<span>Mouse down. </span>" )
	  $('.item').css({
      borderTopLeftRadius: "0.5em",
      borderTopRightRadius: "0.5em",
      borderBottomLeftRadius: "0.5em",
      borderBottomRightRadius: "0.5em"
	  }, 100, function() {
	  });
	});
  
  
  //ITEM 5
  $( "#item5" ).mouseover(function() {
    $(".circle5:first").css({
      marginTop: "4em",
      backgroundColor: "red"
    }, 500,  function() {
    });
    $(".circle5:last").css({
      marginTop: "-4em",
      backgroundColor: "yellow"
    }, 500,  function() {
    });
  }).mouseout(function() {
    $(".circle5").css({
      marginTop: "2em",
      backgroundColor: "white"
    }, 500,  function() {
    });
  });
  
  
  //ITEM 6: SHARP
  $('#item6').mousedown(function() {
    $('.item').css({
      borderTopLeftRadius: "4em",
      borderTopRightRadius: "4em",
      borderBottomLeftRadius: "4em",
      borderBottomRightRadius: "4em"
    }, 100, function() {
    });
	})
  .mouseup(function() {
    // $('.item').append( "<span>Mouse down. </span>" )
	  $('.item').css({
      borderTopLeftRadius: "0em",
      borderTopRightRadius: "0em",
      borderBottomLeftRadius: "0em",
      borderBottomRightRadius: "0em"
	  }, 100, function() {
	  });
	});
  
  
  
  //ITEM 7
  $("#item7").mouseup(function(){
    alert("A pain star has entered your house, but what are you going to do about it? Are you going to touch it? It only happens once every thousand years, maybe even two thousand years. And how long is a year, really?");
  });
  
  
  //ITEM 8
  $("#item8").mouseup(function() {
    $( this ).css({
      backgroundColor: "rgba(177, 89, 135, 1)" //default
    }, 100, function() { 
    });
  })
  .mousedown(function() {
    $( this ).css({
      backgroundColor:"orange" //change
    });
  });
  
  
  //ITEM 9
  $("#item9").mousedown(function(){
    $("#item9 p").text( "you’ve been spoilered!" );
  })
  .mouseup(function(){
    $("#item9 p").text( "spoilers ahead!" );
  });
  
  
  //ITEM 10
  $("#item10").mousedown(function(){
    $("#overlay").css({
      display:"block",
      filter: "saturate(1000%)",
      backgroundColor: "rgba(0,100,100,0.5)",
      zIndex: "2"
      }, 100, function() {
    });
  });
  $("body").mouseup(function(){
    $("#overlay").css({
      display:"none",
      filter: "saturate(0)",
      backgroundColor: "rgba(0,0,0,0)",
      zIndex: "0"
    }, 100, function() {
    });
  });
  
  
  //ITEM 11: NOT WORKING
  $("#item11").mousedown(function(){
    $("#overlay").css({
      display:"block",
      filter: "invert(1000%)",
      backgroundColor: "rgba(255,255,200,0.7)",
      zIndex: "2"
      }, 100, function() {
    });
    $("#item11 p").text("sleep tight");
  });
  $("body").mouseup(function(){
    $("#overlay").css({
      display:"none",
      filter:"invert(0)",
      backgroundColor: "rgba(0,0,0,0)",
      zIndex: "0"
    }, 100, function() {
    });
    $("#item11 p").text("good night");
  });
  
  
  //ITEM 12: SHH
  $("#item12").mousedown(function(){
    $("body").css({
      opacity: "10%"
      }, 100, function() {
    });
    $("#item12 p").append("<br>HHHHHH");
  })
  .mouseup(function(){
    $("body").css({
      opacity:"100%"
    }, 100, function() {
    });
  });
  
  
  //ITEM 13: REFRESH
  $("#item13").click(function(){
    location.reload(true);
  });
  
  
  
  //ITEM 15: CARD
  $("#item14").mousedown(function(){
    $("#item14 .card").css({
      transform: "skewY(180deg)"
      // transform: "rotate(30deg)"
      }, 100, function() {
    });
    $("#item14 .card p").text("4");
  })
  .mouseup(function(){
    $("#item14 .card").css({
      transform: "skewY(0deg)"
      // transform: "rotate(30deg)"
      }, 100, function() {
    });
    $("#item14 .card p").text("♣");
  });

  
  //ITEM 15: INPUT CARD
  $("#item15").mousedown(function(){
    $("item15 .card")(windowPrompt())
  });
  function windowPrompt() {
    var cardNum = prompt("Please enter your card’s number or abbreviation (Jack = J, Queen = Q, King = K)");
    if (cardNum == "A" || cardNum == "J" || cardNum == "Q" || cardNum == "K" || 
        cardNum == "a" || cardNum == "j" || cardNum == "q" || cardNum == "k") {
      $("#item15 .card p").text(cardNum);
    }
    else if (cardNum >= 1 && cardNum <= 10) {
      $("#item15 .card p").text(cardNum);
    }
    else {
        cardNum = prompt("Good one! But really, please enter your card’s number or abbreviation (Jack = J, Queen = Q, King = K)");
    }
  }
  
  
  //ITEM 16: TALL Y
  $("#item16").mousedown(function(){
    $("#item16 .button").css({
      display: "inline-block"
      }, 100, function() {
    });
  });
  
  
  //ITEM 17: TALL Y
  $("#item17").mousedown(function(){
    $("#item17").css({
      height: "45em"
      }, 100, function() {
    });
  })
  .mouseup(function(){
    $("#item17").css({
      height: "15em"
      }, 100, function() {
    });
  });
  
  
  //ITEM 18: SHORT Y
  $("#item18").mousedown(function(){
    $("#item18").css({
      height: "6em"
      }, 100, function() {
    });
    $(".container").css({
      backgroundColor:"rgba(255, 200, 10, 0.9)"
      }, 100, function() {
    });
  })
  .mouseup(function(){
    $("#item18").css({
      height: "15em"
      }, 100, function() {
    });
    $(".container").css({
      backgroundColor:"peachpuff"
      }, 100, function() {
    });
  });
  
  
  //ITEM 19: SHORT X
  $("#item19").mousedown(function(){
    $("#item19").css({
      width: "0%",
      padding: "0",
      margin: "0"
      }, 100, function() {
    });
    $("#item19 .num").css({
      visibility: "hidden"
      }, 100, function() {
    });
  });
  // .mouseup(function(){
  //   $("#item19").css({
  //     width: "32.33%",
  //     padding: "1em",
  //     margin: "1%"
  //     }, 100, function() {
  //   });
  //   $("#item19 .num").css({
  //     visibility: "visible"
  //     }, 100, function() {
  //   });
  // });
  
  
  //ITEM 20: LONG X
  $("#item20").mousedown(function(){
    $("#item20").css({
      width: "64.66%",
      backgroundColor: "green"
      }, 100, function() {
    });
    // $("#item20 p").css({
    //   display:"inline"
    //   }, 100, function() {
    // });
  })
  .mouseup(function(){
    $("#item20").css({
      width: "32.33%",
      backgroundColor: "lightsalmon"
      }, 100, function() {
    });
    // $("#item20 p").css({
    //   display:"none"
    //   }, 100, function() {
    // });
  });
  
  
  //ITEM 21: SHORT X
  $("#item21").mousedown(function(){
    $("#item19").css({
      width: "32.33%",
      padding: "1em",
      margin: "0.5%"
      }, 100, function() {
    });
    $("#item19 .num").css({
      visibility: "visible"
      }, 100, function() {
    });
  });
  // .mouseup(function(){
  //   $("#item21").css({
  //     width: "32.33%",
  //     padding: "1em",
  //     margin: "1%"
  //     }, 100, function() {
  //   });
  //   $("#item21 .num").css({
  //     visibility: "visible"
  //     }, 100, function() {
  //   });
  // });
  
  
  //ITEM 22: RED PILL
  $("#item22").mousedown(function(){
    $("#item22").css({
      backgroundColor: "rgba(255, 40, 40, 1)"
      }, 100, function() {
    });
    $("#item22 .redpill").css({
      display: "none"
      }, 100, function() {
    });
    $("#item22 p").text("you lose.")
  });
  $("body").mouseup(function(){
    $("#item22").css({
      backgroundColor: "rgba(255, 40, 40, 0.4)"
      }, 100, function() {
    });
    $("#item22 .caption").css({
      display: "inline"
      }, 100, function() {
    });
    $("#item22 p").text("you lose.")
  });
  
  
  //ITEM 23: PILLS
  $("#item23").mousedown(function(){
    $("#item23 p").text("choose wisely.");
  });
  $("body").mouseup(function(){
    $("#item23 p").text("will you take the red pill? or the blue pill?");
  });
  
  
  //ITEM 22: BLUE PILL
  $("#item24").mousedown(function(){
    $("#item24").css({
      backgroundColor: "rgba(0, 120, 220, 1)"
      }, 100, function() {
    });
    $("#item24 .bluepill").css({
      display: "none"
      }, 100, function() {
    });
    $("#item24 p").text("welcome to the matrix.")
  });
  $("body").mouseup(function(){
    $("#item24").css({
      backgroundColor: "rgba(0, 120, 220, 0.5)"
      }, 100, function() {
    });
    $("#item24 .caption").css({
      display: "inline"
      }, 100, function() {
    });
    $("#item24 p").text("welcome to the matrix.")
  });
  
  
  //ITEM 25: CIRCLE
  $("#item25").mousedown(function(){
    $("#item25 .circle25").css({
      // backgroundColor: "rgba(200, 10, 220, 1)",
      height: "20em",
      width: "20em",
      marginTop: "-8em"
      }, 100, function() {
    });
  })
  $("#item25").mouseup(function(){
    $("#item25 .circle25").css({
      // backgroundColor: "white",
      height: "3em",
      width: "3em",
      marginTop: "0em"
      }, 100, function() {
    });
  });
  
  
  //ITEM 26: FUCKED UP OR WHAT?
  $("#item26").mousedown(function(){
    $("item26")(windowPrompt26())
  });
  function windowPrompt26() {
    var answer26 = prompt("Would that be fucked up or what?");
    if (answer26 != null) {
      $("#item26 .answer").text(answer26 + "!");
    }
  }
  
  
  //ITEM 26: RANDOM SIZE
  $("#item27").mousedown(function(){
    var randSize = 20 + Math.floor(Math.random() * 400);
    $("#item27 .circle27").css({
      width: randSize,
      height: randSize,
      marginTop: "2em"
      }, 100, function() {
    })
  })
  .mousedown(function(){
    var randSize = 20 + Math.floor(Math.random() * 400);
    $("#item27 .circle27").css({
      width: randSize,
      height: randSize
      }, 100, function() {
    })
  });
  
  
  //ITEM 28
  $("#item28").mousedown(function(){
      $("#item28 p").append( " :( " );
  })
  .mouseup(function(){
      $("#item28 p").append( " :) " );
  });
  
  
  //ITEM 29: FLOOD
  $("#item29").mousedown(function(){
    $("#item29 .rect29").css({
      height: "0em",
      animation: "shake 2s",
      animationIterationCount: "infinite"
      }, 100, function() {
    })
  })
  .mouseup(function(){
    $("#item29 .rect29").css({
      height: "10.8em"
      }, 100, function() {
    })
  });
  
  
  //ITEM 30: CIRCLE
  $("#item30").mousedown(function(){
    $("#item30 .barf").css({
      height: "9em"
      }, 100, function() {
    });
    // $("#item30 .circle30").text( "." + "." + "o");
  })
  $("#item30").mouseup(function(){
    $("#item30 .barf").css({
      height:"0em"
      }, 100, function() {
    });
  });
  
  
  //ITEM 31: APESHIT
  $("#item31").mousedown(function(){
    $("#item31").css({
      animation: "shake 0.5s",
      animationIterationCount: "infinite",
      backgroundColor: "black"
      }, 100, function() {
    })
    $("#item31 p").text("don’t you just want to go apeshit?");
  })
  .mouseup(function(){
    $("#item31").css({
      animation: "none",
      backgroundColor: "lightsalmon"
      }, 100, function() {
    })
    $("#item31 p").text("aren’t you tired of being nice?");
  });
  
  
  //ITEM 32: YOU MAY CLICK IT
  var numClicks = 0;
  $("#item32").mousedown(function(){
    numClicks++;
    // $("#item32 p").append(numClicks);
    if (numClicks > 1) {
      alert("I said you may click it ONCE!")
    }
  });
  
  
  //ITEM 33: CLICK WARNING
  $("#item32").mousedown(function(){
    if (numClicks > 1) {
      // $("#item33 p").text(numClicks);
      $("#item33 p").text("by clicking it " + numClicks + " times, you have disrespected me and my son. kindly take your leave. ");
    }
  });
  
  
  //ITEM34
  $("#item34").mousedown(function(){
    $("#item34 .button").css({
      display: "inline-block"
      }, 100, function() {
    });
  });
  
  
  //ITEM 35: HOT CHOCLOETY
  $("#item35").mousedown(function(){
    $("#item35 p").css({
      display:"none"
      }, 100, function() {
    });
    $("#item35 img").css({
      display:"inline-block"
      }, 100, function() {
    });
    $("#item35 .num").css({
      padding:"1em"
      }, 100, function() {
    });
    $("#item35").css({
      padding:"0"
      }, 100, function() {
    });
  })
  $("#item35").mouseup(function(){
    $("#item35 p").css({
      display:"inline-block"
      }, 100, function() {
    });
    $("#item35 img").css({
      display:"none"
      }, 100, function() {
    });
    $("#item35 .num").css({
      padding:"0"
      }, 100, function() {
    });
    $("#item35").css({
      padding:"1em"
      }, 100, function() {
    });
  });
  
  
  //ITEM 36
  $("#item36").mousedown(function(){
    $("#item36 .emoji").text("🙂");
  });
  $("#item36").mouseup(function(){
    $("#item36 .emoji").text("🙃");
  });
  
  
   //ITEM 37: TO DO LIST
  $("#item37").mousedown(function(){
    $("item37")(windowPrompt37())
  });
  function windowPrompt37() {
    var answer37 = prompt("What do you have to do today?");
    if (answer37 != null) {
      $("#item37 .answer").append("<br/>" + answer37);
    }
  }
  
  
   //ITEM 38: SMALL
  $("#item38").mousedown(function(){
    $("#item38").css({
      width: "10%",
      height: "1em"
      }, 100, function() {
    })
  })
  .mouseup(function(){
    $("#item38").css({
      width: "32.33%",
      height: "15em"
      }, 100, function() {
    })
  });
  
  
  //ITEM 39: BIG
  $("#item39").mousedown(function(){
    $("#item39").css({
      width: "100%",
      height: "30em"
      }, 100, function() {
    })
  })
  .mouseup(function(){
    $("#item39").css({
      width: "32.33%",
      height: "15em"
      }, 100, function() {
    })
  });
  
  
    //ITEM 40: SHRINK
  $("#item40").mousedown(function(){
    $(".item").css({
      width: "10%"
      }, 100, function() {
    })
  })
  .mouseup(function(){
    $(".item").css({
      width: "32.33%",
      height: "15em",
      padding: "1em"
      }, 100, function() {
    })
  });
  
  
  //ITEM 41: GROW
  $("#item41").mousedown(function(){
    $(".item").css({
      width: "49%"
      }, 100, function() {
    })
  })
  .mouseup(function(){
    $(".item").css({
      width: "32.33%",
      padding: "1em"
      }, 100, function() {
    })
  });
  
  
  //ITEM 42: ROTATE
  $("#item42").mousedown(function(){
    $(".item").css({
      transform: "rotate(360deg)"
      }, 100, function() {
    })
  })
  .mouseup(function(){
    $(".item").css({
      transform: "rotate(0deg)"
      }, 100, function() {
    })
  });
  
  
   //ITEM 43: CIRCLE
  $("#item43").mousedown(function(){
    $(".item").css({
      width: "10em",
      height: "10em",
      borderRadius: "100%"
      }, 100, function() {
    })
  })
  .mouseup(function(){
    $(".item").css({
      width: "32.33%",
      height: "15em",
      borderRadius: "0%"
      }, 100, function() {
    })
  });
  
  
     //ITEM 44: COLOR
  $("#item44").mousedown(function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(".item").css({
      backgroundColor: ("#" + randomColor)
      }, 100, function() {
    })
  });
  
  
  //ITEM 45: DEATH
  $("#item45").mousedown(function(){
    $(".item").css({
      width: "0%",
      margin: "0",
      padding: "0",
      opacity: "0"
      }, 100, function() {
    })
    window.close()
  });
  
  
  //ITEM 46: CIRCLE COLOR CHANGE
  $("#item46").mousedown(function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(".circle46").css({
      backgroundColor: ("#" + randomColor)
      // animation: "shake 1.5s",
      // animationIterationCount: "infinite"
      }, 100, function() {
    })
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(".circle47").css({
      backgroundColor: ("#" + randomColor)
      // animation: "shake 1.5s",
      // animationIterationCount: "infinite"
      }, 100, function() {
    })
  });
  
  //ITEM 46: CIRCLE MOVE
  $("#item47").mousedown(function(){
    var randomPercentx = Math.floor(Math.random()*100).toString();
    var randomPercenty = Math.floor(Math.random()*100).toString();
    $(".circle46").css({
      transform: "translate(" + randomPercentx + "%, " + randomPercenty + "%)"
      }, 100, function() {
    })
    var randomPercentx = Math.floor(Math.random()*100).toString();
    var randomPercenty = Math.floor(Math.random()*100).toString();
    $(".circle47").css({
      transform: "translate(" + randomPercentx + "%, " + randomPercenty + "%)"
      }, 100, function() {
    })
  });
  
  //ITEM 48: CIRCLE SWITCH
  var numClicks = 0;
  
  
  $("#item48").mousedown(function(){
    numClicks++;
    var randomNum = 1+Math.floor(Math.random()*10).toString();
    if (numClicks < 20) {
      $(".circle46").css({
      width: numClicks + "em",
      height: numClicks + "em"
      }, 100, function() {
      })
      $(".circle47").css({
      width: randomNum + "em",
      height: randomNum + "em"
      }, 100, function() {
      })
    }
//     else {
//       var reverseNumClicks = (numClicks - 1);
//       $("#item48 .num").text(numClicks)
//       $(".circle46").css({
//       width: reverseNumClicks + " em",
//       height: reverseNumClicks + " em"
//       }, 100, function() {
//       })
      
//     }
    
    var randomPercentx = Math.floor(Math.random()*100).toString();
    var randomPercenty = Math.floor(Math.random()*100).toString();
    $(".circle47").css({
      marginTop: "-6em"
      }, 100, function() {
    })
  });
  //   .mouseup(function(){
  //   var randomPercentx = Math.floor(Math.random()*100).toString();
  //   var randomPercenty = Math.floor(Math.random()*100).toString();
  //   $(".circle46").css({
  //     marginTop: "2em"
  //     }, 100, function() {
  //   })
  //   var randomPercentx = Math.floor(Math.random()*100).toString();
  //   var randomPercenty = Math.floor(Math.random()*100).toString();
  //   $(".circle47").css({
  //     marginTop: "2em"
  //     }, 100, function() {
  //   })
  // });
  
    //ITEM 46: FLAG
  $("#item49").mousedown(function(){
    $("#rectP").css({
      width:"100%"
    })
    $("#rectR").css({
      width:"100%"
    })
    $("#rectO").css({
      width:"100%"
    })
    $("#rectY").css({
      width:"100%"
    })
    $("#rectG").css({
      width:"100%"
    })
    $("#rectB").css({
      width:"100%"
    })
    $("#rectV").css({
      width:"100%"
    })
  });
 
  
    //ITEM 50: ABOUT
  $("#item50").mousedown(function(){
    $("#about").css({
      width: "32.3%",
      padding: "1em"
      }, 100, function() {
    })
    $("#about p").css({
      display: "inline-block"
      }, 100, function() {
    })
  });
  // .mouseup(function(){
  //   $("#about").css({
  //     width: "0%",
  //     padding: "0em"
  //     }, 100, function() {
  //   })
  //   $("#about p").css({
  //     display: "none"
  //     }, 100, function() {
  //   })
  // });
  
  
  //toggle class
  $('.item').click('click touchstart', function() {
    $(this).toggleClass('hide');
  });
  
  
});