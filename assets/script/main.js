/*
* REVOLUT REPLICA Navmenu - main.js
* with jQuery 3.5.0
*/

// References

var dropdownElement = $('.navmenu__right-menu li').children();

dropdownElement.click(function (e) { 
    e.preventDefault();
    var dropdownChildren = $(this).next();
    //dropdownChildren.addClass('active');
    dropdownChildren.toggle();
});