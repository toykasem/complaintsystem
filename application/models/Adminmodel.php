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
	public function selectpetition()
	{
		$query = "SELECT ROW_NUMBER() OVER(ORDER BY p.petition_id ) as row 
		,p.*,Pv.name_th as province ,D.name_th as district,SUP.name_th as supdistrict,SUP.zip_code
		FROM petition as p 
		INNER JOIN thai_provinces AS Pv ON p.province = Pv.id 
		INNER JOIN thai_amphures AS D ON p.province = D.province_id AND p.district = D.id 
		INNER JOIN thai_tambons AS SUP ON p.province = D.province_id AND p.district = SUP.amphure_id AND p.sub_district = SUP.id ";
		return $this->db->query($query)->result();
	}
}