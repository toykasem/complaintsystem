<ul class="steps">
    <li data-step="1" class="<?= $status ?> <?= $status === '1' || $status === '2' ||  $status === '3' ||  $status === '4' ? 'active' : '' ?>">
        <span class="step">1</span>
        <span class="title">กำลังดำเนินการ <?php echo $status ?> </span>
    </li>

    <li data-step="2" class="<?= $status ?> <?= $status === '2' ||  $status === '3' ||  $status === '4' ? 'active' : '' ?>">
        <span class="step">2</span>
        <span class="title">อยู่ในสถานะตรวจสอบ</span>
    </li>

    <li data-step="3"  class="<?= $status ?> <?= $status === '3' ||  $status === '4'  ? 'active' : '' ?>">
        <span class="step">3</span>
        <span class="title">ขั้นตอนอนุมัติ</span>
    </li>

    <li data-step="4" class="<?= $status ?> <?= $status === '4'  ? 'active' : '' ?>">
        <span class="step">4</span>
        <span class="title">เสร็จสิ้น</span>
    </li>
</ul>