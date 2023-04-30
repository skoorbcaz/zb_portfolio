import React from 'react'
import img1 from '../../../images/portfolioscreens/1.png'
import img2 from '../../../images/portfolioscreens/2.png'
import img3 from '../../../images/portfolioscreens/3.png'
import img4 from '../../../images/portfolioscreens/4.png'
import img5 from '../../../images/portfolioscreens/5.jpg'
import img6 from '../../../images/portfolioscreens/6.jpg'
export const ScreensPreview = () => {
  return (
    <section className='section section--columns'>
      <div className='columns'>
        <ColumnWrap />
        <ColumnWrap />
        <ColumnWrap />
      </div>
    </section>
  )
}
const ColumnWrap = () => {
  return (
    <div className='column-wrap'>
      <div className='column'>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img1})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img2})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img3})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img4})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img5})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img6})` }} />
        </div>
        <div className='column__item'>
          <div className='column__item-img' style={{ backgroundImage: `url(${img1})` }} />
        </div>
      </div>
      {/* /column */}
    </div>
  )
}
