<section id="content" style="background: rgb(140,140,254);
background: radial-gradient(circle, rgba(140,140,254,0.16600143475358897) 0%, rgba(202,204,222,1) 100%);">
    <div class="content-main">
        <h1 class="hide-ghost">หน้าแรก</h1>
        <div class="wrap-body">
            <div id="wrap-statistics" class="wrap-st">
                <div class="wrap-inn">
                    <div class="ctn-tp">
                        <h2 class="fp_med">ทดสอบ</h2>
                    </div>
                    <div class="ctn-ct">
                        <div class="ls">
                            <h3 class="fh_reg">dashbord1</h3>
                            <h4 class="fp_med">0</h4>
                            <div class="time fh_reg">31/01/2024</div>
                        </div>
                        <div class="ls">
                            <h3 class="fh_reg">dashbord2</h3>
                            <h4 class="fp_med">0</h4>
                        </div>
                        <div class="ls">
                            <h3 class="fh_reg">dashbord3</h3>
                            <h4 class="fp_med">0</h4>
                        </div>
                        <div class="ls">
                            <h3 class="fh_reg">dashbord4</h3>
                            <h4 class="fp_med">0</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div id="wrap-service" class="wrap-st">
                <div class="wrap-inn">
                    <div class="ctn-tp">
                        <h2 class="fp_med">เลือกบริการที่คุณต้องการ</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="ctn-ct">
                                <a class="ls " href="<?php echo site_url('onestopservice') ?>">
                                    <div class="bx-img">
                                        <picture>
                                            <source srcset="assets/image/service_2.webp" type="image/webp"><img src="service_2.jpg" alt="ศูนย์บริการจุดเดียวเบ็ดเสร็จ">
                                        </picture>
                                    </div>
                                    <div class="bx-detail">
                                        <h3 class="fh_smb">ศูนย์บริการจุดเดียวเบ็ดเสร็จ</h3>
                                        <h4 class="fh_smb">บริการยื่นคำร้อง/ร้องเรียน และติดตามผล</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="ctn-ct">
                                <a class="ls " href="<?php echo site_url('indextestmodel') ?>">
                                    <div class="bx-img">
                                        <picture>
                                            <source srcset="assets/image/service_2.webp" type="image/webp"><img src="service_2.jpg" alt="ศูนย์บริการจุดเดียวเบ็ดเสร็จ">
                                        </picture>
                                    </div>
                                    <div class="bx-detail">
                                        <h3 class="fh_smb">ทดสอบ insert update delete </h3>
                                        <h4 class="fh_smb">บริการยื่นคำร้อง/ร้องเรียน และติดตามผล</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    loadcss('assets/home_style_last.css', 'last');
    loadcss('assets/home_style_frist.css', 'first');
</script>