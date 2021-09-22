$(document).ready(function(){
    const query = window.location.search;
    const params = new URLSearchParams(query);

    $('#name').text(params.get('name') + '\n Ficha');
    $('#email').text(params.get('email'));
    $('#phone').text(params.get('phone'));
    $('#gusto').text(params.get('gusto'));
    $('#perc').text(params.get('perc'));
});