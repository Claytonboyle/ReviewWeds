// review.js

var app = angular.module("humpDay",[]);

//Custom Directive - study this shit
app.directive('poker', function(){

	//returns 
	return {
		restrict : 'AE', //restricts to attribute, E for element, C for class
		template : '<h1> Poke Me </h1>', // defines how directive looks when used as element
		//templateURL : '.....'
		link : function (scope, element){
			element.bind ("click", function(){
				console.log("STOP POKING ME!!");
			})

		}
	}

})

app.controller("appController",['$scope', function($scope){

	var s = $scope;


	s.cast = [];
	s.decoy = "decoy variable";

	s.createCharacter = function(){

		// s.cast.push(s.character);
		// s.character = new Object();
		
		//check to see if email is valid before creating character
		if (s.character!==undefined)	{
			if (s.character.email.match(/.@.+\.(com|edu)/)){
				s.cast.push(s.character);
				s.character=undefined; //resets object
			}
		}

	}

	s.getCast = function(){
		return s.cast;
	}

	s.chooseMember= function(people){

		console.log(people);
		people.name="Redacted";
	}

}]);

// var Person = function(name){
// 	this.name = name;

// }

// var arr = [];

// for (var i=0;i<1000;i++){
// 	var name="Frank"+i;
// 	arr.push(new Person(name))
// }