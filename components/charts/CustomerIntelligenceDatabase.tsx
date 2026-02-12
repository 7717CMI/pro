'use client'

interface CustomerData {
  // Company Information
  companyName: string
  yearEstablished: string
  headquarters: string
  noOfEmployees: string
  revenueTurnover: string
  // Contact Details
  keyContactPerson: string
  designationRole: string
  emailAddress: string
  phoneWhatsApp: string
  linkedInProfile: string
  websiteUrl: string
  // Product Required
  productCategoriesRequired: string
  annualSeasonalQuantityRequired: string
  purchaseFrequency: string
  // Customer Capacity & Operations
  salesChannelType: string
  regionSpecificOperation: string
  // Customer Engagement Level
  engagementWithSuppliers: string
  preferredContactMethod: string
  responseSpeed: string
}

// Sample data with 20 customers - Global Probiotics Market
const sampleCustomerData: CustomerData[] = [
  // --- North America ---
  {
    companyName: 'GutFlora Biosciences Inc.',
    yearEstablished: '2011',
    headquarters: 'San Diego, U.S.',
    noOfEmployees: '680',
    revenueTurnover: '$145M',
    keyContactPerson: 'Rebecca Lawson',
    designationRole: 'VP of Sourcing',
    emailAddress: 'r.lawson@gutflorabio.com',
    phoneWhatsApp: '+1 858 555 2341',
    linkedInProfile: 'linkedin.com/in/rebeccalawson-gfb',
    websiteUrl: 'www.gutflorabio.com',
    productCategoriesRequired: 'Lactobacillus Strains, Bifidobacterium Blends, Spore-Based Probiotics',
    annualSeasonalQuantityRequired: '750,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'U.S. West Coast & Midwest',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'B2B Portal',
    responseSpeed: 'Same day',
  },
  {
    companyName: 'ProBiome Naturals Inc.',
    yearEstablished: '2009',
    headquarters: 'Toronto, Canada',
    noOfEmployees: '310',
    revenueTurnover: '$68M',
    keyContactPerson: 'David Chen',
    designationRole: 'Senior Buyer',
    emailAddress: 'd.chen@probiomenaturals.ca',
    phoneWhatsApp: '+1 416 555 7823',
    linkedInProfile: 'linkedin.com/in/davidchen-pbn',
    websiteUrl: 'www.probiomenaturals.ca',
    productCategoriesRequired: 'Synbiotics, Probiotic Sachets, Immune Support Cultures',
    annualSeasonalQuantityRequired: '280,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Wholesaler',
    regionSpecificOperation: 'Canada & Northern U.S.',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'Email',
    responseSpeed: '24 hours',
  },
  {
    companyName: 'LiveCulture Therapeutics LLC',
    yearEstablished: '2015',
    headquarters: 'Chicago, U.S.',
    noOfEmployees: '210',
    revenueTurnover: '$47M',
    keyContactPerson: 'Jason Mitchell',
    designationRole: 'Procurement Manager',
    emailAddress: 'j.mitchell@liveculturetx.com',
    phoneWhatsApp: '+1 312 555 4190',
    linkedInProfile: 'linkedin.com/in/jasonmitchell-lct',
    websiteUrl: 'www.liveculturetherapeutics.com',
    productCategoriesRequired: 'Probiotic Capsules, Digestive Health Cultures, Prebiotic Fiber Blends',
    annualSeasonalQuantityRequired: '320,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'U.S. East Coast & Southeast',
    engagementWithSuppliers: 'Medium',
    preferredContactMethod: 'Email',
    responseSpeed: '24-48 hours',
  },
  // --- Europe ---
  {
    companyName: 'NordBiome Probiotics A/S',
    yearEstablished: '2002',
    headquarters: 'Copenhagen, Denmark',
    noOfEmployees: '920',
    revenueTurnover: '$210M',
    keyContactPerson: 'Lars Andersen',
    designationRole: 'Head of Procurement',
    emailAddress: 'l.andersen@nordbiome.dk',
    phoneWhatsApp: '+45 33 12 45 78',
    linkedInProfile: 'linkedin.com/in/larsandersen-nb',
    websiteUrl: 'www.nordbiome.dk',
    productCategoriesRequired: 'Dairy Probiotic Cultures, Lactobacillus Acidophilus, Strain-Specific Blends',
    annualSeasonalQuantityRequired: '1,200,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'Scandinavia & Central Europe',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'B2B Portal',
    responseSpeed: 'Same day',
  },
  {
    companyName: 'FloraVita Probiotics B.V.',
    yearEstablished: '2006',
    headquarters: 'Amsterdam, Netherlands',
    noOfEmployees: '380',
    revenueTurnover: '$85M',
    keyContactPerson: 'Sophie van der Berg',
    designationRole: 'Chief Procurement Officer',
    emailAddress: 's.vanderberg@floravita.nl',
    phoneWhatsApp: '+31 20 555 6789',
    linkedInProfile: 'linkedin.com/in/sophievdberg-fv',
    websiteUrl: 'www.floravita.nl',
    productCategoriesRequired: 'Multi-Strain Probiotics, Women\'s Health Cultures, Infant Probiotics',
    annualSeasonalQuantityRequired: '450,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Wholesaler',
    regionSpecificOperation: 'Benelux & Western Europe',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'Email',
    responseSpeed: '24 hours',
  },
  {
    companyName: 'Lactobio Santé S.A.',
    yearEstablished: '2004',
    headquarters: 'Lyon, France',
    noOfEmployees: '260',
    revenueTurnover: '$58M',
    keyContactPerson: 'Pierre Marchand',
    designationRole: 'Purchasing Director',
    emailAddress: 'p.marchand@lactobiosante.fr',
    phoneWhatsApp: '+33 4 7234 5678',
    linkedInProfile: 'linkedin.com/in/pierremarchand-ls',
    websiteUrl: 'www.lactobiosante.fr',
    productCategoriesRequired: 'Saccharomyces Boulardii, Gut Barrier Support Strains, Probiotic Drops',
    annualSeasonalQuantityRequired: '200,000 units/year',
    purchaseFrequency: 'Quarterly',
    salesChannelType: 'Wholesaler',
    regionSpecificOperation: 'France, Spain & Italy',
    engagementWithSuppliers: 'Medium',
    preferredContactMethod: 'Email',
    responseSpeed: '48 hours',
  },
  {
    companyName: 'MicroBiome Health GmbH',
    yearEstablished: '2010',
    headquarters: 'Munich, Germany',
    noOfEmployees: '430',
    revenueTurnover: '$96M',
    keyContactPerson: 'Katrin Hoffmann',
    designationRole: 'Director of Supply Chain',
    emailAddress: 'k.hoffmann@microbiomehealth.de',
    phoneWhatsApp: '+49 89 4567 8901',
    linkedInProfile: 'linkedin.com/in/katrinhoffmann-mbh',
    websiteUrl: 'www.microbiomehealth.de',
    productCategoriesRequired: 'Bacillus Coagulans, Targeted Probiotic Formulations, Synbiotic Capsules',
    annualSeasonalQuantityRequired: '550,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'Germany & DACH Region',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'B2B Portal',
    responseSpeed: '24 hours',
  },
  {
    companyName: 'BioGaia Wellness AB',
    yearEstablished: '1996',
    headquarters: 'Stockholm, Sweden',
    noOfEmployees: '580',
    revenueTurnover: '$175M',
    keyContactPerson: 'Erik Lindqvist',
    designationRole: 'Global Sourcing Manager',
    emailAddress: 'e.lindqvist@biogaiawellness.se',
    phoneWhatsApp: '+46 8 555 1234',
    linkedInProfile: 'linkedin.com/in/eriklindqvist-bgw',
    websiteUrl: 'www.biogaiawellness.se',
    productCategoriesRequired: 'L. Reuteri Strains, Pediatric Probiotics, Oral Health Cultures',
    annualSeasonalQuantityRequired: '680,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'Nordics & Eastern Europe',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'Email',
    responseSpeed: '24 hours',
  },
  // --- Asia Pacific ---
  {
    companyName: 'Shanghai Probiome Biotech Co.',
    yearEstablished: '2008',
    headquarters: 'Shanghai, China',
    noOfEmployees: '1,500',
    revenueTurnover: '$220M',
    keyContactPerson: 'Mei Lin',
    designationRole: 'Head of Global Sourcing',
    emailAddress: 'm.lin@shanghaiprobiome.cn',
    phoneWhatsApp: '+86 21 6789 0123',
    linkedInProfile: 'linkedin.com/in/meilin-spb',
    websiteUrl: 'www.shanghaiprobiome.cn',
    productCategoriesRequired: 'Bifidobacterium Longum, Fermented Milk Cultures, Probiotic Beverages',
    annualSeasonalQuantityRequired: '2,000,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'China & Southeast Asia',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'B2B Portal',
    responseSpeed: 'Same day',
  },
  {
    companyName: 'BioLacto India Pvt. Ltd.',
    yearEstablished: '2005',
    headquarters: 'Bangalore, India',
    noOfEmployees: '720',
    revenueTurnover: '$42M',
    keyContactPerson: 'Rajesh Krishnamurthy',
    designationRole: 'Procurement Director',
    emailAddress: 'r.krishnamurthy@biolacto.in',
    phoneWhatsApp: '+91 80 4567 8901',
    linkedInProfile: 'linkedin.com/in/rajeshkrishna-bl',
    websiteUrl: 'www.biolacto.in',
    productCategoriesRequired: 'Lactobacillus Rhamnosus, Probiotic Sachets, Gut Health Formulations',
    annualSeasonalQuantityRequired: '500,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Trader',
    regionSpecificOperation: 'India & South Asia',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'WhatsApp',
    responseSpeed: '24 hours',
  },
  {
    companyName: 'Zenbiotic Co., Ltd.',
    yearEstablished: '1998',
    headquarters: 'Tokyo, Japan',
    noOfEmployees: '850',
    revenueTurnover: '$190M',
    keyContactPerson: 'Hiroshi Tanaka',
    designationRole: 'Director of Imports',
    emailAddress: 'h.tanaka@zenbiotic.jp',
    phoneWhatsApp: '+81 3 5678 9012',
    linkedInProfile: 'linkedin.com/in/hiroshitanaka-zb',
    websiteUrl: 'www.zenbiotic.jp',
    productCategoriesRequired: 'L. Casei Shirota, Functional Probiotic Foods, Freeze-Dried Cultures',
    annualSeasonalQuantityRequired: '900,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'Japan & East Asia',
    engagementWithSuppliers: 'Medium',
    preferredContactMethod: 'Email',
    responseSpeed: '48-72 hours',
  },
  {
    companyName: 'K-Probiotic Corp.',
    yearEstablished: '2012',
    headquarters: 'Seoul, South Korea',
    noOfEmployees: '390',
    revenueTurnover: '$78M',
    keyContactPerson: 'Soo-Jin Kim',
    designationRole: 'Supply Chain Lead',
    emailAddress: 's.kim@kprobiotic.co.kr',
    phoneWhatsApp: '+82 2 4567 8901',
    linkedInProfile: 'linkedin.com/in/soojinkim-kp',
    websiteUrl: 'www.kprobiotic.co.kr',
    productCategoriesRequired: 'Kimchi-Derived Strains, Beauty Probiotics, Postbiotics',
    annualSeasonalQuantityRequired: '400,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Wholesaler',
    regionSpecificOperation: 'South Korea & ASEAN',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'B2B Portal',
    responseSpeed: '24 hours',
  },
  {
    companyName: 'Probio Pacific Pty Ltd.',
    yearEstablished: '2013',
    headquarters: 'Melbourne, Australia',
    noOfEmployees: '160',
    revenueTurnover: '$35M',
    keyContactPerson: 'James Whitfield',
    designationRole: 'Supply Chain Manager',
    emailAddress: 'j.whitfield@probiopacific.com.au',
    phoneWhatsApp: '+61 3 9876 5432',
    linkedInProfile: 'linkedin.com/in/jameswhitfield-pp',
    websiteUrl: 'www.probiopacific.com.au',
    productCategoriesRequired: 'Shelf-Stable Probiotics, IBS-Targeted Strains, Probiotic Gummies',
    annualSeasonalQuantityRequired: '120,000 units/year',
    purchaseFrequency: 'Quarterly',
    salesChannelType: 'Wholesaler',
    regionSpecificOperation: 'Australia & New Zealand',
    engagementWithSuppliers: 'Medium',
    preferredContactMethod: 'Phone',
    responseSpeed: '48-72 hours',
  },
  // --- Latin America ---
  {
    companyName: 'Probiótica Brasil Ltda.',
    yearEstablished: '2010',
    headquarters: 'São Paulo, Brazil',
    noOfEmployees: '340',
    revenueTurnover: '$52M',
    keyContactPerson: 'Fernanda Costa',
    designationRole: 'Buying Manager',
    emailAddress: 'f.costa@probioticabrasil.com.br',
    phoneWhatsApp: '+55 11 9876 5432',
    linkedInProfile: 'linkedin.com/in/fernandacosta-pb',
    websiteUrl: 'www.probioticabrasil.com.br',
    productCategoriesRequired: 'Lactobacillus Acidophilus, Kefir Cultures, Probiotic Dairy Starters',
    annualSeasonalQuantityRequired: '350,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Trader',
    regionSpecificOperation: 'Brazil & Southern Cone',
    engagementWithSuppliers: 'Medium',
    preferredContactMethod: 'WhatsApp',
    responseSpeed: '48 hours',
  },
  {
    companyName: 'BioFlora México S.A. de C.V.',
    yearEstablished: '2014',
    headquarters: 'Guadalajara, Mexico',
    noOfEmployees: '195',
    revenueTurnover: '$28M',
    keyContactPerson: 'Roberto Guzmán',
    designationRole: 'Head of Purchasing',
    emailAddress: 'r.guzman@biofloramx.com',
    phoneWhatsApp: '+52 33 4567 8901',
    linkedInProfile: 'linkedin.com/in/robertoguzman-bfm',
    websiteUrl: 'www.biofloramx.com',
    productCategoriesRequired: 'Children\'s Probiotics, Digestive Enzyme Blends, Multi-Strain Capsules',
    annualSeasonalQuantityRequired: '180,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'Mexico & Central America',
    engagementWithSuppliers: 'Medium',
    preferredContactMethod: 'WhatsApp',
    responseSpeed: '24-48 hours',
  },
  // --- Middle East ---
  {
    companyName: 'GulfBio Probiotics FZE',
    yearEstablished: '2012',
    headquarters: 'Dubai, UAE',
    noOfEmployees: '250',
    revenueTurnover: '$65M',
    keyContactPerson: 'Khalid Al-Rashid',
    designationRole: 'General Manager',
    emailAddress: 'k.alrashid@gulfbiopro.ae',
    phoneWhatsApp: '+971 4 567 8901',
    linkedInProfile: 'linkedin.com/in/khalidalrashid-gbp',
    websiteUrl: 'www.gulfbioprobiotics.ae',
    productCategoriesRequired: 'Halal-Certified Probiotics, Heat-Stable Strains, Probiotic Supplements',
    annualSeasonalQuantityRequired: '300,000 units/year',
    purchaseFrequency: 'Monthly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'GCC Countries',
    engagementWithSuppliers: 'High',
    preferredContactMethod: 'Phone',
    responseSpeed: 'Same day',
  },
  {
    companyName: 'BioLife Nutrition Ltd.',
    yearEstablished: '2015',
    headquarters: 'Tel Aviv, Israel',
    noOfEmployees: '125',
    revenueTurnover: '$30M',
    keyContactPerson: 'Yael Berman',
    designationRole: 'Procurement Officer',
    emailAddress: 'y.berman@biolifenutrition.co.il',
    phoneWhatsApp: '+972 3 678 9012',
    linkedInProfile: 'linkedin.com/in/yaelberman-bln',
    websiteUrl: 'www.biolifenutrition.co.il',
    productCategoriesRequired: 'Kosher Probiotics, Microbiome Testing Kits, Targeted Strain Formulations',
    annualSeasonalQuantityRequired: '95,000 units/year',
    purchaseFrequency: 'Quarterly',
    salesChannelType: 'Wholesaler',
    regionSpecificOperation: 'Israel & Levant',
    engagementWithSuppliers: 'Medium',
    preferredContactMethod: 'Email',
    responseSpeed: '48 hours',
  },
  // --- Africa ---
  {
    companyName: 'ProbiAfrica (Pty) Ltd.',
    yearEstablished: '2017',
    headquarters: 'Cape Town, South Africa',
    noOfEmployees: '145',
    revenueTurnover: '$15M',
    keyContactPerson: 'Sipho Mthembu',
    designationRole: 'Operations Manager',
    emailAddress: 's.mthembu@probiafrica.co.za',
    phoneWhatsApp: '+27 21 345 6789',
    linkedInProfile: 'linkedin.com/in/siphomthembu-pa',
    websiteUrl: 'www.probiafrica.co.za',
    productCategoriesRequired: 'Broad-Spectrum Probiotics, Gut Health Sachets, Probiotic Fortified Foods',
    annualSeasonalQuantityRequired: '70,000 units/year',
    purchaseFrequency: 'Quarterly',
    salesChannelType: 'Distributor',
    regionSpecificOperation: 'South Africa & Sub-Saharan',
    engagementWithSuppliers: 'Low',
    preferredContactMethod: 'Phone',
    responseSpeed: '72+ hours',
  },
  {
    companyName: 'BioFlore Santé SARL',
    yearEstablished: '2018',
    headquarters: 'Casablanca, Morocco',
    noOfEmployees: '90',
    revenueTurnover: '$11M',
    keyContactPerson: 'Amina El-Fassi',
    designationRole: 'Import Manager',
    emailAddress: 'a.elfassi@biofloresante.ma',
    phoneWhatsApp: '+212 522 456 789',
    linkedInProfile: 'linkedin.com/in/aminaelfassi-bfs',
    websiteUrl: 'www.biofloresante.ma',
    productCategoriesRequired: 'Probiotic Drops, Lactobacillus Plantarum, Fermented Food Starters',
    annualSeasonalQuantityRequired: '45,000 units/year',
    purchaseFrequency: 'Quarterly',
    salesChannelType: 'Trader',
    regionSpecificOperation: 'North Africa & Francophone West Africa',
    engagementWithSuppliers: 'Low',
    preferredContactMethod: 'WhatsApp',
    responseSpeed: '72+ hours',
  },
  {
    companyName: 'Afri-Gut Wellness Ltd.',
    yearEstablished: '2019',
    headquarters: 'Lagos, Nigeria',
    noOfEmployees: '70',
    revenueTurnover: '$7M',
    keyContactPerson: 'Emeka Obi',
    designationRole: 'Managing Director',
    emailAddress: 'e.obi@afrigutwellness.ng',
    phoneWhatsApp: '+234 801 345 6789',
    linkedInProfile: 'linkedin.com/in/emekaobi-agw',
    websiteUrl: 'www.afrigutwellness.ng',
    productCategoriesRequired: 'Affordable Probiotic Sachets, ORS + Probiotic Blends, Immune Cultures',
    annualSeasonalQuantityRequired: '35,000 units/year',
    purchaseFrequency: 'Seasonal',
    salesChannelType: 'Trader',
    regionSpecificOperation: 'Central & West Africa',
    engagementWithSuppliers: 'Low',
    preferredContactMethod: 'WhatsApp',
    responseSpeed: '72+ hours',
  },
]

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">{title || 'Customer Intelligence Database'}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            {/* Top-level group headers */}
            <tr>
              <th
                colSpan={5}
                className="border border-gray-400 px-3 py-3 text-center text-sm font-bold text-black"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                COMPANY INFORMATION
              </th>
              <th
                colSpan={6}
                className="border border-gray-400 px-3 py-3 text-center text-sm font-bold text-black"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                CONTACT DETAILS
              </th>
              <th
                colSpan={3}
                className="border border-gray-400 px-3 py-3 text-center text-sm font-bold text-black"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                PRODUCT REQUIRED
              </th>
              <th
                colSpan={2}
                className="border border-gray-400 px-3 py-3 text-center text-sm font-bold text-black"
                style={{ backgroundColor: '#FFF2CC' }}
              >
                CUSTOMER CAPACITY &amp; OPERATIONS
              </th>
              <th
                colSpan={3}
                className="border border-gray-400 px-3 py-3 text-center text-sm font-bold text-black"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                CUSTOMER ENGAGEMENT LEVEL
              </th>
            </tr>
            {/* Sub-headers */}
            <tr>
              {/* Company Information */}
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                Company<br />Name
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[110px]"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                Year<br />Established
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[120px]"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                Headquarters
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                No. of Employees<br />(est.)<br />(if available)
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                Revenue/Turnover<br />(if available)
              </th>

              {/* Contact Details */}
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[120px]"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                Key Contact<br />Person
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[120px]"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                Designation /<br />Role
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[150px]"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                Email Address<br />(verified / generic)
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                Phone /<br />WhatsApp<br />Number
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[120px]"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                LinkedIn Profile
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[110px]"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                Website<br />URL
              </th>

              {/* Product Required */}
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[160px]"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                Product Categories<br />Required (Type of<br />Supplement)
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                Annual / Seasonal<br />Quantity Required
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[150px]"
                style={{ backgroundColor: '#B4C7E7' }}
              >
                Purchase Frequency<br />(Seasonal, Monthly,<br />Quarterly)
              </th>

              {/* Customer Capacity & Operations */}
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[150px]"
                style={{ backgroundColor: '#FFF2CC' }}
              >
                Sales Channel<br />Type (Distributors,<br />Wholesaler,<br />Trader)
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]"
                style={{ backgroundColor: '#FFF2CC' }}
              >
                Region-specific<br />Operation
              </th>

              {/* Customer Engagement Level */}
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                Engagement<br />With Suppliers<br />(Low, Medium,<br />High)
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                Preferred<br />Contact Method<br />(Phone, E Mail,<br />B2B, Others)
              </th>
              <th
                className="border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]"
                style={{ backgroundColor: '#D5E8D4' }}
              >
                Response<br />Speed (for<br />procurement)
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleCustomerData.map((customer, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {/* Company Information */}
                <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.companyName}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.yearEstablished}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.headquarters}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.noOfEmployees}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.revenueTurnover}</td>
                {/* Contact Details */}
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.keyContactPerson}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.designationRole}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.emailAddress}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.phoneWhatsApp}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.linkedInProfile}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.websiteUrl}</td>
                {/* Product Required */}
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.productCategoriesRequired}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.annualSeasonalQuantityRequired}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.purchaseFrequency}</td>
                {/* Customer Capacity & Operations */}
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.salesChannelType}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.regionSpecificOperation}</td>
                {/* Customer Engagement Level */}
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.engagementWithSuppliers}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.preferredContactMethod}</td>
                <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.responseSpeed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
