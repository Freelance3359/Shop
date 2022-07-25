jQuery(document).ready(function ($) {
    $("#fullpage").fullpage({
        scrollbar: false,
        navigation: true,
        navigationTooltips: ['1', '2', '3', '4', '5',],
        loopTop: true,
        loopBottom: true,
    });
})