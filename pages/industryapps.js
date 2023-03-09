import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {powerappsSkills, powerappsExperiences, reactProjects, reactNativeProjects, canvasProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'


const Canvas = () =>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-light">
            <div className="row">
                <div className="col-md-2">
                    <img src="Industry40apps.png" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Industrial Apps  </h1>
                    <h3>IT solution</h3> 
                    <h6 style={{paddingTop:'8px'}}>One of the new technologies for reaching the Industry4.0 goal are low-code techonologies. This portfolio section is a little sample about how low-code app can automate and speed up the daily processes of a factory.</h6>
                   
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
                            <h3 className="text-center text-white"> Industrial Apps</h3>
                            <div className="border-bottom"/>
                        </div>        

                        {
                              canvasProjects.map(({name,description,image,url,github},i) => (
                                
                                    <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center  text-white">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-info border button-card" href ={github}>Code</a>
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
