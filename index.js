function first_lesson() {
  document.body.innerHTML += 'Vítejte na našem webu';
  document.body.innerHTML += '<br>';

  document.body.innerHTML += 27 % 4;
  document.body.innerHTML += '<br>';

  let mzda = 350;
  mzda += 400;
  document.body.innerHTML += mzda + 500;
  document.body.innerHTML += '<br>';

  // const celeJmeno = prompt('Jake je vase jmeno a primeni?');
  // const vek = Number(prompt('Jaky je vas vek?'));
  // document.body.innerHTML += '<p>' + celeJmeno + ', vek: ' + vek + '</p>';
}

const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

function realitka() {
  document.body.innerHTML += 'Vítejte na našem webu';
  document.body.innerHTML += '<br>';
  document.body.innerHTML += '<br>';

  document.body.innerHTML +=
    'Dispozice bytu ' + apartment.disposition + ' <br>';
  document.body.innerHTML +=
    'Nájem bez poplatků ' + apartment.price.rent + ' <br>';
  document.body.innerHTML +=
    'Výměra bytu ' + apartment.area.floorage + apartment.area.units + ' <br>';

  const city = apartment.city;
  const district = apartment.district;

  document.body.innerHTML +=
    'City and district: ' + city + ' - ' + district + ' <br>';

  apartment.status = 'taken';
  document.body.innerHTML += 'Stav inzeratu: ' + apartment.status + ' <br>';

  // document.body.innerHTML += ' ' + apartment. + ' <br>';
}

const book = {
  title: 'JavaScript for Dummies',
  author: 'Somebody Clever',
  pages: 253,
  issueInformation: {
    issuerName: 'Vydavatelství ABC',
    issuedYear: 2022,
  },
};

// first_lesson();
// realitka();
