<section id="content">
    <br /> <br />
    <h1 style="text-align:center">ติดตามผลการดำเนินการ</h1>
    <div style="margin-top: 50px;">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-3">
                    <label>เลขบัตรประชาชน 4 ตัวท้าย</label>
                    <input type="text" id="idnumber" name="idnumber" class="form-control" placeholder="กรอก เลข 4 ตัวท้าย บัตรประชาชน">
                </div>
                <div class="col-md-3">
                    <label>เบอร์โทร 4 ตัวท้าย</label>
                    <input type="text" id="phonenumber" name="phonenumber" class="form-control" placeholder="กรอก เลข 4 ตัวท้าย เบอร์โทร">
                </div>
                <div class="col-md-3"></div>
            </div>
            <br />
            <div class="row" style="text-align: center;">
                <button class="btn btn-primary btn-next" style="text-align: center;" data-last="Finish" onclick="searchclaim()">
                    <i class="ace-icon fa fa-search"></i> ค้นหา
                </button>
            </div>
            <br />
            <div id="stepshowe"></div>
    </div>
</section>
<script type="text/javascript">
    function searchclaim(id) {
        var idnumber = document.getElementById('idnumber').value;
        var phonenumber = document.getElementById('phonenumber').value;
        var datas = "idnumber=" + idnumber + "&phonenumber=" + phonenumber;
        $.ajax({
            type: "POST",
            url: "<?php echo site_url('Home/searchcliam') ?>",
            data: datas,
        }).done(function(data) {
            $('#stepshowe').html(data);
        });
    }



    function loadcss(url, last) {
        var head = document.getElementsByTagName('head')[0],
            link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        if (last == "first") {
            link.onload = callbackFunc;
        }
        head.appendChild(link);
        return link;
    }
    var callbackFunc = function() {
        document.getElementsByTagName('body')[0].style.opacity = '1';
    };
    loadcss('<?php echo base_url(); ?>assets/friststylestep.css', 'last');
    loadcss('<?php echo base_url(); ?>assets/laststylestep.css', 'first');
</script>