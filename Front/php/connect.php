<?php
$host="localhost";
$user="root";
$password="";
$db="db_budget_app";
 
mysql_connect($host,$user,$password);
mysql_select_db($db);
 
if(isset($_POST['username'])){
    
    $uname=$_POST['username'];
    $password=$_POST['password'];
    
    $sql = "SELECT * FROM `db_budget_app`.`users` 
  WHERE username='$uname'AND password='$password' limit 1";
    
    $result=mysql_query($sql);
    
    if(mysql_num_rows($result)==1){
        echo "login";
		
		//sql de active session
		$sql = "SELECT balance_user FROM users WHERE username='$uname' limit 1";
		$balance = mysql_query($sql);
		
		//insertar a activesessions
		$sql = "INSERT INTO `activesessions` (NULL, `$uname`, `balance`) VALUES (NULL, '$username', '$balance')";
		
		header("Location: /budgetapp/Front/mainpage.html");
        exit();
    }
    else{
        echo " Credenciales incorrectas";
		header("Location: /budgetapp/Front/indexWrong.html");
        exit();
    }
        
}
?>
