/**
LEVEL 7 KYU
Source: https://www.codewars.com/kata/mega-man-boss-order/train/javascript
Date: 01.28.2018
**/

function getBossOrder(bosses) {
  let bossList= bosses;
  let buster= [];
  let bossOrder= [];

  bosses.map((boss, i)=> {
   if(boss.difficulty === 1){
      bossOrder.push(boss.name);
      buster.push(boss.weapon);
      bosses.splice(bosses.indexOf(boss), 1);
    }
  });

  while(bosses.length > 0){
    for(let i=0; i<bosses.length; i++){
      if((buster.indexOf(bosses[i].weakness) !== -1)){
        bossOrder.push(bosses[i].name);
        buster.push(bosses[i].weapon);
        bosses.splice(bosses.indexOf(bosses[i]), 1);
      }
    }
  }
  return bossOrder;
}



let bosses = [
  new Boss("Wood Man", "Leaf Shield", "Atomic Fire", 7),
  new Boss("Air Man", "Air Shooter", "Leaf Shield", 4),
  new Boss("Metal Man", "Metal Blade", "Quick Boomerang", 1),
  new Boss("Crash Man", "Crash Bomber", "Air Shooter", 3),
  new Boss("Quick Man", "Quick Boomerang", "Time Stopper", 8),
  new Boss("Flash Man", "Time Stopper", "Crash Bomber", 6),
  new Boss("Heat Man", "Atomic Fire", "Bubble Lead", 5),
  new Boss("Bubble Man", "Bubble Lead", "Metal Blade", 2)
];
