

// $(document).ready(function () {

//     $(document).on('click', '#link',(e)=>{
        
//         $.ajax({
              
//               url: 'Ajax.html',

//               success: function(){
//                 alert('Load was performed.');
//               }
//             });

//     });

// });





// $(document).ready(function () {
//         $(document).on('click', '#link', function(e) {

//         $.ajax(
//             {
//                 url: 'http://localhost/skillUp/js/ajax.html',
//                 cache:false,
//                 success: function(data) {
//                         $('.card-text').html(data);
//                 }
//             }
//         );
//     });
// });






$(document).ready(function () {
        $(document).on('click', '#link', function(e) {
        $.get(
            'http://localhost/skillUp/js/ajax.html',
            {},
            function(data) {
                    $('.card-text').html(data);
            }
        );
});



