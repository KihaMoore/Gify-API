$(document).ready(function () {


	var ghiblis = [" Howls Moving Castle",	"Porco Rosso" , "Princes Mononoke", "The Wind Rises" , "The Secret World of Arrietty ",
	"My Neighbor Totoro" ,"Castle in the Sky’ (Laputa) ",
	"Spirited Away" , "WHEN MARNIE WAS THERE", "Ponyo", "Kiki's delivery Service","Nausicaä of the Valley of the Wind"];


              
              $("h5").css("color","grey");
              $(".submit-btn").css("padding-left","100px");

			        function buttonsMaker() {
  
           
                $("#buttonsArea").empty(); 
           
            
            for (var i = 0; i < ghiblis.length; i++) {
          
                 var button = $("<button>");
                
                 button.html(ghiblis[i]);
                 button.attr("id", "ghibli-btn");
                 button.attr("ghibli-title", ghiblis[i]);
                 button.css("color","grey")

               $("#buttonsArea").append(button);                 
              
							}
　     
            }
            
        
                
			 function displayGifs() {
  　　　
                 var ghibli = $(this).attr("ghibli-title");
  　　　            
                 console.log(ghibli);
  　　　           
                 var queryURL = 
                 
                 "https://api.giphy.com/v1/gifs/search?q=" 
                 　　　　　　　　+ ghibli  +
  　　　　　　　　　　　　"&api_key=dc6zaTOxFJmzC&limit=10";

　　　　　            $.ajax({
                    url: queryURL,
                     method: "GET"
  　　　              }).done(function(response) {
    　               console.log(response);
    　               var response = response.data;

    
    
    
              for (var i = 0; i < response.length; i++) {
        
                     var rating = response[i].rating;
                      
                     var h4 = $("<h4>").html("Rating: " + rating);
                     $('h4').css('color','white', );
        

                     var gifGhibli = $("<img>");
                     
                     var gifDiv = $("<div>");
        
                     gifDiv.addClass("gifDiv");
        
                    gifGhibli.addClass("gifGhibli");
                    gifGhibli.attr("src", response[i].images.original.url);
                    gifGhibli.attr("data-still", response[i].images.original_still.url);
                    
      

    
                    gifDiv.append(h4);
                    gifDiv.prepend(gifGhibli);

      
                    $("#gifsArea").prepend(gifDiv);
                  }
               });
			       }

               $(document).on("click", "#ghibli-btn", displayGifs);
               
               $("#submit-btn").on("click", function(event) {
                 event.preventDefault();

                  var newMovie = $("#userMovie").val();
                  ghiblis.push(newMovie);
                  
                  buttonsMaker();

		       	});

			 
              
                $(document).on("click", ".gifGhibli", function() {
                      
                     var status = $(this).attr('data-state');

                     if (status == 'still') {
                          $(this).attr('src', $(this).data('animate'));
                         $(this).attr('data-state', 'animate');
                       } else {
                          $(this).attr('src', $(this).data('still'));
                          $(this).attr('data-state', 'still');
                　　　  }
 	              });

 					          buttonsMaker();
             });
