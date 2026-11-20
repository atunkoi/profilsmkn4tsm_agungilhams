(function(){
var $=function(s,c){return (c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var menu=$('.agungilhams-menu'),burger=$('.agungilhams-burger');
burger.addEventListener('click',function(){var o=menu.classList.toggle('agungilhams-open');burger.setAttribute('aria-expanded',o)});
$$('.agungilhams-drop>button').forEach(function(b){b.addEventListener('click',function(){b.parentNode.classList.toggle('agungilhams-open')})});
var cur=location.pathname.split('/').pop()||'index.html';
$$('.agungilhams-menu a').forEach(function(a){if(a.getAttribute('href')===cur){a.classList.add('agungilhams-active')}});
$$('.agungilhams-tab').forEach(function(t){t.addEventListener('click',function(){
$$('.agungilhams-tab').forEach(function(x){x.setAttribute('aria-selected',x===t)});
$$('.agungilhams-panel').forEach(function(p){p.classList.toggle('agungilhams-show',p.id===t.dataset.panel)})})});
var mb=$('#agungilhams-morebtn');if(mb){mb.addEventListener('click',function(){var m=$('.agungilhams-more');var f=m.classList.toggle('agungilhams-full');mb.textContent=f?'Tutup sambutan':'Baca selengkapnya'})}
var cnt=$$('.agungilhams-count');
if(cnt.length&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var el=e.target,end=+el.dataset.target,n=0,step=Math.max(1,Math.ceil(end/60));var t=setInterval(function(){n=Math.min(end,n+step);el.textContent=n.toLocaleString('id-ID');if(n>=end)clearInterval(t)},25)})},{threshold:.5});cnt.forEach(function(c){io.observe(c)})}
else{cnt.forEach(function(c){c.textContent=(+c.dataset.target).toLocaleString('id-ID')})}
var lb=$('#agungilhams-lightbox');
if(lb){$$('.agungilhams-gallery img').forEach(function(i){i.addEventListener('click',function(){$('img',lb).src=i.src;$('img',lb).alt=i.alt;lb.classList.add('agungilhams-show')})});
lb.addEventListener('click',function(){lb.classList.remove('agungilhams-show')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('agungilhams-show')})}
var f=$('#agungilhams-form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
function chk(id,test,msg){var el=$('#'+id),er=$('#'+id+'-err');var bad=!test(el.value.trim());er.textContent=bad?msg:'';if(bad)ok=false}
chk('agungilhams-nama',function(v){return v.length>=3},'Isi nama minimal 3 huruf.');
chk('agungilhams-email',function(v){return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)},'Format email belum benar, contoh: nama@email.com');
chk('agungilhams-subjek',function(v){return v.length>=3},'Isi subjek pesan.');
chk('agungilhams-pesan',function(v){return v.length>=10},'Pesan minimal 10 karakter.');
if(!ok)return;
var s=$('#agungilhams-success');s.style.display='block';
var body='Nama: '+$('#agungilhams-nama').value+'\nEmail: '+$('#agungilhams-email').value+'\n\n'+$('#agungilhams-pesan').value;
window.location.href='mailto:info@smkn4-tsm.sch.id?subject='+encodeURIComponent($('#agungilhams-subjek').value)+'&body='+encodeURIComponent(body);
f.reset()})}
var top=$('#agungilhams-top');
window.addEventListener('scroll',function(){top.style.display=window.scrollY>400?'block':'none'});
top.addEventListener('click',function(){window.scrollTo({top:0})});
})();
