var saveBtn = $('.saveBtn');

// current date
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

// background depending on time
function blockColor() {
    var hour = moment().hours();

    $('.time-block').each(function() {
        var currentHour = parseInt($(this).attr('id'));

        if (currentHour > hour) {
            $(this).addClass('future');
        } else if (currentHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

// local storage
saveBtn.on('click', function() {
    var time = $(this).siblings('.hour').text();
    var info = $(this).siblings('.description').val();

    localStorage.setItem(time, info);
});

// Gets content from the local save
function localSave() {
    $('.hour').each(function() {
        var currentHour = $(this).text();
        var textArea = localStorage.getItem(currentHour);

        if (textArea !== null) {
            $(this).siblings('.description').val(textArea);
        }
    });
};

blockColor();
localSave();