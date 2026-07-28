// Lorain County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-28
//
// Every URL below was fetched and confirmed to resolve, and its content checked
// against the organization it claims to be, on the review date. Nothing here was
// guessed from a naming pattern. That rule is not pedantry — see the two traps
// under HOSTILE LOOKALIKES below, either of which a pattern-guessed directory
// would have shipped.
//
// ONE NOTABLE GAP, and it is the big one:
//
//   * THE COUNTY'S OWN PORTAL, loraincountyohio.gov, IS MISSING. Lorain runs
//     CivicPlus, and the host's robots.txt times out on most requests, so the
//     site could not be verified. The block is inconsistent — two deep pages
//     (/573/Economic-Development and /225/Workforce-Development-Agency) did
//     fetch and are included below — but the root, the Board of Commissioners,
//     Job & Family Services, Emergency Management, the Prosecuting Attorney,
//     the Clerk of Courts landing page and the county Port Authority / Land
//     Bank all live only there and none of them could be confirmed.
//
//     Everything the county portal would have provided is instead covered by
//     the individual offices' own .gov sites, which DID verify: Auditor,
//     Treasurer, Recorder, Engineer, Sheriff, Board of Elections, Public Health
//     and all four courts. So the directory is not thin — it is missing one
//     front door. Open loraincountyohio.gov in a browser, confirm it, and add
//     it. Do not paste an unverified guess for the county's own portal.
//
// HOSTILE LOOKALIKES — do not add any of these, ever:
//
//   * visitloraincounty.com LOOKS like the county tourism site and is not. The
//     domain now serves Indonesian-language online-gambling spam; it appears to
//     have expired and been re-registered. This is the single best argument in
//     this file for verifying rather than guessing.
//   * The Auditor is loraincountyauditor.gov and nothing else. Search surfaces
//     loraincountyauditor.com, loraincountyauditor.click,
//     loraincountyauditor.online, loraincountyauditors.org,
//     loraincountypropertysearch.com and lorainrecords.us — none are the
//     county. (The Auditor's staff email domain IS lcauditor.com; that one is
//     legitimate, just not a website.)
//   * loraincountycourt.us and loraincountycourt.org are not the county courts.
//   * loraincounty.com is a privately run community portal, NOT the county —
//     but probate.loraincounty.com genuinely is the Probate Court's own site,
//     verified by content, and is included.
//   * sheffieldlake.org is a parked GoDaddy for-sale page. The city is
//     sheffieldlake.net.
//   * amherstarea.com is a chamber of commerce in Amherst, MASSACHUSETTS, and
//     avonchamber.org is one in Avon, INDIANA. Neither is in Lorain County.
//
// DELIBERATE OMISSIONS:
//
//   * Kipton and the village of Rochester have no official websites at all;
//     searches return only Wikipedia, aggregators and Facebook pages.
//   * Rochester Township's site (rochesterohio.com) redirects HTTPS back to
//     plain HTTP in a loop and could not be fetched. Seventeen of Lorain's
//     eighteen townships are listed; that one is the gap.
//   * Olmsted Township appears on the Lorain County Township Association's own
//     member list but is in CUYAHOGA County, and is excluded.
//   * The Wellington Enterprise, Amherst News-Times and Oberlin News-Tribune
//     have ceased publication — lcnewspapers.com confirms it and redirects
//     readers to the Chronicle-Telegram.
//   * The Nord Center and The LCADA Way no longer exist under those names: they
//     merged in 2024 into Riveon Mental Health and Recovery, which is listed.
//   * Avon, Columbia Station, North Ridgeville and Sheffield Lake have no
//     independent libraries — they are branches of the Lorain Public Library
//     System and are not given separate entries.
//   * The MHARS Board (mharslc.org), North Ridgeville Chamber (nrchamber.com),
//     The Morning Journal (morningjournal.com), the Lorain County Visitors
//     Bureau (lcvb.org), the Lorain Lighthouse Foundation and WOBC-FM all
//     exist but could not be fetched — JavaScript interstitials, HTTP 403,
//     redirect loops or a TLS handshake failure. They are left out rather than
//     listed unverified.
//
// Vermilion straddles the Erie/Lorain line and its City Hall is on the Erie
// side; it is included because a large share of the city is in Lorain County
// and its municipal court's jurisdiction reaches into Brownhelm Township.
// Firelands Local (Erie/Lorain) and Black River Local (Ashland/Lorain) are
// listed for the same reason.

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Lorain County Auditor Property Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Lorain County Auditor", category: "Government", subcategory: "Auditor", url: "https://loraincountyauditor.gov/", description: "Office of Auditor J. Craig Snodgrass at the Lorain County Administration Building, 226 Middle Ave., Room 200 in Elyria, handling property valuation, dog licensing and weights and measures." },
  { name: "Lorain County Auditor GIS & Tax Map", category: "Government", subcategory: "GIS", url: "https://loraincountyauditor.gov/gis-tax-map", description: "The Auditor's GIS page, listing the map portal, printed map requests and the public data downloads in Excel, XML and SQLite that this project builds from." },
  { name: "Lorain County GIS Open Data", category: "Government", subcategory: "Mapping", url: "https://data-loraingis.opendata.arcgis.com/", description: "The Auditor's public ArcGIS Hub for exploring and downloading county GIS datasets, including tax parcels." },
  { name: "Lorain County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.voteloraincountyohio.gov/", description: "County elections board at 1985 North Ridge Rd. East in Lorain." },
  { name: "Lorain County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://loraincountysheriff.com/", description: "Office of Sheriff Jack M. Hall and the county correctional facility at 9896 Murray Ridge Rd. in Elyria." },
  { name: "Lorain County Court of Common Pleas", category: "Government", subcategory: "Courts", url: "https://www.loraincommonpleascourt.gov/", description: "General division trial court at 225 Court St. in Elyria, with six sitting judges." },
  { name: "Lorain County Domestic Relations & Juvenile Court", category: "Government", subcategory: "Courts", url: "https://www.lcdrc.org/", description: "Combined Domestic Relations and Juvenile divisions at 225 Court Street in Elyria." },
  { name: "Lorain County Probate Court", category: "Government", subcategory: "Courts", url: "https://probate.loraincounty.com/", description: "Common Pleas Probate Division under Judge James T. Walther, Justice Center, 225 Court Street Room 611 in Elyria; marriage applications by appointment." },
  { name: "Lorain County Clerk of Courts Online Dockets", category: "Government", subcategory: "Courts", url: "https://cp.onlinedockets.com/loraincp/", description: "Case docket search for the Court of Common Pleas, operated by the Lorain County Clerk of Courts." },
  { name: "Lorain County Recorder", category: "Government", subcategory: "County", url: "https://www.loraincountyrecorder.gov/", description: "Office of Recorder Mike Doran at 226 Middle Ave. Room 102 in Elyria, keeping land records and veterans' discharge documents." },
  { name: "Lorain County Treasurer", category: "Government", subcategory: "County", url: "https://loraincountytreasurer.gov/", description: "Office of Treasurer Daniel J. Talarek, Lorain County Administration Building, 226 Middle Ave. Room 201 in Elyria." },
  { name: "Lorain County Engineer", category: "Government", subcategory: "County", url: "https://www.loraincountyengineer.gov/", description: "Office of County Engineer Ken Carney, P.E., P.S., at 247 Hadaway St. in Elyria, responsible for county roads and bridges." },
  { name: "Murray Ridge Center", category: "Government", subcategory: "County", url: "https://www.murrayridgecenter.org/", description: "The Lorain County Board of Developmental Disabilities, at 1091 Infirmary Road in Elyria, serving more than 3,000 individuals and families a year." },
  { name: "Via Lorain County", category: "Government", subcategory: "Transit", url: "https://city.ridewithvia.com/lorain", description: "On-demand microtransit run by Lorain County Transit with Via, serving Lorain and Elyria on weekdays at $2 a ride." },
  { name: "Lorain County Township Association", category: "Government", subcategory: "Townships", url: "https://www.lcta.us/", description: "Association of the county's townships, with a directory linking each member township's own site." },
  { name: "Avon Lake Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.avonlakecourt.com/", description: "Court at 32855 Walker Road in Avon Lake, with jurisdiction over Avon, Avon Lake and Sheffield Village." },
  { name: "Lorain Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.cityoflorain.org/219/Lorain-Municipal-Court", description: "Municipal court at 200 West Erie Avenue in Lorain, covering the city plus Sheffield Lake and Sheffield Township." },
  { name: "Oberlin Municipal Court", category: "Government", subcategory: "Courts", url: "https://oberlinmunicipalcourt.org/", description: "Municipal court at 85 South Main Street in Oberlin, handling traffic, criminal and civil cases." },
  { name: "Vermilion Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.cityofvermilionohio.gov/2025-Main-Menu-Folder/2025-Municipal-Court", description: "Court at 687 Decatur Street in Vermilion, with jurisdiction reaching into Brownhelm Township in Lorain County." },
  { name: "City of Elyria", category: "Government", subcategory: "City", url: "https://www.cityofelyria.org/", description: "County seat city government at 131 Court Street in Elyria." },
  { name: "City of Lorain", category: "Government", subcategory: "City", url: "https://www.cityoflorain.org/", description: "City government at 200 W. Erie Avenue in Lorain, including the Lorain Listens non-emergency reporting system." },
  { name: "City of Avon", category: "Government", subcategory: "City", url: "https://www.cityofavon.com/", description: "City government, with Avon City Hall at 36080 Chester Road." },
  { name: "City of Avon Lake", category: "Government", subcategory: "City", url: "https://www.avonlake.org/", description: "City government, which also operates Avon Lake Regional Water." },
  { name: "City of North Ridgeville", category: "Government", subcategory: "City", url: "https://www.nridgeville.org/", description: "City government, with department pages for the Mayor's Office, Council, Fire, Police and Public Works." },
  { name: "City of Amherst", category: "Government", subcategory: "City", url: "https://www.amherstohio.org/", description: "City government at 206 South Main Street, branded the Sandstone Center of the World, with council meetings streamed live." },
  { name: "City of Oberlin", category: "Government", subcategory: "City", url: "https://www.cityofoberlin.com/", description: "City government at Oberlin City Hall, 85 South Main Street." },
  { name: "City of Sheffield Lake", category: "Government", subcategory: "City", url: "https://www.sheffieldlake.net/", description: "City government at 609 Harris Rd. in Sheffield Lake. Note the .net domain; sheffieldlake.org is a parked page." },
  { name: "City of Vermilion", category: "Government", subcategory: "City", url: "https://www.cityofvermilionohio.gov/Home", description: "City government at 5511 Liberty Avenue; the city straddles the Erie and Lorain county line." },
  { name: "Village of Wellington", category: "Government", subcategory: "Village", url: "https://www.villageofwellington.com/", description: "Village government, with pages for the Mayor and Council, Finance Director, Planning Commission and Zoning Board of Appeals." },
  { name: "Village of LaGrange", category: "Government", subcategory: "Village", url: "https://www.villageoflagrangeohio.gov/", description: "Village government at 301 Liberty Street, a rural village in southern Lorain County founded in 1875." },
  { name: "Village of Grafton", category: "Government", subcategory: "Village", url: "https://villageofgrafton.org/", description: "Village government at 960 Main Street, dispatched through the Lorain County 911 Dispatch Center." },
  { name: "Village of South Amherst", category: "Government", subcategory: "Village", url: "https://villageofsouthamherst.com/", description: "Village government at 103 W. Main St., serving about 1,581 residents between Amherst and Oberlin." },
  { name: "Sheffield Village", category: "Government", subcategory: "Village", url: "https://sheffieldvillage.com/", description: "Village government, with Village Hall at 4340 Colorado Avenue." },
  { name: "Amherst Township", category: "Government", subcategory: "Township", url: "https://www.amhersttownship.us/", description: "Township offices at 7530 Oberlin Road, Elyria." },
  { name: "Brighton Township", category: "Government", subcategory: "Township", url: "https://www.brightontownshipohio.us/", description: "Township offices at 21451 State Rt. 511, Wellington; the township has the fewest miles of township road in the county." },
  { name: "Brownhelm Township", category: "Government", subcategory: "Township", url: "https://www.brownhelm.us/", description: "Township offices at 1940 North Ridge Road, Vermilion." },
  { name: "Camden Township", category: "Government", subcategory: "Township", url: "https://www.camdentwp.us/", description: "Township established in 1835, offices at 50679 St. Rt. 303, Oberlin, with trustee meetings the first and third Monday." },
  { name: "Carlisle Township", category: "Government", subcategory: "Township", url: "https://www.carlisletwpoh.gov/", description: "Township offices at 11950 LaGrange Rd. in Elyria." },
  { name: "Columbia Township", category: "Government", subcategory: "Township", url: "https://www.columbiatwp.us/", description: "Township established in 1807, offices at 25496 Royalton Road, Columbia Station." },
  { name: "Eaton Township", category: "Government", subcategory: "Township", url: "https://www.eatontownship.org/", description: "Township Hall at 12043 S. Avon Belden Rd., Grafton, serving about 5,750 residents under three trustees." },
  { name: "Elyria Township", category: "Government", subcategory: "Township", url: "https://sites.google.com/view/elyriatownship/home", description: "Township complex at 41416 Griswold Road, Elyria, with Fire, Road, Zoning and Fiscal Officer pages." },
  { name: "Grafton Township", category: "Government", subcategory: "Township", url: "https://www.graftontwp.us/", description: "Township offices at 17109 State Route 83, Grafton." },
  { name: "Henrietta Township", category: "Government", subcategory: "Township", url: "https://www.henriettaohio.org/", description: "Township established in 1827, offices at 12050 Vermilion Rd., Amherst." },
  { name: "Huntington Township", category: "Government", subcategory: "Township", url: "https://www.huntingtontwp.org/", description: "Township hall at 45955 New London-Lafayette Road, Wellington; trustees meet the first and third Monday." },
  { name: "LaGrange Township", category: "Government", subcategory: "Township", url: "https://www.lagrangetownshipohio.net/", description: "Township founded in 1825, offices at 40801 Biggs Rd., LaGrange." },
  { name: "New Russia Township", category: "Government", subcategory: "Township", url: "https://www.newrussiatownship-oh.gov/", description: "Township offices at 46300 Butternut Ridge Road, Oberlin, with trustee minutes, zoning records and cemetery records." },
  { name: "Penfield Township", category: "Government", subcategory: "Township", url: "https://www.penfieldtownship.com/", description: "Township established in 1820, offices at 41012 State Route 18, Wellington." },
  { name: "Pittsfield Township", category: "Government", subcategory: "Township", url: "https://www.pittsfieldtwp.us/", description: "Township offices at 16940 OH-58, Oberlin." },
  { name: "Sheffield Township", category: "Government", subcategory: "Township", url: "https://www.sheffieldtownship.com/", description: "Township established in 1824, offices at 5166 Clinton Avenue, Lorain." },
  { name: "Wellington Township", category: "Government", subcategory: "Township", url: "https://www.wellingtontownshipohio.gov/", description: "Township offices at 105 Maple Street, Wellington, serving about 6,000 residents." },
  // ---------- Education ----------
  { name: "Oberlin College and Conservatory", category: "Education", subcategory: "College", url: "https://www.oberlin.edu", description: "Private liberal arts college and conservatory, with arts and sciences admissions at 38 E. College St. and conservatory admissions at 39 W. College St. in Oberlin." },
  { name: "Lorain County Community College", category: "Education", subcategory: "Community College", url: "https://www.lorainccc.edu/about/", description: "Public community college founded in 1963 at 1005 N. Abbe Rd. in Elyria. The homepage rejects automated requests, so this About page is the verified entry point." },
  { name: "Lorain County JVS", category: "Education", subcategory: "Career Center", url: "https://www.lcjvs.com/", description: "County joint vocational school at 15181 State Route 58 in Oberlin, enrolling about 1,194 students." },
  { name: "Educational Service Center of Lorain County", category: "Education", subcategory: "ESC", url: "https://www.esclc.org/", description: "Regional educational service center at 1885 Lake Avenue in Elyria." },
  { name: "Elyria City School District", category: "Education", subcategory: "K-12", url: "https://www.elyriaschools.org/district", description: "District offices at 42101 Griswold Road in Elyria." },
  { name: "Lorain City School District", category: "Education", subcategory: "K-12", url: "https://www.lorainschools.org/", description: "District of about 6,200 students, with offices at 2601 Pole Avenue in Lorain." },
  { name: "Avon Local Schools", category: "Education", subcategory: "K-12", url: "https://www.avonlocalschools.org/", description: "District offices at 35600 Bentley Drive in Avon." },
  { name: "Avon Lake City Schools", category: "Education", subcategory: "K-12", url: "https://www.avonlakecityschools.org/", description: "District offices at 175 Avon Belden Road, running the high school, Learwood Middle, Troy Intermediate and three elementaries." },
  { name: "North Ridgeville City Schools", category: "Education", subcategory: "K-12", url: "https://www.nrcs.net/", description: "District offices at 34620 Bainbridge Road in North Ridgeville." },
  { name: "Amherst Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.amherstk12.org/", description: "District offices at 550 Milan Avenue in Amherst." },
  { name: "Oberlin City Schools", category: "Education", subcategory: "K-12", url: "https://www.oberlinschools.net/", description: "District offices at 153 North Main Street in Oberlin." },
  { name: "Sheffield-Sheffield Lake City Schools", category: "Education", subcategory: "K-12", url: "https://www.sheffieldschools.org/", description: "District offices at 1824 Harris Road in Sheffield Village." },
  { name: "Firelands Local Schools", category: "Education", subcategory: "K-12", url: "https://www.firelandsschools.org/", description: "District of over 1,700 students drawn from both Erie and Lorain counties, with board meetings at 112 North Lake Street in South Amherst." },
  { name: "Keystone Local Schools", category: "Education", subcategory: "K-12", url: "https://www.keystonelocalschools.org/", description: "District office and elementary at 531 Opportunity Way in LaGrange, with the middle and high schools on the same road." },
  { name: "Wellington Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.wellingtonvillageschools.org/", description: "District offices at 305 Union St. in Wellington, serving about 860 students across three schools." },
  { name: "Midview Local Schools", category: "Education", subcategory: "K-12", url: "https://www.midviewk12.org/", description: "District offices at 13050 Durkee Rd. in Grafton." },
  { name: "Columbia Local Schools", category: "Education", subcategory: "K-12", url: "https://www.columbia.k12.oh.us/", description: "Home of the Raiders, with its administration center at 25796 Royalton Road in Columbia Station." },
  { name: "Clearview Local Schools", category: "Education", subcategory: "K-12", url: "https://www.clearview.k12.oh.us/", description: "Lorain County district whose schools include Durling Middle School; the district publishes no street address on its site." },
  { name: "Vermilion Local Schools", category: "Education", subcategory: "K-12", url: "https://www.vermilionschools.org/", description: "District straddling the Lorain and Erie county line, including the Little Anchors preschool programme in Vermilion Elementary." },
  { name: "Black River Local Schools", category: "Education", subcategory: "K-12", url: "https://www.blackriverschools.org/", description: "District offices at 257 County Rd. 40 in Sullivan, with territory extending into southern Lorain County." },
  { name: "Lorain Public Library System", category: "Education", subcategory: "Library", url: "https://www.lorainpubliclibrary.org", description: "Six-branch system headquartered at 351 W. Sixth Street in Lorain, with Avon, Columbia, Domonkas, North Ridgeville and South Lorain branches." },
  { name: "Elyria Public Library System", category: "Education", subcategory: "Library", url: "https://www.elyrialibrary.org/", description: "Multi-location library system serving Elyria, offering notary service at its locations." },
  { name: "Avon Lake Public Library", category: "Education", subcategory: "Library", url: "https://www.alpl.org", description: "Independent municipal library at 32649 Electric Blvd. in Avon Lake." },
  { name: "Amherst Public Library", category: "Education", subcategory: "Library", url: "https://amherstpubliclibrary.org/", description: "Public library at 221 Spring Street in Amherst." },
  { name: "Oberlin Public Library", category: "Education", subcategory: "Library", url: "https://www.oberlinlibrary.org", description: "Public library in Oberlin, with meeting rooms, home delivery and a catalogue hosted at oberlin.tlcdelivers.com." },
  { name: "Herrick Memorial Library", category: "Education", subcategory: "Library", url: "https://www.herrickliboh.org", description: "Wellington's public library at 101 Willard Memorial Square." },
  { name: "Grafton-Midview Public Library", category: "Education", subcategory: "Library", url: "https://www.graftonpl.lib.oh.us", description: "Public library serving Grafton and the Midview district." },
  // ---------- Health ----------
  { name: "Lorain County Public Health", category: "Health", subcategory: "Public Health", url: "https://www.loraincountyhealth.com/", description: "Nationally accredited county health district at 9880 Murray Ridge Rd. in Elyria, issuing birth and death certificates and running WIC, immunisation and food safety programmes." },
  { name: "Mercy Health — Lorain Hospital", category: "Health", subcategory: "Hospital", url: "https://www.mercy.com/locations/hospitals/lorain/mercy-regional-medical-center", description: "338-bed full-service hospital at 3700 Kolbe Rd. in Lorain, formerly Mercy Regional Medical Center." },
  { name: "Mercy Health — Allen Hospital", category: "Health", subcategory: "Hospital", url: "https://www.mercy.com/locations/hospitals/lorain/mercy-allen-hospital", description: "25-bed community hospital at 200 W. Lorain St. in Oberlin, operating since 1907." },
  { name: "University Hospitals Elyria Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.uhhospitals.org/locations/uh-elyria-medical-center/about", description: "287-bed hospital at 630 East River Street in Elyria." },
  { name: "UH Avon Rehabilitation Hospital", category: "Health", subcategory: "Hospital", url: "https://www.uhhospitals.org/locations/uh-avon-rehabilitation-hospital", description: "Acute rehabilitation hospital at 37900 Chester Rd. in Avon, a University Hospitals and Kindred joint venture." },
  { name: "Cleveland Clinic Avon Hospital", category: "Health", subcategory: "Hospital", url: "https://my.clevelandclinic.org/locations/directions/445-avon-hospital-at-richard-e-jacobs-campus", description: "Full-service hospital at the Richard E. Jacobs Campus, 33300 Cleveland Clinic Blvd. in Avon." },
  { name: "Cleveland Clinic Rehabilitation Hospital, Avon", category: "Health", subcategory: "Hospital", url: "https://my.clevelandclinic.org/locations/directions/415-cleveland-clinic-rehabilitation-hospital-avon", description: "Rehabilitation hospital at 33355 Health Campus Blvd. in Avon, covering neurology, orthopaedics and spinal cord injury." },
  { name: "Riveon Mental Health and Recovery", category: "Health", subcategory: "Mental Health", url: "https://riveonhealth.org/", description: "Behavioural health and addiction provider at 6140 S. Broadway in Lorain, formed by the 2024 merger of The Nord Center and The LCADA Way." },
  { name: "Lorain County Health & Dentistry", category: "Health", subcategory: "Clinic", url: "https://lorainhealth-dentistry.org/", description: "Federally qualified health center with six sites, including 1205 Broadway in Lorain and 801 Middle Ave. in Elyria." },
  { name: "Lorain County Free Clinic", category: "Health", subcategory: "Clinic", url: "https://lcfreeclinic.org/", description: "Free clinic for the uninsured at 5040 Oberlin Ave. in Lorain." },
  // ---------- Business & Economy ----------
  { name: "Lorain County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.loraincountychamber.com/", description: "County-wide chamber founded in 1988 at 226 Middle Ave. in Elyria, representing over 600 member businesses." },
  { name: "North Coast Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://northcoastchamber.org/", description: "Chamber serving Avon, Avon Lake, Sheffield Village and Sheffield Lake; it publishes an email contact rather than a street address." },
  { name: "Oberlin Business Partnership", category: "Business & Economy", subcategory: "Chamber", url: "https://www.oberlinbusinesspartnership.com/", description: "Oberlin's chamber-equivalent business organisation at 23 East College Street, running business roundtables and a town gift card." },
  { name: "Main Street Amherst", category: "Business & Economy", subcategory: "Downtown Development", url: "https://mainstreetamherst.org/", description: "Downtown revitalisation organisation at 255 Park Avenue in Amherst." },
  { name: "Main Street Wellington", category: "Business & Economy", subcategory: "Downtown Development", url: "https://www.mainstreetwellington.org/", description: "Nonprofit at 118 W. Herrick Avenue in Wellington, organising community events and business mixers." },
  { name: "Lorain Growth Corporation", category: "Business & Economy", subcategory: "Downtown Development", url: "https://loraingrowth.org/", description: "Main Street America member at 301 Broadway in Lorain, coordinating downtown improvement and promoting Lorain as the International City." },
  { name: "Elyria Community Partnership", category: "Business & Economy", subcategory: "Economic Development", url: "https://elyriatogether.org/", description: "Nonprofit working on downtown revitalisation, commercial grant programmes and neighbourhood housing in Elyria." },
  { name: "Lorain Port & Finance Authority", category: "Business & Economy", subcategory: "Port Authority", url: "https://www.lorainport.com/", description: "City port authority at 319 Black River Lane in Lorain, handling development financing, boat tours and a water taxi. Distinct from the county-level port authority." },
  { name: "Lorain County Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.loraincountyohio.gov/573/Economic-Development", description: "County division administering revolving loan funds, enterprise zone abatements, TIF and a brownfield coalition." },
  { name: "Lorain County Growth Partnership", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.loraincountychamber.com/partners/", description: "Collaborative of the commissioners, the Chamber, LCCC, the JVS, OhioMeansJobs and the SBDC; it has no site of its own and lives on the Chamber's partners page." },
  { name: "OhioMeansJobs Lorain County", category: "Business & Economy", subcategory: "Workforce", url: "https://www.loraincountyworks.com/", description: "Workforce center at 42495 North Ridge Road in Elyria, offering job referral, career counselling and employer recruitment, with priority for veterans." },
  { name: "Lorain County Workforce Development Agency", category: "Business & Economy", subcategory: "Workforce", url: "https://www.loraincountyohio.gov/225/Workforce-Development-Agency", description: "County agency for WIOA adult, dislocated worker and employer services." },
  { name: "Ohio SBDC at Lorain County Community College", category: "Business & Economy", subcategory: "Small Business", url: "https://www.lorainccc.edu/business/sbdc/", description: "SBA-funded center at 1005 N. Abbe Rd. in Elyria offering no-cost consulting on business planning, financing and exporting." },
  { name: "Lorain County Small Business Development Center", category: "Business & Economy", subcategory: "Small Business", url: "https://www.loraincountysmallbusiness.com/", description: "Public-facing SBDC site for free business advising, with academies for new and established owners." },
  // ---------- Community & Social ----------
  { name: "United Way of Greater Lorain County", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.uwloraincounty.org/", description: "Nonprofit at 642 Broadway in Lorain, operating 211 First Call for Help and free tax preparation." },
  { name: "Community Foundation of Lorain County", category: "Community & Social", subcategory: "Community Foundation", url: "https://www.peoplewhocare.org/", description: "Grantmaking foundation at 9080 Leavitt Road in Elyria, holding over $168M across 761 endowment funds." },
  { name: "Second Harvest Food Bank of North Central Ohio", category: "Community & Social", subcategory: "Food Bank", url: "https://secondharvestfoodbank.org/", description: "Food bank at 5510 Baumhart Road in Lorain, working with over 130 partner charities across four counties." },
  { name: "Lorain County Community Action Agency", category: "Community & Social", subcategory: "Community Action", url: "https://www.lccaa.net/", description: "Agency at 936 Broadway Avenue in Lorain, running HEAP and PIPP energy assistance, a produce center, Head Start and the Pathways HUB." },
  { name: "Lorain County Office on Aging", category: "Community & Social", subcategory: "Seniors", url: "https://lcooa.org/", description: "Senior services agency with offices at 534 Abbe Rd. S. in Elyria and 105 Maple St. in Wellington, covering benefits counselling, nutrition and medical transport." },
  { name: "Lorain County Veterans Service Commission", category: "Community & Social", subcategory: "Veterans", url: "https://www.loraincountyveterans.com/", description: "County veterans agency at 1230 North Abbe Road in Elyria, handling VA claims, medical transportation and emergency assistance." },
  { name: "Neighborhood Alliance", category: "Community & Social", subcategory: "Nonprofit", url: "https://myneighborhoodalliance.org/", description: "Nonprofit founded in 1927 at 265 Washington Ave. in Elyria, running senior meals, childcare and a 24-hour family shelter." },
  { name: "Genesis House", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.genesishouseshelter.org/", description: "Domestic violence shelter and advocacy programme at 2929 West River Rd. in Elyria, with a 24-hour crisis line." },
  { name: "El Centro de Servicios Sociales", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.lorainelcentro.com/", description: "Latino advocacy and social services nonprofit at 2800 Pearl Avenue in Lorain, serving clients in English and Spanish." },
  { name: "YWCA of Elyria and Lorain", category: "Community & Social", subcategory: "Nonprofit", url: "https://ywcalorain.org/", description: "YWCA at 200 9th St. in Lorain, running supportive housing for low-income women and a community anti-hate taskforce." },
  { name: "French Creek Family YMCA", category: "Community & Social", subcategory: "YMCA", url: "https://www.clevelandymca.org/locations/french-creek-family-ymca/", description: "YMCA of Greater Cleveland branch at 2010 Recreation Lane in Avon, with a competition pool, gymnasium, indoor track and after-school childcare." },
  { name: "Greater Cleveland Habitat for Humanity", category: "Community & Social", subcategory: "Housing", url: "https://www.clevelandhabitat.org/", description: "Habitat affiliate whose homeownership programme covers Lorain County and which runs a ReStore at 300 Rice Industrial Parkway in Amherst." },
  // ---------- Recreation & Tourism ----------
  { name: "Lorain County Metro Parks", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.loraincountymetroparks.com/", description: "Park district established in 1957, with offices at 12882 Diagonal Road in LaGrange, managing 28 reservations and over 110 miles of trail." },
  { name: "Carlisle Reservation", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.loraincountymetroparks.com/carlisle-reservation", description: "The largest Metro Parks reservation at 1,917 acres, with a visitor center at 12882 Diagonal Road in LaGrange, an equestrian center and an observatory." },
  { name: "French Creek Reservation", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.loraincountymetroparks.com/french-creek-reservation", description: "450-acre reservation with a nature center at 4530 Colorado Ave. in Sheffield Village, home to French Creek Theatre and the Burrell Homestead." },
  { name: "Black River Reservation", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.loraincountymetroparks.com/black-river-reservation", description: "Reservation with a 6.5-mile paved Bridgeway Trail and a 1,000-foot bridge that crosses the Black River twice." },
  { name: "Lakeview Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.loraincountymetroparks.com/lakeview-park", description: "20-acre Lake Erie park at 1800 West Erie Avenue in Lorain, with a beach, bathhouse and a historic rose garden of about 2,500 roses." },
  { name: "Miller Nature Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://www.loraincountymetroparks.com/miller-nature-preserve", description: "145-acre preserve at 2739 Center Road in Avon, with a 5,000-square-foot conservatory of orchids and tropical plants." },
  { name: "Splash Zone", category: "Recreation & Tourism", subcategory: "Recreation Center", url: "https://www.loraincountymetroparks.com/splash-zone", description: "Metro Parks aquatic and fitness center at 95 West Hamilton Road in Oberlin, with an eight-lane indoor pool and outdoor waterslides." },
  { name: "Findley State Park", category: "Recreation & Tourism", subcategory: "State Park", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/findley-state-park", description: "838-acre state park near Wellington with a 93-acre lake, about 16 miles of trail and 1.6 miles of the Buckeye Trail." },
  { name: "Lorain County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://loraincountyfair.com/", description: "County fair at 23000 Fairgrounds Rd. in Wellington, run by the senior and junior fair boards each August." },
  { name: "Lorain Palace Theatre", category: "Recreation & Tourism", subcategory: "Venue", url: "https://lorainpalace.com/", description: "Historic 1,400-seat theatre at 617 Broadway in Lorain, hosting concerts, plays, recitals and free film screenings." },
  { name: "Black River Landing", category: "Recreation & Tourism", subcategory: "Venue", url: "https://www.lorainport.com/facility-rentals/blackriverlanding/", description: "25-acre waterfront park and event venue at 319 Black River Lane in Lorain, opened in 2003 on land donated by LTV Steel." },
  { name: "Rockin' on the River", category: "Recreation & Tourism", subcategory: "Event", url: "https://www.rockinontheriver.com/", description: "Summer concert series at Black River Landing in Lorain, billed as Northeast Ohio's longest-running outdoor concert series." },
  { name: "Port Lorain Marina", category: "Recreation & Tourism", subcategory: "Marina", url: "https://portlorainmarina.com/", description: "Lake Erie marina at 301 Lakeside Ave. in Lorain, offering transient, seasonal and annual slips plus dry storage." },
  { name: "Allen Memorial Art Museum", category: "Recreation & Tourism", subcategory: "Museum", url: "https://amam.oberlin.edu/", description: "Oberlin College art museum at 87 North Main Street, always free to visit, with over 15,000 works and notable Dutch, Flemish and Japanese holdings." },
  { name: "Oberlin Heritage Center", category: "Recreation & Tourism", subcategory: "Museum", url: "https://oberlinheritagecenter.org/", description: "Oberlin's historical society at 73 1/2 S. Professor St., offering guided history and architecture walks." },
  { name: "Lorain Historical Society", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.loraincityhistory.org/", description: "Formerly the Black River Historical Society, at 329 West 10th Street in Lorain, operating the Moore House Museum." },
  { name: "Lorain County Historical Society", category: "Recreation & Tourism", subcategory: "Museum", url: "https://lchs.org/", description: "Operates the free Lorain County History Center at 284 Washington Avenue and the Hickories Museum at 509 Washington Avenue in Elyria." },
  { name: "Common Ground Center", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://commongroundcenter.org/", description: "30-acre outdoor education and retreat center at 14240 Baird Road in Oberlin, with zipline canopy tours, tree climbing and summer camps." },
  // ---------- News & Media ----------
  { name: "The Chronicle-Telegram", category: "News & Media", subcategory: "Newspaper", url: "https://chroniclet.com/", description: "Daily newspaper covering Elyria and Lorain County; most articles sit behind a subscription paywall." },
  { name: "The Oberlin Review", category: "News & Media", subcategory: "Newspaper", url: "https://oberlinreview.org/", description: "Oberlin College student newspaper founded in 1874, free to read, with archives and a weekly podcast." },
  { name: "Pulse Magazine", category: "News & Media", subcategory: "Magazine", url: "https://www.pulselorainmag.com/", description: "Digital magazine covering Lorain County arts, dining, business and events, produced with LCCC, the JVS and the county Chamber." },
  { name: "WOBL 1320 AM / 107.7 FM", category: "News & Media", subcategory: "Radio", url: "https://www.woblradio.com/", description: "Country station branded Lorain County Country, broadcasting from Oberlin since 1971." },
  { name: "WDLW 1380 AM / 98.9 FM", category: "News & Media", subcategory: "Radio", url: "https://wdlwradio.com/", description: "Oldies station branded Kool Kat, locally owned since 2002 and sister station to WOBL in Oberlin." },
];
