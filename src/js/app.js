const btns = Array.from(document.getElementsByTagName('button'));

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {

        const targetTxt = btn.parentNode.getElementsByClassName('text')[0];
        if (!targetTxt.classList.contains('opened')) {
            Array.from(document.getElementsByClassName('text')).forEach(elem => {
                elem.classList.remove('opened');
                elem.style.height = '0px';
                elem.style.padding = '0px';
                elem.style.border = '0px solid black';
                elem.style.borderRadius = '0px';
            });
            targetTxt.classList.add('opened');
            targetTxt.style.height = targetTxt.scrollHeight + 'px';
            targetTxt.style.padding = '5px';
            targetTxt.style.borderRadius = '20px';
            targetTxt.style.border = '1px solid black';

        } else {
            targetTxt.classList.remove('opened');
            targetTxt.style.height = '0px';
            targetTxt.style.padding = '0px';
            targetTxt.style.border = '0px solid black';
            targetTxt.style.borderRadius = '0px';

        }

    });
})
