<!-- <div class="row">
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
</div> -->
<br/>
<hr/>
        <div class="row">
            <div  align="center">
                <div class="step-circle" style="<?= $status === '1' || $status === '2' ||  $status === '3' ||  $status === '4' ? 'background-color:#1bc51b;text-align:center' : '' ?>">
                    <span class="icon-pen" style="font-size: 30px; font-weight: 300;"></span>
                    
                </div>
                <strong class="d-flex justify-content-between " style="flex-direction: column;">ยังไม่ได้ตรวจสอบ</strong>
                <span class="icon-arrow-down" style="font-size: 30px; font-weight: 300;"></span>
        
            </div>
            <div  align="center">
                <div class="step-circle" style=" <?= $status === '2' ||  $status === '3' ||  $status === '4' ? 'background-color:#1bc51b;text-align:center' : '' ?>">
                    <span class="icon-address-book" style="font-size: 30px; font-weight: 300;">
                </div>
                <strong class="d-flex justify-content-between " style="flex-direction: column;">อยู่ระหว่างดำเนินการ</strong>
                <span class="icon-arrow-down" style="font-size: 30px; font-weight: 300;"></span>
            </div>
            <div  align="center">
                <div class="step-circle" style=" <?= $status === '3' ||  $status === '4'  ? 'background-color:#1bc51b;text-align:center' : '' ?>">
                    <span class="icon-folder-open" style="font-size: 30px; font-weight: 300;">
                </div>
                <strong class="d-flex justify-content-between " style="flex-direction: column;">รอตรวจสอบ</strong>
                <span class="icon-arrow-down" style="font-size: 30px; font-weight: 300;"></span>
            </div>
            <div  align="center">
                <div class="step-circle" style=" <?= $status === '4'  ? 'background-color:#1bc51b;text-align:center' : '' ?>">
                    <span class="icon-checkmark" style="font-size: 30px; font-weight: 300;">
                </div>
                <strong class="d-flex justify-content-between " style="flex-direction: column;">อนุมัคิสำเร็จ</strong>
            </div>
        </div>
<style>
    .step-container {
        position: relative;
        text-align: center;
        transform: translateY(-43%);
    }

    .step-circle {
        /* width: 30px;
        height: 30px; */
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #fff;
        border: 2px solid #007bff;
        line-height: 30px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        cursor: pointer;
        /* Added cursor pointer */
    }
</style>