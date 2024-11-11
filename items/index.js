window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementsByClassName("back")[0].addEventListener('click', () => {
        let i = 0;
        var timerHandle = setInterval(function() {
        if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) 
        {window.scrollBy(0,-50+i);i+=0.666665} else clearInterval(timerHandle); },10);
    })
});