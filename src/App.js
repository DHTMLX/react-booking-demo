import Booking from "./Booking";
import { getData } from "./data";

function App() {
    const dataset = getData();
    return <Booking data={dataset} />;
}

export default App;
