var currentTheme = {}

activeTheme = 0;
fgColors = ["orange", "black"];
acColors = ["darkorange", "darkgreen"];
bdColors = ["orange", "darkgreen"];
bgColors = ["#303030", "white"];
themeName = ["tema claro", "tema escuro"];
profileImg = ["/home/tsrodr/Pictures/my-pictures/IMG_20191222_143039.jpg", "/home/tsrodr/Pictures/my-pictures/IMG_20191214_204651.jpg"];
profileMargin = ["0 0 0 0", "-40% 0 0 0"];
  
function toggle(id)
{
  obj = document.getElementById(id);
  console.log(obj.style.height);
    if(obj.style.display != "none") {
      obj.style.display = "none";
    }
      else {
      obj.style.display = "";
  }

  return true;
}

function loadTheme()
{
  // altera o corpo do documento
  obj = document.getElementsByTagName("body");
  obj[0].style.backgroundColor = currentTheme.bgColor;
  obj[0].style.color = currentTheme.fgColor;
  
  // altera os elementos de cabeçalho
  obj = document.getElementsByClassName("heading");
  for(var i = 0; i < obj.length; i++) 
  {
    obj[i].style.color = currentTheme.acColor;
  }

  //altera a foto de perfil
  obj = document.getElementsByClassName("profileimg");
  obj[0].src = currentTheme.profileImg;
  obj[0].style.margin = currentTheme.profileMargin;

  //altera elementos que possuem borda
  obj = document.getElementsByClassName("hasBorder");
  for(var i = 0; i < obj.length; i++)
  {
    obj[i].style.border = "2px solid " + currentTheme.bdColor;
  }

  // altera a widget de mudança de tema
  obj = document.getElementsByClassName("themeSwitcher");
  obj[0].style.backgroundColor = currentTheme.bgColor;
  obj[0].style.color = currentTheme.fgColor;
  obj[0].style.border = "5px solid " + currentTheme.bdColor;
  obj[0].style.borderRight = "0 solid transparent";
  obj[0].innerHTML = currentTheme.themeName;

  return true;
}

function switchTheme()
{
  if(!activeTheme)
    activeTheme++;
  else
    activeTheme = 0;

  currentTheme.fgColor = fgColors[activeTheme];
  currentTheme.acColor = acColors[activeTheme];
  currentTheme.bdColor = bdColors[activeTheme];
  currentTheme.bgColor = bgColors[activeTheme];
  currentTheme.themeName = themeName[activeTheme];
  currentTheme.profileImg = profileImg[activeTheme];
  currentTheme.profileMargin = profileMargin[activeTheme];

  loadTheme();
  return true;
}

/* funções para fazer o mouse controlar o círculo (e futuramente a outra figura svg)

var mx, my = 0;
document.body.addEventListener('mousemove')

document.getElementById('rightCanvas').addEventListener('click'), () => 
{
  document.getElementById('circ').setAttribute('transform', )

  return true;
}

*/