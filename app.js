let num1='';
let num2='';
let operator='';
let total='';

$(document).ready(function(){
    $('button').on('click',function(e){
        let btn = e.target.innerHTML;
        if(btn>='0' && btn<="9" || btn=="."){
            handleNumber(btn)
        }
        else{
            handleOperator(btn);
        }
    });

});

function handleNumber(num){
    if(operator==="")
    {
        num1+=num;
        displayButton(num1);
    }
    else{
        num2+=num
        displayButton(num2);
    }
    
}

function handleOperator(oper){
    if(operator===""){
        operator=oper;
    }
    else{
        handleTotal();
        operator=oper;
    }
}

function handleTotal(){
    switch(operator){
        case '+': 
            total+= +num1 + +num2;
            displayButton(total);
            break;
        case '-': 
            total+= +num1 - +num2;
            displayButton(total);
            break;
        case '/': 
            total+= +num1 / +num2;
            displayButton(total);
            break;
        case 'X': 
            total+= +num1 * +num2;
            displayButton(total);
            break;
    }

    updateVariables();
}

function displayButton(btn){
    $('.input').text(btn);
}

function updateVariables(){
    num1=total;
    num2="";
}