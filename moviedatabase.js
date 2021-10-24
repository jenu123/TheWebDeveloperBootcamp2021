var movies=[
    {
        title: "Thor:Ragnarok",
        hasWatched: true,
        rating: 5
    },
    {
        title: "It",
        hasWatched: false,
        rating: 1
    }
]
movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
    
})