export interface Address {
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mailingAddress: Address;
  isPrimary: false;
}

export interface Provider {
  contacts: Contact[];
  id: 1992;
  logoFileName: '';
  name: 'ACE';
  pinImageFileName: '';
}

export const providers = [
  {
    contacts: [
      {
        id: 5,
        firstName: 'John',
        lastName: 'Ace',
        email: 'John.Ace@aol.com',
        phone: '9189477513',
        mailingAddress: {
          streetAddress1: '7870 N 163rd East Ct',
          streetAddress2: null,
          city: 'Owasso',
          state: 'OK',
          zipCode: '74055',
        },
        isPrimary: false,
      },
    ],
    id: 1992,
    logoFileName: '',
    name: 'ACE',
    pinImageFileName: '',
  },
  {
    contacts: [
      {
        id: 2,
        firstName: 'Bill',
        lastName: 'Smith',
        email: 'bill@aol.com',
        phone: '9189477513',
        mailingAddress: {
          streetAddress1: '15 E 5th Street',
          streetAddress2: null,
          city: 'Tulsa',
          state: 'OK',
          zipCode: '74015',
        },
        isPrimary: false,
      },
    ],
    id: 2008,
    logoFileName: '',
    name: 'Bill',
    pinImageFileName: '',
  },
  {
    contacts: [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Express',
        email: 'john.xp@aol.com',
        phone: '9189477513',
        mailingAddress: {
          streetAddress1: '92783 E 11th Street',
          streetAddress2: null,
          city: 'Tulsa',
          state: 'OK',
          zipCode: '74055',
        },
        isPrimary: false,
      },
    ],
    id: 2004,
    logoFileName: '',
    name: 'Burrito',
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 1995,
    logoFileName: '',
    name: 'Checkfree/Fiserv',
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 2009,
    logoFileName: '',
    name: "Chucky's",
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 2005,
    logoFileName: '',
    name: 'Curry',
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 1998,
    logoFileName: '',
    name: 'David',
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 1991,
    logoFileName: null,
    name: 'Fidelity Express',
    pinImageFileName: null,
  },
  {
    contacts: [],
    id: 2006,
    logoFileName: '',
    name: 'John',
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 2003,
    logoFileName: '',
    name: 'Manchego',
    pinImageFileName: '',
  },
  { contacts: [], id: 2014, logoFileName: '', name: 'P', pinImageFileName: '' },
  {
    contacts: [],
    id: 2011,
    logoFileName: '',
    name: 'Ronald',
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 2010,
    logoFileName: '',
    name: "Sally's",
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 1990,
    logoFileName: '',
    name: 'Sitecore',
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 2007,
    logoFileName: '',
    name: 'Thomas',
    pinImageFileName: '',
  },
  {
    contacts: [
      {
        id: 11,
        firstName: 'James',
        lastName: 'Kirk',
        email: 'jtkirk@enterprise.com',
        phone: '9185551701',
        mailingAddress: {
          streetAddress1: 'USS Enterprise',
          streetAddress2: null,
          city: 'Outer Space',
          state: 'OK',
          zipCode: '17011',
        },
        isPrimary: false,
      },
    ],
    id: 2002,
    logoFileName: '',
    name: 'Topher',
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 1994,
    logoFileName: '',
    name: 'US Payments',
    pinImageFileName: '',
  },
  {
    contacts: [],
    id: 1993,
    logoFileName: '',
    name: 'Western Union',
    pinImageFileName: '',
  },
];
