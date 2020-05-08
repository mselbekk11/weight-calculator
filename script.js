document.getElementById('lbsInput').addEventListener('input', function(e){
const lbs = e.target.value;
document.getElementById('kgOutput').innerHTML = lbs*2.2046;
document.getElementById('boom').remove();
});