<?php
class Adminmodel extends CI_Model
{
    public function Date_server()
	{
		$query = "SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s') AS Dateserver";
		return $this->db->query($query)->result();
	}
	public function select_table()
	{
		$query = "SELECT ROW_NUMBER() OVER(ORDER BY id) as row , id,frist_name,last_name,savedate FROM  tabletest";
		return $this->db->query($query)->result();
	}
	public function select_tableupdate($id)
	{
		$query = "SELECT * FROM  tabletest WHERE id = '$id'";
		return $this->db->query($query)->result();
	}
	public function insert_table($fname,$lname)
	{
		$query = "INSERT INTO tabletest (frist_name,last_name,savedate)
		VALUES ('$fname','$lname', now())";
		return $this->db->query($query);
	}
	public function update_table($fname,$lname,$idtest)
	{
		$query = "  UPDATE tabletest
		SET frist_name = '$fname',last_name ='$lname',savedate = now() WHERE id = '$idtest' ";
		return $this->db->query($query);
	}
	public function delete_table($idtest)
	{
		$query = " DELETE  FROM tabletest  WHERE id = '$idtest'";
		return $this->db->query($query);   
	}
	public function fetch_user_login($username, $password)
	{
        $query = "SELECT * FROM user  where username = '$username' and  password = '$password' ";
		return $this->db->query($query)->result();
	}
	public function record_count($username, $password)
	{
		$query = "SELECT * FROM user  where username = '$username' and  password = '$password' ";
		return $this->db->query($query)->result();
	}
	public function fetchpetition()
	{
		$query = "SELECT ROW_NUMBER() OVER(ORDER BY p.petition_id ) as row,
		p.petition_id, p.petition_type, p.topic, p.detail, p.titlename, p.firstname, p.lastname, p.idcard, p.phonenumber,
		p.email, p.homenumber, p.alley, p.moo, p.road, p.province, p.district, p.sub_district, p.postcode, p.filedata,
		p.savedate, p.status,Pv.name_th as province_th ,D.name_th as district_th,SUP.name_th as supdistrict_th,SUP.zip_code,stp.subtopic_name
		,mt.topic_name as main_topic,tit.name 
		FROM petition AS p 
		INNER JOIN thai_provinces AS Pv ON p.province = Pv.id 
		INNER JOIN thai_amphures AS D ON p.province = D.province_id AND p.district = D.id 
		INNER JOIN thai_tambons AS SUP ON p.province = D.province_id AND p.district = SUP.amphure_id AND p.sub_district = SUP.id
	    INNER JOIN subtopics AS stp ON stp.id  = p.petition_type
        INNER JOIN main_topics AS mt ON mt.id = stp.main_topic_id
		INNER JOIN titles AS tit  ON tit.id = p.titlename";
		return $this->db->query($query)->result();
	}
}