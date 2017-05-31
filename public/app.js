$('.sample').on('click', function(data){
    if($('.sample').attr('side') === 'front'){
            $('.sample').html(data.back);
            $('.sample').attr('side','back');
    } else {
            $('.sample').html(data.front);
            $('.sample').attr('side','front');
    }
});

//Basic Form Submit
$("#basicForm").submit(function(e) {
    e.preventDefault(); // Prevents the page from refreshing
    var $this = $(this); // `this` refers to the current form element
    $.post($this.attr("action"), $this.serialize(), (data) => {
            $('.sample').html(data.front);
            $('.sample').attr('side','front');
        },"json"
    );
});

//Cloze Form Submit
$("#clozeForm").submit(function(e) {
    e.preventDefault(); // Prevents the page from refreshing
    var $this = $(this); // `this` refers to the current form element
    $.post($this.attr("action"), $this.serialize(),(data) => {
            $('.sample').html(data.text);
            $('.sample').attr('side','text');
        },"json"
    );
});