badge = document.getElementById('badge');
scores = document.getElementById('scores')
value = Math.floor(Math.random() * 20);
a = setTimeout(() => {
    badge.innerHTML = value+1;
}, 1000);
scores.innerHTML = ' ' + value*5+'%';
document.getElementById('progress').value = value/10