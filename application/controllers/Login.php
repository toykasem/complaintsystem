<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->library(array('session', 'form_validation'));
		$this->load->helper(array('url', 'html', 'form'));
		$this->load->library("pagination");
		$this->load->helper('cookie');
		$this->load->model('Adminmodel');
		$this->load->library("pagination");
	}
	public function Index()
	{
		$this->load->view('backend/Login');
	}
	public function Validlogin()
	{
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		if ($this->input->server('REQUEST_METHOD') == TRUE) {

			$check_user = $this->Adminmodel->record_count($username, $password);
			if (count($check_user) == 1) {
				$result = $this->Adminmodel->fetch_user_login($username, $password);
				foreach ($result as $value) {
					$id = $value->id;
					$user_name = $value->user_name;
					$fristname = $value->fristname;
					$lastname = $value->lastname;
					$type_user = $value->type_user;
				}
				$this->session->set_userdata(array('login_id' => $id, 'username' => $user_name, 'fristname' => $fristname, 'lastname' => $lastname, 'type_user' => $type_user));
				redirect('Admin');
			} else {
				$this->session->set_flashdata(array('msgerr' => '<p class="login-box-msg" style="color:red;">ชื่อผู้ใช้หรือรหัสผ่านผิดพลาด!</p>'));
				redirect('Login', 'refresh');
			}
		}
	}
}
