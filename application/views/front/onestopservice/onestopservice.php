<section id="get-started" class="padd-section text-center" style="margin-top:150px;margin-bottom:200px">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center mb-5">ศูนย์บริการจุดเดียวเบ็ดเสร็จ</h1>
                <div class="row">
                    <div class="col-sm-4">
                        <a href="<?php echo site_url('complaint') ?>">
                            <div class="card " style="background: rgb(169,157,230);
background: radial-gradient(circle, rgba(169,157,230,1) 0%, rgba(175,178,213,1) 46%, rgba(124,139,223,1) 100%);box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;">
                                <div class="card-body">
                                    <span class="card-title icon-file-text" style="font-size:40px"></span>
                                    <h4 class="card-text">แจ้งคำร้องร้องเรียน</h4><br />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <a href="<?php echo site_url('checkclaim') ?>">
                            <div class="card " style="background: rgb(169,157,230);
background: radial-gradient(circle, rgba(169,157,230,1) 0%, rgba(175,178,213,1) 46%, rgba(124,139,223,1) 100%);box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;">
                                <div class="card-body">
                                    <span class="card-title icon-search" style="font-size:40px"></span>
                                    <h4 class="card-text">ตรวจสอบ<br />ผลดำเนินการ</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <a href="#">
                            <div class="card " style="background: rgb(169,157,230);
background: radial-gradient(circle, rgba(169,157,230,1) 0%, rgba(175,178,213,1) 46%, rgba(124,139,223,1) 100%);box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;">
                                <div class="card-body">
                                    <span class="card-title icon-smile" style="font-size:40px"></span>
                                    <h4 class="card-text">ประเมินความพึงพอใจ<br />ในการบริการ</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<style>
    .card {
        transition: transform 0.3s ease;
    }

    .card:hover {
        transform: translateY(-10px);
        /* Adjust the amount of translation as needed */
    }

    .card-body {
        background-color: #f8f9fa;
        /* Example background color */
        padding: 20px;
        text-align: center;
        border-radius: 5px;
    }
</style>