import React, {useState} from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";




const JobCard = ({job}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }
  return (
    <div className='bg-white rounded-xl border p-3  relative'>
    <div className='p-4'>
      <div className='mb-6'>
        <div className='text-gray-600 my-2'>{job.type}</div>
        <h3 className='text-xl font-bold truncate'>{job.title}</h3>
      </div>

      <div className='mb-5'>{description}</div>

      <button
        onClick={() => setShowFullDescription((prevState) => !prevState)}
        className='text-indigo-500 mb-5 hover:text-indigo-600'
      >
        {showFullDescription ? 'Less' : 'More'}
      </button>

      <h3 className='text-indigo-500 mb-2'>{job.salary}</h3>

      <div className='border border-gray-100 mb-5'></div>

      <div className='flex flex-col lg:flex-row justify-between mb-4'>
        <div className='text-emerald-700 mb-3'>
          {/* <FaMapMarker className='inline text-lg mb-1 mr-1' /> */}
          <FaLocationCrosshairs size={22} color='slate' className='inline text-lg mb-1 mr-1' />
          {job.location}
        </div>
        <button
          className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
        >
          Read More
        </button>
      </div>
    </div>
  </div>
  )
}

export default JobCard