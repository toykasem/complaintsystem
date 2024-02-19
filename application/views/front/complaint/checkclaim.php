<section id="content" style="margin-top: 150px;margin-bottom: 250px;">
    <div class="container">
        <br /> <br />
        <h1 style="text-align:center">ติดตามผลการดำเนินการ</h1>
        <div style="margin-top: 50px;">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-3">
                    <label>เลขบัตรประชาชน 4 ตัวท้าย</label>
                    <input type="text" id="idnumber" name="idnumber" class="form-control" placeholder="กรอก เลข 4 ตัวท้าย บัตรประชาชน" required>
                </div>
                <div class="col-md-3">
                    <label>เบอร์โทร 4 ตัวท้าย</label>
                    <input type="text" id="phonenumber" name="phonenumber" class="form-control" placeholder="กรอก เลข 4 ตัวท้าย เบอร์โทร" required>
                </div>
                <div class="col-md-3"></div>
            </div>
            <br />
            <div class="row" style="text-align: center;">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <button class="btn btn-primary btn-next" style="text-align: center;" onclick="searchclaim()">
                        <i class="ace-icon fa fa-search"></i> ค้นหา
                    </button>
                </div>
                <div class="col-md-4"></div>
            </div>
            <br />
            <div id="stepshowe"></div>
        </div>
    </div>
</section>
<script type="text/javascript">
    function searchclaim() {
        var idnumber = document.getElementById('idnumber').value;
        var phonenumber = document.getElementById('phonenumber').value;

        // Simple validation
        if (idnumber.length !== 4 || phonenumber.length !== 4) {
            // Show SweetAlert error message

            swal("กรุณากรอกข้อมูลให้ครบ",
                "กรุณากรอกข้อมูลให้ครบ เพื่อทำการค้นหา",
                "error");
            return;
        }

        // Proceed with AJAX request
        var datas = "idnumber=" + idnumber + "&phonenumber=" + phonenumber;
        $.ajax({
            type: "POST",
            url: "<?php echo site_url('Home/searchcliam') ?>",
            data: datas,
        }).done(function(data) {
            $('#stepshowe').html(data);
        });
    }
</script>