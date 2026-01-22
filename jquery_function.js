$(document).ready(function() {
    $("#bars").click(function() {
        $("#courses").css("display", "none");
        $("#nav-btn").slideToggle(function() {
            if ($(this).is(":visible")) {
            $("#bars").attr("class", "fa-solid fa-circle-xmark");
            } else {
            $("#bars").attr("class", "fa-solid fa-bars");
            }
        });
    })
})


$(document).ready(function() {
    $("#nav-btn").click(function() {
        $("#courses").slideToggle(function() {
            if ($(this).is(":visible")) {
               $("#chev").attr("class", "fa-solid fa-chevron-down");
               } else {
               $("#chev").attr("class", "fa-solid fa-chevron-up");
            }
        });
    })
});

$(document).ready(function() {
    $("#bwarning").click(function() {
        $("#failed-browser").hide();
        $("#home-ad").show();
    })
})


$(document).ready(function() {
    $("#level-drop > button").click(function() {
        $("#level-drop > #drop-links").slideToggle();
    })
})

$(document).ready(function() {
    $("#level-drop-1 > button").click(function() {
        $("#level-drop-1 > #drop-links-1").slideToggle();
    })
})

$(document).ready(function() {
    $("#openKaaf").click(function() {
        $("#kaaf-levels").slideToggle();
    })
})

$(document).ready(function() {
    $("#close-kaaf-levels").click(function() {
        $("#kaaf-levels").slideToggle();
    })
})

$(document).ready(function() {
    $("#openNmtcatibie").click(function() {
        $("#nmtcatibie-levels").slideToggle();
    })
})

$(document).ready(function() {
    $("#close-nmtcatibie-levels").click(function() {
        $("#nmtcatibie-levels").slideToggle();
    })
})

$(document).ready(function() {
    $("#openNmtcasan").click(function() {
        $("#nmtcasan-levels").slideToggle();
    })
})

$(document).ready(function() {
    $("#close-nmtcasan-levels").click(function() {
        $("#nmtcasan-levels").slideToggle();
    })
})