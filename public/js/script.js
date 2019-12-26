const navStyle = document.getElementsByTagName("nav");

let c = document.getElementById("skillCanvas");
let ctx = c.getContext("2d");

let skill = Promise.resolve(fetchSkillApi()).then(val => skill = val);

async function fetchSkillApi() {
  let res = await fetch('http://localhost/quiesco/api/skill.php');
  let data = await res.json();
  return data;
}

function createImage(ctx, src, x, y) {
  img = new Image();
  img.src=`./public/img/${src}`;
  ctx.drawImage(img, x, y);
}

function createText(ctx, text, x, y) {
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(text, x, y);
}

function createBase(ctx, x, y) {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.rect(x, y, 60, 30);
  ctx.stroke();
}

ctx.fillStyle="rgba(255, 255, 255, 1)";
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

Promise.resolve(fetchSkillApi()).then(skill => {
  //First column
  createText(ctx, skill.attack, 34, 25);
  createText(ctx, skill.strength, 34, 58);
  createText(ctx, skill.defence, 34, 91);
  createText(ctx, skill.ranged, 34, 123);
  createText(ctx, skill.prayer, 34, 157);
  createText(ctx, skill.magic, 34, 191);
  createText(ctx, skill.runecraft, 34, 224);
  createText(ctx, skill.construction, 34, 256);

  //Second column,
  createText(ctx, skill.hitpoints, 95, 25);
  createText(ctx, skill.agility, 95, 58);
  createText(ctx, skill.herblore, 95, 91);
  createText(ctx, skill.thieving, 95, 123);
  createText(ctx, skill.crafting, 95, 157);
  createText(ctx, skill.fletching, 95, 191);
  createText(ctx, skill.slayer, 95, 224);
  createText(ctx, skill.hunter, 95, 256);

  //Third column,
  createText(ctx, skill.mining, 156, 25);
  createText(ctx, skill.smithing, 156, 58);
  createText(ctx, skill.fishing, 156, 91);
  createText(ctx, skill.cooking, 156, 123);
  createText(ctx, skill.firemaking, 156, 157);
  createText(ctx, skill.woodcutting, 156, 191);
  createText(ctx, skill.farming, 156, 224);
  createText(ctx, skill.total_level, 156, 256);
});

//First Column
createImage(ctx, 'Attack_icon.png', 5, 5);
createImage(ctx, 'Strength_icon.png', 5, 42);
createImage(ctx, 'Defence_icon.png', 5, 75);
createImage(ctx, 'Ranged_icon.png', 5, 107);
createImage(ctx, 'Prayer_icon.png', 5, 138);
createImage(ctx, 'Magic_icon.png', 5, 172);
createImage(ctx, 'Runecraft_icon.png', 5, 204);
createImage(ctx, 'Construction_icon.png', 5, 236);

//Second Column
createImage(ctx, 'Hitpoints_icon.png', 69, 8);
createImage(ctx, 'Agility_icon.png', 69, 40);
createImage(ctx, 'Herblore_icon.png', 69, 75);
createImage(ctx, 'Thieving_icon.png', 69, 112);
createImage(ctx, 'Crafting_icon.png', 69, 140);
createImage(ctx, 'Fletching_icon.png', 69, 170);
createImage(ctx, 'Slayer_icon.png', 69, 204);
createImage(ctx, 'Hunter_icon.png', 69, 238);

//Third column
createImage(ctx, 'Mining_icon.png', 132, 6);
createImage(ctx, 'Smithing_icon.png', 132, 42);
createImage(ctx, 'Fishing_icon.png', 132, 73);
createImage(ctx, 'Cooking_icon.png', 132, 106);
createImage(ctx, 'Firemaking_icon.png', 132, 138);
createImage(ctx, 'Woodcutting_icon.png', 132, 173);
createImage(ctx, 'Farming_icon.png', 132, 204);
createImage(ctx, 'Stats_icon.png', 132, 238);


let posColumn = 3;
for (let i = 0; i < 8; i++) {
  createBase(ctx, 3, posColumn);
  createBase(ctx, 66, posColumn);
  createBase(ctx, 129, posColumn);
  posColumn += 33;
}

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 60) {
      navStyle[0].style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  }
});
