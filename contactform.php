<?php
//error_reporting(-1);
//ini_set('display_errors', 'On');
//set_error_handler("var_dump");

	if(isset($_POST['submit'])){
		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];
		$mailFrom = $_POST['email'];
		
		$mailTo = "admin@andreakoellmann.com";
		$headers = "From: ".$mailTo."\r\n";
		$headers  .= "MIME-Version: 1.0\r\n";
		$headers  .= "Content-Type: multipart/mixed; ";
		$headers  .= "boundary=".$num."\r\n";
		$headers  .= "--$num\r\n";
		
		// This two steps to help avoid spam   
		
		$headers .= "Message-ID: <".time()." TheSystem@".$_SERVER['SERVER_NAME'].">\r\n";
		$headers .= "X-Mailer: PHP v".phpversion()."\r\n";         
		
		// With message
		
		//$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
		//$headers .= "Content-Transfer-Encoding: 8bit\r\n";
		//$headers .= "".$message."\n";
		//$headers .= "--".$num."\n"; 
		$txt = "You have received an e-mail from ".$fname." ".$lname."\n E-Mail: ".$mailFrom."\n\n".$message;
		
		$sendContact = mail($mailTo, $subject, $txt, $headers);
		if ($sendContact){
			header("Location: contact.html?mailsent");
			echo "SUCCESS: Email sent successfully...";
		}
		else
		{
			echo "ERROR: No email was sent...";
		}
	}
