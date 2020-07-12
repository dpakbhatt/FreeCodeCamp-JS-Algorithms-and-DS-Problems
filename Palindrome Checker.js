function palindrome(str) {
str = str.replace(/[^0-9a-zA-Z]/gi, "").toLowerCase();

var strlength = str.length;
var halfway;

if (strlength % 2 == 0)
{
halfway = strlength/2;
}
else
{
halfway = (strlength - 1)/2;
}
var match = 0;
for( var i = 0; i < halfway; i++)
    {
      if(str.charAt(i) == str.charAt(strlength - i-1))
        match++;
    }
 if (match == halfway)
   return true;
else
  return false;
}
