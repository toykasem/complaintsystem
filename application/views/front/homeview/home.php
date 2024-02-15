<section id="get-started" class="padd-section text-center">
    <div class="container">
        <?php foreach ($datadashbord as $dashbord) { ?>
            <div class="row">

                <div class="col-md-3 col-xs-3">
                    <div class="card rounded" data-aos="zoom-in" data-aos-delay="200" style="background: rgb(148,175,215);
                        background: linear-gradient(90deg, rgba(148,175,215,1) 0%, rgba(100,179,226,1) 100%);
                        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;">
                        <div class="card-body" style="color:#fff;text-shadow: 1px 0.5px #000000;">
                            <strong>รายการยังไม่ได้ตรวจสอบ</strong>
                            <h3><strong><?php echo $dashbord->status1 ?></strong></h3>
                            <div>รายการ</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-xs-3">
                    <div class="card rounded" data-aos="zoom-in" data-aos-delay="200" style="background: rgb(215,210,148);
                        background: linear-gradient(90deg, rgba(215,210,148,1) 0%, rgba(226,176,100,1) 100%);
                        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;">
                        <div class="card-body" style="color:#fff; text-shadow: 1px 0.5px #000000;">
                            <strong>อยู่ระหว่างดำเนินการ</strong>
                            <h3><strong><?php echo $dashbord->status2 ?></strong></h3>
                            <div>รายการ</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-xs-3">
                    <div class="card rounded" data-aos="zoom-in" data-aos-delay="200" style="background: rgb(153,148,215);
                        background: linear-gradient(90deg, rgba(153,148,215,1) 0%, rgba(121,100,226,1) 100%);
                        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;">
                        <div class="card-body" style="color:#fff; text-shadow: 1px 0.5px #000000;">
                            <strong>รอตรวจสอบ</strong>
                            <h3><strong><?php echo $dashbord->status3 ?></strong></h3>
                            <div>รายการ</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-xs-3">
                    <div class="card rounded" data-aos="zoom-in" data-aos-delay="200" style="background: rgb(89,166,77);
                         background: linear-gradient(90deg, rgba(89,166,77,1) 0%, rgba(117,201,91,1) 100%);
                         box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;">
                        <div class="card-body" style="color:#fff; text-shadow: 1px 0.5px #000000;">
                            <strong>อนุมัติ</strong>
                            <h3><strong><?php echo $dashbord->status4 ?></strong></h3>
                            <div>รายการ</div>
                        </div>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</section>
<section class="carousel_se_02">
    <div style="margin-top:50px">
        <div class="row">
            <div class="col-sm-12 text-center wow fadeInUp" data-aos="zoom-in">
                <h2>เลือกบริการที่คุณต้องการ</h2>
            </div>
            <br />
            <div class="col-md-12 px-4 pt-0" style="margin-top:50px">
                <div class="owl-carousel carousel_se_02_carousel owl-theme">
                    <div class="item">
                        <div style="padding:20px">
                            <a class="ls " href="<?php echo site_url('onestopservice') ?>">
                                <div class="card   rounded" data-aos="zoom-out" data-aos-delay="200" style="background: rgb(150,157,149);
                                  background: linear-gradient(90deg, rgba(150,157,149,0) 0%, rgba(142,153,139,0.227328431372549) 100%);
                                  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 
                                  0px 1px 0px inset;">
                                    <div class="card-body" style="background-color: initial;">
                                        <div class="">
                                            <div class="product-image3 hover15">
                                                <img src="assets/image/complaint-form.jpg" alt="ศูนย์บริการจุดเดียวเบ็ดเสร็จ" class="img-fluid  rounded">
                                                <div class="overlay">
                                                    <h5 class="text-white">ศูนย์บริการจุดเดียวเบ็ดเสร็จ</h5>
                                                    <strong class="text-white">บริการยื่นคำร้อง/ร้องเรียน และติดตามผล</strong>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="item">
                        <div style="padding:20px">
                            <a class="ls " href="<?php echo site_url('indextestmodel') ?>">
                                <div class="card  rounded" data-aos="zoom-in" data-aos-delay="200" style="background: rgb(150,157,149);
                                  background: linear-gradient(90deg, rgba(150,157,149,0) 0%, rgba(142,153,139,0.227328431372549) 100%);
                                  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 
                                  0px 1px 0px inset;">
                                    <div class="card-body" style="background-color: initial;padding:-10px">
                                        <div class="">
                                            <div class="product-image3 hover15">
                                                <img src="assets/image/service_2.jpg" alt="ศูนย์บริการจุดเดียวเบ็ดเสร็จ" class="img-fluid  rounded">
                                                <div class="overlay">
                                                    <h5 class="text-white">ทดสอบ insert update delete</h5>
                                                    <strong class="text-white">บริการยื่นคำร้อง/ร้องเรียน และติดตามผล</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- 3 -->
                    <div class="item">
                        <div style="padding:20px">
                            <div class="card  rounded" data-aos="zoom-out" data-aos-delay="200" style="background: rgb(150,157,149);
                                  background: linear-gradient(90deg, rgba(150,157,149,0) 0%, rgba(142,153,139,0.227328431372549) 100%);
                                  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 
                                  0px 1px 0px inset;">
                                <div class="card-body" style="background-color: initial;">
                                    <div class="">
                                        <div class="product-image3 hover15">
                                            <img src="assets/image/coming-soon.jpg" alt="ศูนย์บริการจุดเดียวเบ็ดเสร็จ" class="img-fluid  rounded">
                                            <div class="overlay">
                                                <h5 class="text-white">comming soon</h5>
                                                <strong class="text-white">comming soon</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
</section>
<br />
<br />
<br />
<style>
    .hover15 {
        position: relative;
        width: 100%;
        height: auto;
        padding: 0px !important;
        overflow: hidden;

    }

    .hover15::before {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        display: block;
        content: '';
        width: 0;
        height: 0;
        background: rgba(244, 229, 172, .4);
        border-radius: 100%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    .hover15:hover::before {
        -webkit-animation: circle .75s;
        animation: circle .75s;
    }

    .hover15 img {
        transition: all .3s;
    }

    .hover15:hover img {
        transform: scale(1.2);
    }

    .product-image3 {
        text-align: center;
        margin-bottom: 15px;
    }

    .product-image3 img {
        max-width: 100%;
        height: auto;
        display: inline-block;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        /* justify-content: center;
        align-items: center; */
        flex-direction: column;
        justify-content: flex-end;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .card-body:hover .overlay {
        opacity: 1;
    }

    .overlay h5 {
        color: #fff;
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
        padding: 10px;
    }
</style>