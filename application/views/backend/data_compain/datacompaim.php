<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css">

        <h3>ข้อมูล</h3><br />
        <div class="table-responsive">
            <table id="petitionTable" class="table table-bordered" style="border: 1px; border-style: solid; border-color: black; background:white">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ประเภทคำร้อง</th>
                        <th>หัวข้อเรื่อง</th>
                        <th>รายละเอียด</th>
                        <th>เลือกคำนำหน้า</th>
                        <th>ชื่อ</th>
                        <th>นามสกุล</th>
                        <th>หมายเลขบัตรประชาชน</th>
                        <th>หมายเลขโทรศัพท์มือถือ</th>
                        <th>อีเมล</th>
                        <th>บ้านเลขที่</th>
                        <th>ซอย</th>
                        <th>หมู่ที่</th>
                        <th>ถนน</th>
                        <th>จังหวัด</th>
                        <th>อำเภอ</th>
                        <th>ตำบล</th>
                        <th>รหัสไปรษณีย์</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($petition as $row) { ?>
                        <tr>
                            <td><?php echo $row->row ?></td>
                            <td><?php echo $row->petition_type ?></td>
                            <td><?php echo $row->topic ?></td>
                            <td><?php echo $row->detail ?></td>
                            <td><?php echo $row->titlename ?></td>
                            <td><?php echo $row->firstname ?></td>
                            <td><?php echo $row->lastname ?></td>
                            <td><?php echo $row->idcard ?></td>
                            <td><?php echo $row->phonenumber ?></td>
                            <td><?php echo $row->email ?></td>
                            <td><?php echo $row->homenumber ?></td>
                            <td><?php echo $row->alley ?></td>
                            <td><?php echo $row->moo ?></td>
                            <td><?php echo $row->road ?></td>
                            <td><?php echo $row->province ?></td>
                            <td><?php echo $row->district ?></td>
                            <td><?php echo $row->sub_district ?></td>
                            <td><?php echo $row->postcode ?></td>
                        </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>

</section>
<!-- Include DataTables JS -->
<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
<script>
    $(document).ready(function() {
        // Initialize DataTable
        $('#petitionTable').DataTable();
    });
</script>