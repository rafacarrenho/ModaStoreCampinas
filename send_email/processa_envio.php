<?php

    require './lib/PHPMailer/Exception.php';
    require './lib/PHPMailer/OAuth.php';
    require './lib/PHPMailer/PHPMailer.php';
    require './lib/PHPMailer/POP3.php';
    require './lib/PHPMailer/SMTP.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;


    class Mensagem {
        private $formName = null;
        private $formSName = null;
        private $formEmail = null;
        private $formTel = null;
        private $formMessage = null;

        public function __get($atributo){
            return $this->$atributo;
        }

        public function __set($atributo, $valor){
            $this->$atributo = $valor;
        }

        public function mensagemValida(){
            if(empty($this->formName) || empty($this->formTel) || empty($this->formEmail)){
                return false;
            }
            return true;
        }
    }

    $mensagem = new Mensagem();
    $mensagem->__set('formName', $_POST['formName']);
    $mensagem->__set('formSName', $_POST['formSName']);
    $mensagem->__set('formEmail', $_POST['formEmail']);
    $mensagem->__set('formTel', $_POST['formTel']);
    $mensagem->__set('formMessage', $_POST['formMessage']);

    if(!$mensagem->mensagemValida()){
        header('location: index.html');
        die();
    }

    $mail = new PHPMailer(true);

    try {
    $body = '';
    $body .= "<h2>Contato recebido via Site</h2>";
    $body .= "Nome: " . $mensagem->__get('formName') . " " . $mensagem->__get('formSName') . "<br>";
    $body .= "E-mail: " . $mensagem->__get('formEmail') . "<br>";
    $body .= "Telefone: " . $mensagem->__get('formTel') . "<br>";
    $body .= "Mensagem:<br>";
    $body .= $mensagem->__get('formMessage');
    $body .= "<br>";
    $body .= "----------------------------";
    $body .= "<br>";
    $body .= "Enviado em <strong>".date("h:m:i d/m/Y") . "</strong>"; //mostra a data e horario
    $body .= "<br>";
    $body .= "----------------------------";

    //Server settings
    $mail->SMTPDebug = false;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'mailrcwebsites@gmail.com';                 // SMTP username
    $mail->Password = 'Carrenho@!123';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('mailrcwebsites@gmail.com', 'RC WebSites');
    $mail->addAddress('mailrcwebsites@gmail.com', 'RC WebSites');    // Add a recipient
    /*
    $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');
    */

    //Attachments
    /*
    $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    */

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contato via Site';
    $mail->Body    = $body;
    $mail->AltBody = 'Provedor de email não aceita mensagem de HTML, favor entrar em contato com o suporte';

    $mail->send();
        echo 'Success';
    
    } catch (Exception $e) {
        echo "Erro $e";
}//
?>