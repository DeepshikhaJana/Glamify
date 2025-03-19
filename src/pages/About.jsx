import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets';

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum possimus non ipsum? Eveniet ratione, ducimus et dolor accusamus debitis provident repellat? Cumque, repellat accusamus culpa magni nam porro illo ut!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus dignissimos unde. Magni nihil dicta vel quas sapiente! Vitae deleniti nam eum ipsam, amet quaerat esse natus vero perferendis sed!</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur ut optio dolores incidunt cupiditate natus. Commodi architecto omnis quia laborum rem, aspernatur nobis at, libero unde voluptate necessitatibus est.</p>
          </div>
      </div>

      <div></div>
    </div>
  );
}

export default About