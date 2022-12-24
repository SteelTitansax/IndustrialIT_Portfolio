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
                    <img src="canvas.png" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >PowerApps  </h1>
                    <h3>Front end Framework</h3> 
                    <h6 style={{paddingTop:'8px'}}>Power Apps is one of the four main services within the Power Platform, the other three being Power Automate, Power Virtual Agents and Power BI.

With Power Apps citizen developers can build apps and portals without using traditional code. There are several different no-code/low-code approaches to create business logic to your apps, e.g. by using Power Automate flows or workflows. Professional developers can extend apps with code, e.g. by creating business logic using plug-ins or Azure functions. Power Apps Component Framework is the framework used by Microsoft to create components to model-driven apps.</h6>
                   
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
                            <h3 className="text-center text-white"> Powerapps Canvas</h3>
                            <div className="border-bottom"/>
                        </div>        

                        {
                              canvasProjects.map(({name,description,image,url},i) => (
                                
                                    <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center  text-white">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-info border button-card" href ={url}>Demo</a>
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