$(function() {

  // search box show
  $("main").on("click", ".search .ion-ios-search-strong", function(){
    console.log("Hiding search");
    $(".search.inactive").hide();
    $(".search.active").show();
  })

  // search box hide
  $("main").on("click", ".search .ion-close", function(){
    console.log("Hiding search");
    $(".search.active").hide();
    $(".search.inactive").show();
  })
});
