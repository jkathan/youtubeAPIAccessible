function submitAction() {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var queryTarget = $(event.currentTarget).find('#query');
        var searchTerm = queryTarget.val();
        getRequest(searchTerm);
    });
};

function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyBF5iNtaIhV7dxpUra_Dab06RhnT7rakZQ',
        q: searchTerm
        
    };
  
    $.getJSON(url, params, function (response) {
        console.log(response.items);
        //showResults(searchTerm);
         const results = response.items.map((item, response) => showResults(item));
         $('#search-results').html(results)
    });
}

function showResults (item) {
    let clickable = 'https://www.youtube.com/watch?v='+`${item.id.videoId}`;
    return `
     <div>
     <a href="${clickable}"><img src ="${item.snippet.thumbnails.medium.url}"></a>
     <div>    
    `;
}

$(submitAction)