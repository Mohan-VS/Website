$('button.btn.btn-block').on("click", () => {
    const linksDiv = $('div.links');
    if (linksDiv.hasClass('hidden')) {
        linksDiv.removeClass('hidden')
    } else {
        linksDiv.addClass('hidden')
    }
});