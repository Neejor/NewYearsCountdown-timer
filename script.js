let d1 = moment();
let d2 = moment().endOf("year");

function zer(n) {
  return (n < 10 ? '0' : '') + n;
}

function d() {console.log("D");}

$(document).ready(writeText);


function writeText() {
  let d1 = moment();
  let days = zer(d2.diff(d1, 'days'));
  // let days = d2.get('date') - d1.get('date');
  // console.log(`Difference in days: ${days}`);

  let hours = zer(Math.floor(d2.diff(d1, 'hours'))%24);
  // console.log(`Difference in hours: ${hours}`);

  let minutes = zer(Math.floor(d2.diff(d1, 'seconds')/60)%60);
  // console.log(`Difference in hours: ${minutes}`);

  let secs = zer(d2.diff(d1, 'seconds')%60);
  // console.log(`Difference in seconds: ${secs}`)
  // console.log(`toString() => ${m.toString()}`);

  $("#days>p").text(days);
  $("#hrs>p").text(hours);
  $("#mins>p").text(minutes);
  $("#secs>p").text(secs);
}

var d = setInterval(writeText,1000);
