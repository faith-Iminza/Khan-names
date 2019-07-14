var cen, year, month, date;

function input(){
  cen = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  date = parseInt(document.getElementById("date").value);
}

function calculate(){
    input();

    dayOfWeek = (((cen/4) -2*cen-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date) % 7;
    console.log(dayOfWeek);

    return (Math.floor(dayOfWeek));
}

function checkDayOfWeek(){
     dayNum = calculate();
      checkGender();
