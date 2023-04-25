/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import { MdClose, MdMenu } from 'react-icons/md'
import { size } from '../../constants/style/breakpoints'
// import { Sidebar } from '../../components/Sidebar'
import { navBook } from '../../constants/navBook'
import { useEffect, useState } from 'react'
import * as S from './BookScreen.styled'
import * as P from 'src/styled/PublicComponents.styled'
import type { MenuProps } from 'antd'
import './BookScreen.scss'
import { Link, Outlet } from 'react-router-dom'
import { Sidebar } from 'src/components/Sidebar'

const BookScreen = () => {
  // const [open, setOpen] = useState(false)
  // const [isModalOpen, setModalOpen] = useState(false)

  // const scrollToTop = () => {
  //   console.log(document.getElementById('boxtop'))
  //   document
  //     .getElementById('boxtop')
  //     ?.scrollIntoView(window.innerWidth > size.laptopS && { block: 'start', behavior: 'smooth' })
  //   // ?.scrollIntoView
  // }
  // const [dataModal, setDataModal] = useState({
  //   title: '',
  //   path: ''
  // })

  // const linkConspects = (data: any) => {
  //   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //   window.location.href = `https://docs.google.com/document/d/${data.id}/edit?usp=sharing&ou32858117889381065&rtpof=true&sd=true`
  // }

  // const linkVideo = (data: any) => {
  //   console.log('openVideo', data)
  //   setDataModal({
  //     title: data.title,
  //     // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //     path: `https://www.youtube.com/embed/${data.id}?autoplay=1`
  //   })
  //   setModalOpen(true)
  // }

  // const linkPrezentation = (data: any) => {
  //   console.log('linkPrezentation', data)

  //   setDataModal({
  //     title: data.title,
  //     path: data.path
  //   })
  //   setModalOpen(true)
  // }

  return (
    <div className="book-screen">
      <div className="book-screen__wrapper">
        <Sidebar />
        {/* <div className="book-screen__page"> */}
          <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '@import url(\'https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLTi9jKYd1gJzj5O2gWsEpXol-nTHck7FFkZplK5meosG\');.lst-kix_list_2-6>li:before{content:"\\0025cf  "}.lst-kix_list_2-7>li:before{content:"o  "}ul.lst-kix_list_1-0{list-style-type:none}.lst-kix_list_2-4>li:before{content:"o  "}.lst-kix_list_2-5>li:before{content:"\\0025aa  "}.lst-kix_list_2-8>li:before{content:"\\0025aa  "}.lst-kix_list_3-0>li:before{content:"\\002022  "}ul.lst-kix_list_5-7{list-style-type:none}ul.lst-kix_list_5-8{list-style-type:none}.lst-kix_list_3-1>li:before{content:"o  "}.lst-kix_list_3-2>li:before{content:"\\0025aa  "}ul.lst-kix_list_5-5{list-style-type:none}ul.lst-kix_list_3-7{list-style-type:none}ul.lst-kix_list_5-6{list-style-type:none}ul.lst-kix_list_3-8{list-style-type:none}ul.lst-kix_list_1-3{list-style-type:none}ul.lst-kix_list_3-1{list-style-type:none}.lst-kix_list_3-5>li:before{content:"\\0025aa  "}ul.lst-kix_list_5-0{list-style-type:none}ul.lst-kix_list_1-4{list-style-type:none}ul.lst-kix_list_3-2{list-style-type:none}ul.lst-kix_list_1-1{list-style-type:none}.lst-kix_list_3-4>li:before{content:"o  "}ul.lst-kix_list_1-2{list-style-type:none}ul.lst-kix_list_3-0{list-style-type:none}ul.lst-kix_list_5-3{list-style-type:none}ul.lst-kix_list_1-7{list-style-type:none}.lst-kix_list_3-3>li:before{content:"\\0025cf  "}ul.lst-kix_list_3-5{list-style-type:none}ul.lst-kix_list_5-4{list-style-type:none}ul.lst-kix_list_1-8{list-style-type:none}ul.lst-kix_list_3-6{list-style-type:none}ul.lst-kix_list_5-1{list-style-type:none}ul.lst-kix_list_1-5{list-style-type:none}ul.lst-kix_list_3-3{list-style-type:none}ul.lst-kix_list_5-2{list-style-type:none}ul.lst-kix_list_1-6{list-style-type:none}ul.lst-kix_list_3-4{list-style-type:none}.lst-kix_list_3-8>li:before{content:"\\0025aa  "}.lst-kix_list_4-0>li:before{content:"\\002022  "}.lst-kix_list_4-1>li:before{content:"o  "}.lst-kix_list_3-6>li:before{content:"\\0025cf  "}.lst-kix_list_3-7>li:before{content:"o  "}.lst-kix_list_4-4>li:before{content:"o  "}.lst-kix_list_4-3>li:before{content:"\\0025cf  "}.lst-kix_list_4-5>li:before{content:"\\0025aa  "}.lst-kix_list_4-2>li:before{content:"\\0025aa  "}.lst-kix_list_4-6>li:before{content:"\\0025cf  "}.lst-kix_list_5-0>li:before{content:"\\002022  "}.lst-kix_list_4-8>li:before{content:"\\0025aa  "}.lst-kix_list_5-3>li:before{content:"\\0025cf  "}.lst-kix_list_4-7>li:before{content:"o  "}.lst-kix_list_5-2>li:before{content:"\\0025aa  "}.lst-kix_list_5-1>li:before{content:"o  "}ul.lst-kix_list_4-8{list-style-type:none}.lst-kix_list_5-7>li:before{content:"o  "}ul.lst-kix_list_4-6{list-style-type:none}.lst-kix_list_5-6>li:before{content:"\\0025cf  "}.lst-kix_list_5-8>li:before{content:"\\0025aa  "}ul.lst-kix_list_2-8{list-style-type:none}ul.lst-kix_list_4-7{list-style-type:none}ul.lst-kix_list_4-0{list-style-type:none}ul.lst-kix_list_2-2{list-style-type:none}ul.lst-kix_list_4-1{list-style-type:none}.lst-kix_list_1-0>li:before{content:"\\0025cf  "}ul.lst-kix_list_2-3{list-style-type:none}.lst-kix_list_5-4>li:before{content:"o  "}ul.lst-kix_list_2-0{list-style-type:none}ul.lst-kix_list_2-1{list-style-type:none}ul.lst-kix_list_4-4{list-style-type:none}.lst-kix_list_5-5>li:before{content:"\\0025aa  "}ul.lst-kix_list_2-6{list-style-type:none}ul.lst-kix_list_4-5{list-style-type:none}.lst-kix_list_1-1>li:before{content:"o  "}.lst-kix_list_1-2>li:before{content:"\\0025aa  "}ul.lst-kix_list_2-7{list-style-type:none}ul.lst-kix_list_4-2{list-style-type:none}ul.lst-kix_list_2-4{list-style-type:none}ul.lst-kix_list_4-3{list-style-type:none}ul.lst-kix_list_2-5{list-style-type:none}.lst-kix_list_1-3>li:before{content:"\\0025cf  "}.lst-kix_list_1-4>li:before{content:"o  "}.lst-kix_list_1-7>li:before{content:"o  "}.lst-kix_list_1-5>li:before{content:"\\0025aa  "}.lst-kix_list_1-6>li:before{content:"\\0025cf  "}.lst-kix_list_2-0>li:before{content:"\\002022  "}.lst-kix_list_2-1>li:before{content:"o  "}.lst-kix_list_1-8>li:before{content:"\\0025aa  "}.lst-kix_list_2-2>li:before{content:"\\0025aa  "}.lst-kix_list_2-3>li:before{content:"\\0025cf  "}ol{margin:0;padding:0}table td,table th{padding:0}.c6{padding-top:0pt;text-indent:35.5pt;padding-bottom:0pt;line-height:1.0999999999999999;orphans:2;widows:2;text-align:justify}.c9{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Times New Roman";font-style:normal}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Times New Roman";font-style:normal}.c1{padding-top:0pt;text-indent:35.5pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:justify}.c10{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:center;height:11pt}.c12{padding-top:0pt;text-indent:35.5pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c18{background-color:#ffffff;padding-top:0pt;padding-bottom:0pt;line-height:1.0999999999999999;orphans:2;widows:2;text-align:center}.c20{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:18pt;font-family:"Times New Roman";font-style:normal}.c42{padding-top:2pt;padding-bottom:0pt;line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:center}.c4{padding-top:0pt;text-indent:42.5pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:justify}.c16{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:18pt;font-family:"Times New Roman";font-style:normal}.c3{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Calibri";font-style:normal}.c13{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Times New Roman";font-style:normal}.c25{padding-top:0pt;padding-bottom:0pt;line-height:1.0999999999999999;orphans:2;widows:2;text-align:justify}.c24{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:justify}.c22{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:center}.c38{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:left}.c36{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:right}.c37{padding-top:0pt;padding-bottom:10pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:center}.c26{font-weight:400;text-decoration:none;font-size:12pt;font-family:"Times New Roman"}.c30{color:#366091;text-decoration:none;vertical-align:baseline;font-style:normal}.c41{font-weight:700;font-size:11pt;font-family:"Calibri"}.c45{font-weight:700;font-size:20pt;font-family:"Times New Roman"}.c52{font-weight:700;font-size:11pt;font-family:"Times New Roman"}.c34{color:#000000;text-decoration:none;vertical-align:baseline}.c21{color:#000000;vertical-align:baseline;font-style:normal}.c2{font-size:14pt;font-family:"Times New Roman";font-weight:400}.c32{font-size:12pt;font-family:"Times New Roman";font-weight:700}.c54{font-weight:400;font-size:10pt;font-family:"Courier New"}.c48{font-size:12pt;font-family:"Times New Roman";font-weight:400}.c39{font-weight:700;font-size:16pt;font-family:"Times New Roman"}.c19{-webkit-text-decoration-skip:none;text-decoration:underline;text-decoration-skip-ink:none}.c50{font-weight:700;font-size:10pt;font-family:"Times New Roman"}.c11{font-size:14pt;font-family:"Times New Roman";font-weight:700}.c49{margin-left:-35.5pt;margin-right:-7.2pt}.c8{color:inherit;text-decoration:inherit}.c40{color:#000000;text-decoration:none}.c33{margin-left:35.5pt;text-indent:-35.5pt}.c5{padding:0;margin:0}.c17{margin-left:0pt;list-style-position:inside}.c44{max-width:467.7pt;padding:56.7pt 42.5pt 56.7pt 85pt}.c47{margin-left:35.5pt}.c15{height:11pt}.c46{text-indent:35.5pt}.c23{background-color:#ffff00}.c14{font-style:italic}.c53{page-break-after:avoid}.c35{background-color:#ffffff}.c28{text-indent:42.5pt}.c29{margin-left:-14.2pt}.c7{background-color:#ff00ff}.c31{font-style:normal}.c43{color:#ff0000}.c55{font-size:14pt}.c27{margin-left:-21.3pt}.c51{color:#000000}.title{padding-top:24pt;color:#000000;font-weight:700;font-size:36pt;padding-bottom:6pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:18pt;color:#666666;font-size:24pt;padding-bottom:4pt;font-family:"Georgia";line-height:1.1500000000000001;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Calibri"}p{margin:0;color:#000000;font-size:11pt;font-family:"Calibri"}h1{padding-top:12pt;color:#366091;font-size:16pt;padding-bottom:0pt;font-family:"Cambria";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-weight:700;font-size:18pt;padding-bottom:4pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:2pt;color:#243f61;font-size:12pt;padding-bottom:0pt;font-family:"Cambria";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:12pt;color:#000000;font-weight:700;font-size:12pt;padding-bottom:2pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:11pt;color:#000000;font-weight:700;font-size:11pt;padding-bottom:2pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:10pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:2pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}'
            }}
          />
          <Outlet />
        {/* </div> */}
      </div>
    </div>
  )
}
export { BookScreen }
