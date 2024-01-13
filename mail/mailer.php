<?php

$name = "";
$email = "";
$message = "";
$section = "///////////////////////\n";

$name = ($_POST["Name"]);
$email = ($_POST["Email"]);
$message = ($_POST["Message"]);

$myfile = fopen("mail.txt", "a") or die("Unable to open file!");
$txt = "$name\t\t $email\t\t $message\n";
fwrite($myfile, $txt);
fwrite($myfile, $section);
fclose($myfile);

?>