function imageSlider(arg) {
    /* 
     * Set Values
     */
    if (!arg.style) {
        arg.style = 'fade';
    }
    if (!arg.change) {
        arg.change = 2000;
    }
    if (!arg.speed) {
        arg.speed = 5;
    }

    var imgsldr = document.getElementsByClassName(arg.class);
    for (var i = 0; i < imgsldr.length; i++) {

        var imgsldr_img = imgsldr[i].getElementsByTagName('img');
        var imgsldr_title = imgsldr[i].getElementsByClassName('imageSlider_title');
        var height, alt_nam;

        /*
         * Initial Image Slider
         */
         alert(alt_nam);
        if (imgsldr_title.length > 0 && imgsldr_img[0].hasAttribute('alt')) {
            alt_nam = imgsldr_img[0].getAttribute('alt');
            imgsldr_title[0].textContent = alt_nam;
        }
        imgsldr_img[0].style.display = 'inline-block';
        imgsldr[i].style.display = 'block';
        /*
         * Set Height
         */
        height = imgsldr_img[0].clientHeight + 'px';
        imgsldr[i].style.height = height;

        /*
         * Start Animation
         */
        var counts = 1;
        var imgsldr_setInt = setInterval(function () {

            switch (arg.style) {

                /*
                 * Fade Style
                 */
                case 'fade':
                    if (counts > imgsldr_img.length - 1) {
                        counts = 0;
                        for (var j = 0; j < imgsldr_img.length; j++) {
                            animate.fade(imgsldr_img[j], 'out', arg.speed);
                        }
                        animate.fade(imgsldr_img[counts], 'in', arg.speed);
                        if (imgsldr_title.length > 0 && imgsldr_img[counts].hasAttribute('alt')) {
                            imgsldr_title[0].textContent = imgsldr_img[counts].getAttribute('alt');
                        }
                    } else {
                        animate.fade(imgsldr_img[counts], 'in', arg.speed);
                        if (imgsldr_title.length > 0 && imgsldr_img[counts].hasAttribute('alt')) {
                            imgsldr_title[0].textContent = imgsldr_img[counts].getAttribute('alt');
                        }
                    }
                    break;

                    /*
                     * Slide Style
                     */
                case 'slide':
                    if (counts > imgsldr_img.length - 1) {
                        counts = 0;
                        for (var j = 0; j < imgsldr_img.length; j++) {
                            animate.slide(imgsldr_img[j], 'up', arg.speed);
                        }
                        imgsldr_img[counts].style.height = height;
                        animate.slide(imgsldr_img[counts], 'down', arg.speed);
                        if (imgsldr_title.length > 0 && imgsldr_img[counts].hasAttribute('alt')) {
                            imgsldr_title[0].textContent = imgsldr_img[counts].getAttribute('alt');
                        }
                    } else {
                        imgsldr_img[counts].style.height = height;
                        animate.slide(imgsldr_img[counts], 'down', arg.speed);
                        if (imgsldr_title.length > 0 && imgsldr_img[counts].hasAttribute('alt')) {
                            imgsldr_title[0].textContent = imgsldr_img[counts].getAttribute('alt');
                        }
                    }
                    break;
            }
            counts++;
        }, arg.change);
    }
}