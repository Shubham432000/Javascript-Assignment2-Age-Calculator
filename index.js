function show() {
  let dob = document.getElementById("date1").value;
  console.log(dob);

  (day = new Date(dob)), console.log(day);
  time = day.getTime();
  console.log(time);
  (today = new Date()), (timenow = today.getTime()), (value = timenow - time);
  console.log(value);

  year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));
  console.log(year + "year");
  month = Math.floor(
    (value % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24)
  );
  console.log(month + "month");
  days = Math.floor((value % (1000 * 60 * 60 * 24))/(1000*60*60)) ;
  console.log(days + "day");

  document.getElementById("year").innerHTML = year + "year";
  document.getElementById("month").innerHTML = month + "month";
  document.getElementById("days").innerHTML = days + "days";
}
