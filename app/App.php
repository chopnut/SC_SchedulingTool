<?php 
use Models\Login;
class App {
	public function check_if_logged_in(){
 		// Check if user is logged in via session

 		if(isset($_SESSION['log'])){

 			$username = $_SESSION['log']['username'];
 			$hash  = $_SESSION['log']['hash'];

 			return $this->check_hash($hash,$username);
 		
 		}

 		return false;

 	}
	private function check_password($password,$username,$genSession=false){
	 			$user = Login::where('username','=',$username)->first();

	 				// No records
	 			if($user){
 					// Now check the password if it matches
 					$hashpass = $user->password;


 					if(!function_exists('hash_equals'))
					{
						// bitwise operation
					    function hash_equals($str1, $str2)
					    {
					        if(strlen($str1) != strlen($str2))
					        {
					            return false;
					        }
					        else
					        {
					            $res = $str1 ^ $str2;
					            $ret = 0;
					            for($i = strlen($res) - 1; $i >= 0; $i--)
					            {
					                $ret |= ord($res[$i]);
					            }
					            return !$ret;
					        }
					    }
					}

					
 					if(hash_equals($hashpass,crypt($password,$hashpass)) ){

 						// If generate session is true
 						if($genSession){
 							$_SESSION['log'] = array();
 							$_SESSION['log']['username'] = $username;
 							$_SESSION['log']['hash'] = $hashpass;

 						}


 						return true;
 					}
	 				

	 			}
	 			return false;
	}
	public function logging_out(){
		// Check if someone is trying to log out
		if(isset($_GET['log']) && $_GET['log'] == 'out'){

 				session_destroy();
 				header('Location: '.ROOT_ADDRESS);
 				exit;

 		}		
	}
	private function check_hash($hash,$username){
		$user = Login::where('username','=',$username)
		->where('password','=',$hash)->first();

		return $user;
	} 
	public function init(){
		$this->logging_out();

 		// check if somebody is trying to log in 
 		if(isset($_POST['log']) && $_POST['log'] == 'log'){
 				$username = $_POST['username'];
 				$password = $_POST['password'];

 				$b = $this->check_password($password,$username,true);

 				header('Location: '.SCHEDULING_URL);
 				exit;

 		}

		// ---------------- PASS ALL YOUR SCHEDULING TOOL PROCESS HERE -----------------------//

	}
		
}

 ?>