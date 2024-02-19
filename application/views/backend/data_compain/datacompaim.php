<div class="card shadow-none border mb-3" data-component-card="data-component-card">
    <div class="card-header p-4 border-bottom bg-body">
        <div class="row g-3 justify-content-between align-items-center">
            <div class="col-12 col-md">
                <h4 class="text-body mb-0" data-anchor="data-anchor">ข้อมูลร้องเรียน</h4>
            </div>
        </div>
    </div>
    <div class="card-body p-0">
        <div class="p-4 code-to-copy">
            <div class="table-list" id="advanceAjaxTablecomplian" 
            data-list='{"valueNames":["idcard","firstname","lastname","phonenumber","email","province_th","district_th","supdistrict_th","zip_code","subtopic_name","main_topic"],"filter":{"key":"status"}'>
                <div class="mb-3 " style="margin-right: auto !important;position: relative; font-size: .8rem;">
                    <br />
                    <div  style="display: flex; justify-content: flex-start; flex-direction: column;">
                        <div class="row">
                            <div class="col-md-6 col-6">
                                <label><strong>ค้นหาข้อมูลที่ต้องการ</strong></label>
                                <form class="position-relative" data-bs-toggle="search" data-bs-display="static">
                                    <input class="form-control search-input search form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                                </form>
                            </div>
                            <div class="col-md-6 col-6">
                            <label><strong>ค้นหาสถานะ</strong></label>
                                <div class="col-auto px-3">
                                    <select class="form-select form-select-sm mb-3" data-list-filter="data-list-filter">
                                        <option selected="" value="">ค้นหาสถานะ</option>
                                        <option value="1">รายการยังไม่ได้ตรวจสอบ</option>
                                        <option value="2">อยู่ระหว่างดำเนินการ</option>
                                        <option value="3">รอตรวจสอบ</option>
                                        <option value="4">อนุมัติ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div class="table-responsive scrollbar mb-3">
                    <table class="table table-sm fs-9 mb-0 overflow-hidden">
                        <thead class="text-body">
                            <tr>
                                <th class="sort ps-3 pe-1 align-middle white-space-nowrap" data-sort="row" style="min-width: 4.5rem;">ลำดับ</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 15rem;">ประเภทคำร้อง</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">หัวข้อเรื่อง</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">รายละเอียด</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">ชื่อ-นามสกุล</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">หมายเลขบัตรประชาชน</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">หมายเลขโทรศัพท์มือถือ</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">อีเมล</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">บ้านเลขที่</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">ซอย</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">หมู่ที่</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">ถนน</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">จังหวัด</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">อำเภอ</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">ตำบล</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">รหัสไปรษณีย์</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">สถานะ</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">เอกสาร</th>
                                <th class="sort pe-1 align-middle white-space-nowrap" data-sort="" style="min-width: 12.5rem;">วันที่ร้องเรียน</th>
                            </tr>
                        </thead>
                        <tbody class="list"></tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-center mt-3"><button class="page-link" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
                    <ul class="mb-0 pagination"></ul><button class="page-link pe-0" data-list-pagination="next"><span class="fas fa-chevron-right"> </span></button>
                </div>
            </div>
        </div>
    </div>
</div>
