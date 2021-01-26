const zomato_URL="https://developers.zomato.com/api/v2.1"
const zomato_key="c3b4720dc374f0a3d792ba3365dbbabd"
const mapbox_URL= "pk.eyJ1IjoiZGM0ODA1MDYiLCJhIjoiY2trY2E0ZzJlMGN5YTJvcXJmNnU1Mm85ZiJ9.xn33xqgXnxzrEA8tPhEcww";

let app= angular.module("Mashup",[])

app.controller("Controller",($scope,$http)=>{
    $scope.title="Restaurants"
    mapboxgl.accessToken = mapbox_URL
      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-96, 37.8], // starting position
        zoom: 3, // starting zoom
      });
    //   var userCoordinates;
      
      navigator.geolocation.getCurrentPosition(position => {
        userCoordinates = [position.coords.longitude, position.coords.latitude];
        fetchRestaurants(userCoordinates)
        map.addSource("user-coordinates", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: userCoordinates
            }
          }
        });
  
        map.addLayer({
          id: "user-coordinates",
          source: "user-coordinates",
          type: "circle",
        });
        map.flyTo({
          center: userCoordinates,
          zoom: 14
        });
      });
      
      var geojson = {
        type: 'FeatureCollection',
        features: []
      };
      fetchRestaurants=(userCoordinates)=>{
          $http.get(`${zomato_URL}/geocode?lon=${userCoordinates[0]}&lat=${userCoordinates[1]}`,
          {
              mode: "cors",
              headers:{
                  'user-key': zomato_key
                }
          }
          )
          .then((response)=>{
             console.log(response.data)
             $scope.restaurants=response.data.nearby_restaurants
             $scope.top_restaurants= $scope.restaurants.slice(0,3)
             geojson.features=[]
             for(i=0;i<$scope.restaurants.length;i++){
                 var location=$scope.restaurants[i].restaurant.location
                 var name=$scope.restaurants[i].restaurant.name
                 var cuisines= $scope.restaurants[i].restaurant.cuisines
                 var rating = $scope.restaurants[i].restaurant.user_rating.aggregate_rating
                 geojson.features.push({
                    type: 'Feature',
                    geometry: {
                      type: 'Point',
                      coordinates: [location.longitude, location.latitude]
                    },
                    properties: {
                      title: name,
                      description: "Cuisines: "+cuisines+"<br>"+"Rating: "+rating,
                    }
                 })
             }
             geojson.features.forEach(function(marker) {

                // create a HTML element for each feature
                var el = document.createElement('div');
                el.className = 'marker';
              
                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                  .setLngLat(marker.geometry.coordinates)
                  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                  .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
                  .addTo(map);
              });
          },(error)=>{

          })
      }
      
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );

});
