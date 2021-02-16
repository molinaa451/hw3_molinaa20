/* Drop Down Item: name change
source: https://stackoverflow.com/questions/54437917/replace-the-heading-name-with-dropdown-name-when-clicked/54438314#54438314*/
eventHandler =function(event) {
    $('.dropdown-item').click(function() {
        $('.dropbtn').html($(this).html());
    })
}
$(function() {
    $('.dropdown-item').click(eventHandler);
})