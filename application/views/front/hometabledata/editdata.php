   <div class="modal-content">
       <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal">&times;</button>
           <h4 class="modal-title">แกไข้ข้อมูล</h4>
       </div>
       <div class="modal-body">
           <form method="post" action="<?php echo base_url() ?>Controllerdata/form_validation">
               <?php
                foreach ($user_data as $row) {
                ?>
                   <div class="form-group">
                       <label>Enter First Name</label>
                       <input type="text" name="first_name" value="<?php echo $row->frist_name; ?>" class="form-control" />
                       <span class="text-danger">
                           <?php echo form_error("first_name"); ?>
                       </span>
                   </div>
                   <div class="form-group">
                       <label>Enter Last Name</label>
                       <input type="text" name="last_name" value="<?php echo $row->last_name; ?>" class="form-control" />
                       <span class="text-danger">
                           <?php echo form_error("last_name"); ?>
                       </span>
                   </div>
                   <div class="form-group">
                       <input type="hidden" name="hidden_id" value="<?php echo $row->id; ?>" />
                       <input type="submit" name="update" value="Update" class="btn btn-info" />
                   </div>
               <?php
                }
                ?>
           </form>
       </div>

   </div>