var btn=document.getElementById("btn");
var btnone=document.getElementById("btn-one");

    var obj=[
        {id:1, Name:"Apple",   Price:30000, Model:2021},
        {id:2, Name:"Redmi",   Price:20000, Model:2020},
        {id:3, Nmae:"Samsung", Price:25000, Model:2022}
    ]
       var cart=[]; 
        function cart(){
            var prom= prompt("Id:");
            let result = obj.find(function(obj){

               return obj.id==prom;   
            })
            cart.push( result);
            console( result);
            document.getElementById("para").innerHTML=cart;
        };
       