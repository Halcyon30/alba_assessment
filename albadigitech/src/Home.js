import React from 'react'
import './Homecss.css'
import Body from './body';
import Navbar from './Navbar';
import Footer from './footer';

function Home() {

  const myWebsiteDevelopment = {
    position: 'relative',
    left: '-90px'
  };

  return (
    <div>
      <Navbar/>
      <Body/>
      <img src='Gambar/Gambar_satu.png' alt='' className='gambar_1'></img>
      <img src='Gambar/kotak_putih.svg' alt='' className='kotak_putih_1'></img>
      <h1 className='caption-no-1'>Build or scale up</h1>
      <h1 className='caption-no-2'>your development team</h1>
      <h3 className='caption-no-3'>in weeks, not months</h3>
      <img src='Gambar/Strip_satu.svg' alt='' className='strip_1'></img>
      <button className='btn_box_home_1'>
            <a className='btn_text_home_1'>Book now</a>
            </button>

      <h1 className='caption-no-4'>Complete Package</h1>
      <h1 className='caption-no-5'>From product design to software continuous delivery</h1>

      <div className='panel_home_product_inner_1'>
        <img src='Gambar/pc_logo.svg' alt='' className='panel_home_product_inner_logo'></img>
        <h1 className='panel_home_product_inner_caption'>Website development</h1>
        <h2 className='panel_home_product_inner_desc'>High-performance website to reach out more your potential customers</h2>
      </div>

      <div className='panel_home_product_inner_2'>
        <img src='Gambar/mobile_apps.svg' alt='' className='panel_home_product_inner_logo'></img>
        <h1 className='panel_home_product_inner_caption'>Mobile apps development</h1>
        <h2 className='panel_home_product_inner_desc'>To accelerate your bussiness process</h2>
      </div>

      <div className='panel_home_product_inner_3'>
        <img src='Gambar/digital_product.svg' alt='' className='panel_home_product_inner_logo'></img>
        <h1 className='panel_home_product_inner_caption'>Digital product design</h1>
        <h2 className='panel_home_product_inner_desc'>Complete digital product creations from UX prototyping to final UI designs</h2>
      </div>

      <div className='panel_home_product_inner_4'>
        <img src='Gambar/maintain.svg' alt='' className='panel_home_product_inner_logo'></img>
        <h1 className='panel_home_product_inner_caption'>Maintenance</h1>
        <h2 className='panel_home_product_inner_desc'>Make sure your digital environment keep online and updated</h2>
      </div>

      <div className='panel_home_product_inner_5'>
        <img src='Gambar/cms.svg' alt='' className='panel_home_product_inner_logo'></img>
        <h1 className='panel_home_product_inner_caption'>CMS development</h1>
        <h2 className='panel_home_product_inner_desc'>You can update your website content yourself</h2>
      </div>

      <div className='panel_home_product_inner_6'>
        <img src='Gambar/payment.svg' alt='' className='panel_home_product_inner_logo'></img>
        <h1 className='panel_home_product_inner_caption'>Integrated payment gateway</h1>
        <h2 className='panel_home_product_inner_desc'>Simplify the payment system with just one step</h2>
      </div>

    <div className='logo_franchise'>        
        <a><img src='Gambar/aws.svg' alt=''></img></a>
        <a><img src='Gambar/cloud.svg' alt=''></img></a>
        <a><img src='Gambar/angular.svg' alt=''></img></a>
        <a><img src='Gambar/css3.svg' alt=''></img></a>
        <a><img src='Gambar/html5.svg' alt=''></img></a>
        <a><img src='Gambar/js.svg' alt=''></img></a>

        <a><img src='Gambar/php.svg' alt=''></img></a>
        <a><img src='Gambar/phyton.svg' alt=''></img></a>
        <a><img src='Gambar/react.svg' alt=''></img></a>
        <a><img src='Gambar/ruby.svg' alt=''></img></a>
        <a><img src='Gambar/leaf.svg' alt=''></img></a>
        <a><img src='Gambar/mysql.svg' alt=''></img></a>

        <a><img src='Gambar/postgresql.svg' alt=''></img></a>
        <a><img src='Gambar/microsoftsql.svg' alt=''></img></a>

        </div>

    <div className='black_board'>
        <h1 className='black_board_caption'>Our Progress Comes with a Collaboration Between Creativity, Ideas, and Technology</h1>

      <div className='black_board_white_caption'>
        <a><h1>1000+</h1></a>
        <a><h1>30+</h1></a>
        <a><h1>58+</h1></a>
      </div>

      <div className='black_board_white_caption_2'>
        <a><h1>Designs</h1></a>
        <a><h1>Products</h1></a>
        <a><h1 style={myWebsiteDevelopment}>Website Developments</h1></a>
      </div>
    </div>

    <h1 className='caption-no-6'>Portfolio</h1>
    {/* <h1 className='caption-no-7'>The software that we build takes our clients to the next level</h1> */}
    <div className='caption-no-7'>
        <span>The software that we build</span>
        <span style={{ marginTop: '10px' }}>takes our clients to the next level</span>
      </div>

      <div className='panel_mobile_apps'>
        <img src='Gambar/panelmobileapps.png' alt='' className='panel_product_image'></img>
        <h1 className='panel_product_caption1'>Mobile apps</h1>
        <h1 className='panel_product_caption'>ILIOS app (B2B E-commerce)</h1>
        <h2 className='panel_product_desc'>Has a unique selling point where not all companies offer application for sales, data collection and management.</h2>
      </div>

      <div className='panel_website_development1'>
        <img src='Gambar/panelmobileapps.png' alt='' className='panel_product_image'></img>
        <h1 className='panel_product_caption1'>Website development</h1>
        <h1 className='panel_product_caption'>Home and Living</h1>
        <h2 className='panel_product_desc'>Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living.</h2>
      </div>

      <div className='panel_website_development2'>
        <img src='Gambar/panelmobileapps.png' alt='' className='panel_product_image'></img>
        <h1 className='panel_product_caption1'>Website development</h1>
        <h1 className='panel_product_caption'>HIPPO</h1>
        <h2 className='panel_product_desc'>Albatech help to create e-commerce and company profile for Hippo's Website with realtime transaction and integration with Payment Gateway to accept multi payment.</h2>
      </div>

      <button className='btn_box_home_2'>
            <a className='btn_text_home_1'>Learn now</a>
            </button>

      <h1 className='caption-no-8'>Testimonials</h1>
      <div className='caption-no-9'>
        <span>What clients love in working</span>
        <span style={{ marginTop: '10px' }}>with Albatech Team</span>
      </div>

      <div className='group_testimonial_bg'>
        <img src='Gambar/petik_1.svg' alt='' className='petik_1'></img>
        <img src='Gambar/petik_2.svg' alt='' className='petik_2'></img>
        <img src='Gambar/yellow_dots.svg' alt='' className='yellow_dots'></img>
        <img src='Gambar/gray_dots.svg' alt='' className='grey_dots'></img>

      </div>

      
      <div className='group_testimonial'>

      <h1 className='amazing_people1'>Amazing people</h1>
      <h1 className='amazing_people_caption1'>"They are people who are not only following the task, but can work as a team. Together."</h1>
      <img src='Gambar/ellipse_1.svg' alt='' className='ellipse_1'></img>
      <h1 className='coo_name_1'>Matthijs Piëst</h1>
      <h1 className='coo_role_1'>COO at WieBetaaltwat</h1>

      <h1 className='amazing_people2'>Amazing people</h1>
      <h1 className='amazing_people_caption2'>"They are people who are not only following the tasks, but can work as a team. Together."</h1>
      <h1 className='coo_name_2'>Matthijs Piëst</h1>
      <h1 className='coo_role_2'>COO at WieBetaaltwat</h1>

      <h1 className='amazing_people3'>Amazing people</h1>
      <h1 className='amazing_people_caption3'>"They are people who are not only following the tasks, but can work as a team. Together."</h1>
      <h1 className='coo_name_3'>Matthijs Piëst</h1>
      <h1 className='coo_role_3'>COO at WieBetaaltwat</h1>

      <h1 className='amazing_people4'>Amazing people</h1>
      <h1 className='amazing_people_caption4'>"They are people who are not only following the tasks, but can work as a team. Together."</h1>
      <h1 className='coo_name_4'>Matthijs Piëst</h1>
      <h1 className='coo_role_4'>COO at WieBetaaltwat</h1>

      <h1 className='partnership_app1'>Partnership approach</h1>
      <h1 className='partnership_app_caption1'>“We felt like we had a true partner throughout the process. They were clearly interested on our long-term success.”</h1>
      <img src='Gambar/ellipse_1.svg' alt='' className='ellipse_2'></img>
      <h1 className='coo_name_5'>Matthijs Piëst</h1>
      <h1 className='coo_role_5'>COO at WieBetaaltwat</h1>
      
      </div>

      <div className='div_panel_logo'>
        <img src='Gambar/hippo.svg' alt='' className='Hippo_logo'></img>
        <img src='Gambar/home_living.svg' alt='' className='Home_living_logo'></img>
        <img src='Gambar/ilios.svg' alt='' className='ilios_logo'></img>
        <img src='Gambar/dio_living.svg' alt='' className='dio_living_logo'></img>
        <img src='Gambar/melandas.svg' alt='' className='melandas_logo'></img>
        <img src='Gambar/dots_3.svg' alt='' className='dots_3'></img>

      </div>

      <div className='div_panel_consultation'>
        <h1 className='panel_consultation_caption1'>Is software important for your business?</h1>
        <h1 className='panel_consultation_caption2'>Build it with Albatech</h1>
        <button className='panel_consultation_button1'>
            <a className='btn_text_home_1'>Consultation now</a>
            </button>
        </div>

    <Footer/>
    </div>
    
  )
}

export default Home