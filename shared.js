// Scroll reveal
document.addEventListener('DOMContentLoaded', function(){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e,i){
      if(e.isIntersecting){
        setTimeout(function(){ e.target.classList.add('in'); }, i*60);
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.06, rootMargin:'0px 0px -16px 0px' });
  document.querySelectorAll('.r').forEach(function(el){ io.observe(el); });

  // Active nav
  var links = document.querySelectorAll('.nav-links a');
  var current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function(a){
    var href = a.getAttribute('href');
    if(href === current || (current === '' && href === 'index.html')) a.classList.add('active');
  });
});

// Project filter
function filter(cat, btn){
  document.querySelectorAll('.fb').forEach(function(b){ b.classList.remove('on'); });
  btn.classList.add('on');
  document.querySelectorAll('[data-cat]').forEach(function(r){
    r.style.display = (cat==='all' || r.dataset.cat===cat) ? '' : 'none';
  });
}
