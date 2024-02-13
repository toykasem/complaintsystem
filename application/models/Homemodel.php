<?php
class Homemodel extends CI_Model
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
	public function insert_table($fname, $lname)
	{
		$query = "INSERT INTO tabletest (frist_name,last_name,savedate)
		VALUES ('$fname','$lname', now())";
		return $this->db->query($query);
	}
	public function update_table($fname, $lname, $idtest)
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

	public function province()
	{
		$query = "SELECT * FROM thai_provinces";
		return $this->db->query($query)->result();
	}
	public function district($dis)
	{
		$query = "SELECT * FROM thai_amphures WHERE province_id = '$dis' ";
		return $this->db->query($query)->result();
	}
	public function subdistrict($subdis)
	{
		$query = "SELECT * FROM thai_tambons WHERE amphure_id = '$subdis' ";
		return $this->db->query($query)->result();
	}
	public function subdistrictall()
	{
		$query = "SELECT * FROM thai_tambons ";
		return $this->db->query($query)->result();
	}
	public function subdistrictpost($subdis)
	{
		$query = "SELECT * FROM thai_tambons WHERE id = '$subdis' ";
		return $this->db->query($query)->result();
	}
	public function titlename()
	{
		$query = "SELECT * FROM titles";
		return $this->db->query($query)->result();
	}
	public function selectoption()
	{
		$query = "SELECT topic.id as topic_id,topic.topic_name,su.main_topic_id as subtopic_id,su.id as su_id ,su.subtopic_name
		FROM main_topics as topic
		INNER JOIN subtopics as su ON topic.id = su.main_topic_id
		ORDER BY topic.id, su.id";
		return $this->db->query($query)->result();
	}

	public function insertpetition(
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
	) {
		$query = "INSERT INTO petition (petition_type, topic, detail, titlename, firstname, lastname, idcard, phonenumber, email, homenumber, alley, moo, road, province, district, sub_district, postcode, filedata, savedate) 
		VALUES (	$petition_type,
			'$topic',
			'$detail',
			'$titlename',
			'$fristname',
			'$lasttname',
			'$idcard',
			'$phonenumber',
			'$email',
			'$homenumber',
			'$alley',
			'$moo',
			'$road',
			'$province',
			'$district',
			'$sub_district',
			'$postcode', 'ข้อมูลไฟล์', now());";
		return $this->db->query($query);
	}

	public function search($idnumber,$phonenumber)
	{
		$query = "SELECT *
		FROM petition
		WHERE RIGHT(idcard, 4) = '$idnumber' AND RIGHT(phonenumber, 4) = '$phonenumber';";
		return $this->db->query($query)->result();
	}

	
}
