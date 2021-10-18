import ServiceContainer from "./ServiceContainer"

function Service({serviceToMap}){

    return(<div>
        <h1>Services that shops may provide</h1>
        <h4>**Reminder: Some shop may not provide some of these services**</h4>
    {
        serviceToMap.map(eachServices => {console.log(eachServices)
            return(
                <ServiceContainer
                            key={eachServices.id}
                            serviceToRender={eachServices}
                />
            )
        })
    }
    
    </div>)
}
export default Service