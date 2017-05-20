import getSharedItems from './sharedItems'

const base = {
    dropoff: true,
    fees: false,
    pickup: false,
}

const locations = [
    {
        location: '943a Dr Richard G Adams Dr, Nashville, TN 372037',
        hours: 'Mon.-Sat. 7:30 a.m.-5:00 p.m. and Sun. Noon-4:00 p.m.',
        items: getSharedItems(['electronics', 'glass', 'hazardous', 'metal', 'paper', 'plastic']),
        name: 'East Recycling Convenience Center',
        phone: '615-862-8631'
    },
    {
        location: '943a Dr Richard G Adams Dr, Nashville, TN 372037',
        hours: 'Mon.-Sat. 7:30 a.m.-5:00 p.m. and Sun. Noon-4:00 p.m.',
        items: getSharedItems(['electronics', 'glass', 'hazardous', 'metal', 'paper', 'plastic', 'mattress']),
        name: 'East Recycling Convenience Center',
        phone: '615-862-8631'
    },
    {
        location: '5113 Harding Place, Nashville, TN 37211',
        hours: 'Mon.-Sat. 7:30 a.m.-5:00 p.m. and Sun. Noon-4:00 p.m.',
        items: getSharedItems(['electronics', 'glass', 'hazardous', 'metal', 'paper', 'plastic', 'yard']),
        name: 'Ezell Pike Recycling Convenience Center',
        phone: '615-880-2530'
    },
    {
        location: '1019 Omohundro Place, Nashville, TN 37210',
        hours: 'Tue.-Sat. 8:00 a.m.-4:30 p.m.',
        items: getSharedItems(['electronics', 'glass', 'metal', 'paper', 'plastic', 'mattress']),
        name: 'Omohundro Recycling Convenience Center',
        phone: '615-880-1955'
    },
    {
        location: '939 Anderson Ln, Madison, TN 37115',
        hours: 'Tue.-Sat. 8:00 a.m.-4:30 p.m.',
        items: getSharedItems(['glass', 'metal', 'paper', 'plastic', 'mattress']),
        name: 'Anderson Lane Recycling Convenience Center',
        phone: '615-860-2588'
    }
]

export default locations.map(locationInfo => {
    return {
        ...base,
        ...locationInfo
    }
})
