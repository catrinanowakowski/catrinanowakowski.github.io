$(document).ready(function() {
    $.getJSON('./clickmes.JSON', function(clickmes) {
        const container = $('#clickme-cards-container');
        
        $.each(clickmes, function(index, clickme) {
            const clickmecardHtml = `
            <div class="col-md-4 mb-4"> 
            <article class="all-browsers">
                    <h1 style = "color: #333;">${clickme.title}</h1>
                        <a href="${clickme.link}" target="_blank">
                            <button class="btn btn-primary button1">View</button>
                        </a>
                </article>
            </div>
        `;
        
            container.append(clickmecardHtml);
        });
    });
});
