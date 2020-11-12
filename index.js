function clickShare() {
    var contentOther = document.querySelector('.content__other');
    var iconShareDirect = contentOther.querySelector('.icon__share-direct');
    var iconShareLink = contentOther.querySelector('.icon__share-link');
    var otherIcon = contentOther.querySelector('.other__icon');
    var iconShare = contentOther.querySelector('.icon__share');

    iconShareDirect.addEventListener('click', function (e) {
        e.preventDefault();
        iconShareLink.classList.toggle('icon__share-link--active');
        iconShareDirect.classList.toggle('icon__share-direct--active');
        otherIcon.classList.toggle('other__icon-mobile--active');
        iconShare.classList.toggle('icon__share--active');
    });
}