/*
$(document).ready(function() {
	$('#add').click(function() {
		var toAddName = $('input[name=contact]').val();
		var toAddNum = $('input[name=number]').val();
		$('#contacts').append('<tr><th>'+toAddName+'</th><td>'+toAddNum+'</td></tr>');
	});
});*/

/*$(document).ready(function() {
    $('#add').click(function() {  // bind to button
    	var name = prompt("Name: ");
    	var number = prompt("Number: ");
    	$('table').append('<tr><th>' + name + '</th><td>' + number + '</td></tr>');
    });

    $('#del').click(function(){
    	$(this).addClass('delSelect');
    	$('tr').click(function(){
    		$(this).addClass('select');
    	});

    	$('.delSelect').click(function(){
    		$(this).removeClass('delSelect');
    		$('.select').remove();
    	});
    });
});*/

$(document).ready(function() {
    $('#add').click(function() {  // bind to button
        var name = prompt("Name: ");
        var number = prompt("Number: ");
        $('table').append('<tr><th>' + name + '</th><td>' + number + '</td></tr>');
    });

    $('#edit').click(function(){
        $(this).toggleClass('delSelect');
        $('tr').click(function(){
            $(this).toggleClass('select');
        });

        $('#del').click(function(){
            $('#edit').removeClass('delSelect');
            $('.select').remove();
        });
    });
});