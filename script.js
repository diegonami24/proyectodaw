document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentscroll = document.documentElement.scrollTop;

    if (currentscroll > 0){
        window.requestAnimationFrame(scrollUp);

        window.scrollTo (0,currentscroll - (currentscroll / 20));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll= function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll<500){
        buttonUp.style.transform = "scale(0)";
    }
}