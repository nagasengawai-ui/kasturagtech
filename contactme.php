<?php
require("./mailing/mailfunction.php");

/* Allow only POST */
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit();
}

/* Get Action */
$action = $_POST['action'] ?? '';

/* Secure Form Data */
$name    = trim($_POST["name"] ?? '');
$phone   = trim($_POST["phone"] ?? '');
$email   = trim($_POST["email"] ?? '');
$message = trim($_POST["message"] ?? '');

/* Validation */
if ($name === '' || $phone === '' || $email === '' || $message === '') {
    die("<center><h2>❌ All fields are required.</h2></center>");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("<center><h2>❌ Invalid email address.</h2></center>");
}

/* ========== EMAIL FLOW ========== */
if ($action === "email") {

    $receiverEmail = "nagasengawai@gmail.com";

    $body = "
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Phone:</strong> {$phone}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Message:</strong><br>{$message}</p>
    ";

    $status = mailfunction(
        $receiverEmail,
        "Gawai IT Services - New Inquiry",
        $body
    );

    if ($status) {
        echo "<center><h2 style='color:green'>✅ Email sent successfully.</h2></center>";
    } else {
        echo "<center><h2>❌ Email sending failed.</h2></center>";
    }

}

/* ========== WHATSAPP FLOW ========== */
elseif ($action === "whatsapp") {

    $whatsappNumber = "9196999214019";

    $whatsappMsg = urlencode(
        "Hello Gawai IT Services 👋\n\n".
        "New Inquiry:\n\n".
        "Name: $name\n".
        "Phone: $phone\n".
        "Email: $email\n".
        "Message: $message"
    );

    header("Location: https://wa.me/$whatsappNumber?text=$whatsappMsg");
    exit();
}

/* Invalid action */
else {
    echo "<center><h2>❌ Invalid request.</h2></center>";
}
?>
