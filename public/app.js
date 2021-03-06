let cards = [];
//Basic Form Submit
$("#basicForm").submit(function(e) {
    e.preventDefault(); // Prevents the page from refreshing
    let $this = $(this); // `this` refers to the current form element
    $.post($this.attr("action"), $this.serialize(), (data) => {
            $('#card-text').html(data.front);
            $('#card-text').attr('side','front');
        },"json"
    );
});

//Cloze Form Submit
$("#clozeForm").submit(function(e) {
    e.preventDefault(); // Prevents the page from refreshing
    let $this = $(this); // `this` refers to the current form element
    $.post($this.attr("action"), $this.serialize(),(data) => {
            $('#card-text').html(data.text);
            $('#card-text').attr('side','text');
        },"json"
    );
});

//Get data
$('#btn-update').on('click',()=>{
    $.get('/api/search/cards',(data)=>{
        cards = JSON.parse(data);
        console.log(cards[0].front);
    });
});

//Render data
$('#btn-next').on('click',()=>{
    $('#card-text').html('<h1>'+ cards[0].front + '</h1>');
    $('#card-text').attr('side','front');
});

$('#card').on('click', function(){
    if($('#card-text').attr('side') === 'front'){
            $('#card-text').html('<h1>'+  cards[0].back  + '</h1>');
            $('#card-text').attr('side','back');
    } else {
            $('#card-text').html('<h1>' + cards[0].front + '</h1>');
            $('#card-text').attr('side','front');
    }
});