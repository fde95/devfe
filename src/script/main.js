function typeText(element, text, index, callback) {
    if (index < text.length) {
        $(element).text($(element).text() + text[index]);
        setTimeout(function () {
            typeText(element, text, index + 1, callback);
        }, 100);
    } else {
        setTimeout(callback, 1500);
    }
}

function deleteText(element, callback) {
    var text = $(element).text();
    if (text.length > 0) {
        $(element).text(text.slice(0, -1));
        setTimeout(function () {
        deleteText(element, callback);
        }, 50);
    } else {
        setTimeout(callback, 800);
    }
}

function startTyping() {
    typeText('.hero--title--autowrite', 'Felipe Espinoza', 0, function () {
            deleteText('.hero--title--autowrite', function () {
            typeText('.hero--title--autowrite', 'Front End', 0, function () {
                deleteText('.hero--title--autowrite', startTyping);
            });
        });
    });
}

startTyping();