(function () {
    'use strict';
    const boxes = document.querySelectorAll('.box');
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    };

    let observer = new IntersectionObserver((entry, observer) => {
        console.log(` Entry Length = ${entry.length}`);
        entry.forEach(e => {
            let id = e.target.id;
            console.group(`Entry # ${id}`);
            let element = document.getElementById(id);
            console.log(id, e.intersectionRatio);
            element.style.backgroundColor = e.intersectionRatio > 0 ? 'red' : 'saddlebrown';
            console.groupEnd(`Entry # ${id}`);
        });
    }, options);

    boxes.forEach(box => {
        observer.observe(box);
    });
})();