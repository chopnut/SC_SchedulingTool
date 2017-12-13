<?php


class MyUtil{
	// Return any type of request data, if any request data is empty, check from the raw input of php parser
	static function getRequestData(){
		$postData= array();
		if(count($_REQUEST)>=0){
			$postData = $_REQUEST;
		}
		if(count($postData)<=0){
			$postData      = json_decode(file_get_contents('php://input'), true);
		}

		return $postData;

	}
	static function areTheseSet(){
		$count = func_num_args();
		$type = strtolower(func_get_arg(0));
		$val  = $_GET;

		if($type=='post'){
			$val = $_POST;
		}else if($type == 'session'){
			$val = $_SESSION;
		}else if($type == 'cookie'){
			$val = $_COOKIE;
		}else if($type == 'get'){
			$val = $_GET;
		}

		for ($i=1; $i < $count ; $i++) { 

			if(!isset($val[func_get_arg($i)])){
				return false;
			}
		}
		// If there is only one parameter return false nevertheless
		if($count <=1){
			return false;
		}
		return true;
	}
	// usage function (TYPE,name1,name2,......) default is get return true or false
	static function areTheseSetAndNotEmpty(){
		$count = func_num_args();
		$type = strtolower(func_get_arg(0));
		$val  = $_GET;

		if($type=='post'|| $type =='p'){
			$val = $_POST;
		}else if($type == 'session'|| $type =='s'){
			$val = $_SESSION;
		}else if($type == 'cookie'|| $type =='c'){
			$val = $_COOKIE;
		}else if($type == 'get'|| $type =='g'){
			$val = $_GET;
		}else if($type=='files' || $type == 'f'){
			$val = $_FILES;
		}

		for ($i=1; $i < $count ; $i++) { 

			if(!isset($val[func_get_arg($i)]) || empty($val[func_get_arg($i)])){

				return false;
			}
		}
		// If there is only one parameter return false nevertheless
		if($count <=1){
			return false;
		}
		return true;
	}
	// Check against post , get , session and cookie and return boolean true or false
	static function cv($name, $checkVal, $type=null){
		$val  = $_GET;

		if($type=='post' || $type =='p'){
			$val = $_POST;
		}else if($type == 'session' || $type =='s'){
			$val = $_SESSION;
		}else if($type == 'cookie' || $type =='c'){
			$val = $_COOKIE;
		}else if($type == 'get' || $type =='g'){
			$val = $_GET;
		}else if($type=='files' || $type == 'f'){
			$val = $_FILES;
		}
		if(isset($val[$name]) && $val[$name]==$checkVal){
			return true;
		}
		return false;
	}
	
	// Return post, get, session or cookie otherwise empty 
	static function d($name,$defaultvalue='',$type=''){
		$val = null;
		if(empty($type)){
			return MyUtil::returnDataType($name,$defaultvalue);
		} else{
			if($type=='post'|| $type =='p'){
				$val = $_POST;
			}else if($type == 'session'|| $type =='s'){
				$val = $_SESSION;
			}else if($type == 'cookie'|| $type =='c'){
				$val = $_COOKIE;
			}else if($type == 'get'|| $type =='g'){
				$val = $_GET;
			}else if($type=='files' || $type == 'f'){
				$val = $_FILES;
			}
		}
		if(isset($val[$name])){
			return $val[$name];
		}
		return $defaultvalue;
	}
	static function returnDataType($name,$defaultvalue){
		if(isset($_GET[$name])){
			return $_GET[$name];
		}else if(isset($_POST[$name])){
			return $_POST[$name];
		}else if(isset($_SESSION[$name])){
			return $_SESSION[$name];
		} else if(isset($_COOKIE[$name])){
			return $_COOKIE[$name];
		}else if(isset($_FILES[$name])){
			return $_FILES[$name];
		}
		return $defaultvalue;
	}
	// If the value is empty return your default value
	static function de($name,$defaultvalue=''){
		$val = MyUtil::d($name);
		if(empty($val)){
			return $defaultvalue;
		}
		return $val;
	}
	// Return the value, regarless of if its empty or not
	static function dd($name,$data,$defaultvalue=""){
		if(isset($data[$name])){
			return $data[$name];
		}
		return $defaultvalue;
	}
	// Return the value from the data if empty
	static function dde($name,$data,$defaultvalue=""){
		if(isset($data[$name])){
			$str = trim($data[$name]);
			if(!empty($str)){
				return $data[$name];
			}
		}
		return $defaultvalue;
	}
	/* Get filename from string */
	static function getFilename($string){
		$explode = explode('.',$string);
		if(count($explode)>1){
			$lastExt = $explode[count($explode)-1];
			$ext   = strtok($lastExt,' ');
			if($ext!==false){
				$filename = $explode[0].'.'.$ext;
				return $filename;
			}
		}
		return $string;
	}
	static function debugPost($data){
		// For debugging purposes
		foreach($data as $key=>$value){
			if(is_array($value)){
				foreach($value as $key2=> $value2){
					echo "$key |$key2| = $value2 \n";
				}
				continue;
			}
			echo "$key = $value \n";
		}
	}
	// Return array but not last but if the value count is 1 return the default array which is 1
	static function returnButLast($array){
		$temp = array();
		if(count($array)>1){
			$count = count($array);
			for($i = 0; $i<$count; $i++){
				if(($i+1)==$count) break;
				$temp[]= $array[$i];
			}
			return $temp;
		}else{
			return $array;
		}
	}
	// Return true or false with date of this format Y-m-d
	static function validateDate($date)
	{
		$d = DateTime::createFromFormat('Y-m-d', $date);
		return $d && $d->format('Y-m-d') === $date;
	}
	static function getYmdHis($date,$format = "d/m/Y",$returnFormat="Y-m-d H:i:s"){

		$format = $format;
		if(empty($format)){
			$format = "d/m/Y";
		}


		$d = DateTime::createFromFormat($format, $date);
		if($d){
			return date($returnFormat,$d->getTimestamp());
		}else{
			$d = strtotime($date);
			if($d){
				return date($returnFormat,$d);
			}
		}

		return false;
	}
	// Return datetime string minus or plus days +2 , -1
	static function offsetDayDatetime($day,$format="Y-m-d H:i:s"){
		$time = date($format,strtotime("$day days"));
		return $time;
	}
	// Return a json decoded to array with strip slashes
	static function json_decode($text,$array=true){
		return json_decode(preg_replace("/\r\n|\r|\n/","",$text),$array);
	}
	// Will return current datetime formated as "2010-05-12 13:57:01"  | Y-m-d H:i:s
	static function getDateTime(){
		return date("Y-m-d H:i:s");
	}
	// Get name of the day of that current date sunday-saturday
	static function getDayFromDate($datetime){
		return date('l',strtotime($datetime));

	}
	// Return name of the Day from 0-6
	static function getDayFromNum($i){
		switch($i){
			case 0:
			return 'Sunday';
			case 1:
			return 'Monday';
			case 2:
			return 'Tuesday';
			case 3:
			return 'Wednesday';
			case 4:
			return 'Thursday';
			case 5:
			return 'Friday';
			case 6:
			return 'Saturday';
			default: 
			return null;

		}
		return null;
	}
	// Return the Query String and remove any unwanted ones @usage returnQ('delete_id','client');
	static function returnQ(){
        $dataArr = array();
        parse_str($_SERVER['QUERY_STRING'], $dataArr);
		$count = func_num_args();

		for($i=0;$i<$count;$i++){
			$name_to_unset = func_get_arg($i);

			if(isset($dataArr[$name_to_unset])){
				unset($dataArr[$name_to_unset]);
			}
		}

        $pagel = http_build_query($dataArr);
        return $pagel;
	}

	// Return the Query Array and remove any unwanted ones @usage returnQ('delete_id','client');
	static function returnQA(){
        $dataArr = array();
        parse_str($_SERVER['QUERY_STRING'], $dataArr);
		$count = func_num_args();

		for($i=0;$i<$count;$i++){
			$name_to_unset = func_get_arg($i);

			if(isset($dataArr[$name_to_unset])){
				unset($dataArr[$name_to_unset]);
			}
		}

       
        return $dataArr;
	}


}

?>