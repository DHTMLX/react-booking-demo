import { useEffect, useRef } from "react";
import { Booking } from "@dhx/trial-booking";
import "@dhx/trial-booking/dist/booking.css";

export default function BookingComponent(props) {
	let container = useRef();

	useEffect(() => {
		const booking = new Booking(container.current, {
			data: props.data
		});

		booking.setConfirmHandler(function(event){
			const { confirm } = event;
			setTimeout(() => {
				Math.random() < 0.5 ? confirm.error() : confirm.done();
			}, 1000);
		});

		return () => {
			booking.destructor();
		}
	});

	return <div ref={container} className="widget"></div>;
}
