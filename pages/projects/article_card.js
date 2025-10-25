$(document).ready(function() {
    $.getJSON('https://catrinanowakowski.github.io/pages/projects/articles.JSON', function(articles) {
        const container = $('#article-cards-container');
        $.each(articles, function(index, article) {
            const cardHtml = `
            <div class="col-md-4 mb-4"> <article class="all-browsers">
                    <h1 style = "color: #333;">${article.title}</h1>
                    <article class="browser">
                        <h2 style = "color: #333;">${article.subtitle}</h2>
                        <img class="article_img img-fluid" src="${article.imageSrc}" alt="${article.altText}">
                        <p style = "color: #333;">${article.description}</p>
                        <a href="${article.link}">
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
