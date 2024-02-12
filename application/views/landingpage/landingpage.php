    <div class="page-wrapper">
        <section id="content" class="login" style="padding-top: 0px;">
            <div class="landing_page">
                <div class="content">
                    <div class="head">
                        <div class="logo-box">
                            <img class="logo" src="assets/image/facebook.png" alt="logo" width="110" height="51" />
                            <img class="logo" src="assets/image/youtube.png" alt="logo_dgp" width="145" height="60" />
                        </div>
                        <h1 class="h-desc fp_med">หน้าแรกระบบ</h1>
                    </div>
                    <div class="box-all">
                        <div class="box-item">
                            <div class="box-content">
                                <div class="bc-l">
                                    <h2 class="box-title fp_med">สำหรับประชาชน</h2>
                                    <div class="box-desc fh_reg">
                                        ให้คุณได้ยื่นคำร้อง/ร้องเรียน หรือขอใช้บริการต่างๆ
                                        <br class="hidden-xs" />จากหน่วยงานของคุณ
                                        ผ่านระบบออนไลน์ได้อย่างง่ายดาย
                                    </div>
                                </div>
                                <div class="bc-r">
                                    <!-- <a class="sty-btn btn-blue" href="<ฝ?php echo site_url('informationoffice') ?>"> -->
                                    <a class="sty-btn btn-blue" href="<?php echo site_url('homeview') ?>">
                                   
                                        <div class="fh_med">เข้าหน้าระบบเพื่อร้องเรียน</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="box-item">
                            <div class="box-content">
                                <div class="bc-l">
                                    <h2 class="box-title fp_med">สำหรับเจ้าหน้าที่</h2>
                                    <div class="box-desc fh_reg">
                                        ให้คุณเข้าถึงระบบจัดการคำร้อง/ร้องเรียน หรือคำขอ
                                        <br class="hidden-xs" />ใช้บริการต่างๆ จากประชาชน
                                        ได้สะดวกกว่าเดิม
                                    </div>
                                </div>
                                <div class="bc-r">
                                    <a class="sty-btn btn-blue" href="<?php echo site_url('login') ?>">
                                        <div class="fh_med">เข้าสู่ระบบ</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="box-ck" class="ck-p fh_reg" style="display: none">
            <div class="w-ck">
                <div class="txt_ck fh_reg">
                    เราใช้คุกกี้เพื่อพัฒนาประสิทธิภาพ
                    และประสบการณ์ที่ดีในการใช้เว็บไซต์ของคุณ โดยการเข้าใช้งานเว็บไซต์นี้
                    ถือเป็นการยอมรับใน
                    <a class="fh_smb" href="privacy-policy.html">นโยบายสิทธิส่วนบุคคล</a>
                </div>
                <div class="btn_ck">
                    <button class="ck-btn ck-agree btn sty-a">
                        <span class="lb fh_smb">ยอมรับและใช้งานต่อ</span>
                    </button>
                </div>
            </div>
        </div>
    </div>


<script type="text/javascript">
        function loadcss(url, last) {
            var head = document.getElementsByTagName("head")[0],
                link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = url;
            if (last == "first") {
                link.onload = callbackFunc;
            }
            head.appendChild(link);
            return link;
        }
        var callbackFunc = function() {
            document.getElementsByTagName("body")[0].style.opacity = "1";
        };

        loadcss(
            "<?php echo base_url(); ?>assets/stylebackground.css",
            "first"
        );
    </script>
