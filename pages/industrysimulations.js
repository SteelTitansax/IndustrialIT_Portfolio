import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {powerappsSkills, powerappsExperiences, reactProjects, reactNativeProjects, simulationsProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'


const Canvas = () =>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-light">
            <div className="row">
                <div className="col-md-2">
                    <img src="Industry40simulations.png" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Simulation Solutions</h1>
                    <h3>Tech Stack</h3> 
                    <h6 style={{paddingTop:'8px',textAlign:'justify'}}>We are living in revolutionary times for the manufacturing industry. Industry 4.0 is digitally transforming everything around us. As part of this digital transforming, the skill of simulating industrial equipments has a really important relevance. In order to perform this task the Office365 and Azure suite tool offers a wide range of possibilities.</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body card-body-skillsElectron">
                          <h3 className="text-dark">Skills</h3>
                            {
                                powerappsSkills.map(({skill,percentage},i) => (
                                    <div className="py-3" key={i}>
                                        <h6 className="text-primary">{skill}</h6>
                                        <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                             role="progressbar"
                                             style={{width:`${percentage}%`}}></div>
                                        </div>
                                    </div>
                                ))
                            }


                          
                    </div>
                </div>
        </div>

        <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body card-body-experienceElectron">
                          <h3 className="text-dark">Experience</h3>
                           
                          <ul>
                          {
                              powerappsExperiences.map (({title,description,from,to,url},i) => ( 
                               <div key={i}>
                                 <li>
                                    <h4 className="text-dark">{title}</h4>
                                    <h6 className="text-secondary">{from}-{to}</h6>
                                    <p className="text-primary">{description}</p>
                                 </li>   
                                    <a className="btn btn-primary border know-more" href={url}>
                                        Know more 
                                    </a> 
                                
                               </div>
                               


                              ))
                           
                          }
                              
                          </ul>
                    </div>
                </div>
        </div>
     </div>
    
    
    

    {/** Portfolio */}
    <div className="row mt-5">

          <div className="col-md-12">
                <div className="card card-body bg-primary">
                    <div className="row">
                        <div className="col-md-12 border-bottom">
                            <h1 className="text-center text-light"> Portfolio</h1>
                        </div>
                            

                        <div className="col-md-12 mt-3">
                            <h3 className="text-center text-white"> Simulation Solutions</h3>
                            <div className="border-bottom"/>
                        </div>        

                        {
                              simulationsProjects.map(({name,description,image,url},i) => (
                                
                                    <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center  text-white">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-info border button-card" href ={url}>Code</a>
                                            <a className="btn btn-success border button-card" href ={url}>Demo</a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                              ))
                          }                   

                        

                    </div>

                   


               

                   


                </div>

               


          </div>     
           
    </div>
</Layout>


export default Canvas;
