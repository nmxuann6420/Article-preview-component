function clickShare() {
    var contentOtherElement = document.querySelector('.content__other');
    var otherIconElement = contentOtherElement.querySelector('.other__icon');
    otherIconElement.addEventListener('click', function (e) {
        e.preventDefault();
        var iconShareLink = contentOtherElement.querySelector('.icon__share-link');
        var contentInfo = contentOtherElement.querySelector('.other__info');
        var iconShare = otherIconElement.querySelector('.icon__share');
        if(iconShareLink.classList.contains('icon__share-link--open')) {
            iconShareLink.classList.remove('icon__share-link--open');
            contentInfo.classList.remove('icon__share-mobile--open');
            otherIconElement.classList.remove('other__icon-mobile--open');
            iconShare.classList.remove('icon__share--click');
        } else {
            iconShareLink.classList.add('icon__share-link--open');
            contentInfo.classList.add('icon__share-mobile--open');
            otherIconElement.classList.add('other__icon-mobile--open');
            iconShare.classList.add('icon__share--click');
        }
    });
}