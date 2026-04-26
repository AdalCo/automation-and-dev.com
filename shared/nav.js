(function() {
    var nav = document.querySelector('nav');
    var btn = nav.querySelector('.nav-hamburger');
    var links = nav.querySelector('.nav-links');
    if (!btn || !links) return;

    btn.addEventListener('click', function() {
        var open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });

    links.addEventListener('click', function() {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target)) {
            nav.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
})();
