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
		$this->load->model('Homemodel', 'model');
    }

    public function index ()
	{
        $data['title'] = 'ค้นหา | ระบบทดสอบ';
		$data['ShowPage'] = 'backend/mainpage/mainpage';
		$this->load->view('backend/indexpage', $data);
	}

}
