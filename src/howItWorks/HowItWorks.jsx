import React from 'react';
import '../howItWorks/HowItWorks.css';

import howItWorksbg from '/howItWorksbg.svg';
import quantity from '/quantity.svg';
import sports from '/sports.svg';
import dance from "/dance.svg"
import sportsBlueBg from '/sportsBlueBg.svg';

const divStyle = {
  backgroundImage: `url(${howItWorksbg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '50%', // This value will make it circular, you can adjust it for the oval effect
  width: '2800px',     // Adjust width as needed
  height: '900px',    // Adjust height as needed
  margin: 'auto',      // Center the oval
  position: 'relative', // Ensure content is positioned correctly
};

const HowItWorks = () => {
  return (
    <div className='howItWorks-div 2xl:mt-150' style={divStyle}>
      <div className='text-center 2xl:mt-100 2xl:pt-100'>
        <p className='text-white 2xl:text-67 custom-font-family'>How it Works</p>
        <p className='2xl:text-18 text-[#C1C1C1] custom-font-family-2'>Lorem Ipsum is simply dummy text of the printing and typesetting <br></br> industry. Lorem Ipsum has</p>
      </div>

      <div className='images-div flex justify-evenly 2xl:mt-100'>
        <div>
          <div className='flex flex-col 2xl:w-150 mx-auto relative'>
            <img className='' src={sports} style={{ width: '100%' }} />
            <div className='absolute  2xl:w-100 2xl:h-100 bg-center bg-cover' style={{ backgroundImage: `url(${sportsBlueBg})`, zIndex: -1 }}></div>
          </div>
          <h2 className='text-center text-white 2xl:text-40 custom-font-family 2xl:mt-40'>Choose Favoured Sports</h2>
          <p className='text-center text-[#C1C1C1] 2xl:mt-15'>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit. Phasellus.</p>
        </div>
        <div>
          <div className='flex flex-col 2xl:w-150 mx-auto relative'>
            <img className='' src={quantity} style={{ width: '100%' }} />
            <div className='absolute  w-100 h-100 bg-center bg-cover' style={{ backgroundImage: `url(${sportsBlueBg})`, zIndex: -1 }}></div>
          </div>
          <h2 className='text-center text-white 2xl:text-40 custom-font-family 2xl:mt-40'>Choose Favoured Sports</h2>
          <p className='text-center text-[#C1C1C1] 2xl:mt-15'>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit. Phasellus.</p>
        </div>
        <div>
          <div className='flex flex-col 2xl:w-150 mx-auto relative'>
            <img className='' src={dance} style={{ width: '100%' }} />
            <div className='absolute  w-100 h-100 bg-center bg-cover' style={{ backgroundImage: `url(${sportsBlueBg})`, zIndex: -1 }}></div>
          </div>
          <h2 className='text-center text-white 2xl:text-40 custom-font-family 2xl:mt-40'>Choose Favoured Sports</h2>
          <p className='text-center text-[#C1C1C1] 2xl:mt-15'>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit. Phasellus.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
