let calculation=JSON.parse(localStorage.getItem('val'))||
'0';
dis();
function calculate(value){
    if(calculation==='0')
    calculation=value;
    else
    calculation+=value;
    localStorage.setItem('val',JSON.stringify(calculation));
    dis();
}function dis(){
    document.querySelector('.result').innerHTML=calculation;
}function result(){
        calculation=eval(calculation);
        localStorage.setItem('val',JSON.stringify(calculation));
        dis();
    }