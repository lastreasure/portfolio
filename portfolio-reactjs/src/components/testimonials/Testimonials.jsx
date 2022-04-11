import React, { useRef, useState }from 'react'
import './testimonials.css'

import ThumbsUp from '../../assets/thumbs-up.png'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    clientPicture: ThumbsUp,
    name: 'Antony Dixon',
    feedback: 'Letitia, has demonstrated a great dedication and willingness to learn and develop her own knowledge and skills. I’ve been really impressed by her determination and ability to share and learn.'
  },
  {
    id: 2,
    clientPicture: ThumbsUp,
    name: 'Iain Wilkinson',
    feedback: 'A very impressive year from Tish. We deliberately loaded Tish with opportunities, and she rose to the challenge well. She has performed brilliantly, brings much to the team, greatly enhances the dynamic, and is a pleasure to have around. I shall miss her when she goes.'
  },
  {
    id: 3,
    clientPicture: ThumbsUp,
    name: 'Catherine Favret',
    feedback: 'I wanted to say a huge thank you for volunteering your time and knowledge, as a #CodelikeaGirl instructor this week. I want to especially thank you for taking the time to get to know the material for the HTML session you led. You were patient, clear and knowledgeable and that was clear to see in the final website from the girls being so strong due to your teaching.'
  },
  {
    id: 4,
    clientPicture: ThumbsUp,
    name: 'Atul Purohit',
    feedback: 'Letitia has been an absolutely discovery, very engaging and an overall great performance. She gets the concept really fast and is quickly beginning to becomes a very valued member of the C&A Strategy team.'
  },
  {
    id: 5,
    clientPicture: ThumbsUp,
    name: 'Stuart Perkins',
    feedback: 'Tish has created a new web interface as a front window for the DOAT team, providing easy access to all the resources, ticketing system and code optimisations that help users make nest use of the tool.'
  },
  {
    id: 6,
    clientPicture: ThumbsUp,
    name: 'Emma Halmshaw',
    feedback: 'Thank you for your time, energy and dedication to inspire your mentee. The impact you have had on your mentee will be long lasting, and truly brings our spirit behaviours to life.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Quotes from Colleagues</h5>

      <Swiper className="container testimonials__container"       
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              // navigation={true}
              pagination={{ clickable: true }}>
        {
          data.map(({id, clientPicture, name, feedback}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
              <div className="client__picture">
                <img src={clientPicture} alt="client" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {feedback}
                </small>
            </SwiperSlide>
            )
          })
        }


      </Swiper>
    </section>
  )
}

export default Testimonials