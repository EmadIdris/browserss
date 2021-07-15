alert("Hello ")
var name = prompt("What is your Name?")
alert("Hello "+ name)

var FavBrowser = prompt(name +" What is Your Favorite Browser ?")
if (FavBrowser == "Google Chrome")
{
<<<<<<< HEAD
document.write('<p style="text-align: center; color:white;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="Logo/GC.png" alt="Google Chrome" width="400px" height="400px">'  )
}else if(FavBrowser == "Brave")
{
document.write('<p style="text-align: center; color:white;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="Logo/BR.png" alt="Brave" width="400px" height="400px">'  )
}else if(FavBrowser == "Opera")
{
document.write('<p style="text-align: center; color:white;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="Logo/OP.png" alt="Opera" width="400px" height="400px">'  )
=======
document.write('<p style="text-align: center;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="https://cdn.mena-tech.com/wp-content/uploads/2021/01/googlechrome.png" alt="Google Chrome" width="100%" height="500">'  )
}else if(FavBrowser == "Brave")
{
document.write('<p style="text-align: center;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="https://filehunter.net/wp-content/uploads/2019/12/Brave-Browser.png" alt="Brave" width="100%" height="500">'  )
}else if(FavBrowser == "Opera")
{
document.write('<p style="text-align: center;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>' + ' <img src="https://filehunter.net/wp-content/uploads/2019/12/Opera.png" alt="Opera" width="100%" height="500">'  )
>>>>>>> 76bf82196c75a1a7ebbeb9a0525229961c80777d
}else
{
document.write("None");
}
