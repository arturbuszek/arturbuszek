const t=document.querySelector('.menu-toggle'),m=document.querySelector('.menu');
if(t&&m)t.addEventListener('click',()=>{const o=m.classList.toggle('open');t.setAttribute('aria-expanded',String(o));});
