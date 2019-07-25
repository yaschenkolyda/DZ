$(doctype).ready(function () {

    // переменные
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.btn btn-outline-success');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');

button type="button" class="btn btn-outline-danger">CE</button>
							<button type="button" class="btn btn-outline-primary">+</button>
							<button type="button" class="btn btn-outline-primary">-</button>
							<button type="button" class="btn btn-outline-primary">*</button>
							<button type="button" class="btn btn-outline-primary">/</button>
							<button type="button" class="btn btn-outline-danger"><-</button>
							<button type="button" class="btn btn-outline-primary">%</button>
							<button type="button" class="btn btn-outline-primary">+-</button>
							<button type="button" class="btn btn-outline-danger">=</button>

    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    // SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () { 
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});



