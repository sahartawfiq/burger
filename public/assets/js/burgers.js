$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevourState = $(this).data("newdevourState");
  
      newDevourState = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed to", newDevourState);

          location.reload();
        }
      );
    });
  
    $(".add-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
       burger_name: $("#newBurger").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  