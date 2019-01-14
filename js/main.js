$(window).load(function () {
    $('.buttons span:first-child').addClass('active');
});

$('span').on('click', function() {

    $('span').removeClass('active');
    $(this).addClass('active');
    $('input').val('');
});


let typeGlobal = null,
    lateGlobal = null;

main(1, null, 0); 

function main (type, number, late) {   

    if (type) {

        typeGlobal = type;
    }     
    
    if (late) {

        lateGlobal = late;
    }    

    var dataFiltered = [];  
    
    if (lateGlobal == 1) {

        for ( let i = 0; i< data.length; i++) {

            if ( lateGlobal == data[i].late) {
    
                if ( number == null) {
    
                    dataFiltered.push(data[i]);
                } 
                if ( number == data[i].number) {
    
                    dataFiltered.push(data[i]);
                };
            };
        };
    };

    if (typeGlobal && lateGlobal != 1) {

        for ( let i = 0; i < data.length; i++) {

            if ( typeGlobal == data[i].type) {
        
                if ( number == null) {
        
                     dataFiltered.push(data[i]);
                } 
                if ( number == data[i].number) {
        
                    dataFiltered.push(data[i]);
                };
            };
        };   
    };    

    $('#results > tbody > tr').remove();

    dataFiltered.forEach(function(item, i, arr) {

        $('#results > tbody').append('<tr><td>'+item.date+'</td><td>'
        +item.city+'</td><td>'+item.number+'</td><td>'+item.note+'</td></tr>');
    });
};


 

