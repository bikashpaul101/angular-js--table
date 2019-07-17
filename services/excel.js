(function(angular){
    var myApp=angular.module("excelModule",[]);
    myApp.factory('excelService',function($window){

                var base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
                format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
            return {
                tableToExcel:function(tableId,worksheetName){
                    var uri='data:application/vnd.ms-excel;base64,',
                    template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:Name>{workbook}</x:Name><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
                    var table=document.getElementById(tableId),
                        ctx={worksheet:worksheetName,table:document.getElementById(tableId).innerHTML},
                        href=uri+base64(format(template,ctx));
                    return href;
                }
            };
        });        
})(window.angular);