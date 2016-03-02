/**
 * Created by Gosia on 29/12/15.
 */


$(document).on('ready', function() {

    //ADDITION
    $('#add').on('click', function () {
        var input1 = $('#digit1').val();
        var input2 = $('#digit2').val();
        var sum = sum(input1, input2);
        var result = $('<li>' + input1 + '+' + input2 + '= ' + sum + '</li>');
        $('#digit1').val(null);
        $('#digit2').val(null);
        var add = $('<button>');

        result.appendTo('#action');
        function sum(input1, input2) {
            return parseFloat(input1) + parseFloat(input2);
        }

        add.text('add').appendTo(result).on('click', function () {
            result.addClass('done');
        });
    });


//SUBSTRACTION

    $('#sub').on('click', function () {
        var input1 = $('#digit1').val();
        var input2 = $('#digit2').val();
        var sub = sub(input1, input2);
        var result = $('<li>' + input1 + ' - ' + input2 + ' = ' + sub + '</li>');
        $('digit1').val(null);
        $('digit2').val(null);
        var add = $('<button>');

        result.appendTo('#action');
        function sub(input1, input2) {
            return input1 - input2;
        }

        add.text('add').appendTo(result).on('click', function () {
            result.addClass('done');
        });
    });


//MULTIPLICATION
    $('#mul').on('click', function () {
        var input1 = $('#digit1').val();
        var input2 = $('#digit2').val();
        var mul = mul(input1, input2);
        var result = $('<li>' + input1 + ' * ' + input2 + ' = ' + mul + '</li>');
        $('#digit1').val(null);
        $('#digit2').val(null);
        var add = $('<button>');

        result.appendTo('#action');
        function mul(input1, input2) {
            return input1 * input2;
        }

        add.text('add').appendTo(result).on('click', function () {
            result.addClass('done');
        });
    });


//DIVISION
    $('#div').on('click', function () {
        var input1 = $('#digit1').val();
        var input2 = $('#digit2').val();
        var div = div(input1, input2);
        var result = $('<li>' + input1 + ' / ' + input2 + ' = ' + div + '</li>');
        $('#digit1').val(null);
        $('#digit2').val(null);
        var add = $('<button>');

        result.appendTo('#action');
        function div(input1, input2) {
            return input1 / input2;
        }

        add.text('add').appendTo(result).on('click', function () {
           result.addClass('done');
        });
    });
})

//CLEAR
    $("#clear").click(function() {
        $("#action").empty();


    });