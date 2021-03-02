const Feed_URL="http://localhost:3000/api/feeds/fetch-feeds"
// const Feed_URL="https://foodomania.com/feed/"
// const Feed_URL = "https://www.recipetips.com/cooking-feed/recipes/all-new-recipes.xml"
let app = angular.module("RSSFeed", [])

app.controller("Controller", ($scope,$http) => {
    console.log($scope.top_feeds)
    console.log(typeof($scope.top_feeds))
    // feednami.load(Feed_URL).then((feed) => {
    //     feeds=feed.entries;
    //     $scope.$apply(function(){
    //         feeds.forEach(function (feed) {
    //             console.log(feed.date)
    //             feed.date = new Date(feed.date).toGMTString();
    //             feed.description= feed.description.split("<p>")[1].split("</p>")[0].slice(0,250)+" ...... "
    //             feed.categories = feed.categories.join()
    //             // console.log(x);
    //         });
    //         $scope.top_feeds=feeds
    //     });
    //     // console.log($scope.top_feeds)
    //     // console.log(typeof($scope.top_feeds))
    //     // console.log($scope.top_feeds[0].title)

    // })
    $http.get(`${Feed_URL}`)
          .then((response)=>{
             console.log(response.data)
            //  $scope.restaurants=response.data.restaurants
            //  $scope.top_restaurants= $scope.restaurants.slice(0,8)
            //  makeMarkers($scope.restaurants);
            //  $scope.isLoading=false;
            $scope.top_feeds=response.data.feeds;
          },(error)=>{
            // console.log(error.data.error);
            // $scope.info=`You have made an ${error.data.error}`;
            // $scope.isLoading=false;
          });

});