	$(document).ready(function() {
    $('.message-open').click(function() {
        $('.message-boxchat').toggleClass('active')
    })
}) 

function closeMes(id) {
    var closeBoxchat = document.getElementById(id);
    closeBoxchat.style.display = "none";
}

function showMes(id) {
    var boxchat = document.getElementById(id);
    if(boxchat.style.display == "block") {
        boxchat.style.display = "none";
    } else {
        boxchat.style.display = "block";
    }
}

