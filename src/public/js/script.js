const zomato_URL="https://developers.zomato.com/api/v2.1"
const zomato_key="c3b4720dc374f0a3d792ba3365dbbabd"
const mapbox_URL= "pk.eyJ1IjoiZGM0ODA1MDYiLCJhIjoiY2trY2E0ZzJlMGN5YTJvcXJmNnU1Mm85ZiJ9.xn33xqgXnxzrEA8tPhEcww";

let app= angular.module("Mashup",[])

app.controller("Controller",($scope,$http)=>{
    
      var userCoordinates;
      $scope.query=''
      var geojson = {
        type: 'FeatureCollection',
        features: []
      };
// **************** Map ********************
      var currentMarkers=[]
      mapboxgl.accessToken = mapbox_URL

      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-96, 37.8], // starting position
        zoom: 3, // starting zoom
      });
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
      plotMap=()=>{
        
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
        // map.on("load", function(e){
        //   e.map.resize();
        // });
        map.addLayer({
          id: "user-coordinates",
          source: "user-coordinates",
          type: "circle",
        });
        console.log(userCoordinates)
        map.flyTo({
          center: userCoordinates,
          zoom: 14
        });
      }
      removeCurrentMarkers=()=>{
        if (currentMarkers!==null) {
          for (var i = currentMarkers.length - 1; i >= 0; i--) {
            currentMarkers[i].remove();
          }
        }
      }
      makeMarkers=(restaurant_list)=>{
        // var marker_tp = new mapboxgl.Marker().addTo(map);
        // marker_tp.remove();
        // removeCurrentMarkers();
        geojson.features=[]
        for(i=0;i< restaurant_list.length;i++){
          var location= restaurant_list[i].restaurant.location
          var name= restaurant_list[i].restaurant.name
          var cuisines= restaurant_list[i].restaurant.cuisines
          var rating = restaurant_list[i].restaurant.user_rating.aggregate_rating
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
      // console.log(geojson.features)
        geojson.features.forEach(function(marker) {
  
          // create a HTML element for each feature
          var el = document.createElement('div');
          el.className = 'marker';
          
          // console.log("Hello")
          // make a marker for each feature and add to the map
          oneMarker=new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
            .addTo(map);
            currentMarkers.push(oneMarker)
        });
      }
// **************** Fetch Restaurants**************
      $scope.fetchRestaurants=()=>{
        
        // console.log($scope.query)
        if($scope.query==''){
          $scope.info="Showing Nearby Restaurants"

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
             $scope.top_restaurants= $scope.restaurants.slice(0,8)
             makeMarkers($scope.restaurants);
          // },(error)=>{

          // })
            });
        }
        else{
          $scope.info=`You searched for "${$scope.query}"`;
          $http.get(`${zomato_URL}/search?q=${$scope.query}&count=8`,
          {
              mode: "cors",
              headers:{
                  'user-key': zomato_key
                }
          }
          )
          .then((response)=>{
             console.log(response.data)
             $scope.top_restaurants=response.data.restaurants
             makeMarkers($scope.top_restaurants);
            });
        }

    }

      navigator.geolocation.getCurrentPosition(position => {
        userCoordinates = [position.coords.longitude, position.coords.latitude];
        $scope.fetchRestaurants()
        plotMap()
      });
      
  });
