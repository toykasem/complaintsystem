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

        <link rel="stylesheet" href="<?php echo base_url(); ?>assets/style_info.css" />

    </head>
    <body>
    <div class="page-wrapper">
    <?php isset($menu) ? $this->load->view('menu') : ''  ?>
    <?php $this->load->view($ShowPage) ?>
    <?php isset($menu) ? $this->load->view('footer') : ''  ?>
    </div>
    </body>
   </html>