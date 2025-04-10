document.getElementById('aboutus').addEventListener('click' , () => {
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('about-us').classList.remove('hidden');
});
    
document.getElementById('back-btn').addEventListener('click' , () =>{
    document.getElementById('about-us').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
});

document.getElementById('contact').addEventListener('click' , () =>{
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('contact-info').classList.remove('hidden');
});

document.getElementById('back-btn2').addEventListener('click' , ()=>{
    document.getElementById('contact-info').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
});

document.getElementById('Pay').addEventListener('click' , ()=>{
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('Payment').classList.remove('hidden');
});

document.getElementById('back-btn3').addEventListener('click' , ()=>{
    document.getElementById('Payment').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
});

document.getElementById('puppypics').addEventListener('click' , ()=>{
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('pic').classList.remove('hidden');
});

document.getElementById('back_btn4').addEventListener('click' , ()=>{
    document.getElementById('pic').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
});
             
document.getElementById('updates').addEventListener('click' , ()=>{
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('up').classList.remove('hidden');

 });

 document.getElementById('back_btn5').addEventListener('click' , ()=>{
    document.getElementById('up').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
 });
 
 document.getElementById('mom and dad').addEventListener('click' , ()=>{
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('momanddad').classList.remove('hidden');

 });

 document.getElementById('back_btn6').addEventListener('click' , ()=>{
    document.getElementById('momanddad').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
 });
 
 

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
    button.classList.add("glow");
});

button.addEventListener("mouseleave", () => {
        setTimeout(() => {
            button.classList.remove("glow");
            }, 1000); // Glows for 1 second after leaving
        });
    });
});


   const items = document.querySelectorAll('.scroll-container > *');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate once, then stop
      }
    });
  }, {
    threshold: 0.5
  });

  items.forEach(item => observer.observe(item));



document.addEventListener("contextmenu", (event) => event.preventDefault()); // Disable right-click

document.addEventListener("keydown", (event) => {
if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "i" || event.key === "j" || event.key === "c")) {
        event.preventDefault();
    }
});
