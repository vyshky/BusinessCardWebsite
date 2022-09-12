$('#TestButton').click(function () {
    $("#TestButton").addClass('active');
    $('#IndexButton').removeClass('active');
    $('#PortfolioButton').removeClass('active');
    $('#SummaryButton').removeClass('active');

    //1. Очистка main - удает все элементы перебором в нутри main, плохо читается код
    ////////////////////////////////////////////////
    //for (; $('#main').children().length > 0 ;) {
    //    $('#main').children()[0].remove();
    //}
    //2. $('#main').remove(); // Удалает элемент main полность, не подходит

    $('#main').text(''); // Удалает все что находится в main, лучший вариант , быстрый вариант , так как не нужно перебирать все элементы
    ////////////////////////////////////////////////
    $("#main").append('<h2>Очистка Main выполнилась на стороне клиента</h2>');
});