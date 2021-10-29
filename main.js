var elSelect = document.querySelector('select')
var p = document.querySelector('p')
console.log(p.classlist);
elSelect.addEventListener('change', function(){
    if(elSelect.value === 'qqq') {
        p.classList.add('qqq')
        p.classList.remove('kok', 'kok', 'yashil','malla', 'kul', 'qizil', 'oq', 'gulobi', 'sariq', 'otkirkok', 'sabzi', 'aqua')
    }else if (elSelect.value === 'kok') {
        p.classList.add('kok')
        p.classList.remove('qqq', 'kok', 'yashil','malla', 'kul', 'qizil', 'oq', 'gulobi', 'sariq', 'otkirkok', 'sabzi', 'aqua')
    }else if (elSelect.value === 'yashil') {
        p.classList.add('yashil')
        p.classList.remove('qqq', 'kok','malla', 'kul', 'qizil', 'oq', 'gulobi', 'sariq', 'otkirkok', 'sabzi', 'aqua')
    }else if (elSelect.value === 'malla') {
        p.classList.add('malla')
        p.classList.remove('qqq', 'kok', 'yashil', 'kul', 'qizil', 'oq', 'gulobi', 'sariq', 'otkirkok', 'sabzi', 'aqua')
    }else if (elSelect.value === 'kul') {
        p.classList.add('kul')
        p.classList.remove('qqq', 'kok', 'yashil','malla', 'qizil', 'oq', 'gulobi', 'sariq', 'otkirkok', 'sabzi', 'aqua')
    }else if (elSelect.value === 'qizil') {
        p.classList.add('qizil')
        p.classList.remove('qqq', 'kok', 'yashil','malla', 'kul', 'oq', 'gulobi', 'sariq', 'otkirkok', 'sabzi', 'aqua')
    }else if (elSelect.value === 'oq') {
        p.classList.add('oq')
        p.classList.remove('qqq', 'kok', 'yashil','malla', 'kul', 'qizil', 'gulobi', 'sariq', 'otkirkok', 'sabzi', 'aqua')
    }else if (elSelect.value === 'gulobi') {
        p.classList.add('gulobi')
        p.classList.remove('qqq', 'kok', 'yashil','malla', 'kul', 'qizil', 'oq', 'sariq', 'otkirkok', 'sabzi', 'aqua')
    }else if (elSelect.value === 'sariq') {
        p.classList.add('sariq')
        p.classList.remove('qqq', 'kok', 'yashil','malla', 'kul', 'qizil', 'oq', 'gulobi', 'otkirkok', 'sabzi', 'aqua')
    }else if (elSelect.value === 'otkirkok') {
        p.classList.add('otkirkok')
        p.classList.remove('qqq', 'kok', 'yashil','malla', 'kul', 'qizil', 'oq', 'gulobi', 'sariq', 'sabzi', 'aqua')
    }else if (elSelect.value === 'sabzi') {
        p.classList.add('sabzi')
        p.classList.remove('qqq', 'kok', 'yashil','malla', 'kul', 'qizil', 'oq', 'gulobi', 'sariq', 'otkirkok', 'aqua')
    }else if (elSelect.value === 'aqua') {
        p.classList.add('aqua')
        p.classList.remove('qqq', 'kok', 'yashil','malla', 'kul', 'qizil', 'oq', 'gulobi', 'sariq', 'otkirkok', 'sabzi')
    }
})
var nav = document.querySelector('nav')
var box = document.querySelector('.box')
document.addEventListener('scroll', function(e){
    console.log(window.scrollY);
    if(window.scrollY > 800){
        nav.classList.add('ppp')
        box.classList.add('box3')
    }else{
        nav.classList.remove('ppp')
        box.classList.remove('box3')
    }
})