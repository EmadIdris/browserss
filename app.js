alert("Hello ")
var name = prompt("What is your Name?")
alert("Hello "+ name)

var FavBrowser = prompt(name +" What is Your Favorite Browser ?")
if (FavBrowser == "Google Chrome")
{document.write('<p style="text-align: center; color:white;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="Logo/GC.png" alt="Google Chrome" width="400px" height="400px">'  )
}else if(FavBrowser == "Brave")
{
document.write('<p style="text-align: center; color:white;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="Logo/BR.png" alt="Brave" width="400px" height="400px">'  )
}else if(FavBrowser == "Opera")
{
document.write('<p style="text-align: center; color:white;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="Logo/OP.png" alt="Opera" width="400px" height="400px">'  )}
else
{
document.write("None");
}
