import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import JobCard from './Jobcard'
const JobList = () => {
const {data: jobs,isLoading, error} = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      
        try{
            const response = await axios.get("http://localhost:4000/jobs")
            return response.data
        }
        catch(error){
            console.log(error)
        }
    }
})


if (isLoading) return <span>loading...</span>
if (error) return <span>Error Fetching data!</span>

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-4'>

        {
        jobs.map(job => (
            <JobCard key = {job.id} job = {job} />
        ))
        }
    </div>
  )
}

export default JobList