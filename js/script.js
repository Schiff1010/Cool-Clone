function toggleOptions(){
    if(!(870<=screen.width)){
        var e = document.querySelector("nav.version-select option");
        e.style.display = "none"===e.style.display?"block":"none"
    }
}

!function(){
    var r=null, u=0, a=document.querySelector(".front.clouds"), c=document.querySelector(".back.clouds"), s=20, d=5;window.requestAnimationFrame(function e(n){
        if(r||(r=n), n-u<50)window.requestAnimationFrame(e);
        else{
            var o=n-r, t=s*(o/1e3), i=d*(o/1e3);
            a.style.backgroundPositionX=-t+"px", c.style.backgroundPositionX=-i+"px", u=n, window.requestAnimationFrame(e)
        }
    })
}()