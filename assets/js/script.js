$(document).ready(function () {
    let sideNavMenu = $('.sideNavMenu');
    let sideNav = $('.sideNav');
    let sideNavCross = $('.sideNavCross');

    sideNavMenu.on('click', () => {
        sideNav.removeClass('sideNavHide').addClass('sideNavShow');
        console.log('menu opened');
    });

    sideNavCross.on('click', () => {
        sideNav.removeClass('sideNavShow').addClass('sideNavHide');
        console.log('menu closed');
    });
});


