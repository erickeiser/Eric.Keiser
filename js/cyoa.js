

var response = prompt('you wake up late for work and now have to decide whether or not you go in late or just take the day to yourself. To go to work type "Rush" and to take the day for yourself type "Bueller"');

if(response === 'Rush' || response === 'rush') {
  response = alert('Well I am glad that you are responsible. Congrats to you! Your adventure is has come to end. GAME OVER');
} else if (response === 'Bueller' || response === 'bueller') {
  response = prompt('You are such a rebel. Who\'s the first person that your going to call? to call your best friend and drinking buddy type "Best" or to call your significant other and let them know that you aren\'t going to work today type "Whipped"');
} else {
  response = alert("pleaes enter a valid response. Refresh and try again.");
} if (response === 'whipped' || response === "Whipped") {
  response = alert('DOH!!! not only is your day of fun over. You now have a laundry list of honey does to get after... GAME OVER!!!');
} else if (response === "best" || response === "Best") {
  response = prompt('That\'s what I thought you would go with. So now where do we get started? To go to the Mexican restauraunt down the street and get some margaritas type "Drink" or to go to thew new Sushi place around the corner type "Sushi"')
} else {
  response = alert('type in a valid response. Refresh and start over!!!');
}



  
  








  
  
  


 
