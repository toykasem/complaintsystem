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
		$this->load->model('Homemodel', 'model');
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

	public function informationoffice()
	{
		$data['title'] = 'ค้นหา | ระบบทดสอบ';
		$data['ShowPage'] = 'information_office/information_office';
		// $this->load->view('information_office/information_office');
		$this->load->view('homeindex', $data);
	}

	public function onestopservice()
	{
		$data['title'] = 'รายงาน | ระบบทดสอบ';
		$data['menu'] = true;
		$data['ShowPage'] = 'one_stop_service/onestopservice';
		// $this->load->view('one_stop_service/onestopservice');
		$this->load->view('homeindex', $data);
	}
	public function homeview()
	{
		$data['title'] = 'หน้าแรก | ระบบทดสอบ';
		$data['menu'] = true;
		$data['ShowPage'] = 'homeview/home';
		// $this->load->view('homeview/home');
		$this->load->view('homeindex', $data);
	}
	public function complaint()
	{
		$data['title'] = 'แจ้งคำร้อง | ระบบทดสอบ';
		$data['menu'] = true;
		$data['ShowPage'] = 'complaint/complaint';
		$data['province'] = $this->model->province();
		$data['districtall']  = $this->model->subdistrictall();
		$data['titlename'] = $this->model->titlename();
		$data['selectoption'] = $this->model->selectoption();

		$this->load->view('homeindex', $data);
	}

	public function checkclaim()
	{

		$data['title'] = 'แจ้งคำร้อง | ระบบทดสอบ';
		$data['menu'] = true;
		$data['ShowPage'] = 'complaint/checkclaim';
		$this->load->view('homeindex', $data);
	}
	public function complaintv2()
	{

		$data['title'] = 'แจ้งคำร้อง | ระบบทดสอบ';
		$data['menu'] = true;
		$data['ShowPage'] = 'complaint/testbar';
		$data['province'] = $this->model->province();
		$data['districtall']  = $this->model->subdistrictall();
		// $data['titlename'] = $this->model->titlename();
		// $data['selectoption'] = $this->model->selectoption();

		// $this->load->view('homeview/home');
		$this->load->view('homeindex', $data);
	}

	public function getdistrict()
	{
		$district = trim($this->input->get('dis'));
		$this->session->set_userdata("district", $district);
		$res = $this->model->district($district);
		$result = array();
		foreach ($res as $r) {
			$result[] = array(
				'name_th' => $r->name_th,
				'id' => $r->id,
				'province_id' => $r->province_id
			);
		}
		echo json_encode($result, JSON_NUMERIC_CHECK | JSON_UNESCAPED_UNICODE);
	}
	public function getsubdistrict()
	{
		$subdistrict = trim($this->input->get('subdis'));
		$this->session->set_userdata("subdistrict", $subdistrict);
		$res = $this->model->subdistrict($subdistrict);
		$result = array();
		foreach ($res as $r) {
			$result[] = array(
				'name_th' => 	$r->name_th,
				'id' => 	$r->id,
				'amphure_id' => 	$r->amphure_id,
				'zip_code' => 	$r->zip_code
			);
		}
		echo json_encode($result);
	}
	public function getpostcode()
	{
		$postcode = trim($this->input->get('postcode'));
		$this->session->set_userdata("postcode", $postcode);
		$res = $this->model->subdistrictpost($postcode);
		$result = array();
		foreach ($res as $r) {
			$result[] = array(
				'zip_code' => $r->zip_code

			);
		}
		echo json_encode($result);
	}


	public function insert_petition()
	{
		// รับข้อมูลที่ถูกส่งมาจาก AJAX
		$petition_type = $this->input->post('petition_type');
		$topic = $this->input->post('topic');
		$detail = $this->input->post('detail');
		$titlename = $this->input->post('titlename');
		$fristname = $this->input->post('fristname');
		$lasttname = $this->input->post('lasttname');
		$idcard = $this->input->post('idcard');
		$phonenumber = $this->input->post('phonenumber');
		$email = $this->input->post('email');
		$homenumber = $this->input->post('homenumber');
		$alley = $this->input->post('alley');
		$moo = $this->input->post('moo');
		$road = $this->input->post('road');
		$province = $this->input->post('province');
		$district = $this->input->post('district');
		$sub_district = $this->input->post('sub_district');
		$postcode = $this->input->post('postcode');

		$insert = $this->model->insertpetition(
			$petition_type,
			$topic,
			$detail,
			$titlename,
			$fristname,
			$lasttname,
			$idcard,
			$phonenumber,
			$email,
			$homenumber,
			$alley,
			$moo,
			$road,
			$province,
			$district,
			$sub_district,
			$postcode
		);

		if ($insert) {
			$data = array('success' => true, 'msg1' => 'Form has been submitted successfully2');
		} else {
			$data = array('success' => false, 'msg' => 'Form has been not submitted');
		}
		echo json_encode($data);
	}

	public function searchcliam()
	{
		$idnumber = $this->input->post('idnumber');
		$phonenumber = $this->input->post('phonenumber');
		$data['province'] = $this->model->search($idnumber,$phonenumber);
		foreach ($data['province'] as $r) {
			$data['status']  = $r->status;
		}

		$this->load->view('complaint/stepcheckcliam',$data);
	}
}
