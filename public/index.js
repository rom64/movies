window.addEventListener('DOMContentLoaded', ()=>{
    const top = document.querySelector('.top');
    console.log(top)
    if(pageYOffset > 300){
        top.style.display=' block';
    }
    top.addEventListener('click', (e)=>{
        e.preventDefault();
        scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
})