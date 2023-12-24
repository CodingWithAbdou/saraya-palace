$(function(){
    const navBar = document.querySelector('.navbar')
    $('.select').niceSelect();
    document.addEventListener('scroll' , function(e) {
        let scrollHeight = document.documentElement.scrollTop;
        if(document.querySelector('.navbar-collapse').classList.contains('show')) {
            navBar.classList.add('index-4')
        }else {
            if(scrollHeight > 30) {
                navBar.classList.add('index-4')
            }else {
                navBar.classList.remove('index-4')
            }
        }
        
    })
    document.querySelector('.navbar-toggler').addEventListener('click' , () =>{
        console.log(document.querySelector('.navbar-collapse').classList.contains('show'))
        // if(document.querySelector('.navbar-collapse').classList.contains('show')) {
            navBar.classList.add('index-4')
        // }
    })
});


