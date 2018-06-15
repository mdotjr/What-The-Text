// This file is being deprecated as we are creating separate logic file for each handlebars view

// $(document).ready(function() {

//     $(document).on("submit", "#new-signup", newUserSubmit);

//     function newUserSubmit(event) {
//         event.preventDefault();
//         if (!($(".new-email").val()) || !($(".new-password").val())) {
//             return
//         }
//         newUser({
//             username: $(".new-email").val().trim(),
//             password: $(".new-password").val().trim()
//         })
//     };

//     function newUser(userData) {
//         $.post("/api/register", userData)
//         .then(console.log('hi'));
//     }
// });
  