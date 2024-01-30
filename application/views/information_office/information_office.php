
  <div class="page-wrapper">
    <section >
      <div class="wrap-page">
        <div class="content-list">
          <div class="content-item">
            <div class="box-cc">
              <div class="wrap-bg"></div>
              <div class="top">
                <div class="logo-box">
                  <img class="logo" src="assets/image/facebook.png" alt="logo" width="110" height="51" />
                  <img class="logo" src="assets/image/youtube.png" alt="logo_dgp" width="145" height="60" />
                </div>
                <div class="tt fp_med">ระบบทดสอบ</div>
              </div>
            </div>
          </div>
          <div class="content-item">
            <div class="cc">
              <form id="form_municipal" method="post" class="form-cm sty-form mb-mrg" onsubmit="return false;">
                <div class="ctn-inp ctn-search">
                  <h2 class="title fp_med hidden-xs">พิมพ์คำค้นหาหน่วยงาน</h2>
                  <h2 class="title fp_med visible-xs">
                    พิมพ์คำค้นหาหน่วยงานที่ต้องการ
                  </h2>
                  <div class="wrap-search">
                    <div class="box-inp fh_reg sty-search">
                      <input class="sty-inp fh_reg required" type="search" name="search" autocomplete="off" />
                      <label class="inp-plc">พิมพ์ชื่อหน่วยงาน อำเภอหรือตำบลที่นี่...</label>
                      <span class="sty-err fh_med"></span>
                    </div>
                    <div class="wrap-sugged" style="display: none">
                      <ul class="lists-sugged fh_reg"></ul>
                    </div>
                  </div>
                </div>
                <div class="ctn-inp ctn-area">
                  <h2 class="title fp_med">หรือเลือกจากพื้นที่</h2>
                  <div class="wrap-inp clearfix">
                    <div class="box-inp sty-sl col-6-all col-sl-search">
                      <div class="box-select fh_reg">
                        <em class="ic-arr icon-arrow-dropdown"></em>
                        <input type="hidden" name="pp_province" data-vld="select" value="" autocomplete="off" />
                        <div class="nav-input sty-inp"></div>
                        <div class="nav-select nav-search" style="visibility: hidden;">
                          <div class="inp-box-serch">
                            <input class="search-province input-lib fh_reg" type="search" name="keyword_province" onkeyup="filterProvince()" placeholder="ค้นหาชื่อจังหวัด" />
                          </div>
                        </div>
                        <label class="inp-plc">จังหวัด</label>
                        <span class="sty-err fh_reg"></span>
                      </div>
                    </div>
                    <div class="box-inp sty-sl col-6-all col-sl-search disable">
                      <div class="box-select fh_reg">
                        <em class="ic-arr icon-arrow-dropdown"></em><input class="" type="hidden" name="pp_district" data-vld="text" value="" autocomplete="off" />
                        <div class="nav-input sty-inp"></div>
                        <div class="nav-select nav-search" style="visibility: hidden">
                          <div class="inp-box-serch">
                            <input class="search-district input-lib fh_reg" type="search" name="keyword_district" onkeyup="filterDistrict()" placeholder="ค้นหาชื่ออำเภอ" />
                          </div>
                          <ul class="lvl1"></ul>
                        </div>
                        <label class="inp-plc">อำเภอ/เขต</label><span class="sty-err fh_reg"></span>
                      </div>
                    </div>
                    <div class="box-inp sty-sl col-12-all has-icon">
                      <div class="box-select fh_reg">
                        <em class="ic-arr icon-arrow-dropdown"></em><input class="" type="hidden" name="pp_municipality" data-vld="text" value="" autocomplete="off" />
                        <div class="nav-input sty-inp"></div>
                        <div class="nav-select" style="visibility: hidden">
                          <ul class="lvl1"></ul>
                        </div>
                        <label class="inp-plc">เลือกหน่วยงาน</label><span class="sty-err fh_reg"></span>
                      </div>
                    </div>
                  </div>
                  <div align="center">
                  <a type="button" class="sty-btn btn-blue" href="<?php echo site_url('homeview') ?>" >ค้นหา</a>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="box-ck" class="ck-p fh_reg" style="display: none">
      <div class="w-ck">
        <div class="txt_ck fh_reg">
          เราใช้คุกกี้เพื่อพัฒนาประสิทธิภาพ
          และประสบการณ์ที่ดีในการใช้เว็บไซต์ของคุณ โดยการเข้าใช้งานเว็บไซต์นี้
          ถือเป็นการยอมรับใน
          <a class="fh_smb" href="privacy-policy.html">นโยบายสิทธิส่วนบุคคล</a>
        </div>
        <div class="btn_ck">
          <button class="ck-btn ck-agree btn sty-a">
            <span class="lb fh_smb">ยอมรับและใช้งานต่อ</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <script type="text/javascript">
    function loadcss(url, last) {
      var head = document.getElementsByTagName("head")[0],
        link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = url;
      if (last == "first") {
        link.onload = callbackFunc;
      }
      head.appendChild(link);
      return link;
    }
    var callbackFunc = function() {
      document.getElementsByTagName("body")[0].style.opacity = "1";
    };

    loadcss(
      "<?php echo base_url(); ?>assets/stylelast_backgroundpage_info.css",
      "last"
    );
    loadcss(
      "<?php echo base_url(); ?>assets/stylefrist_backgroundpage_info.css",
      "first"
    );
  </script>
