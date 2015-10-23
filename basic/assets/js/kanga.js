$("#interview").on("click", function() {
  if ($("#dataimg").is(':hidden')) {
    $(".item").hide("slow");
    $(".item", this).show("fast", function() {
      $("#dataimg").show("slow");
    });

  } else {
    $(".item", this).hide();
    $("#dataimg").hide("slow", function() {
      $(".item").show("slow");
    });
  }
});

$("#interview").hover(function() {
  $(this).css("opacity", ".5");
}, function() {
  $(this).css("opacity", "1");
});
///////////////////////////////////////////PERSONAS///////////
$("#personas").on("click", function() {
  if ($("#personaimg").is(':hidden')) {
    $(".item").hide("slow");
    $(".item", this).show("fast", function() {
      $("#personaimg").show("slow");
    });

  } else {
    $(".item", this).hide();
    $("#personaimg").hide("slow", function() {
      $(".item").show("slow");
    });
  }
});

$("#personas").hover(function() {
  $(this).css("opacity", ".5");
}, function() {
  $(this).css("opacity", "1");
});

///////////////////////////////////////////FLOWS///////////
$("#userflow").on("click", function() {
  if ($("#appflowimg").is(':hidden')) {
    $(".item").hide("slow");
    $(".item", this).show("fast", function() {
      $("#appflowimg").show("slow");
    });

  } else {
    $(".item", this).hide();
    $("#appflowimg").hide("slow", function() {
      $(".item").show("slow");
    });
  }
});

$("#userflow").hover(function() {
  $(this).css("opacity", ".5");
}, function() {
  $(this).css("opacity", "1");
});

///////////////////////////////////////////ICONS///////////
$("#icons").on("click", function() {
  if ($("#iconsimg").is(':hidden')) {
    $(".itemdes").hide("slow");
    $(".itemdes", this).show("fast", function() {
      $("#iconsimg").show("slow");
    });

  } else {
    $(".itemdes", this).hide();
    $("#iconsimg").hide("slow", function() {
      $(".itemdes").show("slow");
    });
  }
});

$("#icons").hover(function() {
  $(this).css("opacity", ".5");
}, function() {
  $(this).css("opacity", "1");
});

///////////////////////////////////////////TECH///////////
$("#technology").on("click", function() {
  if ($("#techimg").is(':hidden')) {
    $(".itemdes").hide("slow");
    $(".itemdes", this).show("fast", function() {
      $("#techimg").show("slow");
    });

  } else {
    $(".itemdes", this).hide();
    $("#techimg").hide("slow", function() {
      $(".itemdes").show("slow");
    });
  }
});

$("#technology").hover(function() {
  $(this).css("opacity", ".5");
}, function() {
  $(this).css("opacity", "1");
});

///////////////////////////////////////////Annotate Wireframes///////////
$("#wireframes").on("click", function() {
  if ($("#annotate").is(':hidden')) {
    $(".itemdes").hide("slow");
    $(".itemdes", this).show("fast", function() {
      $("#annotate").show("slow");
    });

  } else {
    $(".itemdes", this).hide();
    $("#annotate").hide("slow", function() {
      $(".itemdes").show("slow");
    });
  }
});

$("#wireframes").hover(function() {
  $(this).css("opacity", ".5");
}, function() {
  $(this).css("opacity", "1");
});
