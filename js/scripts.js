// $(document).ready(function(){
//   $("button").click(function(){
//     alert("has been succesfully added to our email list");
//   });

function showMyModal()
{

  document.getElementById('modal').innerHTML='modall';
  $('#myModal').modal('show');
}

function toggle_text_color_mouse_over()
{
var all = document.getElementsByClassName('menuOptions');
for(var i=0;i<all.length;i++)
{
  all[i].style.color='black';
}
}

function toggle_text_color_mouse_out()
{
var all = document.getElementsByClassName('menuOptions');
for(var i=0;i<all.length;i++)
{
  all[i].style.color='black';
}
}
