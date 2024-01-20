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
    if (text.length > 1) {
        $(element).text(text.slice(0, -1));
        setTimeout(function () {
        deleteText(element, callback);
        }, 50);
    } else {
        setTimeout(callback, 800);
    }
}

function startTyping() {
    typeText('.hero--title--autowrite', 'elipe Espinoza', 0, function () {
            deleteText('.hero--title--autowrite', function () {
            typeText('.hero--title--autowrite', 'ront End', 0, function () {
                deleteText('.hero--title--autowrite', startTyping);
            });
        });
    });
}

startTyping();

// Animação de elementos por biblioteca
AOS.init();

// Botão Hamburguer
function showHidden() {
    var headerNavList = $('#headerNavList');
    var buttonMenu = $('#buttonMenu');

    if (window.innerWidth <= 800) {
        if (headerNavList.is(':visible')) {
            buttonMenu.removeClass('bi-x-lg');
            buttonMenu.addClass('bi-list');
            headerNavList.hide();
        } else {
            buttonMenu.removeClass('bi-list');
            buttonMenu.addClass('bi-x-lg');
            headerNavList.show();
        }
    }
}