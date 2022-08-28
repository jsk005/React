<?php
// https://land.05rg.com/reactSample/rsa_key.php
header("Cache-Control: no-cache, must-revalidate");
header("Content-type: application/json; charset=UTF-8");

$pubkey = get_publickey();
echo $pubkey;

function get_publickey() {
	// 경로 : 절대경로로 설정 필요
	$rsakeyfile = '/home/rsa/key/rsa_pub.pem';
	
	$fp = fopen($rsakeyfile,"r");
	$key = "";
	while(!feof($fp)) {
		$key .= fgets($fp,4096);
	} 
	fclose($fp);

	$key = preg_replace('/\r\n|\r|\n/','',$key);
	$key = str_replace('-----BEGIN PUBLIC KEY-----','',$key);
	$key = str_replace('-----END PUBLIC KEY-----','',$key);
	return $key;
} 

/*
CentOS 리눅스 에서 RSA 공개키, 개인키 생성 방법
mkdir -p /home/rsa/key/
cd /home/rsa/key/

# Private Key 생성
openssl genrsa -out rsa_pri.pem 1024

# Public Key 생성
openssl rsa -pubout -in rsa_pri.pem -out rsa_pub.pem

*/
?>
