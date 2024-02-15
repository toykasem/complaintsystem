<section id="get-started">
    <div class="container" style="margin-top: 100px; margin-bottom: 200px;">
        <div class="card shadow bg-body rounded" data-aos="zoom-in" data-aos-delay="200">
            <br /><br />
            <div style="display: flex;flex-direction: row; margin-top: 20px; align-items: center; justify-content: center;">
                <h3>แจ้งคำร้อง/ร้องเรียน</h3>
            </div>
            <br />
            <div class="card-body" style="background-color: initial;padding:50px">
                <div class="progress px-1" style="height: 3px;">
                    <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="step-container d-flex justify-content-between">
                    <div class="step-circle" onclick="displayStep(1)"><span class="icon-pen" style="font-size: 30px; font-weight: 300;"></span></div>
                    <div class="step-circle" onclick="displayStep(2)"><span class="icon-address-book" style="font-size: 30px; font-weight: 300;"></div>
                    <div class="step-circle" onclick="displayStep(3)"><span class="icon-folder-open" style="font-size: 30px; font-weight: 300;"></div>
                    <div class="step-circle" onclick="displayStep(4)"><span class="icon-checkmark" style="font-size: 30px; font-weight: 300;"></div>
                </div>
                <br />
                <form id="multi-step-form" method="post" action="javascript:void(0)" enctype="multipart/form-data">
                    <div class="step step-1">
                        <div style="display: flex;flex-direction: row; margin-top: 20px; align-items: center; justify-content: center;">
                            <strong style="text-align:center">เรื่องที่ต้องการร้องเรียน</strong>
                        </div>
                        <br />
                        <br />
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <select class="form-control" id="petition_type" name="petition_type" required placeholder="เลือกจังหวัด">
                                        <option class="form-control" value="">ประเภทคำร้อง</option>
                                        <?php foreach ($selectoption as $option) { ?>
                                            <option value="<?php echo $option->su_id; ?>"><?php echo $option->topic_name . ' -> ' . $option->subtopic_name; ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <div class="col-md-5">
                                    <input type="text" id="topic" name="topic" class="form-control" placeholder="หัวข้อเรื่อง *" required>
                                </div>

                                <div class="col-md-1"></div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-10">
                                    <textarea class="form-control" name="detail" id="detail" rows="3" placeholder="รายละเอียด *" required></textarea>
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-4" style="padding-right: 8px;">
                                            <select class="form-control" name="titlename" id="titlename" required>
                                                <option value="" selected disabled hidden>คำนำหน้า</option>
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
                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="lasttname" name="lasttname" placeholder="นามสกุล (ภาษาไทย) *" required>
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="idcard" name="idcard" placeholder="หมายเลขบัตรประชาชน 13 หลัก" required>
                                </div>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="phonenumber" name="phonenumber" placeholder="หมายเลขโทรศัพท์มือถือ (เช่น 090 123 4567) *" required>
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <input type="email" class="form-control" id="email" name="email" placeholder="อีเมล (เช่น john@mail.com)" required>
                                </div>
                                <div class="col-md-6"></div>
                            </div>
                        </div>
                        <br />
                        <div style="display: flex;flex-direction: row; margin-top: 20px; align-items: center; justify-content: center;">
                            <button type="button" class="btn btn-primary next-step">ต่อไป</button>
                        </div>
                    </div>

                    <div class="step step-2">
                        <div style="display: flex;flex-direction: row; margin-top: 20px; align-items: center; justify-content: center;">
                            <strong style="text-align:center">ที่อยู่</strong>
                        </div>
                        <br />
                        <br />
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="homenumber" name="homenumber" placeholder="บ้านเลขที่/หมู่บ้าน/อาคาร" required>
                                </div>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="moo" name="moo" placeholder="หมู่ที่" required>
                                </div>

                                <div class="col-md-1"></div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="alley" name="alley" placeholder="ซอย">
                                </div>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" id="road" name="road" placeholder="ถนน">
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <select class="form-control" id="province" name="province" onchange="getdistrict(this.value)" required>
                                        <option value="">เลือกจังหวัด</option>
                                        <?php foreach ($province as $pv) { ?>
                                            <option value="<?php echo $pv->id; ?>"><?php echo $pv->name_th; ?> </option>
                                        <?php } ?>
                                    </select>
                                </div>
                                <div class="col-md-5">
                                    <select class="form-control" id="district" name="district" onchange="getsubdistrict(this.value)" required>
                                        <option value="">เลือกอำเภอ </option>
                                    </select>
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-5">
                                    <select class="form-control" id="sub_district" onchange="getapostcode(this.value)" name="sub_district" required>
                                        <option value="">เลือกตำบล</option>
                                    </select>
                                </div>
                                <div class="col-md-5">
                                    <select name="postcode" id="postcode" disabled class="form-control">
                                        <option value="">รหัสไปรษณีย์</option>
                                    </select>
                                </div>
                                <div class="col-md-1"></div>
                            </div>

                        </div>
                        <br />
                        <div style="display: flex;flex-direction: row; margin-top: 20px; align-items: center; justify-content: center;">
                            <button type="button" class="btn btn-primary prev-step">Previous</button>
                            <button type="button" class="btn btn-primary next-step">Next</button>
                        </div>
                    </div>
                    <div class="step step-3">
                        <div style="display: flex;flex-direction: row; margin-top: 20px; align-items: center; justify-content: center;">
                            <strong style="text-align:center">แนบไฟล์เอกสาร เพิ่มติม</strong>
                        </div>
                        <br />
                        <br />
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-md-1"></div>
                                <div class="col-md-10">
                                    <label for="images" class="drop-container" id="dropcontainer">
                                        <span class="drop-title">แนบไฟล์</span>
                                        or
                                        <input type="file" name="images" id="images" accept="image/*">
                                    </label>
                                </div>

                                <div class="col-md-1"></div>
                            </div>
                        </div>
                        <div style="display: flex;flex-direction: row; margin-top: 20px; align-items: center; justify-content: center;">
                            <button type="button" class="btn btn-primary prev-step">Previous</button>
                            <button type="button" class="btn btn-primary next-step btn-show-data">Next</button>
                        </div>
                    </div>
                    <div class="step step-4">
                        <br /><br />
                        <div style="display: flex;flex-direction: row; margin-top: 20px; align-items: center; justify-content: center;">
                            <h3>รายละเอียดข้อมูล</h3>
                        </div>
                        <br />
                        <div class="mb-3" id="showedatafield4">
                        </div>
                        <div style="display: flex;flex-direction: row; margin-top: 20px; align-items: center; justify-content: center;">
                            <button type="button" class="btn btn-primary prev-step">Previous</button>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
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

    var currentStep = 1;
    var updateProgressBar;

    function displayStep(stepNumber) {
        if (stepNumber >= 1 && stepNumber <= 4) {
            $(".step-" + currentStep).hide();
            $(".step-" + stepNumber).show();
            currentStep = stepNumber;
            updateProgressBar();
        }
    }


    $(document).ready(function() {
        $('#multi-step-form').find('.step').slice(1).hide();

        $(".next-step").click(function() {
            if (currentStep < 4) {
                $(".step-" + currentStep).addClass("animate__animated animate__fadeOutLeft");
                currentStep++;
                setTimeout(function() {
                    $(".step").removeClass("animate__animated animate__fadeOutLeft").hide();
                    $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInRight");
                    updateProgressBar();
                }, 500);
            }
        });

        $(".prev-step").click(function() {
            if (currentStep > 1) {
                $(".step-" + currentStep).addClass("animate__animated animate__fadeOutRight");
                currentStep--;
                setTimeout(function() {
                    $(".step").removeClass("animate__animated animate__fadeOutRight").hide();
                    $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInLeft");
                    updateProgressBar();
                }, 500);
            }
        });

        updateProgressBar = function() {
            var progressPercentage = ((currentStep - 1) / 3) * 100;
            $(".progress-bar").css("width", progressPercentage + "%");
        }
    });
    $(".btn-show-data").click(function() {
        var petition_type = $("#petition_type").val();
        var topic = $("#topic").val();
        var detail = $("#detail").val();
        var titlename = $("#titlename").val();
        var fristname = $("#fristname").val();
        var lasttname = $("#lasttname").val();
        var idcard = $("#idcard").val();
        var phonenumber = $("#phonenumber").val();
        var email = $("#email").val();
        var homenumber = $("#homenumber").val();
        var moo = $("#moo").val();
        var alley = $("#alley").val();
        var road = $("#road").val();
        var province = $("#province").val();
        var district = $("#district").val();
        var sub_district = $("#sub_district").val();
        var postcode = $("#postcode").val();
        var images = $("#images").val();
        $('#showedatafield4').empty();

        $("#showedatafield4").append(
            "<div class='container'> <div class='row'>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>ประเภทคำร้อง :</strong> " + petition_type + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>หัวข้อเรื่อง :</strong> " + topic + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>รายละเอียด :</strong> " + detail + "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>ชื่อ :</strong> " + titlename + " " + fristname + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>นามสกุล :</strong> " + lasttname + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>หมายเลขบัตรประชาชน :</strong> " + idcard + "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>หมายเลขโทรศัพท์มือถือ :</strong> " + phonenumber + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>อีเมล :</strong> " + email + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>บ้านเลขที่ :</strong> " + homenumber + "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>หมู่ที่ :</strong> " + moo + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>ซอย :</strong> " + alley + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>ถนน :</strong> " + road + "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>จังหวัด :</strong> " + province + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>อำเภอ :</strong> " + district + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>ตำบล :</strong> " + sub_district + "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>รหัสไปรษณีย์ :</strong> " + postcode + "</div>" +
            "<div class='col-md-4'><strong style='font-size:18px;'>ไฟล์เอกสาร :</strong> " + images + "</div>" +
            "</div></div>"
        );
    });

    $(document).ready(function() {
        $("#multi-step-form").validate({
            errorPlacement: function(error, element) {
                error.insertAfter(element);
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass("error-border");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass("error-border");
            },
            rules: {
                petition_type: {
                    required: true,
                },
                topic: {
                    required: true,
                },
                detail: {
                    required: true,
                },
                titlename: {
                    required: true,
                },
                fristname: {
                    required: true,
                },
                lasttname: {
                    required: true,
                },
                idcard: {
                    required: true,
                },
                phonenumber: {
                    required: true,
                },
                email: {
                    required: true,
                },
                homenumber: {
                    required: true,
                },
                moo: {
                    required: true,
                },
                province: {
                    required: true,
                },
                district: {
                    required: true,
                },
                sub_district: {
                    required: true,
                },
                postcode: {
                    required: true,
                },

            },
            messages: {
                petition_type: {
                    required: "*",
                },
                topic: {
                    required: "*",
                },
                detail: {
                    required: "*",
                },
                titlename: {
                    required: "*",
                },
                fristname: {
                    required: "*",
                },
                lasttname: {
                    required: "*",
                },
                idcard: {
                    required: "*",
                    maxlength: 13
                },
                phonenumber: {
                    required: "*",
                    maxlength: 10
                },
                email: {
                    required: "*",
                    email: "กรุณา เติม @ ตามด้วย เมลของท่าน",
                },
                homenumber: {
                    required: "*",
                },
                moo: {
                    required: "*",
                },
                province: {
                    required: "*",
                },
                district: {
                    required: "*",
                },
                sub_district: {
                    required: "*",
                },
                postcode: {
                    required: "*",
                },
            },
            submitHandler: function(form) {
                var formData = new FormData(form);
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
                                        "บันทึกข้อมูลไม่สำเร็จ กรุณา ตรวจสอบข้อมูล ",
                                        "error");
                                }
                            }
                        });
                    } else {
                        swal("ยกเลิกการบันทึกข้อมูล", "ท่านได้ยกเลิกการบันทึกข้อมูลเรียบร้อย ",
                            "error");
                    }
                });
                return false; // Prevent default form submission
            }
        });
    });
</script>
<style>
    .error {
        color: red;
    }

    .error-border {
        border: 1px solid red !important;
    }

    .step-container {
        position: relative;
        text-align: center;
        transform: translateY(-43%);
    }

    .step-circle {
        /* width: 30px;
        height: 30px; */
        width: 50px;
        height: 50px;
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

    .step-line {
        position: absolute;
        top: 16px;
        left: 50px;
        width: calc(100% - 100px);
        height: 2px;
        background-color: #007bff;
        z-index: -1;
    }

    #multi-step-form {
        overflow-x: hidden;
    }

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
        font-size: 16px;
        font-weight: bold;
    }
</style>