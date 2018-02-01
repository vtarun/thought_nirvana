angular.module('myApp', [])
	.controller('myCtrl', function($scope){
		$scope.leftList = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7'];
		$scope.rightList = [];

		$scope.onRight = function(index){
			$scope.rightList.push($scope.leftList[index]);
			$scope.leftList.splice(index,1);
		} 
	});