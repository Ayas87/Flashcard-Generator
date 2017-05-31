$('.btn-sample').on('click',function(){
    $.get("http://localhost:3000/data/", function(data, status){
        // alert("Data: " + data + "\nStatus: " + status);
        $('.sample').append(data.front);
        // $('.sample').append(data.back);
        // $('.sample').append(JSON.parse(data));
        // console.log(data);
    });
});
// 