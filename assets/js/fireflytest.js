var size = "big";
var num = 55;
var color = "#003399";

function sz(y) {
  size = y.id;
  firefly("test", num, size, color); 
};

function clr(y) {
  if (y.id == "green") { color = "#009900"; }
    else if (y.id == "yellow") { color = "#eaea17"; }
    else if (y.id == "red") { color = "#ea1717"; }

  firefly("test", num, size, color); 
};

function number(y) {
  if (y.id == "more") { num+=20; }
    else if (y.id == "less") { num-=20; }
    
  firefly("test", num, size, color); 
}