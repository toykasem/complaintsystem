<div class="row">
    <div class="col-md-3">
        <div class="card" style="<?= $status === '1' || $status === '2' ||  $status === '3' ||  $status === '4' ? 'background-color:#1bc51b;text-align:center' : '' ?>">
        <div class="card-body">
            <span class="title">1. กำลังดำเนินการ </span>
            <span class="icon-arrow-right"></span>
        </div>
        </div>
    </div>
    <div class="col-md-3">
        
        <div class="card" style=" <?= $status === '2' ||  $status === '3' ||  $status === '4' ? 'background-color:#1bc51b;text-align:center' : '' ?>">
        <div class="card-body">
            <span class="title">2. อยู่ในสถานะตรวจสอบ</span>
            <span class="icon-arrow-right"></span>
        </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card" style=" <?= $status === '3' ||  $status === '4'  ? 'background-color:#1bc51b;text-align:center' : '' ?>">
        <div class="card-body">
            <span class="title">3. ขั้นตอนอนุมัติ</span>
            <span class="icon-arrow-right"></span>
        </div>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card" style=" <?= $status === '4'  ? 'background-color:#1bc51b;text-align:center' : '' ?>">
        <div class="card-body">
            <span class="title">4. เสร็จสิ้น</span>
            <span class="icon-arrow-right"></span>
        </div>
        </div>
    </div>
</div>