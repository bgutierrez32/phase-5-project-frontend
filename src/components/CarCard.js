function CarCard({carToRender}){
    return(
        <div>
            __________________________________
            <h1>{carToRender.year}</h1>
            <h1>{carToRender.make}</h1>
            <h1>{carToRender.model}</h1>
            <h1>{carToRender.insurance}</h1>

        </div>

    )
}
export default CarCard