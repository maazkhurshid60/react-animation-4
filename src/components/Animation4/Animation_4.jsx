//Main Imports
import React, { useEffect, useState } from 'react'

// Gsap Imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Icon Imports
import { GrPlan } from "react-icons/gr"; // Planning
import { LuFileSearch } from "react-icons/lu"; // Requirements
import { MdDesignServices } from "react-icons/md"; // Design
import { FaConnectdevelop } from "react-icons/fa"; // Development
import { GrTest } from "react-icons/gr"; // Testing
import { AiOutlineDeploymentUnit } from "react-icons/ai"; // Deployment

//Style Imports
import './animation_4.style.scss';

export default function Animation4Component() {
    const iconSize = 50
    const duration = 0.5;

    useEffect(() => {
        // Registering Scroll Trigger Plugin in GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Defininf default values
        const defaultBackgroundColor = 'rgb(245, 245, 245)';
        const defaultLineWithHeightMin = '0%';
        const defaultLineWithHeightMax = '100%';

        // Creating a GSAP timeline object with default configuration 
        const tl = gsap.timeline({ duration: duration });

        // Animating objects inside the timeline
        tl
        .from("#hr-line-f-1", { width: defaultLineWithHeightMin, height: defaultLineWithHeightMin})
            .to("#hr-line-f-1", { width: defaultLineWithHeightMax, height: defaultLineWithHeightMax, })
        .from(".sm-lc-1", { backgroundColor: defaultBackgroundColor })
            .to(".sm-lc-1", { backgroundColor: 'rgb(50, 83, 144)', })
        .from(['.cb-1', '.fs-uc1',], { borderColor: defaultBackgroundColor, color: defaultBackgroundColor })
            .to(['.cb-1', '.fs-uc1'], {  borderColor: 'rgb(50, 83, 144)', color: 'rgb(50, 83, 144)', })
        .from('#td-1', { opacity: 0 })
            .to('#td-1', { opacity: 1 })
        .from(".sm-rc-1", { backgroundColor: defaultBackgroundColor })
            .to(".sm-rc-1", { backgroundColor: 'rgb(50, 83, 144)', })
        .from("#hr-line-f-2", { width: defaultLineWithHeightMin, height: defaultLineWithHeightMin})
            .to("#hr-line-f-2", { width: defaultLineWithHeightMax, height: defaultLineWithHeightMax, })
        .from(".sm-lc-2", { backgroundColor: defaultBackgroundColor })
            .to(".sm-lc-2", { backgroundColor: 'rgb(248, 191, 101)', })
        .from(['.cb-2', '.fs-lc2'], { borderColor: defaultBackgroundColor, color: defaultBackgroundColor })
            .to(['.cb-2', '.fs-lc2'], {  borderColor: 'rgb(248, 191, 101)', color: 'rgb(248, 191, 101)', })
        .from('#td-2', { opacity: 0 })
            .to('#td-2', { opacity: 1 })
        .from(".sm-rc-2", { backgroundColor: defaultBackgroundColor })
            .to(".sm-rc-2", { backgroundColor: 'rgb(248, 191, 101)', })
        .from("#hr-line-f-3", { width: defaultLineWithHeightMin, height: defaultLineWithHeightMin})
            .to("#hr-line-f-3", { width: defaultLineWithHeightMax, height: defaultLineWithHeightMax, })
        .from(".sm-lc-3", { backgroundColor: defaultBackgroundColor })
            .to(".sm-lc-3", { backgroundColor: 'rgb(232, 64, 79)', })
        .from(['.cb-3', '.fs-uc3'], { borderColor: defaultBackgroundColor, color: defaultBackgroundColor })
            .to(['.cb-3', '.fs-uc3'], {  borderColor: 'rgb(232, 64, 79)', color: 'rgb(232, 64, 79)', })
        .from('#td-3', { opacity: 0 })
            .to('#td-3', { opacity: 1 })
        .from(".sm-rc-3", { backgroundColor: defaultBackgroundColor })
            .to(".sm-rc-3", { backgroundColor: 'rgb(232, 64, 79)', })
        .from("#hr-line-f-4", { width: defaultLineWithHeightMin, height: defaultLineWithHeightMin})
            .to("#hr-line-f-4", { width: defaultLineWithHeightMax, height: defaultLineWithHeightMax, })
        .from(".sm-lc-4", { backgroundColor: defaultBackgroundColor })
            .to(".sm-lc-4", { backgroundColor: 'rgb(154, 174, 189)', })
        .from(['.cb-4', '.fs-lc4'], { borderColor: defaultBackgroundColor, color: defaultBackgroundColor })
            .to(['.cb-4', '.fs-lc4'], {  borderColor: 'rgb(154, 174, 189)', color: 'rgb(154, 174, 189)', })
        .from('#td-4', { opacity: 0 })
            .to('#td-4', { opacity: 1 })
        .from(".sm-rc-4", { backgroundColor: defaultBackgroundColor })
            .to(".sm-rc-4", { backgroundColor: 'rgb(154, 174, 189)', })
        .from("#hr-line-f-5", { width: defaultLineWithHeightMin, height: defaultLineWithHeightMin})
            .to("#hr-line-f-5", { width: defaultLineWithHeightMax, height: defaultLineWithHeightMax, })
        .from(".sm-lc-5", { backgroundColor: defaultBackgroundColor })
            .to(".sm-lc-5", { backgroundColor: 'rgb(103, 141, 227)', })
        .from(['.cb-5', '.fs-uc5'], { borderColor: defaultBackgroundColor, color: defaultBackgroundColor })
            .to(['.cb-5', '.fs-uc5'], {  borderColor: 'rgb(103, 141, 227)', color: 'rgb(103, 141, 227)', })
        .from('#td-5', { opacity: 0 })
            .to('#td-5', { opacity: 1 })
        .from(".sm-rc-5", { backgroundColor: defaultBackgroundColor })
            .to(".sm-rc-5", { backgroundColor: 'rgb(103, 141, 227)', })
        .from("#hr-line-f-6", { width: defaultLineWithHeightMin, height: defaultLineWithHeightMin})
            .to("#hr-line-f-6", { width: defaultLineWithHeightMax, height: defaultLineWithHeightMax, })
        .from(".sm-lc-6", { backgroundColor: defaultBackgroundColor })
            .to(".sm-lc-6", { backgroundColor: 'rgb(255, 116, 129)', })
        .from(['.cb-6', '.fs-lc6'], { borderColor: defaultBackgroundColor, color: defaultBackgroundColor })
            .to(['.cb-6', '.fs-lc6'], {  borderColor: 'rgb(255, 116, 129)', color: 'rgb(255, 116, 129)', })
        .from('#td-6', { opacity: 0 })
            .to('#td-6', { opacity: 1 })
        .from(".sm-rc-6", { backgroundColor: defaultBackgroundColor })
            .to(".sm-rc-6", { backgroundColor: 'rgb(255, 116, 129)', })
        .from("#hr-line-f-7", { width: defaultLineWithHeightMin, height: defaultLineWithHeightMin})
            .to("#hr-line-f-7", { width: defaultLineWithHeightMax, height: defaultLineWithHeightMax, });

        // Creating Scroll Trigger and giving timeline object to it
        ScrollTrigger.create({
            animation: tl,
            trigger: '.animation-3',
            start: 'top top',
            end: '+=400',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            // markers: true,
        });
        

    }, []);

    return (
        <>
            <div className='first-1-div'></div>
            <div className='animation-3'>
                <div className='dsk-animation'>
                    <div className='dsk-process'>
                        {/* Block 1 Planning */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-1'></div>
                        </div>
                        <div className='back-circle fs-c1'>
                            <div className='upper-circle fs-uc1'>
                                <span className='sm-lc-1'/>
                                <span className='sm-rc-1'/>

                                <span className='count-box cb-1'>01</span>

                                <span className='inner-content box-1'>
                                    <GrPlan color='white' size={iconSize}/>
                                </span>
                            </div>
                            <div className='lower-circle fs-lc1'></div>
                        </div>

                        {/* Block 2 Requirements */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-2'></div>
                        </div>
                        <div className='back-circle fs-c2'>
                            <div className='upper-circle fs-uc2'>
                                <span className='sm-lc-2'/>
                                <span className='sm-rc-2'/>

                                <span className='count-box cb-2' id='cb-2'>02</span>

                                <span className='inner-content box-2'>
                                    <LuFileSearch color='white' size={iconSize}/>
                                </span>

                            </div>
                            <div className='lower-circle fs-lc2'>
                                <span className='count-box cb-2'>02</span>
                            </div>
                        </div>

                        {/* Block 3 Design */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-3'></div>
                        </div>
                        <div className='back-circle fs-c3'>
                            <div className='upper-circle fs-uc3'>
                                <span className='sm-lc-3'/>
                                <span className='sm-rc-3'/>

                                <span className='count-box cb-3'>03</span>

                                <span className='inner-content box-3'>
                                    <MdDesignServices color='white' size={iconSize}/>
                                </span>
                            </div>
                            <div className='lower-circle fs-lc3'></div>
                        </div>

                        {/* Block 4 Development */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-4'></div>
                        </div>
                        <div className='back-circle fs-c4'>
                            <div className='upper-circle fs-uc4'>
                                <span className='sm-lc-4'/>
                                <span className='sm-rc-4'/>

                                <span className='count-box cb-4' id='cb-4'>04</span>
                                <span className='inner-content box-4'>
                                    <FaConnectdevelop color='white' size={iconSize}/>
                                </span>

                            </div>
                            <div className='lower-circle fs-lc4'>
                                <span className='count-box cb-4'>04</span>
                            </div>
                        </div>

                        {/* Block 5 Testing */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-5'></div>
                        </div>
                        <div className='back-circle fs-c5'>
                            <div className='upper-circle fs-uc5'>
                                <span className='sm-lc-5'/>
                                <span className='sm-rc-5'/>

                                <span className='count-box cb-5'>05</span>

                                <span className='inner-content box-5'>
                                    <GrTest color='white' size={iconSize}/>
                                </span>
                            </div>
                            <div className='lower-circle fs-lc5'></div>
                        </div>

                        {/* Block 6 Deployments */}
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-6'></div>
                        </div>
                        <div className='back-circle fs-c6'>
                            <div className='upper-circle fs-uc6'>
                                <span className='sm-lc-6'/>
                                <span className='sm-rc-6'/>

                                <span className='count-box cb-6' id='cb-6'>06</span>

                                <span className='inner-content box-6'>
                                    <AiOutlineDeploymentUnit color='white' size={iconSize}/>
                                </span>

                            </div>
                            <div className='lower-circle fs-lc6'>
                                <span className='count-box cb-6'>06</span>
                            </div>
                        </div>
                        <div className='hr-line fs-ln'>
                            <div className='hr-line-fill' id='hr-line-f-7'></div>
                        </div>
                    </div>
                    <div className='process-titles-div'>
                        <div className='title-div' id='td-1'>
                            <h4 className='title-heading'>Planning</h4>
                            <p className='title-description'>Understand client objectives, audience, and app features.</p>
                        </div>
                        <div className='title-div' id='td-2'>
                            <h4 className='title-heading'>Requirements</h4>
                            <p className='title-description'>Determine the backend and database requirements</p>
                        </div>
                        <div className='title-div' id='td-3'>
                            <h4 className='title-heading'>Design</h4>
                            <p className='title-description'>Develop UI/UX designs for a visually appealing and intuitive user experience.</p>
                        </div>
                        <div className='title-div' id='td-4'> 
                            <h4 className='title-heading'>Development</h4>
                            <p className='title-description'>Write code and develop the app's frontend and backend.</p>
                        </div>
                        <div className='title-div' id='td-5'> 
                            <h4 className='title-heading'>Testing</h4>
                            <p className='title-description'>Rigoursly test the app to detect and resolve bugs and issues.</p>
                        </div>
                        <div className='title-div' id='td-6'> 
                            <h4 className='title-heading'>Deployment</h4>
                            <p className='title-description'>Prepare the app for deployment, including server setup and configuration.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='first-1-div'></div>
        </>
    );

}