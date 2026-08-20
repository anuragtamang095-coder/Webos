function playSound(soundId) {
    var s = document.getElementById(soundId);
    if (s) {
        s.currentTime = 0;
        s.play();
    }
}


// hide boot screen
playSound('boot-sound');

setTimeout(function() {
    document.getElementById('boot').style.display='none';
}, 4000);

//clock
function tick() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    document.getElementById('clock').innerHTML = h + ':' + m;
}
setInterval(tick, 1000);
tick();

//window oppen
var winOffset = 0;

function openWin(id) {
    playSound('click-sound');
    var w = document.getElementById(id);
    w.style.display = 'block';
    w.style.left = (200 + winOffset) + 'px';
    w.style.top = (80 + winOffset) + 'px';
    winOffset += 30;
    if (winOffset > 150) winOffset = 0;
    document.getElementById('menu').style.display = 'none';
}

//window close
function closeWin(id) {
    playSound('click-sound');
    document.getElementById(id).style.display='none';

    var index = minimizedWindow.indexOf(id);
    if (index > -1) {
        minimizedWindow.splice(index, 1);
        updateTaskbar();
    }
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
    var alertSound = document.getElementById('alert-sound');
    alertSound.loop = true;
    alertSound.currentTime = 0;
    alertSound.play();

    document.getElementById('alert').style.display='block';
    document.getElementById('threat').innerHTML='threat: RED';
    document.getElementById('threat').style.color='red';
    document.getElementById('menu').style.display='none';
}
function stopAlert(){
    var alertSound = document.getElementById('alert-sound');
    alertSound.pause();
    alertSound.currentTime = 0;
    alertSound.loop = false;

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
    if (e.target.className =='x' || e.target.className =='min' || e.target.className =='max'){
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

document.addEventListener('mousemove', function(e){
    if(dragging){
        var x = (e.clientX - startX);
        var y =(e.clientY - startY);

        if (x < 0) x=0;
        if (y < 40) y=40;
        dragging.style.left = x + 'px';
        dragging.style.top = y + 'px';
    }
});
document.addEventListener('mouseup', function(){
    dragging=null;
});

//terminal commandss
document.getElementById('cmd').addEventListener('keydown', function(e){
    if(e.key=='Enter'){
        var input =this.value.toLowerCase().trim();
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
            startLaunch();
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

function startOS() {
    document.getElementById('start-overlay').style.display = 'none';
    playSound('boot-sound');
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    var menu = document.getElementById('right-menu');
    menu.style.display = 'block';
    menu.style.left = e.clientX + 'px';
    menu.style.top = e.clientY + 'px';
});

document.addEventListener('click', function() {
    document.getElementById('right-menu').style.display = 'none';
});

var notes = [];

function loadNotes() {
    var saved = localStorage.getItem('nervLog');
    if (saved != null) {
        notes = JSON.parse(saved);
    } else {

        notes = [
            { text: "sync ratio is 87.3 today. stable.", time: "09:14" },
            { text: "Went out to eat with Misato-san, had to carry her home(-_-).", time: "12:30" }
        ];
    }
    showNotes();
}

function saveNote() {
    var input = document.getElementById('note-input');
    var text = input.value.trim();

    if (text == '') {
        return;
    }

    var now = new Date();
    var timeStr = now.getHours() + ':' +
                  (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    notes.push({
        text: text,
        time: timeStr
    });

    localStorage.setItem('nervLog', JSON.stringify(notes));

    input.value = '';
    playSound('click-sound');
    showNotes();
}

function showNotes() {
    var list = document.getElementById('notes-list');

    if (notes.length == 0) {
        list.innerHTML = '<p style="color:#666; font-size:11px;">no entries yet</p>';
        return;
    }

    var html = '';
    for (var i = 0; i < notes.length; i++) {
        html += '<div class="note-entry">';
        html += '<span class="note-time">[' + notes[i].time + ']</span>';
        html += notes[i].text;
        html += '<button class="note-delete" onclick="deleteNote(' + i + ')">x</button>';
        html += '</div>';

    }

    list.innerHTML = html;
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem('nervLog', JSON.stringify(notes));
    playSound('click-sound');
    showNotes();
}

loadNotes();

var fileData = {
    file1: {
        name: 'angel_rpt.txt',
        content: 'CLASSIFIED - NERV EYES ONLY\nDATE: 2015-11-24\n\nUnknown pattern detected in Tokyo-3 sector 07.\nBlood type BLUE. Confirmed angel.\nUnit-01 deployed with Third Child pilot.\nTarget neutralized after 12 minutes.\n\nSigned: Katsuragi, M.'

    },
    file2: {
        name: 'diary.txt',
        content: 'personal entry\n\nfather wont talk to me.\nMisato tries but she doesnt get it.\nsometimes in the entry plug i hear her.\nmom.\ni think.\n\n-Shinji'
    },
    file3: {
        name: 'scroll_07.txt',
        content: 'FRAGMENT 07\n\n"...and the seventeenth shall come from the sky\nand unit with lilith, and human instrumentality\nwill complete the great return..."\n\nstatus: unfulfilled'
    },
    file4: {
        name: 'magi.log',
        content: 'MAGI LOG - 03:14\n\nMELCHIOR-1: yes\nBALTHASAR-2: yes\nCASPER-3: no\n\nconsensus: not reached\ncasper is being difficult again'
    }
};

function openFile(fileId) {
    playSound('click-sound');
    var file = fileData[fileId];
    if (!file) return;

    var viewer = document.getElementById('file-viewer');
    document.getElementById('file-name').innerHTML = file.name;
    document.getElementById('file-content').innerHTML = file.content;

    viewer.style.display = 'block';
    viewer.style.left = (250 + winOffset) + 'px';
    viewer.style.top = (100 + winOffset) + 'px';
    winOffset += 30;
    if (winOffset > 150) winOffset = 0;
}

var minimizedWindow = [];
var maximizeState = {};

function minWin(id) {
    playSound('click-sound');
    var w =document.getElementById(id);
    w.style.display = 'none';

    if (minimizedWindow.indexOf(id) == -1) {
        minimizedWindow.push(id);
    }

    updateTaskbar();
}

function maxWin(id) {
    playSound('click-sound');
    var w = document.getElementById(id);

    if (maximizeState[id]) {

        w.style.width = maximizeState[id].width;
        w.style.height = maximizeState[id].height;
        w.style.top = maximizeState[id].top;
        w.style.left = maximizeState[id].left;
        maximizeState[id] = null;
    } else {

        maximizeState[id] = {
            width: w.style.width,
            height: w.style.height,
            top: w.style.top,
            left: w.style.left
        };

        w.style.width = '100%';
        w.style.height = 'calc(100vh - 80px)';
        w.style.top = '30px';
        w.style.left = '0';
    }

}

function updateTaskbar() {
    var bar = document.getElementById('taskbar-apps');
    var html = '';
    for (var i = 0; i < minimizedWindow.length; i++) {
        html += '<div class="taskbar-item" onclick="restoreWin(\'' + minimizedWindow[i] + '\')">';
        html += minimizedWindow[i];
        html += '</div>';
    }
    bar.innerHTML = html;
}

function restoreWin(id) {
    playSound('click-sound');
    var w = document.getElementById(id);
    w.style.display = 'block';

    var index = minimizedWindow.indexOf(id);
    if (index > -1) {
        minimizedWindow.splice(index, 1);
    }
    updateTaskbar();
}

function shutdownOS() {
    playSound('click-sound')

    window.close();

    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'black';
    overlay.style.color = '#ff6600'; 
    overlay.style.zIndex = '999999';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.fontFamily = 'monospace';

    overlay.innerHTML = '<h1>SYSTEM SHUTDOWN</h1><p>LCL drained. Synaptic link disconnected.<p/><p style="color:#555; font-size:12px; margin-top:20px;">[Safe to close tab manually]</p>';

    document.body.appendChild(overlay);
}

function startLaunch() {
    playSound('boot-sound');

    var overlay = document.getElementById('launch-overlay');
    var progress = document.getElementById('launch-progress');
    var log = document.getElementById('launch-log');

    overlay.style.display = 'flex';
    log.innerHTML = '';
    progress.innerHTML = '0%';

    var percent = 0;
    var logs = [
        "LCL FLOW CONFIRMED...",
        "NEURAL SYNCING ACTIVE...",
        "SYNC RATE: 87.3% (STABLE)",
        "PRIMARY POWER CORDS SEVERED",
        "INTERNAL BATTERIES: ACTIVE (05:00)",
        "EJECTING IN 3...",
        "EJECTING IN 2...",
        "EJECTING IN 1...",
        "UNIT-01 LAUNCHED!"
    ];

    var logIndex = 0;

    var interval = setInterval(function() {
        percent += 4;
        if (percent > 100) percent = 100;
        progress.innerHTML = percent + '%';

        if (percent >= 10 && logIndex == 0) addLog(logs[0]);
        if (percent >= 25 && logIndex == 1) addLog(logs[1]);
        if (percent >= 40 && logIndex == 2) addLog(logs[2]);
        if (percent >= 55 && logIndex == 3) addLog(logs[3]);
        if (percent >= 70 && logIndex == 4) addLog(logs[4]);
        if (percent >= 80 && logIndex == 5) addLog(logs[5]);
        if (percent >= 85 && logIndex == 6) addLog(logs[6]);
        if (percent >= 90 && logIndex == 7) addLog(logs[7]);
        if (percent >= 100 && logIndex == 8) addLog(logs[8]);

        if (percent >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                overlay.style.display = 'none';
            }, 1500);
        }
    }, 150);
    function addLog(text) {
        log.innerHTML += '<p>&gt; ' + text + '</p>';
        logIndex++;
        playSound('click-sound');
    }
}

function magiOverride() {
    playSound('click-sound');

    var alertbox = document.getElementById('alertbox');

    var originalHTML = alertbox.innerHTML;

    alertbox.innerHTML = '<h3 style="color:#ffcc00;font-size:14px;letter-spacing:2px;">MAGI OVERRIDE VOTE</h3><div id="magi-votes" style="margin-top:20px;text-align:left;font-size:12px;"></div>';

    var votes = document.getElementById('magi-votes');

    setTimeout(function() {
        votes.innerHTML += '<p>MELCHIOR-1: <span style="color:#00ff00">OVERRIDE APPROVED</span></p>';
        playSound('click-sound');
    }, 500);

    setTimeout(function() {
        votes.innerHTML += '<p>BALTHASAR-2: <span style="color:#00ff00">OVERRIDE APPROVED</span></p>';
    }, 1000);

    setTimeout(function() {
        votes.innerHTML += '<p>CASPER-3: <span style="color:#00ff00">OVERRISD APPROVED</span></p>';
        playSound('click-sound');
    }, 2000);

    setTimeout(function() {
        stopAlert();

        alertbox.innerHTML = originalHTML;
    }, 2800);
}
