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
		$this->load->view('backend/login');
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
					$username = $value->username;
					$password = $value->password;
					$phone = $value->phone;
					$Permission = $value->Permission;
				}
				$this->session->set_userdata(array('login_id' => $id, 'username' => $username, 'phone' => $phone, 'Permission' => $Permission));
				redirect('Admin');
			} else {
				$this->session->set_flashdata(array('msgerr' => '<p class="login-box-msg" style="color:red;">ชื่อผู้ใช้หรือรหัสผ่านผิดพลาด!</p>'));
				redirect('login', 'refresh');
			}
		}
	}
	public function Logout()
	{
		$this->session->sess_destroy();
		redirect('Admin');
	}
}
