<!DOCTYPE html>
<html lang="th">

<head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title><?php echo $title ?></title>
    <meta name="title" content="ค้นหา ระบบทดสอบ" />
    <meta name="description" content="ระบบทดสอบ" />
    <meta name="keywords" content="ระบบทดสอบ" />
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/cssfront/style.css" />
    <link href="<?php echo base_url(); ?>assets/cssfront/other_css/aos/aos.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/cssfront/other_css/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/cssfront/other_css/icomoon/style.css">
    <link href="<?php echo base_url(); ?>assets/cssfront/other_css/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/cssfront/other_css/swiper/swiper-bundle.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/cssfront/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/cssfront/css/sweetalert.css" />
    <script src="<?php echo base_url(); ?>assets/cssfront/js/sweetalert.js"></script>
    <link href="<?php echo base_url(); ?>assets/cssfront/other_css/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
    <script src="<?php echo base_url(); ?>assets/cssfront/other_css/owl.carousel/jquery/jquery.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssfront/other_css/owl.carousel/owl.carousel.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssfront/other_css/owl.carousel/carausol_slider.js"></script>

    <style>
        .logo-footer {
            width: 25%;
        }

        @media only screen and (max-width: 1200px) {
            .font_view {
                font-size: small;
            }

            .logo-footer {
                width: 25%;
            }
        }

        @media only screen and (max-width: 992px) {
            .font_view {
                font-size: 10px;
            }

            .logo-footer {
                width: 20%;
            }
        }

        @media only screen and (max-width: 767px) {
            .font_view {
                font-size: small;
            }

            .logo-footer {
                width: 10%;
            }
        }
    </style>
</head>
<?php if (isset($landing)) : ?>

    <body style="background: rgb(169,157,230);
background: radial-gradient(circle, rgba(169,157,230,1) 0%, rgba(175,178,213,1) 46%, rgba(124,139,223,1) 100%);">
    <?php else : ?>

        <body>
        <?php endif; ?>

        <?php isset($menu) ? $this->load->view('front/menu') : ''  ?>
        <main id="main">
            <?php $this->load->view($ShowPage) ?>
            <?php isset($menu) ? $this->load->view('front/footer') : ''  ?>
        </main>
        </body>
        <script src="<?php echo base_url(); ?>assets/cssfront/other_css/aos/aos.js"></script>
        <script src="<?php echo base_url(); ?>assets/cssfront/other_css/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="<?php echo base_url(); ?>assets/cssfront/other_css/glightbox/js/glightbox.min.js"></script>
        <script src="<?php echo base_url(); ?>assets/cssfront/other_css/swiper/swiper-bundle.min.js"></script>
        <script src="<?php echo base_url(); ?>assets/cssfront/other_css/php-email-form/validate.js"></script>
        <script src="<?php echo base_url(); ?>assets/cssfront/js/main.js"></script>
        <script src="<?php echo base_url(); ?>assets/cssfront/css/bootstrap.min.js"></script>
        <script src="<?php echo base_url(); ?>assets/cssfront/css/jquery-3.6.0.min.js"></script>
        <script src="<?php echo base_url(); ?>assets/cssfront/css/jquery.validate.min.js"></script>

</html>