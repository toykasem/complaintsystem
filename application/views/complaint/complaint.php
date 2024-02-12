<section id="content">
    <script type="text/javascript">
        var MODE_USE = 'user';
        let arrFileF = [];
        let PageMode = 'create';
        let oneStopId = '';
        var MODE_GUEST = "T";
    </script>
    <div class="page-complaint page-service">
        <div class="inn-page">
            <h1 class="tt-page fp_med">แจ้งคำร้อง/ร้องเรียน</h1>
            <ul class="block-steps">
                <!-- <li class="step active">
                    <div class="btn-step" data-tab="1">
                        <div class="num fp_med">1</div>
                    </div>
                    <h2 class="text fh_reg">รายละเอียดคำร้อง ทดสอบ1 make ข้อมูลเป็น text</h2>
                </li> -->
                <li class="step ">
                    <div class="btn-step" data-tab="2">
                        <div class="num fp_med">2</div>
                    </div>
                    <h2 class="text fh_reg">สถานที่ดำเนินการ ทดสอบ2 make ข้อมูลเป็น text</h2>
                </li>
                <li class="step ">
                    <div class="btn-step" data-tab="3">
                        <div class="num fp_med">3</div>
                    </div>
                    <h2 class="text fh_reg">เอกสารประกอบ ทดสอบ3 make ข้อมูลเป็น text</h2>
                </li>
                <li class="step ">
                    <div class="btn-step" data-tab="4">
                        <div class="num fp_med">4</div>
                    </div>
                    <h2 class="text fh_reg">ตรวจสอบ ทดสอบ4 make ข้อมูลเป็น text</h2>
                </li>
                <li class="step ">
                    <div class="btn-step" data-tab="5">
                        <div class="num fp_med">5</div>
                    </div>
                    <h2 class="text fh_reg">สำเร็จ ทดสอบ5 make ข้อมูลเป็น text</h2>
                </li>
            </ul>
            <form id="form_complaint" method="post" class="sty-form form-cm" autocomplete="off"><input type="hidden" name="one_stop_on" value="">
                <ul class="block-detail">
                    <!-- <li class="list-detail active tab-1" data-tab="1"><input class="elm-inp" type="hidden" name="responsible" value=""><input class="elm-inp" type="hidden" name="responsible_id" value="">
                        <div class="inn-list">
                            <div class="list-head">
                                <h3 class="list-tt fp_med">รายละเอียดคำร้อง/ร้องเรียน</h3>
                                <div class="list-sub fh_reg">เพื่อประโยชน์สูงสุดของผู้แจ้ง และความสะดวก<br class="visible-xs" />ในการติดตามเรื่อง กรุณากรอกข้อมูลให้ครบถ้วน</div>
                            </div>
                            <div class="sec-form">
                                <div class="list-form">
                                    <div class="group">
                                        <h4 class="group-tt fp_med">เรื่องที่ต้องการร้องเรียน</h4>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp sty-sl col-6 ">
                                                <div class="box-select fh_reg"><em class="ic-arr icon-arrow-dropdown "></em><input class="required elm-inp" type="hidden" name="petition_type" data-vld="select" value="" autocomplete="off">
                                                    <div class="nav-input sty-inp"></div>
                                                    <div class="nav-select " style="visibility: hidden;">
                                                        <ul class="lvl1">
                                                            <li data-li="0" class=" li-main fh_smb" data-value="complaints"><span>ร้องเรียน/ร้องทุกข์ หน่วยงานภาครัฐ</span>
                                                                <ul class="lvl2">
                                                                    <li data-li="0" class="li-child fh_reg " data-value="167289119672051,167289119674051" data-other="1672889196549793|สำนักปลัดเทศบาล"><span>เหตุด่วน เดือดร้อน</span></li>
                                                                    <li data-li="1" class="li-child fh_reg " data-value="167289119672051,1672891196745707" data-other="1672889196549793|สำนักปลัดเทศบาล"><span>คำร้องทั่วไป</span></li>
                                                                </ul>
                                                            </li>
                                                            <li data-li="1" class=" li-main fh_smb" data-value="tax"><span>ภาษีและค่าธรรมเนียม</span>
                                                                <ul class="lvl2">
                                                                    <li data-li="0" class="li-child fh_reg " data-value="167289119688192,1672891196885890" data-other="1672889211916992|กองคลัง"><span>ขอคัดสำเนาทะเบียนทรัพย์สิน</span></li>
                                                                </ul>
                                                            </li>
                                                            <li data-li="2" class=" li-main fh_smb" data-value="for_help"><span>ขอความช่วยเหลือ</span>
                                                                <ul class="lvl2">
                                                                    <li data-li="0" class="li-child fh_reg " data-value="1672891196749936,16728911967538" data-other="1672889196549793|สำนักปลัดเทศบาล"><span>บริการข้อมูล/ข่าวสาร</span></li>
                                                                </ul>
                                                            </li>
                                                            <li data-li="3" class=" li-main fh_smb" data-value="natural_resources"><span>ทรัพยากรธรรมชาติและสิ่งแวดล้อม</span>
                                                                <ul class="lvl2">
                                                                    <li data-li="0" class="li-child fh_reg " data-value="1672891196762291,1672891196770207" data-other="1672889196549793|สำนักปลัดเทศบาล"><span>ตัดต้นไม้</span></li>
                                                                    <li data-li="1" class="li-child fh_reg " data-value="1672891196762291,1672891196774508" data-other="1672889262360417|กองสาธารณสุขและสิ่งแวดล้อม"><span>น้ำเสีย</span></li>
                                                                    <li data-li="2" class="li-child fh_reg " data-value="1672891196762291,1672891196778125" data-other="1672889262360417|กองสาธารณสุขและสิ่งแวดล้อม"><span>กลิ่นควัน/เสียงรบกวน</span></li>
                                                                    <li data-li="3" class="li-child fh_reg " data-value="1672891196762291,1672891196782710" data-other="1672889154741340|กองช่าง"><span>ขุดดิน/ถมดิน</span></li>
                                                                    <li data-li="4" class="li-child fh_reg " data-value="1672891196762291,1672891196790992" data-other="1672889262360417|กองสาธารณสุขและสิ่งแวดล้อม"><span>จัดเก็บกิ่งไม้ใบไม้</span></li>
                                                                </ul>
                                                            </li>
                                                            <li data-li="4" class=" li-main fh_smb" data-value="other"><span>อื่นๆ</span>
                                                                <ul class="lvl2">
                                                                    <li data-li="0" class="li-child fh_reg " data-value="1672891196797485,1672891196801166" data-other="1672889196549793|สำนักปลัดเทศบาล"><span>แจ้งเรื่องอื่น ๆ</span></li>
                                                                </ul>
                                                            </li>
                                                            <li data-li="5" class=" li-main fh_smb" data-value="public_health"><span>สาธารณสุข</span>
                                                                <ul class="lvl2">
                                                                    <li data-li="0" class="li-child fh_reg " data-value="1672891196805468,1672891196810179" data-other="1672889262360417|กองสาธารณสุขและสิ่งแวดล้อม"><span>การควบคุมกำจัดแมลง และพาหะนำโรค</span></li>
                                                                    <li data-li="1" class="li-child fh_reg " data-value="1672891196805468,1672891196833261" data-other="1672889262360417|กองสาธารณสุขและสิ่งแวดล้อม"><span>สัตว์เลี้ยงไร้เจ้าของ</span></li>
                                                                </ul>
                                                            </li>
                                                            <li data-li="6" class=" li-main fh_smb" data-value="social_and_benefit"><span>สังคมและสวัสดิการ</span>
                                                                <ul class="lvl2">
                                                                    <li data-li="0" class="li-child fh_reg " data-value="1672891196846627,1672891196853660" data-other="1672889196549793|สำนักปลัดเทศบาล"><span>ยืมวัสดุอุปกรณ์</span></li>
                                                                    <li data-li="1" class="li-child fh_reg " data-value="1672891196846627,1672891196873756" data-other="1672889196549793|สำนักปลัดเทศบาล"><span>สนับสนุนน้ำอุปโภคบริโภค</span></li>
                                                                    <li data-li="2" class="li-child fh_reg " data-value="1672891196846627,1672891196877648" data-other="1672889196549793|สำนักปลัดเทศบาล"><span>หอกระจายข่าว / เสียงตามสาย</span></li>
                                                                </ul>
                                                            </li>
                                                            <li data-li="7" class=" li-main fh_smb" data-value="utilities"><span>ระบบสาธารณูปโภค</span>
                                                                <ul class="lvl2">
                                                                    <li data-li="0" class="li-child fh_reg " data-value="1672891196889350,167289119689346" data-other="1672889154741340|กองช่าง"><span>ไฟฟ้าสาธารณะ</span></li>
                                                                    <li data-li="1" class="li-child fh_reg " data-value="1672891196889350,1672891196897491" data-other="1672889154741340|กองช่าง"><span>ท่อระบายน้ำ</span></li>
                                                                    <li data-li="2" class="li-child fh_reg " data-value="1672891196889350,1672891196901937" data-other="1672889262360417|กองสาธารณสุขและสิ่งแวดล้อม"><span>ดูดสิ่งปฏิกูล</span></li>
                                                                    <li data-li="3" class="li-child fh_reg " data-value="1672891196889350,1672891196905407" data-other="1672889262360417|กองสาธารณสุขและสิ่งแวดล้อม"><span>ขอถังขยะ/แจ้งเก็บขยะ</span></li>
                                                                    <li data-li="4" class="li-child fh_reg " data-value="1672891196889350,1672891196910334" data-other="1672889154741340|กองช่าง"><span>อาคาร</span></li>
                                                                    <li data-li="5" class="li-child fh_reg " data-value="1672891196889350,1672891196914932" data-other="1672889154741340|กองช่าง"><span>ถนน/ไหล่ทาง</span></li>
                                                                    <li data-li="6" class="li-child fh_reg " data-value="1672891196889350,1672891196918333" data-other="1672889154741340|กองช่าง"><span>ท่อระบายน้ำ</span></li>
                                                                    <li data-li="7" class="li-child fh_reg " data-value="1672891196889350,1672891196926316" data-other="1672889154741340|กองช่าง"><span>ประปาหมู่บ้าน</span></li>
                                                                    <li data-li="8" class="li-child fh_reg " data-value="1672891196889350,1672891196931386" data-other="1672889154741340|กองช่าง"><span>แจ้งซ่อมป้ายซอย</span></li>
                                                                    <li data-li="9" class="li-child fh_reg " data-value="1672891196889350,1672891196944863" data-other="1672889154741340|กองช่าง"><span>ขุดลอก</span></li>
                                                                    <li data-li="10" class="li-child fh_reg " data-value="1672891196889350,1672891196948199" data-other="1672889262360417|กองสาธารณสุขและสิ่งแวดล้อม"><span>ดูดโคลน/ดูดสิ่งปฏิกูล</span></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div><label class="inp-plc">ประเภทคำร้อง *</label><span class="sty-err fh_reg"></span>
                                                </div>
                                            </div>
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp required" type="text" name="topic" data-vld="text" value=""><label class="inp-plc">หัวข้อเรื่อง *</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp fh_med pad-ic col-12 box-textarea "><textarea class="sty-inp fh_med elm-inp required" name="detail" data-vld="text" value=""></textarea><label class="inp-plc">รายละเอียด *</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                    </div>
                                    <div class="group">
                                        <h4 class="group-tt fp_med">ข้อมูลผู้ร้องเรียน</h4>
                                        <div class="inp-row clearfix">
                                            <div class="group-inp clearfix">
                                                <div class="box-inp sty-sl col-6 ">
                                                    <div class="box-select fh_reg"><em class="ic-arr icon-arrow-dropdown "></em><input class="required elm-inp" type="hidden" name="prefix" data-vld="prefix" value="" autocomplete="off">
                                                        <div class="nav-input sty-inp"></div>
                                                        <div class="nav-select " style="visibility: hidden;">
                                                            <ul class="lvl1">
                                                                <li data-li="0" class=" " data-value="27"><span>นาย</span></li>
                                                                <li data-li="1" class=" " data-value="24"><span>นาง</span></li>
                                                                <li data-li="2" class=" " data-value="26"><span>นางสาว</span></li>
                                                            </ul>
                                                        </div><label class="inp-plc">คำนำหน้า *</label><span class="sty-err fh_reg"></span>
                                                    </div>
                                                </div>
                                                <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp required" type="text" name="name" data-vld="name_th" value=""><label class="inp-plc">ชื่อ (ภาษาไทย) *</label></div><span class="sty-err err-group fh_med"></span>
                                            </div>
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp required" type="text" name="lastname" data-vld="lastname_th" value=""><label class="inp-plc">นามสกุล (ภาษาไทย) *</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp number-only citizen-id" type="text" name="id_card" data-vld="id_card" maxlength="13" value=""><label class="inp-plc">หมายเลขบัตรประชาชน 13 หลัก</label><span class="sty-err fh_med"></span></div>
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp required number-only phone-number" type="text" name="mobile_number" data-vld="mobile" maxlength="10" value=""><label class="inp-plc">หมายเลขโทรศัพท์มือถือ (เช่น 090 123 4567) *</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp " type="text" name="email" data-vld="email" value=""><label class="inp-plc">อีเมล (เช่น john@mail.com)</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-footer fh_med">
                                    <div class="inn-btn">
                                        <div class="btn btn-next" data-next="2">ต่อไป</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> -->
                    <li class="list-detail active tab-2" data-tab="2">
                        <div class="inn-list">
                            <div class="list-head">
                                <h3 class="list-tt fp_med">สถานที่ให้ดำเนินการ (ถ้ามี)</h3>
                                <div class="list-sub fh_reg">กรุณากรอกที่ตั้งและระบุพิกัดของสถานที่ <br class="visible-xs" />เพื่อความรวดเร็วในการดำเนินการ</div>
                            </div>
                            <div class="sec-form">
                                <div class="list-form">
                                    <div class="group">
                                        <h4 class="group-tt fp_med">ที่ตั้ง</h4>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp " type="text" name="house_number" data-vld="text" value=""><label class="inp-plc">บ้านเลขที่/หมู่บ้าน/อาคาร</label><span class="sty-err fh_med"></span></div>
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp " type="text" name="alley" data-vld="text" value=""><label class="inp-plc">ซอย</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp " type="text" name="moo" data-vld="text" value=""><label class="inp-plc">หมู่ที่</label><span class="sty-err fh_med"></span></div>
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp " type="text" name="street" data-vld="text" value=""><label class="inp-plc">ถนน</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp sty-sl col-6 has-dt">
                                                <div class="box-select fh_reg">
                                                    <em class="ic-arr icon-arrow-dropdown "></em>
                                                    <input class="disable elm-inp" type="hidden" name="province" data-vld="select" value="" autocomplete="off">
                                                    <div class="nav-input sty-inp"></div>
                                                    <div class="nav-select " style="visibility: hidden;">
                                                        <ul class="lvl1">
                                                            <?php foreach ($province as $pv) { ?>
                                                                <li class=" " data-value="<?php echo $pv->id; ?>"><span><?php echo $pv->name_th; ?></span></li>
                                                            <?php } ?>
                                                        </ul>
                                                    </div><label class="inp-plc">จังหวัด</label><span class="sty-err fh_reg"></span>
                                                </div>
                                            </div>
                                            <div class="box-inp sty-sl col-6 ">
                                                <div class="box-select fh_reg">
                                                    <em class="ic-arr icon-arrow-dropdown "></em>
                                                    <input class="disable elm-inp" type="hidden" name="district" data-vld="select" value="" autocomplete="off">
                                                    <div class="nav-input sty-inp"></div>
                                                    <div class="nav-select " style="visibility: hidden;">
                                                        <ul class="lvl1">
                                                            <li data-li="0" class=" " data-value="302"><span>กุดข้าวปุ้น</span></li>
                                                            <li data-li="1" class=" " data-value="296"><span>เขมราฐ</span></li>
                                                            <li data-li="2" class=" " data-value="295"><span>เขื่องใน</span></li>
                                                            <li data-li="3" class=" " data-value="294"><span>โขงเจียม</span></li>
                                                            <li data-li="4" class=" " data-value="309"><span>ดอนมดแดง</span></li>
                                                            <li data-li="5" class=" " data-value="297"><span>เดชอุดม</span></li>
                                                            <li data-li="6" class=" " data-value="301"><span>ตระการพืชผล</span></li>
                                                            <li data-li="7" class=" " data-value="306"><span>ตาลสุม</span></li>
                                                            <li data-li="8" class=" " data-value="311"><span>ทุ่งศรีอุดม</span></li>
                                                            <li data-li="9" class=" " data-value="298"><span>นาจะหลวย</span></li>
                                                            <li data-li="10" class=" " data-value="313"><span>นาตาล</span></li>
                                                            <li data-li="11" class=" " data-value="312"><span>นาเยีย</span></li>
                                                            <li data-li="12" class=" " data-value="316"><span>น้ำขุ่น</span></li>
                                                            <li data-li="13" class=" " data-value="299"><span>น้ำยืน</span></li>
                                                            <li data-li="14" class=" " data-value="300"><span>บุณฑริก</span></li>
                                                            <li data-li="15" class=" " data-value="305"><span>พิบูลมังสาหาร</span></li>
                                                            <li data-li="16" class=" " data-value="307"><span>โพธิ์ไทร</span></li>
                                                            <li data-li="17" class=" " data-value="303"><span>ม่วงสามสิบ</span></li>
                                                            <li data-li="18" class=" " data-value="292"><span>เมืองอุบลราชธานี</span></li>
                                                            <li data-li="19" class=" " data-value="304"><span>วารินชำราบ</span></li>
                                                            <li data-li="20" class=" " data-value="293"><span>ศรีเมืองใหม่</span></li>
                                                            <li data-li="21" class=" " data-value="315"><span>สว่างวีระวงศ์</span></li>
                                                            <li data-li="22" class=" " data-value="308"><span>สำโรง</span></li>
                                                            <li data-li="23" class=" " data-value="310"><span>สิรินธร</span></li>
                                                            <li data-li="24" class=" " data-value="314"><span>เหล่าเสือโก้ก</span></li>
                                                        </ul>
                                                    </div><label class="inp-plc">เขต/อำเภอ</label><span class="sty-err fh_reg"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp sty-sl col-6 disable ">
                                                <div class="box-select fh_reg"><em class="ic-arr icon-arrow-dropdown "></em><input class="disable elm-inp" type="hidden" name="sub_district" data-vld="select" value="" autocomplete="off">
                                                    <div class="nav-input sty-inp"></div>
                                                    <div class="nav-select " style="visibility: hidden;">
                                                        <ul class="lvl1">
                                                            <li data-li="0" class=" " data-value="โปรดระบุ"><span>โปรดระบุ</span></li>
                                                        </ul>
                                                    </div><label class="inp-plc">แขวง/ตำบล</label><span class="sty-err fh_reg"></span>
                                                </div>
                                            </div>
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp number-only" type="text" name="postcode" data-vld="text" value=""><label class="inp-plc">รหัสไปรษณีย์</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                    </div>
                                    <div class="group">
                                        <h4 class="group-tt fp_med">พิกัดสถานที่</h4>
                                        <div class="group-sub-tt fh_reg">ลากหมุดเพื่อกำหนดพิกัด (กรณีจำเป็นต้องระบุจุดที่ตั้ง)</div>
                                        <div class="btn btn-get-location sty-btn btn-blue fh_med">ใช้ตำแหน่งปัจจุบัน</div>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp fh_med col-12 sty-search "> <span class="ic-l icon-search"></span><input class="sty-inp fh_med elm-inp controls" type="text" name="search" data-vld="search" id="pac-input" value=""><label class="inp-plc">ค้นหา</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                        <div class="inp-row clearfix">
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp " type="text" name="latitude" data-vld="text" value=""><label class="inp-plc">ละติจูด</label><span class="sty-err fh_med"></span></div>
                                            <div class="box-inp fh_med pad-ic col-6 "><input class="sty-inp fh_med elm-inp " type="text" name="longitude" data-vld="text" value=""><label class="inp-plc">ลองจิจูด</label><span class="sty-err fh_med"></span></div>
                                        </div>
                                        <div class="inp-row clearfix">
                                            <div id="map" class="sec-map" data-location="13.758907,100.5383723" data-logo="https://localgovtest.egov.go.th/images/pin.svg" data-callback="initMap"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-footer fh_med">
                                    <div class="inn-btn">
                                        <div class="btn btn-prev" data-prev="1">ย้อนกลับ</div>
                                        <div class="btn btn-next" data-next="3">ต่อไป</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-detail tab-3" data-tab="3">
                        <div class="inn-list">
                            <div class="list-head">
                                <h3 class="list-tt fp_med">เอกสารประกอบ (ถ้ามี)</h3>
                                <div class="list-sub fh_reg">แนบเอกสารเพื่อใช้เป็นหลักฐานประกอบ โดยสามารถ<br class="visible-xs" />แนบไฟล์ประเภทต่างๆ ได้แก่ jpg, jpeg, png, mp4, mp3, <br class="visible-xs" />pdf, ppt, xls และ xlsx ซึ่งขนาดของ<br class="visible-xs" />แต่ละไฟล์ต้องไม่เกิน 5 MB</div>
                            </div>
                            <div class="sec-form">
                                <div class="list-form">
                                    <div class="sec-dropzone">
                                        <div class="block-dropzone block-dropzone-custom">
                                            <div class="dropzone document">
                                                <div class="dz-default dz-message">
                                                    <div class="box-event"> <span class="handle" id="btn-browse-document"><em class="icon icon-upload"></em>
                                                            <div class="btn-style submit fh_med">ลากไฟล์ที่ต้องการมาวางที่นี่ หรือ <span class="bb">คลิกที่นี่เพื่อเลือกไฟล์</span></div>
                                                        </span> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-footer fh_med">
                                    <div class="inn-btn">
                                        <div class="btn btn-prev" data-prev="2">ย้อนกลับ</div>
                                        <div class="btn btn-next" data-next="4">ต่อไป</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-detail tab-4" data-tab="4">
                        <div class="inn-list">
                            <div class="list-head">
                                <h3 class="list-tt fp_med">ตรวจสอบข้อมูลเพื่อส่งเรื่อง</h3>
                                <div class="list-sub fh_reg">หากข้อมูลไม่ถูกต้อง คุณสามารถ<br class="visible-xs" />ย้อนกลับไปแก้ไขได้ในขั้นตอนก่อนหน้า</div>
                            </div>
                            <div class="sec-form">
                                <div class="list-form">
                                    <div class="group info">
                                        <div class="group-head has-btn">
                                            <div class="group-tt fp_med">เรื่องที่ต้องการร้องเรียน</div>
                                            <div class="btn-group btn-edit" data-tab="1"><span class="ic icon-qop"></span><span class="text fh_reg">แก้ไข<span class="hidden-xs">ข้อมูล</span></span></div>
                                        </div>
                                        <div class="group-detail">
                                            <div class="view-row clearfix">
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">ประเภทคำร้อง</div>
                                                    <div class="view-inp fh_med" data-name="petition_type">-</div>
                                                </div>
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">กองที่รับผิดชอบ</div>
                                                    <div class="view-inp fh_med" data-name="responsible">-</div>
                                                </div>
                                            </div>
                                            <div class="view-row clearfix">
                                                <div class="view-box col-12">
                                                    <div class="view-label fh_reg">หัวข้อเรื่อง</div>
                                                    <div class="view-inp fh_med" data-name="topic">-</div>
                                                </div>
                                            </div>
                                            <div class="view-row clearfix">
                                                <div class="view-box col-12">
                                                    <div class="view-label fh_reg">รายละเอียด</div>
                                                    <div class="view-inp fh_med" data-name="detail">-</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="group info">
                                        <div class="group-head has-btn">
                                            <div class="group-tt fp_med">ข้อมูลผู้ร้องเรียน</div>
                                            <div class="btn-group btn-edit" data-tab="1"><span class="ic icon-qop">
                                                </span><span class="text fh_reg">แก้ไข
                                                    <span class="hidden-xs">ข้อมูล</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="group-detail">
                                            <div class="view-row clearfix">
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">ชื่อ-นามสกุล (ภาษาไทย)</div>
                                                    <div class="view-inp fh_med" data-name="prefix-name-lastname">
                                                        -
                                                    </div>
                                                </div>
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">หมายเลขบัตรประชาชน 13 หลัก</div>
                                                    <div class="view-inp fh_med" data-name="id_card">-</div>
                                                </div>
                                            </div>
                                            <div class="view-row clearfix">
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">
                                                        หมายเลขโทรศัพท์มือถือ (เช่น 090 123 4567)
                                                    </div>
                                                    <div class="view-inp fh_med" data-name="mobile_number">-</div>
                                                </div>
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">อีเมล (เช่น john@mail.com)</div>
                                                    <div class="view-inp fh_med" data-name="email">-</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="group info">
                                        <div class="group-head has-btn">
                                            <div class="group-tt fp_med">ที่ตั้ง</div>
                                            <div class="btn-group btn-edit" data-tab="2"><span class="ic icon-qop"></span><span class="text fh_reg">แก้ไข<span class="hidden-xs">ข้อมูล</span></span></div>
                                        </div>
                                        <div class="group-detail">
                                            <div class="view-row clearfix">
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">บ้านเลขที่/หมู่บ้าน/อาคาร</div>
                                                    <div class="view-inp fh_med" data-name="house_number">-</div>
                                                </div>
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">ซอย</div>
                                                    <div class="view-inp fh_med" data-name="alley">-</div>
                                                </div>
                                            </div>
                                            <div class="view-row clearfix">
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">หมูที่</div>
                                                    <div class="view-inp fh_med" data-name="moo">-</div>
                                                </div>
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">ถนน</div>
                                                    <div class="view-inp fh_med" data-name="street">-</div>
                                                </div>
                                            </div>
                                            <div class="view-row clearfix">
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">จังหวัด</div>
                                                    <div class="view-inp fh_med" data-name="province">-</div>
                                                </div>
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">เขต/อำเภอ</div>
                                                    <div class="view-inp fh_med" data-name="district">-</div>
                                                </div>
                                            </div>
                                            <div class="view-row clearfix">
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">แขวง/ตำบล</div>
                                                    <div class="view-inp fh_med" data-name="sub_district">-</div>
                                                </div>
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">รหัสไปรษณีย์</div>
                                                    <div class="view-inp fh_med" data-name="postcode">-</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="group info">
                                        <div class="group-head has-btn">
                                            <div class="group-tt fp_med">พิกัดสถานที่</div>
                                            <div class="btn-group btn-edit" data-tab="2"><span class="ic icon-qop">
                                                </span><span class="text fh_reg">แก้ไข
                                                    <span class="hidden-xs">ข้อมูล</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="group-detail">
                                            <div class="view-row clearfix">
                                                <div class="view-box col-12">
                                                    <div class="view-label fh_reg">ชื่อสถานที่</div>
                                                    <div class="view-inp fh_med" data-name="search">-</div>
                                                </div>
                                            </div>
                                            <div class="view-row clearfix">
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">ละติจูด</div>
                                                    <div class="view-inp fh_med" data-name="latitude">-</div>
                                                </div>
                                                <div class="view-box col-6">
                                                    <div class="view-label fh_reg">ลองจิจูด</div>
                                                    <div class="view-inp fh_med" data-name="longitude">-</div>
                                                </div>
                                            </div>
                                            <div class="view-row clearfix">
                                                <div class="view-box col-12">
                                                    <div class="view-inp fh_med" data-name="map">-</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="group info">
                                        <div class="group-head has-btn">
                                            <div class="group-tt fp_med">รายการเอกสารแนบ</div>
                                            <div class="btn-group btn-edit" data-tab="3"><span class="ic icon-qop"></span><span class="text fh_reg">แก้ไข<span class="hidden-xs">ข้อมูล</span></span></div>
                                        </div>
                                        <div class="group-detail">
                                            <div class="view-row clearfix">
                                                <div class="view-box col-12">
                                                    <div class="view-inp fh_med" data-name="document">-</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-footer fh_med">
                                    <div class="inn-btn">
                                        <div class="btn btn-prev" data-prev="3">ย้อนกลับ</div>
                                        <div class="btn btn-next" data-next="5">ส่งเรื่อง</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-detail tab-5" data-tab="5">
                        <div class="inn-list">
                            <div class="list-head">
                                <h3 class="list-tt fp_med">ทำรายการสำเร็จ</h3>
                                <div class="list-sub fh_reg"></div>
                            </div>
                            <div class="sec-form">
                                <div class="list-form">
                                    <div class="wrap-success fh_reg">
                                        <div class="success-tt fp_med">ส่งคำร้อง/ร้องเรียนเรียบร้อยแล้ว</div>
                                        <div class="box-ic">
                                            <div class="ic icon-check2"></div>
                                        </div>
                                        <div class="desc">
                                            <div class="show-id fh_smb" data-show-id=""></div>
                                            <div class="sub">ทำรายการเรียบร้อยแล้ว คำร้องกำลังดำเนิน การส่งต่อไปยังหน่วยงาน<br class="hidden-xs" />ที่รับผิดชอบ เมื่อดำเนินการแล้วเสร็จ ผู้ยื่นคำร้องจะได้รับ<br class="hidden-xs" />การแจ้งเตือนทางเบอร์โทรศัพท์หรืออีเมล</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-footer fh_med">
                                    <div class="inn-btn">
                                        <div class="btn btn-prev" data-prev="4">กลับสู่หน้าหลัก</div>
                                        <div class="btn print">พิมพ์คำร้องนี้</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</section>
<script type='text/javascript'>
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
<script type="text/javascript">
    function getScript(source, callback) {
        var el = document.createElement('script');
        el.onload = callback;
        el.src = source;
        document.body.appendChild(el);
    }
    var jsMain = 'scriptutility.js';
    var jsName = jsMain.split('.');
    var jsSub = 'scriptutility2.js';
    jsName.pop();
    jsName = jsName.join('.');
    var jsKey = 'main_data_script';
    var isSession = true;
    if (navigator.userAgent.indexOf("Chrome-Lighthouse") > -1) {
        isSession = false;
    } else {
        isSession = true;
    }
    setTimeout(function() {
        document.getElementById('content').style.opacity = '';
        getScript("assets/scriptutility.js", function(data, textStatus, jqxhr) {
            if (jsSub != 'blank') {
                getScript("assets/scriptutility2.js", function(data, textStatus, jqxhr) {});
            }
        });
    }, isSession ? 0 : 3500);
    sessionStorage.setItem(jsKey, jsName);
</script>