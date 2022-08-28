import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { JSEncrypt } from "jsencrypt"; // npm install jsencrypt

const Login = () => {
    // PHP 를 이용하여 Web에서 생성한 공개키 ==> 실제 길이는 훨씬 사이즈가 크다.
    const publicKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNA1mKYDCIyU5/IQIDAQAB`;
    const encrypt = new JSEncrypt(); // Start our encryptor.
    encrypt.setPublicKey(publicKey); // Assign our encryptor to utilize the public key.

    const navigate = useNavigate();
    const initData = {
        userID: '',
        password: ''
    }

    const [formData, setFormData] = useState(initData);
	const [users, setUsers] = useState([]);
    // 첫번째 원소 : 현재 상태, 두번재 원소 : 상태를 바꾸어 주는 함수
	const [error, setError] = useState(null);

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // e.target.name 은 해당 input의 name을 가리킨다.
        //console.log(formData);
    }

    const submitForm = (e) => {
        e.preventDefault();
        const params = {
            userID: formData.userID,
            password: encrypt.encrypt(formData.password)
        }
        console.log(params);
        axios.post('/reactSample/loginChk.php', params)
            .then((res) => {
                console.log(res);
				if (res.status === 200 && res.data.status === 'success') {
					setUsers(res.data.userinfo);
					navigate('/');
				} else {
					console.log(res.data.message);
					setError(true);
				}
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    return (
        <div className="container h-100 mt-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card">
                        <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5">Sign In</h2>
                            <form onSubmit={submitForm}>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="userID">userID</label>
                                    <input type="text" name="userID" onChange={onChangeInput} id="userID"
                                           className="form-control form-control-lg" value={formData.userID}
                                           required/>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" name="password" onChange={onChangeInput} id="password"
                                           className="form-control form-control-lg" value={formData.password}
                                           required/>
                                </div>

                                { error &&
                                <div className="alert alert-danger" role="alert">
                                    로그인 정보를 다시 한번 확인하세요!
                                </div>
                                }

                                <div className="d-flex justify-content-center">
                                    <button type="submit"
                                            className="btn btn-primary btn-block btn-lg gradient-custom-3 text-body">로그인
                                    </button>
                                </div>

                                <p className="text-center text-muted mt-5 mb-0">
                                    <Link to="/register" className="fw-bold text-body"><u>회원가입</u></Link>
                                </p>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;