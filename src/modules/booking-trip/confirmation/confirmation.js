const Confirmation = (distance) => {
    return (
        <div className="confirmation">
            <h3>Booking Trip</h3>
            <label>Distance: </label><p>{distance}</p>
            <label>Price: </label><p>{distance * 2000}</p>
        </div>
    )
}

export default Confirmation