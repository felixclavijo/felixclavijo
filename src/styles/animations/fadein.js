// prettier-ignore
export const AnimationFade = (nameClass) => {
    const observer = new IntersectionObserver((entries) => {
        var t = 0
        entries.forEach(entry => {
            t = t + 0.2
            if(entry.isIntersecting) {
                if(nameClass === 'FadeLeft') {
                    entry.target.classList.remove('fadeOutLeft')
                    entry.target.classList.add('fadeInLeft');
                } else {
                    entry.target.classList.remove('fadeOutRight')
                    entry.target.classList.add('fadeInRight');
                }
                entry.target.style.animationDelay = t+'s'
            } else {
                if(nameClass === 'FadeLeft') {
                    entry.target.classList.remove('fadeInLeft');
                    entry.target.classList.add('fadeOutLeft')
                } else {
                    entry.target.classList.remove('fadeInRight');
                    entry.target.classList.add('fadeOutRight')
                }
                entry.target.style.animationDelay = null
            }
        })
    }, {
        rootMargin: '-150px',
        threshold: 0.0
    });
    
    if (document.getElementsByClassName(nameClass).length !== 0) {
        for (var i = 0; i < document.getElementsByClassName(nameClass).length; i++) {
            observer.observe(document.getElementsByClassName(nameClass)[i]);
        }
    }
}

// prettier-ignore
export const AnimationIn = (nameClass) => {
    const observer2 = new IntersectionObserver((entries) => {
        var t = 0
        entries.forEach(entry => {
            t = t + 0.2
            if(entry.isIntersecting) {
                entry.target.classList.remove('leftOut')
                entry.target.classList.add('leftIn');
                entry.target.style.animationDelay = t+'s'
            } else {
                entry.target.classList.remove('leftIn');
                entry.target.classList.add('leftOut')
                entry.target.style.animationDelay = null
            }
        })
    }, {
        // rootMargin: '0px',
        // threshold: 0.0
    });
    
    if (document.getElementsByClassName(nameClass).length !== 0) {
        for (var i = 0; i < document.getElementsByClassName(nameClass).length; i++) {
            observer2.observe(document.getElementsByClassName(nameClass)[i]);
        }
    }
}
