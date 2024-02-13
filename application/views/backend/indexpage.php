<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Modernize Free</title>
    <link rel="shortcut icon" type="image/png" href="<?php echo base_url(); ?>/assets/images/logos/favicon.png" />
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/cssbackend/css/styles.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css"/>
	<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
	
</head>

<body>
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

        <?php $this->load->view('backend/menu')  ?>
        <div class="body-wrapper">
        <?php $this->load->view('backend/header')  ?>
        <div class="container-fluid">
            <?php $this->load->view($ShowPage) ?>
        </div>
        </div>
    </div>
    <script src="<?php echo base_url(); ?>/assets/cssbackend/libs/jquery/dist/jquery.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/cssbackend/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/cssbackend/js/sidebarmenu.js"></script>
    <script src="<?php echo base_url(); ?>/assets/cssbackend/js/app.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/cssbackend/libs/apexcharts/dist/apexcharts.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/cssbackend/libs/simplebar/dist/simplebar.js"></script>
    <script src="<?php echo base_url(); ?>/assets/cssbackend/js/dashboard.js"></script>
</body>

</html>