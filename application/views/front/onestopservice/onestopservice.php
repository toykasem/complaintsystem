<section id="content" style="background: rgb(140,140,254);
background: radial-gradient(circle, rgba(140,140,254,0.16600143475358897) 0%, rgba(202,204,222,1) 100%);">
    <div class="page-one-service page-sty">
        <div class="inn-page">
            <h1 class="tt-page fp_med">ศูนย์บริการจุดเดียวเบ็ดเสร็จ</h1>
            <div class="detail has-3">
                <div class="block-services fp_reg">
                    <div class="block-service"><a class="link-service" href="<?php echo site_url('complaint') ?>" style="background-color: #AFACC0 ;">
                            <div class="box-ic"><span class="ic icon-libreoffice"></span></div>
                            <h2 class="text">แจ้งคำร้อง<br />/ร้องเรียน</h2>
                        </a></div>
                    <div class="block-service"><a class="link-service" href="<?php echo site_url('checkclaim') ?>" style="background-color: #AFACC0 ;">
                            <div class="box-ic"><span class="ic icon-clipboard"></span></div>
                            <h2 class="text">ตรวจสอบ<br />ผลดำเนินการ</h2>
                        </a></div>
                    <div class="block-service"><a class="link-service" href="#" style="background-color: #AFACC0 ;">
                            <div class="box-ic"><span class="ic icon-clipboard"></span></div>
                            <h2 class="text">ประเมินความพึงพอใจ<br />ในการบริการ</h2>
                        </a></div>
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