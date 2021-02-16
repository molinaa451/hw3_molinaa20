/* Drop Down Item: name Change source: https://stackoverflow.com/questions/54437917/replace-the-heading-name-with-dropdown-name-when-clicked/54438314#54438314*/

$('.dropdown-item').click(function() {
    $('.dropbtn').html($(this).html());
})