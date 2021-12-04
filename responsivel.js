function add(){
    const val = document.querySelector('#contador').innerHTML;
    document.querySelector('#contador').innerHTML = parseInt(val) + 1;
}

function sub(){
     val = document.querySelector('#contador').innerHTML;
    document.querySelector('#contador').innerHTML = parseInt(val) - 1;
}

function res(){
    val = document.querySelector('#contador').innerHTML;
   document.querySelector('#contador').innerHTML = 0;
}