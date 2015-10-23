var timeoutId;
$("#aboutfactsax").hover(function() {
    if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
            timeoutId = null;
            $("#aboutfactEEsax").toggle();
       }, 1500);
    }
},
function () {
    if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
    }
    else {
       $("#aboutfactEEsax").toggle();
    }
});

<!--TRAVEL-->

$("#aboutfacttravel").hover(function() {
    if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
            timeoutId = null;
            $("#aboutfactEEtravel").toggle();
       }, 2000);
    }
},
function () {
    if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
    }
    else {
       $("#aboutfactEEtravel").toggle();
    }
});

<!--end travel-->

<!--GA-->

$("#aboutfactga").hover(function() {
    if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
            timeoutId = null;
            $("#aboutfactEEga").toggle();
       }, 2000);
    }
},
function () {
    if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
    }
    else {
       $("#aboutfactEEga").toggle();
    }
});

<!--end GA-->

$("#aboutfactwhisk").hover(function() {
    if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
            timeoutId = null;
            $("#aboutfactEEwhisk").toggle();
       }, 2000);
    }
},
function () {
    if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
    }
    else {
       $("#aboutfactEEwhisk").toggle();
    }
});
