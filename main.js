
$( document ).ready(function() {
    $("#cart-modal").load('cart-modal.html');
    $('.ui.dropdown')
        .dropdown({ on: 'hover' })
    ;
    $('.rating')
        .rating('disable')
    ;
    $('#cart-container').click(function () {
        $('#cart-modal').modal('show');
    });
});
