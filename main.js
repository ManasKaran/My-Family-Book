var images_of_family_member = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names_of_family_member = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    
    var Total = 5
    if(i > Total)
      {
          i = 0;
      }
    
    document.getElementById("family_member_image").src = images_of_family_member[i];
    document.getElementById("family_member_name").innerHTML = names_of_family_member[i];
i=i+1;
   // i++; is anoyher way writting i=i+1
}
