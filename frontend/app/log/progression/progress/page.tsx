'use client'

import React, {useState, useEffect} from 'react';
import '../page.modules.css';
import banana from "frontend\public\banana.jpg";

export default function Progress ()
{
    


    return (
        <main className = "main">
            <div className="timeline">
            <div className="timeline-item">
                <div className="date">Date 1</div>
                <div className="content">
                <img src="/banana.jpg" alt="Image 1"/>
                <p>Text for Date 1</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="date">Date 2</div>
                <div className="content">
                <img src="/banana.jpg" alt="Image 2"/>
                <p>Text for Date 2</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="date">Date 3</div>
                <div className="content">
                <img src="/banana.jpg"alt="Image 3"/>
                <p>Text for Date 3</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="date">Date 4</div>
                <div className="content">
                <img src="/banana.jpg" alt="Image 4"/>
                <p>Text for Date 4</p>
                </div>
            </div>
            </div>
        </main>

    );
}

