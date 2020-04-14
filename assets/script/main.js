/*
* REVOLUT REPLICA Navmenu - main.js
* with jQuery 3.5.0
*/

// References

var dropdownElement = $('.navmenu__right-menu li').children();
var dropdownMenu = dropdownElement.next();

// Mouse click
dropdownElement.click(showDropdownMenu);

/* Mouse enter/leave
dropdownElement.mouseenter(showDropdownMenu);
dropdownElement.mouseleave(showDropdownMenu);
*/

function showDropdownMenu() {
    var dropdownChildren = $(this).next();
    dropdownChildren.toggle();
    dropdownMenu.not(dropdownChildren).hide();
}