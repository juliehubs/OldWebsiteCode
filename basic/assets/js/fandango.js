$('#secondnav').affix({
  offset: {
    top: 600
  }
});

$('body').scrollspy({
  target: '#secondnav'
})

$('#secondnav .navbar-nav li>a').click(function() {
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({
    scrollTop: posi
  }, 700);
});



/*Persona  */
$("#personaphotos img").on("click", function() {
  var content = $(this).data("target");
  $("#contents .activepersona").hide("slow", function() {
    $(this).removeClass("active");
    $(this).removeClass("activepersona");
    $(content).show("slow", function() {
      $(this).addClass("activepersona");
    });
  });
});
$("#collapse i").on("click", function() {
  var content = $(this).data("target");
  $("#contents .activepersona").hide("slow", function() {
    $(this).removeClass("activepersona");
    $(content).show("slow", function() {
      $(this).addClass("activepersona");
    });
  });
});

/*User Flow */

$("#user-flows img").on("click", function() {
  var content = $(this).data("target");
  $("#contents .activeflow").hide("slow", function() {
    $(this).removeClass("activeflow");
    $(content).show("slow", function() {
      $(this).addClass("activeflow");
    });
  });
});

$("#collapseflow i").on("click", function() {
  var content = $(this).data("target");
  $("#contents .activeflow").hide("slow", function() {
    $(this).removeClass("activeflow");
    $(content).show("slow", function() {
      $(this).addClass("activeflow");
    });
  });
});

/*Wireframes */

$("#ipadwire img").on("click", function() {
  var content = $(this).data("target");
  $("#contents .activewire").hide("slow", function() {
    $(this).removeClass("activewire");
    $(content).show("slow", function() {
      $(this).addClass("activewire");
    });
  });
});

$("#collapsewire i").on("click", function() {
  var content = $(this).data("target");
  $("#contents .activewire").hide("slow", function() {
    $(this).removeClass("activewire");
    $(content).show("slow", function() {
      $(this).addClass("activewire");
    });
  });
});

$("#iphoneWireFrames img").on("click", function() {
  var content = $(this).data("target");
  $("#contents .activeiframe").hide("slow", function() {
    $(this).removeClass("activeiframe");
    $(content).show("slow", function() {
      $(this).addClass("activeiframe");
    });
  });
});

$("#collapseiframe i").on("click", function() {
  var content = $(this).data("target");
  $("#contents .activeiframe").hide("slow", function() {
    $(this).removeClass("activeiframe");
    $(content).show("slow", function() {
      $(this).addClass("activeiframe");
    });
  });
});
