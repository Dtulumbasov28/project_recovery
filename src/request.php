<?php
$name = $_POST['name'];
$tel = $_POST['tel'];


$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);



$name = urldecode($name);
$tel = urldecode($tel);



$name = trim($name);
$tel = trim($tel);


$message = '';
$message .= 'Имя: ' . $name . PHP_EOL;
$message .= 'Телефон: ' . $tel . PHP_EOL;



$sended = mail(
    "info@malibu.ru",
    "Заявка на звонок",
    $message,
    "From: admin@malibu.ru"
);

if ($sended) {
    echo json_encode("Ваша заявка принята, ожидайте звонка");
} else {
    echo json_encode("Извините, при отправке заявки возникла ошибка :(");
}
