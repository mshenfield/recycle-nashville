const base = {
    // All support dropoff
    dropoff: true,
    // None have fees
    fees: false,
    // Most of the donation express centers have these hours
    hours: 'Mon.-Fri. 8 a.m. to 7 p.m., Sat. 8 a.m. to 8 a.m., Sun. 12 p.m. to 6 p.m.',
    // Corporate phone number - some of these addresses don't have staff
    phone: '800-545-9231',
    // General group of items, pulled from http://giveit2goodwill.org/donation-locations/
    // TODO: Check if goodwill accepts cardboard, they are listed as a cardboard recycling provider on nashville.gov)
    items: [
    {name: 'hardcover books', category: 'paper'},
    {name: 'paperback books', category: 'paper'},
    {name: 'furniture', category: 'furniture'},
    {name: 'appliances', category: 'appliances'},
    {name: 'accessories', category: 'clothing'},
    {name: 'shoes', category: 'clothing'},
    {name: 'clothing', category: 'clothing'},
    ],
    name: 'Goodwill of Middle TN Donation Express Center',
    // Calling a number should lead to set up a pick-up
    pickup: true
}

const locations = [
    {
        location: '780 Berry Rd, Nashville, TN 37204',
        phone: '615-383-7190',
    },
    {
        location: '3812 Hillsboro Road, Nashville, TN 37215',
        hours: 'Mon.-Sun. 7 a.m. to 6 p.m.',
        phone: '800-545-9231'
    },
    {
        location: '5412 Charlotte Ave, Nashville, TN 37209',
        phone: '615-463-8465'
    },
    {
        location: '613 Gallatin Rd, Nashville, TN 37206',
        phone: '615-346-1680'
    },
    {
        location: '3200 Gallatin Pike, Nashville, TN 37216',
        hours: 'Mon.-Sun. 7 a.m. to 5 p.m.'
    },
    {
        location: '2731 Lebanon Pike, Donelson Center, Nashville, TN 37214',
        phone: '615-346-180',
    }
]

export default locations.map((locationInfo) => {
    return {
        ...base,
        ...locationInfo
    }
})
