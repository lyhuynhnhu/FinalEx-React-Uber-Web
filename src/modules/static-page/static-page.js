import './static-page.css'

const StaticPage = () => {
    return (
        <article>
            <section>
                <div className="main">
                    <div className="left">
                        <label>How Uber works</label>
                        <div className="explain">On-demand transportation technology is our core service,
                            and the app that connects driver-partners and riders is
                            what makes it all possible. Here how's it works, step by step:
                        </div>
                    </div>
                    <div className="right">
                        <h6>Step 1: A rider opens the app</h6>
                        <div className="text">The rider enters their destination into the Where to?
                            box on the top of the screen, taps each ride option to see the wait time,
                            car sizes, and price; then confirms their pickup location and taps Request.
                        </div>
                        <h6>Step 2: The rider is matched with a driver</h6>
                        <div className="text">
                            A nearby driver sees and chooses to accept the rider's trip request.
                            The rider is automatically notified when the driver's vehicle is about a minute away.
                        </div>
                        <h6>Step 3: The driver picks up the rider</h6>
                        <div className="text">
                            The driver and the rider verify each other's names and the destination.
                            Then the driver starts the ride.
                        </div>
                        <h6>Step 4: The driver takes the rider to the destination</h6>
                        <div className="text">
                            The app gives the driver the option to access turn-by-turn directions,
                            so the driver can focus on getting there and the rider can focus in enjoying a comfortable ride.
                        </div>
                        <h6>Step 5: The driver and rider leave ratings and reviews</h6>
                        <div className="text">
                            At the end of each trip, drivers and riders can rate each other from 1 to 5 stars. Riders can also
                            give the driver compliments. In cities where tipping is available, they can also add
                            a little extra to show their gratitude.
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default StaticPage