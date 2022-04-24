



const students = [
   [ 'Saddam hossen' , 03, 28, 'Three' , 'Male' , 'Gaibandha' , 300  ],
   [ 'Sidrat babu' , 01, 12, 'One' , 'Male' , 'Saghata' , 350  ],
   [ 'Eity akhter' , 11, 22, 'Two' , 'Female' , 'Fulchorri' , 430  ],
   [ 'Nazmul haque' , 05, 24, 'One' , 'Male' , 'Gobindogong' , 1230  ],
   [ 'Sanaul islam' , 04, 17, 'Three' , 'Male' , 'Polasbari' , 1080  ],
   [ 'Parvin akhter' , 13, 23, 'Three' , 'Female' , 'Sundorgong' , 1520  ],
   [ 'Anamul haque' , 08, 29, 'Three' , 'Male' , 'Sadullapur' , 890  ],
   [ 'Meghla akhter' , 09, 12, 'One' , 'Female' , 'Dinajpur' , 2520  ],
   [ 'Jemy akhter' , 13, 22, 'Two' , 'Female' , 'Rajshahi' , 430  ],
   [ 'Mamunur roshed' , 05, 24, 'Three' , 'Male' , 'Gobindogong' , 1330  ],
   [ 'Asha akhter' , 14, 19, 'Three' , 'Female' , 'Polasbari' , 920  ],
   [ 'Sharmin akhter' , 13, 23, 'two' , 'Female' , 'Sundorgong' , 1520  ],
   [ 'Mahbur rahman' , 03, 28, 'Three' , 'Male' , 'Gaibandha' , 3100  ],
   [ 'Rezaul islam' , 23, 12, 'One' , 'Male' , 'Saghata' , 2050  ],
   [ 'Remi akhter' , 11, 21, 'Three' , 'Female' , 'Fulchorri' , 1330  ],
   [ 'Bobi akhter' , 05, 25, 'Three' , 'Female' , 'Gobindogong' , 2300  ],
   [ 'Sohel rana' , 04, 09, 'One' , 'Male' , 'Polasbari' , 1280  ],
   [ 'Salina akhter' , 13, 23, 'Three' , 'Female' , 'Sundorgong' , 1520  ],
   [ 'Anisur rahman' , 03, 23, 'Three' , 'Male' , 'Gaibandha' , 1300  ],
   [ 'Tanzil akando' , 01, 12, 'One' , 'Male' , 'Saghata' , 3150  ],
   [ 'Masuma akhter' , 16, 22, 'Two' , 'Female' , 'Fulchorri' , 1430  ],
   [ 'Samsul bapary' , 05, 24, 'Three' , 'Male' , 'Gobindogong' , 1680  ],
   [ 'Mokbul bapary' , 04, 17, 'Three' , 'Male' , 'Polasbari' , 1080  ],
   [ 'Asaton akhter' , 02, 23, 'One' , 'Female' , 'Sundorgong' , 1520  ],
   [ 'Anisul islam' , 01, 22, 'Three' , 'Male' , 'Gaibandha' , 1290  ],
   [ 'Rabeya akhter' , 04, 12, 'One' , 'Female' , 'Saghata' , 350  ],
   [ 'Gopal chandro' , 08, 17, 'Two' , 'Male' , 'Fulchorri' , 3450  ],
   [ 'Sohed islam' , 05, 14, 'One' , 'Male' , 'Gobindogong' , 1230  ],
   [ 'Samiul islam' , 04, 24, 'Three' , 'Male' , 'Polasbari' , 1080  ],
   [ 'Pavel islam' , 13, 13, 'Two' , 'Male' , 'Sundorgong' , 1520  ],
];


/* 1. Total Admission fees Calculation.
=======================================
*/

let total_fees = 0;

students.sort().forEach(( data, index ) => {
   console.log(`
      Id: ${ index + 1 }
      Name: ${ data[0] }
      Roll: ${ data[1] }
      Age: ${ data[2] }
      Class: ${ data[3] }
      Gender: ${ data[4] }
      Location: ${ data[5] }
      Admission Fess: ${ data[6] }
   `);
   total_fees += data[6];
})
console.log(`
      -----------------------------
      Total Fees = ${ total_fees } TK.
`);






/* 2. Find All Female Students.
===============================
*/


console.log(`
      @All Female student List:
     =========================
`);

students.sort().forEach(( data, index) => {
   if( data[4] === 'Female'){
      console.log(`
         id: ${ index + 1 }
         Name: ${ data[0] }
         Roll: ${ data[1] }
         Age: ${ data[2] }
         Class: ${ data[3] }
         Gender: ${ data[4] }
         Location: ${ data[5] }
      `);
   }
});

/* 3. Find class wise student result.
=====================================
*/

console.log(`
     @Class One All Student List:
     ============================
`);

students.sort().forEach(( data, index ) => {
   if( data[3] === 'One' ){
      console.log(`
         Id: ${ index + 1 }
         Name: ${ data[0] }
         Class: ${ data[3] }
         Roll: ${ data[1] }
         Location: ${ data[5] }
      `);
   }
});






/* 4. Location wise student result.
===================================
*/


console.log(`
     Gaibandha All Student List:
     ===========================
`);

students.sort().forEach(( data, index ) => {
   if( data[5] === 'Gaibandha' ){
      console.log(`
         Id: ${ index + 1 }
         Name: ${ data[0] }
         Class: ${ data[3] }
         Roll: ${ data[1] }
         Location: ${ data[5] }
      `);
   }
});


/* 5. Find All student between 10 - 25 age.
==========================================
*/

console.log(`
     @All Student between 10 - 25 Years Old.
     =======================================
`);


students.sort().forEach(( data, index ) => {
   if( data[2] >= 10 && data[2] <= 25){
      console.log(`
         Id: ${ index + 1 }
         Name: ${ data[0] }
         Class: ${ data[3] }
         Roll: ${ data[1] }
         Age: ${ data[2] }
         Location: ${ data[5] }
      `);
   }
});














