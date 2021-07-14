alert("Hello ")
var name = prompt("What is your Name?")
alert("Hello "+ name)

var FavBrowser = prompt(name +" What is Your Favorite Browser ?")
if (FavBrowser == "Google Chrome")
{
document.write('<p style="text-align: center;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="https://cdn.mena-tech.com/wp-content/uploads/2021/01/googlechrome.png" alt="Google Chrome" width="100%" height="500">'  )
}else if(FavBrowser == "Brave")
{
document.write('<p style="text-align: center;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="https://filehunter.net/wp-content/uploads/2019/12/Brave-Browser.png" alt="Brave" width="100%" height="500">'  )
}else if(FavBrowser == "Opera")
{
document.write('<p style="text-align: center;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="https://filehunter.net/wp-content/uploads/2019/12/Opera.png" alt="Opera" width="100%" height="500">'  )
}else
{
document.write("None");
}
