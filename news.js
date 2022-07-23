console.log("this is news.js");

let source = 'in';
const apikey = "b242c6035723452898543788ec2e5d58";

let accordion = document.getElementById("accordion");

const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apikey}`,true);

xhr.onload= function(){
    if(this.status  === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles);
        let newsHtml ="";
        articles.forEach(function (element,index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="false" aria-controls="collapse${index}">
                                         <span class="badge badge-secondary"><h5>News ${index+1} :</h5></span> ${element.title}
                                    </button>
                                </h5>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
                                <div class="card-body">
                                    ${element.content} <a href="${element.url} target="_blank">READ MORE HERE</a>
                                </div>
                            </div>
                        </div>`

            newsHtml += news;
        });

        accordion.innerHTML = newsHtml;

    }
    else{
        console.log("some error occured");
    }
}

xhr.send();

