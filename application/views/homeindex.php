<!DOCTYPE html>
<htmllang="th">

    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />

    <head>
        <meta charset="UTF-8" />
        <base />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title><?php echo $title ?></title>
        <meta name="title" content="ค้นหา ระบบทดสอบ" />
        <meta name="description" content="ระบบทดสอบ" />
        <meta name="keywords" content="ระบบทดสอบ" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;800&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&amp;display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="<?php echo base_url(); ?>assets/bootstrap/bootstrap.css" />
        <!-- <script src="</?php echo base_url(); ?>assets/bootstrap/jquery.min.js"></script>
        <script src="</?php echo base_url(); ?>assets/bootstrap/bootstrap.min.js"></script> -->
        <!-- <link rel="stylesheet" href="assets/css/ace-part2.min.css" class="ace-main-stylesheet" /> -->
        <script src="<?php echo base_url(); ?>assets/jquery/jquery.min.js"></script>
        <link rel="stylesheet" href="<?php echo base_url(); ?>assets/sweetalert.css" />
        <script src="<?php echo base_url(); ?>assets/sweetalert.js"></script>
        <link rel="stylesheet" href="<?php echo base_url(); ?>assets/style_info.css" />
        <link rel="stylesheet" href="assets/css/ace.min.css" class="ace-main-stylesheet" id="main-ace-style" />
        <link rel="stylesheet" href="assets/css/ace-skins.min.css" />
        <link rel="stylesheet" href="assets/css/ace-rtl.min.css" />
        <link rel="stylesheet" href="assets/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="<?php echo base_url(); ?>assets/bootstrap/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        .js"></script>

    </head>

    <body>
        <div class="page-wrapper">
            <?php isset($menu) ? $this->load->view('menu') : ''  ?>
            <?php $this->load->view($ShowPage) ?>
            <?php isset($menu) ? $this->load->view('footer') : ''  ?>
        </div>
    </body>

    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/wizard.min.js"></script>
    <script src="assets/js/jquery.validate.min.js"></script>
    <script src="assets/js/jquery-additional-methods.min.js"></script>
    <script src="assets/js/bootbox.js"></script>
    <script src="assets/js/jquery.maskedinput.min.js"></script>
    <script src="assets/js/select2.min.js"></script>
    <script src="assets/js/ace-elements.min.js"></script>
    <script src="assets/js/ace.min.js"></script>

    </html>