(function (win, doc) {
    let docEl = doc.documentElement;
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    let refresh = function () {
        let w = docEl.clientWidth;

        docEl.style.fontSize = 100 * (w / 750) + 'px';

        function setBodyFontSize () {
            if (doc.body) {
                    // doc.body.style.fontSize = 32 * (w/750)+ 'px'
                doc.body.style.fontSize = '16px';
            } else {
                doc.addEventListener('DOMContentLoaded', refresh);
            }
        }
        setBodyFontSize();
    };
    refresh();

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, refresh, false);
})(window, document);
