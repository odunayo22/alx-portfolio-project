import React from 'react';
import './Services.scss';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
    return(
        <section id='services-serv'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> I am well-experienced in software engineering roles such as  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> building website to fit different media screen  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> building website to fit different media screen  </p>
                        </li>
                        
                    </ul>

                </article>
                {/**End of Web Development */}

                <article className="service">
                    <div className="service__head">
                        <h3>Virtual Assistant</h3>
                    </div>

                    <ul className='service__list'>
                       

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> I am also trained in Virtual Assistant roles, such as  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> scheduling of office works.  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Attending to clients  </p>
                        </li>

                       
                        {/*

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> The information provided are all true. all details needeed is included.  </p>
                        </li>

    */}
                    </ul>

                </article>
                 {/*End of Virtual Assistant */}

                <article className="service">
                    <div className="service__head">
                        <h3>HR Manager</h3>
                    </div>

                    <ul className='service__list'>
                        

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> I am well experienced in HR function, such as  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Hiring new staffs  </p>
                        </li>

                        <li>
                            <BiCheck className='service__list-icon' />
                            <p> Sorting of Payroll  </p>
                        </li>

                        
                    </ul>

                </article>
                 {/**End of HR*/}

                
            </div>
       
        </section>
    )
}

export default Services;