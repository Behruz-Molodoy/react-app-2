import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const newJobs = await axios.get(url)
    setJobs(newJobs.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return <section className='section loading'><h1>Loading...</h1></section>
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experiences</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => (
            <button className={value === index ? 'active-btn job-btn' : 'job-btn'} key={item.id} onClick={() => setValue(index)}>
              {item.company}
            </button>
          ))}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => (
            <div className='job-desc' key={index}>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

export default App
