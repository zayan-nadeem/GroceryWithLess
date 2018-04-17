angular
	.module('groceryApp',[])  //Main Module defined for the Angular Application
	.controller('groceryCtrl', function($scope, $http) {

		$scope.groceryList = new Array();
		$scope.images = new Array();

		/*
		It is suggested to make the REST calls in Factories/Services to make the application
		Singleton. Since, this is fairly simple, I have called the GET method here in the controller.
		You can view other applications for the proper structure in my repository

		This application is also robust since the categories aren't forced populated
		*/
		$http.get('data/images.json').then(function(res){ 
			console.log(res.data)
			$scope.images = res.data;
		});

		$http.get('data/groceries.json').then(function(res){
			$scope.groceryList = res.data;
			addImages();
		});

		/*AddImages updates the Groceries.JSON for this application so that the images are added within the application
		No changes are made to the data files */
		function addImages() {
		$scope.groceryList.forEach(function(item) {
			var x = item["category"];
			var link = $scope.images[x];
			item["category"] = link;
		});
	}

});