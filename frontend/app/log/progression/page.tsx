
import { useRouter } from "next/navigation";

export default function Progression ()
{
    const router  = useRouter();

    return (
        <main className = "main">
            <div> 
                <button className = "button" type = "submit"> new timeline </button>
            </div>
            <div>

            </div>
        </main>
    );
}


