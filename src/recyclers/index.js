import getSharedItems from './sharedItems'

import goodwills from './goodwill.js'
import habitats from './habitat.js'
import homedepots from './homedepot.js'
import lowes from './lowes.js'
import metros from './metro.js'
import officedepots from './officedepot.js'
import officemaxs from './officemax.js'
import police from './police.js'
import staples from './staples.js'

const recyclers = [
    ...goodwills,
    ...habitats,
    ...homedepots,
    ...lowes,
    ...metros,
    ...officedepots,
    ...officemaxs,
    ...police,
    ...staples,
    /*
      Dynamic Recycling business waste only
    */
    /*
      Southern Debindry - seems to be closed and at auction http://auctionhq.com/content/auction/southern-debindery-service-auction/
    */
    {
        dropoff: true,
        fees: false,
        location: '6810 Charlotte Pike, Nashville, TN 37209',
        phone: '615-353-1184',
        hours: 'Mon.-Sat. 10 a.m. to 9 p.m., Sun. 11 a.m. to 8 p.m.',
        items: [{name: 'rechargeable batteries', category: 'electronics'}],
        name: 'Best Buy',
        pickup: false
    },
    {
        dropoff: true,
        location: '3729 Hwy 109 N, Lebanon, TN 37087',
        fees: false,
        hours: 'Mon.-Fri. 7:30 a.m.-5:00 p.m.',
        items: [
          {name: 'household batteries', category: 'hazardous'},
          {name: 'lead-acid batteries', category: 'hazardous'},
          // 'electronics' matches metroItems.js
          {name: 'rechargeable batteries', category: 'electronics'},
          {name: 'vehicle batteries', category: 'hazardous'},
        ],
        name: 'Interstate Batteries Of Middle Tennessee',
        phone: '615-449-2555',
        pickup: false
    },
    /*
      Combined Resources - permanently closed according to google
    */
    {
        dropoff: false,
        fees: true,
        hours: 'Mon.-Sat. 9 a.m. to 5:30 p.m.',
        items: getSharedItems(['glass', 'metal', 'paper', 'plastic']),
        name: 'EarthSavers',
        phone: '615-481-9640',
        pickup: true
    },
    /*
      Green Resources only services residential pickup in Sumner and Springfield
    */
    {
        dropoff: true,
        fees: false,
        // TODO: Call and verify hours and pickup: true
        items: [
          {name: 'broken down cardboard boxes', category: 'paper'}
        ],
        name: 'Caraustar Recycling',
        phone: '615-793-4580',
        pickup: true
    },
    {
        dropoff: true,
        fees: true,
        // TODO: Call and verify hours, items, pickup
        hours: '',
        items: getSharedItems(['compost']),
        name: 'The Compost Company',
        phone: '615-983-1200',
        pickup: true
    },
    {
        // TODO: Verify dropoff
        // Large items, business collection
        dropoff: false,
        fees: true,
        items: getSharedItems(['glass', 'metal', 'paper', 'plastic']),
        name: 'Waste Management',
        phone: '615-242-8322',
        pickup: true
    },
    /*
      Check WM dump https://www.wmsolutions.com/locations/details/id/163
    */
    /*
      Westrock is a national materials producer and recycler
      They offer pickup services? Call 615-329-4855
    */
    {
        dropoff: true,
        fees: false,
        items: [{name: 'carpet', category: 'furniture'}],
        location: '15 Fairfield Ave, Nashville, TN 37210',
        // TODO: Call and check dropoff hours
        hours: '',
        name: 'Southeastern Recycling',
        phone: '615-242-6464',
        pickup: false
    },
    {
        // TODO: Call and check dropoff hours, verify pickup is false for residents
        dropoff: true,
        fees: false,
        items: [{name: 'ink cartridges', category: 'electronics'}],
        location: '712 4th Ave S, Nashville, TN 37210',
        hours: '',
        name: 'Laser One',
        phone: '615-726-1111',
        pickup: false
    },
    {
        dropoff: true,
        fees: false,
        items: [{name: 'ink cartridges', category: 'electronics'}],
        location: '218 20th Ave N #1, Nashville, TN 37203',
        hours: 'Mon.-Fri. 9 a.m. to 6 p.m.',
        name: 'Cartridge World',
        phone: '615-327-3600',
        pickup: false
    },
    {
        dropoff: true,
        fees: false,
        items: [
          {name: 'shoes', category: 'clothing'},
          {name: 'clothing', category: 'clothing'}
        ],
        location: '1412 Antioch Pike Suite 202, Antioch, TN 37013',
        hours: '24/7',
        name: 'ATR Clothing & Shoe Donation Bin',
        phone: '866-900-9308',
        pickup: false
    },
    /*
      {
        dropoff: true,
        fees: false,
        items: [
          {name: 'shoes', category: 'clothing'},
          {name: 'clothing', category: 'clothing'}
        ],
        location: '1240 Fesslers Lane, Nashville, TN 37210',
        hours: '24/7',
        name: 'BHT ReSources Transfer Station',
        phone: '615-244-5423',
        pickup: true
      }
      This seems to be commercial waste only
    */
    {
        // TODO: Contact about pricing
        dropoff: true,
        fees: true,
        items: [
          {name: 'steel drums', category: 'metal'},
          {name: 'plastic drums', category: 'plastic'}
        ],
        location: '7401 Cumberland Dr, Fairview, TN 37062',
        hours: 'Mon.-Fri. 7:30 a.m. - 4 P.M.',
        name: 'Nashville Barrel & Drum',
        phone: '615-799-9449',
        pickup: true
    },
    /*
      Advanced Technologies appears to be out of business
      TODO: Verify with 615-259-2171
    */
    /*
      SIMS Recycling in Nashville is just commercial recycling only
      http://www.simsrecycling.com/locations/nashville-tn
    */
    /*
      Southeast Recycling Technologies http://www.recyclebulbs.com/
      Also only business
    */
    /*
      AirCycle - commercial recycling http://www.aircycle.com/info/solutions/
    */
    {
        dropoff: false,
        fees: true,
        items: getSharedItems(['compost']),
        name: 'Compost Nashville',
        phone: '615-398-0209',
        pickup: true,
        website: 'http://compostnashville.org/'
    },
    /*
      First Response - confirm existence
      1411 S Dickerson Rd, Goodlettsville, TN 37072
    */
    {
        dropoff: false,
        fees: true,
        items: [
          {name: 'glass bottles', category: 'glass'},
          {name: 'glass jars', category: 'glass'},
        ],
        name: 'Gunner\'s Glass Recycling',
        pickup: true,
        website: 'http://www.gunnersrecycling.com/'
    },
    {
        dropoff: false,
        email: 'customerservice@justiceindustrires.org',
        fees: true,
        items: [
          {name: 'glass bottles', category: 'glass'},
          {name: 'glass jars', category: 'glass'},
        ],
        name: 'Just.Glass',
        phone: '615-669-4163',
        pickup: true,
        website: 'http://www.justiceindustries.org/justglass'
    },
    {
        dropoff: false,
        email: 'info@recyclenash.com',
        fees: true,
        items: [
          {name: 'glass bottles', category: 'glass'},
          {name: 'glass jars', category: 'glass'},
        ],
        name: 'RecycleNash',
        phone: '615-905-6274',
        pickup: true,
        website: 'http://www.recyclenash.com/'
    },
    {
        dropoff: false,
        fees: true,
        items: [
          {name: 'glass bottles', category: 'glass'},
          {name: 'glass jars', category: 'glass'},
        ],
        name: 'Recycling Dudes',
        phone: '615-307-0011',
        pickup: true,
        website: 'http://recyclingdudes.com/'
    },
    /*
      Clean Harbors seems to be only business
    */
    {
        // TODO: Check for dropoff and confirm hours
        dropoff: true,
        fees: true,
        hours: 'Mon.-Sun. 7 a.m. to 3:30 p.m.',
        items: [{name: 'mattress', category: 'mattress'}],
        location: '921 Cherokee Ave, Nashville, TN 37207',
        name: 'Spring Back Recycling',
        phone: '615-207-2736',
        pickup: false,
        website: 'http://www.springbackrecycling.com/'
    },
    {
        // TODO: Confirm items
        // This place pays cash for cans
        dropoff: true,
        fees: false,
        hours: 'Mon.-Fri. 9 a.m. to 4 p.m., Sat. 9 a.m. to 3 p.m.',
        items: [
          {name: 'empty food and drink cans', category: 'metal'},
          {name: 'empty aerosol cans', category: 'metal'},
          {name: 'foils', category: 'metal'},
          {name: 'metal trays', category: 'metal'}
        ],
        location: '2611 Gallatin Pike, Nashville, TN 37246',
        name: 'Pocketmoney Recycling',
        phone: '615-226-1464',
        pickup: false
    },
    {
        dropoff: true,
        fees: false,
        // TODO: Confirm items
        // This place pays cash for cans
        hours: 'Mon.-Fri. 7:30 a.m. to 4 p.m.',
        items: [
          {name: 'empty food and drink cans', category: 'metal'},
          {name: 'empty aerosol cans', category: 'metal'},
          {name: 'aluminum', category: 'metal'},
          {name: 'stainless steel', category: 'metal'},
          {name: 'copper', category: 'metal'},
          {name: 'brass', category: 'metal'},
          {name: 'insulated wire', category: 'metal'},
          {name: 'wire', category: 'metal'}
        ],
        location: '710 South 1st Street, Nashville, TN 37213',
        name: 'PSC Metals',
        phone: '615-271-3300',
        pickup: false
    },
    /*
      Shapiro Metals seems like a business only recycler
      phone: '615-740-0337',
    */
    {
        dropoff: false,
        fees: true,
        location: '710 South 1st Street, Nashville, TN 37213',
        items: getSharedItems(['paper', 'plastic', 'metal']),
        name: 'Hudgins Disposal',
        phone: '615-228-6331',
        pickup: true,
        website: 'http://www.hudginsdisposal.com/'
    },
    /*
      Green Village Recycling service area not in Davidson county
      http://www.greenvillagerecycling.com/
    */
    {
        dropoff: false,
        fees: true,
        location: '710 South 1st Street, Nashville, TN 37213',
        // Also bulk pickup, dumpster rental, sharps & needle disposal
        items: getSharedItems(['compost', 'electronics', 'glass', 'hazardous','paper', 'plastic', 'metal', 'yard']),
        name: 'Republic Services',
        phone: '615-224-6250',
        pickup: true,
        website: 'https://www.republicservices.com/'
    },
    {
        // TODO: Dropoff at 7320 Centennial Boulevard?
        // Large items
        dropoff: false,
        fees: true,
        location: '7320 Centennial Boulevard, Nashville, TN 37209',
        items: getSharedItems(['paper', 'plastic', 'metal', 'yard']),
        name: 'Waste Industries',
        phone: '615-350-5901',
        pickup: true,
        website: 'https://wasteindustries.com'
    },
    {
        // TODO: These are secure electronics disposal (different from normal electronics)
        // Also via mail :(
        dropoff: false,
        fees: true,
        secure: true,
        items: getSharedItems(['paper', 'plastic', 'metal', 'yard']),
        name: 'Waste Industries',
        phone: '800-305-3475',
        pickup: true,
        website: 'https://www.greendisk.com'
    },
    /*
      SIMS operates at the municipal and business levels, not individuals
      http://www.simsrecycling.com/Services/Responsible-Recycling
    */
    // TODO: Googling "Secure paper shredding" returns more locations than here
    {
        // TODO: Verify range of services
        dropoff: true,
        fees: true,
        hours: 'Mon.-Fri. 8 a.m. to 5 p.m.',
        secure: true,
        items: [
          {name: 'external drives', category: 'electronics'},
          {name: 'cds', category: 'electronics'},
          {name: 'dvds', category: 'electronics'},
          {name: 'documents', category: 'paper'}
        ],
        location: '1741 Elm Hill Pike, Nashville, TN 37210',
        name: 'Richards & Richards',
        phone: '615-307-6090',
        pickup: true,
        website: 'https://www.richardsandrichards.com/secure-shredding/'
    },
    /*
      Iron Mountain is business disposal
      http://www.ironmountain.com/
    */
    {
        // TODO: Shredit also does business
        dropoff: false,
        fees: true,
        hours: 'Fri. 8 a.m. to 2:30 p.m.',
        secure: true,
        items: [
          {name: 'external drives', category: 'electronics'},
          {name: 'documents', category: 'paper'}
        ],
        location: '802 Airpark Commerce Drive, Nashville, TN  37217',
        name: 'Shredit',
        phone: '615-208-7000',
        website: 'https://www.shredit.com/en-us/paper-shredding-nashville'
    },
    {
        dropoff: true,
        fees: false,
        hours: 'Mon.-Fri. 8 a.m. to 2 p.m.',
        items: [{name: 'packaging foam', category: 'foam'}],
        location: '431 Allied Dr, Nashville, TN 37211',
        name: 'Home for Foam',
        phone: '615-832-6222',
        pickup: false,
        website: 'http://www.homeforfoam.com/efp-corp-nashville'
    },
  /*
    NOTE: Bordeaux Mulch Facility closed down December 10, 2016
  */
    {
        dropoff: true,
        fees: true,
        // TODO: Call and verify business hours, items accepted, pickup arrangement
        hours: 'Mon.-Fri. 7 a.m. to 4 p.m., Sat. 8 a.m. to 3 p.m.',
        items: getSharedItems(['yard']),
        location: '501 Crutcher St, Nashville, TN 37213',
        phone: '615-255-9462',
        pickup: true,
        name: 'Alternative Energy'
    },
    {
        // TODO: Call for hours, tire standards
        dropoff: true,
        fees: false,
        items: [
          {name: 'tires', category: 'automobile'}
        ],
        location: '1941 Cement Plant Rd, Nashville, TN 37208',
        name: 'Liberty Tire Recycling',
        phone: '615-727-5776',
        pickup: false,
        email: 'Tennessee@libertytire.com',
        website: 'http://libertytire.com/ContactUs/Locations/Nashville-TN.aspx.html'
    },
    {
        // TODO: They pay for silver recovered from x-rays
        // TODO: Call to verify arrangement, phone number, email
        dropoff: false,
        fees: false,
        items: [
          {name: 'x-ray film', category: 'hazardous'}
        ],
        name: 'BW Recycling',
        email: 'pickup@bwrecycling.com',
        phone: '877-217-7020',
        pickup: true,
        website: 'http://www.xrayfilmsrecycling.com/'
    }
]

// Next iteration include:
// An array of contact and location information. We _could_ pull this from
// the Google place API to avoid having to manually update it.
// An array of services, subdivided enough to see each set of items offered
// and including pricing, service notes, frequency for pickups, whether or
// not they pay you. A link to guidelines (or an extraction of them)

// Pare definition down to
// "glass", "tearable paper", "plastic containers", "plastic caps", "plastic bags" "cardboard", "nonferrous metals"
// "ferrous metals", "appliances" "furniture", "clothing", "shoes",
// "accessories", "cleaners", "water-based paint", "x-ray film", "brush",
// "leaves", (all the hazardous waste warrants it's own category)
// "grass clippings", "tires", "vehicle batteries", "electronics",
// "rechargeable batteries", "household batteries"
// "vegetables", "fruits", "meat"

export default recyclers
