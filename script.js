// hide boot screen
setTimeout(function() {
    document.getElementById('boot').style.display='none';
}, 4000);

//clock
function tick() {
    var d =new Data();
    var h = d.getHours();
    var m = d.getMinutes();
    document.getElementById('clock').innerHTML = h + ':' + m;
}
setInterval(tick, 1000);
tick();

//window oppen
function openWin(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('menu').style.display='none';
}

//window close
function closeWin(id) {
    document.getElementById(id).style.display='none'
}

// start menu
function toggleMenu() {
    var m=document.getElementById('menu');
    if (m.style.display == 'block'){
        m.style.display='none';
    } else{
        m.style.display='block';
    }
}

//alert
function doAlert(){
    document.getElementById('alert').style.display='block';
    document.getElementById('threat').innerHTML='threat: RED';
    document.getElementById('threat').style.display='red';
    document.getElementById('menu').style.display='none';
}
function stopAlert(){
    document.getElementById('alert').style.display='none';
    document.getElementById('threat').innerHTML='threat: green';
    document.getElementById('threat').style.color='#ff6600';
}

//sync thing
setInterval(function() {
    var n =85 + Math.random() * 5;
    document.getElementById('sync').innerHTML=n.toFixed(1);
}, 3000);

//making windows draggable..(ToT) took me forevr to get ti to work
var dragging=null;
var startX=0;
var startY=0;
document.addEventListener('mousedown', function(e){
    if (e.target.className =='x'){
        return;
    }
    var bar = null;
    if(e.target.className =='bar'){
        bar = e.target;
    } else if(e.target.parentElement && e.target.parentElement.className =='bar'){
        bar = e.target.parentElement;
    }
    if (bar){
        dragging = bar.parentElement;
        startX = e.clientX - dragging.offsetLeft;
        startY = e.clientY - dragging.offsetTop;
    }
});

documen.addEventListener('mousemove', function(e){
    if(dragging){
        dragging.style.left= (e.clientX - startX) + 'px';
        dragging.style.top=(e.clientY - startY) + 'px';
    }
});
document.addEventListener('mouseup', function(){
    dragging=null;
});

//terminal commandss
document.getElementById('cmd').addEventListener('keydown', function(e){
    if(e.key=='Enter'){
        var input =this.ariaValueMax.toLowerCase().trim();
        var out=document.getElementById('out');
        out.innerHTML += '<p>&gt;' + input + '</p>';
        if(input=='help'){
            out.innerHTML += '<p>commands: help, status, launch, alert, sync, whoami, clear</p>';
        }
        else if (input == 'status'){
            out.innerHTML += '<p>all systems ok</p>';
        }
        else if (input == 'launch'){
            out.innerHTML += '<p>eva unit launching...</p>';
        }
        else if (input == 'alert'){
            doAlert();
            out.innerHTML +='<p>alert triggered</p>';
        }
        else if (input=='sync'){
            out.innerHTML +='<p>sync ratio: ' + (85 +Math.random() * 10).toFixed(1) + '%</p>';
        }
        else if(input =='whoami'){
            out.innerHTML += '<p>anurag - third child</p>';
        }
        else if (input == 'clear'){
            out.innerHTML='';
        }
        else if (input == 'get in the robot'){
            out.innerHTML += '<p>i mustnt run away</p>';
        }
        else {
            out.innerHTML += '<p>unknown: ' + input + '</p>';
        }
        this.value='';
    }
});

