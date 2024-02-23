'use client'

import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation'

export default function Profile ()
{

    const router = useRouter();

    const handleOnProgressSubmit = () => 
    {
        router.push('/progress');

    }

    return (
        <main>
            <div> 
                <button type = "submit"> upload an image </button>
            </div>
            <div>
            <button type = "submit" onClick = {handleOnProgressSubmit}> view and track progress </button>
            </div>

        </main>
    );
}

