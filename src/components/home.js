import isLoggedIn from "./utils"
import HomeDesign from "./homeDesign";
export default function Home()
{
    if (isLoggedIn())
    {
        return <>
        <HomeDesign/>
        </>
    }
    else
    {
        return <h5>session expire click here to <a href="login/">login</a></h5>
    }
}