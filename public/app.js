let cards = "these are default cards";

$('#card-text').on('click', function(data){
    if($('#card-text').attr('side') === 'front'){
            $('#card-text').html(data.back);
            $('#card-text').attr('side','back');
    } else {
            $('#card-text').html(data.front);
            $('#card-text').attr('side','front');
    }
});

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
    $.get('/',(cardData)=>{
        console.log('get was called ' + cardData)
        cards = cardData;
    })
})

//Render data
$('#btn-next').on('click',()=>{
    $('#card-text').html('<h1>Hello World!</h1>')
})