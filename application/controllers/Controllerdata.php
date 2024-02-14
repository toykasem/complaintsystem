<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Controllerdata extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library(array('session', 'form_validation'));
        $this->load->helper(array('url', 'html', 'form'));
        $this->load->library("pagination");
        $this->load->helper('cookie');
        $this->load->model('Homemodel', 'model'); //โหลด model มาใช้งาน   file Homemodel แล้วตั้งชื่อ ใหม่ ว่า model
    }

    public function indextestmodel ()
	{
		$data['Date_server']  = $this->model->Date_server();
        $data['table_test'] = $this->model->select_table();
		$data['title'] = 'แจ้งคำร้อง | ระบบทดสอบ';
		$data['menu'] = true;
		$data['ShowPage'] = 'front/hometabledata/tablesindex';
		$this->load->view('front/homeindex', $data);
	}

    public function form_validation()
    {
        $this->form_validation->set_rules("first_name", "First Name", 'required');
        $this->form_validation->set_rules("last_name", "Last Name", 'required');
        if ($this->form_validation->run()) {
            $first_name = $this->input->post("first_name");
            $last_name  = $this->input->post("last_name");
            $hidden_id = $this->input->post("hidden_id");
            if ($this->input->post("update")) {
                $this->model->update_table($first_name, $last_name, $hidden_id); // ส่งข้อมูล ไปยัง model เพื่อ อับเดทข้อมูล
                redirect(base_url() . "indextestmodel"); //เรียกผ่าน routes ถ้าอยาก เห็น path เต็ม ให้ไปที่ pplication\config\routes.php
            }
            if ($this->input->post("insert")) {
                $this->model->insert_table($first_name, $last_name); // ส่งข้อมูล ไปยัง model เพื่อ insert ข้อมูล
                redirect(base_url() . "indextestmodel");
            }
        } else {
            $this->session->set_flashdata('error_message', 'กรุณากรอกข้อมูล');
            redirect(base_url() . "indextestmodel");
        }
    }

    public function delete_data($ID_A)
    {
        $id = $ID_A;
        $this->model->delete_table($id); // ส่งข้อมูล ไปยัง model เพื่อ delete ข้อมูล
        redirect(base_url() . "indextestmodel");
        
    }
    // ดึงข้อมูลที่เราจะทำการแก้ไข
    public function update_data()
    {
        $user_id = $this->input->post('id');
        $data["user_data"] = $this->model->select_tableupdate($user_id);
	    $this->load->view('front/hometabledata/editdata', $data);
    }
}
