// object ubication 
var provinces = {
  Panama: [{
    id: 'select',
    name: 'Seleccione una provincia'
  }, {
    id: '01',
    name: 'Bocas del Toro'
  }, {
    id: '02',
    name: "Coclé"
  }, {
    id: '03',
    name: "Colón"
  }, {
    id: '04',
    name: "Chiriquí"
  }, {
    id: '05',
    name: "Darién"
  }, {
    id: '06',
    name: "Herrera"
  }, {
    id: '07',
    name: "Los Santos"
  }, {
    id: '08',
    name: "Panamá"
  }, {
    id: '09',
    name: "Panamá Oeste"
  }, {
    id: '10',
    name: "Veraguas"
  }
  // {
  //   id: '11',
  //   name: "Comarca Emberá-Wounaan",
  // }, {
  //   id: '12',
  //   name: "Comarca Guna Yala"
  // }

  ],
  selectedOption: {
    id: 'select',
    name: 'Seleccione una provincia'
  }
}



var objProvince = {
  "provincia": [{
      "id": "01",
      "name": "BOCAS DEL TORO",
      "superficie": "4657.17",
      "pop10": "125461.00",
      "den10": "26.94",
      "capital": "Bocas del Toro",
      "distritos": [{
          "id": "01-1",
          "name": "Bocas del Toro",
          "superficie": "430.67",
          "pop10": "16135.00",
          "den10": "37.46",
          "capital": "Bocas del Toro",
          "corregimientos": [{
              "id": "01-1-01",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Bocas del Toro",
              "name": "Bocas del Toro",
              "superficie": "67.31",
              "pop10": "7366.00",
              "den10": "109.44"
            },
            {
              "id": "01-1-02",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Bocas del Toro",
              "name": "Bastimentos",
              "superficie": "62.24",
              "pop10": "1954.00",
              "den10": "31.39"
            },
            {
              "id": "01-1-03",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Bocas del Toro",
              "name": "Cauchero",
              "superficie": "140.58",
              "pop10": "2424.00",
              "den10": "17.24"
            },
            {
              "id": "01-1-05",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Bocas del Toro",
              "name": "Punta Laurel",
              "superficie": "71.95",
              "pop10": "1730.00",
              "den10": "24.05"
            },
            {
              "id": "01-1-05",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Bocas del Toro",
              "name": "Tierra Oscura",
              "superficie": "88.59",
              "pop10": "2661.00",
              "den10": "30.04"
            }
          ]
        },
        {
          "id": "01-2",
          "name": "Changuinola",
          "superficie": "4016.48",
          "pop10": "98310.00",
          "den10": "24.48",
          "capital": "Changuinola",
          "corregimientos": [{
              "id": "01-2-01",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Changuinola",
              "superficie": "96.66",
              "pop10": "31223.00",
              "den10": "323.03"
            },
            {
              "id": "01-2-02",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Almirante",
              "superficie": "95.36",
              "pop10": "12731.00",
              "den10": "133.51"
            },
            {
              "id": "01-2-03",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Guabito",
              "superficie": "168.78",
              "pop10": "8387.00",
              "den10": "49.69"
            },
            {
              "id": "01-2-04",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Teribe",
              "superficie": "858.46",
              "pop10": "2578.00",
              "den10": "03.00"
            },
            {
              "id": "01-2-05",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Valle del Risco",
              "superficie": "576.79",
              "pop10": "4187.00",
              "den10": "07.26"
            },
            {
              "id": "01-2-06",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "El Empalme",
              "superficie": "79.49",
              "pop10": "18653.00",
              "den10": "234.66"
            },
            {
              "id": "01-2-07",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Las Tablas",
              "superficie": "97.31",
              "pop10": "9286.00",
              "den10": "95.43"
            },
            {
              "id": "01-2-08",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Cochigró",
              "superficie": "548.89",
              "pop10": "1812.00",
              "den10": "03.30"
            },
            {
              "id": "01-2-09",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "La Gloria",
              "superficie": "165.18",
              "pop10": "3046.00",
              "den10": "18.44"
            },
            {
              "id": "01-2-10",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Las Delicias",
              "superficie": "206.86",
              "pop10": "1484.00",
              "den10": "07.17"
            },
            {
              "id": "01-2-11",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Nance del Risco",
              "superficie": "1052.41",
              "pop10": "1760.00",
              "den10": "01.67"
            },
            {
              "id": "01-2-12",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Changuinola",
              "name": "Valle de Agua Arriba",
              "superficie": "70.29",
              "pop10": "3163.00",
              "den10": "45.00"
            }
          ]
        },
        {
          "id": "01-3",
          "name": "Chiriquí Grande",
          "superficie": "210.02",
          "pop10": "11016.00",
          "den10": "52.45",
          "capital": "Chiriquí Grande",
          "corregimientos": [{
              "id": "01-3-01",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Chiriquí Grande",
              "name": "Chiriquí Grande",
              "superficie": "58.84",
              "pop10": "3014.00",
              "den10": "51.22"
            },
            {
              "id": "01-3-02",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Chiriquí Grande",
              "name": "Miramar",
              "superficie": "26.89",
              "pop10": "1232.00",
              "den10": "45.81"
            },
            {
              "id": "01-3-03",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Chiriquí Grande",
              "name": "Punta Peña",
              "superficie": "19.38",
              "pop10": "2520.00",
              "den10": "130.03"
            },
            {
              "id": "01-3-04",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Chiriquí Grande",
              "name": "Punta Robalo",
              "superficie": "50.97",
              "pop10": "1164.00",
              "den10": "22.84"
            },
            {
              "id": "01-3-05",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Chiriquí Grande",
              "name": "Rambala",
              "superficie": "33.56",
              "pop10": "1682.00",
              "den10": "50.13"
            },
            {
              "id": "01-3-06",
              "provincia": "BOCAS DEL TORO",
              "distrito": "Chiriquí Grande",
              "name": "Bajo Cedro",
              "superficie": "20.38",
              "pop10": "1404.00",
              "den10": "68.89"
            }
          ]
        }
      ]
    },
    {
      "id": "02",
      "name": "COCLÉ",
      "superficie": "4946.63",
      "pop10": "233708.00",
      "den10": "47.25",
      "capital": "Penonomé",
      "distritos": [{
          "id": "02-1",
          "name": "Aguadulce",
          "superficie": "469.30",
          "pop10": "43360.00",
          "den10": "92.39",
          "capital": "Aguadulce",
          "corregimientos": [{
              "id": "02-1-01",
              "provincia": "COCLÉ",
              "distrito": "Aguadulce",
              "name": "Aguadulce",
              "superficie": "50.45",
              "pop10": "8703.00",
              "den10": "172.52"
            },
            {
              "id": "02-1-02",
              "provincia": "COCLÉ",
              "distrito": "Aguadulce",
              "name": "El Cristo",
              "superficie": "113.02",
              "pop10": "4017.00",
              "den10": "35.54"
            },
            {
              "id": "02-1-03",
              "provincia": "COCLÉ",
              "distrito": "Aguadulce",
              "name": "El Roble",
              "superficie": "218.81",
              "pop10": "8369.00",
              "den10": "38.25"
            },
            {
              "id": "02-1-04",
              "provincia": "COCLÉ",
              "distrito": "Aguadulce",
              "name": "Pocrí",
              "superficie": "22.50",
              "pop10": "12881.00",
              "den10": "572.52"
            },
            {
              "id": "02-1-05",
              "provincia": "COCLÉ",
              "distrito": "Aguadulce",
              "name": "Barrios Unidos",
              "superficie": "64.52",
              "pop10": "9390.00",
              "den10": "145.53"
            }
          ]
        }, {
          "id": "02-2",
          "name": "Antón",
          "superficie": "747.81",
          "pop10": "54632.00",
          "den10": "73.06",
          "capital": "Antón",
          "corregimientos": [{
              "id": "02-2-01",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "Antón",
              "superficie": "106.34",
              "pop10": "9790.00",
              "den10": "92.06"
            },
            {
              "id": "02-2-02",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "Cabuya",
              "superficie": "60.59",
              "pop10": "2119.00",
              "den10": "34.97"
            },
            {
              "id": "02-2-03",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "El Chirú",
              "superficie": "113.59",
              "pop10": "3623.00",
              "den10": "31.89"
            },
            {
              "id": "02-2-04",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "El Retiro",
              "superficie": "66.08",
              "pop10": "2303.00",
              "den10": "34.85"
            },
            {
              "id": "02-2-05",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "El Valle",
              "superficie": "34.78",
              "pop10": "7602.00",
              "den10": "218.57"
            },
            {
              "id": "02-2-06",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "Juan Díaz",
              "superficie": "85.61",
              "pop10": "2634.00",
              "den10": "30.77"
            },
            {
              "id": "02-2-07",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "Río Hato",
              "superficie": "140.01",
              "pop10": "15701.00",
              "den10": "112.14"
            },
            {
              "id": "02-2-08",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "San Juan de Dios",
              "superficie": "55.73",
              "pop10": "4797.00",
              "den10": "86.08"
            },
            {
              "id": "02-2-09",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "Santa Rita",
              "superficie": "43.52",
              "pop10": "2562.00",
              "den10": "58.86"
            },
            {
              "id": "02-2-10",
              "provincia": "COCLÉ",
              "distrito": "Antón",
              "name": "Caballero",
              "superficie": "41.55",
              "pop10": "3501.00",
              "den10": "84.26"
            }
          ]
        },
        {
          "id": "02-3",
          "name": "La Pintada",
          "superficie": "1029.99",
          "pop10": "25639.00",
          "den10": "24.89",
          "capital": "La Pintada",
          "corregimientos": [{
              "id": "02-3-01",
              "provincia": "COCLÉ",
              "distrito": "La Pintada",
              "name": "La Pintada",
              "superficie": "84.55",
              "pop10": "3882.00",
              "den10": "45.91"
            },
            {
              "id": "02-3-02",
              "provincia": "COCLÉ",
              "distrito": "La Pintada",
              "name": "El Harino",
              "superficie": "252.13",
              "pop10": "5455.00",
              "den10": "21.64"
            },
            {
              "id": "02-3-03",
              "provincia": "COCLÉ",
              "distrito": "La Pintada",
              "name": "El Potrero",
              "superficie": "73.93",
              "pop10": "3165.00",
              "den10": "42.81"
            },
            {
              "id": "02-3-04",
              "provincia": "COCLÉ",
              "distrito": "La Pintada",
              "name": "Llano Grande",
              "superficie": "395.49",
              "pop10": "6901.00",
              "den10": "17.45"
            },
            {
              "id": "02-3-05",
              "provincia": "COCLÉ",
              "distrito": "La Pintada",
              "name": "Piedras Gordas",
              "superficie": "137.81",
              "pop10": "4164.00",
              "den10": "30.22"
            },
            {
              "id": "02-3-06",
              "provincia": "COCLÉ",
              "distrito": "La Pintada",
              "name": "Las Lomas",
              "superficie": "86.08",
              "pop10": "2072.00",
              "den10": "24.07"
            }
          ]
        },
        {
          "id": "02-4",
          "name": "Natá",
          "superficie": "605.23",
          "pop10": "18465.00",
          "den10": "30.51",
          "capital": "Natá",
          "corregimientos": [{
              "id": "02-4-01",
              "provincia": "COCLÉ",
              "distrito": "Natá",
              "name": "Natá",
              "superficie": "174.71",
              "pop10": "6003.00",
              "den10": "34.36"
            },
            {
              "id": "02-4-02",
              "provincia": "COCLÉ",
              "distrito": "Natá",
              "name": "Capellanía",
              "superficie": "102.31",
              "pop10": "4512.00",
              "den10": "44.10"
            },
            {
              "id": "02-4-03",
              "provincia": "COCLÉ",
              "distrito": "Natá",
              "name": "El Caño",
              "superficie": "86.05",
              "pop10": "3351.00",
              "den10": "38.94"
            },
            {
              "id": "02-4-04",
              "provincia": "COCLÉ",
              "distrito": "Natá",
              "name": "Guzmán",
              "superficie": "66.13",
              "pop10": "943.00",
              "den10": "14.26"
            },
            {
              "id": "02-4-05",
              "provincia": "COCLÉ",
              "distrito": "Natá",
              "name": "Las Huacas",
              "superficie": "90.18",
              "pop10": "1585.00",
              "den10": "17.58"
            },
            {
              "id": "02-4-06",
              "provincia": "COCLÉ",
              "distrito": "Natá",
              "name": "Toza",
              "superficie": "85.85",
              "pop10": "2071.00",
              "den10": "24.12"
            }
          ]
        },
        {
          "id": "02-5",
          "name": "Olá",
          "superficie": "385.72",
          "pop10": "5875.00",
          "den10": "15.23",
          "capital": "Olá",
          "corregimientos": [{
              "id": "02-5-01",
              "provincia": "COCLÉ",
              "distrito": "Olá",
              "name": "Olá",
              "superficie": "80.67",
              "pop10": "1419.00",
              "den10": "17.59"
            },
            {
              "id": "02-5-02",
              "provincia": "COCLÉ",
              "distrito": "Olá",
              "name": "El Copé",
              "superficie": "76.70",
              "pop10": "1425.00",
              "den10": "18.58"
            },
            {
              "id": "02-5-03",
              "provincia": "COCLÉ",
              "distrito": "Olá",
              "name": "El Palmar",
              "superficie": "111.34",
              "pop10": "1256.00",
              "den10": "11.28"
            },
            {
              "id": "02-5-04",
              "provincia": "COCLÉ",
              "distrito": "Olá",
              "name": "El Picacho",
              "superficie": "29.70",
              "pop10": "331.00",
              "den10": "11.15"
            },
            {
              "id": "02-5-05",
              "provincia": "COCLÉ",
              "distrito": "Olá",
              "name": "La Pava",
              "superficie": "87.32",
              "pop10": "1444.00",
              "den10": "16.54"
            }
          ]
        },
        {
          "id": "02-6",
          "name": "Penonomé",
          "superficie": "1708.57",
          "pop10": "85737.00",
          "den10": "50.18",
          "capital": "Penonomé",
          "corregimientos": [{
            "id": "02-6-01",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "Penonomé",
            "superficie": "52.96",
            "pop10": "21748.00",
            "den10": "410.68"
          }, {
            "id": "02-6-02",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "Cañaveral",
            "superficie": "63.78",
            "pop10": "7517.00",
            "den10": "117.85"
          }, {
            "id": "02-6-03",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "Coclé",
            "superficie": "115.03",
            "pop10": "4100.00",
            "den10": "35.64"
          }, {
            "id": "02-6-04",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "Chiguirí Arriba",
            "superficie": "202.87",
            "pop10": "10018.00",
            "den10": "49.38"
          }, {
            "id": "02-6-05",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "El Coco",
            "superficie": "146.29",
            "pop10": "5605.00",
            "den10": "38.31"
          }, {
            "id": "02-6-06",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "Pajonal",
            "superficie": "145.15",
            "pop10": "13565.00",
            "den10": "93.46"
          }, {
            "id": "02-6-07",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "Río Grande",
            "superficie": "93.22",
            "pop10": "3117.00",
            "den10": "33.44"
          }, {
            "id": "02-6-08",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "Río Indio",
            "superficie": "297.54",
            "pop10": "5240.00",
            "den10": "17.61"
          }, {
            "id": "02-6-09",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "Toabré",
            "superficie": "399.52",
            "pop10": "10203.00",
            "den10": "25.54"
          }, {
            "id": "02-6-10",
            "provincia": "COCLÉ",
            "distrito": "Penonomé",
            "name": "Tulú",
            "superficie": "192.21",
            "pop10": "4624.00",
            "den10": "24.06"
          }]
        }
      ]
    },
    {
      "id": "03",
      "name": "COLÓN",
      "superficie": "4575.49",
      "pop10": "241928.00",
      "den10": "52.87",
      "capital": "Colón",
      "distritos": [{
          "id": "03-1",
          "provincia": "COLÓN",
          "name": "Colón",
          "superficie": "1179.95",
          "pop10": "206553.00",
          "den10": "175.05",
          "capital": "Barrio Norte",
          "corregimientos": [{
            "id": "03-1-01",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Barrio Norte",
            "superficie": "01.18",
            "pop10": "20579.00",
            "den10": "17413.27"
          }, {
            "id": "03-1-02",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Barrio Sur",
            "superficie": "01.22",
            "pop10": "14076.00",
            "den10": "11539.60"
          }, {
            "id": "03-1-03",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Buena Vista",
            "superficie": "114.47",
            "pop10": "14285.00",
            "den10": "124.80"
          }, {
            "id": "03-1-04",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Cativá",
            "superficie": "23.12",
            "pop10": "34558.00",
            "den10": "1494.51"
          }, {
            "id": "03-1-05",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Ciricito",
            "superficie": "64.29",
            "pop10": "2900.00",
            "den10": "45.10"
          }, {
            "id": "03-1-06",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Cristóbal",
            "superficie": "428.49",
            "pop10": "49422.00",
            "den10": "115.34"
          }, {
            "id": "03-1-07",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Escobal",
            "superficie": "81.34",
            "pop10": "2388.00",
            "den10": "29.36"
          }, {
            "id": "03-1-08",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Limón",
            "superficie": "74.84",
            "pop10": "4665.00",
            "den10": "62.33"
          }, {
            "id": "03-1-09",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Nueva Providencia",
            "superficie": "17.33",
            "pop10": "5813.00",
            "den10": "335.41"
          }, {
            "id": "03-1-10",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Puerto Pilón",
            "superficie": "99.64",
            "pop10": "16517.00",
            "den10": "165.77"
          }, {
            "id": "03-1-11",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Sabanitas",
            "superficie": "11.57",
            "pop10": "19052.00",
            "den10": "1646.17"
          }, {
            "id": "03-1-12",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Salamanca",
            "superficie": "194.37",
            "pop10": "3881.00",
            "den10": "19.97"
          }, {
            "id": "03-1-13",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "San Juan",
            "superficie": "41.25",
            "pop10": "17430.00",
            "den10": "422.59"
          }, {
            "id": "03-1-14",
            "provincia": "COLÓN",
            "distrito": "Colón",
            "name": "Santa Rosa",
            "superficie": "26.84",
            "pop10": "987.00",
            "den10": "36.77"
          }]
        }, {
          "id": "03-2",
          "provincia": "COLÓN",
          "name": "Chagres",
          "superficie": "445.36",
          "pop10": "10003.00",
          "den10": "22.46",
          "capital": "Nuevo Chagres",
          "corregimientos": [{
            "id": "03-2-01",
            "provincia": "COLÓN",
            "distrito": "Chagres",
            "name": "Nuevo Chagres",
            "superficie": "05.87",
            "pop10": "499.00",
            "den10": "85.07"
          }, {
            "id": "03-2-02",
            "provincia": "COLÓN",
            "distrito": "Chagres",
            "name": "Achiote",
            "superficie": "40.32",
            "pop10": "771.00",
            "den10": "19.12"
          }, {
            "id": "03-2-03",
            "provincia": "COLÓN",
            "distrito": "Chagres",
            "name": "El Guabo",
            "superficie": "53.33",
            "pop10": "1330.00",
            "den10": "24.94"
          }, {
            "id": "03-2-04",
            "provincia": "COLÓN",
            "distrito": "Chagres",
            "name": "La Encantada",
            "superficie": "134.54",
            "pop10": "2561.00",
            "den10": "19.04"
          }, {
            "id": "03-2-05",
            "provincia": "COLÓN",
            "distrito": "Chagres",
            "name": "Palmas Bellas",
            "superficie": "75.88",
            "pop10": "1844.00",
            "den10": "24.30"
          }, {
            "id": "03-2-06",
            "provincia": "COLÓN",
            "distrito": "Chagres",
            "name": "Piña",
            "superficie": "29.26",
            "pop10": "836.00",
            "den10": "28.58"
          }, {
            "id": "03-2-07",
            "provincia": "COLÓN",
            "distrito": "Chagres",
            "name": "Salud",
            "superficie": "106.17",
            "pop10": "2162.00",
            "den10": "20.36"
          }]
        }, {
          "id": "03-3",
          "provincia": "COLÓN",
          "name": "Donoso",
          "superficie": "1826.09",
          "pop10": "12810.00",
          "den10": "07.01",
          "capital": "Miguel de la Borda",
          "corregimientos": [{
            "id": "03-3-01",
            "provincia": "COLÓN",
            "distrito": "Donoso",
            "name": "Miguel de la Borda",
            "superficie": "318.07",
            "pop10": "2326.00",
            "den10": "07.31"
          }, {
            "id": "03-3-02",
            "provincia": "COLÓN",
            "distrito": "Donoso",
            "name": "Coclé del Norte",
            "superficie": "929.94",
            "pop10": "3555.00",
            "den10": "03.82"
          }, {
            "id": "03-3-03",
            "provincia": "COLÓN",
            "distrito": "Donoso",
            "name": "El Guásimo",
            "superficie": "290.97",
            "pop10": "2843.00",
            "den10": "09.77"
          }, {
            "id": "03-3-04",
            "provincia": "COLÓN",
            "distrito": "Donoso",
            "name": "Gobea",
            "superficie": "52.13",
            "pop10": "794.00",
            "den10": "15.23"
          }, {
            "id": "03-3-05",
            "provincia": "COLÓN",
            "distrito": "Donoso",
            "name": "Río Indio",
            "superficie": "36.37",
            "pop10": "1044.00",
            "den10": "28.70"
          }, {
            "id": "03-3-06",
            "provincia": "COLÓN",
            "distrito": "Donoso",
            "name": "San José del General",
            "superficie": "198.61",
            "pop10": "2248.00",
            "den10": "11.32"
          }]
        },
        {
          "id": "03-4",
          "provincia": "COLÓN",
          "name": "Portobelo",
          "superficie": "396.90",
          "pop10": "9126.00",
          "den10": "22.99",
          "capital": "Portobelo",
          "corregimientos": [{
              "id": "03-4-01",
              "provincia": "COLÓN",
              "distrito": "Portobelo",
              "name": "Portobelo",
              "superficie": "244.72",
              "pop10": "4559.00",
              "den10": "18.63"
            },
            {
              "id": "03-4-02",
              "provincia": "COLÓN",
              "distrito": "Portobelo",
              "name": "Cacique",
              "superficie": "11.37",
              "pop10": "246.00",
              "den10": "21.63"
            },
            {
              "id": "03-4-03",
              "provincia": "COLÓN",
              "distrito": "Portobelo",
              "name": "Puerto Lindo o Garrote",
              "superficie": "23.74",
              "pop10": "869.00",
              "den10": "36.61"
            },
            {
              "id": "03-4-04",
              "provincia": "COLÓN",
              "distrito": "Portobelo",
              "name": "Isla Grande",
              "superficie": "26.59",
              "pop10": "1037.00",
              "den10": "39.01"
            },
            {
              "id": "03-4-05",
              "provincia": "COLÓN",
              "distrito": "Portobelo",
              "name": "María Chiquita",
              "superficie": "90.49",
              "pop10": "2415.00",
              "den10": "26.69"
            }
          ]
        },
        {
          "id": "03-5",
          "provincia": "COLÓN",
          "name": "Santa Isabel",
          "superficie": "727.18",
          "pop10": "3436.00",
          "den10": "04.73",
          "capital": "Palenque",
          "corregimientos": [{
              "id": "03-5-01",
              "provincia": "COLÓN",
              "distrito": "Santa Isabel",
              "name": "Palenque",
              "superficie": "62.76",
              "pop10": "404.00",
              "den10": "06.44"
            },
            {
              "id": "03-5-02",
              "provincia": "COLÓN",
              "distrito": "Santa Isabel",
              "name": "Cuango",
              "superficie": "37.86",
              "pop10": "442.00",
              "den10": "11.68"
            },
            {
              "id": "03-5-03",
              "provincia": "COLÓN",
              "distrito": "Santa Isabel",
              "name": "Miramar",
              "superficie": "18.48",
              "pop10": "201.00",
              "den10": "10.88"
            },
            {
              "id": "03-5-04",
              "provincia": "COLÓN",
              "distrito": "Santa Isabel",
              "name": "Nombre de Dios",
              "superficie": "143.51",
              "pop10": "1130.00",
              "den10": "07.87"
            },
            {
              "id": "03-5-05",
              "provincia": "COLÓN",
              "distrito": "Santa Isabel",
              "name": "Palmira",
              "superficie": "176.89",
              "pop10": "319.00",
              "den10": "01.80"
            },
            {
              "id": "03-5-06",
              "provincia": "COLÓN",
              "distrito": "Santa Isabel",
              "name": "Playa Chiquita",
              "superficie": "117.49",
              "pop10": "169.00",
              "den10": "01.44"
            },
            {
              "id": "03-5-07",
              "provincia": "COLÓN",
              "distrito": "Santa Isabel",
              "name": "Santa Isabel",
              "superficie": "130.85",
              "pop10": "284.00",
              "den10": "02.17"
            },
            {
              "id": "03-5-08",
              "provincia": "COLÓN",
              "distrito": "Santa Isabel",
              "name": "Viento Frío",
              "superficie": "39.35",
              "pop10": "487.00",
              "den10": "12.38"
            }
          ]
        }
      ]
    },
    {
      "id": "04",
      "name": "CHIRIQUÍ",
      "superficie": "6490.89",
      "pop10": "416873.00",
      "den10": "64.22",
      "capital": "David",
      "distritos": [{
          "id": "04-1",
          "provincia": "CHIRIQUÍ",
          "distrito": "Alanje",
          "name":"Alanje",
          "superficie": "443.35",
          "pop10": "16508.00",
          "den10": "37.23",
          "capital": "Alanje",
          "corregimientos": [{
              "id": "04-1-01",
              "provincia": "CHIRIQUÍ",
              "name": "Alanje",
              "name": "Alanje",
              "superficie": "21.43",
              "pop10": "2406.00",
              "den10": "112.29"
            },
            {
              "id": "04-1-02",
              "provincia": "CHIRIQUÍ",
              "distrito": "Alanje",
              "name": "Divalá",
              "superficie": "71.99",
              "pop10": "3457.00",
              "den10": "48.02"
            },
            {
              "id": "04-1-03",
              "provincia": "CHIRIQUÍ",
              "distrito": "Alanje",
              "name": "El Tejar",
              "superficie": "36.52",
              "pop10": "1961.00",
              "den10": "53.70"
            },
            {
              "id": "04-1-04",
              "provincia": "CHIRIQUÍ",
              "distrito": "Alanje",
              "name": "Guarumal",
              "superficie": "83.27",
              "pop10": "2418.00",
              "den10": "29.04"
            },
            {
              "id": "04-1-05",
              "provincia": "CHIRIQUÍ",
              "distrito": "Alanje",
              "name": "Palo Grande",
              "superficie": "40.98",
              "pop10": "578.00",
              "den10": "14.10"
            },
            {
              "id": "04-1-06",
              "provincia": "CHIRIQUÍ",
              "distrito": "Alanje",
              "name": "Querévalo",
              "superficie": "34.46",
              "pop10": "1751.00",
              "den10": "50.81"
            },
            {
              "id": "04-1-07",
              "provincia": "CHIRIQUÍ",
              "distrito": "Alanje",
              "name": "Santo Tomás",
              "superficie": "45.14",
              "pop10": "1259.00",
              "den10": "27.89"
            },
            {
              "id": "04-1-08",
              "provincia": "CHIRIQUÍ",
              "distrito": "Alanje",
              "name": "Canta Gallo",
              "superficie": "36.93",
              "pop10": "577.00",
              "den10": "15.62"
            },
            {
              "id": "04-1-09",
              "provincia": "CHIRIQUÍ",
              "distrito": "Alanje",
              "name": "Nuevo México",
              "superficie": "72.62",
              "pop10": "2101.00",
              "den10": "28.93"
            }
          ]
        },
        {
          "id": "04-2",
          "provincia": "CHIRIQUÍ",
          "name": "Barú",
          "superficie": "595.00",
          "pop10": "55775.00",
          "den10": "93.74",
          "capital": "Puerto Armuelles",
          "corregimientos": [{
              "id": "04-2-01",
              "provincia": "CHIRIQUÍ",
              "distrito": "Barú",
              "name": "Puerto Armuelles",
              "superficie": "222.48",
              "pop10": "20455.00",
              "den10": "91.94"
            },
            {
              "id": "04-2-02",
              "provincia": "CHIRIQUÍ",
              "distrito": "Barú",
              "name": "Limones",
              "superficie": "53.79",
              "pop10": "1040.00",
              "den10": "19.34"
            },
            {
              "id": "04-2-03",
              "provincia": "CHIRIQUÍ",
              "distrito": "Barú",
              "name": "Progreso",
              "superficie": "55.62",
              "pop10": "11402.00",
              "den10": "205.00"
            },
            {
              "id": "04-2-04",
              "provincia": "CHIRIQUÍ",
              "distrito": "Barú",
              "name": "Baco",
              "superficie": "75.90",
              "pop10": "7334.00",
              "den10": "96.63"
            },
            {
              "id": "04-2-05",
              "provincia": "CHIRIQUÍ",
              "distrito": "Barú",
              "name": "Rodolfo Aguilar Delgado",
              "superficie": "187.22",
              "pop10": "15544.00",
              "den10": "83.03"
            }
          ]
        },
        {
          "id": "04-3",
          "provincia": "CHIRIQUÍ",
          "name": "Boquerón",
          "superficie": "295.27",
          "pop10": "15029.00",
          "den10": "50.90",
          "capital": "Boquerón",
          "corregimientos": [{
            "id": "04-3-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquerón",
            "name": "Boquerón",
            "superficie": "39.95",
            "pop10": "3881.00",
            "den10": "97.15"
          }, {
            "id": "04-3-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquerón",
            "name": "Bágala",
            "superficie": "42.88",
            "pop10": "2330.00",
            "den10": "54.33"
          }, {
            "id": "04-3-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquerón",
            "name": "Cordillera",
            "superficie": "49.27",
            "pop10": "590.00",
            "den10": "11.97"
          }, {
            "id": "04-3-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquerón",
            "name": "Guabal",
            "superficie": "32.09",
            "pop10": "884.00",
            "den10": "27.55"
          }, {
            "id": "04-3-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquerón",
            "name": "Guayabal",
            "superficie": "57.28",
            "pop10": "2111.00",
            "den10": "36.85"
          }, {
            "id": "04-3-06",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquerón",
            "name": "Paraíso",
            "superficie": "36.45",
            "pop10": "429.00",
            "den10": "11.77"
          }, {
            "id": "04-3-07",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquerón",
            "name": "Pedregal",
            "superficie": "19.81",
            "pop10": "2134.00",
            "den10": "107.74"
          }, {
            "id": "04-3-08",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquerón",
            "name": "Tijeras",
            "superficie": "17.54",
            "pop10": "2670.00",
            "den10": "152.21"
          }]
        },
        {
          "id": "04-4",
          "provincia": "CHIRIQUÍ",
          "name": "Boquete",
          "superficie": "488.42",
          "pop10": "21370.00",
          "den10": "43.75",
          "capital": "Bajo Boquete",
          "corregimientos": [{
            "id": "04-4-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquete",
            "name": "Bajo Boquete",
            "superficie": "18.23",
            "pop10": "4493.00",
            "den10": "246.50"
          }, {
            "id": "04-4-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquete",
            "name": "Caldera",
            "superficie": "147.00",
            "pop10": "1560.00",
            "den10": "10.61"
          }, {
            "id": "04-4-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquete",
            "name": "Palmira",
            "superficie": "57.47",
            "pop10": "1776.00",
            "den10": "30.90"
          }, {
            "id": "04-4-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquete",
            "name": "Alto Boquete",
            "superficie": "89.36",
            "pop10": "6290.00",
            "den10": "70.39"
          }, {
            "id": "04-4-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquete",
            "name": "Jaramillo",
            "superficie": "77.46",
            "pop10": "2655.00",
            "den10": "34.28"
          }, {
            "id": "04-4-06",
            "provincia": "CHIRIQUÍ",
            "distrito": "Boquete",
            "name": "Los Naranjos",
            "superficie": "98.90",
            "pop10": "4596.00",
            "den10": "46.47"
          }]
        },
        {
          "id": "04-5",
          "provincia": "CHIRIQUÍ",
          "name": "Bugaba",
          "superficie": "879.91",
          "pop10": "78209.00",
          "den10": "88.88",
          "capital": "La Concepción",
          "corregimientos": [{
            "id": "04-5-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "La Concepción",
            "superficie": "66.90",
            "pop10": "21356.00",
            "den10": "319.21"
          }, {
            "id": "04-5-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "Aserrío de Gariché",
            "superficie": "98.78",
            "pop10": "11072.00",
            "den10": "112.09"
          }, {
            "id": "04-5-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "Bugaba",
            "superficie": "12.88",
            "pop10": "3718.00",
            "den10": "288.58"
          }, {
            "id": "04-5-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "Cerro Punta",
            "superficie": "105.06",
            "pop10": "7754.00",
            "den10": "73.81"
          }, {
            "id": "04-5-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "Gómez",
            "superficie": "40.83",
            "pop10": "2702.00",
            "den10": "66.18"
          }, {
            "id": "04-5-06",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "La Estrella",
            "superficie": "51.85",
            "pop10": "4665.00",
            "den10": "89.96"
          }, {
            "id": "04-5-07",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "San Andrés",
            "superficie": "65.24",
            "pop10": "2523.00",
            "den10": "38.67"
          }, {
            "id": "04-5-08",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "Santa Marta",
            "superficie": "30.42",
            "pop10": "3679.00",
            "den10": "120.93"
          }, {
            "id": "04-5-09",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "Santa Rosa",
            "superficie": "48.04",
            "pop10": "1510.00",
            "den10": "31.43"
          }, {
            "id": "04-5-10",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "Santo Domingo",
            "superficie": "50.93",
            "pop10": "2625.00",
            "den10": "51.54"
          }, {
            "id": "04-5-11",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "Sortová",
            "superficie": "33.43",
            "pop10": "2440.00",
            "den10": "72.99"
          }, {
            "id": "04-5-12",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "Volcán",
            "superficie": "233.67",
            "pop10": "12717.00",
            "den10": "54.42"
          }, {
            "id": "04-5-13",
            "provincia": "CHIRIQUÍ",
            "distrito": "Bugaba",
            "name": "El Bongo",
            "superficie": "41.87",
            "pop10": "1448.00",
            "den10": "34.59"
          }]
        },
        {
          "id": "04-6",
          "provincia": "CHIRIQUÍ",
          "name": "David",
          "superficie": "868.37",
          "pop10": "144858.00",
          "den10": "166.82",
          "capital": "David",
          "corregimientos": [{
            "id": "04-6-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "David",
            "superficie": "66.90",
            "pop10": "82907.00",
            "den10": "1239.20"
          }, {
            "id": "04-6-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "Bijagual",
            "superficie": "84.01",
            "pop10": "732.00",
            "den10": "08.71"
          }, {
            "id": "04-6-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "Cochea",
            "superficie": "58.76",
            "pop10": "2447.00",
            "den10": "41.65"
          }, {
            "id": "04-6-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "Chiriquí",
            "superficie": "205.12",
            "pop10": "4269.00",
            "den10": "20.81"
          }, {
            "id": "04-6-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "Guacá",
            "superficie": "69.19",
            "pop10": "1891.00",
            "den10": "27.33"
          }, {
            "id": "04-6-06",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "Las Lomas",
            "superficie": "76.57",
            "pop10": "18769.00",
            "den10": "245.13"
          }, {
            "id": "04-6-07",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "Pedregal",
            "superficie": "144.37",
            "pop10": "17516.00",
            "den10": "121.33"
          }, {
            "id": "04-6-08",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "San Carlos",
            "superficie": "44.67",
            "pop10": "4487.00",
            "den10": "100.44"
          }, {
            "id": "04-6-09",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "San Pablo Nuevo",
            "superficie": "58.98",
            "pop10": "1752.00",
            "den10": "29.71"
          }, {
            "id": "04-6-10",
            "provincia": "CHIRIQUÍ",
            "distrito": "David",
            "name": "San Pablo Viejo",
            "superficie": "59.80",
            "pop10": "10088.00",
            "den10": "168.69"
          }]
        },
        {
          "id": "04-7",
          "provincia": "CHIRIQUÍ",
          "name": "Dolega",
          "superficie": "250.82",
          "pop10": "25102.00",
          "den10": "100.08",
          "capital": "Dolega",
          "corregimientos": [{
            "id": "04-7-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "Dolega",
            "name": "Dolega",
            "superficie": "26.78",
            "pop10": "4074.00",
            "den10": "152.13"
          }, {
            "id": "04-7-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "Dolega",
            "name": "Dos Ríos",
            "superficie": "18.11",
            "pop10": "1634.00",
            "den10": "90.21"
          }, {
            "id": "04-7-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "Dolega",
            "name": "Los Anastacios",
            "superficie": "10.83",
            "pop10": "3236.00",
            "den10": "298.88"
          }, {
            "id": "04-7-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "Dolega",
            "name": "Potrerillos",
            "superficie": "55.43",
            "pop10": "1562.00",
            "den10": "28.18"
          }, {
            "id": "04-7-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "Dolega",
            "name": "Potrerillos Abajo",
            "superficie": "33.84",
            "pop10": "1815.00",
            "den10": "53.64"
          }, {
            "id": "04-7-06",
            "provincia": "CHIRIQUÍ",
            "distrito": "Dolega",
            "name": "Rovira",
            "superficie": "46.40",
            "pop10": "1925.00",
            "den10": "41.48"
          }, {
            "id": "04-7-07",
            "provincia": "CHIRIQUÍ",
            "distrito": "Dolega",
            "name": "Tinajas",
            "superficie": "29.40",
            "pop10": "1530.00",
            "den10": "52.04"
          }, {
            "id": "04-7-08",
            "provincia": "CHIRIQUÍ",
            "distrito": "Dolega",
            "name": "Los Algarrobos",
            "superficie": "30.03",
            "pop10": "9326.00",
            "den10": "310.60"
          }]
        },
        {
          "id": "04-8",
          "provincia": "CHIRIQUÍ",
          "name": "Gualaca",
          "superficie": "625.52",
          "pop10": "9750.00",
          "den10": "15.59",
          "capital": "Gualaca",
          "corregimientos": [{
            "id": "04-8-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "Gualaca",
            "name": "Gualaca",
            "superficie": "237.33",
            "pop10": "5605.00",
            "den10": "23.62"
          }, {
            "id": "04-8-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "Gualaca",
            "name": "Hornito",
            "superficie": "179.27",
            "pop10": "1230.00",
            "den10": "06.86"
          }, {
            "id": "04-8-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "Gualaca",
            "name": "Los Angeles",
            "superficie": "79.92",
            "pop10": "715.00",
            "den10": "08.95"
          }, {
            "id": "04-8-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "Gualaca",
            "name": "Paja de Sombrero",
            "superficie": "62.72",
            "pop10": "653.00",
            "den10": "10.41"
          }, {
            "id": "04-8-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "Gualaca",
            "name": "Rincón",
            "superficie": "66.29",
            "pop10": "1547.00",
            "den10": "23.34"
          }]
        },
        {
          "id": "04-9",
          "provincia": "CHIRIQUÍ",
          "name": "Remedios",
          "superficie": "166.79",
          "pop10": "4052.00",
          "den10": "24.29",
          "capital": "Remedios",
          "corregimientos": [{
            "id": "04-9-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "Remedios",
            "name": "Remedios",
            "superficie": "43.47",
            "pop10": "908.00",
            "den10": "20.89"
          }, {
            "id": "04-9-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "Remedios",
            "name": "El Nancito",
            "superficie": "35.44",
            "pop10": "607.00",
            "den10": "17.13"
          }, {
            "id": "04-9-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "Remedios",
            "name": "El Porvenir",
            "superficie": "28.14",
            "pop10": "1325.00",
            "den10": "47.09"
          }, {
            "id": "04-9-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "Remedios",
            "name": "El Puerto",
            "superficie": "34.44",
            "pop10": "720.00",
            "den10": "20.91"
          }, {
            "id": "04-9-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "Remedios",
            "name": "Santa Lucia",
            "superficie": "25.31",
            "pop10": "492.00",
            "den10": "19.44"
          }]
        },
        {
          "id": "04-10",
          "provincia": "CHIRIQUÍ",
          "name": "Renacimiento",
          "superficie": "529.02",
          "pop10": "20524.00",
          "den10": "38.80",
          "capital": "Río Sereno",
          "corregimientos": [{
            "id": "04-10-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "Renacimiento",
            "name": "Río Sereno",
            "superficie": "83.19",
            "pop10": "5463.00",
            "den10": "65.67"
          }, {
            "id": "04-10-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "Renacimiento",
            "name": "Breñon",
            "superficie": "35.76",
            "pop10": "755.00",
            "den10": "21.11"
          }, {
            "id": "04-10-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "Renacimiento",
            "name": "Cañas Gordas",
            "superficie": "60.82",
            "pop10": "3090.00",
            "den10": "50.81"
          }, {
            "id": "04-10-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "Renacimiento",
            "name": "Monte Lirio",
            "superficie": "43.84",
            "pop10": "2771.00",
            "den10": "63.20"
          }, {
            "id": "04-10-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "Renacimiento",
            "name": "Plaza Caisán",
            "superficie": "96.13",
            "pop10": "2901.00",
            "den10": "30.18"
          }, {
            "id": "04-10-06",
            "provincia": "CHIRIQUÍ",
            "distrito": "Renacimiento",
            "name": "Santa Cruz",
            "superficie": "59.82",
            "pop10": "1904.00",
            "den10": "31.83"
          }, {
            "id": "04-10-07",
            "provincia": "CHIRIQUÍ",
            "distrito": "Renacimiento",
            "name": "Dominical",
            "superficie": "82.50",
            "pop10": "998.00",
            "den10": "12.10"
          }, {
            "id": "04-10-08",
            "provincia": "CHIRIQUÍ",
            "distrito": "Renacimiento",
            "name": "Santa Clara",
            "superficie": "66.96",
            "pop10": "2642.00",
            "den10": "39.46"
          }]
        },
        {
          "id": "04-11",
          "provincia": "CHIRIQUÍ",
          "name": "San Félix",
          "superficie": "218.29",
          "pop10": "6304.00",
          "den10": "28.88",
          "capital": "Las Lajas",
          "corregimientos": [{
            "id": "04-11-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Félix",
            "name": "Las Lajas",
            "superficie": "54.18",
            "pop10": "1521.00",
            "den10": "28.07"
          }, {
            "id": "04-11-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Félix",
            "name": "Juay",
            "superficie": "33.19",
            "pop10": "654.00",
            "den10": "19.70"
          }, {
            "id": "04-11-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Félix",
            "name": "Lajas Adentro",
            "superficie": "19.57",
            "pop10": "741.00",
            "den10": "37.86"
          }, {
            "id": "04-11-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Félix",
            "name": "San Félix",
            "superficie": "55.69",
            "pop10": "2972.00",
            "den10": "53.37"
          }, {
            "id": "04-11-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Félix",
            "name": "Santa Cruz",
            "superficie": "55.66",
            "pop10": "416.00",
            "den10": "07.47"
          }]
        },
        {
          "id": "04-12",
          "provincia": "CHIRIQUÍ",
          "name": "San Lorenzo",
          "superficie": "647.81",
          "pop10": "7507.00",
          "den10": "11.59",
          "capital": "Horconcitos",
          "corregimientos": [{
            "id": "04-12-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Lorenzo",
            "name": "Horconcitos",
            "superficie": "73.12",
            "pop10": "996.00",
            "den10": "13.62"
          }, {
            "id": "04-12-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Lorenzo",
            "name": "Boca Chica",
            "superficie": "88.01",
            "pop10": "441.00",
            "den10": "05.01"
          }, {
            "id": "04-12-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Lorenzo",
            "name": "Boca del Monte",
            "superficie": "243.84",
            "pop10": "2143.00",
            "den10": "08.79"
          }, {
            "id": "04-12-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Lorenzo",
            "name": "San Juan",
            "superficie": "106.08",
            "pop10": "1637.00",
            "den10": "15.43"
          }, {
            "id": "04-12-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "San Lorenzo",
            "name": "San Lorenzo",
            "superficie": "136.76",
            "pop10": "2290.00",
            "den10": "16.74"
          }]
        },
        {
          "id": "04-13",
          "provincia": "CHIRIQUÍ",
          "name": "Tolé",
          "superficie": "482.31",
          "pop10": "11885.00",
          "den10": "24.64",
          "capital": "Tolé",
          "corregimientos": [{
            "id": "04-13-01",
            "provincia": "CHIRIQUÍ",
            "distrito": "Tolé",
            "name": "Tolé",
            "superficie": "76.92",
            "pop10": "3240.00",
            "den10": "42.12"
          }, {
            "id": "04-13-02",
            "provincia": "CHIRIQUÍ",
            "distrito": "Tolé",
            "name": "Bella Vista",
            "superficie": "38.04",
            "pop10": "683.00",
            "den10": "17.96"
          }, {
            "id": "04-13-03",
            "provincia": "CHIRIQUÍ",
            "distrito": "Tolé",
            "name": "Cerro Viejo",
            "superficie": "59.51",
            "pop10": "1768.00",
            "den10": "29.71"
          }, {
            "id": "04-13-04",
            "provincia": "CHIRIQUÍ",
            "distrito": "Tolé",
            "name": "El Cristo",
            "superficie": "31.35",
            "pop10": "1500.00",
            "den10": "47.85"
          }, {
            "id": "04-13-05",
            "provincia": "CHIRIQUÍ",
            "distrito": "Tolé",
            "name": "Justo Fidel Palacios",
            "superficie": "25.79",
            "pop10": "656.00",
            "den10": "25.43"
          }, {
            "id": "04-13-06",
            "provincia": "CHIRIQUÍ",
            "distrito": "Tolé",
            "name": "Lajas de Tolé",
            "superficie": "81.25",
            "pop10": "847.00",
            "den10": "10.42"
          }, {
            "id": "04-13-07",
            "provincia": "CHIRIQUÍ",
            "distrito": "Tolé",
            "name": "Potrero de Caña",
            "superficie": "20.11",
            "pop10": "337.00",
            "den10": "16.76"
          }, {
            "id": "04-13-08",
            "provincia": "CHIRIQUÍ",
            "distrito": "Tolé",
            "name": "Quebrada de Piedra",
            "superficie": "98.27",
            "pop10": "1127.00",
            "den10": "11.47"
          }, {
            "id": "04-13-09",
            "provincia": "CHIRIQUÍ",
            "distrito": "Tolé",
            "name": "Veladero",
            "superficie": "51.05",
            "pop10": "1727.00",
            "den10": "33.83"
          }]
        }
      ]
    },
    {
      "id": "05",
      "name": "DARIÉN",
      "superficie": "11892.48",
      "pop10": "48378.00",
      "den10": "04.07",
      "capital": "La Palma",
      "distritos": [{
          "id": "05-1",
          "provincia": "DARIÉN",
          "distrito": "Chepigana",
          "superficie": "6991.09",
          "pop10": "30110.00",
          "den10": "04.31",
          "capital": "La Palma",
          "corregimientos": [{
            "id": "05-1-01",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "La Palma",
            "superficie": "526.56",
            "pop10": "4205.00",
            "den10": "07.99"
          }, {
            "id": "05-1-02",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Camogantí",
            "superficie": "460.97",
            "pop10": "282.00",
            "den10": "00.61"
          }, {
            "id": "05-1-03",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Chepigana",
            "superficie": "381.85",
            "pop10": "704.00",
            "den10": "01.84"
          }, {
            "id": "05-1-04",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Garachiné",
            "superficie": "188.53",
            "pop10": "1878.00",
            "den10": "09.96"
          }, {
            "id": "05-1-05",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Jaqué",
            "superficie": "1043.91",
            "pop10": "2386.00",
            "den10": "02.29"
          }, {
            "id": "05-1-06",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Puerto Piña",
            "superficie": "302.65",
            "pop10": "1113.00",
            "den10": "03.68"
          }, {
            "id": "05-1-07",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Río Congo",
            "superficie": "474.00",
            "pop10": "1540.00",
            "den10": "03.25"
          }, {
            "id": "05-1-08",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Río Iglesias",
            "superficie": "481.58",
            "pop10": "1672.00",
            "den10": "03.47"
          }, {
            "id": "05-1-09",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Sambú",
            "superficie": "38.78",
            "pop10": "931.00",
            "den10": "24.01"
          }, {
            "id": "05-1-10",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Setegantí",
            "superficie": "101.09",
            "pop10": "558.00",
            "den10": "05.52"
          }, {
            "id": "05-1-11",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Taimatí",
            "superficie": "170.03",
            "pop10": "764.00",
            "den10": "04.49"
          }, {
            "id": "05-1-12",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Tucutí",
            "superficie": "1395.96",
            "pop10": "1200.00",
            "den10": "00.86"
          }, {
            "id": "05-1-13",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Agua Fría",
            "superficie": "283.73",
            "pop10": "2692.00",
            "den10": "09.49"
          }, {
            "id": "05-1-14",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Cucunatí",
            "superficie": "196.64",
            "pop10": "1346.00",
            "den10": "06.85"
          }, {
            "id": "05-1-15",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Río Congo Arriba",
            "superficie": "329.49",
            "pop10": "1916.00",
            "den10": "05.82"
          }, {
            "id": "05-1-16",
            "provincia": "DARIÉN",
            "distrito": "Chepigana",
            "name": "Santa Fé",
            "superficie": "615.32",
            "pop10": "6923.00",
            "den10": "11.25"
          }]
        },
        {
          "id": "05-2",
          "provincia": "DARIÉN",
          "distrito": "Pinogana",
          "superficie": "4901.39",
          "pop10": "18268.00",
          "den10": "03.73",
          "capital": "El Real de Santa María",
          "corregimientos": [{
            "id": "05-2-01",
            "provincia": "DARIÉN",
            "distrito": "Pinogana",
            "name": "El Real de Santa María",
            "superficie": "120.05",
            "pop10": "1183.00",
            "den10": "09.85"
          }, {
            "id": "05-2-02",
            "provincia": "DARIÉN",
            "distrito": "Pinogana",
            "name": "Boca de Cupé",
            "superficie": "781.15",
            "pop10": "1167.00",
            "den10": "01.49"
          }, {
            "id": "05-2-03",
            "provincia": "DARIÉN",
            "distrito": "Pinogana",
            "name": "Paya",
            "superficie": "1111.13",
            "pop10": "639.00",
            "den10": "00.58"
          }, {
            "id": "05-2-04",
            "provincia": "DARIÉN",
            "distrito": "Pinogana",
            "name": "Pinogana",
            "superficie": "42.91",
            "pop10": "405.00",
            "den10": "09.44"
          }, {
            "id": "05-2-05",
            "provincia": "DARIÉN",
            "distrito": "Pinogana",
            "name": "Púcuro",
            "superficie": "78.35",
            "pop10": "356.00",
            "den10": "04.54"
          }, {
            "id": "05-2-06",
            "provincia": "DARIÉN",
            "distrito": "Pinogana",
            "name": "Yape",
            "superficie": "544.81",
            "pop10": "187.00",
            "den10": "00.34"
          }, {
            "id": "05-2-07",
            "provincia": "DARIÉN",
            "distrito": "Pinogana",
            "name": "Yaviza",
            "superficie": "397.10",
            "pop10": "4441.00",
            "den10": "11.18"
          }, {
            "id": "05-2-08",
            "provincia": "DARIÉN",
            "distrito": "Pinogana",
            "name": "Metetí",
            "superficie": "869.52",
            "pop10": "7976.00",
            "den10": "09.17"
          }, {
            "id": "05-2-09",
            "provincia": "DARIÉN",
            "distrito": "Pinogana",
            "name": "Comarca Kuna de Wargandí",
            "superficie": "956.37",
            "pop10": "1914.00",
            "den10": "02.00"
          }]
        }
      ]
    },
    {
      "id": "06",
      "name": "HERRERA",
      "superficie": "2361.99",
      "pop10": "109955.00",
      "den10": "46.55",
      "capital": "Chitré",
      "distritos": [{
          "id": "06-1",
          "provincia": "HERRERA",
          "name": "Chitré",
          "superficie": "87.75",
          "pop10": "50684.00",
          "den10": "577.58",
          "capital": "Chitré",
          "corregimientos": [{
            "id": "06-1-01",
            "provincia": "HERRERA",
            "distrito": "Chitré",
            "name": "Chitré",
            "superficie": "12.36",
            "pop10": "9092.00",
            "den10": "735.51"
          }, {
            "id": "06-1-02",
            "provincia": "HERRERA",
            "distrito": "Chitré",
            "name": "La Arena",
            "superficie": "28.98",
            "pop10": "7586.00",
            "den10": "261.80"
          }, {
            "id": "06-1-03",
            "provincia": "HERRERA",
            "distrito": "Chitré",
            "name": "Monagrillo",
            "superficie": "27.20",
            "pop10": "12385.00",
            "den10": "455.29"
          }, {
            "id": "06-1-04",
            "provincia": "HERRERA",
            "distrito": "Chitré",
            "name": "Llano Bonito",
            "superficie": "10.90",
            "pop10": "9798.00",
            "den10": "898.88"
          }, {
            "id": "06-1-05",
            "provincia": "HERRERA",
            "distrito": "Chitré",
            "name": "San Juan Bautista",
            "superficie": "08.31",
            "pop10": "11823.00",
            "den10": "1422.49"
          }]
        },
        {
          "id": "06-2",
          "provincia": "HERRERA",
          "name": "Las Minas",
          "superficie": "468.94",
          "pop10": "7551.00",
          "den10": "16.10",
          "capital": "Las Minas",
          "corregimientos": [{
            "id": "06-2-01",
            "provincia": "HERRERA",
            "distrito": "Las Minas",
            "name": "Las Minas",
            "superficie": "57.10",
            "pop10": "1975.00",
            "den10": "34.59"
          }, {
            "id": "06-2-02",
            "provincia": "HERRERA",
            "distrito": "Las Minas",
            "name": "Chepo",
            "superficie": "142.65",
            "pop10": "1415.00",
            "den10": "09.92"
          }, {
            "id": "06-2-03",
            "provincia": "HERRERA",
            "distrito": "Las Minas",
            "name": "Chumical",
            "superficie": "25.03",
            "pop10": "665.00",
            "den10": "26.57"
          }, {
            "id": "06-2-04",
            "provincia": "HERRERA",
            "distrito": "Las Minas",
            "name": "El Toro",
            "superficie": "82.75",
            "pop10": "931.00",
            "den10": "11.25"
          }, {
            "id": "06-2-05",
            "provincia": "HERRERA",
            "distrito": "Las Minas",
            "name": "Leones",
            "superficie": "72.26",
            "pop10": "852.00",
            "den10": "11.79"
          }, {
            "id": "06-2-06",
            "provincia": "HERRERA",
            "distrito": "Las Minas",
            "name": "Quebrada del Rosario",
            "superficie": "46.05",
            "pop10": "794.00",
            "den10": "17.24"
          }, {
            "id": "06-2-07",
            "provincia": "HERRERA",
            "distrito": "Las Minas",
            "name": "Quebrada El Ciprián",
            "superficie": "43.09",
            "pop10": "919.00",
            "den10": "21.33"
          }]
        }, {
          "id": "06-3",
          "provincia": "HERRERA",
          "name": "Los Pozos",
          "superficie": "385.47",
          "pop10": "7478.00",
          "den10": "19.40",
          "capital": "Los Pozos",
          "corregimientos": [{
            "id": "06-3-01",
            "provincia": "HERRERA",
            "distrito": "Los Pozos",
            "name": "Los Pozos",
            "superficie": "59.19",
            "pop10": "2199.00",
            "den10": "37.15"
          }, {
            "id": "06-3-02",
            "provincia": "HERRERA",
            "distrito": "Los Pozos",
            "name": "Capurí",
            "superficie": "18.32",
            "pop10": "446.00",
            "den10": "24.35"
          }, {
            "id": "06-3-03",
            "provincia": "HERRERA",
            "distrito": "Los Pozos",
            "name": "El Calabacito",
            "superficie": "34.02",
            "pop10": "617.00",
            "den10": "18.14"
          }, {
            "id": "06-3-04",
            "provincia": "HERRERA",
            "distrito": "Los Pozos",
            "name": "El Cedro",
            "superficie": "34.05",
            "pop10": "503.00",
            "den10": "14.77"
          }, {
            "id": "06-3-05",
            "provincia": "HERRERA",
            "distrito": "Los Pozos",
            "name": "La Arena",
            "superficie": "24.10",
            "pop10": "559.00",
            "den10": "23.19"
          }, {
            "id": "06-3-06",
            "provincia": "HERRERA",
            "distrito": "Los Pozos",
            "name": "La Pitaloza",
            "superficie": "85.15",
            "pop10": "674.00",
            "den10": "07.92"
          }, {
            "id": "06-3-07",
            "provincia": "HERRERA",
            "distrito": "Los Pozos",
            "name": "Los Cerritos",
            "superficie": "31.71",
            "pop10": "985.00",
            "den10": "31.07"
          }, {
            "id": "06-3-08",
            "provincia": "HERRERA",
            "distrito": "Los Pozos",
            "name": "Los Cerros de Paja",
            "superficie": "37.43",
            "pop10": "896.00",
            "den10": "23.94"
          }, {
            "id": "06-3-09",
            "provincia": "HERRERA",
            "distrito": "Los Pozos",
            "name": "Las Llanas",
            "superficie": "61.51",
            "pop10": "599.00",
            "den10": "09.74"
          }]
        },
        {
          "id": "06-4",
          "provincia": "HERRERA",
          "name": "Ocú",
          "superficie": "618.41",
          "pop10": "15539.00",
          "den10": "25.13",
          "capital": "Ocú",
          "corregimientos": [{
            "id": "06-4-01",
            "provincia": "HERRERA",
            "distrito": "Ocú",
            "name": "Ocú",
            "superficie": "121.59",
            "pop10": "7006.00",
            "den10": "57.62"
          }, {
            "id": "06-4-02",
            "provincia": "HERRERA",
            "distrito": "Ocú",
            "name": "Cerro Largo",
            "superficie": "106.46",
            "pop10": "1478.00",
            "den10": "13.88"
          }, {
            "id": "06-4-03",
            "provincia": "HERRERA",
            "distrito": "Ocú",
            "name": "Los Llanos",
            "superficie": "98.66",
            "pop10": "2110.00",
            "den10": "21.39"
          }, {
            "id": "06-4-04",
            "provincia": "HERRERA",
            "distrito": "Ocú",
            "name": "Llano Grande",
            "superficie": "71.07",
            "pop10": "1062.00",
            "den10": "14.94"
          }, {
            "id": "06-4-05",
            "provincia": "HERRERA",
            "distrito": "Ocú",
            "name": "Peñas Chatas",
            "superficie": "89.12",
            "pop10": "1778.00",
            "den10": "19.95"
          }, {
            "id": "06-4-06",
            "provincia": "HERRERA",
            "distrito": "Ocú",
            "name": "El Tijera",
            "superficie": "66.57",
            "pop10": "588.00",
            "den10": "08.83"
          }, {
            "id": "06-4-07",
            "provincia": "HERRERA",
            "distrito": "Ocú",
            "name": "Menchaca",
            "superficie": "64.95",
            "pop10": "1517.00",
            "den10": "23.36"
          }]
        }, {
          "id": "06-5",
          "provincia": "HERRERA",
          "name": "Parita",
          "superficie": "352.83",
          "pop10": "8885.00",
          "den10": "25.18",
          "capital": "Parita",
          "corregimientos": [{
            "id": "06-5-01",
            "provincia": "HERRERA",
            "distrito": "Parita",
            "name": "Parita",
            "superficie": "108.21",
            "pop10": "3723.00",
            "den10": "34.41"
          }, {
            "id": "06-5-02",
            "provincia": "HERRERA",
            "distrito": "Parita",
            "name": "Cabuya",
            "superficie": "59.46",
            "pop10": "1092.00",
            "den10": "18.37"
          }, {
            "id": "06-5-03",
            "provincia": "HERRERA",
            "distrito": "Parita",
            "name": "Los Castillos",
            "superficie": "22.54",
            "pop10": "745.00",
            "den10": "33.05"
          }, {
            "id": "06-5-04",
            "provincia": "HERRERA",
            "distrito": "Parita",
            "name": "Llano de la Cruz",
            "superficie": "10.65",
            "pop10": "318.00",
            "den10": "29.87"
          }, {
            "id": "06-5-05",
            "provincia": "HERRERA",
            "distrito": "Parita",
            "name": "París",
            "superficie": "75.81",
            "pop10": "1070.00",
            "den10": "14.11"
          }, {
            "id": "06-5-06",
            "provincia": "HERRERA",
            "distrito": "Parita",
            "name": "Portobelillo",
            "superficie": "26.97",
            "pop10": "892.00",
            "den10": "33.07"
          }, {
            "id": "06-5-07",
            "provincia": "HERRERA",
            "distrito": "Parita",
            "name": "Potuga",
            "superficie": "49.19",
            "pop10": "1045.00",
            "den10": "21.25"
          }]
        },
        {
          "id": "06-6",
          "provincia": "HERRERA",
          "name": "Pesé",
          "superficie": "288.96",
          "pop10": "12397.00",
          "den10": "42.90",
          "capital": "Pesé",
          "corregimientos": [{
            "id": "06-6-01",
            "provincia": "HERRERA",
            "distrito": "Pesé",
            "name": "Pesé",
            "superficie": "05.73",
            "pop10": "2565.00",
            "den10": "447.38"
          }, {
            "id": "06-6-02",
            "provincia": "HERRERA",
            "distrito": "Pesé",
            "name": "Las Cabras",
            "superficie": "59.03",
            "pop10": "1914.00",
            "den10": "32.43"
          }, {
            "id": "06-6-03",
            "provincia": "HERRERA",
            "distrito": "Pesé",
            "name": "El Pájaro",
            "superficie": "22.98",
            "pop10": "861.00",
            "den10": "37.47"
          }, {
            "id": "06-6-04",
            "provincia": "HERRERA",
            "distrito": "Pesé",
            "name": "El Barrero",
            "superficie": "36.79",
            "pop10": "1841.00",
            "den10": "50.04"
          }, {
            "id": "06-6-05",
            "provincia": "HERRERA",
            "distrito": "Pesé",
            "name": "El Pedregoso",
            "superficie": "31.35",
            "pop10": "1386.00",
            "den10": "44.21"
          }, {
            "id": "06-6-06",
            "provincia": "HERRERA",
            "distrito": "Pesé",
            "name": "El Ciruelo",
            "superficie": "45.67",
            "pop10": "823.00",
            "den10": "18.02"
          }, {
            "id": "06-6-07",
            "provincia": "HERRERA",
            "distrito": "Pesé",
            "name": "Sabanagrande",
            "superficie": "58.43",
            "pop10": "1591.00",
            "den10": "27.23"
          }, {
            "id": "06-6-08",
            "provincia": "HERRERA",
            "distrito": "Pesé",
            "name": "Rincón Hondo",
            "superficie": "28.98",
            "pop10": "1416.00",
            "den10": "48.86"
          }]
        }, {
          "id": "06-7",
          "provincia": "HERRERA",
          "name": "Santa María",
          "superficie": "159.63",
          "pop10": "7421.00",
          "den10": "46.49",
          "capital": "Santa María",
          "corregimientos": [{
            "id": "06-7-01",
            "provincia": "HERRERA",
            "distrito": "Santa María",
            "name": "Santa María",
            "superficie": "23.91",
            "pop10": "1682.00",
            "den10": "70.36"
          }, {
            "id": "06-7-02",
            "provincia": "HERRERA",
            "distrito": "Santa María",
            "name": "Chupampa",
            "superficie": "22.65",
            "pop10": "1231.00",
            "den10": "54.35"
          }, {
            "id": "06-7-03",
            "provincia": "HERRERA",
            "distrito": "Santa María",
            "name": "El Rincón",
            "superficie": "40.43",
            "pop10": "1712.00",
            "den10": "42.34"
          }, {
            "id": "06-7-04",
            "provincia": "HERRERA",
            "distrito": "Santa María",
            "name": "El Limón",
            "superficie": "23.82",
            "pop10": "1221.00",
            "den10": "51.26"
          }, {
            "id": "06-7-05",
            "provincia": "HERRERA",
            "distrito": "Santa María",
            "name": "Los Canelos",
            "superficie": "48.82",
            "pop10": "1575.00",
            "den10": "32.26"
          }]
        }
      ]
    },
    {
      "id": "07",
      "name": "LOS SANTOS",
      "superficie": "3809.43",
      "pop10": "89592.00",
      "den10": "23.52",
      "capital": "Las Tablas",
      "distritos": [{
          "id": "07-1",
          "provincia": "LOS SANTOS",
          "name": "Guararé",
          "superficie": "215.62",
          "pop10": "10381.00",
          "den10": "48.14",
          "capital": "Guararé",
          "corregimientos": [{
            "id": "07-1-01",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "Guararé",
            "superficie": "16.43",
            "pop10": "4524.00",
            "den10": "275.43"
          }, {
            "id": "07-1-02",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "El Espinal",
            "superficie": "35.41",
            "pop10": "1243.00",
            "den10": "35.10"
          }, {
            "id": "07-1-03",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "El Macano",
            "superficie": "29.02",
            "pop10": "281.00",
            "den10": "09.68"
          }, {
            "id": "07-1-04",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "Guararé Arriba",
            "superficie": "08.64",
            "pop10": "394.00",
            "den10": "45.61"
          }, {
            "id": "07-1-05",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "La Enea",
            "superficie": "13.17",
            "pop10": "1186.00",
            "den10": "90.09"
          }, {
            "id": "07-1-06",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "La Pasera",
            "superficie": "20.60",
            "pop10": "897.00",
            "den10": "43.54"
          }, {
            "id": "07-1-07",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "Las Trancas",
            "superficie": "29.21",
            "pop10": "511.00",
            "den10": "17.49"
          }, {
            "id": "07-1-08",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "Llano Abajo",
            "superficie": "21.27",
            "pop10": "550.00",
            "den10": "25.86"
          }, {
            "id": "07-1-09",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "El Hato",
            "superficie": "24.04",
            "pop10": "374.00",
            "den10": "15.56"
          }, {
            "id": "07-1-10",
            "provincia": "LOS SANTOS",
            "distrito": "Guararé",
            "name": "Perales",
            "superficie": "17.86",
            "pop10": "421.00",
            "den10": "23.58"
          }]
        },
        {
          "id": "07-2",
          "provincia": "LOS SANTOS",
          "name": "Las Tablas",
          "superficie": "711.20",
          "pop10": "27146.00",
          "den10": "38.17",
          "capital": "Las Tablas",
          "corregimientos": [{
              "id": "07-2-01",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Las Tablas",
              "superficie": "07.47",
              "pop10": "8945.00",
              "den10": "1197.57"
            }, {
              "id": "07-2-02",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Bajo Corral",
              "superficie": "63.11",
              "pop10": "483.00",
              "den10": "07.65"
            }, {
              "id": "07-2-03",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Bayano",
              "superficie": "112.80",
              "pop10": "660.00",
              "den10": "05.85"
            }, {
              "id": "07-2-04",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "El Carate",
              "superficie": "17.73",
              "pop10": "873.00",
              "den10": "49.23"
            }, {
              "id": "07-2-05",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "El Cocal",
              "superficie": "07.15",
              "pop10": "1889.00",
              "den10": "264.15"
            }, {
              "id": "07-2-06",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "El Manantial",
              "superficie": "27.37",
              "pop10": "909.00",
              "den10": "33.21"
            }, {
              "id": "07-2-07",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "El Muñoz",
              "superficie": "33.06",
              "pop10": "376.00",
              "den10": "11.37"
            }, {
              "id": "07-2-08",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "El Pedregoso",
              "superficie": "07.05",
              "pop10": "279.00",
              "den10": "39.59"
            }, {
              "id": "07-2-09",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "La Laja",
              "superficie": "04.39",
              "pop10": "547.00",
              "den10": "124.70"
            }, {
              "id": "07-2-10",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "La Miel",
              "superficie": "34.24",
              "pop10": "290.00",
              "den10": "08.47"
            }, {
              "id": "07-2-11",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "La Palma",
              "superficie": "10.52",
              "pop10": "1247.00",
              "den10": "118.57"
            }, {
              "id": "07-2-12",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "La Tiza",
              "superficie": "03.84",
              "pop10": "1702.00",
              "den10": "442.94"
            }, {
              "id": "07-2-13",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Las Palmitas",
              "superficie": "11.07",
              "pop10": "2057.00",
              "den10": "185.74"
            }, {
              "id": "07-2-14",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Las Tablas Abajo",
              "superficie": "15.67",
              "pop10": "1030.00",
              "den10": "65.74"
            }, {
              "id": "07-2-15",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Nuario",
              "superficie": "101.10",
              "pop10": "182.00",
              "den10": "01.80"
            }, {
              "id": "07-2-16",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Palmira",
              "superficie": "09.66",
              "pop10": "93.00",
              "den10": "09.63"
            }, {
              "id": "07-2-17",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Peña Blanca",
              "superficie": "07.98",
              "pop10": "875.00",
              "den10": "109.71"
            }, {
              "id": "07-2-18",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Río Hondo",
              "superficie": "32.17",
              "pop10": "206.00",
              "den10": "06.40"
            }, {
              "id": "07-2-19",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "San José",
              "superficie": "61.63",
              "pop10": "593.00",
              "den10": "09.62"
            }, {
              "id": "07-2-20",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "San Miguel",
              "superficie": "10.01",
              "pop10": "116.00",
              "den10": "11.58"
            }, {
              "id": "07-2-21",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Santo Domingo",
              "superficie": "48.53",
              "pop10": "2050.00",
              "den10": "42.24"
            }, {
              "id": "07-2-22",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Sesteadero",
              "superficie": "04.29",
              "pop10": "1067.00",
              "den10": "248.47"
            }, {
              "id": "07-2-23",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Valle Rico",
              "superficie": "41.38",
              "pop10": "400.00",
              "den10": "09.67"
            }, {
              "id": "07-2-24",
              "provincia": "LOS SANTOS",
              "distrito": "Las Tablas",
              "name": "Vallerriquito",
              "superficie": "38.99",
              "pop10": "277.00",
              "den10": "07.11"
            }

          ]
        },
        {
          "id": "07-3",
          "provincia": "LOS SANTOS",
          "name": "Los Santos",
          "superficie": "432.99",
          "pop10": "25723.00",
          "den10": "59.41",
          "capital": "La Villa de los Santos",
          "corregimientos": [{
            "id": "07-3-01",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "La Villa de los Santos",
            "superficie": "72.91",
            "pop10": "7991.00",
            "den10": "109.60"
          }, {
            "id": "07-3-02",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "El Guásimo",
            "superficie": "30.76",
            "pop10": "610.00",
            "den10": "19.83"
          }, {
            "id": "07-3-03",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "La Colorada",
            "superficie": "20.69",
            "pop10": "1030.00",
            "den10": "49.77"
          }, {
            "id": "07-3-04",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "La Espigadilla",
            "superficie": "28.06",
            "pop10": "1675.00",
            "den10": "59.70"
          }, {
            "id": "07-3-05",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Las Cruces",
            "superficie": "44.53",
            "pop10": "1201.00",
            "den10": "26.97"
          }, {
            "id": "07-3-06",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Las Guabas",
            "superficie": "21.91",
            "pop10": "677.00",
            "den10": "30.91"
          }, {
            "id": "07-3-07",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Los Angeles",
            "superficie": "21.89",
            "pop10": "868.00",
            "den10": "39.64"
          }, {
            "id": "07-3-08",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Los Olivos",
            "superficie": "27.01",
            "pop10": "1259.00",
            "den10": "46.61"
          }, {
            "id": "07-3-09",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Llano Largo",
            "superficie": "10.37",
            "pop10": "2265.00",
            "den10": "218.49"
          }, {
            "id": "07-3-10",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Sabanagrande",
            "superficie": "34.83",
            "pop10": "1909.00",
            "den10": "54.81"
          }, {
            "id": "07-3-11",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Santa Ana",
            "superficie": "69.67",
            "pop10": "3329.00",
            "den10": "47.79"
          }, {
            "id": "07-3-12",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Tres Quebradas",
            "superficie": "12.85",
            "pop10": "717.00",
            "den10": "55.80"
          }, {
            "id": "07-3-13",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Agua Buena",
            "superficie": "10.06",
            "pop10": "1117.00",
            "den10": "111.06"
          }, {
            "id": "07-3-14",
            "provincia": "LOS SANTOS",
            "distrito": "Los Santos",
            "name": "Villa Lourdes",
            "superficie": "27.46",
            "pop10": "1075.00",
            "den10": "39.15"
          }]
        },
        {
          "id": "07-4",
          "provincia": "LOS SANTOS",
          "name": "Macaracas",
          "superficie": "504.61",
          "pop10": "9021.00",
          "den10": "17.88",
          "capital": "Macaracas",
          "corregimientos": [{
            "id": "07-4-01",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "Macaracas",
            "superficie": "35.76",
            "pop10": "2890.00",
            "den10": "80.81"
          }, {
            "id": "07-4-02",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "Bahía Honda",
            "superficie": "28.09",
            "pop10": "646.00",
            "den10": "22.99"
          }, {
            "id": "07-4-03",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "Bajos de Güera",
            "superficie": "99.46",
            "pop10": "619.00",
            "den10": "06.22"
          }, {
            "id": "07-4-04",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "Corozal",
            "superficie": "24.65",
            "pop10": "625.00",
            "den10": "25.35"
          }, {
            "id": "07-4-05",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "Chupá",
            "superficie": "17.88",
            "pop10": "520.00",
            "den10": "29.08"
          }, {
            "id": "07-4-06",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "El Cedro",
            "superficie": "28.07",
            "pop10": "450.00",
            "den10": "16.03"
          }, {
            "id": "07-4-07",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "Espino Amarillo",
            "superficie": "26.99",
            "pop10": "193.00",
            "den10": "07.15"
          }, {
            "id": "07-4-08",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "La Mesa",
            "superficie": "46.22",
            "pop10": "641.00",
            "den10": "13.87"
          }, {
            "id": "07-4-09",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "Las Palmas",
            "superficie": "42.44",
            "pop10": "436.00",
            "den10": "10.27"
          }, {
            "id": "07-4-10",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "Llano de Piedra",
            "superficie": "99.88",
            "pop10": "1737.00",
            "den10": "17.39"
          }, {
            "id": "07-4-11",
            "provincia": "LOS SANTOS",
            "distrito": "Macaracas",
            "name": "Mogollón",
            "superficie": "55.15",
            "pop10": "264.00",
            "den10": "04.79"
          }]
        },
        {
          "id": "07-5",
          "provincia": "LOS SANTOS",
          "name": "Pedasí",
          "superficie": "378.13",
          "pop10": "4275.00",
          "den10": "11.31",
          "capital": "Pedasí",
          "corregimientos": [{
            "id": "07-5-1",
            "provincia": "LOS SANTOS",
            "distrito": "Pedasí",
            "name": "Pedasí",
            "superficie": "114.31",
            "pop10": "2410.00",
            "den10": "21.08"
          }, {
            "id": "07-5-2",
            "provincia": "LOS SANTOS",
            "distrito": "Pedasí",
            "name": "Los Asientos",
            "superficie": "90.68",
            "pop10": "755.00",
            "den10": "08.33"
          }, {
            "id": "07-5-3",
            "provincia": "LOS SANTOS",
            "distrito": "Pedasí",
            "name": "Mariabé",
            "superficie": "45.94",
            "pop10": "319.00",
            "den10": "06.94"
          }, {
            "id": "07-5-4",
            "provincia": "LOS SANTOS",
            "distrito": "Pedasí",
            "name": "Purio",
            "superficie": "23.96",
            "pop10": "494.00",
            "den10": "20.62"
          }, {
            "id": "07-5-5",
            "provincia": "LOS SANTOS",
            "distrito": "Pedasí",
            "name": "Oria Arriba",
            "superficie": "103.24",
            "pop10": "297.00",
            "den10": "02.88"
          }]
        },
        {
          "id": "07-6",
          "provincia": "LOS SANTOS",
          "name": "Pocrí",
          "superficie": "280.34",
          "pop10": "3259.00",
          "den10": "11.63",
          "capital": "Pocrí",
          "corregimientos": [{
            "id": "07-6-01",
            "provincia": "LOS SANTOS",
            "distrito": "Pocrí",
            "name": "Pocrí",
            "superficie": "57.59",
            "pop10": "1002.00",
            "den10": "17.40"
          }, {
            "id": "07-6-02",
            "provincia": "LOS SANTOS",
            "distrito": "Pocrí",
            "name": "El Cañafístulo",
            "superficie": "58.44",
            "pop10": "363.00",
            "den10": "06.21"
          }, {
            "id": "07-6-03",
            "provincia": "LOS SANTOS",
            "distrito": "Pocrí",
            "name": "Lajamina",
            "superficie": "51.73",
            "pop10": "514.00",
            "den10": "09.94"
          }, {
            "id": "07-6-04",
            "provincia": "LOS SANTOS",
            "distrito": "Pocrí",
            "name": "Paraíso",
            "superficie": "64.40",
            "pop10": "597.00",
            "den10": "09.27"
          }, {
            "id": "07-6-05",
            "provincia": "LOS SANTOS",
            "distrito": "Pocrí",
            "name": "Paritilla",
            "superficie": "48.17",
            "pop10": "783.00",
            "den10": "16.26"
          }]
        },
        {
          "id": "07-7",
          "provincia": "LOS SANTOS",
          "name": "Tonosí",
          "superficie": "1286.54",
          "pop10": "9787.00",
          "den10": "07.61",
          "capital": "Tonosí",
          "corregimientos": [{
            "id": "07-7-01",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "Tonosí",
            "superficie": "83.63",
            "pop10": "2257.00",
            "den10": "26.99"
          }, {
            "id": "07-7-02",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "Altos de Güera",
            "superficie": "141.75",
            "pop10": "632.00",
            "den10": "04.46"
          }, {
            "id": "07-7-03",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "Cañas",
            "superficie": "94.12",
            "pop10": "650.00",
            "den10": "06.91"
          }, {
            "id": "07-7-04",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "El Bebedero",
            "superficie": "116.65",
            "pop10": "1332.00",
            "den10": "11.42"
          }, {
            "id": "07-7-05",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "El Cacao",
            "superficie": "92.33",
            "pop10": "1049.00",
            "den10": "11.36"
          }, {
            "id": "07-7-06",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "El Cortezo",
            "superficie": "149.99",
            "pop10": "662.00",
            "den10": "04.41"
          }, {
            "id": "07-7-07",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "Flores",
            "superficie": "105.00",
            "pop10": "664.00",
            "den10": "06.32"
          }, {
            "id": "07-7-08",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "Guánico",
            "superficie": "209.19",
            "pop10": "996.00",
            "den10": "04.76"
          }, {
            "id": "07-7-09",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "Tronosa",
            "superficie": "86.38",
            "pop10": "637.00",
            "den10": "07.37"
          }, {
            "id": "07-7-10",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "Cambutal",
            "superficie": "183.03",
            "pop10": "511.00",
            "den10": "02.79"
          }, {
            "id": "07-7-11",
            "provincia": "LOS SANTOS",
            "distrito": "Tonosí",
            "name": "Isla de Cañas",
            "superficie": "24.49",
            "pop10": "397.00",
            "den10": "16.21"
          }]
        }
      ]
    },
    {
      "id": "08",
      "name": "PANAMÁ",
      "superficie": "8409.33",
      "pop10": "1249032.00",
      "den10": "148.53",
      "capital": "Panama",
      "distritos": [{
          "provincia": "PANAMÁ",
          "id": "08-1",
          "name": "Balboa",
          "superficie": "332.94",
          "pop10": "2721.00",
          "den10": "08.17",
          "capital": "San Miguel",
          "corregimientos": [{
              "provincia": "PANAMÁ",
              "distrito": "Balboa",
              "id": "08-1-1",
              "name": "San Miguel",
              "superficie": "129.87",
              "pop10": "1044.00",
              "den10": "8.4"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Balboa",
              "id": "08-1-2",
              "name": "La Ensenada",
              "superficie": "66.21",
              "pop10": "94.00",
              "den10": "01.42"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Balboa",
              "id": "08-1-3",
              "name": "La Esmeralda",
              "superficie": "39.51",
              "pop10": "524.00",
              "den10": "13.26"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Balboa",
              "id": "08-1-4",
              "name": "La Guinea",
              "superficie": "29.55",
              "pop10": "83.00",
              "den10": "02.81"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Balboa",
              "id": "08-1-5",
              "name": "Pedro González",
              "superficie": "59.74",
              "pop10": "263.00",
              "den10": "04.40"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Balboa",
              "id": "08-1-6",
              "name": "Saboga",
              "superficie": "8.6",
              "pop10": "713.00",
              "den10": "88.51"
            }
          ]
        }, {
          "provincia": "PANAMÁ",
          "id": "08-2",
          "name": "Chepo",
          "superficie": "4937.02",
          "pop10": "46139.00",
          "den10": "09.35",
          "corregimientos": [{
              "provincia": "PANAMÁ",
              "distrito": "Chepo",
              "id": "08-2-1",
              "name": "Chepo",
              "superficie": "438.61",
              "pop10": "20420.00",
              "den10": "46.56"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chepo",
              "id": "08-2-2",
              "name": "Cañita",
              "superficie": "358.99",
              "pop10": "2514.00",
              "den10": "07.00"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chepo",
              "id": "08-2-3",
              "name": "Chepillo",
              "superficie": "00.97",
              "pop10": "255.00",
              "den10": "263.35"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chepo",
              "id": "08-2-4",
              "name": "El Llano",
              "superficie": "472.94",
              "pop10": "2819.00",
              "den10": "05.96"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chepo",
              "id": "08-2-5",
              "name": "Las Margaritas",
              "superficie": "263.55",
              "pop10": "4991.00",
              "den10": "18.94"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chepo",
              "id": "08-2-6",
              "name": "Santa Cruz de Chinina",
              "superficie": "351.52",
              "pop10": "1572.00",
              "den10": "04.47"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chepo",
              "id": "08-2-7",
              "name": "Comarca Kuna de Madungandí",
              "superficie": "2075.92",
              "pop10": "4271.00",
              "den10": "02.06"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chepo",
              "id": "08-2-8",
              "name": "Tortí",
              "superficie": "974.54",
              "pop10": "9297.00",
              "den10": "09.54"
            }
          ]
        }, {
          "provincia": "PANAMÁ",
          "id": "08-3",
          "name": "Chimán",
          "superficie": "1046.05",
          "pop10": "3343.00",
          "den10": "03.20",
          "corregimientos": [{
              "provincia": "PANAMÁ",
              "distrito": "Chimán",
              "id": "08-3-1",
              "name": "Chimán",
              "superficie": "281.00",
              "pop10": "1205.00",
              "den10": "04.29"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chimán",
              "id": "08-3-2",
              "name": "Brujas",
              "superficie": "159.56",
              "pop10": "688.00",
              "den10": "04.31",
              "capital": "Chepo"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chimán",
              "id": "08-3-3",
              "name": "Gonzalo Vásquez",
              "superficie": "42.24",
              "pop10": "91.00",
              "den10": "02.15"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chimán",
              "id": "08-3-4",
              "name": "Pásiga",
              "superficie": "201.37",
              "pop10": "439.00",
              "den10": "02.18"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Chimán",
              "id": "08-3-5",
              "name": "Unión Santeña",
              "superficie": "361.88",
              "pop10": "920.00",
              "den10": "02.54"
            }
          ]
        }, {
          "provincia": "PANAMÁ",
          "id": "08-4",
          "name": "Panamá",
          "superficie": "2031.15",
          "pop10": "880691.00",
          "den10": "433.59",
          "corregimientos": [{
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-1",
              "name": "San Felipe",
              "superficie": "00.30",
              "pop10": "3262.00",
              "den10": "11005.40"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-2",
              "name": "El Chorrillo",
              "superficie": "00.62",
              "pop10": "18302.00",
              "den10": "29363.07"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-3",
              "name": "Santa Ana",
              "superficie": "00.84",
              "pop10": "18210.00",
              "den10": "21727.72"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-4",
              "name": "La Exposición o Calidonia",
              "superficie": "01.59",
              "pop10": "19108.00",
              "den10": "12001.00"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-5",
              "name": "Curundú",
              "superficie": "01.13",
              "pop10": "16361.00",
              "den10": "14465.96"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-6",
              "name": "Betania",
              "superficie": "08.30",
              "pop10": "46116.00",
              "den10": "5559.43"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-7",
              "name": "Bella Vista",
              "superficie": "04.84",
              "pop10": "30136.00",
              "den10": "6228.89"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-8",
              "name": "Pueblo Nuevo",
              "superficie": "02.87",
              "pop10": "18984.00",
              "den10": "6625.95"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-9",
              "name": "San Francisco",
              "superficie": "06.41",
              "pop10": "43939.00",
              "den10": "6855.72"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-10",
              "name": "Parque Lefevre",
              "superficie": "06.84",
              "pop10": "36997.00",
              "den10": "5407.97"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-11",
              "name": "Río Abajo",
              "superficie": "03.86",
              "pop10": "26607.00",
              "den10": "6892.47"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-12",
              "name": "Juan Díaz",
              "superficie": "34.00",
              "pop10": "100636.00",
              "den10": "2959.88"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-13",
              "name": "Pedregal",
              "superficie": "28.25",
              "pop10": "51641.00",
              "den10": "1827.74"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-14",
              "name": "Ancón",
              "superficie": "204.59",
              "pop10": "29761.00",
              "den10": "145.47"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-15",
              "name": "Chilibre",
              "superficie": "923.95",
              "pop10": "53955.00",
              "den10": "58.40"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-16",
              "name": "Las Cumbres",
              "superficie": "27.85",
              "pop10": "32867.00",
              "den10": "1180.31"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-17",
              "name": "Pacora",
              "superficie": "399.43",
              "pop10": "52494.00",
              "den10": "131.42"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-18",
              "name": "San Martín",
              "superficie": "131.49",
              "pop10": "4410.00",
              "den10": "33.54"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-19",
              "name": "Tocumen",
              "superficie": "63.85",
              "pop10": "74952.00",
              "den10": "1173.86"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-20",
              "name": "Las Mañanitas",
              "superficie": "24.68",
              "pop10": "39473.00",
              "den10": "1599.63"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-21",
              "name": "24 de diciembre",
              "superficie": "78.90",
              "pop10": "65404.00",
              "den10": "828.97"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-22",
              "name": "Alcalde Díaz",
              "superficie": "46.02",
              "pop10": "41292.00",
              "den10": "897.26"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Panamá",
              "id": "08-4-23",
              "name": "Ernesto Córdoba Campos",
              "superficie": "30.55",
              "pop10": "55784.00",
              "den10": "1826.01"
            }
          ]
        }, {
          "provincia": "PANAMÁ",
          "id": "08-5",
          "name": "San Miguelito",
          "superficie": "50.10",
          "pop10": "315019.00",
          "den10": "6287.74",
          "corregimientos": [{
              "provincia": "PANAMÁ",
              "distrito": "San Miguelito",
              "id": "08-5-1",
              "name": "Amelia Denis de Icaza",
              "superficie": "03.80",
              "pop10": "38397.00",
              "den10": "10096.77"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "San Miguelito",
              "id": "08-5-2",
              "name": "Belisario Porras",
              "superficie": "04.02",
              "pop10": "49367.00",
              "den10": "12294.11"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "San Miguelito",
              "id": "08-5-3",
              "name": "José Domingo Espinar",
              "superficie": "07.10",
              "pop10": "44471.00",
              "den10": "6265.20"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "San Miguelito",
              "id": "08-5-4",
              "name": "Mateo Iturralde",
              "superficie": "00.99",
              "pop10": "11496.00",
              "den10": "11565.39"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "San Miguelito",
              "id": "08-5-5",
              "name": "Victoriano Lorenzo",
              "superficie": "02.00",
              "pop10": "15873.00",
              "den10": "7924.22"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "San Miguelito",
              "id": "08-5-6",
              "name": "Arnulfo Arias",
              "superficie": "07.27",
              "pop10": "31650.00",
              "den10": "4355.96"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "San Miguelito",
              "id": "08-5-7",
              "name": "Belisario Frías",
              "superficie": "04.30",
              "pop10": "44571.00",
              "den10": "10359.09"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "San Miguelito",
              "id": "08-5-8",
              "name": "Omar Torrijos",
              "superficie": "11.05",
              "pop10": "36452.00",
              "den10": "3297.81"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "San Miguelito",
              "id": "08-5-9",
              "name": "Rufina Alfaro",
              "superficie": "09.57",
              "pop10": "42742.00",
              "den10": "4468.58"
            }
          ]
        },
        {
          "provincia": "PANAMÁ",
          "id": "08-6",
          "name": "Taboga",
          "superficie": "12.07",
          "pop10": "1119.00",
          "den10": "92.73",
          "capital": "Taboga",
          "corregimientos": [{
              "provincia": "PANAMÁ",
              "distrito": "Taboga",
              "id": "08-6-1",
              "name": "Taboga",
              "superficie": "08.48",
              "pop10": "731.00",
              "den10": "86.20"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Taboga",
              "id": "08-6-2",
              "name": "Otoque Oriente",
              "superficie": "01.57",
              "pop10": "126.00",
              "den10": "80.19"
            },
            {
              "provincia": "PANAMÁ",
              "distrito": "Taboga",
              "id": "08-6-3",
              "name": "Otoque Occidente",
              "superficie": "02.02",
              "pop10": "262.00",
              "den10": "129.96"
            }
          ]
        }
      ]
    },
    {
      "id": "13",
      "name": "PANAMÁ OESTE",
      "superficie": "2880.11",
      "pop10": "464038.00",
      "den10": "161.12",
      "capital": "Arraiján",
      "distritos": [{
        "provincia": "PANAMÁ OESTE",
        "id": "13-1",
        "name": "Arraiján",
        "superficie": "418.38",
        "pop10": "220779.00",
        "den10": "527.70",
        "corregimientos": [{
            "provincia": "PANAMÁ OESTE",
            "distrito": "Arraiján",
            "id": "13-1-1",
            "name": "Arraiján",
            "superficie": "65.48",
            "pop10": "41041.00",
            "den10": "626.76"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Arraiján",
            "id": "13-1-2",
            "name": "Juan Demóstenes Arosemena",
            "superficie": "40.71",
            "pop10": "37044.00",
            "den10": "909.84"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Arraiján",
            "id": "13-1-3",
            "name": "Nuevo Emperador",
            "superficie": "107.56",
            "pop10": "3903.00",
            "den10": "36.29"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Arraiján",
            "id": "13-1-4",
            "name": "Santa Clara",
            "superficie": "52.78",
            "pop10": "2139.00",
            "den10": "40.53"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Arraiján",
            "id": "13-1-5",
            "name": "Veracruz",
            "superficie": "49.71",
            "pop10": "18589.00",
            "den10": "373.96"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Arraiján",
            "id": "13-1-6",
            "name": "Vista Alegre",
            "superficie": "30.44",
            "pop10": "55369.00",
            "den10": "1818.77"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Arraiján",
            "id": "13-1-7",
            "name": "Burunga",
            "superficie": "52.44",
            "pop10": "39102.00",
            "den10": "745.72"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Arraiján",
            "id": "13-1-8",
            "name": "Cerro Silvestre",
            "superficie": "19.26",
            "pop10": "23592.00",
            "den10": "1225.13"
          }
        ]
      }, {
        "provincia": "PANAMÁ OESTE",
        "id": "13-2",
        "name": "Capira",
        "superficie": "977.68",
        "pop10": "38398.00",
        "den10": "39.27",
        "corregimientos": [{
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-1",
            "name": "Capira",
            "superficie": "45.64",
            "pop10": "5181.00",
            "den10": "113.52"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-2",
            "name": "Caimito",
            "superficie": "43.84",
            "pop10": "1635.00",
            "den10": "37.30"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-3",
            "name": "Campana",
            "superficie": "75.09",
            "pop10": "2067.00",
            "den10": "27.53"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-4",
            "name": "Cermeño",
            "superficie": "94.03",
            "pop10": "1946.00",
            "den10": "20.70"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-5",
            "name": "Cirí de los Sotos",
            "superficie": "94.49",
            "pop10": "2288.00",
            "den10": "24.21"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-6",
            "name": "Cirí Grande",
            "superficie": "147.47",
            "pop10": "3635.00",
            "den10": "24.65"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-7",
            "name": "El Cacao",
            "superficie": "177.06",
            "pop10": "4951.00",
            "den10": "27.96"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-8",
            "name": "La Trinidad",
            "superficie": "107.04",
            "pop10": "2572.00",
            "den10": "43183"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-9",
            "name": "Las Ollas Arriba",
            "superficie": "43245",
            "pop10": "1201.00",
            "den10": "47.95"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-10",
            "name": "Lídice",
            "superficie": "42.64",
            "pop10": "5307.00",
            "den10": "124.47"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-11",
            "name": "Villa Carmen",
            "superficie": "06.42",
            "pop10": "1352.00",
            "den10": "210.46"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-12",
            "name": "Villa Rosario",
            "superficie": "25.96",
            "pop10": "4496.00",
            "den10": "173.22"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Capira",
            "id": "13-2-13",
            "name": "Santa Rosa",
            "superficie": "92.96",
            "pop10": "1767.00",
            "den10": "43119"
          }
        ]
      }, {
        "provincia": "PANAMÁ OESTE",
        "id": "13-3",
        "name": "Chame",
        "superficie": "376.71",
        "pop10": "24471.00",
        "den10": "64.96",
        "corregimientos": [{
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-1",
            "name": "Chame",
            "superficie": "31.16",
            "pop10": "2432.00",
            "den10": "78.06"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-2",
            "name": "Bejuco",
            "superficie": "59.64",
            "pop10": "5548.00",
            "den10": "93.02"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-3",
            "name": "Buenos Aires",
            "superficie": "39.92",
            "pop10": "2030.00",
            "den10": "50.85"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-4",
            "name": "Cabuya",
            "superficie": "44.80",
            "pop10": "1666.00",
            "den10": "37.19"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-5",
            "name": "Chicá",
            "superficie": "19.23",
            "pop10": "713.00",
            "den10": "37.08"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-6",
            "name": "El Líbano",
            "superficie": "30.88",
            "pop10": "200.00",
            "den10": "06.48"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-7",
            "name": "Las Lajas",
            "superficie": "13.28",
            "pop10": "3431.00",
            "den10": "258.41"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-8",
            "name": "Nueva Gorgona",
            "superficie": "19.89",
            "pop10": "4075.00",
            "den10": "204.86"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-9",
            "name": "Punta Chame",
            "superficie": "16.96",
            "pop10": "443.00",
            "den10": "43460"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-10",
            "name": "Sajalices",
            "superficie": "24.78",
            "pop10": "2280.00",
            "den10": "92.02"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "Chame",
            "id": "13-3-11",
            "name": "Sorá",
            "superficie": "76.17",
            "pop10": "1653.00",
            "den10": "21.70"
          }
        ]
      }, {
        "provincia": "PANAMÁ OESTE",
        "id": "13-4",
        "name": "La Chorrera",
        "superficie": "769.78",
        "pop10": "161470.00",
        "den10": "209.76",
        "corregimientos": [{
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-1",
            "name": "Barrio Balboa",
            "superficie": "07.92",
            "pop10": "29589.00",
            "den10": "3734.24"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-2",
            "name": "Barrio Colón",
            "superficie": "14.74",
            "pop10": "33214.00",
            "den10": "129388"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-3",
            "name": "Amador",
            "superficie": "131.11",
            "pop10": "2996.00",
            "den10": "22.85"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-4",
            "name": "Arosemena",
            "superficie": "31.62",
            "pop10": "426.00",
            "den10": "13.47"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-5",
            "name": "El Arado",
            "superficie": "70.41",
            "pop10": "2715.00",
            "den10": "38.56"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-6",
            "name": "El Coco",
            "superficie": "14.91",
            "pop10": "19603.00",
            "den10": "213422"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-7",
            "name": "Feuillet",
            "superficie": "19.35",
            "pop10": "2669.00",
            "den10": "137.90"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-8",
            "name": "Guadalupe",
            "superficie": "24.92",
            "pop10": "34242.00",
            "den10": "192056"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-9",
            "name": "Herrera",
            "superficie": "85.95",
            "pop10": "2552.00",
            "den10": "29.69"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-10",
            "name": "Hurtado",
            "superficie": "47.47",
            "pop10": "1206.00",
            "den10": "25.40"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-11",
            "name": "Iturralde",
            "superficie": "64.33",
            "pop10": "1354.00",
            "den10": "43241"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-12",
            "name": "La Represa",
            "superficie": "38.14",
            "pop10": "681.00",
            "den10": "17.85"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-13",
            "name": "Los Díaz",
            "superficie": "29.38",
            "pop10": "1200.00",
            "den10": "40.84"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-14",
            "name": "Mendoza",
            "superficie": "38.10",
            "pop10": "1233.00",
            "den10": "32.36"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-15",
            "name": "Obaldía",
            "superficie": "34.57",
            "pop10": "549.00",
            "den10": "15.88"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-16",
            "name": "Playa Leona",
            "superficie": "52.89",
            "pop10": "8442.00",
            "den10": "159.62"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-17",
            "name": "Puerto Caimito",
            "superficie": "31.65",
            "pop10": "16951.00",
            "den10": "535.60"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "La Chorrera",
            "id": "13-4-18",
            "name": "Santa Rita",
            "superficie": "32.31",
            "pop10": "1848.00",
            "den10": "57.20"
          }
        ]
      }, {
        "provincia": "PANAMÁ OESTE",
        "id": "13-5",
        "name": "San Carlos",
        "superficie": "337.56",
        "pop10": "18920.00",
        "den10": "56.05",
        "capital": "San Carlos",
        "corregimientos": [{
            "provincia": "PANAMÁ OESTE",
            "distrito": "San Carlos",
            "id": "13-5-1",
            "name": "San Carlos",
            "superficie": "29.19",
            "pop10": "3578.00",
            "den10": "122.56"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "San Carlos",
            "id": "13-5-2",
            "name": "El Espino",
            "superficie": "34.91",
            "pop10": "1847.00",
            "den10": "52.90"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "San Carlos",
            "id": "13-5-3",
            "name": "El Higo",
            "superficie": "44.02",
            "pop10": "2710.00",
            "den10": "61.57"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "San Carlos",
            "id": "13-5-4",
            "name": "Guayabito",
            "superficie": "34.13",
            "pop10": "502.00",
            "den10": "14.71"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "San Carlos",
            "id": "13-5-5",
            "name": "La Ermita",
            "superficie": "33.15",
            "pop10": "1571.00",
            "den10": "47.38"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "San Carlos",
            "id": "13-5-6",
            "name": "La Laguna",
            "superficie": "54.10",
            "pop10": "1132.00",
            "den10": "20.92"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "San Carlos",
            "id": "13-5-7",
            "name": "Las Uvas",
            "superficie": "43391",
            "pop10": "1587.00",
            "den10": "87.67"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "San Carlos",
            "id": "13-5-8",
            "name": "Los Llanitos",
            "superficie": "61.65",
            "pop10": "3264.00",
            "den10": "52.94"
          },
          {
            "provincia": "PANAMÁ OESTE",
            "distrito": "San Carlos",
            "id": "13-5-9",
            "name": "San José",
            "superficie": "28.30",
            "pop10": "2729.00",
            "den10": "96.42"
          }
        ]
      }]
    },
    {
      "id": "09",
      "name": "VERAGUAS",
      "superficie": "10587.50",
      "pop10": "226991.00",
      "den10": "21.44",
      "capital": "Santiago",
      "distritos": [{
        "provincia": "VERAGUAS",
        "id": "09-1",
        "name": "Atalaya",
        "superficie": "156.23",
        "pop10": "10205.00",
        "den10": "65.32",
        "capital": "Atalaya",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Atalaya",
            "id": "09-1-1",
            "name": "Atalaya",
            "superficie": "47.60",
            "pop10": "4924.00",
            "den10": "103.45"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Atalaya",
            "id": "09-1-2",
            "name": "El Barrito",
            "superficie": "23.88",
            "pop10": "899.00",
            "den10": "37.64"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Atalaya",
            "id": "09-1-3",
            "name": "La Montañuela",
            "superficie": "27.56",
            "pop10": "786.00",
            "den10": "28.52"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Atalaya",
            "id": "09-1-4",
            "name": "La Carrillo",
            "superficie": "39.27",
            "pop10": "630.00",
            "den10": "16.04"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Atalaya",
            "id": "09-1-5",
            "name": "San Antonio",
            "superficie": "17.92",
            "pop10": "2966.00",
            "den10": "165.53"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-2",
        "name": "Calobre",
        "superficie": "806.15",
        "pop10": "11493.00",
        "den10": "14.26",
        "capital": "Calobre",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-1",
            "name": "Calobre",
            "superficie": "84.75",
            "pop10": "2514.00",
            "den10": "29.66"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-2",
            "name": "Barnizal",
            "superficie": "26.23",
            "pop10": "435.00",
            "den10": "16.58"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-3",
            "name": "Chitra",
            "superficie": "109.73",
            "pop10": "1301.00",
            "den10": "11.86"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-4",
            "name": "El Cocla",
            "superficie": "65.23",
            "pop10": "608.00",
            "den10": "09.32"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-5",
            "name": "El Potrero",
            "superficie": "42.67",
            "pop10": "635.00",
            "den10": "14.88"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-6",
            "name": "La Laguna",
            "superficie": "85.87",
            "pop10": "774.00",
            "den10": "09.01"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-7",
            "name": "La Raya de Calobre",
            "superficie": "33.63",
            "pop10": "496.00",
            "den10": "14.75"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-8",
            "name": "La Tetilla",
            "superficie": "53.97",
            "pop10": "400.00",
            "den10": "07.41"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-9",
            "name": "La Yeguada",
            "superficie": "131.62",
            "pop10": "1353.00",
            "den10": "10.28"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-10",
            "name": "Las Guías",
            "superficie": "93.00",
            "pop10": "1712.00",
            "den10": "18.41"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-11",
            "name": "Monjarás",
            "superficie": "43.12",
            "pop10": "585.00",
            "den10": "13.57"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Calobre",
            "id": "09-2-12",
            "name": "San José",
            "superficie": "36.33",
            "pop10": "680.00",
            "den10": "18.72"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-3",
        "name": "Cañazas",
        "superficie": "788.70",
        "pop10": "16830.00",
        "den10": "21.34",
        "capital": "Cañazas",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Cañazas",
            "id": "09-3-1",
            "name": "Cañazas",
            "superficie": "89.27",
            "pop10": "4836.00",
            "den10": "54.17"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Cañazas",
            "id": "09-3-2",
            "name": "Cerro de Plata",
            "superficie": "100.91",
            "pop10": "1594.00",
            "den10": "15.80"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Cañazas",
            "id": "09-3-3",
            "name": "El Picador",
            "superficie": "161.90",
            "pop10": "3065.00",
            "den10": "18.93"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Cañazas",
            "id": "09-3-4",
            "name": "Los Valles",
            "superficie": "81.68",
            "pop10": "1200.00",
            "den10": "14.69"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Cañazas",
            "id": "09-3-5",
            "name": "San José",
            "superficie": "147.23",
            "pop10": "1936.00",
            "den10": "13.15"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Cañazas",
            "id": "09-3-6",
            "name": "San Marcelo",
            "superficie": "78.58",
            "pop10": "1476.00",
            "den10": "18.78"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Cañazas",
            "id": "09-3-7",
            "name": "El Aromillo",
            "superficie": "64.72",
            "pop10": "1359.00",
            "den10": "21.00"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Cañazas",
            "id": "09-3-8",
            "name": "Las Cruces",
            "superficie": "64.41",
            "pop10": "1364.00",
            "den10": "21.18"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-4",
        "name": "La Mesa",
        "superficie": "510.96",
        "pop10": "11631.00",
        "den10": "22.76",
        "capital": "La Mesa",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "La Mesa",
            "id": "09-4-1",
            "name": "La Mesa",
            "superficie": "165.41",
            "pop10": "3338.00",
            "den10": "20.18"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "La Mesa",
            "id": "09-4-2",
            "name": "Bisvalles",
            "superficie": "83.44",
            "pop10": "2185.00",
            "den10": "26.19"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "La Mesa",
            "id": "09-4-3",
            "name": "Boró",
            "superficie": "71.72",
            "pop10": "1757.00",
            "den10": "24.50"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "La Mesa",
            "id": "09-4-4",
            "name": "Llano Grande",
            "superficie": "58.01",
            "pop10": "815.00",
            "den10": "14.05"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "La Mesa",
            "id": "09-4-5",
            "name": "San Bartolo",
            "superficie": "97.36",
            "pop10": "2440.00",
            "den10": "25.06"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "La Mesa",
            "id": "09-4-6",
            "name": "Los Milagros",
            "superficie": "35.04",
            "pop10": "1096.00",
            "den10": "31.28"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-5",
        "name": "Las Palmas",
        "superficie": "1015.43",
        "pop10": "17566.00",
        "den10": "17.30",
        "capital": "Las Palmas",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-1",
            "name": "Las Palmas",
            "superficie": "128.96",
            "pop10": "3106.00",
            "den10": "24.09"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-2",
            "name": "Cerro de Casa",
            "superficie": "91.45",
            "pop10": "2343.00",
            "den10": "25.62"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-3",
            "name": "Corozal",
            "superficie": "40.14",
            "pop10": "920.00",
            "den10": "22.92"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-4",
            "name": "El María",
            "superficie": "96.06",
            "pop10": "1077.00",
            "den10": "11.21"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-5",
            "name": "El Prado",
            "superficie": "41.19",
            "pop10": "1074.00",
            "den10": "26.07"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-6",
            "name": "El Rincón",
            "superficie": "82.74",
            "pop10": "2574.00",
            "den10": "31.11"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-7",
            "name": "Lolá",
            "superficie": "41.08",
            "pop10": "946.00",
            "den10": "23.03"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-8",
            "name": "Pixvae",
            "superficie": "79.24",
            "pop10": "820.00",
            "den10": "10.35"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-9",
            "name": "Puerto Vidal",
            "superficie": "132.05",
            "pop10": "1671.00",
            "den10": "12.65"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-10",
            "name": "San Martín de Porres",
            "superficie": "26.33",
            "pop10": "1004.00",
            "den10": "38.13"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-11",
            "name": "Viguí",
            "superficie": "59.60",
            "pop10": "964.00",
            "den10": "16.17"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Las Palmas",
            "id": "09-5-12",
            "name": "Zapotillo",
            "superficie": "196.58",
            "pop10": "1067.00",
            "den10": "05.43"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-6",
        "name": "Montijo",
        "superficie": "779.80",
        "pop10": "6572.00",
        "den10": "08.43",
        "capital": "Montijo",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Montijo",
            "id": "09-6-1",
            "name": "Montijo",
            "superficie": "58.10",
            "pop10": "2288.00",
            "den10": "39.38"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Montijo",
            "id": "09-6-2",
            "name": "Gobernadora",
            "superficie": "536.88",
            "pop10": "269.00",
            "den10": "00.50"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Montijo",
            "id": "09-6-3",
            "name": "La Garceana",
            "superficie": "25.57",
            "pop10": "276.00",
            "den10": "10.80"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Montijo",
            "id": "09-6-4",
            "name": "Leones",
            "superficie": "18.71",
            "pop10": "224.00",
            "den10": "11.97"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Montijo",
            "id": "09-6-5",
            "name": "Pilón",
            "superficie": "05.11",
            "pop10": "890.00",
            "den10": "174.02"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Montijo",
            "id": "09-6-6",
            "name": "Cébaco",
            "superficie": "79.72",
            "pop10": "378.00",
            "den10": "04.74"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Montijo",
            "id": "09-6-7",
            "name": "Costa Hermosa",
            "superficie": "20.48",
            "pop10": "1550.00",
            "den10": "75.67"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Montijo",
            "id": "09-6-8",
            "name": "Unión del Norte",
            "superficie": "35.21",
            "pop10": "697.00",
            "den10": "19.79"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-7",
        "name": "Río de Jesús",
        "superficie": "302.28",
        "pop10": "5102.00",
        "den10": "16.88",
        "capital": "Río de Jesús",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Río de Jesús",
            "id": "09-7-1",
            "name": "Río de Jesús",
            "superficie": "105.39",
            "pop10": "2484.00",
            "den10": "23.57"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Río de Jesús",
            "id": "09-7-2",
            "name": "Las Huacas",
            "superficie": "74.35",
            "pop10": "965.00",
            "den10": "12.98"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Río de Jesús",
            "id": "09-7-3",
            "name": "Los Castillos",
            "superficie": "17.63",
            "pop10": "552.00",
            "den10": "31.32"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Río de Jesús",
            "id": "09-7-4",
            "name": "Utira",
            "superficie": "48.20",
            "pop10": "314.00",
            "den10": "06.51"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Río de Jesús",
            "id": "09-7-5",
            "name": "Catorce de Noviembre",
            "superficie": "56.71",
            "pop10": "787.00",
            "den10": "13.88"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-8",
        "name": "San Francisco",
        "superficie": "436.50",
        "pop10": "9881.00",
        "den10": "22.64",
        "capital": "San Francisco",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "San Francisco",
            "id": "09-8-1",
            "name": "San Francisco",
            "superficie": "73.11",
            "pop10": "2283.00",
            "den10": "31.23"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "San Francisco",
            "id": "09-8-2",
            "name": "Corral Falso",
            "superficie": "38.00",
            "pop10": "469.00",
            "den10": "12.34"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "San Francisco",
            "id": "09-8-3",
            "name": "Los Hatillos",
            "superficie": "109.04",
            "pop10": "1365.00",
            "den10": "12.52"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "San Francisco",
            "id": "09-8-4",
            "name": "Remance",
            "superficie": "78.37",
            "pop10": "1618.00",
            "den10": "20.64"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "San Francisco",
            "id": "09-8-5",
            "name": "San Juan",
            "superficie": "81.41",
            "pop10": "1591.00",
            "den10": "19.54"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "San Francisco",
            "id": "09-8-6",
            "name": "San José",
            "superficie": "56.57",
            "pop10": "2555.00",
            "den10": "45.17"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-9",
        "name": "Santa Fé",
        "superficie": "1920.08",
        "pop10": "15585.00",
        "den10": "08.12",
        "capital": "Santa Fé",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Santa Fé",
            "id": "09-9-1",
            "name": "Santa Fé",
            "superficie": "145.09",
            "pop10": "3047.00",
            "den10": "21.00"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santa Fé",
            "id": "09-9-2",
            "name": "Calovébora",
            "superficie": "1127.35",
            "pop10": "4397.00",
            "den10": "03.90"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santa Fé",
            "id": "09-9-3",
            "name": "El Alto",
            "superficie": "84.96",
            "pop10": "1318.00",
            "den10": "15.51"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santa Fé",
            "id": "09-9-4",
            "name": "El Cuay",
            "superficie": "85.60",
            "pop10": "1486.00",
            "den10": "17.36"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santa Fé",
            "id": "09-9-5",
            "name": "El Pantano",
            "superficie": "52.54",
            "pop10": "658.00",
            "den10": "12.52"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santa Fé",
            "id": "09-9-6",
            "name": "Gatú o Gatucito",
            "superficie": "95.54",
            "pop10": "1315.00",
            "den10": "13.76"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santa Fé",
            "id": "09-9-7",
            "name": "Río Luis",
            "superficie": "259.18",
            "pop10": "2204.00",
            "den10": "08.50"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santa Fé",
            "id": "09-9-8",
            "name": "Rubén Cantú",
            "superficie": "69.82",
            "pop10": "1160.00",
            "den10": "16.61"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-10",
        "name": "Santiago",
        "superficie": "970.86",
        "pop10": "88997.00",
        "den10": "91.67",
        "capital": "Santiago",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-1",
            "name": "Santiago",
            "superficie": "44.22",
            "pop10": "31065.00",
            "den10": "702.56"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-2",
            "name": "La Colorada",
            "superficie": "65.22",
            "pop10": "2128.00",
            "den10": "32.63"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-3",
            "name": "La Peña",
            "superficie": "117.64",
            "pop10": "3990.00",
            "den10": "33.92"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-4",
            "name": "La Raya de Santa María",
            "superficie": "107.56",
            "pop10": "3268.00",
            "den10": "30.38"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-5",
            "name": "Ponuga",
            "superficie": "289.71",
            "pop10": "2798.00",
            "den10": "09.66"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-6",
            "name": "San Pedro del Espino",
            "superficie": "22.51",
            "pop10": "1629.00",
            "den10": "72.35"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-7",
            "name": "Canto del Llano",
            "superficie": "79.14",
            "pop10": "13331.00",
            "den10": "168.45"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-8",
            "name": "Los Algarrobos",
            "superficie": "63.36",
            "pop10": "5490.00",
            "den10": "86.65"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-9",
            "name": "Carlos Santana Ávila",
            "superficie": "67.64",
            "pop10": "4059.00",
            "den10": "60.01"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-10",
            "name": "Edwin Fábrega",
            "superficie": "35.36",
            "pop10": "3434.00",
            "den10": "97.13"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-11",
            "name": "San Martín de Porres",
            "superficie": "16.38",
            "pop10": "16406.00",
            "den10": "1001.47"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Santiago",
            "id": "09-10-12",
            "name": "Urracá",
            "superficie": "62.11",
            "pop10": "1399.00",
            "den10": "22.53"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-11",
        "name": "Soná",
        "superficie": "1519.09",
        "pop10": "27833.00",
        "den10": "18.32",
        "capital": "Soná",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-1",
            "name": "Soná",
            "superficie": "70.13",
            "pop10": "10802.00",
            "den10": "154.02"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-2",
            "name": "Bahía Honda",
            "superficie": "174.96",
            "pop10": "1037.00",
            "den10": "05.93"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-3",
            "name": "Calidonia",
            "superficie": "158.16",
            "pop10": "1419.00",
            "den10": "08.97"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-4",
            "name": "Cativé",
            "superficie": "131.85",
            "pop10": "822.00",
            "den10": "06.23"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-5",
            "name": "El Marañón",
            "superficie": "114.21",
            "pop10": "2322.00",
            "den10": "20.33"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-6",
            "name": "Guarumal",
            "superficie": "324.34",
            "pop10": "3239.00",
            "den10": "09.99"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-7",
            "name": "La Soledad",
            "superficie": "115.31",
            "pop10": "1517.00",
            "den10": "13.16"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-8",
            "name": "Quebrada de Oro",
            "superficie": "60.81",
            "pop10": "955.00",
            "den10": "15.70"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-9",
            "name": "Río Grande",
            "superficie": "247.01",
            "pop10": "3674.00",
            "den10": "14.87"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Soná",
            "id": "09-11-10",
            "name": "Rodeo Viejo",
            "superficie": "122.30",
            "pop10": "2046.00",
            "den10": "16.73"
          }
        ]
      }, {
        "provincia": "VERAGUAS",
        "id": "09-12",
        "name": "Mariato",
        "superficie": "1381.42",
        "pop10": "5296.00",
        "den10": "03.83",
        "capital": "Llano de Catival o Mariato",
        "corregimientos": [{
            "provincia": "VERAGUAS",
            "distrito": "Mariato",
            "id": "09-12-1",
            "name": "Llano de Catival o Mariato (Cabec)",
            "superficie": "75.33",
            "pop10": "2376.00",
            "den10": "31.54"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Mariato",
            "id": "09-12-2",
            "name": "Arenas",
            "superficie": "232.34",
            "pop10": "663.00",
            "den10": "02.85"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Mariato",
            "id": "09-12-3",
            "name": "El Cacao",
            "superficie": "411.06",
            "pop10": "529.00",
            "den10": "01.29"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Mariato",
            "id": "09-12-4",
            "name": "Quebro",
            "superficie": "349.42",
            "pop10": "1129.00",
            "den10": "03.23"
          },
          {
            "provincia": "VERAGUAS",
            "distrito": "Mariato",
            "id": "09-12-5",
            "name": "Tebario",
            "superficie": "313.26",
            "pop10": "599.00",
            "den10": "01.91"
          }
        ]
      }]
    },
    {
      "id": "10",
      "name": "COMARCA KUNA YALA",
      "superficie": "2358.21",
      "pop10": "33109.00",
      "den10": "14.04",
      "capital": "Narganá",
      "distritos": [{
        "provincia": "COMARCA KUNA YALA",
        "id": "10-1",
        "name": "Comarca Kuna Yala",
        "superficie": "2358.21",
        "pop10": "33109.00",
        "den10": "14.04",
        "capital": "Narganá",
        "corregimientos": [{
            "provincia": "COMARCA KUNA YALA",
            "distrito": "Comarca Kuna Yala",
            "id": "10-1-1",
            "name": "Narganá",
            "superficie": "785.07",
            "pop10": "14060.00",
            "den10": "17.91"
          },
          {
            "provincia": "COMARCA KUNA YALA",
            "distrito": "Comarca Kuna Yala",
            "id": "10-1-2",
            "name": "Ailigandí",
            "superficie": "821.45",
            "pop10": "11644.00",
            "den10": "14.17"
          },
          {
            "provincia": "COMARCA KUNA YALA",
            "distrito": "Comarca Kuna Yala",
            "id": "10-1-3",
            "name": "Puerto Obaldía",
            "superficie": "131.25",
            "pop10": "672.00",
            "den10": "05.12"
          },
          {
            "provincia": "COMARCA KUNA YALA",
            "distrito": "Comarca Kuna Yala",
            "id": "10-1-4",
            "name": "Tubualá",
            "superficie": "620.45",
            "pop10": "6733.00",
            "den10": "10.85"
          }
        ]
      }]
    },
    {
      "id": "11",
      "name": "COMARCA EMBERÁ",
      "superficie": "4393.90",
      "pop10": "10001.00",
      "den10": "02.28",
      "capital": "Cémaco",
      "distritos": [{
        "provincia": "COMARCA EMBERÁ",
        "id": "11-1",
        "name": "Cémaco",
        "superficie": "3097.54",
        "pop10": "7715.00",
        "den10": "02.49",
        "capital": "Cirilo Guainora",
        "corregimientos": [{
            "provincia": "COMARCA EMBERÁ",
            "distrito": "Cémaco",
            "id": "11-1-1",
            "name": "Cirilo Guainora",
            "superficie": "434.76",
            "pop10": "2197.00",
            "den10": "05.05"
          },
          {
            "provincia": "COMARCA EMBERÁ",
            "distrito": "Cémaco",
            "id": "11-1-2",
            "name": "Lajas Blancas",
            "superficie": "1548.22",
            "pop10": "3735.00",
            "den10": "02.41"
          },
          {
            "provincia": "COMARCA EMBERÁ",
            "distrito": "Cémaco",
            "id": "11-1-3",
            "name": "Manuel Ortega",
            "superficie": "1114.56",
            "pop10": "1783.00",
            "den10": "01.60"
          }
        ]
      }, {
        "provincia": "COMARCA EMBERÁ",
        "id": "11-2",
        "name": "Sambú",
        "superficie": "1296.37",
        "pop10": "2286.00",
        "den10": "01.76",
        "corregimientos": [{
            "provincia": "COMARCA EMBERÁ",
            "distrito": "Sambú",
            "id": "11-2-1",
            "name": "Río Sábalo",
            "superficie": "562.16",
            "pop10": "1800.00",
            "den10": "03.20"
          },
          {
            "provincia": "COMARCA EMBERÁ",
            "distrito": "Sambú",
            "id": "11-2-2",
            "name": "Jingurudó",
            "superficie": "734.21",
            "pop10": "486.00",
            "den10": "00.66"
          }
        ]
      }]
    },
    {
      "id": "12",
      "name": "COMARCA NGÄBE BUGLÉ",
      "superficie": "6814.19",
      "pop10": "156747.00",
      "den10": "23.00",
      "capital": "Besiko",
      "distritos": [{
        "provincia": "COMARCA NGÄBE BUGLÉ",
        "id": "12-1",
        "name": "Besiko",
        "superficie": "752.16",
        "pop10": "23532.00",
        "den10": "31.29",
        "capital": "Soloy",
        "corregimientos": [{
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Besiko",
            "id": "12-1-1",
            "name": "Soloy",
            "superficie": "113.08",
            "pop10": "4153.00",
            "den10": "36.73"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Besiko",
            "id": "12-1-2",
            "name": "Boca de Balsa",
            "superficie": "119.54",
            "pop10": "3053.00",
            "den10": "25.54"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Besiko",
            "id": "12-1-3",
            "name": "Camarón Arriba",
            "superficie": "49.67",
            "pop10": "2977.00",
            "den10": "59.94"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Besiko",
            "id": "12-1-4",
            "name": "Cerro Banco",
            "superficie": "106.96",
            "pop10": "3913.00",
            "den10": "36.59"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Besiko",
            "id": "12-1-5",
            "name": "Cerro de Patena",
            "superficie": "51.16",
            "pop10": "1730.00",
            "den10": "33.82"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Besiko",
            "id": "12-1-6",
            "name": "Emplanada de Chorcha",
            "superficie": "147.57",
            "pop10": "2348.00",
            "den10": "15.91"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Besiko",
            "id": "12-1-7",
            "name": "Nämnoni",
            "superficie": "28.36",
            "pop10": "1867.00",
            "den10": "65.83"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Besiko",
            "id": "12-1-8",
            "name": "Niba",
            "superficie": "135.83",
            "pop10": "3491.00",
            "den10": "25.70"
          }
        ]
      }, {
        "provincia": "COMARCA NGÄBE BUGLÉ",
        "id": "12-2",
        "name": "Mironó",
        "superficie": "343.13",
        "pop10": "15010.00",
        "den10": "43.74",
        "capital": "Hato Pilón",
        "corregimientos": [{
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Mironó",
            "id": "12-2-1",
            "name": "Hato Pilón",
            "superficie": "43.74",
            "pop10": "2356.00",
            "den10": "53.86"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Mironó",
            "id": "12-2-2",
            "name": "Cascabel",
            "superficie": "125.72",
            "pop10": "1225.00",
            "den10": "09.74"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Mironó",
            "id": "12-2-3",
            "name": "Hato Corotú",
            "superficie": "21.12",
            "pop10": "2134.00",
            "den10": "101.03"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Mironó",
            "id": "12-2-4",
            "name": "Hato Culantro",
            "superficie": "68.65",
            "pop10": "2110.00",
            "den10": "30.73"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Mironó",
            "id": "12-2-5",
            "name": "Hato Jobo",
            "superficie": "31.14",
            "pop10": "1393.00",
            "den10": "44.74"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Mironó",
            "id": "12-2-6",
            "name": "Hato Julí",
            "superficie": "10.56",
            "pop10": "1504.00",
            "den10": "142.49"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Mironó",
            "id": "12-2-7",
            "name": "Quebrada de Loro",
            "superficie": "14.72",
            "pop10": "1616.00",
            "den10": "109.77"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Mironó",
            "id": "12-2-8",
            "name": "Salto Dupí",
            "superficie": "27.47",
            "pop10": "2672.00",
            "den10": "97.25"
          }
        ]
      }, {
        "provincia": "COMARCA NGÄBE BUGLÉ",
        "id": "12-3",
        "name": "Müna",
        "superficie": "796.40",
        "pop10": "36075.00",
        "den10": "45.30",
        "capital": "Chichica",
        "corregimientos": [{
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-1",
            "name": "Chichica",
            "superficie": "82.67",
            "pop10": "5368.00",
            "den10": "64.93"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-2",
            "name": "Alto Caballero",
            "superficie": "31.82",
            "pop10": "3854.00",
            "den10": "121.11"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-3",
            "name": "Bakama",
            "superficie": "10.60",
            "pop10": "1204.00",
            "den10": "113.54"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-4",
            "name": "Cerro Caña",
            "superficie": "30.35",
            "pop10": "2146.00",
            "den10": "70.70"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-5",
            "name": "Cerro Puerco",
            "superficie": "43.31",
            "pop10": "4327.00",
            "den10": "99.91"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-6",
            "name": "Krüa",
            "superficie": "167.93",
            "pop10": "2180.00",
            "den10": "12.98"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-7",
            "name": "Maraca",
            "superficie": "36.90",
            "pop10": "3224.00",
            "den10": "87.37"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-8",
            "name": "Nibra",
            "superficie": "35.64",
            "pop10": "2091.00",
            "den10": "58.67"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-9",
            "name": "Peña Blanca",
            "superficie": "143.90",
            "pop10": "3358.00",
            "den10": "23.34"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-10",
            "name": "Roka",
            "superficie": "83.68",
            "pop10": "2697.00",
            "den10": "32.23"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-11",
            "name": "Sitio Prado",
            "superficie": "105.54",
            "pop10": "3478.00",
            "den10": "32.96"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Müna",
            "id": "12-3-12",
            "name": "Umani",
            "superficie": "24.06",
            "pop10": "2148.00",
            "den10": "89.29"
          }
        ]
      }, {
        "provincia": "COMARCA NGÄBE BUGLÉ",
        "id": "12-4",
        "name": "Nole Duima",
        "superficie": "185.06",
        "pop10": "14928.00",
        "den10": "80.67",
        "capital": "Cerro Iglesias",
        "corregimientos": [{
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Nole Duima",
            "id": "12-4-1",
            "name": "Cerro Iglesias",
            "superficie": "31.18",
            "pop10": "4123.00",
            "den10": "132.25"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Nole Duima",
            "id": "12-4-2",
            "name": "Hato Chamí",
            "superficie": "50.29",
            "pop10": "3857.00",
            "den10": "76.69"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Nole Duima",
            "id": "12-4-3",
            "name": "Jädaberi",
            "superficie": "66.88",
            "pop10": "1476.00",
            "den10": "22.07"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Nole Duima",
            "id": "12-4-4",
            "name": "Lajero",
            "superficie": "16.30",
            "pop10": "2674.00",
            "den10": "164.08"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Nole Duima",
            "id": "12-4-5",
            "name": "Susama",
            "superficie": "20.41",
            "pop10": "2798.00",
            "den10": "137.11"
          }
        ]
      }, {
        "provincia": "COMARCA NGÄBE BUGLÉ",
        "id": "12-5",
        "name": "Ñürüm",
        "superficie": "574.69",
        "pop10": "13172.00",
        "den10": "22.92",
        "capital": "Buenos Aires",
        "corregimientos": [{
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Ñürüm",
            "id": "12-5-1",
            "name": "Buenos Aires",
            "superficie": "62.71",
            "pop10": "1856.00",
            "den10": "29.60"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Ñürüm",
            "id": "12-5-2",
            "name": "Agua de Salud",
            "superficie": "133.46",
            "pop10": "3049.00",
            "den10": "22.85"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Ñürüm",
            "id": "12-5-3",
            "name": "Alto de Jesús",
            "superficie": "27.50",
            "pop10": "686.00",
            "den10": "24.94"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Ñürüm",
            "id": "12-5-4",
            "name": "Cerro Pelado",
            "superficie": "31.50",
            "pop10": "2361.00",
            "den10": "74.96"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Ñürüm",
            "id": "12-5-5",
            "name": "El Bale",
            "superficie": "48.39",
            "pop10": "813.00",
            "den10": "16.80"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Ñürüm",
            "id": "12-5-6",
            "name": "El Paredón",
            "superficie": "109.09",
            "pop10": "1060.00",
            "den10": "09.72"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Ñürüm",
            "id": "12-5-7",
            "name": "El Piro",
            "superficie": "05.41",
            "pop10": "586.00",
            "den10": "108.23"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Ñürüm",
            "id": "12-5-8",
            "name": "Guayabito",
            "superficie": "59.69",
            "pop10": "1663.00",
            "den10": "27.86"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Ñürüm",
            "id": "12-5-9",
            "name": "Güibale",
            "superficie": "96.94",
            "pop10": "1098.00",
            "den10": "11.33"
          }
        ]
      }, {
        "provincia": "COMARCA NGÄBE BUGLÉ",
        "id": "12-6",
        "name": "Kankintú",
        "superficie": "2422.11",
        "pop10": "33121.00",
        "den10": "13.67",
        "capital": "Bisira",
        "corregimientos": [{
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kankintú",
            "id": "12-6-1",
            "name": "Bisira",
            "superficie": "209.22",
            "pop10": "3200.00",
            "den10": "15.30"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kankintú",
            "id": "12-6-2",
            "name": "Bürí",
            "superficie": "339.74",
            "pop10": "4129.00",
            "den10": "12.15"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kankintú",
            "id": "12-6-3",
            "name": "Guariviara",
            "superficie": "569.67",
            "pop10": "5096.00",
            "den10": "08.95"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kankintú",
            "id": "12-6-4",
            "name": "Guoroni",
            "superficie": "387.41",
            "pop10": "2647.00",
            "den10": "06.83"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kankintú",
            "id": "12-6-5",
            "name": "Kankintú",
            "superficie": "194.21",
            "pop10": "5009.00",
            "den10": "25.79"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kankintú",
            "id": "12-6-6",
            "name": "Mününi",
            "superficie": "87.77",
            "pop10": "2742.00",
            "den10": "31.24"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kankintú",
            "id": "12-6-7",
            "name": "Piedra Roja",
            "superficie": "164.24",
            "pop10": "3035.00",
            "den10": "18.48"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kankintú",
            "id": "12-6-8",
            "name": "Tuwai",
            "superficie": "256.88",
            "pop10": "3015.00",
            "den10": "11.74"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kankintú",
            "id": "12-6-9",
            "name": "Man Creek",
            "superficie": "212.96",
            "pop10": "4248.00",
            "den10": "19.95"
          }
        ]
      }, {
        "provincia": "COMARCA NGÄBE BUGLÉ",
        "id": "12-7",
        "name": "Kusapín",
        "superficie": "1740.65",
        "pop10": "20909.00",
        "den10": "12.01",
        "capital": "Kusapín",
        "corregimientos": [{
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kusapín",
            "id": "12-7-1",
            "name": "Kusapín",
            "superficie": "23.12",
            "pop10": "3080.00",
            "den10": "133.25"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kusapín",
            "id": "12-7-2",
            "name": "Bahía Azul",
            "superficie": "76.53",
            "pop10": "3621.00",
            "den10": "47.31"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kusapín",
            "id": "12-7-3",
            "name": "Calovébora o Santa Catalina",
            "superficie": "272.48",
            "pop10": "2963.00",
            "den10": "10.87"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kusapín",
            "id": "12-7-4",
            "name": "Loma Yuca",
            "superficie": "300.48",
            "pop10": "544.00",
            "den10": "01.81"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kusapín",
            "id": "12-7-5",
            "name": "Río Chiriquí",
            "superficie": "596.27",
            "pop10": "3658.00",
            "den10": "06.13"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kusapín",
            "id": "12-7-6",
            "name": "Tobobe",
            "superficie": "215.32",
            "pop10": "5056.00",
            "den10": "23.48"
          },
          {
            "provincia": "COMARCA NGÄBE BUGLÉ",
            "distrito": "Kusapín",
            "id": "12-7-7",
            "name": "Valle Bonito",
            "superficie": "256.44",
            "pop10": "1987.00",
            "den10": "07.75"
          }
        ]
      }]
    }
  ]
}