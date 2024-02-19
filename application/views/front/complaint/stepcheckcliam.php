<br />
<hr style="border: 1.5px solid;color:black" />
<?php if (count($datacheck) > 0) { ?>

    <div class="table-responsive">
        <table  class="table table-striped" style="border: 1px; border-style: solid; border-color: black; background:white">
            <thead>
                <tr>
                    <th>ลำดับ</th>
                    <th>ชื่อ</th>
                    <th>หัวข้อร้องเรียน</th>
                    <th>เรื่องที่ร้องเรียน</th>
                    <th>รายละเอียด</th>
                    <th>ดูสถานะ</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($datacheck as $row) { ?>
                    <tr>
                        <td><?php echo $row->row ?></td>
                        <td><?php echo $row->name ?></td>
                        <td><?php echo $row->main_topic ?></td>
                        <td><?php echo $row->topic ?></td>
                        <td><?php echo $row->detail ?></td>
                        <td>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="status(id = '<?php echo $row->petition_id ?>')">ดูสถานะ</button>

                        </td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
<?php } else { ?>
    <div style="text-align:center">
        <h3>-- ไม่พบข้อมูล --</h3>
    </div>
<?php } ?>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
        <div id="newsdetail">
        </div>
    </div>
</div>

<script>
    function status(id) {
        var datas = "id=" + id;
        $.ajax({
            type: "POST",
            url: "<?php echo site_url('Home/checkstatus') ?>",
            data: datas,
        }).done(function(data) {
            $('#newsdetail').html(data);
        });
    }
</script>

<style>
    .step-container {
        position: relative;
        text-align: center;
        transform: translateY(-43%);
    }

    .step-circle {
        /* width: 30px;
        height: 30px; */
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #fff;
        border: 2px solid #007bff;
        line-height: 30px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        cursor: pointer;
        /* Added cursor pointer */
    }
    .table th,
    .table td {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>