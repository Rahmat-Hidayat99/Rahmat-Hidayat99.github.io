// inisialisasi magic scroll control
var controller = new ScrollMagic.Controller();
// buat scroll magic scene
var scene = new ScrollMagic.Scene({
        triggerElement: ".about"
    })
    .setClassToggle('.about', 'show')
    .addTo(controller);