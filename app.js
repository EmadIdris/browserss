alert("Hello ")
var name = prompt("What is your Name?")
alert("Hello "+ name)

var FavBrowser = prompt(name +" What is Your Favorite Browser ? Google Chrome OR Brave OR Opera ")
while(FavBrowser != "Google Chrome" && FavBrowser !="Brave" && FavBrowser != "Opera")
{
  FavBrowser = prompt("Enter a Valid Value: ");
}
var NumberOfPic = prompt("How Many Times You Want to See The Picture: ");
while(NumberOfPic > 30)
{
  NumberOfPic =prompt("Please Enter Number Less Than 30 !!!");
}

function statement ()
{
if (FavBrowser == "Google Chrome")
{
  document.write('<p style="text-align: center; color:gold;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>');
  
  for(var i = 0;i< NumberOfPic ; i++)
  {
    document.write(' <img src="Logo/GC.png" alt="Google Chrome" width="33%" height="400px"> '  )
  }


}
else if(FavBrowser == "Brave")
{
  document.write('<p style="text-align: center; color:gold;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>');
  
  for(var i = 0;i< NumberOfPic ; i++)
  {
    document.write(' <img src="Logo/BR.png" alt="Brave" width="33%" height="400px"> '  )
    }

}
else if(FavBrowser == "Opera")
{
  document.write('<p style="text-align: center; color:gold;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>');
 
  for(var i = 0;i< NumberOfPic ; i++)
  {
    document.write(' <img src="Logo/OP.png" alt="Opera" width="33%" height="400px"> '  )
  }
}
else
{
document.write("None");
}
}
statement();


function rate()
{
  var stars = prompt("How Many Stars Do You Are Rate My Website");
  document.write('<p style="text-align: center; color:gold;">' +'Your Rate is: '+ stars + '</p>')
  for (var i = 0 ; i<stars ; i++)
  {
    document.write(' <img src="rate/r1.png" alt="star" width="33%" height="400px"> ' )
  }
}
rate();
