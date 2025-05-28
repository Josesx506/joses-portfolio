import agu_logo from '@/images/society_logos/agu_logo.png';
import gsa_logo from '@/images/society_logos/gsa_logo.jpg';
import image_logo from '@/images/society_logos/image_logo.webp';
import sageep_logo from '@/images/society_logos/sageep_logo.png';
import scec_logo from '@/images/society_logos/scec_logo.png';
import ssa_logo from '@/images/society_logos/ssa_logo.png';

const schools = [
    {   
        id: 'edu-001',
        university: "UA",
        period: "2023 - Present",
        description: {
            major: "Geophysics",
            minor: "Comp. Sci.",
            degree: "Ph.D.",
            summary: "University of Arizona. Pivoted from ML to web development. Completed 2 internships with Seneca Resources and Los Alamos National Lab (LANL)."
        }
    },
    {   
        id: 'edu-002',
        university: "LSU",
        period: "2021 - 2023",
        description: {
            major: "Geophysics",
            minor: null,
            degree: "MS.",
            summary: "Louisiana State University. Picked up scientific programming and ML with Python. Completed 2 internships with Google X and Chevron."
        }
    },
    {   
        id: 'edu-003',
        university: "Unilag",
        period: "2012 - 2017",
        description: {
            major: "Geology",
            minor: null,
            degree: "B.Sc.",
            summary: "University of Lagos. Graduated Summa Cum Laude. Completed 2 internships with ExxonMobil and Chevron."
        }
    },
]

const conferences = [
    {
        year: '2024',
        events: [
            {
                id: "2024-01",
                title: "Hidden Earthquake Sources beneath the San Fernando Valley, California Detected by an Urban Nodal Array.",
                authors: "Persaud, P.,| Omojola, J.,| and the SFV Installation Team",
                image: agu_logo,
                type: "Oral",
                url: "https://ui.adsabs.harvard.edu/abs/2024AGUFMNS42A..05P/abstract"
            },
            {
                id: "2024-02",
                title: "Integrated Subsurface Characterization of Shear Zones in Salt Domes: Implications for Future Underground Energy Storage.",
                authors: "Omojola, J.,| Persaud, P",
                image: gsa_logo,
                type: "Oral",
                url: "https://gsa.confex.com/gsa/2024AM/webprogram/Paper401458.html"
            },
            {
                id: "2024-03",
                title: "Expanding the Seismicity Catalog in San Fernando Valley with Dense Array Recordings of Micro-Earthquakes.",
                authors: "Omojola, J.,| Persaud, P",
                image: scec_logo,
                type: "Poster",
                url: "https://central.scec.org/publication/13721"
            },
            {
                id: "2024-04",
                title: "Evaluating the Performance of Machine Learning Models in Detecting Salt Dome Earthquakes.",
                authors: "Omojola, J.,| Persaud, P",
                image: sageep_logo,
                type: "Poster",
                url: "https://www.eegs.org/sageep-2024-abstracts-sessions"
            },
            {
                id: "2024-05",
                title: "Searching for Blind Faults Beneath Metropolitan Los Angeles: Preliminary Results from the 2023 San Fernando Valley Array.",
                authors: "Persaud, P.,| Omojola, J.,| A. Juarez-Zuñiga,| R. Clayton,| San Fernando Valley Nodal Array Team",
                image: ssa_logo,
                type: "Poster",
                url: "https://meetings.seismosoc.org/wp-content/uploads/2024/02/SSA-Program-2024-Rev-I_Technical-Program.pdf"
            },
        ]
    },
    {
        year: '2023',
        events: [
            {
                id: "2023-01",
                title: "Evaluating the Performance of Machine Learning Models in Detecting Salt Dome Earthquakes.",
                authors: "Omojola, J.,| Persaud, P",
                image: image_logo,
                type: "Poster",
                url: "https://www.imageevent.org/"
            },
        ]
    },
    {
        year: '2022',
        events: [
            {
                id: "2022-01",
                title: "The Role of Geophysics in Improving the Safety of Underground Storage in a Carbon-Neutral Future.",
                authors: "Omojola, J.,| Persaud, P",
                image: agu_logo,
                type: "Oral",
                url: "https://par.nsf.gov/servlets/purl/10410018"
            },
            {
                id: "2022-02",
                title: "Utilizing Automated Picks from the 2020 Mw 6.5 Monte Cristo Range Earthquake Sequence to Image the Aftershock Region.",
                authors: "Omojola, J.,| Persaud, P.,| Nardoni, C.,| Catchings, R",
                image: scec_logo,
                type: "Poster",
                url: "https://central.scec.org/publication/12075"
            },
            {
                id: "2022-03",
                title: "Imaging Seismic Attenuation across the Northern Los Angeles Basins with Dense Arrays.",
                authors: "Nardoni, C.,| Persaud, P.,| Omojola, J.,| Clayton R",
                image: scec_logo,
                type: "Poster",
                url: "https://central.scec.org/meetings/2022/am/poster/248"
            },
        ]
    },
    {
        year: '2021',
        events: [
            {
                id: "2021-01",
                title: "Monitoring Subsurface Changes in Salt Dome Caverns using Finescale Microseismicity Variations.",
                authors: "Omojola, J.,| Persaud, P.,| Catchings, R.,| Goldman, M",
                image: agu_logo,
                type: "Oral",
                url: "https://par.nsf.gov/servlets/purl/10323700"
            },
            {
                id: "2021-02",
                title: "Analysis of Microearthquakes to Identify Weak Points in the Subsurface as Observed from a Salt Dome Study.",
                authors: "Omojola, J.,| Persaud, P.,| Catchings, R.,| Goldman, M",
                image: gsa_logo,
                type: "Oral",
                url: "https://gsa.confex.com/gsa/2021AM/webprogram/Paper370729.html"
            },
            {
                id: "2021-03",
                title: "Searching for Hidden Microearthquakes using Data-based, Physics-based, and Hybrid Models: Implications for Salt Dome Monitoring.",
                authors: "Omojola, J.,| Persaud, P.,| Catchings, R.,| Goldman, M",
                image: scec_logo,
                type: "Poster",
                url: "https://central.scec.org/meetings/2021/am/poster/182"
            }
        ]
    },
    {
        year: '2020',
        events: [
            {
                id: "2020-01",
                title: "An Earthquake Detection Algorithm for Local Seismic Monitoring of Underground Caverns: The Sorrento Salt Dome, Louisiana Case Study.",
                authors: "Omojola, J.,| Persaud, P.,| Catchings, R.,| Goldman, M",
                image: agu_logo,
                type: "Poster",
                url: "https://agu.confex.com/agu/fm20/meetingapp.cgi/Paper/687309"
            },
        ]
    }
]


export { conferences, schools };
