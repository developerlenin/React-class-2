var btn=document.getElementById("btn");
var btnone=document.getElementById("btn-one");
    var obj=[
        {id:1, Name:"Apple",   Price:30000, Model:2021,qty:1},
        {id:2, Name:"Redmi",   Price:20000, Model:2020,qty:1},
        {id:3, Nmae:"Samsung", Price:25000, Model:2022,qty:1}
    ];
 
    var prom;         
      var cartitem=[];
      
       function cart(){
        prom=prompt("Id");
        var result=obj.find(function(item,){
            return item.id==prom;
        });
        cartitem.push(result);
        console.log(result)
       };
       
       function cartitems(){
        var res=[];
        for(var i=0;i<cartitem.length;i++){
         res.push(cartitem[i]);
        console.log('test',prom);
        };
            
            var temp=res.map(function(item){
                console.log(item);
                if(prom == item.id){
                    item.qty++;
                }
                
                return res;  
            })
    
        
        document.getElementById("para").innerText=JSON.stringify(res);
       };
      
       
    

    