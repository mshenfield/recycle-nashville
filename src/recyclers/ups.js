const base = {
    dropoff: true,
    fees: true,
    items: [
    // TODO: This service is paid
    {name: 'documents', category: 'paper', secure: true},
    ],
    name: 'The UPS Store',
    pickup: false,
    website: 'https://www.theupsstore.com/tools/find-a-store'
}

const locations = [
    {
        location: '2817 W End Ave #126 Park Pl, Nashville, TN 37203',
        phone: '615-327-0407',
        hours: 'Mon.-Fri. 8 a.m. to 7 p.m., Sat. 9 a.m. to 5 p.m.'
    },
    {
        location: '1831 12th Ave S, Nashville, TN 37203',
        phone: '615-383-8824',
        hours: 'Mon.-Fri. 8 a.m. to 7 p.m., Sat. 9 a.m. to 5 p.m.'
    },
    {
        location: '201 5th Ave S, Nashville, TN 37203',
        phone: '615-401-1495',
        hours: 'Mon.-Fri. 9 a.m. to 5 p.m.'
    },
    {
        location: '533 Church St, Nashville, TN 37219',
        phone: '615-248-6245',
        hours: 'Mon.-Fri. 9 a.m. to 6 p.m.'
    },
    {
        location: '4117 Hillsboro Pike #103, Nashville, TN 37215',
        phone: '615-298-1020',
        hours: 'Mon.-Fri. 8 a.m. to 7 p.m., Sat. 9 a.m. to 6 p.m.'
    },
    {
        location: '718 Thompson Ln #108, Nashville, TN 37204',
        phone: '615-301-5006',
        hours: 'Mon.-Fri. 8:30 a.m. to 7 p.m., Sat. 9 a.m. to 4 p.m.'
    },
    {
        location: '73 White Bridge Rd #103, Nashville, TN 37205',
        phone: '615-353-9944',
        hours: 'Mon.-Fri. 8:30 a.m. to 7 p.m., Sat. 9:30 a.m. to 3 p.m.'
    },
    {
        location: '5133 Harding Rd, Ste B10, Nashville, TN 37205',
        phone: '615-354-0064',
        hours: 'Mon.-Fri. 8 a.m. to 7 p.m., Sat. 9 a.m. to 5 p.m.'
    },
    {
        location: '5543 Edmondson Pike, Nashville, TN 37211',
        phone: '615-331-3300',
        hours: 'Mon.-Fri. 8:30 a.m. to 7 p.m., Sat. 10 a.m. to 5 p.m.'
    },
    {
        location: '115 Penn Warren Dr #300, Brentwood, TN 37027',
        phone: '615-377-8100',
        hours: 'Mon.-Fri. 8 a.m. to 6:30 p.m., Sat. 10 a.m. to 4:30 p.m.'
    }
]

return locations.map(locationInfo => {
    return {
        ...base,
        ...locationInfo
    }
})
