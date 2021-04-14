<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail-> CharSet = 'UTF-8';
$mail-> setLanguage('ru', 'phpmaler/language/');
$mail-> isHTML(true);


$mail-> setFrom('artem.bakum@meta.ua');
$mail-> addAddress('bakum.artem@mail.ru');

$body = '<h1>Встречайте письмо</h1>';

if(trim(!empty($_POST['name']))){
	$body.= '<p><strong/>Имя:<strong/> '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['phone']))){
	$body.= '<p><strong/>Телефон:<strong/> '.$_POST['phone'].'</p>';
}

if(trim(!empty($_POST['email']))){
	$body.= '<p><strong/>Email:<strong/> '.$_POST['phone'].'</p>';
}

if(trim(!empty($_POST['message']))){
	$body.= '<p><strong/>Message:<strong/> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

if(!$mail->send()){
	$message = 'Ошибка';
}else{
	$message = 'Данные отправлены!';
}
$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>