$(document).ready(function() {
    $.getJSON('./clickmes.json', function(clickmes) {
        const container = $('#clickme-cards-container');
        
        $.each(clickmes, function(index, clickme) {
            const cardHtml = `
            <div class="col-md-4 mb-4"> <article class="all-browsers">
                    <h1>${clickme.title}</h1>
                    <article class="browser">
                        <a href="${clickme.link}">
                            <button class="btn btn-primary button1">View</button>
                        </a>
                    </article>
                </article>
            </div>
        `;
        
            container.append(cardHtml);
        });
    });
});
