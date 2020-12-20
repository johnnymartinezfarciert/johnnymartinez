<?php

// getState.php
// Gets the form value from STATE CODE, looks uP the state name, capital, and population
//   for that state code,
// and prints it for the form


$State = array("AL" => "Alabama, Montgomery, 4369862",
               "AK" => "Alaska, Juneau, 619500",
               "AZ" => "Arizona, Phoenix, 4778332",
               "AR" => "Arkansas, Little Rock, 2551373",
               "CA" => "California, Sacramento, 3145121",
               "CO" => "Colorado, Denver, 4056133",
                    );

// set MIMe type to text/plain
// so that the returned value is assigned to responseText in the Ajax script

header("Content-Type: text/plain");

$stcode = $_GET["stcode"];
$stcode = strtoupper($stcode);
if (array_key_exists($stcode, $State))
   print $State[$stcode];
else
   print "state code error, state code error, state code error";

?>
