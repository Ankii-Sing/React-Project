import { useRouteError } from "react-router"

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (

        <div className="Error">
            <h1>This is error page</h1>
            <h3>{err.status}</h3>
            <h3>{err.statusText}</h3>


        </div>
    )
}
export default Error;