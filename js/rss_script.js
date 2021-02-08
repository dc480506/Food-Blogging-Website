const Feed_URL="https://www.vegrecipesofindia.com/feed/"
// const Feed_URL = "https://www.recipetips.com/cooking-feed/recipes/all-new-recipes.xml"
let app = angular.module("RSSFeed", [])

app.controller("Controller", ($scope) => {
    console.log($scope.top_feeds)
    console.log(typeof($scope.top_feeds))
    feednami.load(Feed_URL).then((feed) => {
        console.log(feed.entries);
        feeds=feed.entries;
        $scope.$apply(function(){
            feeds.forEach(function (feed) {
                feed.date = new Date(feed.date).toGMTString();
                // console.log(x);
            });
            $scope.top_feeds=feeds
        });
        // console.log($scope.top_feeds)
        // console.log(typeof($scope.top_feeds))
        // console.log($scope.top_feeds[0].title)

    })
});