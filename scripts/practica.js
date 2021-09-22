let rows = 1;
let editing = 0;

function addGusto(){
    let gusto = $('#gusto').val();
    $('#gusto').val('');

    $('#gustos-tabla').append(
        $('<div>', {
            class: 'row',
            id: 'row-'+rows
        }).append(
            $('<div>', {
                class: 'col px-0 mx-0'
            }).html(
                $('<div>', {
                    class: 'border p-3'
                }).append(
                    $('<span>', {
                        class: 'view'
                    }).text(gusto)
                ).append(
                    $('<input>', {
                        class: 'form-control text-center edit',
                        id: 'gusto-' + rows,
                        val: gusto,
                        style: 'display: none'
                    })
                )
            )
        ).append(
            $('<div>', {
                class: 'col px-0 mx-0'
            }).html(
                $('<div>', {
                    class: 'border p-3'
                }).append(
                    $('<span>', {
                        class: 'view'
                    }).text('0')
                ).append(
                    $('<input>', {
                        class: 'form-control text-center edit',
                        id: 'perc-' + rows,
                        val: '0',
                        style: 'display: none'
                    })
                )
            )
        ).append(
            $('<div>', {
                class: 'col px-0 mx-0'
            }).html(
                $('<div>', {
                    class: 'border h-100 p-3'
                }).append(
                    $('<a>', {
                        href: '#',
                        class: 'link view',
                        'data-row': rows 
                    }).text('Editar')
                ).append(
                    $('<span>', {
                        class: 'my-3 h-100 edit',
                        style: 'display: none'
                    }).text('En edición')
                )
            )
        )
    );

    $('#row-' + rows + ' a').click(function(){
        let row = $(this).data('row');
        editing = row;
        
        $('#row-' + row + ' .view').fadeOut(function(){
            $('#row-' + row + ' .edit').fadeIn();
        });

        $('#controls').fadeIn();
    })
    
    rows++;
}

function clearAll(){
    console.log('ff');
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
    $('#gusto').val('');

    $('#gustos-tabla .row:not(:first-of-type)').remove();
}

function accept(){
    let data = {
        name: $('#name').val() != undefined ? $('#name').val() : '',
        email: $('#email').val() != undefined ? $('#email').val() : '',
        phone: $('#phone').val() != undefined ? $('#phone').val() : '',
        gusto: $('#gusto-' + editing).val() != undefined ? $('#gusto-' + editing).val() : '',
        perc: $('#perc-' + editing).val() != undefined ? $('#perc-' + editing).val() : ''
    };

    let params = new URLSearchParams(data).toString();

    console.log(params)

    window.location = 'resultados.html?' + params;
}