var quotes=["“Be yourself; everyone else is already taken.”","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","“So many books, so little time.”","“A room without books is like a body without a soul.”","“You know, Hobbes, some days even my lucky rocketship underpants don't help.”","\"Even if we don't have the power to choose where we come from, we can still choose where we go from there.\"","“Life is never fair, and perhaps it is a good thing for most of us that it is not.”"]
var authors=["Oscar Wilde","Marilyn Monroe"," Albert Einstein","Frank Zappa","Marcus Tullius Cicero","unknown",'unknown','unknown']

var q=document.querySelector('.quote')
var a= document.querySelector('.author')

var btn=document.querySelector('button')

btn.addEventListener('click',ev)
var n=quotes.length
var i=-1;
function ev(){
  i=(i+1)%n
  q.innerHTML='<h2>'+quotes[i]+'</h2>'
  a.innerHTML='<h3>-'+authors[i]+'</h3>'
}