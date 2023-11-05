function myfunc()
{
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    var b1tf, b2tf, b3tf, b4tf, b5tf, b6tf, b7tf, b8tf, b9tf;
    b1tf = document.getElementById("b1");
    b2tf = document.getElementById("b2");
    b3tf = document.getElementById("b3");
    b4tf = document.getElementById("b4");
    b5tf = document.getElementById("b5");
    b6tf = document.getElementById("b6");
    b7tf = document.getElementById("b7");
    b8tf = document.getElementById("b8");
    b9tf = document.getElementById("b9");

    if((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X'))
    {
        document.getElementById("print").innerHTML = "Player X won";
        b4tf.disabled = true;
        b5tf.disabled = true;
        b6tf.disabled = true;
        b7tf.disabled = true;
        b8tf.disabled = true;
        b9tf.disabled = true;

        b1tf.style.color = "red";
        b2tf.style.color = "red";
        b3tf.style.color = "red";
    }
    else if((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X'))
    {
        document.getElementById("print").innerHTML = "Player X won";
        b7tf.disabled = true;
        b8tf.disabled = true;
        b9tf.disabled = true;
        b1tf.disabled = true;
        b2tf.disabled = true;
        b3tf.disabled = true;

        b4tf.style.color = "red";
        b5tf.style.color = "red";
        b6tf.style.color = "red";
    }
    else if((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X'))
    {
        document.getElementById("print").innerHTML = "Player X won";
        b4tf.disabled = true;
        b5tf.disabled = true;
        b6tf.disabled = true;
        b1tf.disabled = true;
        b2tf.disabled = true;
        b3tf.disabled = true;

        b7tf.style.color = "red";
        b8tf.style.color = "red";
        b9tf.style.color = "red";
    }
    else if((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X'))
    {
        document.getElementById("print").innerHTML = "Player X won";
        b8tf.disabled = true;
        b5tf.disabled = true;
        b6tf.disabled = true;
        b9tf.disabled = true;
        b2tf.disabled = true;
        b3tf.disabled = true;

        b1tf.style.color = "red";
        b4tf.style.color = "red";
        b7tf.style.color = "red";
    }
    else if((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X'))
    {
        document.getElementById("print").innerHTML = "Player X won";
        b1tf.disabled = true;
        b4tf.disabled = true;
        b6tf.disabled = true;
        b9tf.disabled = true;
        b7tf.disabled = true;
        b3tf.disabled = true;

        b2tf.style.color = "red";
        b5tf.style.color = "red";
        b8tf.style.color = "red";
    }
    else if((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X'))
    {
        document.getElementById("print").innerHTML = "Player X won";
        b1tf.disabled = true;
        b4tf.disabled = true;
        b2tf.disabled = true;
        b5tf.disabled = true;
        b7tf.disabled = true;
        b8tf.disabled = true;

        b3tf.style.color = "red";
        b6tf.style.color = "red";
        b9tf.style.color = "red";
    }
    else if((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X'))
    {
        document.getElementById("print").innerHTML = "Player X won";
        b1tf.disabled = true;
        b4tf.disabled = true;
        b2tf.disabled = true;
        b9tf.disabled = true;
        b6tf.disabled = true;
        b8tf.disabled = true;

        b3tf.style.color = "red";
        b5tf.style.color = "red";
        b7tf.style.color = "red";
    }
    else if((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X'))
    {
        document.getElementById("print").innerHTML = "Player X won";
        b3tf.disabled = true;
        b4tf.disabled = true;
        b2tf.disabled = true;
        b7tf.disabled = true;
        b6tf.disabled = true;
        b8tf.disabled = true;

        b1tf.style.color = "red";
        b5tf.style.color = "red";
        b9tf.style.color = "red";
    }
    else if((b1 == '0' || b1 == '0') && (b2 == '0' || b2 == '0') && (b3 == '0' || b3 == '0'))
    {
        document.getElementById("print").innerHTML = "Player 0 won";
        b4tf.disabled = true;
        b5tf.disabled = true;
        b6tf.disabled = true;
        b7tf.disabled = true;
        b8tf.disabled = true;
        b9tf.disabled = true;

        b1tf.style.color = "red";
        b2tf.style.color = "red";
        b3tf.style.color = "red";
    }
    else if((b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0'))
    {
        document.getElementById("print").innerHTML = "Player 0 won";
        b7tf.disabled = true;
        b8tf.disabled = true;
        b9tf.disabled = true;
        b1tf.disabled = true;
        b2tf.disabled = true;
        b3tf.disabled = true;

        b4tf.style.color = "red";
        b5tf.style.color = "red";
        b6tf.style.color = "red";
    }
    else if((b7 == '0' || b7 == '0') && (b8 == '0' || b8 == 'X') && (b9 == '0' || b9 == '0'))
    {
        document.getElementById("print").innerHTML = "Player 0 won";
        b4tf.disabled = true;
        b5tf.disabled = true;
        b6tf.disabled = true;
        b1tf.disabled = true;
        b2tf.disabled = true;
        b3tf.disabled = true;

        b7tf.style.color = "red";
        b8tf.style.color = "red";
        b9tf.style.color = "red";
    }
    else if((b1 == '0' || b1 == '0') && (b4 == '0' || b4 == '0') && (b7 == '0' || b7 == '0'))
    {
        document.getElementById("print").innerHTML = "Player 0 won";
        b8tf.disabled = true;
        b5tf.disabled = true;
        b6tf.disabled = true;
        b9tf.disabled = true;
        b2tf.disabled = true;
        b3tf.disabled = true;

        b1tf.style.color = "red";
        b4tf.style.color = "red";
        b7tf.style.color = "red";
    }
    else if((b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0'))
    {
        document.getElementById("print").innerHTML = "Player 0 won";
        b1tf.disabled = true;
        b4tf.disabled = true;
        b6tf.disabled = true;
        b9tf.disabled = true;
        b7tf.disabled = true;
        b3tf.disabled = true;

        b2tf.style.color = "red";
        b5tf.style.color = "red";
        b8tf.style.color = "red";
    }
    else if((b3 == '0' || b3 == '0') && (b6 == '0' || b6 == '0') && (b9 == '0' || b9 == '0'))
    {
        document.getElementById("print").innerHTML = "Player 0 won";
        b1tf.disabled = true;
        b4tf.disabled = true;
        b2tf.disabled = true;
        b5tf.disabled = true;
        b7tf.disabled = true;
        b8tf.disabled = true;

        b3tf.style.color = "red";
        b6tf.style.color = "red";
        b9tf.style.color = "red";
    }
    else if((b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0'))
    {
        document.getElementById("print").innerHTML = "Player 0 won";
        b1tf.disabled = true;
        b4tf.disabled = true;
        b2tf.disabled = true;
        b9tf.disabled = true;
        b6tf.disabled = true;
        b8tf.disabled = true;

        b3tf.style.color = "red";
        b5tf.style.color = "red";
        b7tf.style.color = "red";
    }
    else if((b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0'))
    {
        document.getElementById("print").innerHTML = "Player 0 won";
        b3tf.disabled = true;
        b4tf.disabled = true;
        b2tf.disabled = true;
        b7tf.disabled = true;
        b6tf.disabled = true;
        b8tf.disabled = true;

        b1tf.style.color = "red";
        b5tf.style.color = "red";
        b9tf.style.color = "red";
    }
    else if((b1 == "x" || b1 == '0') && (b2 == "x" || b2 == '0') && (b3 == "x" || b3 == '0') && 
    (b4 == "x" || b4 == '0') && (b5 == "x" || b5 == '0') && (b6 == "x" || b6 == '0')
    && (b7 == "x" || b7 == '0') && (b8 == "x" || b8 == '0') && (b9 == "x" || b9 == '0'))
    {
        document.getElementById("print").innerHTML = "Match Tie";

    }else
    {
        if(flag == 1)
        {
            document.getElementById("print").innerHTML = "Player x Turn";
        }else{
            document.getElementById("print").innerHTML = "Player 0 Turn";
        }
    }
}

function myfunc_2()
{
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

flag = 1;
function myfunc_3()
{
    if(flag == 1){
        document.getElementById('b1').value = "x";
        document.getElementById('b1').disabled = true;
        flag = 0;
    }else{
        document.getElementById('b1').value = "0";
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}

function myfunc_4()
{
    if(flag == 1){
        document.getElementById('b2').value = "x";
        document.getElementById('b2').disabled = true;
        flag = 0;
    }else{
        document.getElementById('b2').value = "0";
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}

function myfunc_5()
{
    if(flag == 1){
        document.getElementById('b3').value = "x";
        document.getElementById('b3').disabled = true;
        flag = 0;
    }else{
        document.getElementById('b3').value = "0";
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}

function myfunc_6()
{
    if(flag == 1){
        document.getElementById('b4').value = "x";
        document.getElementById('b4').disabled = true;
        flag = 0;
    }else{
        document.getElementById('b4').value = "0";
        document.getElementById('b4').disabled = true;
        flag = 1;
    }
}

function myfunc_7()
{
    if(flag == 1){
        document.getElementById('b5').value = "x";
        document.getElementById('b5').disabled = true;
        flag = 0;
    }else{
        document.getElementById('b5').value = "0";
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}

function myfunc_8()
{
    if(flag == 1){
        document.getElementById('b6').value = "x";
        document.getElementById('b6').disabled = true;
        flag = 0;
    }else{
        document.getElementById('b6').value = "0";
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}

function myfunc_9()
{
    if(flag == 1){
        document.getElementById('b7').value = "x";
        document.getElementById('b7').disabled = true;
        flag = 0;
    }else{
        document.getElementById('b7').value = "0";
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}

function myfunc_10()
{
    if(flag == 1){
        document.getElementById('b8').value = "x";
        document.getElementById('b8').disabled = true;
        flag = 0;
    }else{
        document.getElementById('b8').value = "0";
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}

function myfunc_11()
{
    if(flag == 1){
        document.getElementById('b9').value = "x";
        document.getElementById('b9').disabled = true;
        flag = 0;
    }else{
        document.getElementById('b9').value = "0";
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
}