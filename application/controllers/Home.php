<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->library(array('session', 'form_validation'));
		$this->load->helper(array('url', 'html', 'form'));
		$this->load->library("pagination");
		$this->load->helper('cookie');
	}
	public function index()
	{
		$this->load->view('index');
	}
	public function landingpage()
	{
		$data['title'] = 'ระบบ | ระบบทดสอบ';
	
		$data['ShowPage'] = 'landingpage/landingpage';
		// $this->load->view('landingpage/landingpage');
		
		$this->load->view('homeindex', $data);
	}
	
	public function informationoffice ()
	{
		$data['title'] = 'ค้นหา | ระบบทดสอบ';
		$data['ShowPage'] = 'information_office/information_office';
		// $this->load->view('information_office/information_office');
		$this->load->view('homeindex', $data);
	}

	public function onestopservice ()
	{
		$data['title'] = 'รายงาน | ระบบทดสอบ';
		$data['menu'] = true;
		$data['ShowPage'] = 'one_stop_service/onestopservice';
		// $this->load->view('one_stop_service/onestopservice');
		$this->load->view('homeindex', $data);
	}
	public function homeview ()
	{
		$data['title'] = 'หน้าแรก | ระบบทดสอบ';
		$data['menu'] = true;
		$data['ShowPage'] = 'homeview/home';
		// $this->load->view('homeview/home');
		$this->load->view('homeindex', $data);
	}
	public function complaint ()
	{
		$data['title'] = 'แจ้งคำร้อง | ระบบทดสอบ';
		$data['menu'] = true;
		$data['ShowPage'] = 'complaint/complaint';
		// $this->load->view('homeview/home');
		$this->load->view('homeindex', $data);
	}

}
