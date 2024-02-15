<!DOCTYPE html>
<html lang="th">
<head>
    <<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
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
    <!-- <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'> -->
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


</head>
<?php if (isset($landing)) : ?>

    <body style="background: rgb(17,187,241);background: linear-gradient(90deg, rgba(17,187,241,1) 0%, rgba(230,251,255,1) 100%);">
    <?php else : ?>

        <body style="background: rgb(216,216,249);
background: linear-gradient(90deg, rgba(216,216,249,1) 0%, rgba(158,169,184,1) 50%, rgba(255,243,227,1) 100%);">
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>




</html>