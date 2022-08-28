<?php
// 파일을 직접 실행하는 비정상적 동작을 방지 하기 위한 목적
if(isset($_POST) && $_SERVER['REQUEST_METHOD'] == "POST"){
	$_POST = json_decode(file_get_contents("php://input"),true); 
	@extract($_POST); // $_POST['loginID'] 라고 쓰지 않고, $loginID 라고 써도 인식되게 함
	if(isset($userID) && !empty($userID) && isset($password) && !empty($password)) {
		require_once 'phpclass/config.php';
		require_once 'phpclass/dbconnect.php';
		require_once 'phpclass/loginClass.php';
		$c = new LoginClass();

		header("Cache-Control: no-cache, must-revalidate");
		header("Content-type: application/json; charset=UTF-8");

		//$userID = $c->AES_decrypt($'userID');
		$password = $c->rsa_decrypt($password);

		$user = $c->getUser($userID, $password);
		if($user['idx'] == 1){ // 로그인 정보가 일치하면
			$_SESSION['userID'] = $user['userID'];
			$_SESSION['userNM'] = $user['userNM'];
			$_SESSION['admin'] = $user['admin'];

			$row = array("userNM"=>$user['userNM'],"mobileNO"=>$user['mobileNO'],"profileImg"=>$user['idx']);

			$status = "success";
			$message = "";
			$userinfo = $row;
		} else {
			$status = "로그인 에러";
			$message = "다시 한번 시도하시기 바랍니다.";
			$userinfo = null;
		}

		$result = array(
			'status' => $status,
			'message' => $message,
			'userinfo' => $userinfo
		);
		echo json_encode($result);

	}
} else { // 비정상적인 접속인 경우
	echo 0; // loginChk.php 파일을 직접 실행할 경우에는 화면에 0을 찍어준다.
	exit;
}
?>