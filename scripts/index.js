(()=> {
    let navList = document.querySelectorAll('nav a');
    let sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= header.scrollHeight){
            topBar.classList.add('transMenu');
            topBar.classList.remove('returnBG');
            let logo = document.getElementById('logo');

            logo.setAttribute('src', './images/allhands.png');
            return;
        }

        topBar.classList.remove('transMenu');
        topBar.classList.add('returnBG');
        logo.setAttribute('src', './images/allhandswhite.png');

        return;
        
    });


    let dShow = false;
    menu.onclick = (e) => {
        dShow = !dShow
        if (!dShow) {
            document.querySelector('.menu ul').style.display = 'flex'
        } else {
            document.querySelector('.menu ul').style.display = 'none'
        }
    }

    navList.forEach(i => {
        i.onclick = (e) => {
            e.preventDefault();
            sections.forEach(sec => {
                if (sec.classList.contains(i.innerText.toLowerCase())) {
                    sec.scrollIntoView(true);
                }
            })
        }
    });
})()
