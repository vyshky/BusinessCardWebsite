$('#TestButton').click(function () {
    $("#TestButton").addClass('active');
    $('#IndexButton').removeClass('active');
    $('#PortfolioButton').removeClass('active');
    $('#SummaryButton').removeClass('active');

    //Очистка main
    ////////////////////////////////////////////////
    for (; $('#main').children().length > 0 ;) {
        $('#main').children()[0].remove();
    }
    //$('#main').remove();
    ////////////////////////////////////////////////
    $("#main").append('<h2>Очистка Main выполнилась на стороне клиента</h2>');
});