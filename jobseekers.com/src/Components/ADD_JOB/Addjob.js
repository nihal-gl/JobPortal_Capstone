import "./addjob.css"
const Addjob = () => {
  return (
    <section>
          <div className="form_data">
              <div className="form_heading">
                  <form>
                      <h2>Add a Job</h2>
                      <div className="form_input">
                          <label htmlFor="job-id">JOB ID</label>
                          <input type="text" name="job_id"
                              id="job_id" required/>
                      </div>
                      <div className="form_input">
                          <label htmlFor="job_title">JOB TITLE</label>
                          <input type="text" name="job_title"
                              id="job_title" required/>
                      </div>
                      <div className="form_input">
                          <label htmlFor="company">COMPANY</label>
                          <input type="text" name="company"
                              id="company" required/>
                      </div>
                      <div className="form_input">
                          <label htmlFor="job_description">JOB DESCRIPTION</label>
                          <input type="text" name="job_description"
                              id="job_description" required/>
                      </div>
                      <div className="form_input">
                          <label htmlFor="skills">SKILLS</label>
                          <input type="text" name="skills"
                              id="skills" required/>
                      </div>
                      <div className="form_input">
                          <label htmlFor="salary">EXPECTED SALARY</label>
                          <input type="text" name="salary"
                              id="salary" required/>
                      </div>
                      <div className="form_input">
                          <label htmlFor="experience">EXPERIENCE</label>
                          <input type="text" name="experience"
                              id="experience" required/>
                      </div>
                      <button className="btn">Add</button>
                  </form>
            </div>
          </div>
    </section>
  )
}

export default Addjob