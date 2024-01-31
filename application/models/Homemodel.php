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
}