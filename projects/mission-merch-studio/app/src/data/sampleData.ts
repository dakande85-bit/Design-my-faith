export type FulfilmentStatus =
  | 'Draft'
  | 'Awaiting Payment'
  | 'Paid'
  | 'Awaiting Artwork Review'
  | 'Artwork Approved'
  | 'Needs Customer Changes'
  | 'In Production'
  | 'Ready to Ship'
  | 'Shipped'
  | 'Completed'
  | 'Cancelled'
  | 'Refunded'

export const products = [
  {
    name: 'Premium T-shirt',
    category: 'Apparel',
    price: 'from £18',
    description: 'Soft ringspun cotton with clear front or back print areas.',
    colours: ['Ivory', 'Navy', 'Charcoal'],
  },
  {
    name: 'Midweight Hoodie',
    category: 'Apparel',
    price: 'from £34',
    description: 'Warm fleece hoodie for mission teams, youth groups, and events.',
    colours: ['Sand', 'Forest', 'Black'],
  },
  {
    name: 'Canvas Tote',
    category: 'Outreach',
    price: 'from £12',
    description: 'Durable tote bags for welcome teams, conferences, and charity drives.',
    colours: ['Natural', 'Stone', 'Navy'],
  },
  {
    name: 'Ceramic Mug',
    category: 'Gifts',
    price: 'from £10',
    description: 'Clean wrap artwork for church cafes, donor gifts, and ministry teams.',
    colours: ['White', 'Cream', 'Black'],
  },
  {
    name: 'Event Poster',
    category: 'Print',
    price: 'from £9',
    description: 'Premium prints for worship nights, fundraisers, and teaching series.',
    colours: ['Matte', 'Satin', 'Uncoated'],
  },
  {
    name: 'Prayer Journal',
    category: 'Stationery',
    price: 'from £14',
    description: 'A thoughtful notebook option for retreats, courses, and discipleship groups.',
    colours: ['Cream', 'Sage', 'Ink'],
  },
]

export const campaigns = [
  {
    title: 'Youth Mission Trip 2026',
    organisation: 'Grace City Church',
    goal: '£8,000 goal',
    raised: '£5,420 raised',
    description: 'Limited-run team apparel supporting travel and outreach costs.',
  },
  {
    title: 'Community Pantry Fund',
    organisation: 'Hope Table Charity',
    goal: '£3,500 goal',
    raised: '£2,180 raised',
    description: 'Totes and mugs helping fund weekly food support for local families.',
  },
  {
    title: 'Worship Night Merch',
    organisation: 'Harbour Collective',
    goal: 'Event collection',
    raised: '164 items ordered',
    description: 'A simple campaign store for attendees and worship team supporters.',
  },
]

export const orders = [
  {
    id: 'MMS-1048',
    customer: 'Grace City Church',
    product: 'Premium T-shirt',
    quantity: 120,
    status: 'Awaiting Artwork Review' as FulfilmentStatus,
    nextAction: 'Check uploaded logo resolution and approve front placement.',
  },
  {
    id: 'MMS-1049',
    customer: 'Hope Table Charity',
    product: 'Canvas Tote',
    quantity: 75,
    status: 'In Production' as FulfilmentStatus,
    nextAction: 'Confirm tote stock and mark ready to ship when packed.',
  },
  {
    id: 'MMS-1050',
    customer: 'Harbour Collective',
    product: 'Midweight Hoodie',
    quantity: 42,
    status: 'Needs Customer Changes' as FulfilmentStatus,
    nextAction: 'Customer needs to send a higher contrast back print file.',
  },
]

export const useCases = [
  {
    title: 'Churches',
    copy: 'Create polished merch for welcome teams, youth groups, conferences, and sermon series.',
    href: '/churches',
  },
  {
    title: 'Missionaries',
    copy: 'Launch trip apparel and support campaigns with clear artwork review before production.',
    href: '/missionaries',
  },
  {
    title: 'Charities',
    copy: 'Sell practical products that support outreach projects and community fundraising.',
    href: '/charities',
  },
]
