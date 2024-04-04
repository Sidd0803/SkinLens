
import { useRouter } from "next/navigation";

export default function Progression ()
{
    const router  = useRouter();

    const handleOnProgressSubmit = () => 
    {
        router.push('/progression/progress');
    }

    return (
        <main className = "main">
            <div> 
                <button className = "button" type = "submit"> new timeline </button>
            </div>
            <div>
            <button className = "button" type = "submit" onClick = {handleOnProgressSubmit}> view and track progress </button>
            </div>
        </main>
    );
}


