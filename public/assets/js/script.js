

$(function() {
    ///changes burger over to devout list//
    $(".devour-btn").on("click", function(e){
        e.preventDefault();
        var targetId = $(this).attr("burger-id");
        console.log(targetId); 

        $.ajax("/burgers/api/" + targetId, {
            type:"PUT"
        }).then(function(returned){
            console.log(returned);
            location.reload();
        });
    });

    ///adds burger///
    $(".create-form").on("submit", function(e){
        e.preventDefault();
        var newBurgerName = $("#burger-input").val().trim();

        var newBurger ={
            burger_name: newBurgerName
        };
        console.log(newBurger);
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(returned){
            console.log(returned);
            location.reload();
        });
    });

    ///clear button
    $("#clear-btn").on("click", function(e){
        e.preventDefault();
        $.ajax("/delete", {
            type: "DELETE"
        }).then(function(returned){
            console.log("table cleared");
            location.reload();
        });
    });
});

