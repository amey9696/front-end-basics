//Initialize the news parameter
// let source='bbc-news';
let apiKey = 'c4b7b73f220a496cb9ac7c7b9e7c268f';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create get request https://newsapi.org/v2/everything?q=tesla&from=2021-05-22&sortBy=publishedAt&apiKey=c4b7b73f220a496cb9ac7c7b9e7c268f
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=tesla&from=2021-05-22&sortBy=publishedAt&apikey=${apiKey}`, true);
xhr.getResponseHeader('content-type', 'application/json');

//what do when response is ready
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        
        articles.forEach(function (element,index) { 
            let news = `
            <div class="accordion-item" id="headingone">
                <h2 class="accordion-header" id="headingone">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
                        ${element["title"]}
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingone"
                    data-bs-parent="#newsAccordion">
                    <div class="accordion-body">${element["content"]}. <a href="${element["url"]}">Read more here..</a></div>
                </div>
        </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occured");
    }
}
xhr.send();
