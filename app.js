(function(angular){
    var app=angular.module('mainapp',['tablemodule']);
    app.controller('maincontroller',['$scope',function($scope){

        $scope.headers={h1:"Name",h2:"Age",h3:"Gender"};

        $scope.array=[{name:"Name0",age:22,gender:"male0"},
                            {name:"Name1",age:32,gender:"male1"},
                            {name:"Name2",age:43,gender:"male2"},
                            {name:"Name3",age:12,gender:"male3"}];  
                            //console.log($scope.array);
    }]);
})(window.angular)