/**
 * Created by Gosia on 29/12/15.
 */


$(document).on('ready', function(){

    //ADDITION
    $('#add').on('click', function(){
        var input1=$('#digit1').val();
        var input2 =$('#digit2').val();
        var sum=sum(input1,input2);
        var result=$('<li>' + input1 + '+' +input2 + '= '+sum+'</li>');
        $('digit1').val(null);
        $('digit2').val(null);
        var add = $('<button>');

        result.appendTo('#action');
        function sum (input1, input2){
            return parseFloat(input1) + parseFloat(input2);
        }

        add.text('add').appendTo(result).on('click', function (){
            result.addClass('done');
        });
    });

    //SUBSTRACTION

})



