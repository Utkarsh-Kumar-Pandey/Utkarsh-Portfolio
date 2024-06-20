gsap.fromTo('.preload',{y:0,opacity:1},{y:'-105%',opacity:1,duration:5,delay:2,ease:"power2.out"})



const but = document.getElementById('contactbutton');
but.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
const revealElements = document.querySelectorAll('.reveal');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});
revealElements.forEach((element) => {
    observer.observe(element);
});

// for clicking the project button
const projectbut=document.getElementById('projectbutton');
const secondcontainer=document.getElementById('second');

// for clicking the education button 
const educationbut=document.getElementById('educationbutton');
const edusection=document.getElementById('education-section');
projectbut.addEventListener('click',()=>{
    if(secondcontainer.style.display=='none' ||secondcontainer.style.display==''){
        secondcontainer.style.display='block';
        edusection.style.display='none';
    }
    else{
        secondcontainer.style.display='none';
    }
    window.scrollTo({
        top: second.offsetTop,
        behavior: 'smooth'
    });

})


educationbut.addEventListener('click',()=>{
    if(edusection.style.display=='none' ||edusection.style.display==''){
        edusection.style.display='flex';
        secondcontainer.style.display='none';
        
    }
    else{
        edusection.style.display='none';
    }

    window.scrollTo({
        top: edusection.offsetTop,
        behavior: 'smooth'
    });

})

