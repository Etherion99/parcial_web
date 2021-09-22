let rows = 1;

function addGusto(){
    let gusto = $('#gusto').val();

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
        let row = $(this).data('row')
        
        $('#row-' + row + ' .view').fadeOut(function(){
            $('#row-' + row + ' .edit').fadeIn();
        });

        displayControls();
    })
    
    rows++;
}

function displayControls(){
    alert('fdf');
}