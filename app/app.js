angular
	.module('groceryApp',[])
	.controller('groceryCtrl', function($scope, $http) {

		$scope.groceryList = new Array();
		$scope.images = new Array();

		$http.get('data/images.json').then(function(res){ 
			console.log(res.data)
			$scope.images = res.data;
		});

		$http.get('data/groceries.json').then(function(res){
			$scope.groceryList = res.data;
			addImages();
		});

		
		function addImages() {
		$scope.groceryList.forEach(function(item) {
			var x = item["category"];
			console.log(x);
			//console.log(Object.keys($scope.categories));
			var link = $scope.images[x];
			console.log(link);
			item["category"] = link;
			console.log(item["category"]);
			console.log("----");
		});
	}

	});