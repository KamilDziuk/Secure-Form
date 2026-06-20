<?php

header('Content-Type: application/json; charset=UTF-8');

$allowedOrigin = 'https://exmaple.com';

if (isset($_SERVER['HTTP_ORIGIN'])) {
    if ($_SERVER['HTTP_ORIGIN'] === $allowedOrigin) {
        header("Access-Control-Allow-Origin: $allowedOrigin");
    } else {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Forbidden origin']);
        exit;
    }
}

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}


function logSecurity($reason, $email = null) {
    $log = [
        'time' => date('c'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'email' => $email,
        'reason' => $reason
    ];

  
    file_put_contents(
        __DIR__ . '/logs/security.json',
        json_encode($log) . "\n",
        FILE_APPEND
    );
}



$data = json_decode(file_get_contents('php://input'), true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Brak danych']);
    exit;
}


$firstName = trim(substr($data['firstName'] ?? '', 1, 20));
$lastName  = trim(substr($data['lastName'] ?? '', 1, 20));
$phone     = trim(substr($data['phone'] ?? '', 6, 20));
$email     = trim(substr($data['email'] ?? '', 1, 30));
$message   = trim(substr($data['message'] ?? '', 1, 2000));
$consent   = $data['consent'] ?? false;


if (!$consent) {
    logSecurity('missing_consent', $email);
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Proszę zaakceptować regulamin']);
    exit;
}


if (!$firstName || !$lastName || !$phone || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Wypełnij wszystkie pola']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Niepoprawny email']);
    exit;
}


if (preg_match("/[\r\n]/", $email)) {
    http_response_code(400);
    exit;
}


$to = 'contact@exmaple.com';
$subject = 'Nowa wiadomość z formularza exmaple.com';

$body = "Imię: $firstName $lastName\n";
$body .= "Telefon: $phone\n";
$body .= "Email: $email\n\n";
$body .= "Wiadomość:\n$message\n";

$headers = [
    'From: no-reply@exmaple.com',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];


$sent = mail($to, $subject, $body, implode("\r\n", $headers));


// echo json_encode([
//     'success' => $sent
// ]);


?>