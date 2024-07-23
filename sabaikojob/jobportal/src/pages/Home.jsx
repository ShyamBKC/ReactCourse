import React from 'react'
import Header from '../component/Header'
import Wrapper from '../component/Wrapper'
import JobList from '../component/JobList'

const Home = () => {
  return (
    <div>
         
        <Wrapper>
        <Header />

<div>
    <h2 className="text-3xl text-slate-900 font-bold">Newest Jobs</h2>
    <JobList />
</div>

        </Wrapper>
    </div>
  )
}

export default Home