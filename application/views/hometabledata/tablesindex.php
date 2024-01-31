<section id="content" style="background: rgb(140,140,254);
background: radial-gradient(circle, rgba(140,140,254,0.16600143475358897) 0%, rgba(202,204,222,1) 100%);">
    <div class="content-main">
        <div class="container">
            <br /><br /><br />
            <h3 align="center">Insert Update Delete ข้อมูล</h3><br />
            <?php
// Retrieve flashdata and display alert
$error_message = $this->session->flashdata('error_message');
if ($error_message) {
    echo "<script>alert('$error_message')</script>";
}
?>
            <form method="post" action="<?php echo base_url() ?>Controllerdata/form_validation" >
                <?php
                if (isset($user_data)) {
                    foreach ($user_data as $row) {
                ?>
                        <div class="form-group">
                            <label>Enter First Name</label>
                            <input type="text" name="first_name" value="<?php echo $row->frist_name; ?>" class="form-control" />
                            <span class="text-danger"><?php echo form_error("first_name"); ?></span>
                        </div>
                        <div class="form-group">
                            <label>Enter Last Name</label>
                            <input type="text" name="last_name" value="<?php echo $row->last_name; ?>" class="form-control" />
                            <span class="text-danger"><?php echo form_error("last_name"); ?></span>
                        </div>
                        <div class="form-group">
                            <input type="hidden" name="hidden_id" value="<?php echo $row->id; ?>" />
                            <input type="submit" name="update" value="Update" class="btn btn-info" />
                        </div>
                    <?php
                    }
                } else {
                    ?>
                    <div class="form-group">
                        <label>Enter First Name</label>
                        <input type="text" name="first_name" class="form-control" />
                        <span class="text-danger"><?php echo form_error("first_name"); ?></span>
                    </div>
                    <div class="form-group">
                        <label>Enter Last Name</label>
                        <input type="text" name="last_name" class="form-control" />
                        <span class="text-danger"><?php echo form_error("last_name"); ?></span>
                    </div>
                    <div class="form-group">
                        <input type="submit" name="insert" value="Insert" class="btn btn-info" />
                    </div>
                <?php
                }
                ?>
            </form>
            <br /><br />
            <h3>ข้อมูล</h3><br />
            <div class="table-responsive">
                <table class="table table-bordered" style="border: 1px; border-style: solid; border-color: black; background:white">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($table_test as $row) { ?>
                            <tr>
                                <td><?php echo $row->row ?></td>
                                <td><?php echo $row->frist_name ?></td>
                                <td><?php echo $row->last_name ?></td>
                                <td><?php echo $row->savedate ?></td>
                                <td><a href="#" class="delete_data" id="<?php echo $row->id ?>">Delete</a></td>
                                <td><a href="<?php echo base_url(); ?>Controllerdata/update_data/<?php echo $row->id ?>">Edit</a></td>
                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
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

    $(document).ready(function() {
        $('.delete_data').click(function() {
            var id = $(this).attr("id");
            if (confirm("Are you sure you want to delete this?")) {
                window.location = "<?php echo base_url(); ?>Controllerdata/delete_data/" + id;
            } else {
                return false;
            }
        });
    });

</script>
</div>