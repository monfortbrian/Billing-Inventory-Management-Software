import { TDocumentDefinitions } from 'pdfmake/interfaces'
import { IOrderDetailed } from '.'

export default (data: IOrderDetailed[]): TDocumentDefinitions => {
 console.log('data in bill', data)
 // playground requires you to assign document definition to a variable called dd
 let arrayTo = data.map(o => {
  return [
   `${o['product']} \n   ${o['quantity']}pcs x ${o['unityPrice']}`,
   `BIF ${o['total']}`,
  ]
  //    ['Sausage \n 1kg * BIF 4000.00', 'BIF 4000.00'],
 })
 console.log('dataArrayed:', arrayTo)
 var weekdays = new Array(7)
 weekdays[0] = 'Sunday'
 weekdays[1] = 'Monday'
 weekdays[2] = 'Tuesday'
 weekdays[3] = 'Wednesday'
 weekdays[4] = 'Thursday'
 weekdays[5] = 'Friday'
 weekdays[6] = 'Saturday'
 var definition: TDocumentDefinitions = {
  content: [
   { text: 'extra miles alimentations', style: 'title' },
   {
    text: "Boulevard de l'Uprona \ntel:+25768009988 \n ask@extramiles.bi",
    style: 'adresse',
   },
   { text: `Receipt no:${data[0]?.orderNumber}`, style: 'subheader' },
   {
    text: `${weekdays[new Date(data[0].orderTime).getDay()]},${new Date(
     data[0]?.orderTime
    ).getFullYear()}-${new Date(data[0]?.orderTime).getMonth() + 1}-${new Date(
     data[0]?.orderTime
    ).getDate()}`,
    style: 'subheader',
   },
   { text: 'cachier:Aline M.', style: 'subheader' },

   {
    text: '------------------------------------------------',
    style: 'breakLine',
   },

   {
    style: 'tableExemple',
    table: {
     widths: ['*', '*'],
     body: arrayTo,
    },
    layout: 'noBorders',
   },
   {
    text: '------------------------------------------------',
    style: 'breakLine',
   },
   `item:${data.length}`,
   {
    style: 'tableExemple',
    table: {
     widths: ['*', '*'],
     body: [
      ['Subtotal', `BIF ${data[0].subtotal}`],
      ['Tax', 'BIF 200.00'],
      [{ text: 'Total', style: 'title' }, `BIF ${data[0].subtotal}`],
     ],
    },
    layout: 'noBorders',
   },
   {
    style: 'tableExemple',
    table: {
     widths: ['*', '*'],
     body: [[{ qr: 'text in QR' }, { text: 'Thanks' }]],
    },
    layout: 'noBorders',
   },
  ],

  styles: {
   title: {
    fontSize: 20,
    bold: true,
   },
   header: {
    fontSize: 18,
    bold: true,
    margin: [0, 0, 0, 10],
   },

   subheader: {
    bold: true,
    margin: [0, 10, 0, 0],
   },
   breakLine: {
    // width: 100,
    fontSize: 16,
    color: 'grey',
   },
   adresse: {
    margin: [0, 8, 0, 0],
    fontSize: 10,
    // width: 60,
   },
   tableExample: {
    margin: [0, 5, 0, 15],
   },
  },
  pageSize: {
   width: 300,
   height: 480,
  },
  defaultStyle: {
   fontSize: 12,
  },
  pageMargins: [10, 5, 10, 0],
 }
 return definition
}

// var output = input.map(function(obj) {
//     return Object.keys(obj).sort().map(function(key) {
//       return obj[key];
//     });
//   });
