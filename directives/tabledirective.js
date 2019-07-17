(function(angular){
    var app=angular.module('tablemodule',['excelModule']);
    app.directive('tableDirective',function(){
        var directive={};
        directive.restrict='E';
        directive.scope={
            tableArrayData:'=',
            headers:'='
        }
        directive.controller=('someController',['$scope','$timeout','excelService',function($scope,$timeout,excelService){
            // $scope.array=[{name:"Name0",age:22,gender:"male0"},
            //                 {name:"Name1",age:32,gender:"male1"},
            //                 {name:"Name2",age:43,gender:"male2"},
            //                 {name:"Name3",age:12,gender:"male3"}];  
            //console.log("iNSIDE CONTROLLER"+ $scope.array);   
            $scope.exportData=function(tableId)
            {                
                var exportHref=excelService.tableToExcel(tableId,'WireWorkbenchDataExport');
                $timeout(function(){
                    location.href=exportHref;
                },100); // trigger download
            };
        }]);
        directive.link=function(scope,elem,attrs){
            //console.log("iNSIDE LINK"+ scope.array);
            // var arraydata=scope.array;
            // for(var i=0;i<arraydata.length;i++){
            //     var demoObject=arraydata[i];
            //     for(d in demoObject){
            //         console.log(d+":"+demoObject[d]);                    
            //     }
            // }
            console.log(scope.tableArrayData);
            console.log(scope.headers);
            scope.sort = {
                column: 'h1',
                descending: false
            };
            scope.selectedCls = function(column) {
                return column == scope.sort.column && 'sort-' + scope.sort.descending;
            };
            
            scope.changeSorting = function(column) {
                var sort = scope.sort;
                if (sort.column == column) {
                    sort.descending = !sort.descending;
                } else {
                    sort.column = column;
                    sort.descending = false;
                }
            };
        };
        directive.templateUrl="./views/table.html";
        return directive;
    });
})(window.angular);