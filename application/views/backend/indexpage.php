<!DOCTYPE html>
<html data-navigation-type="default" data-navbar-horizontal-shape="default" lang="en-US" dir="ltr">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ร้องเรียน</title>
     <link rel="apple-touch-icon" sizes="180x180" href="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/img/favicons/favicon-16x16.png">
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/img/assets/img/favicons/favicon.png"> 
    <link rel="manifest" href="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/img/favicons/manifest.json">
    <meta name="msapplication-TileImage" content="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/img/favicons/mstile-150x150.png">
    <meta name="theme-color" content="#ffffff">
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/imagesloaded/imagesloaded.pkgd.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/simplebar/simplebar.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/js/config.js"></script>


    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&amp;display=swap" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/simplebar/simplebar.min.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/css/theme-rtl.min.css" type="text/css" rel="stylesheet" id="style-rtl">
    <link href="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/css/theme.min.css" type="text/css" rel="stylesheet" id="style-default">
    <link href="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/css/user-rtl.min.css" type="text/css" rel="stylesheet" id="user-style-rtl">
    <link href="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/css/user.min.css" type="text/css" rel="stylesheet" id="user-style-default">
    <script>
        var complianIsRTL = window.config.config.complianIsRTL;
        if (complianIsRTL) {
            var linkDefault = document.getElementById('style-default');
            var userLinkDefault = document.getElementById('user-style-default');
            linkDefault.setAttribute('disabled', true);
            userLinkDefault.setAttribute('disabled', true);
            document.querySelector('html').setAttribute('dir', 'rtl');
        } else {
            var linkRTL = document.getElementById('style-rtl');
            var userLinkRTL = document.getElementById('user-style-rtl');
            linkRTL.setAttribute('disabled', true);
            userLinkRTL.setAttribute('disabled', true);
        }
    </script>
    <link href="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/leaflet/leaflet.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/leaflet.markercluster/MarkerCluster.css" rel="stylesheet">
    <link href="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/leaflet.markercluster/MarkerCluster.Default.css" rel="stylesheet">
</head>

<body>
    <main class="main" id="top">
        <?php $this->load->view('backend/menu') ?>
        <div class="content">
            <?php $this->load->view($ShowPage) ?>
        </div>
        <?php $this->load->view('backend/footer') ?>
    </main>
    <?php $this->load->view('backend/configcustom') ?>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/popper/popper.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/bootstrap/bootstrap.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/anchorjs/anchor.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/is/is.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/fontawesome/all.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/lodash/lodash.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/list.js/list.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/feather-icons/feather.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/dayjs/dayjs.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/js/complian.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/echarts/echarts.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/leaflet/leaflet.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/leaflet.markercluster/leaflet.markercluster.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/vendors/leaflet.tilelayer.colorfilter/leaflet-tilelayer-colorfilter.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/cssbackend/themecss/assets/js/ecommerce-dashboard.js"></script>
</body>

</html>