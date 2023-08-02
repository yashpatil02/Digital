let lastScrollTop =0,
navbar = document.getElementById("scrollNav");

window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        scrollNav.style.top = '-80px';
    }
    else{
        scrollNav.style.top = '0';
    }
    lastScrollTop = scrollTop;
})