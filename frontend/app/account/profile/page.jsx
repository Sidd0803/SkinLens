'use client'

import React, {useState, useEffect} from 'react';
import { useRouter } from "next/navigation";
import "./page.modules.css"

export default function Profile ()
{
    const router  = useRouter();

    const handleOnProgressSubmit = () => 
    {
        router.push('/progression');
    }

    return (
        <main className = "main">
            <div> 
                <button className = "button" type = "submit"> upload an image </button>
            </div>
            <div>
            <button className = "button" type = "submit" onClick = {handleOnProgressSubmit}> view and track progress </button>
            </div>
        </main>
    );
}

