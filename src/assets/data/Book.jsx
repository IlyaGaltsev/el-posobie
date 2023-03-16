/* eslint-disable react/no-unescaped-entities */
const Book = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div style={{ maxWidth: 700, width: window.innerWidth - 24 }}>
      <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '@import url(\'https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLTi9jKYd1gJzj5O2gWsEpXol-nTHck7FFkZplK5meosG\');.lst-kix_list_2-6>li:before{content:"\\0025cf  "}.lst-kix_list_2-7>li:before{content:"o  "}ul.lst-kix_list_1-0{list-style-type:none}.lst-kix_list_2-4>li:before{content:"o  "}.lst-kix_list_2-5>li:before{content:"\\0025aa  "}.lst-kix_list_2-8>li:before{content:"\\0025aa  "}.lst-kix_list_3-0>li:before{content:"\\002022  "}ul.lst-kix_list_5-7{list-style-type:none}ul.lst-kix_list_5-8{list-style-type:none}.lst-kix_list_3-1>li:before{content:"o  "}.lst-kix_list_3-2>li:before{content:"\\0025aa  "}ul.lst-kix_list_5-5{list-style-type:none}ul.lst-kix_list_3-7{list-style-type:none}ul.lst-kix_list_5-6{list-style-type:none}ul.lst-kix_list_3-8{list-style-type:none}ul.lst-kix_list_1-3{list-style-type:none}ul.lst-kix_list_3-1{list-style-type:none}.lst-kix_list_3-5>li:before{content:"\\0025aa  "}ul.lst-kix_list_5-0{list-style-type:none}ul.lst-kix_list_1-4{list-style-type:none}ul.lst-kix_list_3-2{list-style-type:none}ul.lst-kix_list_1-1{list-style-type:none}.lst-kix_list_3-4>li:before{content:"o  "}ul.lst-kix_list_1-2{list-style-type:none}ul.lst-kix_list_3-0{list-style-type:none}ul.lst-kix_list_5-3{list-style-type:none}ul.lst-kix_list_1-7{list-style-type:none}.lst-kix_list_3-3>li:before{content:"\\0025cf  "}ul.lst-kix_list_3-5{list-style-type:none}ul.lst-kix_list_5-4{list-style-type:none}ul.lst-kix_list_1-8{list-style-type:none}ul.lst-kix_list_3-6{list-style-type:none}ul.lst-kix_list_5-1{list-style-type:none}ul.lst-kix_list_1-5{list-style-type:none}ul.lst-kix_list_3-3{list-style-type:none}ul.lst-kix_list_5-2{list-style-type:none}ul.lst-kix_list_1-6{list-style-type:none}ul.lst-kix_list_3-4{list-style-type:none}.lst-kix_list_3-8>li:before{content:"\\0025aa  "}.lst-kix_list_4-0>li:before{content:"\\002022  "}.lst-kix_list_4-1>li:before{content:"o  "}.lst-kix_list_3-6>li:before{content:"\\0025cf  "}.lst-kix_list_3-7>li:before{content:"o  "}.lst-kix_list_4-4>li:before{content:"o  "}.lst-kix_list_4-3>li:before{content:"\\0025cf  "}.lst-kix_list_4-5>li:before{content:"\\0025aa  "}.lst-kix_list_4-2>li:before{content:"\\0025aa  "}.lst-kix_list_4-6>li:before{content:"\\0025cf  "}.lst-kix_list_5-0>li:before{content:"\\002022  "}.lst-kix_list_4-8>li:before{content:"\\0025aa  "}.lst-kix_list_5-3>li:before{content:"\\0025cf  "}.lst-kix_list_4-7>li:before{content:"o  "}.lst-kix_list_5-2>li:before{content:"\\0025aa  "}.lst-kix_list_5-1>li:before{content:"o  "}ul.lst-kix_list_4-8{list-style-type:none}.lst-kix_list_5-7>li:before{content:"o  "}ul.lst-kix_list_4-6{list-style-type:none}.lst-kix_list_5-6>li:before{content:"\\0025cf  "}.lst-kix_list_5-8>li:before{content:"\\0025aa  "}ul.lst-kix_list_2-8{list-style-type:none}ul.lst-kix_list_4-7{list-style-type:none}ul.lst-kix_list_4-0{list-style-type:none}ul.lst-kix_list_2-2{list-style-type:none}ul.lst-kix_list_4-1{list-style-type:none}.lst-kix_list_1-0>li:before{content:"\\0025cf  "}ul.lst-kix_list_2-3{list-style-type:none}.lst-kix_list_5-4>li:before{content:"o  "}ul.lst-kix_list_2-0{list-style-type:none}ul.lst-kix_list_2-1{list-style-type:none}ul.lst-kix_list_4-4{list-style-type:none}.lst-kix_list_5-5>li:before{content:"\\0025aa  "}ul.lst-kix_list_2-6{list-style-type:none}ul.lst-kix_list_4-5{list-style-type:none}.lst-kix_list_1-1>li:before{content:"o  "}.lst-kix_list_1-2>li:before{content:"\\0025aa  "}ul.lst-kix_list_2-7{list-style-type:none}ul.lst-kix_list_4-2{list-style-type:none}ul.lst-kix_list_2-4{list-style-type:none}ul.lst-kix_list_4-3{list-style-type:none}ul.lst-kix_list_2-5{list-style-type:none}.lst-kix_list_1-3>li:before{content:"\\0025cf  "}.lst-kix_list_1-4>li:before{content:"o  "}.lst-kix_list_1-7>li:before{content:"o  "}.lst-kix_list_1-5>li:before{content:"\\0025aa  "}.lst-kix_list_1-6>li:before{content:"\\0025cf  "}.lst-kix_list_2-0>li:before{content:"\\002022  "}.lst-kix_list_2-1>li:before{content:"o  "}.lst-kix_list_1-8>li:before{content:"\\0025aa  "}.lst-kix_list_2-2>li:before{content:"\\0025aa  "}.lst-kix_list_2-3>li:before{content:"\\0025cf  "}ol{margin:0;padding:0}table td,table th{padding:0}.c2{padding-top:0pt;text-indent:42.5pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:justify;height:11pt}.c1{padding-top:0pt;text-indent:35.5pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:justify}.c8{padding-top:0pt;text-indent:35.5pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:center;height:11pt}.c34{padding-top:2pt;padding-bottom:0pt;line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:center}.c5{padding-top:0pt;text-indent:42.5pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:justify}.c15{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Times New Roman";font-style:normal}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Times New Roman";font-style:normal}.c7{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Times New Roman";font-style:normal}.c32{padding-top:0pt;padding-bottom:10pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:center}.c22{padding-top:0pt;padding-bottom:0pt;line-height:1.0999999999999999;orphans:2;widows:2;text-align:justify}.c17{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:left}.c13{-webkit-text-decoration-skip:none;color:#000000;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-style:normal}.c9{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:justify}.c35{padding-top:0pt;padding-bottom:0pt;line-height:1.0999999999999999;orphans:2;widows:2;text-align:center}.c26{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:center}.c28{font-weight:700;font-size:18pt;font-family:"Times New Roman";font-style:normal}.c27{font-weight:700;font-size:12pt;font-family:"Times New Roman";font-style:normal}.c6{font-size:14pt;font-family:"Times New Roman";font-style:italic;font-weight:400}.c42{font-weight:700;font-size:10pt;font-family:"Times New Roman";font-style:normal}.c31{font-weight:700;font-size:12pt;font-family:"Times New Roman";font-style:italic}.c40{font-weight:400;font-size:11pt;font-family:"Calibri";font-style:normal}.c29{font-weight:700;font-size:11pt;font-family:"Times New Roman";font-style:normal}.c25{font-weight:400;font-size:18pt;font-family:"Times New Roman";font-style:normal}.c24{-webkit-text-decoration-skip:none;text-decoration:underline;text-decoration-skip-ink:none}.c16{color:#000000;text-decoration:none;vertical-align:baseline}.c41{font-size:12pt;font-family:"Times New Roman";font-weight:400}.c10{font-size:14pt;font-family:"Times New Roman";font-weight:400}.c11{font-size:14pt;font-family:"Times New Roman";font-weight:700}.c37{font-size:12pt;font-family:"Times New Roman";font-weight:700}.c4{margin-left:0pt;list-style-position:inside}.c21{color:inherit;text-decoration:inherit}.c20{padding:0;margin:0}.c30{max-width:467.7pt;padding:56.7pt 42.5pt 56.7pt 85pt}.c23{text-indent:35.5pt}.c36{text-indent:36pt}.c14{height:11pt}.c18{background-color:#ffffff}.c19{background-color:#ff00ff}.c33{background-color:#ffff00}.c38{margin-left:35.5pt}.c12{text-indent:42.5pt}.c39{text-indent:-35.5pt}.title{padding-top:24pt;color:#000000;font-weight:700;font-size:36pt;padding-bottom:6pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:18pt;color:#666666;font-size:24pt;padding-bottom:4pt;font-family:"Georgia";line-height:1.1500000000000001;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Calibri"}p{margin:0;color:#000000;font-size:11pt;font-family:"Calibri"}h1{padding-top:24pt;color:#000000;font-weight:700;font-size:24pt;padding-bottom:6pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-weight:700;font-size:18pt;padding-bottom:4pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:2pt;color:#243f61;font-size:12pt;padding-bottom:0pt;font-family:"Cambria";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:12pt;color:#000000;font-weight:700;font-size:12pt;padding-bottom:2pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:11pt;color:#000000;font-weight:700;font-size:11pt;padding-bottom:2pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:10pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:2pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}'
        }}
      />
      <p className="c26">
        <span className="c29 c16">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ </span>
      </p>
      <p className="c26">
        <span className="c29 c16">РОССИЙСКОЙ ФЕДЕРАЦИИ</span>
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c26">
        <span className="c16 c29">ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ </span>
      </p>
      <p className="c26">
        <span className="c29 c16">ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ</span>
      </p>
      <p className="c26">
        <span className="c29 c16">
          «ТАМБОВСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ИМЕНИ Г.Р. ДЕРЖАВИНА»
        </span>
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c26">
        <span className="c7">
          Г.С. Богомолов, А.Н. Лосев, С.В. Новиков, С.А. Гатальский, О.В. Михайлов, А.А. Иванков
        </span>
      </p>
      <p className="c3">
        <span className="c15" />
      </p>
      <p className="c26">
        <span className="c11">
          ПОДГОТОВКА ПО ОСНОВАМ ВОЕННОЙ СЛУЖБЫ В ХОДЕ ПРОВЕДЕНИЯ УЧЕБНЫХ СБОРОВ
        </span>
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c15" />
      </p>
      <p className="c26">
        <span className="c15">Учебно-методическое пособие</span>
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c16 c28" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c26">
        <span className="c15">Тамбов</span>
      </p>
      <p className="c26">
        <span className="c15">2022</span>
      </p>
      <p className="c3">
        <span className="c15" />
      </p>
      <p className="c17">
        <span className="c15">
          УДК &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;Рекомендовано к изданию
        </span>
      </p>
      <p className="c17">
        <span className="c15">
          ББК &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Учебно-методическим советом{' '}
        </span>
      </p>
      <p className="c17">
        <span className="c15">
          И21 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ТГУ
          имени Г.Р. Державина &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
        </span>
      </p>
      <p className="c17 c14">
        <span className="c15" />
      </p>
      <p className="c17">
        <span className="c15">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </span>
      </p>
      <p className="c3">
        <span className="c25 c16" />
      </p>
      <p className="c26">
        <span className="c31 c16">Рецензенты:</span>
      </p>
      <p className="c3">
        <span className="c16 c31" />
      </p>
      <h3 className="c34">
        <span className="c15">Заместитель начальника </span>
      </h3>
      <h3 className="c34">
        <span className="c15">
          военного учебного центра при ТГУ &nbsp;им. Г.Р. Державина по учебной части, к.в.н.
        </span>
      </h3>
      <h3 className="c34">
        <span className="c16 c27">Э.А. Инякин;</span>
      </h3>
      <p className="c26">
        <span className="c15">
          Начальник отдела призыва военного комиссариата Тамбовской области, подполковник
        </span>
      </p>
      <p className="c26">
        <span className="c37">Б.А. Цепков</span>
      </p>
      <p className="c3">
        <span className="c25 c16" />
      </p>
      <p className="c3">
        <span className="c25 c16" />
      </p>
      <p className="c3">
        <span className="c16 c25" />
      </p>
      <p className="c1">
        <span className="c27 c16">Богомолов, Г.С.</span>
      </p>
      <p className="c9 c38 c39">
        <span className="c15">
          И21 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Подготовка по основам военной службы в ходе
          проведения учебных сборов: учебное пособие/ Г.С. Богомолов, А.Н. Лосев, С.В. Новиков, С.А.
          Гатальский и др. (всего 6 чел.); М-во обр. и науки РФ, ФГБОУ ВО «Тамб. Гос. Ун-т им. Г.Р.
          Державина». – Тамбов: Издательский дом ТГУ им. Г.Р. Державина, 2022. - &nbsp; &nbsp;
          &nbsp;с.
        </span>
      </p>
      <p className="c3">
        <span className="c15" />
      </p>
      <p className="c17 c23">
        <span className="c15">ISBN</span>
      </p>
      <p className="c3">
        <span className="c15" />
      </p>
      <p className="c1 c38">
        <span className="c15">
          Учебное пособие содержит материалы о требованиях руководящих документов по организации и
          методике проведения 5-дневных учебных сборов, типовые планы-конспекты занятий по
          тактической, огневой, строевой, военно-медицинской и физической подготовке, химической и
          биологической защите, уставам Вооруженных сил Российской Федерации.
        </span>
      </p>
      <p className="c1 c38">
        <span className="c41">
          Пособие предназначено для учащихся университетских профильных классов и студентов СПО.
          Методический материал, представленный в пособии, рекомендуется
          преподавателям-организаторам ОБЖ образовательных учреждений общего и среднего
          профессионального образования для проведения занятий.
        </span>
      </p>
      <p className="c3">
        <span className="c25 c16" />
      </p>
      <p className="c3">
        <span className="c25 c16" />
      </p>
      <p className="c9">
        <span className="c15">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; УДК
        </span>
      </p>
      <p className="c9">
        <span className="c15">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;ББК
        </span>
      </p>
      <p className="c9 c14">
        <span className="c15" />
      </p>
      <p className="c9 c14">
        <span className="c15" />
      </p>
      <p className="c9">
        <span className="c37">ISBN</span>
        <span className="c15">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; © Богомолов
          Г.С., Лосев А.Н., Новиков С.В., 2022
        </span>
      </p>
      <p className="c9">
        <span className="c15">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;© ФГОУ ВО «Тамбовский государственный университет
        </span>
      </p>
      <p className="c9">
        <span className="c15">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;имени Г.Р. Державина», 2022
        </span>
      </p>
      {/* <p className="c32" id="h.gjdgxs">
        <span className="c7">СОДЕРЖАНИЕ</span>
      </p>
      <p className="c5">
        <span className="c10">Введение. </span>
        <span className="c10 c19">(ссылка на введение)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Раздел I. Основополагающие требования руководящих документов по организации и проведению
          учебных сборов по основам военной службы с (допризывной молодежью) гражданами Российской
          Федерации, в рамках подготовки по основам военной службы.{' '}
        </span>
        <span className="c10 c19">(ссылка на раздел)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 1. Основополагающие требования Федерального закона от 28 марта 1998 г. N 53-ФЗ «О
          воинской обязанности и военной службе» к обязательной и добровольной подготовке гражданина
          к военной службе.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 2. Основополагающие требования постановления Правительства РФ от 31 декабря 1999 г.
          №&nbsp;1441 «Об утверждении Положения о подготовке граждан Российской Федерации к военной
          службе».{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 3. Основополагающие требования «Инструкции об организации обучения граждан
          Российской Федерации начальным знаниям в области обороны и их подготовки по основам
          военной службы в образовательных учреждениях среднего (полного) общего образования,
          образовательных учреждениях начального профессионального и среднего профессионального
          образования и учебных пунктах». Утверждена приказом Министра обороны Российской Федерации
          и Министра образования и науки Российской Федерации от 24 февраля 2010 года № 96/134.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 4. Учебные сборы по основам военной службы – как важнейшая форма адаптации
          допризывной молодежи к военной службе в рядах Вооруженных Сил Российской Федерации.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 5. Алгоритм деятельности образовательной организации в рамках подготовки к
          проведению учебных сборов по основам военной службы.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 6. Организационные мероприятия по выезду допризывной молодежи, привлекаемой к
          участию в учебных сборах по основам военной службы, в соединения и воинские части
          (учебно-методические центры военно-патриотического воспитания молодежи,
          оборонно-спортивные и оздоровительные лагеря) и возвращению их образовательные
          организации.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Раздел II. Методика организации и проведения занятий в ходе проведения учебных сборов по
          основам военной службы.{' '}
        </span>
        <span className="c10 c19">(ссылка на раздел)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 1. Методика организации и проведения занятий по строевой подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 2. Методика организации и проведения занятий по тактической подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 3. Методика организации и проведения занятий по радиационной, химической и
          биологической защите.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 4. Методика организации и проведения занятий по общевоинским уставам Вооруженных Сил
          Российской Федерации.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 5. Методика организации и проведения занятий по военно-медицинской подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 6. Методика организации и проведения занятий по огневой подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 7. Методика организации и проведения занятий по физической подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 8. Требования к результатам обучения на учебных сборах по основам военной службы.
          Оценка учебных сборов по основам военной службы.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Раздел III. Примерная тематика занятий, проводимых в ходе учебных сборов. Планы проведения
          занятий и презентации к занятиям на учебных сборах по основам военной службы.{' '}
        </span>
        <span className="c10 c19">(ссылка на раздел)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 1. Примерная тематика занятий и планы проведения занятий &nbsp;по строевой
          подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 2. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          тактической подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 3. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          радиационной, химической и биологической защите.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 4. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          общевоинским уставам Вооруженных Сил Российской Федерации.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 5. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          военно-медицинской подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 6. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          огневой подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 7. Примерная тематика занятий и планы проведения занятий по физической подготовке.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">
          Глава 8. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          обеспечению безопасности военной службы.{' '}
        </span>
        <span className="c10 c19">(ссылка на главу)</span>
      </p>
      <p className="c5">
        <span className="c10">Приложения. </span>
        <span className="c10 c19">(ссылка на приложения)</span>
      </p>
      <p className="c5">
        <span className="c10">Презентации. </span>
        <span className="c10 c19">(ссылка на презентации)</span>
      </p>
      <p className="c5">
        <span className="c10">Литература. </span>
        <span className="c10 c19">(ссылка на литературу)</span>
      </p> */}
      {/* <p className="c2">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p> */}
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <p className="c3">
        <span className="c7" />
      </p>
      <section id="1">
        <p className="c26">
          <span className="c7">ВВЕДЕНИЕ</span>
        </p>
        <p className="c3">
          <span className="c7" />
        </p>
        <p className="c1">
          <span className="c0">
            Геополитическая обстановка, формирование нового миропорядка на основе многополярной
            системы выводят на первый план вопросы улучшения обороноспособности Российской
            Федерации. &nbsp;В соответствии с поправками в Федеральный закон от 28 марта 1998 г. «О
            воинской обязанности и военной службе» с 2008 г. срок прохождения военной&nbsp;службы по
            призыву в Российской армии составляет 1 год, при этом, в результате проведенной военной
            реформы уровень современного вооружения в армии достиг 68%. Это высокотехнологичная
            техника, порой основанная на новых принципах, введены новые образцы стрелкового
            вооружения, повсеместно в армии стали применятся беспилотные летательные аппараты. Все
            это выводит вопросы допризывной подготовки молодежи в разряд приоритетных. Понимая это
            Министерство Обороны России, сформировало и реализует ряд инициатив по совершенствованию
            процесса допризывной подготовки учащихся на военных учебных сборах. В рамках данных
            сборов особое значение приобритает не только повышение качества процесса допризывной
            подготовки, но и увеличение эффективности военно-патриотической работы с допризывной
            молодежью. &nbsp;Представленная Министерством Обороны программа военно-патриотического
            воспитания в процессе сборов по основам военной службы, призвана решать в первую очередь
            решать задачи качественного выполнения воинской обязанности, формирование чувства любви
            и верности Отечеству, готовности добросовестно служить государству и обществу.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Прохождение службы в армии для большинства призывников является серьезным жизненным
            испытанием. Для более успешной адаптации ребят к несению службы и повышению уровня
            подготовки допризывной молодежи к службе в Вооруженных Силах в программы курсов ОБЖ и
            БЖД введены разделы «Основы военной службы». Основная цель данных разделов - привитие
            необходимых знаний и навыков, а так же психологическая подготовка допризывной молодежи к
            службе путем изучения основ военного дела.{' '}
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Основной целью изучения данного учебного материала является получение представления о
            требованиях руководящих документов по организации и проведению 5-дневных учебных сборов,
            методика и особенности их организации.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            В представленном пособии нами представлены с типовые план-конспекты занятий по разделам
            программы сборов: тактической, огневой, строевой, военно-медицинской и физической
            подготовке, по радиационной, химической и биологической защите, уставам Вооруженных сил
            Российской Федерации.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Авторский коллектив выражает надежду, что данное пособие будет способствовать
            эффективному осуществлению профессиональной деятельности руководителей и
            преподавателей-организаторов ОБЖ учебных заведений при проведении 5-дневных учебных
            сборов по основам военной службы с допризывной молодежью.
          </span>
        </p>
      </section>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <p className="c3 c12">
        <span className="c7" />
      </p>
      <section id="2">
        <p className="c1">
          <span className="c7">
            Раздел I. Основополагающие требования руководящих документов по организации и проведению
            учебных сборов по основам военной службы с (допризывной молодежью) гражданами Российской
            Федерации, в рамках подготовки по основам военной службы.{' '}
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Глава 1. Основополагающие требования Федерального закона от 28 марта 1998 г. N 53-ФЗ «О
            воинской обязанности и военной службе» к обязательной и добровольной подготовке
            гражданина к военной службе.{' '}
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            На основании Федерального закона от 28 марта 1998 г. № 53-ФЗ «О воинской обязанности и
            военной службе» предусматриваются следующий перечень требований к подготовке гражданина
            к военной службе [1].
          </span>
        </p>
        <a id="id.30j0zll" />
        <p className="c1">
          <span className="c0">
            Статья 11. Обязательная подготовка гражданина к военной службе.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            1. Обязательная подготовка гражданина к военной службе предусматривает:
          </span>
        </p>
        <p className="c1">
          <span className="c0">получение начальных знаний в области обороны;</span>
        </p>
        <a id="id.1fob9te" />
        <p className="c1">
          <span className="c0">
            подготовку по основам военной службы в учебных заведениях в рамках освоения
            образовательной программы среднего общего образования или среднего профессионального
            образования и в учебных пунктах организаций;
          </span>
        </p>
        <p className="c1">
          <span className="c0">военно-патриотическое воспитание;</span>
        </p>
        <p className="c1">
          <span className="c0">
            подготовку по военно-учетным специальностям солдат, матросов, сержантов и старшин по
            направлению военного комиссариата;
          </span>
        </p>
        <a id="id.3znysh7" />
        <p className="c1">
          <span className="c0">медицинское освидетельствование;</span>
        </p>
        <a id="id.2et92p0" />
        <p className="c1">
          <span className="c10">
            2. Обязательная подготовка граждан к военной службе осуществляется в{' '}
          </span>
          <span className="c10">порядке</span>
          <span className="c0">, определяемом Правительством Российской Федерации.</span>
        </p>
        <p className="c1">
          <span className="c0">Комментарий к статье 11.</span>
        </p>
        <p className="c1">
          <span className="c10">«</span>
          <span className="c24 c10">Комментарий к&nbsp;</span>
          <span className="c24 c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/9d78f2e21a0e8d6e5a75ac4e4a939832/%23block_21000&sa=D&source=editors&ust=1678993582656380&usg=AOvVaw1KG7Rl5ATMWNjED1XD0NRW"
            >
              п. 1
            </a>
          </span>
          <span className="c24 c10">.</span>
        </p>
        <p className="c1">
          <span className="c10">
            1. Проводя правовое регулирование в сфере воинской обязанности с целью осуществления
            гражданами Российской Федерации конституционного долга и обязанности по обороне
            государства, комментируемый&nbsp;
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/&sa=D&source=editors&ust=1678993582657331&usg=AOvVaw2K86Fx9aajlyqX7ISXpeop"
            >
              Федеральный закон
            </a>
          </span>
          <span className="c0">
            , не раскрывает сущность правового понятия «подготовка гражданина к военной службе».
          </span>
        </p>
        <p className="c9">
          <span className="c10">
            В России разделение подготовки граждан к военной службе на обязательную и добровольную
            проведена с 1998 г. При этом лишь обязательная подготовка к военной службе на
            основании&nbsp;
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/1cafb24d049dcd1e7707a22d98e9858f/%23block_10000&sa=D&source=editors&ust=1678993582657915&usg=AOvVaw29EeSDK1meD4jn3V3YNZd2"
            >
              п. 1 ст. 1
            </a>
          </span>
          <span className="c0">
            &nbsp;комментируемого Федерального закона входит в составную часть воинской обязанности,
            в отличии от добровольной подготовки, содержание которой в данную конструкцию не входит.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            2. Данный пункт&nbsp;раскрывает обязательные мероприятия в сфере подготовки граждан к
            военной службе:
          </span>
        </p>
        <p className="c1">
          <span className="c10">- получение начальных знаний в области обороны (</span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/b6e02e45ca70d110df0019b9fe339c70/%23block_12&sa=D&source=editors&ust=1678993582658539&usg=AOvVaw1pat5iHMtPPACFqJDYzigk"
            >
              ст. 12
            </a>
          </span>
          <span className="c0">);</span>
        </p>
        <p className="c1">
          <span className="c10">
            - подготовка по основам военной службы в образовательном учреждении среднего (полного)
            общего образования, образовательном учреждении начального профессионального и среднего
            профессионального образования и в учебных пунктах организаций (
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/4d6cc5b8235f826b2c67847b967f8695/%23block_13&sa=D&source=editors&ust=1678993582659062&usg=AOvVaw12lWRbiizIsQmV6pwIdeeG"
            >
              ст. 13
            </a>
          </span>
          <span className="c0">);</span>
        </p>
        <p className="c1">
          <span className="c10">- военно-патриотическое воспитание (</span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/888134b28b1397ffae87a0ab1e117954/%23block_14&sa=D&source=editors&ust=1678993582659578&usg=AOvVaw1N3agWDIOZrHVfAlBm61Ge"
            >
              ст. 14
            </a>
          </span>
          <span className="c0">);</span>
        </p>
        <p className="c1">
          <span className="c10">
            - подготовка по военно-учетным специальностям солдат, матросов, сержантов и старшин по
            направлению военного комиссариата (
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/36bfb7176e3e8bfebe718035887e4efc/%23block_15&sa=D&source=editors&ust=1678993582660084&usg=AOvVaw0U0pdX3E6vt67bQ0_4xHX8"
            >
              ст. 15
            </a>
          </span>
          <span className="c0">);</span>
        </p>
        <p className="c1">
          <span className="c0">- медицинское освидетельствование.</span>
        </p>
        <p className="c1">
          <span className="c10">
            3. Формирование у обучающихся начальных знаний об обороне страны, о воинской обязанности
            граждан и обретение ими навыков в сфере гражданской обороны, а также осуществление
            подготовки учащихся – граждан мужского пола, не прошедших военной службы, по основам
            военной службы осуществляется в образовательных учреждениях среднего (полного) общего
            образования, образовательных учреждениях начального профессионального и среднего
            профессионального образования в соответствии с государственными образовательными
            стандартами в порядке, предусмотренном законами и иными нормативными правовыми актами
            Российской Федерации, законами и иными нормативными правовыми актами субъектов
            Российской Федерации (
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/10164235/888134b28b1397ffae87a0ab1e117954/%23block_147&sa=D&source=editors&ust=1678993582660767&usg=AOvVaw0B6uLmBlQOp_IefOQZQ4Vc"
            >
              ч. 7 ст. 14
            </a>
          </span>
          <span className="c10">
            &nbsp;Закона Российской Федерации «Об образовании» от 10 июля 1992 г. N 3266-I).
            Соответствующий порядок установлен{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/181486/&sa=D&source=editors&ust=1678993582661117&usg=AOvVaw0I09M8UjXlo3q6HlSYbci-"
            >
              постановлением
            </a>
          </span>
          <span className="c0">
            &nbsp;Правительства Российской Федерации «Об утверждении Положения о подготовке граждан
            Российской Федерации к военной службе» от 31 декабря 1999 г. N 1441.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            4. Граждане мужского пола получают начальные знания в области обороны в соответствии с
            примерной программой обучения, согласованной с Министерством обороны Российской
            Федерации (
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/181486/30704895c5cec97addba6e34afc1525c/%23block_1004&sa=D&source=editors&ust=1678993582661703&usg=AOvVaw3983p4F0ecCxp9yjF-RHGv"
            >
              п. 4
            </a>
          </span>
          <span className="c0">
            &nbsp;Положения о подготовке граждан Российской Федерации к военной службе). Для
            реализации данного нормативного предписания издан совместный приказ Министра обороны
            Российской Федерации и министра образования и науки Российской Федерации «Об утверждении
            Инструкции об организации обучения граждан Российской Федерации начальным знаниям в
            области обороны и их подготовки по основам военной службы в образовательных учреждениях
            среднего (полного) общего образования, образовательных учреждениях начального
            профессионального и среднего профессионального образования и учебных пунктах» от 24
            февраля 2010 г. № 96/134.Данный документ задачи, функции органов военного управления и
            органов управления образования, порядок организации обучения граждан Российской
            Федерации начальным знаниям в сфере обороны.
          </span>
        </p>
        <p className="c1">
          <span className="c10">5. В соответствии с </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/181486/30704895c5cec97addba6e34afc1525c/%23block_5&sa=D&source=editors&ust=1678993582662364&usg=AOvVaw1un_XxTteXJQjUas6CxBjo"
            >
              п. 5
            </a>
          </span>
          <span className="c0">
            &nbsp;Положения о подготовке граждан Российской Федерации к военной службе подготовка по
            основам военной службы предусматривается для граждан мужского пола и проводится в
            образовательных учреждениях среднего (полного) общего образования, образовательных
            учреждениях начального профессионального и среднего профессионального образования в
            течение последних двух лет обучения и в учебных пунктах. Обучение основам военной службы
            в учебных пунктах проходят граждане, достигшие 16-летнего возраста, не проходящие
            обучение в образовательных учреждениях и не работающие в организациях по направлению
            военных комиссариатов.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            &nbsp;6. Одно из составляющих частей обязательной подготовки граждан &nbsp;к военной
            службе является военно-патриотическое воспитание. Воспитательная работа в данной сфере
            организуется органами исполнительной власти субъектов Российской Федерации и органами
            местного самоуправления во взаимодействии с Министерством обороны Российской Федерации и
            федеральными органами исполнительной власти, в которых законом предусмотрена военная
            служба, и проводится в образовательных учреждениях основного общего образования,
            среднего (полного) общего образования, начального профессионального, среднего
            профессионального и высшего профессионального образования, в учебных пунктах, а также
            военно-патриотических молодежных и детских объединениях. Допускается при решении задач
            военно-патриотического воспитания граждан привлекать общественные и религиозные
            объединения, деятельность которых разрешена на территории Российской Федерации.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            7. Закрепление медицинского освидетельствования законодателем в качестве мероприятия
            основной подготовки гражданина к военной службе, на практике относится к составляющей
            воинского учета. Что отражается в дополнении комментируемого Федерального закона{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/1d4de6df358849bd0ce3002fa717e45b/%23block_5151&sa=D&source=editors&ust=1678993582663270&usg=AOvVaw2qg9CqRTGCHwC_EWWo1xR4"
            >
              ст. 5.1
            </a>
          </span>
          <span className="c10">, которая в соответствии со </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/12144089/a573badcfa856325a7f6c5597efaaedf/%23block_183&sa=D&source=editors&ust=1678993582663702&usg=AOvVaw34VVMHbFSr5SjNfDlNxBzE"
            >
              ст. 18
            </a>
          </span>
          <span className="c10">
            &nbsp;Федерального закона «О внесении изменений в отдельные законодательные акты
            Российской Федерации в связи с совершенствованием разграничения полномочий» от 31
            декабря 2005 г. N 199-ФЗ{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/12144089/b23370569959e214330dd17deaeacd10/%23block_35351&sa=D&source=editors&ust=1678993582664112&usg=AOvVaw1taycqWSav5L-94MqUmzxi"
            >
              вступила в силу
            </a>
          </span>
          <span className="c0">
            &nbsp;с 1 января 2006 г. &nbsp;В соответствии со ст. 5.1 комментируемого Федерального
            закона граждане при постановке на воинский учет, призыве или поступлении на военную
            службу по контракту, поступлении в военные образовательные учреждения профессионального
            образования, призыве на военные сборы, а также граждане, ранее признанные ограниченно
            годными к военной службе по состоянию здоровья, проходят медицинское освидетельствование
            врачами-специалистами: терапевтом, хирургом, невропатологом, психиатром, окулистом,
            оториноларингологом, стоматологом, а в случае необходимости – врачами других
            специальностей.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            В категорию лиц в приведенной выше норме, не входят граждане, проходящие обязательную
            подготовку к военной службе. «
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/12123634/f7ee959fd36b5699076b35abf4f52c5c/%23block_2000&sa=D&source=editors&ust=1678993582664715&usg=AOvVaw13ZvlEZIQ8ZBE5zmlFYlrB"
            >
              Инструкция
            </a>
          </span>
          <span className="c10">
            &nbsp;о порядке проведения медицинского освидетельствования, обследования (лечения)
            граждан Российской Федерации при первоначальной постановке на воинский учет и
            лечебно-оздоровительных мероприятий среди граждан, поставленных на воинский учет», и «
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/12123634/3e22e51c74db8e0b182fad67b502e640/%23block_3000&sa=D&source=editors&ust=1678993582665281&usg=AOvVaw3BO_MAihJr1NjF2F08P5eM"
            >
              Инструкция
            </a>
          </span>
          <span className="c10">
            &nbsp;о порядке проведения медицинского освидетельствования, обследования (лечения)
            граждан Российской Федерации при призыве на военную службу и лечебно-оздоровительных
            мероприятий среди граждан Российской Федерации, получивших отсрочки от призыва на
            военную службу по состоянию здоровья», утвержденные{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/12123634/&sa=D&source=editors&ust=1678993582665789&usg=AOvVaw2hcKB68fc8pumgqFPHCrqn"
            >
              приказом
            </a>
          </span>
          <span className="c0">
            &nbsp;министра обороны Российской Федерации и Министерства здравоохранения Российской
            Федерации от 23 мая 2001 г. N 240/168, также не определяют граждан, проходящих
            обязательную подготовку к военной службе в качестве субъектов медицинского
            освидетельствования.
          </span>
        </p>
        <p className="c1">
          <span className="c10">При этом </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/12123634/53f89421bbdaf741eb2d1ecc4ddb4c33/%23block_1000&sa=D&source=editors&ust=1678993582666407&usg=AOvVaw1DuvAHrOeSwXs6Fx83XkYR"
            >
              Инструкция
            </a>
          </span>
          <span className="c10">, утвержденная </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/12123634/&sa=D&source=editors&ust=1678993582666816&usg=AOvVaw0DQrAVinKag_FaCdCW8aGL"
            >
              приказом
            </a>
          </span>
          <span className="c0">
            &nbsp;Министра обороны Российской Федерации и Министром здравоохранения Российской
            Федерации от 23 мая 2001 г. N 240/168, предусмотрела проведение ежегодных
            профилактических медицинских осмотров, лечения, диспансерного наблюдения за состоянием
            здоровья и физическим развитием граждан до их первоначальной постановки на воинский
            учет, которые включают в себя:
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - выявление на ранней стадии функциональных нарушений, заболеваний, отклонений в
            физическом и психическом развитии юношей, а также факторов медико-социального риска
            возникновения заболеваний (условий учебы, труда, быта и т.д.);
          </span>
        </p>
        <p className="c9">
          <span className="c0">
            - разработка и проведение профилактической работы с юношами в образовательных
            учреждениях и по месту жительства с динамическим врачебным наблюдением за юношами,
            имеющими отклонения в состоянии здоровья, проведение нуждающимся лечебно-оздоровительных
            мероприятий;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - систематический анализ состояния здоровья и физического развития юношей, качества и
            эффективности медицинского наблюдения, разработку и осуществление мероприятий по
            совершенствованию медицинского обеспечения.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Все проводимые медицинские процедуры, в рамках обязательной подготовки граждан к военной
            службе, носят термин «медицинское обеспечение», а в контексте комментируемого пункта -
            «медицинское освидетельствование».{' '}
          </span>
        </p>
        <p className="c1 c14">
          <span className="c0" />
        </p>
        <p className="c1">
          <span className="c24 c10">Комментарий к </span>
          <span className="c24 c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/9d78f2e21a0e8d6e5a75ac4e4a939832/%23block_1102&sa=D&source=editors&ust=1678993582668048&usg=AOvVaw2oVlN59hd1IZSepWaSGRo4"
            >
              п. 2
            </a>
          </span>
          <span className="c13 c10">.</span>
        </p>
        <p className="c1">
          <span className="c10">
            8. Правительство Российской Федерации, являясь высшим коллегиальным органом
            исполнительной власти в соответствии с Конституцией Российской Федерации (
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/10103000/61be80f84cf4d95f84aeddb3178a7797/%23block_11001&sa=D&source=editors&ust=1678993582668626&usg=AOvVaw3D3ksMXuGNcJLCclwZSlDj"
            >
              ч. 1 ст. 110
            </a>
          </span>
          <span className="c10">
            ), принимает меры по обеспечению обороны страны, государственной безопасности России (
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/10103000/79e1105747e4b4d7487471312237be1c/%23block_11405&sa=D&source=editors&ust=1678993582669001&usg=AOvVaw3aV47N3dgdZtJ1ZxRDSukk"
            >
              п. «д» ч. 1 ст. 114
            </a>
          </span>
          <span className="c10">), которые отнесены к федеративному ведению (</span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/10103000/4fc81bd708668197a291fdc62307ca74/%23block_7112&sa=D&source=editors&ust=1678993582669374&usg=AOvVaw3XA2VShqGUlAo4wQUl0fw9"
            >
              п. «м» ст. 71
            </a>
          </span>
          <span className="c10">
            ), в том числе издает в этой области постановления и распоряжения, а также обеспечивает
            их исполнение (
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/10103000/285ce44b84d86a34d278103083ce77fe/%23block_11501&sa=D&source=editors&ust=1678993582669752&usg=AOvVaw0EfUnHkDG7OJ8n8FPjvKdQ"
            >
              ч. 1 ст. 115
            </a>
          </span>
          <span className="c10">). Действуя в рамках обозначенных </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/12106440/9e3305d0d08ff111955ebd93afd10878/%23block_20&sa=D&source=editors&ust=1678993582670114&usg=AOvVaw2RVmOWlhDYon_G6nBC3f4b"
            >
              ст. 20
            </a>
          </span>
          <span className="c0">
            &nbsp;Федерального конституционного закона «О Правительстве Российской Федерации» от 17
            декабря 1997 г. N 2-ФКЗ полномочий по обеспечению обороны и государственной безопасности
            страны, Правительство Российской Федерации реализует выполнение государственных целевых
            программ и планов развития вооружения, а также программ подготовки граждан по
            военно-учетным специальностям.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            Проводя реализацию комплекса мер по подготовке к вооруженной защите Российской
            Федерации, целостности и неприкосновенности ее территории, Правительство Российской
            Федерации на основании{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/135907/8b7b3c1c76e91f88d33c08b3736aa67a/%23block_617&sa=D&source=editors&ust=1678993582670837&usg=AOvVaw2llgOj8i1nZtwOGm-b7noY"
            >
              пп. 17
            </a>
          </span>
          <span className="c10">, </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/135907/8b7b3c1c76e91f88d33c08b3736aa67a/%23block_618&sa=D&source=editors&ust=1678993582671317&usg=AOvVaw0tDZn4uCZE6uqbVB11xhU5"
            >
              18 ст. 6
            </a>
          </span>
          <span className="c0">
            &nbsp;Федерального закона «Об обороне» от 31 мая 1996 г. N 61-ФЗ определяет порядок
            выполнения федеральными органами исполнительной власти, органами исполнительной власти
            субъектов Российской Федерации, органами местного самоуправления, организациями
            независимо от форм собственности процедуры по подготовке граждан Российской Федерации к
            военной службе, воинского учета, призыва на военную службу и альтернативную гражданскую
            службу, проведения военно-врачебной экспертизы и военных сборов и утверждает положения о
            воинском учете, призыве на военную службу, подготовке граждан Российской Федерации к
            военной службе, проведении военных сборов, военно-врачебной экспертизе, а также перечень
            военно-учетных специальностей.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            На основании вышеизложенного следует, что обязательная подготовка граждан к военной
            службе осуществляется в порядке, определяемом Правительством Российской Федерации, и
            реализовано в «
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/181486/30704895c5cec97addba6e34afc1525c/%23block_1000&sa=D&source=editors&ust=1678993582672035&usg=AOvVaw2LFP6RXaoAi-nMk8IpRDDu"
            >
              Положении
            </a>
          </span>
          <span className="c10">
            &nbsp;о подготовке граждан Российской Федерации к военной службе», утвержденном{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/181486/&sa=D&source=editors&ust=1678993582672398&usg=AOvVaw24JiFCUpp0Cy9T6DdwKDaH"
            >
              постановлением
            </a>
          </span>
          <span className="c0">
            &nbsp;Правительства Российской Федерации от 31 декабря 1999 г. N 1441.» [2,3].
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Статья 12. Получение гражданами начальных знаний в области обороны.
          </span>
        </p>
        <p className="c1">
          <span className="c10">Федеральными государственными образовательными стандартами</span>
          <span className="c0">
            &nbsp;среднего общего образования, федеральными государственными образовательными
            стандартами среднего профессионального образования предусматривается получение
            гражданами начальных знаний об обороне государства, о воинской обязанности граждан, а
            также приобретение гражданами навыков в области гражданской обороны.
          </span>
        </p>
        <p className="c1">
          <span className="c0">Комментарий к статье 12 </span>
        </p>
        <p className="c1">
          <span className="c10">«</span>
          <span className="c24 c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/b6e02e45ca70d110df0019b9fe339c70/%23block_12&sa=D&source=editors&ust=1678993582673624&usg=AOvVaw2e__X9IK6B2N6aDqhrnejs"
            >
              Статья 12.
            </a>
          </span>
          <span className="c13 c10">
            &nbsp;Получение гражданами начальных знаний в области обороны
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            1. Образовательная реформа, проводимая в Российской Федерации привела к изменениям в
            федеральном законодательстве.{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/188402/&sa=D&source=editors&ust=1678993582674211&usg=AOvVaw36UHwnKzIORFXUGXp13jU7"
            >
              Федеральным законом
            </a>
          </span>
          <span className="c10">
            &nbsp;«О внесении изменений в Федеральный закон «О воинской обязанности и военной
            службе» и статью 14 Закона Российской Федерации «Об образовании» от 21 июля 2005 г. N
            100-ФЗ» привились в соответствие нормы комментируемого{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/&sa=D&source=editors&ust=1678993582674561&usg=AOvVaw3uaH3mstMvTrPkM3GWnTHR"
            >
              Федерального закона
            </a>
          </span>
          <span className="c10">&nbsp;и </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/10164235/&sa=D&source=editors&ust=1678993582674882&usg=AOvVaw1AYKMrhkvPib3PPI-sywVo"
            >
              Закона
            </a>
          </span>
          <span className="c0">
            &nbsp;Российской Федерации «Об образовании» в сфере обязательной и добровольной
            подготовки граждан к военной службе. Указывается, что в образовательных учреждениях
            среднего (полного) общего образования, образовательных учреждениях начального
            профессионального и среднего профессионального образования в соответствии с
            государственными образовательными стандартами осуществляется получение обучающимися
            начальных знаний об обороне государства, о воинской обязанности граждан и приобретение
            обучающимися навыков в области гражданской обороны, а также подготовка обучающихся –
            граждан мужского пола, не прошедших военной службы, по основам военной службы.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            На современном этапе получение гражданами начальных знаний об обороне государства, о
            воинской обязанности и приобретение навыков в области гражданской обороны определено
            государственными образовательными стандартами:
          </span>
        </p>
        <p className="c1">
          <span className="c0">- среднего (полного) общего образования;</span>
        </p>
        <p className="c1">
          <span className="c0">- начального профессионального образования;</span>
        </p>
        <p className="c1">
          <span className="c0">- среднего профессионального образования.</span>
        </p>
        <p className="c1">
          <span className="c0">
            2. Общее образование включает в себя три ступени, соответствующие уровням
            образовательных программ: начальное общее, основное общее, среднее (полное) общее
            образование. Образовательные программы дошкольного, начального общего, основного общего
            и среднего (полного) общего образования являются преемственными, т.е. каждая последующая
            программа базируется на предыдущей. Граждане получают начальные знания и навыки в сфере
            обороны государства в процессе третьей ступени общего образования – среднего (полного)
            общего образования.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Статья 13. Подготовка граждан по основам военной службы в учебных заведениях в рамках
            освоения образовательной программы среднего общего образования или среднего
            профессионального образования и в учебных пунктах организаций.
          </span>
        </p>
        <a id="id.tyjcwt" />
        <p className="c1">
          <span className="c0">
            1. До призыва на военную службу граждане мужского пола проходят подготовку по основам
            военной службы в учебных заведениях в рамках освоения образовательной программы среднего
            общего образования или среднего профессионального образования.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            Подготовка граждан мужского пола по основам военной службы осуществляется
            педагогическими работниками указанных образовательных организаций в соответствии с{' '}
          </span>
          <span className="c10">федеральными государственными образовательными стандартами</span>
          <span className="c0">.</span>
        </p>
        <p className="c1">
          <span className="c0">
            Подготовка граждан мужского пола по основам военной службы включает проведение с данными
            гражданами учебных сборов.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            2. Граждане мужского пола, достигшие возраста 16 лет, работающие в организациях и не
            прошедшие подготовку по основам военной службы в рамках освоения образовательной
            программы среднего общего образования или среднего профессионального образования
            привлекаются к занятиям по основам военной службы в учебных пунктах, создаваемых в{' '}
          </span>
          <span className="c11">порядке</span>
          <span className="c0">
            , устанавливаемом уполномоченным федеральным органом исполнительной власти.
          </span>
        </p>
        <p className="c1">
          <span className="c0">Комментарий к статье 13.</span>
        </p>
        <p className="c1">
          <span className="c10">«</span>
          <span className="c24 c10">Комментарий к </span>
          <span className="c24 c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/4d6cc5b8235f826b2c67847b967f8695/%23block_1301&sa=D&source=editors&ust=1678993582677719&usg=AOvVaw1xwAEzZGrvdv5crjpMY9WC"
            >
              п. 1
            </a>
          </span>
          <span className="c13 c10">.</span>
        </p>
        <p className="c1">
          <span className="c0">
            1. Организационно-образовательные мероприятия в сфере военной подготовки граждан,
            предусмотренные для граждан мужского пола, реализуются в форме обязательной военной
            подготовки по основам военной службы в образовательных учреждениях среднего (полного)
            общего образования, образовательных учреждениях начального профессионального и среднего
            профессионального образования.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            Действие законодательства Российской Федерации в сфере образования распространяется на
            все образовательные учреждения, на территории Российской Федерации независимо от их
            организационно-правовых форм и подчиненности (
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/10164235/b6e02e45ca70d110df0019b9fe339c70/%23block_12&sa=D&source=editors&ust=1678993582678590&usg=AOvVaw1YhfiNnLcVc8Y6v76o2rOt"
            >
              ст. 12
            </a>
          </span>
          <span className="c0">&nbsp;Закона Российской Федерации «Об образовании»).</span>
        </p>
        <p className="c1">
          <span className="c10">
            2. Подготовка граждан Российской Федерации мужского пола по основам военной службы
            осуществляется в вышеуказанных образовательных учреждениях на основании федеральных
            законов «
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/135907/&sa=D&source=editors&ust=1678993582679115&usg=AOvVaw24YhzL9fv5YWLmHUlIAfJG"
            >
              Об обороне
            </a>
          </span>
          <span className="c10">»,</span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/&sa=D&source=editors&ust=1678993582679454&usg=AOvVaw1zBEe3ygrR2e7gHEGwEKd1"
            >
              &nbsp;«О воинской обязанности и военной службе
            </a>
          </span>
          <span className="c10">», «</span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/10164235/&sa=D&source=editors&ust=1678993582679778&usg=AOvVaw1nwgBR6Ti-mjJ9nFE2NRil"
            >
              Об образовании
            </a>
          </span>
          <span className="c10">», «</span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/181486/30704895c5cec97addba6e34afc1525c/%23block_1000&sa=D&source=editors&ust=1678993582680173&usg=AOvVaw0qFiVBIRiBIVkzf_Ps4b7V"
            >
              Положением
            </a>
          </span>
          <span className="c10">
            &nbsp;о подготовке граждан Российской Федерации к военной службе», утвержденным{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/181486/&sa=D&source=editors&ust=1678993582680630&usg=AOvVaw1Ge7Lrhk5334IV0RzJzIHC"
            >
              постановлением
            </a>
          </span>
          <span className="c0">
            &nbsp;Правительства Российской Федерации от 31 декабря 1999 г. N 1441, «Инструкцией об
            организации обучения граждан Российской Федерации начальным знаниям в области обороны и
            их подготовки по основам военной службы в образовательных учреждениях среднего (полного)
            общего образования, образовательных учреждениях начального профессионального и среднего
            профессионального образования и учебных пунктах», утвержденной приказом министра обороны
            РФ и Министерства образования РФ от 24 февраля 2010 г. № 96/134, и иными нормативными
            правовыми актами.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            3. Подготовка по основам военной службы предусматривается для граждан мужского пола до
            призыва на военную службу. Решение о призыве граждан на военную службу может быть
            принято только после достижения ими возраста 18 лет.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            Конкретные задачи, на достижение которых направлен образовательный процесс в рамках
            обязательной подготовки граждан к военной службе, определены{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/183452/%23block_200&sa=D&source=editors&ust=1678993582681385&usg=AOvVaw18DWNYGTQvPdS73CTjfklc"
            >
              разделом II
            </a>
          </span>
          <span className="c0">
            &nbsp;Инструкции об организации обучения граждан Российской Федерации начальным знаниям
            в области обороны и их подготовки по основам военной службы в образовательных
            учреждениях среднего (полного) общего образования, образовательных учреждениях
            начального профессионального и среднего профессионального образования и учебных пунктах.
            Среди них выделяются:
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - формирование морально-психологических и физических качеств гражданина, необходимых для
            прохождения военной службы;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - воспитание патриотизма, уважения к историческому и культурному прошлому России и ее
            Вооруженным Силам;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - изучение гражданами основных положений законодательства Российской Федерации в области
            обороны государства, о воинской обязанности и воинском учете, обязательной и
            добровольной подготовке к военной службе, о прохождении военной службы по призыву и в
            добровольном порядке (по контракту), о пребывании в запасе, о правах, обязанностях и
            ответственности военнослужащих и граждан, находящихся в запасе;
          </span>
        </p>
        <p className="c1">
          <span className="c0">- приобретение навыков в области гражданской обороны;</span>
        </p>
        <p className="c1">
          <span className="c0">
            - изучение основ безопасности военной службы, конструкции и правил обращения с боевым
            ручным стрелковым оружием, основ тактической, медицинской, строевой подготовки, вопросов
            радиационной, химической и биологической защиты войск и населения;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - практическое закрепление полученных знаний в ходе учебных сборов;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - проведение военно-профессиональной ориентации на овладение военно-учетными
            специальностями и выбор профессии офицера.
          </span>
        </p>
        <p className="c1">
          <span className="c10">
            4. Особые требования предъявляются к педагогическому составу, привлекаемого к проведению
            подготовки граждан к военной службе. &nbsp;В соответствии с «
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/181486/30704895c5cec97addba6e34afc1525c/%23block_1000&sa=D&source=editors&ust=1678993582682644&usg=AOvVaw2JQ2-NlG8mq-ENM-tSmomz"
            >
              Положением
            </a>
          </span>
          <span className="c10">
            &nbsp;о подготовке граждан Российской Федерации к военной службе», утвержденным{' '}
          </span>
          <span className="c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/181486/&sa=D&source=editors&ust=1678993582683033&usg=AOvVaw2i6LYBpv7AzmuUnyEKYNuO"
            >
              постановлением
            </a>
          </span>
          <span className="c0">
            &nbsp;Правительства Российской Федерации от 31 декабря 1999 г. N 1441, преподаватели,
            проводящие подготовку граждан по основам военной службы, как правило, из числа офицеров,
            пребывающих в запасе, имеющих высшее или среднее военное образование, а также
            выпускников военных кафедр педагогических образовательных учреждений высшего
            профессионального образования, обладающих необходимыми знаниями и высокими
            морально-деловыми качествами, а при отсутствии возможности заместить штатную должность
            преподавателя лицом, имеющим звание офицера и пребывающим в запасе, разрешается, в виде
            исключения, назначать на эту должность пребывающих в запасе прапорщиков, мичманов,
            сержантов, старшин, солдат или матросов, имеющих высшее или среднее профессиональное
            образование.{' '}
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Подбор кандидатов на должности преподавателей, осуществляющих подготовку по основам
            военной службы, проводиться руководителем образовательного учреждения совместно с
            соответствующим военным комиссаром района. Их подготовка, переподготовка и повышение
            квалификации осуществляются в образовательных учреждениях высшего профессионального
            образования и дополнительного профессионального образования.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            5. Подготовка граждан мужского пола по основам военной службы осуществляется в
            соответствии с государственными образовательными стандартами на учебно-материальной базе
            образовательных учреждениях, которая включает в себя: предметный кабинет, спортивный
            городок, элементы полосы препятствий, учебных и наглядных пособий, технических средств
            обучения.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            При желании граждан, углубленно изучить военное дело, организовываются факультативные
            занятия по дополнительным программам, имеющим целью военно-профессиональную ориентацию
            граждан.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            По окончании подготовки, военные комиссариаты районов вносят сведения о ее прохождении
            гражданами в графу «Образование» учетной карты призывника.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            6. Проведение учебно-тренировочных сборов в рамках обучения граждан основам военной
            службы, предусмотренных комментируемым пунктом, осуществляется в любой год его обучения,
            а не в конце последнего года обучения, как было установлено ранее, что позволяет
            обучающимся не отвлекаться от подготовки к выпускным и вступительным экзаменам.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Порядок организации и проведения учебно-тренировочных сборов определяется совместными
            нормативными правовыми актами Министерства обороны Российской Федерации и Министерства
            образования Российской Федерации. В настоящее время действует Инструкция по организации
            обучения граждан Российской Федерации базовым знаниям в области обороны и их обучению
            основам военной службы в образовательных учреждениях среднего (полного) общего
            образования, образовательных учреждениях начального профессионального и среднего
            специального образования и учебных центрах, утвержденная приказ Министра обороны
            Российской Федерации и Министерства образования Российской Федерации от 24 февраля 2010
            года № 96/134.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            7. Организация учебно-тренировочных сборов осуществляется в соответствии с решением
            руководителя органа исполнительной власти субъекта Российской Федерации или органа
            местного самоуправления, согласованного с начальником военного гарнизона, и планом
            подготовки к учебно-тренировочным сборам. На основании принятого решения руководитель
            местного (муниципального) органа управления образованием издает приказ об организации и
            проведении учебно-тренировочных сборов, согласованный с военным комиссаром района.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Для проведения сборов назначаются ответственные руководители. В состав администрации
            сборов входят: руководитель сборов, его заместители – по воспитательной работе и по
            хозяйственной части, начальник штаба сборов и врач.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Решение руководителя органа исполнительной власти субъекта Российской Федерации или
            органа местного самоуправления о проведении учебно-тренировочных сборов, согласованное с
            начальником военного гарнизона и планом подготовки к учебно-тренировочным сборам, должно
            включать:
          </span>
        </p>
        <p className="c1">
          <span className="c0">- место и время проведения тренировочных сборов;</span>
        </p>
        <p className="c1">
          <span className="c0">- методическое обеспечение сборов;</span>
        </p>
        <p className="c1">
          <span className="c0">- вопросы взаимодействия с воинскими частями;</span>
        </p>
        <p className="c1">
          <span className="c0">- порядок финансирования;</span>
        </p>
        <p className="c1">
          <span className="c0">
            - вопросы организации жизни и быта граждан в учебном лагере (размещение, питание,
            медицинское обслуживание, доставка граждан к месту обучения).
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Во время учебных сборов граждане проживают на территориях воинских частей, которые
            закреплены за учебными заведениями (учебными центрами), расположенными на территории
            гарнизона, на основании указаний штаба военного округа совместно с военным комиссаром
            округа и начальником гарнизона. Обеспечение палаточным фондом и постельными
            принадлежностями для размещения обучаемых в полевых условиях производится за счет
            имущества воинских частей, бывшего в употреблении, пригодного для дальнейшей
            эксплуатации, путем выдачи его во временное пользование.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Питание граждан, участвующих в прохождении сборов, организованных на базе воинских
            частей, осуществляется в соответствии с Положением о продовольственном обеспечении
            Вооруженных Сил Российской Федерации на мирное время, по действующим нормам с
            предварительной оплатой стоимости продовольственных пайков по фиксированным ценам и
            расходов на приготовление пищи в размере 20% от стоимости пайков (без хлеба), а при
            проведении сборов в учебных заведениях в других организациях – силами и средствами,
            определенными решением главы органа местного самоуправления.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Медицинское обслуживание обучаемых во время учебно-тренировочных сборов, организованных
            на базе воинских частей, других воинских формирований и органов, осуществляется в
            соответствии с порядком, установленным Приказом Министра обороны Российской «Федерации
            Об организации медицинской помощи в военно-медицинских частях, соединениях и учреждениях
            Министерства Министерства обороны Российской Федерации» от 16 января 2006 г. № 20,
            штатными силами и средствами медицинской службы, а при проведении сборов в учебных
            заведениях, в других организациях - силами и средствами, определенными решением главы
            органа местного самоуправления.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Перевозка учащихся к местам занятий и обратно может осуществляться автомобильным
            транспортом воинской части, на базе которой проводятся учебные сборы. Отпуск
            горюче-смазочных материалов для этих целей осуществляется после предварительной оплаты
            их стоимости.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Организационные и правовые вопросы учитываются штабом воинской части при разработке
            плана боевой подготовки воинской части на новый учебный год. Один из его разделов
            включает мероприятия по проведению учебно-тренировочных сборов с учащимися в
            образовательных учреждениях среднего (полного) общего образования, начального
            профессионального и средне-специального образования и учебных центрах организаций,
            закрепленных за воинской частью приказом начальника гарнизона. В приложении к указанному
            плану отдельной строкой указан расход боеприпасов во время стрельбы со студентами.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            При составлении документации тренировочного лагеря особое внимание уделяется соблюдению
            требований безопасности, которые подразделяются следующим образом:
          </span>
        </p>
        <p className="c1">
          <span className="c0">- требования безопасности во время стрельб;</span>
        </p>
        <p className="c1">
          <span className="c0">- требования безопасности во время военно-спортивных игр;</span>
        </p>
        <p className="c1">
          <span className="c0">
            - требования безопасности при перевозке подготовленных граждан;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - требования безопасности при проведении занятий физической культурой;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - требования безопасности при организации купания и занятий на воде;
          </span>
        </p>
        <p className="c1">
          <span className="c0">- требования пожарной, электрической и взрывобезопасности.</span>
        </p>
        <p className="c1">
          <span className="c0">
            Несоблюдение требований безопасности влечет за собой ответственность руководителей
            сборов. Так, согласно приговору Сургутского гарнизонного военного суда от 5 ноября 2004
            года, подполковник З. осужден по пункту "в" части 3 статьи 286 Уголовного кодекса
            Российской Федерации к лишению свободы сроком на четыре года с лишением права занимать
            должности, связанные с образованием и профессиональной подготовки призывной молодежи в
            течение двух лет при следующих обстоятельствах.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            З., являясь начальником 2-го отдела объединенного военного комиссариата Советского
            района Ханты-Мансийского автономного округа, исполнял обязанности руководителя
            учебно-тренировочных сборов, проводимых с учащимися средних учебных заведений Советского
            района Тюменской области, в военно-спортивном лагере "Чайка", расположенном в поселке
            Малиновский указанного района. Вопреки требованиям статей 20, 41 Конституции Российской
            Федерации, 51 Федерального закона «Об образовании», ст. 49, 50 «Инструкции по
            организации обучения граждан Российской Федерации базовым знаниям в области обороны и их
            обучению основам военной службы», утвержденной совместным приказом Министра обороны
            Российской Федерации и Министерства образования Российской Федерации от 3 мая, 2001 №
            203/1936, которые не предусматривают занятий, в том числе тактических, похожих на марш,
            из ложно понятых интересов службы, 5 сентября 2003 года около 20 часов. 30 мин., в
            личное время студентов, он провел марш около 10 км с элементами радиационной,
            химической, биологической защиты, а также тактической и физической подготовки,
            результатом чего стал периодический ускоренный бег, частое использование противогазов
            при беговых движениях, движения в полусидячем положении, что явилось очевидным и
            значительным превышением уровней физической активности, предусмотренной действующими
            учебными планами для учащихся 10-11 классов, а также Пособием по физической культуре и
            спорту в Вооруженных Силах Российской Федерации. Подполковник З. в то же время не
            контролировал степень физической активности и не принимал мер безопасности для ее
            снижения. В ходе этого урока студента Б. вырвало от хронической, но впервые проявившейся
            надпочечниковой недостаточности на почве вышеупомянутого физического перенапряжения, и
            рвотные массы, попав в дыхательные пути, вызвали остановку дыхания и смерть
            пострадавшего.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            8. К участию в учебно-тренировочных сборах приглашаются все граждане, обучающиеся в
            образовательных учреждениях среднего (полного) общего образования, начального
            профессионального и средне-специального образования и в учебных центрах, за исключением
            тех, кто имеет освобождение от занятий по состоянию здоровья.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Тренировочные сборы обычно организуются на базе воинских частей в течение пяти дней (35
            учебных часов). В местах, где нет воинских частей, учебные сборы организуются при
            образовательных учреждениях, военно-патриотических молодежных и детских общественных
            объединениях, а также на базе военно-спортивных оздоровительных лагерей. В ходе
            учебно-тренировочных сборов изучаются следующие предметы: размещение и быт
            военнослужащих, организация караульной и внутренней служб, элементы боевой, огневой,
            тактической, физической и медицинской подготовки, а также вопросы радиационной,
            химической и биологической защиты войск. В ходе учебно-тренировочных сборов проводятся
            военно-профессиональные ориентационные мероприятия.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Учебный процесс на сборах организован в зависимости от количества слушателей, которые
            разделены на учебные группы (взводы). Расписание занятий планируется исходя из
            количества учебных мест и количества учебных групп (взводов) с указанием группы
            (взвода), места и времени обучения. Учебный процесс во время тренировочного сбора
            организован в соответствии с учебными планами и распорядком дня.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Военный комиссар округа определяет время и место обучения учащихся стрельбе из боевого
            ручного стрелкового оружия и доводит его до руководителей учебных заведений. Обучение
            студентов стрельбе из боевого ручного стрелкового оружия организуется и проводится в
            установленном порядке командирами воинских частей на стрельбищах или в тирах. Для
            проведения стрельб командиры воинских частей назначают ответственных должностных лиц и
            обеспечивают оружием и боеприпасами.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            9. Во время тренировочных занятий в лагере деятельность студентов оценивается по
            следующим направлениям:
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - на строевой - строевая стойка, повороты на месте и в движении, строевой шаг, воинское
            приветствие на месте и в движении, построение отделения, взвод;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - по радиационной, химической и биологической защите - приемы и способы радиационной,
            химической и биологической защиты;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - преодоление участка местности, зараженного радиоактивными (токсичными) веществами -
            действия военнослужащего по сигналам предупреждения и вспышке ядерного взрыва,
            выполнение нормативов надевания средств индивидуальной защиты;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - для медицинского обучения - остановка кровотечения, наложение повязок на раны верхних
            и нижних конечностей;
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            - физическая подготовка - в объеме требований к новому пополнению воинских частей и к
            кандидатам, поступающим в военные учебные заведения.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Индивидуальная оценка каждого студента состоит из оценок, полученных за выполнение
            каждого этапа. Общая оценка студентов за обучение заносится в классный журнал с пометкой
            «Учебные сборы» и учитывается при выставлении итоговой оценки за курс ОБЖ.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Для студентов, не прошедших учебные сборы по уважительным причинам, могут быть
            организованы дополнительные занятия и сдача теста по вопросам, предусмотренным
            программой сборов (по желанию студентов).
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            В случае отказа отдельных учащихся по религиозным соображениям от участия в стрельбе и
            изучении боевого ручного стрелкового оружия, решение об освобождении от прохождения
            данной темы занятий принимается руководителем образовательного учреждения на основании
            мотивированного заявления родителей (законных представителей), которое должно быть
            подано руководителю образовательного учреждения.
          </span>
        </p>
        <p className="c1">
          <span className="c24 c10">Комментарий к </span>
          <span className="c24 c10">
            <a
              className="c21"
              href="https://www.google.com/url?q=https://base.garant.ru/178405/4d6cc5b8235f826b2c67847b967f8695/%23block_22000&sa=D&source=editors&ust=1678993582689696&usg=AOvVaw2WzRZodBPRA0sehggb-x4t"
            >
              п. 2
            </a>
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            10. Граждане мужского пола, достигшие 16-летнего возраста, работающие в организациях и
            не прошедшие обучение основам военной службы в образовательных учреждениях, указанных в
            пункте 1 комментируемой статьи, привлекаются к занятиям по основам военной службы в
            учебных центрах, созданных в порядке, установленном правительство Российской Федерации.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Данный порядок установлен Положением о подготовке граждан Российской Федерации к военной
            службе, утвержденным Постановлением Правительства Российской Федерации от 31 декабря
            1999г. № 1441, и «Инструкции по организации обучения граждан Российской Федерации
            базовым знаниям в области обороны и их обучению основам военной службы в образовательных
            учреждениях среднего (полного) общего образования, образовательных учреждениях
            начального профессионального и средне-специального образования и учебных центрах»,
            изданной в его развитии, утвержденная приказом Министра обороны Российской Федерации и
            Министерства образования Российской Федерации от 24 февраля 2010 года №96/134.{' '}
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Учебные центры создаются по решению главы органа местного самоуправления на базе одной
            организации, состоящей не менее чем из 20 граждан, подлежащих призыву на военную службу
            и не прошедших обучение основам военной службы, или нескольких организаций (объединенные
            районные или городские учебные центры). Ответственность за организацию учебных центров
            возлагается на руководителей организаций, на базе которых они созданы.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            11. Создание и совершенствование учебно-материальной базы обязательного обучения граждан
            мужского пола, достигших 16-летнего возраста, работающих в организациях и не прошедших
            обучение основам военной службы в образовательных учреждениях, указанных в пункте 1
            комментируемой статьи, обеспечивается организациями, в которых учебные центры были
            созданы.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Учебный центр должен иметь специально оборудованный кабинет для организации и проведения
            занятий по основам военной службы, оснащенный наглядными пособиями и стендами в
            соответствии с программой обучения.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            В соответствии с Правилами возмещения расходов, понесенных организациями и гражданами
            Российской Федерации в связи с реализацией Федерального закона «О воинской обязанности и
            военной службе», утвержденными Постановлением Правительства Российской Федерации от
            &nbsp; &nbsp; &nbsp; 1 декабря 2004 года № 704, возмещению подлежат расходы организаций,
            связанные с обучением граждан основам военной службы в учебных центрах организаций
            (кроме федеральных учреждений). Выплата производится путем перечисления денежных средств
            на счета получателей компенсации в пределах бюджетных обязательств и объема
            финансирования расходов по соответствующим кодам бюджетной классификации Российской
            Федерации, зафиксированным в лицевом счете получателя средств федерального бюджета,
            открытом в территориальном органе Российской Федерации, из Федерального казначейства в
            соответствующий военный комиссариат.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            12. Направление граждан в учебные центры (совместные учебные центры) для преподавания
            базовых знаний в области обороны и обучения основам военной службы, комплектование
            учебных групп и контроль за прохождением обучения осуществляются военными комиссариатами
            округов.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Идентификация граждан, подлежащих обучению, осуществляется военным комиссариатом округа
            при первоначальной постановке граждан на воинский учет. Для этих граждан составляется
            персональный список. Список граждан, направляемых на учебу в учебный центр, составляется
            приказом военного комиссара округа (района).
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            13. Учебные группы создаются для проведения занятий в учебном центре. Учебные группы
            комплектуются гражданами с учетом сроков их призыва на военную службу. Количество
            граждан в учебной группе (в зависимости от общего количества в учебном центре)
            устанавливается от 20 до 30 человек.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Для обеспечения обучения граждан в учебном центре издается приказ руководителя
            организации об организации и порядке проведения занятий, разрабатывается учебный план на
            весь период обучения и расписание занятий на месяц. Список граждан, направленных на
            обучение, прилагается к приказу.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Занятия в учебных центрах проводятся 2-3 раза в неделю по 2-3 часа. Обучение граждан в
            учебных центрах осуществляется в соответствии с обязательным минимумом содержания,
            требованиями к их уровню подготовки и примерным учебным планом по обучению граждан
            базовым знаниям в области обороны и их обучению основам военной службы.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Руководство организацией обучения граждан основам военной службы в учебном центре
            возлагается на внештатного начальника учебного центра и его заместителя по
            воспитательной работе, а непосредственная организация и проведение занятий с гражданами
            возлагается на внештатного инструктора-преподавателя. Они назначаются на должности
            руководителем организации, на базе которой создается учебный центр, в том числе
            совместный, по согласованию с органом местного самоуправления и военным комиссариатом
            округа (района) из числа офицеров, прапорщиков, мичманов, сержантов и старшин,
            работающих в организации.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            В конце обучения проводятся тесты. Для получения зачетов создается комиссия, состоящая
            из представителя органа местного самоуправления (председателя комиссии), представителей
            военного комиссариата округа (района), отвечающего за подготовку граждан к военной
            службе, и территориальных органов, управляющих гражданской обороной.
          </span>
        </p>
        <a id="id.3dy6vkm" />
        <p className="c1">
          <span className="c0">
            14. Результаты обучения основам военной службы отражаются в соответствующем
            свидетельстве об обучении, которое вручается гражданам. Списки граждан, прошедших
            обучение в учебных центрах, с результатами сдачи тестов по основам военной службы,
            направляются в военные комиссариаты по месту воинского учета граждан. Сотрудники
            военного комиссариата вносят соответствующие записи в регистрационные карточки
            призывников и удостоверения граждан, подлежащих призыву на военную службу [2,3].
          </span>
        </p>
        <p className="c1">
          <span className="c0">Статья 14. Военно-патриотическое воспитание граждан.</span>
        </p>
        <p className="c1">
          <span className="c0">
            1. Правительство Российской Федерации, органы исполнительной власти субъектов Российской
            Федерации и органы местного самоуправления совместно с Министерством обороны Российской
            Федерации, федеральными органами исполнительной власти, в которых настоящим Федеральным
            законом предусмотрена военная служба, и должностными лицами организаций обязаны
            систематически осуществлять проведение работы по военно-патриотическому воспитанию
            граждан.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            2. Подготовка, полученная гражданами в военно-патриотических молодежных и детских
            объединениях, учитывается призывными комиссиями при определении рода войск Вооруженных
            Сил Российской Федерации, а также других войск, воинских формирований и органов, в
            которых они будут проходить военную службу по призыву.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Положение об этих объединениях утверждается уполномоченным федеральным органом
            исполнительной власти.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            3. Финансирование военно-патриотического воспитания граждан осуществляется за счет
            средств федерального бюджета. Дополнительное финансирование данной деятельности может
            осуществляться за счет бюджетов субъектов Российской Федерации, местных бюджетов и
            внебюджетных фондов с согласия владельцев этих средств.
          </span>
        </p>
        <p className="c1">
          <span className="c0">Комментарий к статье 14.</span>
        </p>
        <p className="c1">
          <span className="c0">«Комментарий к пункту 1.</span>
        </p>
        <p className="c1">
          <span className="c0">
            1. Введение военно-патриотического воспитания граждан в рамках обязательной подготовки к
            военной службе является новшеством российского законодательства, поскольку ранее в
            правовом пространстве, регулирующем отношения в сфере воинской обязанности, не было
            упоминания об этом виде деятельности. В то же время этому посвящена отдельная статья
            комментируемого Федерального закона (статья 14).
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            4 марта 1998 года было принято обращение Государственной Думы Федерального Собрания
            Российской Федерации «О нравственном и военно-патриотическом воспитании молодежи и
            повышении уровня культуры военнослужащих, правоохранительных органов и силовых структур»
            № 2240-II Государственной Думы. В нем говорилось, что Вооруженные Силы Российской
            Федерации, другие войска, воинские формирования, органы, в которых федеральным законом
            предусмотрена военная служба, в том числе правоохранительные органы и службы
            безопасности, пополняются молодыми людьми, в сознании которых размыты представления о
            духовных ценностях народа. Государство в настоящее время не в состоянии в полной мере
            противостоять разрушению культурных традиций. Многие средства массовой информации, в
            первую очередь теле- и радиовещание, формируют негативное представление о современности
            и истории страны, о жизни военнослужащих. Государственная Дума призвала Совет Федерации
            Федерального Собрания Российской Федерации, Президента Российской Федерации,
            Правительство Российской Федерации, законодательные и исполнительные органы власти
            субъектов Российской Федерации, политические партии и другие общественные объединения,
            профсоюзы, средства массовой информации, культурные организации и учреждения, деятелям
            культуры и искусства способствовать объединению всех здоровых сил общества, созданию
            условий, в котором личность будет формироваться в атмосфере гордости за славную историю
            Отечества и его Вооруженных Сил. Она обратилась ко всем заинтересованным органам,
            организациям и учреждениям культуры, деятелям культуры и искусства с призывом возродить
            и развивать традиции шефской работы в воинских коллективах, активного участия общества в
            формировании подрастающего поколения. В обращении отмечалось, что Государственная Дума
            считает целесообразным создать государственную программу нравственного и
            военно-патриотического воспитания молодежи.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            2. Государство управляет системой патриотического воспитания, широко используя при этом
            общественные институты.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Федеральные органы исполнительной власти, органы исполнительной власти субъектов
            Российской Федерации и органы местного самоуправления, управляя процессом
            патриотического воспитания, действуют в пределах своих полномочий и объединяют усилия
            для обеспечения его эффективного функционирования.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Федеральные органы исполнительной власти обеспечивают реализацию решений Правительства
            Российской Федерации, положений вышеупомянутой Концепции и государственных программ
            патриотического воспитания граждан, разрабатывают ведомственные программы (планы)
            патриотического воспитания в пределах своей компетенции и организуют их реализацию.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Органы исполнительной власти субъектов Российской Федерации взаимодействуют с
            федеральными органами исполнительной власти в целях обеспечения реализации положений
            настоящей Концепции, государственных программ и планов по патриотическому воспитанию.
            Они вносят предложения по совершенствованию системы патриотического воспитания,
            разрабатывают долгосрочные региональные программы (планы) патриотического воспитания и
            реализуют их, совместно с органами местного самоуправления проводят мероприятия по
            привлечению общественных и религиозных объединений и организаций к решению задач
            патриотического воспитания, обеспечивают финансирование деятельности региональных
            программы.
          </span>
        </p>
        <p className="c5">
          <span className="c0">
            4. Формы военно-патриотической работы в настоящее время не закреплены в действующем
            законодательстве, что позволяет определять их в зависимости от поставленных целей и
            имеющихся финансовых возможностей.
          </span>
        </p>
        <p className="c5">
          <span className="c0">
            На федеральном уровне запланированы следующие военно-патриотические мероприятия:
          </span>
        </p>
        <p className="c5">
          <span className="c0">- всероссийские научно-практические конференции;</span>
        </p>
        <p className="c5">
          <span className="c0">- выставки в музеях Российской Федерации;</span>
        </p>
        <p className="c5">
          <span className="c0">
            - виртуальные исторические и документальные выставки в Интернете;
          </span>
        </p>
        <p className="c5">
          <span className="c0">- фестивали и конкурсы патриотической песни;</span>
        </p>
        <p className="c5">
          <span className="c0">- литературные и концертные программы;</span>
        </p>
        <p className="c5">
          <span className="c0">- слет спортсменов-автомобилистов в городах-героях;</span>
        </p>
        <p className="c5">
          <span className="c0">- марширующие парады муниципальных и военных оркестров;</span>
        </p>
        <p className="c5">
          <span className="c0">- конкурсы на лучший учебник по военной истории Отечества;</span>
        </p>
        <p className="c5">
          <span className="c0">
            - эстафеты пропагандистских поездов по территории Российской Федерации;
          </span>
        </p>
        <p className="c5">
          <span className="c0">
            - поисковые операции на полях сражений Великой Отечественной войны 1941-1945 годов;
          </span>
        </p>
        <p className="c5">
          <span className="c0">- спортивные состязания, спортивные игры и конкурсы;</span>
        </p>
        <p className="c5">
          <span className="c0">- создание фильмов;</span>
        </p>
        <p className="c5">
          <span className="c0">- учреждение наград и т.д.</span>
        </p>
        <p className="c5">
          <span className="c0">
            На региональном уровне формами военно-патриотической работы являются:
          </span>
        </p>
        <p className="c5">
          <span className="c0">
            - создание специализированных центров военно-патриотического воспитания,
            военно-патриотических организаций и клубов;
          </span>
        </p>
        <p className="c5">
          <span className="c0">
            - установление патронажных отношений между городами и военными организациями;
          </span>
        </p>
        <p className="c5">
          <span className="c0">
            - конкурсы журналистских работ на военно-патриотическую тематику;
          </span>
        </p>
        <p className="c5">
          <span className="c0">- фестивали военно-патриотической песни;</span>
        </p>
        <p className="c5">
          <span className="c0">- конкурсы военно-патриотических теле- и радиопрограмм;</span>
        </p>
        <p className="c5">
          <span className="c0">- проведение игр;</span>
        </p>
        <p className="c5">
          <span className="c0">- военно-патриотические автопробеги;</span>
        </p>
        <p className="c5">
          <span className="c0">
            - конкурсы по военно-патриотическому воспитанию, проводимые среди образовательных
            учреждений и военных организаций;
          </span>
        </p>
        <p className="c5">
          <span className="c0">- учреждение наград.</span>
        </p>
        <p className="c1">
          <span className="c0">
            5. Отличительной особенностью организации военно-патриотической работы в Вооруженных
            Силах Российской Федерации является проведение в соответствии со статьей 5 Федерального
            закона "О днях воинской славы (Днях Победы)" От 13 марта 1995 г. № 32-ФЗ воинских
            ритуалов, торжеств и праздничных салютов в последующие дни:
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            18 апреля – День Победы русских воинов князя Александра Невского над немецкими рыцарями
            на Чудском озере (Ледовое побоище, 1242);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            21 сентября - Русские полки во главе с великим князем Дмитрием Донским одержали победу
            над монголо–татарскими войсками в Куликовской битве (1380);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            7 ноября - День военного парада на Красной площади в Москве в ознаменование двадцать
            четвертой годовщины Великой Октябрьской Социалистической революции (1941);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            10 июля – День Победы русской армии под командованием Петра Великого над шведами в
            Полтавской битве (1709);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            9 августа – День первой в российской истории морской победы русского флота под
            командованием Петра Великого над шведами у мыса Гангут (1714);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            24 декабря - Русские войска под командованием А.В. Суворова взяли турецкую крепость
            Измаил (1790);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            11 сентября – День победы русской эскадры под командованием Ф.Ф. Ушакова над турецкой
            эскадрой у мыса Тендра (1790);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            8 сентября – День Бородинского сражения русской армии под командованием М.И. Кутузова с
            французской армией (1812);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            1 декабря – День победы русской эскадры под командованием П.С. Нахимова над турецкой
            эскадрой у мыса Синоп (1853);
          </span>
        </p>
        <p className="c1">
          <span className="c0">23 февраля – День защитника Отечества;</span>
        </p>
        <p className="c1">
          <span className="c0">
            5 декабря – День начала советских контрнаступлений против немецко-фашистских войск в
            битве за Москву (1941);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            2 февраля – День разгрома советскими войсками немецко-фашистских войск в Сталинградской
            битве (1943);
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            23 августа - День разгрома советскими войсками немецко-фашистских войск в Курской битве
            (1943);
          </span>
        </p>
        <p className="c1">
          <span className="c0">27 января - День снятия блокады Ленинграда (1944);</span>
        </p>
        <p className="c1">
          <span className="c0">
            9 мая - День Победы Советского народа в Великой Отечественной войне 1941-1945 годов
            (1945);
          </span>
        </p>
        <p className="c1">
          <span className="c0">4 ноября - День национального единства.</span>
        </p>
        <p className="c1">
          <span className="c0">
            Данные мероприятия проводятся в соответствии с порядком,
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;порядке проведения дней воинской
            славы (Дней победы) России в Вооруженных Силах Российской Федерации и других войсках» от
            4 декабря 1995 года № 1183. Содержание, порядок подготовки и проведения торжественных
            мероприятий определяются в соответствии с законодательством Российской Федерации и
            уставами Вооруженных Сил Российской Федерации" [2,3].
          </span>
        </p>
      </section>
      <section id="2">
        <p className="c1">
          <span className="c24 c10 c33">Глава 2.</span>
          <span className="c13 c10">
            &nbsp;Требования постановления Правительства РФ от 31 декабря 1999г. №&nbsp;1441 «Об
            утверждении Положения «О подготовке граждан Российской Федерации к военной службе».
          </span>
        </p>
        <a id="id.1t3h5sf" />
        <p className="c1">
          <span className="c0">
            Постановлением Правительства Российской Федерации № 1441 от 31 декабря 1999 года введено
            в действие Положение «О подготовке граждан Российской Федерации к военной службе»,
            определяющее порядок обучения граждан мужского и женского пола основам военной службы в
            образовательных организациях общего и профессионального образования [4].
          </span>
        </p>
        <p className="c1">
          <span className="c0">Рассмотрим выдержки из положения.</span>
        </p>
        <p className="c1">
          <span className="c0">
            5. Обучение основам военной службы предусмотрено для граждан мужского пола и проводится
            в образовательных организациях в рамках освоения образовательной программы среднего
            общего образования или среднего профессионального образования в течение последних 2 лет
            обучения и в учебных центрах.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            В учебных центрах граждане, достигшие 16-летнего возраста, не обучающиеся в организациях
            образования и не работающие в организациях, проходят обучение основам военной службы по
            направлению военных комиссариатов.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            6. Обучение граждан основам военной службы осуществляется в соответствии с федеральными
            государственными образовательными стандартами.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            7. Отбор преподавателей, обучающих граждан основам военной службы, осуществляется, как
            правило, из числа офицеров, находящихся в запасе, имеющих высшее или среднее
            профессиональное образование по программам подготовки специалистов среднего звена, а
            также выпускников военных кафедр педагогических образовательных организаций с высшим
            образованием, обладающие необходимыми знаниями и высокими моральными и деловыми
            качествами.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Если невозможно заменить штатную должность преподавателя лицом, имеющим офицерское
            звание и находящимся в запасе, разрешается в виде исключения назначать на эту должность
            прапорщиков, мичманов, сержантов, старшин, солдат или матросов, имеющих высшее
            образование или среднее профессиональное обучение по программам подготовки специалистов
            среднего звена.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            16. С гражданами женского пола в общеобразовательных организациях и профессиональных
            образовательных организациях занятия по углубленному изучению основ медицинских знаний
            проводятся отдельно от граждан мужского пола.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            Отбор преподавателей для проведения занятий по основам медицинских знаний осуществляется
            руководителями образовательных организаций совместно с органами здравоохранения из числа
            подготовленных медицинских работников, а также преподавателей, прошедших обучение по
            программе подготовки медицинских сестер.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            17. Порядок организации и проведения учебно-тренировочных сборов определяется
            совместными нормативными правовыми актами Министерства обороны Российской Федерации и
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            18. Военно-патриотическое воспитание, являющееся неотъемлемой частью обязательной
            подготовки граждан к военной службе, организуется органами исполнительной власти
            субъектов Российской Федерации и органами местного самоуправления совместно с
            Министерством обороны Российской Федерации и федеральными органами исполнительной
            власти, в которых военная служба предусмотрена законом, и проводится в
            общеобразовательных организациях, реализующих образовательные программы основного общего
            и среднего общего образования, профессиональных образовательных организациях и высших
            учебных заведениях, в учебных центрах, а также военно-патриотических молодежных и
            детских объединениях.
          </span>
        </p>
        <p className="c1">
          <span className="c0">
            19. В военно-патриотическом воспитании граждан могут принимать участие общественные и
            религиозные объединения, деятельность которых разрешена на территории Российской
            Федерации.
          </span>
        </p>
        <p className="c9 c14">
          <span className="c0" />
        </p>
      </section>
      <p className="c1">
        <span className="c13 c10">
          Глава 3. Требования «Инструкции об организации обучения граждан Российской Федерации
          начальным знаниям в области обороны и их подготовки по основам военной службы в
          образовательных учреждениях среднего (полного) общего образования, образовательных
          учреждениях начального профессионального и среднего профессионального образования и
          учебных пунктах», утверждённой приказом Министра обороны Российской Федерации и Министра
          образования и науки Российской Федерации от 24 февраля 2010 года № 96/134.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Инструкция введена в действие Приказом Министра обороны Российской Федерации и
          Министерства образования и науки Российской Федерации от 24 февраля 2010 года № 96/134 «Об
          утверждении Инструкции по организации обучения граждан Российской Федерации базовым
          знаниям в области обороны и их обучение основам военной службы в образовательных
          учреждениях среднего (полного) общего образования, образовательных учреждениях начального
          профессионального и среднего профессионального образования и учебных центрах» [5].
        </span>
      </p>
      <p className="c1">
        <span className="c0">Рассмотрим выдержки из Инструкции [6].</span>
      </p>
      <p className="c1">
        <span className="c0">
          33. Обучение граждан базовым знаниям в области обороны и их обучение основам военной
          службы предусматривают ежегодные учебные сборы.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          К участию в тренировочных сборах приглашаются все граждане, обучающиеся в учебных
          заведениях и учебных центрах, за исключением тех, кто имеет освобождение от занятий по
          состоянию здоровья.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          35. Продолжительность учебных занятий составляет 5 дней (35 учебных часов).
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В ходе учебных занятий изучаются следующие предметы: размещение и быт военнослужащих,
          организация караульной и внутренней служб, элементы боевой, огневой, тактической,
          физической и военно-медицинской подготовки, а также вопросы радиационной, химической и
          биологической защиты войск.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В ходе учебно-тренировочных сборов проводятся военно-профессиональные ориентационные
          мероприятия.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          36. Учебно-тренировочные сборы проводятся на базе соединений и воинских частей Вооруженных
          Сил Российской Федерации, других войск, воинских формирований и органов. В местах, где нет
          соединений и воинских частей, учебно-тренировочные сборы организуются на базе региональных
          центров допризывной подготовки молодежи к военной службе, военно-патриотических молодежных
          и детских общественных объединений оборонных спортивных лагерей или образовательных
          учреждений.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          37. Организация учебно-тренировочных сборов осуществляется в соответствии с приказом
          высшего должностного лица субъекта Российской Федерации (руководителя высшего
          исполнительного органа государственной власти субъекта Российской Федерации),
          согласованным с военным комиссаром (далее – приказ), в котором указаны места и время
          проведения учебно-тренировочных сборов, методическое обеспечение учебно-тренировочных
          сборов, вопросы взаимодействия с соединениями и воинскими частями, порядок финансирования
          учебно-тренировочных сборов, а также вопросы организации жизни и быта граждан на
          учебно-тренировочных сборах (проживание, питание, медицинское обслуживание, доставка
          граждан к месту обучения) и назначение ответственных руководителей.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          53. Результаты учебных занятий оцениваются в соответствии с рекомендациями по оценке
          результатов учебных занятий (Приложение № 9 к настоящей Инструкции).
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Общая оценка граждан, обучающихся в образовательных учреждениях (учебных центрах),
          заносится в аудиторный журнал с пометкой «Учебные сборы», которая учитывается при выдаче
          итоговой оценки за весь курс обучения в образовательном учреждении (учебном центре).
          Гражданам, уклонившимся от учебных сборов, выставляется неудовлетворительная оценка за
          сборы. Для граждан, не прошедших учебные сборы по уважительным причинам, в образовательном
          учреждении (учебном центре) организуется теоретическое изучение материалов учебных сборов
          и сдача тестов.
        </span>
      </p>
      <p className="c2">
        <span className="c0" />
      </p>
      <p className="c1">
        <span className="c13 c10">
          Глава 4. Учебные сборы – важная форма адаптации юношей к службе в рядах Вооруженных Сил
          Российской Федерации.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Неотъемлемой частью социально-экономических преобразований, происходящих в обществе,
          является разработка и реализация военной реформы, успех и эффективность которой во многом
          зависят не только от уровня профессиональных и духовно-нравственных качеств военных
          специалистов, но и от качества допризывной подготовки будущих солдат.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Высокая духовность и нравственность особенно важны в Вооруженных Силах, которые
          проявляются в уровне дисциплины и ответственности солдат и командиров. Без них армия
          слабеет, теряет свое лицо и социальную значимость.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Нравственное воспитание - это целенаправленное воздействие на человека с целью
          формирования нравственного сознания, развития нравственных чувств, выработки навыков и
          умений нравственного поведения. Подготовка личности будущего воина на занятиях по основам
          безопасности жизнедеятельности и охраны труда заключается в развитии когнитивной,
          эмоциональной и волевой сфер личности, которые проявляются в образовательном,
          морально-психологическом и физическом уровнях развития.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В современных условиях работа по формированию и воспитанию морально-психологической
          составляющей общей подготовки допризывников приобретает особую актуальность. Воинская
          дисциплина - это строгое и точное соблюдение всем военнослужащим порядка и правил,
          установленных законами, воинскими уставами и приказами командиров (начальников). Она
          основана на осознании каждым военнослужащим воинского долга и личной ответственности за
          защиту своего Отечества, на его преданности своему народу. Особенность воинской дисциплины
          заключается в том, что она включает в себя все признаки таких видов дисциплины, как
          учебная, трудовая, производственная и т.д.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Закон «Об образовании», принятый в 1992 году, отменил начальную военную подготовку в
          школах, ПТУ, техникумах, и в связи с этим были прекращены занятия по огневой,
          общевойсковой и строевой подготовке будущих призывников, а все материально-техническое
          обеспечение этой работы было сдано на хранение. Естественно, все это негативно сказалось
          на подготовке допризывников. На современном этапе в России подготовка студентов к военной
          службе осуществляется в ходе изучения курса «Основы безопасности жизнедеятельности»,
          «Безопасность жизнедеятельности», а также в ходе 5-дневных учебно-тренировочных сборов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Проблемой подготовки будущих защитников Отечества является формирование их готовности к
          службе в Вооруженных Силах. В Словаре русского языка С.И.Ожегова «готовность» означает
          согласие что-то сделать, состояние, в котором все сделано, все готово. Сам термин,
          возникший в экспериментальной психологии, был перенесен на психолого-педагогические
          исследования. Готовность определяется как условие успешного выполнения деятельности, как
          избирательная активность, настраивающая организм, личность на будущую деятельность, как
          предпосылка и регулятор деятельности. Различают временную (ситуационную) и долгосрочную
          (стабильную) готовность, функциональную и личностную, психологическую и практическую,
          готовность к умственной и физической активности.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В психологическом словаре «готовность к действию» рассматривается в нескольких аспектах:
          как вооруженность человека знаниями, умениями, навыками, необходимыми для успешного
          выполнения действий; согласие с решимостью совершать какие-либо действия и т.д.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Содержание готовности будущего военнослужащего к службе в армии в широком смысле этого
          слова сочетает в себе морально-волевые качества личности, социально значимые мотивы,
          знания, навыки и умения. В узком смысле это приобретение допризывником соответствующих
          профессионально значимых знаний, навыков и умений.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В условиях допризывной подготовки в рамках программы общеобразовательного учреждения
          полностью решить проблему формирования готовности будущих солдат не представляется
          реалистичным, поскольку это задачи специальных организаций, таких как ДОСААФ и др. В то же
          время формирование морально-волевых качеств личности, социально значимых мотивов и
          фрагментарных знаний, умений и навыков о военной службе является одной из обязательных
          задач предметов ОБЖ и БЖД.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Для будущего защитника Отечества большое значение имеет осознание понятия «Оптимальное
          боевое состояние», которое индивидуально для каждого человека, но в нем можно выделить три
          основных компонента: физический, эмоциональный и психический.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Физическая составляющая означает набор физических качеств и соответствующих ощущений в
          теле, таких как сила, скорость, реакция, ощущение свободного дыхания, четкая работа
          сердца. Эмоциональный компонент предполагает владение человеком уровнем эмоционального
          возбуждения, понимаемого как определенная сила возбуждения, в котором находится человек.
          Ментальный компонент характеризует способность человека к осмысленным действиям и полной
          концентрации на выполняемой работе и в то же время четкое представление о цели и средствах
          ее достижения.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Ментальный компонент характеризуется образовательным уровнем допризывников, который в
          настоящее время достаточно высок, хотя есть и те, чей образовательный уровень очень низок.
          Человеческое мышление может быть успешно и быстро развито при определенных
          психолого-педагогических условиях.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Физическая составляющая, в условиях строгого соблюдения режима занятий физкультурой, также
          поддается достижению соответствующего уровня довольно быстро. В то же время все больше
          наших допризывников имеют серьезные заболевания и отклонения от норм физического развития.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Практика работы с допризывниками показала, что желание добровольно идти служить в армию
          резко падает, особенно среди городской молодежи. Многие допризывники психологически не
          принимают свое пребывание в Вооруженных Силах. Поэтому перед
          преподавателями-организаторами ОБЖ, сотрудниками военных комиссариатов стоит серьезная
          государственная задача: обратить молодежь в армию, сформировать и развить позитивную
          потребность и мотивацию служить в армии не просто как необходимость, а как сознательный
          долг перед Отечеством, продемонстрировать искреннее желание сделать это всем своим
          поведением. Это очень сложно, потому что средства массовой информации передают, а бывшие
          военнослужащие рассказывают о повседневной жизни солдата, далекой от «сладкой» и приятной
          миссии, связанной с безразличием офицерского корпуса к солдату. Сформированная привычка
          выживать в неблагоприятных условиях и при этом оставаться ЧЕЛОВЕКОМ, умение быстро
          адаптироваться, раскрытие своей индивидуальности и интеграция в солдатское сообщество
          позволят будущему солдату успешно пройти военную службу.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Но этого недостаточно. Необходимо знать индивидуальные способности будущего воина, чтобы
          определить, для каких видов деятельности он наиболее подходит. Современный отбор
          военнослужащих в различные виды вооруженных сил в большинстве случаев осуществляется на
          основании состояния здоровья, специальной допризывной подготовки на базе ДОСААФ, которая
          позволяет выявить способности будущих военнослужащих, их предрасположенность к тому или
          иному виду деятельности. Но это большая редкость, чем закономерность в работе с
          допризывниками. В связи с этим необходимо обратить внимание преподавателя-организатора ОБЖ
          на важность выявления предрасположенности и склонности будущих солдат к какому-либо виду
          деятельности и определения, в каких родах вооруженных сил это может быть максимально
          учтено и создать личную ситуацию заинтересованности. успехов на военной службе. Такой
          подход позволит успешно провести процесс адаптации, ответственно относиться к своим
          обязанностям, сознательно соблюдать воинскую дисциплину и в конечном итоге вернуться домой
          с глубоким чувством выполненного гражданского долга перед Родиной, своими родителями и
          земляками.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Современному молодому человеку больше импонирует инфантильность – за него все решают
          родители или кто-то другой, он готов делать только то, что ему нравится, то есть вести
          праздный образ жизни. В связи с этим необходимо рассмотреть трактовку понятия «привычка» с
          позиций теории и практики психолого-педагогической науки.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Еще Д .Локк отмечал в своих работах, что формирование нравственных привычек играет важную
          роль в воспитании [7]. К.Д.Ушинский пишет об ужасной силе, которую может иметь привычка:
          «Сколько прекрасных начинаний и даже сколько превосходных людей пали под бременем дурных
          привычек! Если бы одновременных, хотя и самых энергичных усилий над собой было достаточно,
          чтобы искоренить вредные привычки, то избавиться от них было бы нетрудно. Разве нет
          случая, чтобы человек готов был отрезать себе руку или ногу, если при этом они отрежут
          вредную привычку, отравляющую ему жизнь» [8].
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Отправной точкой здесь является навык, который хорошо виден в обучении. Не нужно думать,
          сколько будет дважды два. Мы сразу даем правильный ответ, потому что много раз повторяли
          это действие, превратив его в условный рефлекс. То же самое относится и к образованию.
          Многократное повторение действия или поступка постепенно превращает их в навык. В период
          обучения необходимо постоянно ставить учащихся в ситуацию повторения действий для
          самообразования и тем самым формировать у них навыки этой деятельности и становиться
          привычкой. «Если бы у человека не было способности к мастерству, отмечал Ушинский, он не
          смог бы продвинуться ни на шаг в своем развитии, постоянно задерживаясь из-за бесчисленных
          трудностей, которые можно преодолеть только мастерством, освобождая разум и волю для новой
          работы и для новых побед». «Привычка - это тот же навык, но только на более высоком уровне
          автоматизма. Если воспитателю удалось отобрать все необходимые действия, которые нужно
          сделать привычными, если он мастер формирования полезных привычек, его дело обеспечено», -
          писала Н.Д. Виноградова [9].
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В связи с этим преподаватель-организатор ОБЖ может определить, в соответствии с программой
          обучения, необходимые действия учащихся, которые необходимо перевести в обычные. Таким
          образом, образовательная деятельность учащихся на занятиях по ОБЖ и БЖД должна быть
          организована как опыт, воспитывающий определенную группу привычек.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Что нужно сделать, чтобы допризывники были дисциплинированными и ответственными, чтобы они
          строго выполняли приказы, умели приказывать сами, были исполнительными, обязательными,
          умели уступать друг другу, нейтрализовать неформальных «лидеров»? Все попытки решить
          проблему лоб в лоб с помощью разговоров и убеждения терпят неудачу. Предыдущий опыт
          школьной жизни сформировал привычку игнорировать требования учителей: не делать домашнее
          задание, отказываться от порученных заданий, грубость, несоблюдение распорядка дня и т.д.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Во время 5-дневных тренировочных сборов привычка к подчинению успешно вырабатывается
          благодаря организации жизни в команде. Сама команда делится на роты, рота на взводы.
          Каждое подразделение возглавляет командир. Командиры назначаются учителем из числа
          авторитетных ребят. Поскольку командиры выполняют волю подразделения, которая также
          является волей учителей, поскольку они не стоят над подразделением, а проводят свою
          собственную линию, числясь рядовыми членами этого подразделения, процесс дисциплины
          значительно ускоряется. Так постепенно начинают проявляться признаки полезных привычек:
          чувство ответственности, аккуратность, умение приказывать и подчиняться, отчитываться о
          выполнении задания. Создать возможность возложить лидерские обязанности на всех
          допризывников, т.е. сформировать у них навыки, привычки к деятельности, которые объективно
          заставляли их становиться примером для других. В этом случае создается ситуация быть
          подчиненным и командиром, и эта зависимость исключает такое нежелательное явление, как
          дедовщина, желание задавить более слабого. Такая организация создает очень необходимые
          привычки. Никто не считает себя «второсортным», каждый готов взяться за любое поручение и
          выполнить его, у каждого развивается чувство собственного достоинства, каждый чувствует
          себя хозяином общего дела.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Педагогическим коллективам образовательных учреждений общего и профессионального
          образования отводится важнейшая, незаменимая роль в формировании личностных качеств
          будущих призывников и их подготовке к военной службе. От них зависят те составляющие
          боеготовности и боеспособности воинских коллективов, которые предопределяются уровнем
          готовности призывников к выполнению воинского долга.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В целях закрепления знаний и умений, полученных на занятиях по основам военной службы,
          проводятся учебно-тренировочные сборы с гражданами, обучающимися в образовательных
          учреждениях среднего (полного) общего образования, начального и среднего профессионального
          образования и в учебных центрах организаций. Продолжительность учебных занятий составляет
          5 дней (35 учебных часов).
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В ходе учебных занятий изучаются следующие предметы: размещение и быт военнослужащих,
          организация караульной и внутренней служб, элементы боевой, огневой, тактической,
          физической и военно-медицинской подготовки, а также вопросы радиационной, химической и
          биологической защиты войск. В ходе учебно-тренировочных сборов проводятся
          военно-профессиональные ориентационные мероприятия. Учебно-тренировочные сборы проводятся
          на базе соединений и воинских частей Западного военного округа, учебно-методического
          центра «Авангард», оборонных и спортивно-оздоровительных центров и лагерей.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          К участию в тренировочных лагерях привлекаются юноши, не имеющие освобождения от занятий
          по состоянию здоровья. Для граждан, не прошедших учебные сборы по состоянию здоровья,
          учебное заведение организует теоретическое изучение материалов учебных сборов и сдачу
          зачетов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          На основании распоряжения областной администрации «Об организации и проведении 5-дневных
          учебно-тренировочных сборов с гражданами, обучающимися в государственных образовательных
          организациях, проходящими обучение основам военной службы», ежегодно издается приказ
          руководителями образовательных учреждений среднего (полного) общего образования,
          начального и среднего профессионального образования для организации и проведения
          учебно-тренировочных сборов в текущем учебном году.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В приказе указаны места и время проведения учебно-тренировочных сборов, методическое
          обеспечение учебно-тренировочных сборов, вопросы взаимодействия с соединениями и воинскими
          частями, порядок финансирования учебно-тренировочных сборов, а также вопросы организации
          жизни и быта граждан на учебно-тренировочных сборах (размещение, питание, медицинское
          обслуживание, доставка граждан к месту обучения) и назначает администрацию тренировочных
          лагерей.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В администрацию тренировочного лагеря назначаются: начальник тренировочного лагеря,
          начальник штаба тренировочного лагеря и его заместители (по воспитательной работе и по
          хозяйственной части). Руководителям образовательных организаций оказать содействие
          преподавательскому составу образовательных организаций, обучающих граждан базовым знаниям
          в области обороны и их обучению основам военной службы, при необходимости выделить
          дополнительных учителей-предметников.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Руководитель сборов за обучение осуществляет общее руководство подготовкой и проведением
          сборов. Он отвечает: за своевременную разработку документов, регламентирующих их
          проведение, обучение должностных лиц сборов; за координацию организации и порядка
          проведения сборов; за организацию взаимодействия образовательной организации с отделом
          Военного комиссариата и подразделением (воинской частью), участвующим в подготовке и
          проведении сборов; за организацию и состояние учебно-воспитательной работы, хозяйственную
          и финансовую деятельность, соблюдение требований безопасности.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Начальник штаба учебно-тренировочного лагеря непосредственно разрабатывает план подготовки
          и проведения учебно-тренировочного лагеря, расписание занятий, распорядок дня, организует
          размещение и транспортировку граждан к местам занятий и обратно, оформляет заявки на
          необходимое имущество, организует и руководит внутренней службой на сборе составляет смету
          расходов на тренировочный лагерь.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Заместитель начальника учебного лагеря (по воспитательной работе) отвечает за организацию
          и проведение военно-патриотического воспитания граждан, их дисциплину и
          морально-психологическое состояние. Он разрабатывает план мероприятий по
          военно-патриотическому воспитанию граждан, участвует в разработке плана спортивных
          мероприятий, изучает потребности и запросы граждан и принимает меры по их удовлетворению.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Заместитель начальника отдела сборов (по экономической части) отвечает за материальное
          обеспечение сборов. Он совместно с командованием соединения (воинской части) организует
          размещение, питание и медицинское обеспечение граждан, принимает и выдает имущество,
          предусмотренное планом подготовки и проведения сборов, обеспечивает сохранность и ведет
          учет материальных ценностей. После окончания сборов он сдает имущество и другие
          материальные средства, полученные во временное пользование, отчитывается перед
          командованием соединения (воинской части) за потребленное продовольствие.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Администрация учебных лагерей совместно с представителем военного комиссариата заранее
          согласовывает с соединением (воинской частью): время и порядок проведения занятий,
          количество граждан, привлекаемых к проведению учебных сборов, места нахождения обучаемых в
          районе учебных лагерей, маршруты их безопасного передвижения к местам проведения занятий,
          требованиям безопасности при проведении занятий и другим вопросам.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Учебный процесс, осуществляемый во время учебно-тренировочных сборов, организован в
          соответствии с расчетом часов по изучаемым предметам, учебно-тематическим планом и
          распорядком дня.
        </span>
      </p>
      <p className="c9 c14">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 5. Последовательность работы образовательной организации при подготовке к проведению
          учебных сборов.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Работа в образовательной организации начинается с получения приказа от районного отдела
          образования о проведении учебно-тренировочных сборов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">Она включает в себя:</span>
      </p>
      <p className="c1">
        <span className="c0">1. Изучение и уточнение полученного задания.</span>
      </p>
      <p className="c1">
        <span className="c0">
          2. Подготовка и утверждение Плана подготовки к учебно-тренировочным сборам.
        </span>
      </p>
      <p className="c1">
        <span className="c0">3. Проведение служебного совещания.</span>
      </p>
      <p className="c1">
        <span className="c0">
          4. Выдача приказа образовательной организации о подготовке и проведении
          учебно-тренировочных сборов и доведение его до исполнителей.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          5. Организация медицинского освидетельствования участников учебно-тренировочных сборов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">6. Проведение родительских собраний.</span>
      </p>
      <p className="c1">
        <span className="c0">
          7. Подготовка и заключение договора с поставщиком услуг на проведение учебно-тренировочных
          сборов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">8. Подготовка студентов к сборам.</span>
      </p>
      <p className="c1">
        <span className="c0">9. Подготовка документации для тренировочных лагерей.</span>
      </p>
      <p className="c1">
        <span className="c0">
          10. Доложить в управление образования о готовности к тренировочным сборам с представлением
          списков участников тренировочных сборов и юношей, не допущенных к посещению тренировочных
          сборов, с указанием причин.
        </span>
      </p>
      <p className="c1">
        <span className="c13 c10">1. Уяснение полученной задачи.</span>
      </p>
      <p className="c1">
        <span className="c0">Разбираясь в полученном задании, необходимо понимать:</span>
      </p>
      <p className="c1">
        <span className="c0">- даты проведения тренировочных сборов;</span>
      </p>
      <p className="c1">
        <span className="c0">
          - название воинской части, на базе которой будут проводиться учебно-тренировочные сборы;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - порядок заключения договора с подрядчиком на проведение учебно-тренировочных сборов;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - сроки и время проведения инструкторско-методических занятий с руководителями сборов от
          образовательной организации в отделе образования;
        </span>
      </p>
      <p className="c1">
        <span className="c0">- состав администрации сборов за обучение;</span>
      </p>
      <p className="c1">
        <span className="c0">
          - крайние сроки представления списков участников сборов в управление образования;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - перечень документов, которые руководитель сборов за обучение из образовательной
          организации должен иметь при себе при выезде в воинскую часть;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - крайние сроки подачи заявки в управление образования на заказ автобусов;
        </span>
      </p>
      <p className="c1">
        <span className="c0">- дата и время убытия в воинскую часть и возвращения обратно;</span>
      </p>
      <p className="c1">
        <span className="c0">- маршрут до воинской части и обратно.</span>
      </p>
      <p className="c1">
        <span className="c10">2. </span>
        <span className="c13 c10">Подготовка и утверждение Плана подготовки к учебным сборам.</span>
      </p>
      <p className="c1">
        <span className="c0">
          После изучения приказа по указанию директора образовательного учреждения педагогический
          работник, осуществляющий подготовку граждан с базовыми знаниями в области обороны и их
          обучение основам военной службы (далее - преподаватель-организатор ОБЖ), приступает к
          составлению плана проведения подготовка и проведение учебно-тренировочных сборов с
          учащимися 10-х классов. План утверждается директором образовательной организации и
          доводится под подпись ответственным исполнителям в течение 3 дней с даты получения приказа
          Департамента образования о проведении сборов.
        </span>
      </p>
      <p className="c1">
        <span className="c10">3. </span>
        <span className="c24 c10">Проведение служебного совещания</span>
        <span className="c0">.</span>
      </p>
      <p className="c1">
        <span className="c0">
          На служебном совещании директор образовательной организации или по его указанию:
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - доводит требования руководящих документов по подготовке и проведению 5-дневных
          тренировочных сборов с юношами;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - ставит задачи перед ответственными исполнителями и определяет сроки их выполнения;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - назначает ответственных исполнителей за реализацию мероприятий по подготовке и
          проведению учебно-тренировочных сборов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          4. Выдача приказа образовательной организации о подготовке и проведении
          учебно-тренировочных сборов и доведение его до исполнителей.
        </span>
      </p>
      <p className="c1">
        <span className="c0">В приказе образовательной организации указывается:</span>
      </p>
      <p className="c1">
        <span className="c0">
          в административной части - на базе которой организуются и проводятся тренировочные лагеря;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          в части приказа – даты и место проведения сборов за обучение; назначается руководитель
          сборов за обучение и, при необходимости, персонал, сопровождающий обучаемых на сборы за
          обучение: задачи руководителю сборов за обучение по подготовке и проведению сборов за
          обучение, разработка документов, регулирующих проведение сборов за обучение и другие
          вопросы.
        </span>
      </p>
      <p className="c1">
        <span className="c10">5. </span>
        <span className="c24 c10">
          Организация медицинского освидетельствования участников учебно-тренировочных сборов
        </span>
        <span className="c0">.</span>
      </p>
      <p className="c1">
        <span className="c0">
          Медицинское освидетельствование юношей организуется руководителем учебных сборов
          образовательной организации совместно с медицинским работником, закрепленным за
          образовательной организацией.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Медицинское освидетельствование студентов проводится в медицинском учреждении, в котором
          студент состоит на учете. При этом медицинское учреждение обязано выдать студенту справку
          по форме № 079/U.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Результаты медицинского освидетельствования заносятся в списки. В список молодых людей,
          допущенных в тренировочный лагерь по медицинским показаниям, включены только студенты,
          признанные годными по состоянию здоровья. Список составляется руководителем тренировочного
          лагеря и подписывается медицинским работником и директором образовательной организации.
        </span>
      </p>
      <p className="c1">
        <span className="c10">6. </span>
        <span className="c24 c10">Проведение родительских собраний.</span>
      </p>
      <p className="c1">
        <span className="c0">
          Родительское собрание проводится с целью информирования родителей юношей о требованиях
          руководящих документов по проведению учебно-тренировочных сборов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">На родительском собрании выносятся следующие вопросы:</span>
      </p>
      <p className="c1">
        <span className="c0">- даты и место проведения тренировочных сборов;</span>
      </p>
      <p className="c1">
        <span className="c0">- план проведения тренировочных лагерей;</span>
      </p>
      <p className="c1">
        <span className="c0">
          - порядок выезда обучающихся к месту учебно-тренировочных сборов и возвращения обратно;
        </span>
      </p>
      <p className="c1">
        <span className="c0">- организация питания и проживания студентов в учебных лагерях;</span>
      </p>
      <p className="c1">
        <span className="c0">
          - экипировка учащихся (сезонная одежда, домашние тапочки, спортивная обувь, головные
          уборы, сменная обувь, туалетные принадлежности, медицинская страховка, блокнот и ручка).
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Чтобы добиться минимального отказа родителей отпускать своих детей на сборы, целесообразно
          организовать показ для родителей подготовленного учебного фильма «Организация и проведение
          сборов по основам военной службы», а также выступления юношей, прошедших сборы в
          предыдущий учебный год.
        </span>
      </p>
      <p className="c1">
        <span className="c10">7. </span>
        <span className="c24 c10">
          Подготовка и заключение договора с поставщиком услуг на проведение учебных сборов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В связи с тем, что в большинстве школ обучается небольшое количество молодых людей, оплата
          Поставщику услуг на проведение учебных сборов определяется администрацией учебных сборов
          от управления образования образования.
        </span>
      </p>
      <p className="c1">
        <span className="c10">8. </span>
        <span className="c24 c10">Подготовка студентов к учебным сборам.</span>
      </p>
      <p className="c1">
        <span className="c0">
          Перед выездом на учебно-тренировочные сборы руководитель учебно-тренировочных сборов
          доводит требования до участников учебно-тренировочных сборов под роспись:
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - безопасность при передвижении в составе колонны на автобусах к месту тренировочных
          сборов и обратно;
        </span>
      </p>
      <p className="c1">
        <span className="c0">- безопасность во время проведения стрельб;</span>
      </p>
      <p className="c1">
        <span className="c0">
          - безопасность во время занятий по физической, огневой и тактической подготовке и РХБЗ;
        </span>
      </p>
      <p className="c1">
        <span className="c0">- пожарная, электро- и взрывобезопасность и другие.</span>
      </p>
      <p className="c1">
        <span className="c10">9. </span>
        <span className="c24 c10">Подготовка документации для учебных сборов</span>
        <span className="c0">.</span>
      </p>
      <p className="c1">
        <span className="c0">
          Руководитель учебных сборов разрабатывает и берет на сборы следующие документы для
          проведения учебных сборов:
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - копия приказа образовательной организации о подготовке и проведении учебно-тренировочных
          сборов;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - учебно-тематический план проведения учебно-тренировочных сборов;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - список молодых людей, допущенных к учебным сборам по медицинским показаниям;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - инструктивный лист по требованиям безопасности с росписями учащихся;
        </span>
      </p>
      <p className="c1">
        <span className="c0">- временный журнал успеваемости;</span>
      </p>
      <p className="c1">
        <span className="c0">- сводный оценочный лист студентов по учебным сборам.</span>
      </p>
      <p className="c9 c14">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c10 c13">
          Глава 6. Организация выезда учащихся, привлекаемых к проведению учебных сборов, в
          соединения и воинские части (оборонно-спортивные и оздоровительные лагеря) и возвращения в
          образовательную организацию.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Перевозка детей к месту проведения учебно-тренировочных сборов и обратно осуществляется
          автобусами, выделенными организациям или предприятиям, имеющим лицензию на осуществление
          данного вида деятельности, на основании письменных заявок, поданных не позднее, чем за
          семь дней до начала перевозки.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В заявлении указываются: дата, время перевозки детей, их количество и возраст, место
          посадки и высадки, маршрут, фамилия, имя, отчество лица, ответственного за перевозку
          детей, его должность.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Заказ автобусов для перевозки детей должен осуществляться в транспортных организациях и
          предприятиях, имеющих соответствующую лицензию. Кроме того, у перевозчика должна быть
          лицензионная карточка на транспортное средство (автобус). Водитель должен иметь открытые
          права категории «D» и непрерывный водительский стаж не менее трех лет. Кроме того, у
          водителя не должно быть нарушений правил дорожного движения за последние три года. Только
          в этих случаях водителю разрешается перевозить детей в автобусе.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Если перевозка детей осуществляется в одном автобусе, то уведомлять ГИБДД не обязательно.
          В тех случаях, когда дети перевозятся в составе колонны, дорожная полиция обязана
          предоставить автомобиль для сопровождения.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Каждый автобус с детьми должен сопровождать один взрослый. Автобус с детьми обозначается
          спереди и сзади специальными знаками «Дети». В каждом автобусе за автобусом закреплено
          ответственное лицо.
        </span>
      </p>
      <p className="c1">
        <span className="c0">Для связи в пробке с другими автобусами ему дают радиостанцию.</span>
      </p>
      <p className="c1">
        <span className="c0">
          В составе колонны 1-2 медицинских работника должны следовать в одном из автобусов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Все руководители студенческих групп должны записать мобильные телефоны старшего колонны,
          медицинских работников и сопровождающего инспектора дорожного движения.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Ответственные должны требовать от учащихся соблюдения дисциплины во время движения и на
          остановках.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Посадка детей в автобусы должна осуществляться под руководством ответственного за автобус
          лица и под наблюдением старшего колонны при соблюдении следующих правил:
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - дети доставляются на посадочную площадку в количестве, не превышающем количество
          посадочных мест в автобусе, с учетом места для лица, ответственного за автобус;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - дети, вышедшие из автобуса, должны быть забраны с места высадки и стоянки организованным
          образом.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - в местах высадки и стоянки автобусов не должно быть встречающих и посторонних лиц;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - выводить детей на посадочную площадку разрешается только после полной остановки
          автобуса.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Во время движения водители делают остановки только в специально отведенных местах, чтобы
          дети не могли выбежать на проезжую часть. По прибытии в пункт назначения автобусы ставятся
          на парковочные места, отведенные для парковки, откуда они один за другим подъезжают к
          месту высадки.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Дети высаживаются под присмотром лица, ответственного за транспортировку всех детей.
          Согласно правилам перевозки детей, передвигаться на автобусе в ночное время запрещено. С
          23 часов до 5 утра дети и водитель должны отдыхать. Перед поездкой в пригород или соседний
          город заказчик может потребовать от перевозчика проверить техническое состояние автобуса в
          ГИБДД.
        </span>
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c7">
          Раздел II. Методика организации и проведения занятий в ходе проведения учебных сборов по
          основам военной службы.
        </span>
      </p>
      <p className="c5">
        <span className="c0">Подготовка руководителя к занятию включает следующие этапы: </span>
      </p>
      <p className="c5">
        <span className="c0">1. Уяснение темы занятия и его цели. </span>
      </p>
      <p className="c5">
        <span className="c0">2. Изучение содержания данного занятия. </span>
      </p>
      <p className="c5">
        <span className="c0">3. Изучение наставлений, инструкций и руководств. </span>
      </p>
      <p className="c5">
        <span className="c0">
          4. Определение последовательности проведения занятия и использования материального
          обеспечения.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">5. Определение методических приемов проведения занятия.</span>
      </p>
      <p className="c5">
        <span className="c0">6. Составление плана-конспекта (плана, опорного конспекта). </span>
      </p>
      <p className="c5">
        <span className="c0">
          7. Подготовка материального обеспечения занятия и места проведения занятия.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">8. Определение требований безопасности при проведении занятия. </span>
      </p>
      <p className="c5">
        <span className="c0">
          9. Утверждение плана-конспекта (плана) у руководителя образовательной организации.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          10. Проведение ИМЗ (инструктажа) с помощниками руководителя занятия.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          12. Организация самостоятельной подготовки помощников руководителя занятия.{' '}
        </span>
      </p>
      <p className="c2">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 1. Методические рекомендации по организации и проведению занятий по общевоинским
          уставам ВС РФ.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Занятия по общевойсковым уставам не могут сводиться только к чтению и пересказу отдельных
          статей или заучиванию устава, они должны обеспечивать формирование у обучаемых навыков
          правильного выполнения требований уставов на практике.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          С этой целью необходимо внедрить игровой метод и принцип решения проблем в обучение,
          упражнения, тренинги и более широкое использование технических средств обучения. Местом
          проведения урока может быть специализированный класс, казарма, гауптвахта, помещение для
          хранения оружия, учебный полигон и другие элементы военного городка, где можно показать
          устройство, быт и службу согласно уставу.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Руководитель занятий должен заранее проверить и убедиться, что все вопросы обучения могут
          быть качественно проработаны в выбранном месте. При необходимости его необходимо
          подготовить заранее.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Эффективность урока повышается, если стационарное оборудование места (объекта) дополняется
          соответствующими наглядными пособиями (схемами, рисунками, плакатами и т.д.) и
          техническими средствами обучения. Запрещается проводить занятия на объектах, которые не
          переоборудованы или оборудованы с нарушениями требований уставов, приказов, инструкций.
          Это вызывает у учащихся неправильные, противоречивые толкования некоторых положений
          устава, чувство недоверия к учителю, который проводит урок.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Изучение положений общевоинских уставов проводится, как правило, комплексным методом. В то
          же время образцовая демонстрация процедуры выполнения требований общевоинских уставов
          должна гармонично сочетаться с практическим выполнением этих элементов всеми обучаемыми.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Метод устного изложения следует использовать в форме обстоятельной беседы, когда
          происходит коллективный поиск правильного понимания и обоснования отдельных статей устава.
          Используя этот тип обучения, руководитель учит стажеров, выступая в роли определенного
          должностного лица или человека из учебной группы, правильно и быстро реагировать на
          ситуацию и принимать решения.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          При изучении уставов основное внимание уделяется вопросам воспитания у учащихся чувства
          верности Конституции Российской Федерации и Военной присяге. Каждый урок должен направлять
          обучаемых на выполнение обязанностей солдата. На занятиях по изучению общевоинских уставов
          слушатели должны практически усвоить свои обязанности в различных условиях службы,
          научиться сознательно выполнять приказы и распоряжения командиров (начальников), стойко
          переносить трудности военной службы.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          При использовании стрелкового оружия и снаряжения на занятиях необходимо строго соблюдать
          меры безопасности, указанные в описаниях и инструкциях к ним. Учебная
          материально-техническая база, на которой проводится урок, должна в наибольшей степени
          обеспечивать поучительность урока, способствовать качественной проработке образовательных
          вопросов и достижению поставленных образовательных целей.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Перед началом урока все обучаемые находятся в классе на своих местах или могут быть
          построены на месте проведения урока (в казарме, гауптвахте, на плацу или в других местах
          несения службы).
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Заместитель командира взвода занимает место в центре класса у доски, лицом к личному
          составу. Когда преподаватель входит в класс, он подает команду: "Взвод, СМИРНО" (по этой
          команде все встают и принимают положение "Смирно"), строевым шагом подходит к
          преподавателю, останавливается в 2-3 шагах от него и докладывает, например: «Товарищ
          преподаватель, 1-й взвод прибыл на урок по общевоинским уставам. По списку 25 человек, все
          люди присутствуют (или: 3 человека пропали без вести – двое в наряде и один в больнице).
          Заместитель командира взвода курсант Петров.»
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Доклад должен быть сделан четко, достаточно громко, без резкого повышения голоса. После
          подачи доклада заместитель командира взвода делает шаг в сторону левой (правой) ногой с
          одновременным поворотом вправо (влево) и пропускает вперед руководителя класса.
          Преподаватель следит за выполнением команды обучаемыми и принимает отчет, находясь в
          положении «Смирно».
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Если по характеру урока обучаемые должны находиться в строю, то к началу урока взвод
          выстраивается в две шеренги. Для встречи с руководителем класса заместитель командира
          взвода подает команду: «Взвод, ВНИМАНИЕ, равнение НА-ПРАВО (НА-ЛЕВО, НА-СЕРЕДИНУ)»,
          подходит к руководителю и докладывает, как указано выше. Если при выполнении команды
          обучаемыми и в действиях рапортующего допущены ошибки (расплывчатость, небрежность,
          искажение формы доклада и т.д.), преподаватель обязан потребовать их исправления, для чего
          дает команду «ОТСТАВИТЬ» и приказывает повторить выполнение команды или доклада.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Приняв рапорт, преподаватель приветствует обучаемых: «Здравствуйте, товарищи», на что они
          отвечают, например: «Здравия желаем товарищ преподаватель». После этого преподаватель
          проверяет наличие обучаемых, осматривает их внешний вид, обращая внимание на опрятность
          одежды и чистоту обуви, проверяет наличие оружия, если это предусмотрено содержанием
          урока. В то же время он осматривает классную комнату (место проведения урока), обращая
          внимание на порядок, расположение плакатов, схем, наглядных пособий, чистоту классной
          доски, наличие мела и тряпок.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Если есть недостатки во внешнем виде и нарушения порядка на месте обучения, преподаватель
          требует их устранения немедленно или в установленное им время.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Далее преподаватель приступает к проверке усвоения учащимися пройденного материала, для
          чего он задает заранее подготовленные вопросы. Контрольный опрос должен охватывать:
          теоретический – не менее 3-4 человек, практический – 100% слушателей.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В общении с курсантами преподаватель всегда обязан соблюдать вежливость и сдержанность и
          обращаться к ним на «Вы». Обращаясь к слушателям, он называет их по должности и фамилии
          или только по должности. Например: «Курсант Иванов», «Товарищ курсант».
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          После постановки вопроса преподаватель требует ответа от одного курсанта, который должен
          встать, принять строевую стойку и ответить «я» или назвать свою должность и фамилию.
          Курсант отвечает на требование руководителя: «Ответьте» («Доложите») или «Подойдите к
          доске»: «Есть» и продолжает отвечать или подходит к доске, плакату и четко отвечает на
          поставленный вопрос.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Когда он будет готов ответить на общий вопрос, заданный преподаватель всем присутствующим,
          а также, при необходимости, задать преподавателю вопрос, курсант должен, не вставая со
          своего места и не разговаривая, поднять руку и дождаться реакции преподавателя и
          действовать как указано выше. При выходе для ответа к доске, плакату и т.д. действия
          обучаемых должны быть четкими (четкий шаг, повороты в движении и на месте, строевая
          стойка), а внешний вид подтянутым и опрятным. При ответе курсант не должен размахивать
          руками, а при необходимости пользоваться указкой или писать на доске, он делает это одной
          рукой, а другая должна находиться у бедра.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Если обучаемому дается время на подготовку к ответу, то по готовности он докладывает
          руководителю, например: «Товарищ преподаватель, курсант Сидоров к ответу готов». В конце
          ответа во всех случаях докладывает руководителю, например: «Товарищ учитель, курсант
          Сидоров ответ закончил» и, получив разрешение сесть или приказ на какое-либо действие,
          отвечает «Есть» и четко выполняет его.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Каждый ответ должен быть оценен и, при необходимости, должны быть заданы дополнительные
          вопросы.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          После краткого изложения усвоения ранее изученного материала преподаватель объявляет
          обучаемым тему и цель предстоящего урока, подчеркивая при этом, какие знания и навыки,
          приобретенные ранее, могут пригодиться при изучении вопросов предстоящего урока. Он
          доводит до обучаемых требования мер безопасности применительно к данному уроку, указывает
          порядок безопасного выполнения элементов урока и переходит к основной части урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Объяснение нового материала должно быть кратким и убедительным. Любой вопрос, будь то
          сложный или простой, должен быть изложен ясным и выразительным языком, при этом
          необязательно использовать справочный конспект. Необходимо только следить за
          последовательностью и полнотой изложения учебного материала и затратой времени,
          отведенного на изучение этого вопроса.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Обращение к обучаемым во время рассказа оживляет урок, позволяет избежать сухости
          изложения материала, повышает их внимание к рассказу.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Для развития военной смекалки у обучаемых и привития навыков сознательного усвоения
          уставов очень важно проверять их знания не только путем постановки вопросов и требования
          ответов на них, но и путем создания обстановки (ситуации), в ходе которой обучаемые могли
          бы самостоятельно принимать решения, выполнять практические действия с подробным
          обоснованием их в будущем. Поэтому руководитель при подготовке к уроку должен подготовить
          вводные записки, которые он проработает с обучаемыми.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Исправить ошибки в действиях обучаемых можно только устно, терпеливо и без унижения их
          личного достоинства. При проведении занятий, связанных с подачей команд, отдачей
          распоряжений, отчетами об исполнении команд, преподаватель требует, чтобы они выполнялись
          четко, громко, лаконично и в полном соответствии с уставами.
        </span>
      </p>
      <p className="c9 c14">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 2. Методические рекомендации по организации и проведению занятий по строевой
          подготовке.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          В строевой подготовке используются следующие методы: рассказ (объяснение), демонстрация,
          тренировка, самостоятельное изучение техники или действия при выполнении строевых приемов.
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          Место преподавателя во время строевой подготовки должно обеспечивать контроль за
          действиями обучаемых, чтобы своевременно реагировать на допущенные ими ошибки.
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          Следует учитывать наиболее подходящее расстояние от строя подразделения: для командиров
          отделений - три–четыре шага; для руководителей классов - пять-семь шагов и более.
          Благодаря этому удалению обучаемые находятся под постоянным контролем и всегда готовы
          выполнять команды.
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          Большое значение в строевой подготовке имеет умение преподавателей (командиров) четко и
          громко отдавать команды. Предварительная команда должна быть отдана четко и протяжно,
          чтобы обучаемые понимали, каких действий требует от них командир. Исполнительная команда
          должна быть дана после паузы резко и энергично. Исполнительная команда никогда не должна
          задерживаться, так как это приводит к ненужному перенапряжению обучаемых и нечеткости в
          действиях. Прежде чем отдать команду или отдать приказ, преподаватель (командир) обязан
          принять стойку «смирно». Это прививает подчиненным дисциплину и уважение к строевизации.
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          Обучение приемам строевой подготовки должно проводиться в следующей последовательности:{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">ознакомление с приемом; </span>
      </p>
      <p className="c5">
        <span className="c0">разучивание приема; </span>
      </p>
      <p className="c5">
        <span className="c0">тренировка. </span>
      </p>
      <p className="c5">
        <span className="c0">
          Для ознакомления с приемом классный руководитель (командир) должен:{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">назвать прием и указать, где и с какой целью он используется; </span>
      </p>
      <p className="c5">
        <span className="c0">подать команду, по которой выполняется прием; </span>
      </p>
      <p className="c5">
        <span className="c0">
          показать строго по строевому уставу, как выполняется прием в целом, а затем в медленном
          темпе по разделениям с кратким пояснением порядка его выполнения.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          В зависимости от сложности упражнения его разучивание может осуществляться:{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">в целом, если прием простой; </span>
      </p>
      <p className="c5">
        <span className="c0">по разделениям, если прием сложный; </span>
      </p>
      <p className="c5">
        <span className="c0">
          с помощью подготовительных упражнений, если прием сложный и его отдельные элементы трудно
          усваиваются.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          Чтобы ознакомиться с техникой выполнения строевого приема, преподаватель образцово
          показывает обучаемым порядок его выполнения в целом, а затем по элементам (по
          разделениям), попутно объясняя свои действия. Во время демонстрации обучаемый создает
          визуальное представление упражнения или действия (его элементов), поэтому демонстрация
          должна быть безупречной. Показ всегда должен сопровождаться кратким пояснением. Чтобы
          создать полное и правильное представление об изучаемой технике или действии, недостаточно
          иметь визуальное представление, вам нужно осмыслить изучаемую технику или действие.
          Объяснение позволяет раскрыть такие аспекты изучаемых строевых приемов или действий,
          которые трудно усвоить при показе. Он ориентирует обучаемых на то, что будет показано, или
          на то, от чего зависит правильность выполнения упражнения или действия.
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          После ознакомления с упражнением или действием процесс формирования навыка как целостного
          действия включает в себя три взаимосвязанных основных этапа.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          Первый этап состоит в разделении приема или действия на элементы и выполнении приема или
          действия по частям.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          Второй этап последовательно объединяет элементы в группы, а затем в единое целое.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          Третий этап сводится к выработке навыков выполнения того или иного приема или действия.{' '}
        </span>
      </p>
      <p className="c5">
        <span className="c0">
          Выполнение приема путем многократного повторения (тренировки) доводится до автоматизма. В
          то же время преподаватель (командир) должен следить за тем, чтобы все приемы выполнялись
          правильно, быстро, красиво и четко.
        </span>
      </p>
      <p className="c5">
        <span className="c13 c10">Порядок проведения занятия. </span>
      </p>
      <p className="c5">
        <span className="c0">
          Преподаватель обязан стремиться к тому, чтобы каждое занятие по строевой подготовке
          максимально увеличивало подготовку слушателей. Это достигается при условии, что занятие
          будет проводиться с полной нагрузкой, а прием или действие будут отрабатываться
          практически со строжайшим соблюдением требований Строевого устава.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Одиночная тренировка - самая сложная часть строевой подготовки. Занятия по изучению
          строевой техники на месте должны проводиться в разомкнутом строю, а в движении – на
          увеличенных дистанциях, чтобы преподаватель мог четко видеть ошибки и неточности в
          действиях каждого обучаемого.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Обучение строевым приемам с оружием проводится теми же методами, что и без оружия. При
          этом в начале каждого урока преподаватель обязан осмотреть оружие, чтобы оно не было
          заряжено, и проверить исправность крепления ремня. Каждое занятие по одиночному упражнению
          проводится в следующей методической последовательности:{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">проверка и тренировка в выполнении ранее изученных приемов;</span>
      </p>
      <p className="c1">
        <span className="c0">
          демонстрация с кратким объяснением нового упражнения и изучение этой техники по
          разделениям или с использованием подготовительных упражнений (если техника сложная);{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          выполнение приема в медленном темпе с доведением его до уставного темпа в процессе
          обучения;{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          обучение курсантов правильному и точному выполнению разученного приема с использованием
          одностороннего и двустороннего метода обучения;
        </span>
      </p>
      <p className="c1">
        <span className="c0">организация конкурса на лучшее выполнение строевого приема и</span>
      </p>
      <p className="c1">
        <span className="c0">проведение анализам (подведение итогов) урока.</span>
      </p>
      <p className="c1">
        <span className="c0">
          Односторонний метод обучения заключается в одновременном обучении всех обучаемых одним и
          тем же приемам (действиям) под руководством преподавателя (командира).
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Для обучения и тренировки в выполнении приемов отделение размыкается по периметру строевой
          площадки с интервалами (расстояниями) в несколько шагов.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Двусторонний метод обучения заключается в том, что изучение и тренировка исполнительских
          приемов проводится в парах (в каждой паре один из обучаемых должен быть более
          подготовлен). Во время тренировки преподаватель (командир) следит за действиями обучаемых
          и указывает на допущенные ими ошибки, стремится их устранить, обращая внимание на
          правильность и четкость выполнения строевых приемов и действий.
        </span>
      </p>
      <p className="c2">
        <span className="c6 c16" />
      </p>
      <p className="c1">
        <span className="c13 c10">
          Глава 3. Методические рекомендации по организации и проведению занятий по тактической
          подготовке.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В тактической подготовке на начальном этапе основной формой обучения является тактическая
          строевая подготовка. Суть занятий заключается в том, что с обучаемыми отрабатывается
          техника выполнения приемов и способов действий в различных видах боя. Сначала отработка
          ведется по элементам в медленном темпе, а затем в целом в течение времени, установленного
          нормативами. Недостаточно освоенные элементы приема и прием в целом следует повторять до
          тех пор, пока обучаемые не научатся выполнять их правильно, последовательно и в
          установленное нормативом время.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Тактическая среда для проведения тактических учений может быть создана для отработки
          каждого учебного вопроса (норматива) отдельно и не быть связанной с единым планом. Она не
          должна быть сложной, но должна обеспечивать качественное обучение студентов.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Можно проводить тактические строевые учения на тактическом учебном поле или на
          необорудованной местности. Наиболее эффективными являются те занятия, которые проводятся
          на тактическом учебном поле, где наряду с мишенями, инженерными сооружениями, барьерами и
          зонами поражения также могут использоваться звуковые эффекты боя. Кроме того, тактические
          строевые занятия могут проводиться с использованием лазерных тренажеров стрельбы и
          разрушения (LISP).
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Основным методом обучения на занятиях по тактической строевой подготовке является
          упражнение (тренировка) в выполнении приемов и способов действий на поле боя. Также могут
          быть применены пояснения и показательное выполнение.
        </span>
      </p>
      <p className="c1">
        <span className="c24 c10">Проведение тактических и строевых учений</span>
        <span className="c0">. </span>
      </p>
      <p className="c1">
        <span className="c0">
          Перед тем, как отправиться на занятие, преподаватель строит обучаемых, проверяет наличие и
          оснащение личного состава, оружия, средств материально-технического обеспечения, а также
          знание обучаемыми требований безопасности. Кроме того, он обязан установить необходимые
          требования безопасности во время предстоящего урока и провести инструктаж.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Тактические учения могут начаться непосредственно на месте или в исходном районе. В первом
          случае выдвижение в исходный район и возвращение в расположение осуществляется на фоне
          тактической обстановки и используется для закрепления ранее изученных вопросов или для
          отработки отдельных тактических приемов и способов действий по теме данного урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          По прибытии в район проведения урока преподаватель выстраивает подразделение в две
          шеренги, объявляет тему, образовательные цели урока, порядок его проведения и первый
          учебный вопрос. Есть возможность проверить знание учащихся теоретических положений по теме
          предстоящего занятия.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Затем руководитель называет приемы и действия, подлежащие отработке, знакомит обучаемых с
          тактической ситуацией, объявляет обучаемым порядок отработки вопроса по элементам, лично
          показывает (или привлекает для показа наиболее подготовленных обучаемых) выполнение
          элемента с краткими пояснениями и приступает к его отработке.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Отработка каждого элемента начинается в замедленном темпе, при этом основное внимание
          уделяется правильности его исполнения. Впоследствии темп постепенно увеличивается до
          времени, установленного соответствующим нормативом. Ошибки, допущенные обучаемыми, должны
          быть исправлены своевременно и квалифицированно. Обнаружив распространенные ошибки в
          действиях личного состава, преподаватель (командир отделения) останавливает обучаемых,
          вызывает их к себе, указывает на допущенные ошибки, объясняет, а при необходимости еще раз
          показывает, как выполнять ту или иную технику, и продолжает обучение до устранения ошибок.
          Если отдельные обучаемые совершают ошибки, то не следует останавливать всех. В этом случае
          необходимо обращать внимание на выявленные недостатки только тем обучаемым, которые
          допустили ошибки, и добиваться их устранения в процессе отработки последующих действий.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Обучение может проводиться с использованием различных методических приемов: обучать
          каждого отдельно или в потоке, обучать одного и обучать всех.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          После завершения обучения первому элементу преподаватель отрабатывает следующие элементы
          учебного вопроса в той же последовательности. После отработки учебного вопроса по
          элементам преподаватель переходит ко всему учебному вопросу в целом.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          После отработки всех элементов учебного вопроса преподаватель выстраивает обучаемых,
          проводит частный анализ, объявляет обучаемым тему следующего вопроса и порядок его
          отработки по элементам. Далее он приводит тактическую ситуацию и приступает к отработке
          первого элемента изучаемого вопроса в той же последовательности, что и при отработке
          предыдущего вопроса.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Преподаватель во время тактического обучения, проводимого командирами отделений,
          поочередно лично преподает наиболее сложные учебные вопросы каждому отделению и
          одновременно контролирует проведение урока командирами других отделений. При необходимости
          он помогает им устранить ошибки, допущенные при отработке того или иного элемента.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Закончив проработку всех учебных вопросов, преподаватель выстраивает обучаемых, проверяет
          наличие личного состава и проводит анализ, который является заключительной частью
          тактического обучения. Во время анализа преподаватель повторяет тему, цели урока и то, как
          они были достигнуты, анализирует действия обучаемых при отработке каждого учебного
          вопроса, подкрепляя свои выводы требованиями устава и инструкций, отмечает наиболее
          подготовленных курсантов, называет лучшее отделение, а также указывает на недостатки в
          действиях обучаемых. В конце анализа подводятся итоги выполнения задач и даются указания
          по устранению выявленных недостатков.
        </span>
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1">
        <span className="c13 c10">
          Глава 4. Методические рекомендации по организации и проведению занятий по радиационной,
          химической и биологической защите.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Занятия по радиационной, химической и биологической защите проводятся в учебных
          аудиториях, в городке РХБЗ, тактическом поле общевойсковой подготовки и огневой штурмовой
          полосе.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Основное внимание уделяется усвоению обучаемыми боевых свойств оружия массового поражения
          и методов защиты от них, развитию у них уверенности в том, что умелое использование
          защитных свойств обмундирования и оборудования, рельефа местности и других средств защиты
          позволит значительно ослабить воздействие поражающих факторов ядерного оружия, токсичных
          химических и бактериологических веществ.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Обучаемые приходят на занятие с оружием и средствами индивидуальной защиты. Выход
          обучаемых в район проведения урока, передвижение во время урока и возвращение может
          осуществляться на фоне тактической ситуации с развитием действий подразделения на марше,
          во время ядерной, химической, биологической и воздушной атаки противника, преодоления
          зараженных и разрушенных районов рельефа местности.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          При изучении ядерного, химического и бактериологического оружия противника необходимо
          выработать у обучаемых твердую уверенность в том, что при быстром и умелом использовании
          имеющихся средств и методов защиты потери личного состава резко сокращаются.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          При использовании средств моделирования в классе необходимо строго соблюдать меры
          безопасности, указанные в инструкциях по использованию средств моделирования
          радиоактивного и химического загрязнения.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Место, где проводится урок, должно обеспечить наибольший учебный эффект, способствовать
          качественной проработке образовательных вопросов и достижению поставленных образовательных
          целей.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Преподаватель должен быть хорошо знаком с местом проведения и умело использовать его,
          чтобы добиться учебного эффекта.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Во вводной части урока преподаватель организует получение обучаемыми оружия, средств
          индивидуальной защиты и снаряжения. Затем он отводит слушателей к месту проведения урока.
          При проверке внешнего вида он обращает особое внимание на правильность подгонки и
          экипировки, проверяет оружие, средства индивидуальной защиты на наличие и комплектность.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Контрольный опрос слушателей должен состоять из вопросов по предыдущим темам и охватывать:
          теоретический – не менее 3-4 человек, практический – 100% персонала. По результатам
          контрольного опроса выставляются оценки.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Преподаватель объявляет обучаемым тему и цель предстоящего урока, подчеркивая при этом,
          какие знания и навыки, приобретенные ранее, могут пригодиться при изучении вопросов
          предстоящего урока. Он доводит до обучаемых требования мер безопасности при обращении с
          оружием, средствами индивидуальной защиты и имитационными средствами, используемыми на
          занятиях, указывает порядок безопасного выполнения элементов урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          При проведении основной части урока следует исходить из конкретных условий, в которых
          организуется и проводится тренировка. Модели, плакаты, диаграммы, макеты, тренажеры,
          инструменты моделирования должны широко использоваться в классе.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          При изучении учебных вопросов преподаватель доводит материал методом рассказа с подробным
          объяснением изучаемого материала и примерной демонстрацией методов обращения со средствами
          РХБЗ, а также прорабатывает практические вопросы индивидуально с каждым обучаемым
          (привлекая для этого помощников – командиров отделений) или в составе отделения.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          После отработки каждого учебного вопроса преподаватель проводит индивидуальный анализ,
          затем объявляет слушателям следующий учебный вопрос и его содержание, выдвигает основные
          требования к его выполнению и приступает к его проработке.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Практические навыки, приобретенные обучаемыми на занятиях по РХБЗ, совершенствуются на
          занятиях по другим предметам обучения.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          После отработки всех учебных вопросов преподаватель проводит заключительную часть урока. В
          первую очередь он проверяет наличие оружия, состояние средств индивидуальной защиты и
          экипировки.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Подводя итоги урока, преподаватель напоминает обучаемым о теме, образовательных целях и
          основных вопросах, отраженных в уроке. Отмечает правильные действия, подробно анализирует
          характерные ошибки. Затем он объявляет обучаемым оценки, полученные за контрольные вопросы
          во вводной части урока и за отработку нормативов (практических действий) в основной части,
          отмечает лучших по результатам опроса и отработки вопросов текущего урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В конце урока преподаватель объявляет тему следующего урока, выдает задание на
          самоподготовку и организует возвращение обучаемых с занятий для сдачи оружия, средств
          индивидуальной защиты и снаряжения.
        </span>
      </p>
      <p className="c2">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 5. Методические рекомендации по организации и проведению занятий по
          военно-медицинской подготовке.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Военно-медицинская подготовка направлена на изучение правил личной и общественной гигиены,
          наиболее характерных причин и признаков ранений и увечий, острых отравлений и поражений,
          требующих неотложной помощи, а также на привитие практических навыков оказания первой
          помощи при ранениях, ушибах, острых отравлениях и поражениях с использованием специальных
          и подручных средств.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Занятия по военно-медицинской подготовке проводятся преподавателем и врачами (фельдшерами)
          подразделения в специализированных классах, на объектах полевой учебной базы или на
          местности и носят прикладной характер.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Санитарные инструкторы и командиры отделений привлекаются в качестве помощников
          руководителя занятий для отработки практических вопросов (нормативов военно-медицинской
          подготовки), с которыми накануне занятий проводятся инструкторско-методические занятия
          (инструктажи) по методике отработки практических вопросов (нормативов).
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Для достижения максимальных результатов в обучении студентов и обеспечения четкости и
          напряженности в учебном процессе на занятиях следует использовать портативную
          учебно-материальную базу для военно-медицинской подготовки (портативная установка для
          отработки стандартов военно-медицинской подготовки).
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Теоретические положения отрабатываются с широким использованием учебников (плакатов,
          фотоколлекций, схем, таблиц, макетов, фильмов, диафильмов, наборов слайдов и т.д.).
          Практические приемы и нормативы отрабатываются на местности или объектах полигона
          (тактическое поле общевойсковой подготовки, площадка военно-медицинской подготовки) с
          использованием имитаторов служебных средств индивидуальной защиты (индивидуальные
          перевязочные пакеты, индивидуальные аптечки первой помощи, индивидуальные
          противохимические пакеты и т.д.) и подручных средств первой помощи (бинты, матерчатые
          ленты и т.д.).
        </span>
      </p>
      <p className="c1">
        <span className="c13 c10">Организация урока.</span>
      </p>
      <p className="c1">
        <span className="c0">
          Во вводной части урока преподаватель обращает особое внимание на правильность подгонки
          формы и экипировки подчиненных и требует устранить выявленные недостатки. преподаватель
          напоминает тему предыдущего урока по военно-медицинской подготовке, подчеркивая при этом,
          какие знания и навыки, приобретенные ранее, могут пригодиться при изучении вопросов
          предстоящего урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Далее преподаватель приступает к проверке усвоения учащимися пройденного материала, для
          чего он задает заранее подготовленные вопросы. Контрольный опрос слушателей должен
          состоять из вопросов по предыдущим темам и охватывать: теоретический – не менее 3-4
          человек, практический – 100% персонала. По результатам контрольного опроса преподаватель
          выставляет оценки.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Далее объявляется порядок безопасного и безаварийного обращения с учебной
          материально-технической базой, доводятся требования безопасности до обучаемых, указывается
          порядок безопасного выполнения элементов предстоящего урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Преподаватель начинает основную часть урока с построения обучаемых в развернутом
          двухшереножном строю. Разработка учебных вопросов должна начинаться с объяснения и
          демонстрации приемов всему подразделению, а обучение должно проводиться в подразделениях
          под руководством командиров отделений. В этом случае преподаватель сможет уделять больше
          времени наблюдению за действиями обучаемых, что поможет выявить плохо понятые вопросы и
          определить, какие из них нуждаются в дополнительном разъяснении и демонстрации.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Отрабатывая каждый элемент приема, преподаватель добивается четкого и правильного его
          выполнения от каждого обучаемого. Обнаружив ошибки в действиях обучаемых, преподаватель
          приостанавливает выполнение приема, указывает на недостатки, объясняет, а при
          необходимости показывает этот прием лично или с помощью правильно выполняющего его
          обучаемого и продолжает обучение до устранения ошибок.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          После проработки каждого учебного вопроса руководитель класса строит подразделение,
          проводит частный анализ, затем объявляет следующий учебный вопрос и его содержание
          обучаемым, выдвигает основные требования к его выполнению и приступает к его проработке.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          После отработки всех учебных вопросов преподаватель проводит заключительную часть урока.
          Подводя итоги урока, он напоминает обучаемым о теме, учебных целях и основных вопросах,
          отраженных в уроке. Отмечает достигнутые навыки, подробно анализирует характерные ошибки.
          Затем он объявляет оценки, полученные за контрольные вопросы во вводной части урока, и
          отмечает лучших по результатам опроса и проработки вопросов текущего урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В конце урока преподаватель объявляет тему следующего урока, выдает задание на
          самоподготовку и организует возвращение обучаемых с урока.
        </span>
      </p>
      <p className="c9 c14">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 6. Методические рекомендации по организации и проведению занятий по физической
          подготовке.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Занятия гимнастикой и атлетической подготовкой направлены на развитие ловкости, силы и
          выносливости, устойчивости к укачиванию и перегрузкам, пространственной ориентации,
          прикладной моторики, воспитание смелости и решительности, улучшение строевой выправки.
          Занятия проводятся на гимнастических площадках, в небольших городках, в спортивных залах
          или специально оборудованных помещениях, а также на открытых площадках.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Занятия по гимнастике и атлетической подготовке включают физические упражнения на
          перекладине, брусьях, опорные прыжки, акробатические упражнения, упражнения с
          отягощениями, на тренажерах и многопролетных снарядах, в равновесии и лазании.
        </span>
      </p>
      <p className="c1">
        <span className="c13 c10">Методика проведения подготовительной части урока. </span>
      </p>
      <p className="c1">
        <span className="c0">
          Подготовительная часть занимает 7-10 минут (10-15 минут – при 2-часовом занятии), при этом
          решаются следующие задачи: организация учащихся, общее укрепление организма и подготовка к
          упражнениям в основной части.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Содержание подготовительной части включает в себя строевые приемы, упражнения в ходьбе и
          беге, общеразвивающие упражнения на месте, упражнения для отработки положений «наскок» и
          «доскок», комплексы вольных упражнений, упражнения вдвоем, прыжковые упражнения. Строевые
          приемы на месте и в движении проводятся в соответствии с Строевым уставом Вооруженных Сил
          Российской Федерации.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Ходьба и бег выполняются в колонне по одному или по два вдоль границ площадки или зала по
          команде, например: «Взвод, в обход площадки шагом – МАРШ".
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Упражнения в движении включают: ходьбу и бег; упражнения для мышц рук, сгибания и повороты
          туловища, выпады при ходьбе; ходьба в полуприседе и полном приседании, ходьба на носках,
          на пятках, на внешней и внутренней стороне стопы; специальные упражнения для бега и
          прыжков. Чтобы показать и объяснить их, ведущий движется относительно строя по небольшому
          кругу и выполняет упражнения в зеркальном отражении. Показав упражнение и объяснив
          исходное положение, он командует, например: «Исходное положение - ПРИНЯТЬ», «Упражнение
          начи-НАЙ». Команда подается под левую ногу. Преподаватель выполняет упражнение 1-2 раза
          вместе с обучаемыми, затем продолжает равномерно считать, исправляет и предупреждает
          ошибки во время выполнения упражнения. Чтобы закончить упражнение в движении, вместо двух
          последних счетов подается команда «Упражнение – ЗАКОНЧИТЬ». Обучаемые продолжают движение
          шагом или бегом.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Перестроение взвода для проведения общеразвивающих упражнений на месте осуществляется по
          команде, например: «Налево по четыре – МАРШ". По этой команде первые четыре обучаемых
          поворачиваются налево и движутся через середину площадки (зала). Следующие четыре
          поворачиваются налево без дополнительной команды. Размыкание по фронту и в глубину
          осуществляется по команде руководителя, например: "Интервал и дистанция – три шага"; "НА
          МЕСТЕ"; "СТОЙ". Общеразвивающие упражнения на месте включают в себя: упражнения на
          растяжку, упражнения для мышц шеи, рук и плечевого пояса, туловища, ног, всего тела,
          упражнения в парах, комплексы вольных упражнений, прыжковые упражнения, а также ранее
          изученные приемы и действия.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Для проведения упражнений преподаватель выбирает место перед строем так, чтобы оно было
          хорошо видно всем обучаемым. После показа упражнения и объяснения исходного положения
          преподаватель командует: «Исходное положение - ПРИНЯТЬ», «Упражнение начи-НАЙ». Если
          упражнение выполняется в правую (левую) сторону или с правой (левой) руки или ноги,
          необходимо подать соответствующую команду, например: «Упражнение с левой ноги начи-НАЙ», и
          сам начинат движение правой ногой (в зеркальном отражении). Преподаватель выполняет
          упражнение 1-2 раза вместе с обучаемыми, затем продолжает равномерно считать, исправляет и
          предупреждает ошибки во время выполнения упражнения. Чтобы закончить упражнение на месте,
          вместо последнего счета дается команда «СТОЙ».
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Общеразвивающие упражнения в подготовительной части можно выполнять как с музыкой, так и
          без нее.
        </span>
      </p>
      <p className="c1">
        <span className="c24 c10">Методика проведения основной части урока</span>
        <span className="c0">. </span>
      </p>
      <p className="c1">
        <span className="c0">
          Основная часть урока занимает 30-35 минут (60-65 минут – при 2-часовом занятии).
          Содержание основной части включает в себя: физические упражнения на перекладине, брусьях,
          опорные и безопорные прыжки, акробатические и комплексные упражнения, упражнения с
          отягощениями, на тренажерах и многопролетных снарядах, в равновесии, скалолазании и
          комплексных тренировках. Урок проводится в рамках подразделений. В зависимости от задач
          используются индивидуальные, групповые и фронтальные методы организации основной части.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Индивидуальный метод заключается в том, что преподаватель дает каждому студенту задание
          изучить или тренировать отдельный элемент. Групповой метод предполагает разделение
          обучаемых на группы (отделения) с назначением руководителя в каждой группе. Фронтальный
          метод характеризуется тем, что обучаемые выполняют упражнения в составе подразделения.
          Этот метод обеспечивает высокую плотность и нагрузку, особенно когда упражнения
          выполняются на многопролетных снарядах или стене, на скамейках, с отягощениями, на
          многоцелевых тренажерах.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Преподаватель обеспечивает общее руководство уроком, направляет действия своих помощников
          на учебных местах и следит за своевременной сменой мест занятий. Помощники преподавателя
          организуют и проводят занятия в учебных подразделениях.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Организация студентов в основной части урока строится следующим образом. После установки
          снарядов, подготовки мест обучения и определения порядка их смены преподаватель подает
          команду: «По учебным местам шагом (бегом) – МАРШ». По этой команде подразделения
          выдвигаются кратчайшим путем к местам обучения, подходят к снаряду с левой стороны и
          обозначают шаг на месте. Руководитель подает команды «СТОЙ», «Приготовиться», «К
          выполнению упражнения – ПРИСТУПИТЬ». Командиры отделений делают два шага вперед,
          поворачиваются налево и командуют: «ПРИНЯТЬ гимнастическую стойку». Тренирующиеся отводят
          правую ногу на полшага в сторону, руки соединяются сзади, вес тела равномерно
          распределяется на обе ноги, плечи отведены назад, голова держится прямо. Выход курсантов
          из строя осуществляется по команде «Курсант Петров, на исходную позицию шагом (бегом) –
          МАРШ». Обучаемый, услышав свою фамилию, принимает строевую стойку (с приставлением правой
          ноги), отвечает: «Я», реагирует на исполнительную команду: «Есть», шагом или бегом
          занимает исходное положение, указанное командиром, и принимает гимнастическую стойку. По
          команде «К СНАРЯДУ» обучаемый строевым шагом подходит к снаряду, принимает положение
          «наскок» и начинает выполнять упражнение. Следующий обучаемый по этой команде переходит в
          исходное положение. При выполнении опорных прыжков вместо команды «К СНАРЯДУ» подается
          команда «ВПЕРЕД», в соответствии с которой тренирующийся начинает разбег. После
          приземления в положение «доскок» обучаемый принимает строевую стойку, встает с матов,
          делает 2-3 шага вперед, поворачивается лицом к командиру и слушает его указания. По
          команде «К СНАРЯДУ» («ВПЕРЕД») выполнивший упражнение встает в строй на свое место.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Чаще всего одновременное выполнение упражнений в составе отделения (взвода) осуществляется
          на многопролетных снарядах или многоцелевых тренажерах. Чтобы закончить упражнение,
          руководитель дает общую команду «Взвод, упражнение – ЗАКОНЧИТЬ». Согласно этой команде
          командиры отделений на своих учебных местах дублируют команду преподавателя, например:
          «Отделение, упражнение – ЗАКОНЧИТЬ», «ВСТАТЬ В СТРОЙ». По этой команде обучаемые
          прекращают выполнение упражнения, становятся в строй и принимают гимнастическую стойку.
          Затем следуют команды: «Взвод, СМИРНО», «Напра-ВО», «Для смены мест занятий шагом (бегом)
          – МАРШ». При первой смене указывается порядок перехода, например: «От брусьев к
          перекладине, от перекладины к прыжку, от прыжка к брусьям, для смены мест занятий шагом
          (бегом) – МАРШ».
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В конце основной части проводится комплексное занятие. Чтобы провести комплексное
          тренировочное занятие, руководитель класса подает команду, например: «Взвод, упражнение –
          ЗАКОНЧИТЬ», «Взвод – КО МНЕ».
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Преподаватель объясняет содержание и условия комплексного занятия и, при необходимости,
          организует показ и порядок выполнения упражнений. При выполнении упражнения потоком
          подается команда, например: «Поток по три, дистанция пять шагов – ВПЕРЕД». Помимо команды
          «ВПЕРЕД», также используются команды «К СНАРЯДУ», «Упражнение НАЧИНАЙ», «МАРШ». Упражнение
          заканчивается командой «СТОЙ» или «Упражнение ЗАКОНЧИТЬ».
        </span>
      </p>
      <p className="c1">
        <span className="c24 c10">Методика проведения заключительной части урока</span>
        <span className="c0">.</span>
      </p>
      <p className="c1">
        <span className="c0">
          Заключительная часть урока занимает 3-5 минут (5-10 минут – при 2-х часовом занятии), при
          этом решаются следующие задачи: приведение организма обучаемыго в относительно спокойное
          состояние и подведение итогов урока. Заключительная часть включает в себя: ходьбу и бег в
          медленном темпе, упражнения на глубокое дыхание и расслабление мышц. Заключительная часть
          проводится в составе взвода, в обход площадки, как и в подготовительной части.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Урок заканчивается подведением итогов. Преподаватель указывает на качество усвоения
          упражнений обучаемыми, отмечает достижения и недостатки студентов, дает задание для
          самоподготовки.
        </span>
      </p>
      <p className="c1">
        <span className="c24 c10">Меры по предотвращению травматизма</span>
        <span className="c0">.</span>
      </p>
      <p className="c1">
        <span className="c0">
          Предусмотрена профилактика травматизма на занятиях по гимнастике и атлетической
          подготовке:
        </span>
      </p>
      <p className="c1">
        <span className="c0">- высокая дисциплина слушателей;</span>
      </p>
      <p className="c1">
        <span className="c0">
          - соблюдение техники выполнения физических упражнений и хорошее знание приемов
          самостраховки;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - соблюдение методики преподавания гимнастических упражнений и требований безопасности;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - надежная помощь и страховка при выполнении упражнений на снарядах;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - проверка технического состояния снарядов (растяжек, карабинов, запорных устройств и
          т.д.);
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          - проверка надежности крепления рук и ног при выполнении упражнений на снарядах и
          тренажерах.
        </span>
      </p>
      <p className="c9 c14">
        <span className="c0" />
      </p>
      <p className="c1">
        <span className="c13 c10">
          Глава 7. Методические рекомендации по организации и проведению занятий по огневой
          подготовке.{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Огневая подготовка направлена на то, чтобы научить обучаемых поддерживать оружие в
          постоянной боевой готовности и умело использовать его для эффективного поражения
          противника в различных боевых условиях.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          При огневой подготовке обычно используются следующие методы обучения: рассказ, объяснение,
          демонстрация, беседа, самостоятельная работа и практические упражнения. Выбор методов
          обучения зависит от темы, цели и содержания урока, а также от степени подготовленности
          обучаемых. На каждом уроке можно использовать несколько методов. Так, например, при
          обучении технике стрельбы (действиям с оружием) могут применяться демонстрация, объяснение
          и тренировка.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Занятие по огневой подготовке проводится на огневом городке учебной
          материально-технической базы (военный тир) в сложной, быстро меняющейся тактической
          обстановке. Личный состав идет на занятие с оружием и средствами индивидуальной защиты.
          Выход обучаемых в район проведения урока, передвижение во время урока и их возвращение
          могут осуществляться в тактической обстановке с развитием действий подразделения на марше,
          во время ядерной, химической, воздушной атаки противника, преодоления зараженных и
          разрушенных участков местности.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Учебно-материальная база, на которой проводится урок, должна в наибольшей степени
          обеспечивать поучительность урока, способствовать качественной проработке образовательных
          вопросов (нормативов) и достижению поставленных образовательных целей. Преподаватель
          должен быть хорошо знаком с местом проведения и умело использовать его, чтобы добиться
          поучительности урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Во вводной части урока преподаватель организует получение обучаемыми оружия и средств
          индивидуальной защиты. Затем он отводит слушателей к месту проведения урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          При проверке внешнего вида он обращает особое внимание на правильную подгонку
          обмундирования и экипировки подчиненных, проверяет оружие на наличие и комплектность.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Контрольный опрос слушателей должен состоять из вопросов по предыдущим темам. По
          результатам контрольного опроса выставляются оценки.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Преподаватель объявляет обучаемым тему и цель предстоящего урока, подчеркивая при этом,
          какие знания и навыки, приобретенные ранее, могут пригодиться при изучении вопросов
          предстоящего урока. Он доводит до обучаемых требования безопасности при обращении с
          оружием, указывает порядок безопасного выполнения элементов урока. Объявляет сигналы
          взаимодействия, контроля и тревоги на время предстоящего урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Отрабатывая каждый элемент в медленном темпе, преподаватель добивается четкого и
          правильного его выполнения от каждого обучаемого. Обнаружив ошибки в действиях обучаемых,
          преподаватель приостанавливает выполнение приема, указывает на недостатки, объясняет, а
          при необходимости еще раз показывает этот прием лично или с помощью правильно выполняющего
          его обучаемого и продолжает обучение до устранения ошибок.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          После отработки всех обучающих вопросов преподаватель проводит заключительную часть урока.
          В первую очередь он проверяет оружие на предмет его наличия и комплектности, состояние
          средств индивидуальной защиты.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Подводя итоги урока, преподаватель напоминает обучаемым о теме, образовательных целях и
          основных вопросах, отработанных на уроке. Отмечает достижения обучаемых, подробно
          анализирует характерные ошибки. Затем он объявляет обучаемым оценки, полученные за
          контрольные вопросы во вводной части урока, и отмечает лучших по результатам опроса и
          отработки вопросов текущего урока.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В конце урока преподаватель объявляет тему следующего урока, выдает задание на
          самоподготовку и организует возвращение обучаемых с урока для сдачи оружия и средств
          индивидуальной защиты.
        </span>
      </p>
      <p className="c1">
        <span className="c24 c10">Особенности отработки нормативов по огневой подготовке</span>
        <span className="c0">. </span>
      </p>
      <p className="c1">
        <span className="c0">
          Нормативы во время занятий и тренингов отрабатываются с использованием исправных
          тренажеров и тренировочных патронов. Оружие должно быть полностью укомплектовано
          прнадлежностями, уложенными на свои места.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Обучение по выполнению нормативов, связанных с разборкой и сборкой оружия, снаряжением
          лент (магазинов), проводится только на учебном оружии и учебных боеприпасах на отдельном
          учебном месте.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Норматив считается выполненным, если во время работы соблюдены условия его выполнения и не
          было допущено нарушений требований техники безопасности, а также уставов, руководств и
          инструкций. Если при отработке норматива обучаемый допускает хотя бы одну ошибку, которая
          может привести к травмам (поражению) личного состава, поломке оружия или несчастному
          случаю, выполнение норматива прекращается и обучаемому выставляется оценка
          «неудовлетворительно».
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          За нарушение последовательности выполнения норматива, не приведшее к потенциальным
          несчастным случаям, поломке (повреждению) оружия, а также за каждую ошибку, приводящую к
          нарушению условий выполнения норматива, требований уставов, наставлений, руководств и
          инструкций, балл уменьшается на один.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          При выполнении нормативов в средствах защиты кожи (ОЗК и т.д.) время норматива
          увеличивается на 25%, а при работе в средствах защиты органов дыхания (противогаз,
          респиратор) – на 10%. При температуре воздуха минус 10°C и ниже, плюс 30°C и выше, при
          сильном дожде, снегопаде время выполнения нормативов увеличивается до 20%, а при действии
          ночью, если время для ночных условий не определено, оно увеличивается до 30%. Технические
          неисправности оружия, обнаруженные в ходе выполнения норматива, не устраняются (если они
          не мешают выполнению норматива). Обучаемый, после выполнения норматива, должен сообщить о
          выявленных неисправностях.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Время выполнения норматива отсчитывается секундомером с момента подачи команды «К
          выполнению норматива – ПРИСТУПИТЬ» (или другой установленной команды) до момента
          выполнения норматива и доклада учащегося о его выполнении.
        </span>
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 8. Требования к результатам обучения на учебных сборах по основам военной службы.
          Оценка учебных сборов по основам военной службы.
        </span>
      </p>
      <p className="c1">
        <span className="c10 c33">8.1. Требования</span>
        <span className="c0">
          &nbsp;к результатам обучения на учебных сборах по основам военной службы.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          В результате получения знаний и практических навыков по предметам обучения примерной
          программы проведения 5-дневных учебных сборов по основам военной службы для профессий
          начального профессионального и специальностей среднего профессионального образования
          обучаемый должен достичь следующие уровни знаний и навыков:
        </span>
      </p>
      <p className="c1">
        <span className="c0">8.1.1. Тактическая подготовка:</span>
      </p>
      <p className="c1">
        <span className="c0">знать</span>
      </p>
      <ul className="c20 lst-kix_list_1-0 start">
        <li className="c1 c4">
          <span className="c0">сигналы управления подразделениями в бою; </span>
        </li>
        <li className="c1 c4">
          <span className="c0">что такое походный, предбоевой и боевой порядок &nbsp;взвода;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">способы передвижения на поле боя;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            нормативы № 1,7,10, 11 по тактической подготовке Сухопутных войск ВС РФ;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            нормативы № 1 и 6 по военной топографии Сухопутных войск ВС РФ.
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">уметь</span>
      </p>
      <ul className="c20 lst-kix_list_1-0">
        <li className="c1 c4">
          <span className="c0">выбрать место для стрельбы;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">действовать на поле боя в составе отделения-взвода;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">преодолевать &nbsp;МВЗ;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            выполнять нормативы № 1,7 по тактической подготовке Сухопутных войск ВС РФ;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            выполнять нормативы № 1 и 6 по военной топографии Сухопутных войск ВС РФ.
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">8.1.2. Огневая подготовка:</span>
      </p>
      <p className="c1">
        <span className="c10">знать</span>
      </p>
      <ul className="c20 lst-kix_list_2-0 start">
        <li className="c1 c4">
          <span className="c0">
            назначение, боевые свойства, общее устройство, назначение частей и механизмов АК-74;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">порядок чистки и смазки оружия;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            требования безопасности при проведении стрельб и обращении со стрелковым оружием;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            назначение, ТТХ и устройство оборонительных и наступательных гранат;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">требование безопасности при &nbsp;обращении с гранатами;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            приемы и способы ведения огня из автомата по неподвижной и появляющимся целям;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">знать основы и правила стрельбы, условия выполнения 2 УНС;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            нормативы № 1, 13, 14, 16 по огневой подготовке Сухопутных войск ВС РФ.
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">уметь</span>
      </p>
      <ul className="c20 lst-kix_list_1-0">
        <li className="c1 c4">
          <span className="c0">проводить неполную разборку и сборку автомата;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">изготавливаться к бою;</span>
        </li>
      </ul>
      <ul className="c20 lst-kix_list_2-0">
        <li className="c1 c4">
          <span className="c0">
            выполнять нормативы № 1, 13, 14, 16 по огневой подготовке Сухопутных войск ВС РФ;
          </span>
        </li>
      </ul>
      <ul className="c20 lst-kix_list_1-0">
        <li className="c1 c4">
          <span className="c0">выполнять 2-е УНС из АК-74М.</span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">8.1.3. Радиационная, химическая и биологическая защита</span>
      </p>
      <p className="c1">
        <span className="c10">знать</span>
      </p>
      <ul className="c20 lst-kix_list_3-0 start">
        <li className="c1 c4">
          <span className="c0">назначение, устройство средств индивидуальной защиты;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            способы действий в условиях &nbsp;радиационного, химического и биологического заражения;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">нормативов № 1,4,6, по РХБЗ Сухопутных войск ВС РФ.</span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">уметь</span>
      </p>
      <ul className="c20 lst-kix_list_4-0 start">
        <li className="c1 c4">
          <span className="c0">действовать по сигналам оповещения;</span>
        </li>
        <li className="c1 c4">
          <span className="c10">практически выполнять нормативы </span>
          <span className="c6">&nbsp;</span>
          <span className="c10">№ 1, 4, 6.</span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">8.1.4. Строевая подготовка</span>
      </p>
      <p className="c1">
        <span className="c0">знать</span>
      </p>
      <ul className="c20 lst-kix_list_1-0">
        <li className="c1 c4">
          <span className="c0">общие положения строевого устава ВС РФ; </span>
        </li>
        <li className="c1 c4">
          <span className="c0">обязанности военнослужащего перед построением и в строю;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">способы передвижения на поле боя;</span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">уметь</span>
      </p>
      <ul className="c20 lst-kix_list_4-0">
        <li className="c1 c4">
          <span className="c0">
            выполнять команды: «Становись», «Равняйсь», «Смирно», «Вольно», «Заправиться»,
            «Разойдись», «Отделение, в одну (две) шеренгу становись», «Отделение, разойдись»;{' '}
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            выполнять строевые приемы и движения без оружия: «Строевая стойка», «Повороты на месте»,
            «Движение строевым шагом», «Повороты в движении», «Выполнение воинского приветствия на
            месте и в движении», «Выход из строя и возвращение в строй», &nbsp;«Подход к начальнику
            и отход от него».
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">8.1.5. Физическая подготовка</span>
      </p>
      <p className="c1">
        <span className="c10">знать</span>
      </p>
      <ul className="c20 lst-kix_list_2-0">
        <li className="c1 c4">
          <span className="c0">
            требования безопасности при проведении занятий по физической подготовке;{' '}
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">комплекс рукопашного боя РБ-1;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            условия выполнения упражнений &nbsp;№ 4, 41, 42 и 45 согласно НФП -2009.
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">уметь</span>
      </p>
      <ul className="c20 lst-kix_list_2-0">
        <li className="c1 c4">
          <span className="c0">выполнять подход и отход к спортивному снаряду;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">выполнять &nbsp;наскок и соскок со спортивного снаряда;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            выполнять &nbsp;упражнения &nbsp;№ 4, 41, 42 и 45 согласно НФП 2009.
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">8.1.6. Общевоинские уставы ВС РФ</span>
      </p>
      <p className="c1">
        <span className="c0">знать</span>
      </p>
      <ul className="c20 lst-kix_list_2-0">
        <li className="c1 c4">
          <span className="c0">
            общие требования по размещению военнослужащих, распределению времени и повседневному
            порядку;{' '}
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            воинские звания, кто такие командиры и начальники, старшие и младшие;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">что такое приказ (приказание), порядок его выполнения;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">порядок действия при посещении старшим начальником;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            порядок ответа на приветствие командира и прощание, ответа на поздравление и
            благодарность;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">что такое воинская вежливость;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            правила поведения в казарме, столовой, клубе и других общественных местах.
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">уметь</span>
      </p>
      <ul className="c20 lst-kix_list_2-0">
        <li className="c1 c4">
          <span className="c0">выполнять мероприятия распорядка дня;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">обращаться к командирам;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">выполнять воинское приветствие в строю и вне строя.</span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">8.1.7. Военно-медицинская подготовка</span>
      </p>
      <p className="c1">
        <span className="c10">знать</span>
      </p>
      <ul className="c20 lst-kix_list_5-0 start">
        <li className="c1 c4">
          <span className="c0">правила личной гигиены и профилактики; </span>
        </li>
        <li className="c1 c4">
          <span className="c0">правила оказания первой &nbsp;помощи на поле боя;</span>
        </li>
      </ul>
      <p className="c9 c38">
        <span className="c0">уметь</span>
      </p>
      <ul className="c20 lst-kix_list_5-0">
        <li className="c1 c4">
          <span className="c0">выполнять правила личной гигиены;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">оказать первую &nbsp;помощь на поле боя;</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            пользоваться аптечкой индивидуальной АИ, пакетом перевязочным индивидуальным;
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">проводить неотложные &nbsp;реанимационные мероприятия.</span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            выполнить &nbsp;нормативы № 1, 2, 4, 8 по военно-медицинской подготовке Сухопутных войск
            ВС РФ..
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">8.1.8. Основы безопасности военной службы</span>
      </p>
      <p className="c1">
        <span className="c0">знать</span>
      </p>
      <ul className="c20 lst-kix_list_2-0">
        <li className="c1 c4">
          <span className="c0">
            обязанности военнослужащего по соблюдению требований безопасности военной службы и по
            предупреждению заболеваний, травм и поражений;{' '}
          </span>
        </li>
        <li className="c1 c4">
          <span className="c0">
            требования безопасности при отработке упражнений и нормативов по предметам обучения;
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c0">уметь</span>
      </p>
      <ul className="c20 lst-kix_list_2-0">
        <li className="c1 c4">
          <span className="c0">
            выполнять требования безопасности при отработке упражнений и нормативов по предметам
            обучения.
          </span>
        </li>
      </ul>
      <p className="c1">
        <span className="c13 c10">8.2. Оценка учебных сборов по основам военной службы</span>
      </p>
      <p className="c1">
        <span className="c0">Оценке подлежат:</span>
      </p>
      <p className="c1">
        <span className="c0">- &nbsp;обучаемые &nbsp;по &nbsp;предметам &nbsp;обучения;</span>
      </p>
      <p className="c1">
        <span className="c0">- &nbsp; подразделения.</span>
      </p>
      <p className="c1">
        <span className="c10">
          Оценка обучаемых по предмету обучения осущесвляется по следующим критериям:
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          8.2.1. Оценка по РХБЗ, тактической, военно-медицинской и инженерной подготовке.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Обучаемые проверяются по выполнению трех-четырех нормативов, и &nbsp;оцениваются:
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          «5»- если не менее 50% &nbsp;нормативов выполнено на оценку «5», а остальные с оценкой не
          ниже &nbsp;«4»;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          «4»- если не менее 50% &nbsp;нормативов выполнено на оценку не ниже «4», а остальные с
          оценкой не ниже &nbsp;«3»;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          «3»- если 70% нормативов выполнено с оценкой не ниже «3», а при проверке по &nbsp;трем
          нормативам – положительно оценены два, при этом один из них &nbsp;не ниже «4».
        </span>
      </p>
      <p className="c1 c18">
        <span className="c0">
          Оценка подготовки отделения (взвода) по предмету обучения слагается из оценок, полученных
          обучаемыми &nbsp;и определяется:
        </span>
      </p>
      <p className="c1 c18">
        <span className="c0">«5» – не менее 90% положительных оценок, при этом более 50% «5»;</span>
      </p>
      <p className="c1 c18">
        <span className="c0">«4» – не менее 80% положительных оценок, при этом более 50% «4»;</span>
      </p>
      <p className="c1 c18">
        <span className="c0">«3» – если получено не менее 70% положительных.</span>
      </p>
      <p className="c1">
        <span className="c0">8.2.2. Физическая подготовка</span>
      </p>
      <p className="c1">
        <span className="c0">
          Согласно ст. 252. Наставления по физической подготовке в Вооруженных Силах Российской
          Федерации физическая подготовленность военнослужащих по призыву, прибывших в воинскую
          часть на ее пополнение, проверяется по физическим упражнениям: подтягивание на
          перекладине, бег на 100 м (челночный бег 10x10 м), бег на 1 км.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Индивидуальная оценка обучаемому выставляется по сумме баллов, начисленных за выполнение 3
          упражнений &nbsp;№ 4, 41, 45 согласно Таблице &nbsp;1 начисления баллов за выполнение
          упражнений по физической подготовке и Таблице 2 оценки физической подготовленности
          военнослужащих.
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          Обучаемые проверяются по выполнению трех упражнений и &nbsp;оцениваются:
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          «5» - если 50% упражнений выполнено на «5», остальные не ниже «4»;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          «4» - если 50% упражнений выполнено не ниже «4», а остальные «3»;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          «3» - положительно оценены два, при этом один из них &nbsp;не ниже «4»;
        </span>
      </p>
      <p className="c1">
        <span className="c0">«2» - не выполнены условия на оценку «3».</span>
      </p>
      <p className="c1 c18">
        <span className="c0">
          Оценка физической подготовки отделения (взвода) слагается из оценок, полученных обучаемыми
          &nbsp;и определяется:
        </span>
      </p>
      <p className="c1 c18">
        <span className="c0">«5» – не менее 90% положительных оценок, при этом более 50% «5»;</span>
      </p>
      <p className="c1 c18">
        <span className="c0">«4» – не менее 80% положительных оценок, при этом более 50% «4»;</span>
      </p>
      <p className="c1 c18">
        <span className="c0">«3» – если получено не менее 70% положительных.</span>
      </p>
      <p className="c1 c18">
        <span className="c0">8.2.3. Огневая подготовка</span>
      </p>
      <p className="c1">
        <span className="c0">
          Огневая подготовка проверяется и оценивается по выполнению 2 упражнения начальных стрельб
          в соответствии с требованиями Курса стрельб, наставлений и нормативов по боевой
          подготовке. К выполнению упражнения стрельб допускаются обучаемые сдавшие зачет по знанию
          материальной части оружия, основ и правил стрельбы, условий выполнения упражнения и мер
          безопасности.
        </span>
      </p>
      <p className="c1">
        <span className="c0">Индивидуальная оценка обучаемого определяется:</span>
      </p>
      <p className="c1">
        <span className="c0">«отлично» — выбито 25 очков;</span>
      </p>
      <p className="c1">
        <span className="c0">«хорошо» — выбито 20 очков;</span>
      </p>
      <p className="c1">
        <span className="c0">«удовлетворительно» — выбито 15 очков.</span>
      </p>
      <p className="c1 c18">
        <span className="c0">
          Оценка огневой подготовки отделения (взвода) слагается из оценок, полученных обучаемыми
          &nbsp;и определяется:
        </span>
      </p>
      <p className="c1 c18">
        <span className="c0">«5» – не менее 90% положительных оценок, при этом более 50% «5»;</span>
      </p>
      <p className="c1 c18">
        <span className="c0">«4» – не менее 80% положительных оценок, при этом более 50% «4»;</span>
      </p>
      <p className="c1 c18">
        <span className="c0">«3» – если получено не менее 70% положительных.</span>
      </p>
      <p className="c1">
        <span className="c0">8.2.4. Строевая подготовка</span>
      </p>
      <p className="c1">
        <span className="c0">
          По строевой подготовке проверяются и оцениваются одиночная строевая выучка обучаемого,
          которая включает выполнение строевых приемов в соответствии с требованиями программ
          обучения.
        </span>
      </p>
      <p className="c1">
        <span className="c0">Индивидуальная оценка строевой выучки обучаемого определяется:</span>
      </p>
      <p className="c1">
        <span className="c10">«5</span>
        <span className="c11">» -</span>
        <span className="c0">
          &nbsp;если 50 % &nbsp;строевых приемов выполнены на «5», &nbsp;остальные - на «4»;
        </span>
      </p>
      <p className="c1">
        <span className="c10">«4</span>
        <span className="c11">» -</span>
        <span className="c0">
          &nbsp;если не менее 50 % &nbsp;строевых приемов выполнены на «5» и «4», а остальные – на
          «3»;
        </span>
      </p>
      <p className="c1">
        <span className="c10">«3</span>
        <span className="c11">» -</span>
        <span className="c0">
          &nbsp;если не менее 80 % &nbsp;строевых приемов выполнено &nbsp;не ниже «3».
        </span>
      </p>
      <p className="c1">
        <span className="c10">Оценка одиночной строевой выучки отделения (взвода):</span>
      </p>
      <p className="c1">
        <span className="c10">«5»</span>
        <span className="c11">&nbsp;-</span>
        <span className="c0">
          &nbsp;если не менее 90% получили положительные оценки, при этом половина проверенных
          оценена «5»;
        </span>
      </p>
      <p className="c1">
        <span className="c10">«4</span>
        <span className="c11">» -</span>
        <span className="c0">
          &nbsp;если не менее 80% &nbsp;получили положительные оценки, при этом половина проверенных
          оценена «4»;
        </span>
      </p>
      <p className="c1">
        <span className="c11">«</span>
        <span className="c10">3</span>
        <span className="c11">» -</span>
        <span className="c0">&nbsp;если не менее 70% получили положительные оценки;</span>
      </p>
      <p className="c1">
        <span className="c11">«</span>
        <span className="c10">2</span>
        <span className="c11">» - </span>
        <span className="c0">
          &nbsp;если не выполнены требования на оценку «удовлетворительно».
        </span>
      </p>
      <p className="c1">
        <span className="c0">8.2.5. Общевоинские уставы</span>
      </p>
      <p className="c1">
        <span className="c0">
          Обучаемые проверяются в объеме пройденной программы на день проверки по ответам не менее
          чем на три вопроса (задаются из каждого устава, кроме строевого) и &nbsp;оцениваются:
        </span>
      </p>
      <p className="c1">
        <span className="c0">«5» - &nbsp;не менее 50% ответов оценены «5», остальные – «4»;</span>
      </p>
      <p className="c1">
        <span className="c0">
          «4» - не менее 50% ответов оценены не ниже «4», а остальные не ниже «3»;
        </span>
      </p>
      <p className="c1">
        <span className="c0">
          «3» - 70% ответов оценены не ниже «3», а при проверке по трем вопросам &nbsp;–
          &nbsp;положительно оценены два, один из которых не ниже хорошо;{' '}
        </span>
      </p>
      <p className="c1">
        <span className="c0">«2» - &nbsp;если не выполнены требования на оценку «3».</span>
      </p>
      <p className="c1 c18">
        <span className="c0">
          Оценка по уставам &nbsp;ВС РФ &nbsp;отделения (взвода) слагается из оценок, полученных
          обучаемыми &nbsp;и определяется:
        </span>
      </p>
      <p className="c1 c18">
        <span className="c0">«5» – не менее 90% положительных оценок, при этом более 50% «5»;</span>
      </p>
      <p className="c1 c18">
        <span className="c0">«4» – не менее 80% положительных оценок, при этом более 50% «4»;</span>
      </p>
      <p className="c1 c18">
        <span className="c0">«3» – если получено не менее 70% положительных.</span>
      </p>
      <p className="c1">
        <span className="c0">8.2.6. Итоговая оценка обучаемого по предметам обучения </span>
      </p>
      <p className="c1">
        <span className="c0">
          Обучаемый оценивается в объеме требований к знаниям и умениям по предметам обучения:
        </span>
      </p>
      <p className="c1">
        <span className="c0">«5» - не менее 50% предметов оценено на «5», остальные «4»</span>
      </p>
      <p className="c1">
        <span className="c0">«4» - не менее 50% предметов обучения «5» и «4» , остальные «3»</span>
      </p>
      <p className="c1">
        <span className="c0">«3» - получено не менее 70% положительных оценок</span>
      </p>
      <p className="c1">
        <span className="c10">«2» - не выполнены требования на оценку «3»</span>
      </p>
      <p className="c1">
        <span className="c0">8.2.7. Оценка подразделений (отделение, взвод):</span>
      </p>
      <p className="c1">
        <span className="c0">«5» - не менее 50% предметов оценено на «5» , остальные «4»</span>
      </p>
      <p className="c1">
        <span className="c0">«4» - не менее 50% предметов обучения «5» и «4» , остальные «3»</span>
      </p>
      <p className="c1">
        <span className="c0">«3» - получено не менее 70% положительных оценок</span>
      </p>
      <p className="c1">
        <span className="c10">«2» - не выполнены требования на оценку «3»</span>
      </p>
      <p className="c9">
        <span className="c11">
          Общая оценка за учебные сборы не может быть выше, чем оценка за тактическую и огневую
          подготовку
        </span>
        <span className="c0">&nbsp;при примерном или удовлетворительном поведении.</span>
      </p>
      <p className="c9 c14">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c13 c11" />
      </p>
      <p className="c2">
        <span className="c13 c11" />
      </p>
      <p className="c5">
        <span className="c13 c11">
          Раздел III. Примерная тематика занятий, проводимых в ходе учебных сборов. Планы проведения
          занятий и презентации к занятиям на учебных сборах по основам военной службы.
        </span>
      </p>
      <p className="c2">
        <span className="c0 c33" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 1. Примерная тематика занятий и планы проведения занятий &nbsp;по строевой
          подготовке.
        </span>
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 1:</span>
        <span className="c24 c10">&nbsp;Строевые приемы и движения без оружия.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1. </span>
        <span className="c0">
          Практическое – 1 час. Выполнение команд – «Становись», «Равняйсь», «Смирно», «Вольно»,
          «Заправиться», «Разойдись», «Отделение, в одну (две) шеренгу становись», «Отделение,
          разойдись”. Разучивание строевой стойки по элементам. Повороты на месте. Разучивание и
          тренировка в выполнении строевого приема «Повороты на месте» по разделениям и в целом.
        </span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении1{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения строевых прие</span>
        <span className="c10 c19">а</span>
        <span className="c10">мов </span>
        <span className="c10 c19">(ссылка н видео)</span>
        <span className="c0">.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 2. </span>
        <span className="c10">Практическое – 1 час. Строевой шаг. Движение руками на два </span>
        <span className="c6">&nbsp;</span>
        <span className="c0">
          счета. Шаг на месте. Движение строевым шагом &nbsp;по разделениям на четыре и два счета.
          Тренировка в движении строевым шагом в темпе 50-60 шагов в минуту. Движение строевым шагом
          &nbsp;в темпе 110-120 шагов в минуту. Повороты в движении.
        </span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 2{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения строевых приемов </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 3. </span>
        <span className="c0">
          Практическое – 1 час. Выполнение воинского приветствия на месте и в движении. Разучивание
          элемента «Выполнение воинского приветствия на месте и в движении» по разделениям и в
          целом. Выход из строя и возвращение в строй. Подход к начальнику и отход от него.{' '}
        </span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 3{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения строевых приемов </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 4.</span>
        <span className="c0">
          &nbsp;Практическое – 1 час. Строи подразделений в пешем порядке. Развернутый и походный
          строй взвода. Построения, перестроения, повороты, перемена направления движения.
          Выполнения воинского приветствия в строю на месте и в движении. Строевое слаживание
          взвода.
        </span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 4{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения строевых приемов </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8 c14">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 2. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          тактической подготовке.
        </span>
      </p>
      <p className="c8 c14">
        <span className="c13 c11" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 1</span>
        <span className="c24 c10">. Действия солдата в бою</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1. </span>
        <span className="c0">
          Практическое – 2 часа. Приемы и способы передвижения личного состава отделения в бою при
          действиях в пешем порядке.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 1 по тактической подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 7 по тактической подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 10 по тактической подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 11 по тактической подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 5{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 2. </span>
        <span className="c0">
          Практическое – 2 часа. Сигналы управления в бою, способы их передачи и действия по ним.
          Походный, предбоевой и боевой порядок &nbsp;взвода. Тренировка в развертывании из
          походного в предбоевой и боевой порядок и обратно. &nbsp;Преодоление МВЗ. &nbsp;Выбор
          места для стрельбы.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 6{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 3. </span>
        <span className="c0">
          Практическое – 2 часа. Способы передвижения на поле боя. Отработка нормативов № 1, 7, 10,
          11 по тактической подготовке Сухопутных войск ВС РФ. Прием зачетов по нормативам.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 7{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 4.</span>
        <span className="c0">
          &nbsp;Практическое – 2 часа. Ориентирование на местности. Движение по азимуту. Выполнение
          нормативов № 1 и 6 по военной топографии Сухопутных войск ВС РФ.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 1 по военной топографии Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия апредствален в приложении 8{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c2">
        <span className="c0 c33" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 3. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          радиационной, химической и биологической защите.
        </span>
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 1.</span>
        <span className="c13 c10">&nbsp;Средства индивидуальной защиты и пользование ими.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1. </span>
        <span className="c0">
          Практическое – 2 часа. Способы действий личного состава в условиях &nbsp;радиационного,
          химического и биологического заражения. Тренировка в выполнении нормативов по РХБЗ № 1, 4,
          6 по РХБЗ Сухопутных войск ВС РФ.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения норматива № 1 по РХБЗ Сухопутных войск ВС РФ </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения норматива № 4а по РХБЗ Сухопутных войск ВС РФ </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения норматива № 4б по РХБЗ Сухопутных войск ВС РФ </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения норматива № 6 по РХБЗ Сухопутных войск ВС РФ </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 9{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 2.</span>
        <span className="c0">
          &nbsp;Практическое – 1 час. Прием зачетов по выполнению нормативов № 1, 4, 6 по РХБЗ
          Сухопутных войск ВС РФ.{' '}
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 10{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c2">
        <span className="c6 c16" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 4. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          общевоинским уставам Вооруженных Сил Российской Федерации.
        </span>
      </p>
      <p className="c2">
        <span className="c0" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 1:</span>
        <span className="c13 c10">
          &nbsp;Распределение времени и внутренний порядок в повседневной деятельности
          военнослужащих.
        </span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1</span>
        <span className="c0">
          . Групповое – 2 часа. Распределение времени и внутренний порядок. Распорядок дня и
          регламент служебного времени. Общие требования по размещению военнослужащих, распределению
          времени и повседневному порядку. Порядок, организация и проведение подъема личного
          состава, утренней физической зарядки, умывания, заправки постелей и утреннего осмотра.{' '}
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 11{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8 c14">
        <span className="c0" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 2:</span>
        <span className="c13 c10">&nbsp;Взаимоотношения между военнослужащими.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1</span>
        <span className="c0">
          . Групповое – 1 час. Военнослужащие Вооруженных Сил Российской Федерации и взаимоотношения
          между ними. Командиры (начальники) и подчиненные. Старшие и младшие. Приказ (приказание),
          порядок его отдачи и выполнения.{' '}
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 12{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 2.</span>
        <span className="c0">
          &nbsp;Групповое – 1 час. Воинские звания и знаки различия военнослужащих.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию</span>
        <span className="c0 c19">&nbsp;(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 13{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 3.</span>
        <span className="c0">
          &nbsp;Групповое – 1 час. Воинская дисциплина. Поощрение и дисциплинарные взыскания. Права
          военнослужащих. Дисциплинарная, административная и уголовная ответственность
          военнослужащих.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 14{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8 c14">
        <span className="c6 c16" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 3:</span>
        <span className="c24 c10">&nbsp;Суточный наряд.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1.</span>
        <span className="c0">
          &nbsp;Групповое – 1 час. Обязанности лиц суточного наряда. Назначение суточного наряда,
          его состав и вооружение. Подчиненность и обязанности дневального по роте. Обязанности
          дневального свободной смены.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 15{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 2.</span>
        <span className="c0">
          &nbsp;Групповое – 1 час. Обязанности дежурного по роте. Порядок приема и сдачи дежурства.
          Действия при подъеме по тревоге. Действия по прибытии в роту командиров (начальников) и
          военнослужащих не своего подразделения.{' '}
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 16{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 3.</span>
        <span className="c0">
          &nbsp;Групповое – 1 час. Комната для хранения оружия, ее оборудование. Порядок хранения
          оружия и боеприпасов. Допуск личного состава в комнату для хранения оружия. Порядок выдачи
          оружия и боеприпасов.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 17{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 4.</span>
        <span className="c0">
          &nbsp;Групповое – 1 час. Назначение караула, его состав и вооружение. Обязанности
          часового. Действия часового в различных условиях обстановки.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 18{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c2">
        <span className="c0 c33" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 5. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          военно-медицинской подготовке.
        </span>
      </p>
      <p className="c2">
        <span className="c13 c10" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 1: </span>
        <span className="c24 c10">Первая медицинская помощь при ранениях и переломах.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1.</span>
        <span className="c10">&nbsp;Практическое – 2 часа. </span>
        <span className="c6">&nbsp;</span>
        <span className="c0">
          Оказание первой &nbsp;помощи. Неотложные &nbsp;реанимационные мероприятия. Выполнение
          &nbsp;нормативов № 1, 2, &nbsp;4, &nbsp;8 по военно-медицинской подготовке Сухопутных
          войск ВС РФ.{' '}
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 1 по военно-медицинской подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 2 по военно-медицинской подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 4 по военно-медицинской подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 8 по военно-медицинской подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 19{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c2">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 6. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          огневой подготовке.
        </span>
      </p>
      <p className="c2">
        <span className="c0" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 1: </span>
        <span className="c24 c10">Стрелковое оружие и ручные гранаты</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1. </span>
        <span className="c0">
          Групповое – 1 час. &nbsp;Назначение, боевые свойства и общее устройство АК-74. Назначение
          частей и механизмов АК-74. Порядок чистки и смазки оружия. Требования безопасности при
          проведении стрельб и обращении со стрелковым оружием и боеприпасами.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 20{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 2. &nbsp;</span>
        <span className="c0">
          Практическое – 2 час. Неполная разборка и сборка автомата. Отработка нормативов № 1, 13,
          14, 16 по огневой подготовке Сухопутных войск ВС РФ.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 1 по огневой подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 13 по огневой подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 14 по огневой подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Видео выполнения норматива № 16 по огневой подготовке Сухопутных войск ВС РФ{' '}
        </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 21{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 3. &nbsp;</span>
        <span className="c10">Групповое – 1 час.</span>
        <span className="c6">&nbsp;</span>
        <span className="c0">
          Назначение, ТТХ и устройство оборонительных и наступательных гранат. Требования
          безопасности при обращении с гранатами. &nbsp;Отработка действий по метанию гранаты.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 22{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8 c14">
        <span className="c0" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 2:</span>
        <span className="c13 c10">&nbsp;Основы и правила стрельбы.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1. </span>
        <span className="c0">
          Практическое – 2 часа. Тренировка в изготовке к бою. Тренировка &nbsp;нормативов №
          &nbsp;1, 13, 14, 16 по огневой подготовке Сухопутных войск ВС РФ.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 23{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8 c14">
        <span className="c13 c11" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 3: </span>
        <span className="c24 c10">
          Приемы и способы ведения огня из автомата по неподвижной и появляющимся целям
        </span>
        <span className="c24 c11">.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1.</span>
        <span className="c10">&nbsp;Групповое – 1 час.</span>
        <span className="c6">&nbsp;</span>
        <span className="c10">&nbsp;Изучение</span>
        <span className="c6">&nbsp;</span>
        <span className="c0">2 УНС, мер безопасности при стрельбе.</span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 24{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 2. </span>
        <span className="c10">Групповое – 1 час</span>
        <span className="c6">.</span>
        <span className="c0">&nbsp;Прием зачетов по знанию ТТХ АК-74, 2 УУС, МБ при стрельбе.</span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 25{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 3. </span>
        <span className="c0">Практическое – 1 час. Выполнение 2-го УНС из АК-74.</span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 26{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8 c14">
        <span className="c0" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 4:</span>
        <span className="c13 c10">&nbsp;Практическая стрельба из пневматической винтовки.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1.</span>
        <span className="c0">
          &nbsp;Практическое – 2 часа. Выполнение упражнения стрельб из пневматической винтовки.
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 27{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c2">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 7. Примерная тематика занятий и планы проведения занятий по физической подготовке.
        </span>
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 1: </span>
        <span className="c24 c10">Гимнастика.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1</span>
        <span className="c0">
          . Практическое – 1 час. Требования безопасности при проведении занятий по физической
          подготовке. Разучивание и тренировка положений наскока и соскока со cнаряда. Разучивание и
          тренировка упражнений № 1 (Сгибание и разгибание рук в упоре лежа), 4 (Подтягивание на
          перекладине) и 5 (Поднос ног к перекладине).
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения упражнения № 1 НФП-2009 ВС РФ </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения упражнения № 4 НФП-2009 ВС РФ </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения упражнения № 5 НФП-2009 ВС РФ </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 28{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8 c14">
        <span className="c0" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 2: </span>
        <span className="c24 c10">Ускоренное передвижение.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1</span>
        <span className="c0">
          . Практическое – 1 час. Организация занятий по ускоренному передвижению. Разучивание и
          тренировка упражнений &nbsp;по бегу на 60м, 100м, челночный бег 10х10м и 1 км (упражнения
          &nbsp;№ 40, 41, 42 и 45 НФП-2009).{' '}
        </span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 29{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8 c14">
        <span className="c0" />
      </p>
      <p className="c8">
        <span className="c11 c24">Тема 3: </span>
        <span className="c24 c10">Контрольные занятия.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1.</span>
        <span className="c0">
          &nbsp;Практическое – 1 час. Прием зачетов по выполнению упражнения № 4, 41 (42), 45
          НФП-2009.{' '}
        </span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 30{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c8 c14">
        <span className="c0" />
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 4:</span>
        <span className="c13 c10">&nbsp;Комплексы рукопашного боя</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1.</span>
        <span className="c0">&nbsp;Комплекс рукопашного боя РБ-1</span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">Видео выполнения комплекса РБ-1 </span>
        <span className="c10 c19">(ссылка на видео)</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 31{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c2">
        <span className="c0" />
      </p>
      <p className="c5">
        <span className="c13 c10">
          Глава 8. Примерная тематика занятий, планы проведения занятий и презентации к занятиям по
          обеспечению безопасности военной службы.
        </span>
      </p>
      <p className="c8">
        <span className="c24 c11">Тема 1: </span>
        <span className="c24 c10">
          Основные мероприятия по обеспечению безопасности военной службы
        </span>
        <span className="c24 c11">.</span>
      </p>
      <p className="c8">
        <span className="c6">Занятие 1.</span>
        <span className="c0">&nbsp;Комплексное практическое занятие по ОБВС – 1 час.</span>
      </p>
      <p className="c8">
        <span className="c10">Вариант презентации к занятию </span>
        <span className="c0 c19">(ссылка на презентацию).</span>
      </p>
      <p className="c8">
        <span className="c10">
          Вариант план-конспекта проведения занятия представлен в приложении 32{' '}
        </span>
        <span className="c10 c19">(ссылка на план-конспект).</span>
      </p>
      <p className="c9 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c35 c18">
        <span className="c7">Список используемой литературы</span>
      </p>
      <p className="c14 c18 c35">
        <span className="c16 c42" />
      </p>
      <p className="c22 c23">
        <span className="c0">
          1. Федерального закона от 28 марта 1998 г. N 53-ФЗ «О воинской обязанности и военной
          службе» к обязательной и добровольной подготовке гражданина к военной службе. URL:
        </span>
      </p>
      <p className="c22">
        <span className="c0">&nbsp;https://duma.consultant.ru/page.aspx?1105514</span>
      </p>
      <p className="c22 c23">
        <span className="c10">
          2. Исайчева Е.А. Комментарий к Федеральному закону «О воинской обязанности и военной
          службе»
        </span>
        <span>/ </span>
        <span className="c0">
          Е. А. Исайчева, Л. В. Смолина. - Москва : Экзамен, Чеховский полиграфкомбинат. - 255 с.
          URL:
        </span>
      </p>
      <p className="c22">
        <span>&nbsp;</span>
        <span className="c10">https://search.rsl.ru/ru/record/01002952541</span>
      </p>
      <p className="c22 c23">
        <span className="c0">
          3. Зорин А.С. Комментарии к закону «О воинской обязанности и военной службе». – «За права
          военнослужащих». 2009. URL: http://ivo.garant.ru{' '}
        </span>
      </p>
      <p className="c22 c23">
        <span className="c10">
          4. Постановление Правительства РФ от 31 декабря 1999г. №&nbsp;1441 «Об утверждении
          Положения «О подготовке граждан Российской Федерации к военной службе». URL:
        </span>
        <span>&nbsp;</span>
        <span className="c0">https://base.garant.ru/181486/</span>
      </p>
      <p className="c22 c23">
        <span className="c0">
          5. Приказ Министра обороны Российской Федерации и Министерства образования и науки
          Российской Федерации от 24 февраля 2010 года № 96/134 «Об утверждении Инструкции об
          организации обучения граждан Российской Федерации начальным знаниям в области обороны и их
          подготовки по основам военной службы в образовательных учреждениях среднего (полного)
          общего образования, образовательных учреждениях начального профессионального и среднего
          профессионального образования и учебных пунктах». URL: https://base.garant.ru/198025/
        </span>
      </p>
      <p className="c22 c23">
        <span className="c0">
          6. «Инструкции об организации обучения граждан Российской Федерации начальным знаниям в
          области обороны и их подготовки по основам военной службы в образовательных учреждениях
          среднего (полного) общего образования, образовательных учреждениях начального
          профессионального и среднего профессионального образования и учебных пунктах»,
          утверждённой приказом Министра обороны Российской Федерации и Министра образования и науки
          Российской Федерации от 24 февраля 2010 года № 96/134. &nbsp;URL:
          https://base.garant.ru/198025
        </span>
      </p>
      <p className="c22 c23">
        <span className="c10">
          7. Д. Локк Сочинения в трёх томах: Т. 3.- М.: Мысль, 1988, 668с.
        </span>
        <span>&nbsp;</span>
        <span className="c0">URL: https://bookree.org/reader?file=1329917&amp;pg=86</span>
      </p>
      <p className="c22 c23">
        <span className="c0">
          8. Ушинский К.Д. Избранные педагогические сочинения: В 2 т. – Т. 1. – М., 1953, 637с. URL:
        </span>
      </p>
      <p className="c22">
        <span className="c0">
          &nbsp;https://imwerden.de/pdf/ushinsky_sobranie_sochineny_tom02_1948_text.pdf
        </span>
      </p>
      <p className="c22 c23">
        <span className="c0">
          9. Виноградова Н.Д. Привычка – основа нравственного воспитания //Педагогика № 5. 1997.
          С.91-96. URL:
        </span>
      </p>
      <p className="c22">
        <span className="c10">&nbsp;</span>
        <span className="c10">
          <a
            className="c21"
            href="https://www.google.com/url?q=https://www.bibliofond.ru/view.aspx?id%3D51351%23text&sa=D&source=editors&ust=1678993582797562&usg=AOvVaw3nz8kgdBWZkmObylHS4hGm"
          >
            https://www.bibliofond.ru/view.aspx?id=51351#text
          </a>
        </span>
      </p>
      <p className="c22 c23">
        <span className="c0">
          10. Строевой устав Вооруженных Сил Российской Федерации. М.: Воениздат, 2015.
        </span>
      </p>
      <p className="c26">
        <span className="c15">У ч е б н о е &nbsp; э л е к т р о н н о е &nbsp; и з д а н и е</span>
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c14 c32">
        <span className="c0" />
      </p>
      <p className="c32 c14">
        <span className="c0" />
      </p>
      <p className="c32">
        <span className="c0">Авторы составители:</span>
      </p>
      <p className="c26">
        <span className="c0">Богомолов Герман Семенович</span>
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c26">
        <span className="c0">Лосев Андрей Николаевич</span>
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c26">
        <span className="c0">Новиков Сергей Владимирович</span>
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c26">
        <span className="c0">Гатальский Сергей Анатольевич</span>
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c26">
        <span className="c0">Михайлов Олег Вячеславович</span>
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c26 c36">
        <span className="c0">Иванков Александр Александрович</span>
      </p>
      <p className="c3">
        <span className="c15" />
      </p>
      <p className="c3">
        <span className="c15" />
      </p>
      <p className="c3">
        <span className="c15" />
      </p>
      <p className="c3">
        <span className="c15" />
      </p>
      <p className="c26">
        <span className="c11">
          ПОДГОТОВКА ПО ОСНОВАМ ВОЕННОЙ СЛУЖБЫ В ХОДЕ ПРОВЕДЕНИЯ УЧЕБНЫХ СБОРОВ
        </span>
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c26">
        <span className="c7">Учебно-методическое пособие</span>
      </p>
      <p className="c3">
        <span className="c28 c16" />
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c3">
        <span className="c0" />
      </p>
      <p className="c9 c14">
        <span className="c40 c16" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c1 c14">
        <span className="c0" />
      </p>
      <p className="c9 c14">
        <span className="c16 c40" />
      </p>
    </div>
  )
}
export default Book
