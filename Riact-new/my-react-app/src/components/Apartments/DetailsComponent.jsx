
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {getById} from '../redux/apiApartments'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {deleteApartment} from '../redux/apiApartments'
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';



export const Details = () => {
    const [curentApartment,setCurentApartment]=useState()
    const params =useParams()
    
    useEffect(() => {
        
        getById(params._id)
              .then(response => {
                setCurentApartment(response.data);
              })
              .catch(error => {
                  console.error('Error fetching apartment:', error);
              });
      },
       );

  const theUser = localStorage.getItem("CurrentAdvertiser");
  const currentAdvertiser = JSON.parse(theUser);

  const theCustomer = localStorage.getItem("currentCustomer");
  const customer = JSON.parse(theCustomer);

  const token = localStorage.getItem("token");

  // const tokenCustomer = localStorage.getItem('tokenCustomer')
  // מחיקת דירה
  const deleteApartment = () => {
    debugger;
    Swal.fire({
      title: "האם אתה בטוח שברצונך למחוק?",
      showCancelButton: true,
      confirmButtonText: "כן, מחק!",
      cancelButtonText: "ביטול",
    }).then((result) => {
      if (result.isConfirmed) {
        debugger
        // ביצוע מחיקה
        deleteApartment(currentAdvertiser._id, curentApartment._id)
          .then((x) => {
            Swal.fire("נמחק!", "הרשומה נמחקה בהצלחה.", "success");
          })
          .catch((err) => {
            Swal.fire("Error", `${err.response.data.message}`, "error");
            console.log(err);
          });
      }
    });
  };
  // עדכון דירה
  const update = () => {
    Swal.fire({
      title: "update Apartment",
      html: `
          <form id="ApartmentForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" value=${curentApartment.name} ><br><br>
        
          <label for="decreption">Description:</label>
          <input type="text" id="decreption" name="decreption" value=${curentApartment.description} ><br><br>
        
          <label for="image">Image:</label>
          <input type="file" id="image" name="image" value=${curentApartment.image} ><br><br>
        
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" required value=${curentApartment.address} ><br><br>
        
          <label for="numberBed">Number of Beds:</label>
          <input type="number" id="numberBed" name="numberBed" value=${curentApartment.numOfBad} ><br><br>
        
          <label for="addition">Additions:</label>
          <input type="text" id="addition" name="addition" value=${curentApartment.adition} ><br><br>
        
          <label for="price">Cost:</label>
          <input type="number" id="price" name="price" value=${curentApartment.cost} ><br><br>
        
          <button id="submitBtn" type="submit">Submit</button>

        </form>
          `,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: "Close",
    });
    document
      .getElementById("ApartmentForm")
      .addEventListener("submit", handleApartmentFormSubmit);
  };

  const handleApartmentFormSubmit = async (event) => {
    event.preventDefault();
    debugger;
    const theApartment = {
      name: event.target[0].value,
      description: event.target[1].value,
      adition: event.target[5].value,
      numOfBad: event.target[4].value,
      cost: event.target[6].value,
      address: event.target[3].value,
    };

    axios
      .put(
        `http://localhost:3001/Apartment/updateById/${currentAdvertiser._id}/${curentApartment._id}`,
        theApartment,
        { headers: { Authorization: token } }
      )
      .then((x) => {
        Swal.fire({
          icon: "success",
          title: "Update Apartment",
          text: `Apartment ${x.data.name} update successfully!`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.response.data.message,
        });
      });
  };

//   const order = () => {
//     order2(customer.email, curentApartment);
//     Swal(
//       "Success",
//       `Dear customer, your order has been successfully received and the order details have been sent to your email address `,
//       "success"
//     );
//   };
//   const temp = () => {
//     debugger;
//     tempe(curentApartment.cityId._id)
//       .then((x) => {
//         console.log(x.data);
//         if(x.data.data.cod==404){
//             Swal.fire("מזג אוויר בסביבה", `${x.data.data.message}<br/> Have a good day`, "warning");
//         }
//         else if(x.data.data.cod==200){
//             Swal.fire("מזג אוויר בסביבה", `Temp:${x.data.data.main.temp} ,Description:${x.data.data.weather[0].description}<br/> Have a good day`, "success");
//         }
//         else{
//             Swal.fire("מזג אוויר בסביבה", `Temp: cant get temp because it's <strong color='red'> lock </strong> , Link: <a href="${x.data.data.blockUrl}">${x.data.data.blockUrl}</a><br/> Sorry and success`, "warning");
//         }
//       })
//       .catch((err) => {
//         Swal.fire("Error", 'אין חיבור לאינטרנט <br/> כדי לקבל את הטמפ אנא התחבר לרשת', "error");
//         console.log(err);
//       });
//   };


    return (
        <>
        <br></br>
  <h1>details</h1>
  
  {curentApartment && (
                <h1>{curentApartment.name}</h1>
            )}
        <MenuItem onClick={() => update(curentApartment)}>update </MenuItem>
        <MenuItem onClick={() => deleteApartment()}>delete </MenuItem>
        </>
     )
}
 export default Details
    
