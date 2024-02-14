<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Admin extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->library(array('session', 'form_validation'));
		$this->load->helper(array('url', 'html', 'form'));
		$this->load->library("pagination");
		$this->load->helper('cookie');
		$this->load->model('Adminmodel', 'model');
	}

	public function index()
	{
		if ($this->session->userdata('username') == '') {
			$data['username'] = "";
			$data['password'] = "";
			$this->load->view('backend/login', $data);
		} else {
			$data['ShowPage'] = 'backend/mainpage/mainpage';
			$this->load->view('backend/indexpage', $data);
		}
	}
	public function datacompain()
	{
		if ($this->session->userdata('username') == '') {
			$data['username'] = "";
			$data['password'] = "";
			$this->load->view('backend/login', $data);
		} else {
			
			$data['petition']  = $this->model->selectpetition();
			$data['ShowPage'] = 'backend/data_compain/datacompaim';
			$this->load->view('backend/indexpage', $data);
		}
	}
}
