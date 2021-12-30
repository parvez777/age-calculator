function ageCal(){
  var birthYears = document.getElementById('input').value;
  var age = 2021 - birthYears;
  if(age < 0 || age > 100){
    document.getElementById('wrong').style.display = 'block';
    document.getElementById('days').style.display = 'none';
    document.getElementById('months').style.display = 'none';
    document.getElementById('years').style.display = 'none';
    document.getElementById('label-1').style.display = 'none';
    document.getElementById('label-2').style.display = 'none';
    document.getElementById('label-3').style.display = 'none';
  }
  else{
    document.getElementById('wrong').style.display = 'none';
    document.getElementById('days').style.display = 'block';
    document.getElementById('months').style.display = 'block';
    document.getElementById('years').style.display = 'block';
    document.getElementById('label-1').style.display = 'block';
    document.getElementById('label-2').style.display = 'block';
    document.getElementById('label-3').style.display = 'block';
    var days = 365 * age;
  var months = age * 12;
document.getElementById('years').value = age;
document.getElementById('days').value = days;
document.getElementById('months').value = months;

}
  }

document.getElementById('reset').addEventListener("click", function(){
  document.getElementById('input').value = '';
  document.getElementById('days').value = '';
  document.getElementById('months').value = '';
  document.getElementById('years').value = '';

    document.getElementById('wrong').style.display = "none";
    document.getElementById('days').style.display = 'block';
    document.getElementById('months').style.display = 'block';
    document.getElementById('years').style.display = 'block';
    document.getElementById('label-1').style.display = 'block';
    document.getElementById('label-2').style.display = 'block';
    document.getElementById('label-3').style.display = 'block';
})