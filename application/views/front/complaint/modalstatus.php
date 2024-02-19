<div class="modal-content">
	<div class="modal-header">
		<div style="text-align:center">
		
		</div>
		<a type="button" class="close" style="font-size: 20px;color:red; font-weight:900" data-dismiss="modal">&times;</a>

	</div>
	<div class="modal-body">
		<section class="py-5">
			<div class="container">
				<div class="row justify-content-center text-center mb-4">
					<div class="col-lg-8 col-xxl-7">
						<strong class=" fw-bold" style="font-size: 20px;">สถานะคำร้อง</ห>
					</div>
				</div>
				<div class="row">
					<div class="col-md-3">
						<div class="text-center position-relative">
							<div class="step-icon mx-auto border rounded-circle d-flex align-items-center justify-content-center" style="width:90px;height:90px;<?= $statuscheck[0]->status === '2' ||  $statuscheck[0]->status === '3' ||  $statuscheck[0]->status === '4' ||  $statuscheck[0]->status === '5' ? 'background-color:#1bc51b;text-align:center' : 'background-color:#ecb023;text-align:center' ?>">
								<span class="icon-libreoffice" style="font-size: 30px; font-weight: 300;"></span>
							</div>
							<h4 class="mt-3 fs-5">สถานะ</h4>
							<strong style="font-size:13px;">รับเข้าสู่ระบบ</strong>
							<div class="arrow-icon position-absolute d-none d-lg-block" style="top:26px; right:-25px">
								<span class="icon-arrow-right" style="font-size: 30px; font-weight: 300;"></span>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="text-center position-relative">
							<div class="step-icon mx-auto border rounded-circle d-flex align-items-center justify-content-center" style="width:90px;height:90px;<?= $statuscheck[0]->status === '3' ||  $statuscheck[0]->status === '4' ||  $statuscheck[0]->status === '5' ? 'background-color:#1bc51b;text-align:center' : 'background-color:#ecb023;text-align:center' ?>">
								<span class="icon-file-openoffice" style="font-size: 30px; font-weight: 300;"></span>
							</div>
							<h4 class="mt-3 fs-5">สถานะ</h4>
							<strong style="font-size:13px;">อยู่ระหว่างดำเนินการ</strong>
							<div class="arrow-icon d-none d-lg-block position-absolute" style="top:26px; right:-25px">
								<span class="icon-arrow-right" style="font-size: 30px; font-weight: 300;"></span>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="text-center position-relative">
							<div class="step-icon mx-auto  border rounded-circle d-flex align-items-center justify-content-center" style="width:90px;height:90px;<?= $statuscheck[0]->status === '4' ||  $statuscheck[0]->status === '5' ? 'background-color:#1bc51b;text-align:center' : 'background-color:#ecb023;text-align:center' ?>">
								<span class="icon-stackoverflow" style="font-size: 30px; font-weight: 300;"></span>

							</div>
							<h4 class="mt-3 fs-5">สถานะ</h4>
							<strong style="font-size:13px;">ตรวจสอบ</strong>
							<div class="arrow-icon d-none d-lg-block position-absolute" style="top:26px; right:-25px">
								<span class="icon-arrow-right" style="font-size: 30px; font-weight: 300;"></span>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="text-center position-relative">
							<div class="step-icon mx-auto  border rounded-circle d-flex align-items-center justify-content-center" style="width:90px;height:90px;<?= $statuscheck[0]->status === '5' ? 'background-color:#1bc51b;text-align:center' : 'background-color:#ecb023;text-align:center' ?>">
								<span class="icon-checkmark" style="font-size: 30px; font-weight: 300;"></span>
							</div>
							<h4 class="mt-3 fs-5">สถานะ</h4>
							<strong style="font-size:13px;">อนุมัคิ</strong>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>

</div>
<style>
	.step-circlev2 {
		width: 35px;
		height: 35px;
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
	}
</style>