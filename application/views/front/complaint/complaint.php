<section id="get-started" class="padd-section text-center">
    <div class="container">
        <div class="card shadow bg-body rounded" data-aos="zoom-in" data-aos-delay="200">
            <br /><br />
            <div class="card-body" style="background-color: initial;">
                <h1>แจ้งคำร้อง/ร้องเรียน</h1>
                <h3 style="text-align:center">เรื่องที่ต้องการร้องเรียน</h3>
                <br /><br />
                <form id="claimdata" method="post" action="javascript:void(0)" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <select class="form-control" id="petition_type" name="petition_type" required style="font-size: 15px; line-height: 50px; color: #000000;" placeholder="เลือกจังหวัด">
                                <option class="form-control" value="">ประเภทคำร้อง</option>
                                <option class="form-control" value="1">ประเภท1</option>
                                <?php foreach ($selectoption as $option) { ?>
                                    <option value="<?php echo $option->su_id; ?>"><?php echo $option->topic_name . ' -> ' . $option->subtopic_name; ?></option>
                                <?php } ?>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <input type="text" id="topic" name="topic" class="form-control" placeholder="หัวข้อเรื่อง *" required>
                        </div>

                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <textarea class="form-control" name="detail" id="detail" rows="3" placeholder="รายละเอียด *" required></textarea>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-md-4" style="padding-right: 0px;">
                                    <select class="form-control" name="titlename" id="titlename" required>
                                        <option value="" selected disabled hidden>เลือกคำนำหน้า</option>
                                        <option value="1">นาย</option>
                                        <?php foreach ($titlename as $title) { ?>
                                            <option value="<?php echo $title->id; ?>">
                                                <?php echo $title->name; ?>
                                            </option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <div class="col-md-8" style="padding-left: 0px;">
                                    <input type="text" class="form-control" id="fristname" name="fristname" placeholder="ชื่อ (ภาษาไทย) *" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="lasttname" name="lasttname" placeholder="นามสกุล (ภาษาไทย) *" required>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="idcard" name="idcard" placeholder="หมายเลขบัตรประชาชน 13 หลัก" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="phonenumber" name="phonenumber" placeholder="หมายเลขโทรศัพท์มือถือ (เช่น 090 123 4567) *" required>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="email" name="email" placeholder="อีเมล (เช่น john@mail.com)" required>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <h4>ที่อยู่</h4>
                    <div style="display: flex; justify-content: space-evenly;">
                        <hr style="width: 70%; font-size:medium" />
                        <br />
                    </div>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="homenumber" name="homenumber" placeholder="บ้านเลขที่/หมู่บ้าน/อาคาร" required>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="moo" name="moo" placeholder="หมู่ที่" required>
                        </div>
                       
                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="alley" name="alley" placeholder="ซอย">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="road" name="road" placeholder="ถนน">
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <select class="form-control csscall js-example-basic-single" id="province" name="province" onchange="getdistrict(this.value)" required>
                                <option value="">เลือกจังหวัด</option>
                                <?php foreach ($province as $pv) { ?>
                                    <option value="<?php echo $pv->id; ?>"><?php echo $pv->name_th; ?> </option>
                                <?php } ?>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select class="form-control csscall js-example-basic-single" id="district" name="district" onchange="getsubdistrict(this.value)" required>
                                <option value="">เลือกอำเภอ </option>
                            </select>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <select class="form-control csscall js-example-basic-single" id="sub_district" onchange="getapostcode(this.value)" name="sub_district" required>
                                <option value="">เลือกตำบล</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select name="postcode" id="postcode" disabled class="form-control">
                                <option value="">รหัสไปรษณีย์</option>
                            </select>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <label for="images" class="drop-container" id="dropcontainer">
                                <span class="drop-title">แนบไฟล์</span>
                                or
                                <input type="file" name="images" id="images" accept="image/*" required>
                            </label>
                        </div>

                        <div class="col-md-2"></div>
                    </div>
                    <br />
                    <!-- <button class="btn btn-primary btn-next" data-last="Finish">
                        บันทึข้อมูล
                        <span class=" icon-upload"></span>
                    </button> -->
                    <button type="submit" class="btn btn-primary"> บันทึข้อมูล <span class=" icon-upload"></span>
                        <!-- <input type="submit" id="send_form" class="btn btn-primary" value="บันทึข้อมูล"> -->
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script> -->

<script type="text/javascript">
    function getdistrict(v) {
        $.getJSON('<?php echo site_url('Home/getdistrict?dis=') ?>' + v, function(res) {

            $('#district').find('option').remove();
            $('#district').append('<option value="">เลือกอำเภอ</option>');
            for (const i in res) {
                $('#district').append('<option value="' + res[i].id + '">' + res[i].name_th + '</option>')
            }
        });
    }

    function getsubdistrict(v) {
        $.getJSON('<?php echo site_url('Home/getsubdistrict?subdis=') ?>' + v, function(res) {

            $('#sub_district').find('option').remove();
            $('#sub_district').append('<option value="">เลือกตำบล</option>');
            for (const i in res) {
                $('#sub_district').append('<option style="" value="' + res[i].id + '">' + res[i].name_th + '</option>')
            }
        });
    }

    function getapostcode(v) {
        $.getJSON('<?php echo site_url('Home/getpostcode?postcode=') ?>' + v, function(res) {
            $('#postcode').prop("disabled", false)
            $('#postcode').find('option').remove();
            $('#postcode').append('<option value="">รหัสไปรษณี</option>');
            for (const i in res) {
                $('#postcode').append('<option value="' + res[i].zip_code + '">' + res[i].zip_code + '</option>');
            }
        });
    }
    // $(document).ready(function() {
    //     $("#form_complaint").submit(function(e) {
    //         var formData = new FormData($("#form_complaint")[0]);
    //         // $('#send_form').html('Sending..');
    //         swal({
    //             title: "แน่ใจหรือไม่ ?",
    //             text: "ต้องการบันทึกข้อมูล",
    //             type: "warning",
    //             confirmButtonClass: "btn-primary",
    //             showCancelButton: true,
    //             confirmButtonText: "ตกลง",
    //             cancelButtonText: "ยกเลิก",
    //             closeOnConfirm: false,
    //             closeOnCancel: false
    //         }).then((willDelete) => {
    //             if (willDelete) {
    //                 $.ajax({
    //                     url: "<?php echo site_url('Home/insert_petition') ?>",
    //                     dataType: 'json',
    //                     type: 'POST',
    //                     data: formData,
    //                     contentType: false,
    //                     processData: false,
    //                     success: function(resp) {
    //                         if (resp.success == true) {
    //                             swal({
    //                                 title: "บันทึกข้อมูลสำเร็จ",
    //                                 text: "ทำเพิ่มบทความเรียบร้อย",
    //                                 type: "success"
    //                             }).then(function() {
    //                                 location.href = '';
    //                             });
    //                         } else {
    //                             swal("บันทึกข้อมูลไม่สำเร็จ", "บันทึกข้อมูลไม่สำเร็จ กรุณาเลือกรูปภาพสำหรับ บทความ", "error");
    //                         }
    //                     }
    //                 });
    //             } else {
    //                 swal("ยกเลิกการเพิ่มบทความ", "ท่านได้ยกเลิกการเพิ่มข้อSEOย์เรียบร้อย ", "error");
    //             }
    //         });

    //     });
    // });


    $(document).ready(function() {
        $("#claimdata").submit(function(e) {
            var formData = new FormData($("#claimdata")[0]);
            swal({
                title: "แน่ใจหรือไม่ ?",
                text: "ต้องการบันทึกข้อมูล",
                type: "warning",
                confirmButtonClass: "btn-primary",
                cancelButtonClass: "btn-danger",
                showCancelButton: true,
                confirmButtonText: "ตกลง",
                cancelButtonText: "ยกเลิก",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function(willDelete) {
                if (willDelete) {
                    $.ajax({
                        url: "<?php echo site_url('Home/insert_petition') ?>",
                        dataType: 'json',
                        type: 'POST',
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function(resp) {
                            if (resp.success == true) {
                                swal({
                                    title: "บันทึกข้อมูลสำเร็จ",
                                    text: "",
                                    type: "success"
                                }, function() {
                                    location.href = '';
                                });
                            } else {
                                swal("บันทึกข้อมูลไม่สำเร็จ",
                                    "บันทึกข้อมูลไม่สำเร็จ ",
                                    "error");
                            }
                        }
                    });
                } else {
                    swal("ยกเลิกการบันทึกข้อมูล", "ท่านได้ยกเลิกการบันทึกข้อมูลเรียบร้อย ",
                        "error");
                }
            });
        });
    });
</script>
<style>
    .drop-container {
        position: relative;
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;
        padding: 20px;
        border-radius: 10px;
        border: 2px dashed #555;
        color: #444;
        cursor: pointer;
        transition: background .2s ease-in-out, border .2s ease-in-out;
    }

    .drop-container:hover,
    .drop-container.drag-active {
        background: #eee;
        border-color: #111;
    }

    .drop-container:hover .drop-title,
    .drop-container.drag-active .drop-title {
        color: #222;
    }

    .drop-title {
        color: #444;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        transition: color .2s ease-in-out;
    }

    input[type=file] {
        width: 350px;
        max-width: 100%;
        color: #444;
        padding: 5px;
        background: #fff;
        border-radius: 10px;
        border: 1px solid #555;
    }

    input[type=file]::file-selector-button {
        margin-right: 20px;
        border: none;
        background: #084cdf;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }

    input[type=file]::file-selector-button:hover {
        background: #0d45a5;
    }

    .form-field {
        font-family: Arial, sans-serif;
        /* Define your preferred font family */
        font-size: 16px;
        /* Define the font size */
        font-weight: bold;
    }
</style>

<!-- swal({
                    title: "แน่ใจหรือไม่ ?",
                    text: "ต้องการบันทึกข้อมูล",
                    type: "warning",
                    confirmButtonClass: "btn-primary",
                    showCancelButton: true,
                    confirmButtonText: "ตกลง",
                    cancelButtonText: "ยกเลิก",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function(willDelete) {
                    if (willDelete) {
                        var allFormData = formData1.concat(formData2).concat(formData3);
                        var formData = new FormData();
                        allFormData.forEach(function(field) {
                            formData.append(field.name, field.value);
                        });

                        $.ajax({
                            url: "</?php echo site_url('Home/insert_petition') ?>",
                            dataType: 'json',
                            type: 'POST',
                            data: formData,
                            contentType: false,
                            processData: false,
                            success: function(resp) {
                                if (resp.success == true) {
                                    swal({
                                        title: "บันทึกข้อมูลสำเร็จ",
                                        text: "ทำเพิ่มบทความเรียบร้อย",
                                        type: "success"
                                    }, function() {
                                        location.href = '';
                                    });
                                } else {
                                    swal("บันทึกข้อมูลไม่สำเร็จ", "บันทึกข้อมูลไม่สำเร็จ", "error");
                                }
                            }
                        });
                    } else {
                        swal("ยกเลิกการเพิ่มบทความ", "ท่านได้ยกเลิกการ ", "error");
                    }
                }); -->