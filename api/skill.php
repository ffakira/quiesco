<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$data = array(
  "attack" => 1,
  "strength" => 1,
  "defence" => 1,
  "ranged" => 1,
  "prayer" => 1,
  "magic" => 1,
  "runecraft" => 1,
  "construction" => 1,
  "hitpoints" => 10,
  "agility" => 1,
  "herblore" => 1,
  "thieving" => 1,
  "crafting" => 1,
  "fletching" => 1,
  "slayer" => 1,
  "hunter" => 1,
  "mining" => 1,
  "smithing" => 1,
  "fishing" => 1,
  "cooking" => 1,
  "firemaking" => 1,
  "woodcutting" => 1,
  "farming" => 1,
  "total_level" => 32
);

echo json_encode($data);
?>
