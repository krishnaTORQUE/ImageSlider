# Image Slider

### Description
Pure JavaScript Image Slider

LightWeight

    Let me know:
        your review.
        if you found any bug/error.

Thank You

### Version 
Stable Version 1.4.2

### License
(C) 2015 - 2016
under GNU General Public License Version 2.

### ScreenShot
![Alt text](SCREENSHOT.png?raw=true "ScreenShot")

### Example
```html
<link rel="stylesheet" type="text/css" href="imageSlider.css"/>
<script type="text/javascript" src="animate.js"></script>
<script type="text/javascript" src="imageSlider.js"></script>

<div class="imageSlider class_name">
    <img src="windows.jpg" alt="Windows" />
    <img src="mac.jpg" alt="Mac" />
    <img src="linux.jpg" alt="Linux" />
    
    <!-- To display image name (IMG ALT) *Optional -->
    <div class="imageSlider_title"></div>
</div>

<script type="text/javascript">
window.addEventListener('load', function() {
    imageSlider({
        class: 'imageSlider'
    });
}, false);

// class: 'class_name',     unique class_name for multi slider
// style: 'fade/slide',
// change: 2000,            (Change After Duration)
// speed: 5,                (Change Speed)
</script>
```