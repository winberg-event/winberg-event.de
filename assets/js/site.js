const sidebar=document.querySelector('.sidebar');const toggle=document.querySelector('.menu-toggle');const navLinks=[...document.querySelectorAll('.main-nav a[href^="#"]')];

toggle?.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});

navLinks.forEach(link=>{link.addEventListener('click',event=>{const id=link.getAttribute('href');const target=document.querySelector(id);if(!target)return;event.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});sidebar.classList.remove('open');toggle?.setAttribute('aria-expanded','false');});});

const sections=navLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));});},{rootMargin:'-35% 0px -55% 0px',threshold:0});sections.forEach(section=>observer.observe(section));

const form=document.querySelector('.contact-form');form?.addEventListener('submit',event=>{event.preventDefault();const note=form.querySelector('.form-note');if(!form.checkValidity()){form.reportValidity();if(note)note.textContent='Bitte füllen Sie die Pflichtfelder aus.';return;}if(note)note.textContent='Das Formular ist für die Vorschau vorbereitet. Der echte Mailversand wird vor Veröffentlichung eingerichtet.';});
