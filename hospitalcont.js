import HospitalList from "../HospitalList/hospitallist"

const hlist = [
    {
        id:1,
        name:"A.P.Super Speciality Hospital",
        address:"Prajasakti Nagar,Vijayawada ",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rIRPQpdCxfeVoqA34OqCWTd7gSbjWECjsii3aa50&s"
    },
    {
        id:2,
        name:"Aayush NRI LEPL Health Care PVT.LTD.",
        address:"Sri Ramachandra Nagar, Vijayawada",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rIRPQpdCxfeVoqA34OqCWTd7gSbjWECjsii3aa50&s"
    },
    {
        id:3,
        name:"Eesha Multi Speciality Hospital",
        address:"Rajbhavan Road,Somajiguda, Hyderabad ",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rIRPQpdCxfeVoqA34OqCWTd7gSbjWECjsii3aa50&s"
    },
    {
        id:4,
        name:"Geeta Multi Speciality Hospital",
        address:"Secundrabad,Hyderabad",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rIRPQpdCxfeVoqA34OqCWTd7gSbjWECjsii3aa50&s"
    },
    {
        id:5,
        name:"GSL General Hospital",
        address:"NH-5, Lakshmi Puram, Rajahmundry.",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rIRPQpdCxfeVoqA34OqCWTd7gSbjWECjsii3aa50&s"
    },
    {
        id:6,
        name:"Image Hospital",
        address:"Ameerpet, Hyderabad.",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rIRPQpdCxfeVoqA34OqCWTd7gSbjWECjsii3aa50&s"
    },
    {
        id:7,
        name:"Jyothi Hospitals",
        address:"Miriyalaguda, Nalgonda Dt.",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rIRPQpdCxfeVoqA34OqCWTd7gSbjWECjsii3aa50&s"
    },
    {
        id:8,
        name:"Lazarus Hospital",
        address:"Waltair Main Road, Visakhapatnam.",
        imag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rIRPQpdCxfeVoqA34OqCWTd7gSbjWECjsii3aa50&s"
    },

]

const HospitalCont = () =>{
    return(
    <div>
    <HospitalList hlist={hlist}/>
    </div>
    )
}

export default HospitalCont