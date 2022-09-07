import React from "react"
import "./ProfileForm.css"


const ProfileForm = () => {
  return (
    <section>
          <div className="form_data">
              <div className="form_heading">
                  <form>
                      <h2>Add your profile details</h2>
                      <div className="form_input">
                          <label htmlFor="photo">Photograph</label>
                          <input type="text" name="photo"
                              id="job_id" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name"
                              id="name" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="email">Email</label>
                          <input type="text" name="email"
                              id="linkedin" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="phone">Phone</label>
                          <input type="text" name="phone"
                              id="phone" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="experience">Experience</label>
                          <input type="text" name="experience"
                              id="experience" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="education">Education</label>
                          <input type="text" name="education"
                              id="education" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="projects">Projects</label>
                          <input type="text" name="projects"
                              id="projects" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="skills">Skills</label>
                          <input type="text" name="skills"
                              id="skills" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="languages">Languages</label>
                          <input type="text" name="languages"
                              id="languages" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="linkedin">LinkedIn</label>
                          <input type="text" name="linkedin"
                              id="linkedin" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="tweeter">Tweeter</label>
                          <input type="text" name="tweeter"
                              id="tweeter" />
                      </div>
                      <div className="form_input">
                          <label htmlFor="github">Github</label>
                          <input type="text" name="github"
                              id="github" />
                      </div>

                      <button className="btn">Submit</button>
                  </form>
            </div>
          </div>
    </section>
  )
}

export default ProfileForm