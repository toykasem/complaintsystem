<section id="content">
    <div class="page-complaint page-service">
        <div class="inn-page">
            <div class="widget-body">
                <div style=" padding: 100px;">
                    <div id="fuelux-wizard-container">
                        <h1 class="tt-page fp_med">แจ้งคำร้อง/ร้องเรียน</h1>
                        <div>
                            <ul class="steps">
                                <li data-step="1" class="active">
                                    <span class="step">1</span>
                                    <span class="title">รายละเอียดคำร้อง</span>
                                </li>

                                <li data-step="2">
                                    <span class="step">2</span>
                                    <span class="title">สถานที่ดำเนินการ</span>
                                </li>

                                <li data-step="3">
                                    <span class="step">3</span>
                                    <span class="title">เอกสารประกอบ</span>
                                </li>

                                <li data-step="4">
                                    <span class="step">4</span>
                                    <span class="title">ตรวจสอบ</span>
                                </li>
                                <!-- <li data-step="4">
                                    <span class="step">5</span>
                                    <span class="title">สำเร็จ</span>
                                </li> -->

                            </ul>
                        </div>
                        <br />
                        <hr />
                        <h4 class="group-tt fp_med" style="text-align:center">เรื่องที่ต้องการร้องเรียน</h4>
                        <br />
                        <div class="step-content pos-rel">
                            <div class="step-pane active" data-step="1">

                                <br />

                                <form class="form-horizontal card" id="sample-form1">
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <select class="form-control" id="petition_type" name="petition_type" style="font-size: 15px; line-height: 50px; color: #000000;" placeholder="เลือกจังหวัด">
                                                <option class="form-control" value="">ประเภทคำร้อง</option>
                                                <option class="form-control" value="1">ประเภท1</option>
                                                <?php foreach ($selectoption as $option) { ?>
                                                    <option value="<?php echo $option->su_id; ?>"><?php echo $option->topic_name . ' -> ' . $option->subtopic_name; ?></option>
                                                <?php } ?>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" id="topic" name="topic" class="form-control" placeholder="หัวข้อเรื่อง *">
                                        </div>

                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-8">
                                            <textarea class="form-control" name="detail" id="detail" rows="3" placeholder="รายละเอียด *"></textarea>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <div class="row">
                                                <div class="col-md-4" style="padding-right: 0px;">
                                                    <select class="form-control" name="titlename" id="titlename">
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
                                                    <input type="text" class="form-control" id="fristname" name="fristname" placeholder="ชื่อ (ภาษาไทย) *">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" id="lasttname" name="lasttname" placeholder="นามสกุล (ภาษาไทย) *">
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" id="idcard" name="idcard" placeholder="หมายเลขบัตรประชาชน 13 หลัก">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" id="phonenumber" name="phonenumber" placeholder="หมายเลขโทรศัพท์มือถือ (เช่น 090 123 4567) *">
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" id="email" name="email" placeholder="อีเมล (เช่น john@mail.com)">
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                </form>
                            </div>

                            <div class="step-pane" data-step="2">
                                <br />
                                <form class="form-horizontal card" id="sample-form2">
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" id="homenumber" name="homenumber" placeholder="บ้านเลขที่/หมู่บ้าน/อาคาร">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" id="alley" name="alley" placeholder="ซอย">
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" id="moo" name="moo" placeholder="หมู่ที่">
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
                                            <select class="form-control csscall js-example-basic-single" id="province" name="province" onchange="getdistrict(this.value)">
                                                <option value="">เลือกจังหวัด</option>
                                                <?php foreach ($province as $pv) { ?>
                                                    <option value="<?php echo $pv->id; ?>"><?php echo $pv->name_th; ?> </option>
                                                <?php } ?>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <select class="form-control csscall js-example-basic-single" id="district" name="district" onchange="getsubdistrict(this.value)">
                                                <option value="">เลือกอำเภอ </option>
                                            </select>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <select class="form-control csscall js-example-basic-single" id="sub_district" onchange="getapostcode(this.value)" name="sub_district">
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
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <h3>พิกัดสถานที่</h3>
                                            <label>ลากหมุดเพื่อกำหนดพิกัด (กรณีจำเป็นต้องระบุจุดที่ตั้ง)</label>
                                        </div>
                                        <div class="col-md-4" style="text-align:right">
                                            <button class="btn btn-primary">
                                                <i class="ace-icon fa fa-search"></i>
                                                ใช้ตำแหน่งปัจจุบัน
                                            </button>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-8">
                                            <label>ค้นหา</label>
                                            <input type="search" class="form-control ace-icon fa fa-search" id="exampleFormControlInput1" placeholder="ค้นหา">
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <label>ค้นหา</label>
                                            <input type="text" class="form-control ace-icon fa fa-search" id="exampleFormControlInput1" placeholder="ละติจูด">
                                        </div>
                                        <div class="col-md-4">
                                            <label>ค้นหา</label>
                                            <input type="text" class="form-control ace-icon fa fa-search" id="exampleFormControlInput1" placeholder="ลองจิจูด">
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-8">
                                            <div id="map" data-location="13.758907,100.5383723" data-logo="https://localgovtest.egov.go.th/images/pin.svg" data-callback="initMap"></div>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                </form>
                            </div>

                            <div class="step-pane" data-step="3">
                                <br />
                                <form class="form-horizontal card" id="sample-form3">
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-8">
                                            <label for="images" class="drop-container" id="dropcontainer">
                                                <span class="drop-title">Drop files here</span>
                                                or
                                                <input type="file" name="images" id="images" accept="image/*" required>
                                            </label>
                                        </div>

                                        <div class="col-md-2"></div>
                                    </div>
                                </form>
                            </div>

                            <div class="step-pane" data-step="4">
                                <div class="center">
                                    <h3>ข้อมูลที่กรอกมา</h3>
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">\
                                            <h3>ประเภทคำร้อง : </h3><label data-name="petition_type"></label>
                                        </div>
                                        <div class="col-md-4">
                                            <h3>หัวข้อเรื่อง : </h3><label data-name="topic"></label>

                                        </div>

                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-8">
                                            <h3>รายละเอียด : </h3><label data-name="detail"></label>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <div class="row">
                                                <div class="col-md-4" style="padding-right: 0px;">
                                                    <h3>เลือกคำนำหน้า : </h3><label data-name="titlename"></label>
                                                </div>
                                                <div class="col-md-8" style="padding-left: 0px;">
                                                    <h3>ชื่อ : </h3><label data-name="fristname"></label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <h3>นามสกุล : </h3><label data-name="lasttname"></label>
                                            </div>
                                            <div class="col-md-2"></div>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <h3>หมายเลขบัตรประชาชน : </h3><label data-name="idcard"></label>
                                        </div>
                                        <div class="col-md-4">
                                            <h3>หมายเลขโทรศัพท์มือถือ : </h3><label data-name="phonenumber"></label>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <h3>อีเมล : </h3><label data-name="email"></label>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <h3>"บ้านเลขที่/หมู่บ้าน/อาคาร : </h3><label data-name="homenumber"></label>
                                        </div>
                                        <div class="col-md-4">
                                            <h3>ซอย : </h3><label data-name="alley"></label>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <h3>หมู่ที่ : </h3><label data-name="moo"></label>
                                        </div>
                                        <div class="col-md-4">
                                            <h3>ถนน : </h3><label data-name="road"></label>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <h3>จังหวัด : </h3><label data-name="province"></label>
                                        </div>
                                        <div class="col-md-4">
                                            <h3>อำเภอ : </h3><label data-name="district"></label>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-4">
                                            <h3>ตำบล : </h3><label data-name="sub_district"></label>
                                        </div>
                                        <div class="col-md-4">
                                            <h3>รหัสไปรษณีย์ : </h3><label data-name="postcode"></label>
                                        </div>
                                        <div class="col-md-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div class="wizard-actions" style="text-align: center">
                        <button class="btn btn-prev">
                            <i class="ace-icon fa fa-arrow-left"></i>
                            ย้อนกลับ
                        </button>

                        <button class="btn btn-primary btn-next" data-last="Finish">
                            ต่อไป
                            <i class="ace-icon fa fa-arrow-right icon-on-right"></i>
                        </button>
                    </div>
                </div><!-- /.widget-main -->
            </div><!-- /.widget-body -->
        </div>
        <span> asd</span>
    </div>
</section>


<script src="assets/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript">
    if ('ontouchstart' in document.documentElement) document.write("<script src='assets/js/jquery.mobile.custom.min.js'>" + "<" + "/script>");
</script>
<script type="text/javascript">
    var settingMap = {
        apiKey: 'AIzaSyDLcBdzoLptDllC3wYQ-l8uJZMHBanvydI',
        getMapLink: function() {
            var mapApiLink = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&sensor=false&region=TH&language=th&libraries=places';
            return mapApiLink;
        }
    };
    $('.btn-next[data-last="Finish"]').click(function() {
        var formData1 = $('#sample-form1').serializeArray();
        var formData2 = $('#sample-form2').serializeArray();
        var formData3 = $('#sample-form3').serializeArray();

        // Function to set data to label
        function setDataToLabel(selector, data) {
            $.each(data, function(index, field) {
                selector.find('label[data-name="' + field.name + '"]').text(field.value);
            });
        }

        // Set data for each form
        setDataToLabel($('.step-pane[data-step="1"]'), formData1);
        setDataToLabel($('.step-pane[data-step="2"]'), formData2);
        setDataToLabel($('.step-pane[data-step="3"]'), formData3);
    });

    jQuery(function($) {

        $('[data-rel=tooltip]').tooltip();

        $('.select2').css('width', '200px').select2({
                allowClear: true
            })
            .on('change', function() {
                $(this).closest('form').validate().element($(this));
            });


        var $validation = false;
        $('#fuelux-wizard-container')
            .ace_wizard({
                //step: 2 //optional argument. wizard will jump to step "2" at first
                //buttons: '.wizard-actions:eq(0)'
            })
            .on('actionclicked.fu.wizard', function(e, info) {
                if (info.step == 1 && $validation) {
                    if (!$('#validation-form').valid()) e.preventDefault();
                }
            })
            //.on('changed.fu.wizard', function() {
            //})
            .on('finished.fu.wizard', function(e) {
                var formData1 = $('#sample-form1').serializeArray();
                var formData2 = $('#sample-form2').serializeArray();
                var formData3 = $('#sample-form3').serializeArray();

                swal({
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
                });
            });
        $('#skip-validation').removeAttr('checked').on('click', function() {
            $validation = this.checked;
            if (this.checked) {
                $('#sample-form').hide();
                $('#validation-form').removeClass('hide');
            } else {
                $('#validation-form').addClass('hide');
                $('#sample-form').show();
            }
        })

        $.mask.definitions['~'] = '[+-]';
        $('#phone').mask('(999) 999-9999');

        jQuery.validator.addMethod("phone", function(value, element) {
            return this.optional(element) || /^\(\d{3}\) \d{3}\-\d{4}( x\d{1,6})?$/.test(value);
        }, "Enter a valid phone number.");

        $('#validation-form').validate({
            errorElement: 'div',
            errorClass: 'help-block',
            focusInvalid: false,
            ignore: "",
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 5
                },
                password2: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                name: {
                    required: true
                },
                phone: {
                    required: true,
                    phone: 'required'
                },
                url: {
                    required: true,
                    url: true
                },
                comment: {
                    required: true
                },
                state: {
                    required: true
                },
                platform: {
                    required: true
                },
                subscription: {
                    required: true
                },
                gender: {
                    required: true,
                },
                agree: {
                    required: true,
                }
            },

            messages: {
                email: {
                    required: "Please provide a valid email.",
                    email: "Please provide a valid email."
                },
                password: {
                    required: "Please specify a password.",
                    minlength: "Please specify a secure password."
                },
                state: "Please choose state",
                subscription: "Please choose at least one option",
                gender: "Please choose gender",
                agree: "Please accept our policy"
            },


            highlight: function(e) {
                $(e).closest('.form-group').removeClass('has-info').addClass('has-error');
            },

            success: function(e) {
                $(e).closest('.form-group').removeClass('has-error'); //.addClass('has-info');
                $(e).remove();
            },

            errorPlacement: function(error, element) {
                if (element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
                    var controls = element.closest('div[class*="col-"]');
                    if (controls.find(':checkbox,:radio').length > 1) controls.append(error);
                    else error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
                } else if (element.is('.select2')) {
                    error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
                } else if (element.is('.chosen-select')) {
                    error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
                } else error.insertAfter(element.parent());
            },

            submitHandler: function(form) {},
            invalidHandler: function(form) {}
        });




        $('#modal-wizard-container').ace_wizard();
        $('#modal-wizard .wizard-actions .btn[data-dismiss=modal]').removeAttr('disabled');


        $(document).one('ajaxloadstart.page', function(e) {
            $('[class*=select2]').remove();
        });
    })

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
    $(document).ready(function() {
        $("#form_complaint").submit(function(e) {
            var formData = new FormData($("#form_complaint")[0]);
            // $('#send_form').html('Sending..');
            swal({
                title: "แน่ใจหรือไม่ ?",
                text: "ต้องการบันทึกข้อมูล",
                type: "warning",
                confirmButtonClass: "btn-primary",
                showCancelButton: true,
                confirmButtonText: "ตกลง",
                cancelButtonText: "ยกเลิก",
                closeOnConfirm: false,
                closeOnCancel: false
            }).then((willDelete) => {
                if (willDelete) {
                    $.ajax({
                        url: "</?php echo site_url('adminSEO/insert_seo') ?>",
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
                                }).then(function() {
                                    location.href = '';
                                });
                            } else {
                                swal("บันทึกข้อมูลไม่สำเร็จ", "บันทึกข้อมูลไม่สำเร็จ กรุณาเลือกรูปภาพสำหรับ บทความ", "error");
                            }
                        }
                    });
                } else {
                    swal("ยกเลิกการเพิ่มบทความ", "ท่านได้ยกเลิกการเพิ่มข้อSEOย์เรียบร้อย ", "error");
                }
            });

        });
    });

    let stepIndex = 0;
    const steps = document.querySelectorAll('.progress-step');

    function next() {
        steps[stepIndex].classList.remove('is-active');
        steps[stepIndex].classList.add('is-complete');
        stepIndex = (stepIndex + 1) % steps.length;
        steps[stepIndex].classList.add('is-active');
    }

    form - control
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