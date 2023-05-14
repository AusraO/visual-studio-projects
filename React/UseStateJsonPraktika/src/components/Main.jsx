import AllCards from "./AllCards";

const Main = ({prekes, mazintiSkaiciu, didintiSkaiciu, skaicius, changeStatus, masyvas, setMasyvas, krepselis,krepselioKitimas}) => {
    return ( 
    <>
    <AllCards
    prekes={prekes}
    mazintiSkaiciu={mazintiSkaiciu}
    didintiSkaiciu={didintiSkaiciu}
    skaicius={skaicius}
    changeStatus={changeStatus}
    masyvas={masyvas}
    setMasyvas={setMasyvas}
    krepselis={krepselis}
    krepselioKitimas={krepselioKitimas}
    />
    </> );
}
 
export default Main;