import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {skills, experiences, projects, angularProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'


console.log(skills);
console.log(experiences);

const Index = () =>
<>
<Layout>

     {/** Header card */}
     <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-primary text-light">
            <div className="row">
                <div className="col-md-2 text-center">
                    <div className="text-center">
                          <img src="perfil.jpeg"  className="img-fluid" alt="Imagen perfil"/> 
                    </div>
                    <div className="text-center pt-1">
                          <a className="btn btn-light border" id="hire-button" href="/hireme" >Contact</a>
                    </div>
                </div>
                <div className="col-md-8">
                    <h1 >Manuel Portero </h1>
                    <h3 >Industrial IT</h3> 
                    <h6 style={{paddingTop:'8px',textAlign:'justify'}}> Please have a look to the different IT solutions for industry demos.</h6>
                   
                   
                </div>

                <div className="col-md-2 text-center">
                    <div className="text-center">
                          <img src="Industry40.jpg"  className="img-fluid" alt="Imagen perfil"/> 
                    </div>
                    <div className="text-center pt-1">
                          <a className="btn btn-light border" id="back-website" href="https://profesionalwebsite-mpl.vercel.app/">Website</a>
                    </div>
                </div>  
            </div>
        </div>
    </div>

    </header>


     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body card-body-skills">
                          <h3   className="text-dark">Education</h3>
                            {
                                skills.map(({skill,degree,project},i) => (
                                    <div className="py-3" key={i}>
                                        <h6 className="text-primary">{skill}</h6>
                                        <p className="text-secondary">{degree}</p>
                                        <a className="text-dark" style={{fontSize:'11px'}} href={project}>
                                            <u>Check project</u>    
                                        </a> 
                                        
                                    </div>
                                ))
                            }


                          
                    </div>
                </div>
        </div>

        <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body card-body-experience pt-3">
                          <h3 className="text-dark pb-2">Experience</h3>
                           
                          <ul>
                          {
                              experiences.map (({title,description,from,to,url},i) => ( 
                               <div key={i}>
                                 <li>
                                    <h6 className="text-dark">{title}</h6>
                                    <p className="text-secondary">{from} - {to}</p>
                                    <p className="text-primary" style={{textAlign:'justify'}}>{description}</p>
                                 </li>   
                                 <div>
                                 <a className="btn btn-primary border know-more"  href={url}>
                                        Know more 
                                    </a> 
                                 </div>
                                   
                                
                               </div>
                               


                              ))
                           
                          }
                              
                          </ul>
                    </div>
                </div>
        </div>
     </div>
    

    {/** Portfolio **/}
    <div className="row">
          <div className="col-md-12">
                <div className="card card-body bg-primary">
                    <div className="row">
                        <div className="col-md-12 border-bottom">
                            <h1 className="text-center text-light"> Portfolios</h1>
                        </div>
                        <div className="col-md-12 mt-3">
                            <h3 className="text-center text-light">Sections</h3>
                            <hr className="bg-white "/>
                        </div>        
                        
                        <div className="col-md-2 p-3"/>

                        {
                              projects.map(({name,description,image,url},i) => (
                                
                                    <div className="col-md-4 p-3" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center text-white">{description}</p>
                                            <div className="text-center">
                                            <div className="button" id="button-5">
                                                <div id="translate"></div>
                                                <a className="text-white" href ={url}>Enter</a>
                                                </div>
                                         </div>
                                          
                                        </div>
                                    </div>
                                </div>

                              ))
                          }

                    
                    <div className="col-md-2 p-3"/>      




                             

                       
                    </div>

                   


                </div>

               


          </div>                
    </div>

</Layout>

</>
export default Index; 


        
