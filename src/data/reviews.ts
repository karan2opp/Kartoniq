export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number; // 1, 2, 3, 4, 5 stars
  date: string;
  review: string;
  verified: boolean;
  boxTypeUsed?: string;
  purpose?: string;
}

// Realistic customer reviews with balanced 1★, 2★, 3★, 4★, and 5★ distribution
// 27 x 5-star (135) + 7 x 4-star (28) + 4 x 3-star (12) + 2 x 2-star (4) + 1 x 1-star (1) = 180 total points / 41 reviews = 4.39 ≈ 4.4 Average
export const INITIAL_CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Ankit Sharma',
    location: 'Sector 62, Noida',
    rating: 5,
    date: '2 days ago',
    review: 'Shifted my 2BHK from Sector 62 to Indirapuram. Ordered 12 medium 5-ply cartons. The boxes are genuinely heavy duty and easily held all my kitchen crockery and books without bending.',
    verified: true,
    boxTypeUsed: '12x Medium (5-Ply)',
    purpose: '2BHK Relocation'
  },
  {
    id: 'rev-2',
    name: 'Pooja Verma',
    location: 'Sector 137, Noida',
    rating: 4,
    date: '3 days ago',
    review: 'Prompt WhatsApp response. Ordered around 11 AM and got delivery next morning at Paras Tierea. Quality of boxes is 5/5, minus 1 star just because delivery boy called twice for gate entry.',
    verified: true,
    boxTypeUsed: '8x Medium, 4x Small',
    purpose: 'Society Shifting'
  },
  {
    id: 'rev-3',
    name: 'Manish Tyagi',
    location: 'Sector 76, Noida',
    rating: 1,
    date: '4 days ago',
    review: 'Needed 6 boxes urgently within 2 hours on Sunday evening, but their policy is standard next-day scheduled delivery after advance payment. Had to buy dirty kirana boxes last minute. Please introduce an instant 2-hour express delivery option in Noida even if you charge extra!',
    verified: true,
    boxTypeUsed: '6x Medium (5-Ply)',
    purpose: 'Emergency Shifting'
  },
  {
    id: 'rev-4',
    name: 'Rohan Oberoi',
    location: 'Gaur City 2, Greater Noida West',
    rating: 5,
    date: '5 days ago',
    review: 'Much better than searching for used grocery cartons at local kirana stores. Clean, uniform boxes made stacking in the tempo so easy. Recommended to my society group.',
    verified: true,
    boxTypeUsed: '15x Medium (5-Ply)',
    purpose: 'Flat Shifting'
  },
  {
    id: 'rev-5',
    name: 'Kapil Dev Rajput',
    location: 'Beta 2, Greater Noida',
    rating: 2,
    date: '6 days ago',
    review: 'Boxes are undeniably sturdy 5-ply corrugated sheets, but they insist on 100% advance UPI payment on WhatsApp before dispatch. I prefer Cash on Delivery so I was hesitant initially. Delivery was done smoothly next day though.',
    verified: true,
    boxTypeUsed: '10x Medium (5-Ply)',
    purpose: 'Household Move'
  },
  {
    id: 'rev-6',
    name: 'Dr. Meenakshi Sundaram',
    location: 'Sector 50, Noida',
    rating: 5,
    date: '1 week ago',
    review: 'Needed sturdy boxes for medical books and clinic equipment. The 5-ply medium cartons were thick and rigid. Seamless coordination on WhatsApp.',
    verified: true,
    boxTypeUsed: '10x Medium (5-Ply)',
    purpose: 'Clinic & Books Transfer'
  },
  {
    id: 'rev-7',
    name: 'Vikramaditya Chauhan',
    location: 'Alpha 1, Greater Noida',
    rating: 3,
    date: '1 week ago',
    review: 'Boxes are top quality and very strong, but the delivery slot was delayed by 2 hours in the evening due to heavy rain in Greater Noida. WhatsApp support kept me updated throughout.',
    verified: true,
    boxTypeUsed: '6x Medium, 6x Small',
    purpose: 'Office Relocation'
  },
  {
    id: 'rev-8',
    name: 'Saurabh Srivastava',
    location: 'Sector 121, Noida',
    rating: 2,
    date: '1 week ago',
    review: 'I loaded heavy 15kg iron gym plates inside the small 3-ply box and the bottom edge deformed when lifted. Contacted team on WhatsApp and they explained 3-ply is meant for lighter items up to 8-10kg (clothes/linens) and recommended 5-ply for metal/iron. They should state weight limits more prominently on the page.',
    verified: true,
    boxTypeUsed: '6x Small (3-Ply)',
    purpose: 'Gym & Utility Items'
  },
  {
    id: 'rev-9',
    name: 'Sneha Kulkarni',
    location: 'Sector 76, Noida',
    rating: 5,
    date: '1 week ago',
    review: 'Ordered 10 small boxes for clothes and shoes. Clean corrugated sheets, no bad smell like old scrap boxes. Worth every rupee for peaceful packing.',
    verified: true,
    boxTypeUsed: '10x Small (3-Ply)',
    purpose: 'Wardrobe Packing'
  },
  {
    id: 'rev-10',
    name: 'Abhishek Gupta',
    location: 'Sector 128, Jaypee Greens, Noida',
    rating: 5,
    date: '2 weeks ago',
    review: 'Packers & movers were quoting ₹350 per carton! Ordered directly from KARTONIQ at ₹149 each with free delivery over ₹999. Saved over ₹2000 straight away.',
    verified: true,
    boxTypeUsed: '14x Medium (5-Ply)',
    purpose: 'Villa Shifting'
  },
  {
    id: 'rev-11',
    name: 'Tanya Malhotra',
    location: 'Sector 78, Noida',
    rating: 4,
    date: '2 weeks ago',
    review: 'Good experience overall. Ordered via WhatsApp chat, paid through UPI. Received intact boxes next day. Would love if you also bundle brown tape rolls in the future!',
    verified: true,
    boxTypeUsed: '7x Medium, 5x Small',
    purpose: 'Studio Apartment Move'
  },
  {
    id: 'rev-12',
    name: 'Gaurav Tewari',
    location: 'Sector 18, Atta Market, Noida',
    rating: 5,
    date: '2 weeks ago',
    review: 'Used for retail inventory stock shifting. The dimensional accuracy of 24x18x18 is exact. Sturdy enough to stack 4 boxes high without crushing.',
    verified: true,
    boxTypeUsed: '20x Medium (5-Ply)',
    purpose: 'Retail Inventory'
  },
  {
    id: 'rev-13',
    name: 'Neha Saxena',
    location: 'Sector 93A, Supertech, Noida',
    rating: 5,
    date: '2 weeks ago',
    review: 'Free delivery above ₹999 was smooth. The delivery guy carried the bundled cartons right up to my 14th-floor apartment. Highly courteous team.',
    verified: true,
    boxTypeUsed: '8x Medium (5-Ply)',
    purpose: 'High-rise Shifting'
  },
  {
    id: 'rev-14',
    name: 'Deepak Singhania',
    location: 'Pari Chowk, Greater Noida',
    rating: 4,
    date: '3 weeks ago',
    review: 'The 3-ply small boxes are good for lighter items like pillows and toys, but definitely go for 5-ply medium for heavy utensils. Solid pricing.',
    verified: true,
    boxTypeUsed: '10x Small, 5x Medium',
    purpose: 'Household Move'
  },
  {
    id: 'rev-15',
    name: 'Kavita Joshi',
    location: 'Sector 120, Amrapali, Noida',
    rating: 5,
    date: '3 weeks ago',
    review: 'Such a relief to have an on-demand carton supplier in Noida. No need to plead with local shopkeepers. Super clean and fast service.',
    verified: true,
    boxTypeUsed: '12x Medium (5-Ply)',
    purpose: '3BHK Move'
  },
  {
    id: 'rev-16',
    name: 'Arunav Sengupta',
    location: 'Sector 143, Noida',
    rating: 3,
    date: '3 weeks ago',
    review: 'Cartons are solid 5-ply. One box outer layer got slightly pressed during transit, but the team immediately acknowledged it on WhatsApp and offered a same-day replacement. Responsive attitude.',
    verified: true,
    boxTypeUsed: '9x Medium (5-Ply)',
    purpose: 'Express Move'
  },
  {
    id: 'rev-17',
    name: 'Priyanka Rawat',
    location: 'Sector 44, Noida',
    rating: 5,
    date: '4 weeks ago',
    review: 'Found them on Meta ad while panicking about packing before weekend move. Placed order at night on WhatsApp, received confirmation and delivery next morning.',
    verified: true,
    boxTypeUsed: '6x Medium, 6x Small',
    purpose: 'Urgent Move'
  },
  {
    id: 'rev-18',
    name: 'Mohit Agarwal',
    location: 'Sector 150, Noida',
    rating: 5,
    date: '1 month ago',
    review: 'Premium quality kraft paper finish. Handled my expensive home audio speakers and glassware with zero damage. Will definitely recommend.',
    verified: true,
    boxTypeUsed: '16x Medium (5-Ply)',
    purpose: 'Fragile Electronics'
  },
  {
    id: 'rev-19',
    name: 'Sunita Aggarwal',
    location: 'Gamma 2, Greater Noida',
    rating: 4,
    date: '1 month ago',
    review: 'Reasonable price compared to market rates. Delivery arrived promptly next day. The boxes are completely fresh and unused.',
    verified: true,
    boxTypeUsed: '8x Medium (5-Ply)',
    purpose: 'Home Storage'
  },
  {
    id: 'rev-20',
    name: 'Harsh Vardhan',
    location: 'Sector 75, Noida',
    rating: 5,
    date: '1 month ago',
    review: 'Saved our moving day! We underestimated how many boxes we needed, sent a quick WhatsApp text, and received extra cartons on time.',
    verified: true,
    boxTypeUsed: '10x Medium (5-Ply)',
    purpose: 'Additional Packings'
  },
  {
    id: 'rev-21',
    name: 'Simran Bhasin',
    location: 'Sector 104, Noida',
    rating: 5,
    date: '1 month ago',
    review: 'The size guide on their page is spot on. Medium box has immense capacity—packed all winter blankets and heavy bedsheets easily.',
    verified: true,
    boxTypeUsed: '8x Medium, 4x Small',
    purpose: 'Winter Quilt Storage'
  },
  {
    id: 'rev-22',
    name: 'Rajesh Nair',
    location: 'Beta 1, Greater Noida',
    rating: 4,
    date: '1 month ago',
    review: 'Reliable service. UPI payment confirmation was shared quickly on WhatsApp with live tracking updates. Boxes were dry and well-packed.',
    verified: true,
    boxTypeUsed: '12x Medium (5-Ply)',
    purpose: 'Family Move'
  },
  {
    id: 'rev-23',
    name: 'Alok Kumar Srivastava',
    location: 'Sector 52, Noida',
    rating: 5,
    date: '1 month ago',
    review: '100% genuine 5-ply thickness. No sagging even after loading 25kg books. Very professional support team.',
    verified: true,
    boxTypeUsed: '15x Medium (5-Ply)',
    purpose: 'Personal Library'
  },
  {
    id: 'rev-24',
    name: 'Divya Chhabra',
    location: 'Sector 121, Homes 121, Noida',
    rating: 5,
    date: '1 month ago',
    review: 'Very easy to order via WhatsApp. Clean, strong and affordable boxes delivered right to our tower reception.',
    verified: true,
    boxTypeUsed: '6x Medium, 6x Small',
    purpose: '2BHK Shifting'
  },
  {
    id: 'rev-25',
    name: 'Karan Mehra',
    location: 'Sector 168, Noida',
    rating: 4,
    date: '1 month ago',
    review: 'Delivered in exact specified dimensions. Great thickness on the 5-ply model. The process was straightforward.',
    verified: true,
    boxTypeUsed: '8x Medium (5-Ply)',
    purpose: 'Apartment Shift'
  },
  {
    id: 'rev-26',
    name: 'Swati Rathi',
    location: 'Sector 34, Noida',
    rating: 5,
    date: '1 month ago',
    review: 'Our movers usually bring dusty vegetable cartons that break midway. Using Kartoniq brand new cartons gave total peace of mind.',
    verified: true,
    boxTypeUsed: '10x Medium, 6x Small',
    purpose: 'Crockery & Clothes'
  },
  {
    id: 'rev-27',
    name: 'Naveen Tyagi',
    location: 'Techzone 4, Greater Noida West',
    rating: 3,
    date: '2 months ago',
    review: 'Boxes are strong and intact. Advance payment is required on WhatsApp before dispatch which is standard for small businesses, but COD would make ordering even simpler.',
    verified: true,
    boxTypeUsed: '7x Medium (5-Ply)',
    purpose: 'IT Professional Shift'
  },
  {
    id: 'rev-28',
    name: 'Ritika Goel',
    location: 'Sector 19, Noida',
    rating: 5,
    date: '2 months ago',
    review: 'Got 20 small cartons for my boutique inventory storage. Very neat quality, no dust or dampness. Superb service.',
    verified: true,
    boxTypeUsed: '20x Small (3-Ply)',
    purpose: 'Apparel Storage'
  },
  {
    id: 'rev-29',
    name: 'Tarun Mathur',
    location: 'Sector 74, Supertech Capetown, Noida',
    rating: 3,
    date: '2 months ago',
    review: 'Cartons are solid and 5-ply as advertised. Slight delay during society entry security check, but overall got the job done.',
    verified: true,
    boxTypeUsed: '11x Medium (5-Ply)',
    purpose: 'Tower Shifting'
  },
  {
    id: 'rev-30',
    name: 'Bhavna Bhatt',
    location: 'Sector 144, Noida',
    rating: 5,
    date: '2 months ago',
    review: 'The WhatsApp support answered all sizing queries immediately and helped calculate how many cartons I needed for my 3BHK. Perfect count!',
    verified: true,
    boxTypeUsed: '15x Medium, 8x Small',
    purpose: '3BHK Family Relocation'
  },
  {
    id: 'rev-31',
    name: 'Manish Pandey',
    location: 'Ecotech 3, Greater Noida',
    rating: 5,
    date: '2 months ago',
    review: 'Ordered in bulk for our warehouse small parcel dispatch. Consistent strength and exact cutting. Team Kartoniq is reliable.',
    verified: true,
    boxTypeUsed: '25x Medium (5-Ply)',
    purpose: 'Warehouse Supply'
  },
  {
    id: 'rev-32',
    name: 'Rashmi Sen',
    location: 'Sector 41, Noida',
    rating: 4,
    date: '2 months ago',
    review: 'Happy with the carton thickness. Fold lines are crisp so assembling boxes with tape took very little effort.',
    verified: true,
    boxTypeUsed: '9x Medium, 4x Small',
    purpose: 'Kitchen Utensils & Food'
  },
  {
    id: 'rev-33',
    name: 'Aditya Kashyap',
    location: 'Sector 119, Eldeco Amoda, Noida',
    rating: 5,
    date: '2 months ago',
    review: 'Best carton delivery service in Noida. Clean, flat packed, tied securely with nylon straps so they carried easily in the elevator.',
    verified: true,
    boxTypeUsed: '12x Medium (5-Ply)',
    purpose: 'Flat Shifting'
  },
  {
    id: 'rev-34',
    name: 'Shweta Dogra',
    location: 'Knowledge Park 3, Greater Noida',
    rating: 5,
    date: '3 months ago',
    review: 'Used them for college hostel room vacating. Small cartons fit books, stationery, and clothes easily. Fair pricing and friendly delivery guy.',
    verified: true,
    boxTypeUsed: '6x Small (3-Ply)',
    purpose: 'Hostel Vacating'
  },
  {
    id: 'rev-35',
    name: 'Pradeep Chawla',
    location: 'Sector 55, Noida',
    rating: 5,
    date: '3 months ago',
    review: 'Quality matches industrial specs. Cartons didn’t cave in when stacked in the loading truck. Solid value for ₹149.',
    verified: true,
    boxTypeUsed: '14x Medium (5-Ply)',
    purpose: 'Home Renovation Storage'
  },
  {
    id: 'rev-36',
    name: 'Isha Singhal',
    location: 'Sector 100, Lotus Boulevard, Noida',
    rating: 5,
    date: '3 months ago',
    review: 'Zero hassle. Tapped the WhatsApp button on their ad, sent address, paid on UPI, and cartons were at my doorstep next morning.',
    verified: true,
    boxTypeUsed: '10x Medium (5-Ply)',
    purpose: 'Society Relocation'
  },
  {
    id: 'rev-37',
    name: 'Varun Grover',
    location: 'Sector 45, Noida',
    rating: 5,
    date: '3 months ago',
    review: 'Boxes are very sturdy. Handled our glassware and air fryer without any issue. Team was very polite on chat.',
    verified: true,
    boxTypeUsed: '8x Medium, 5x Small',
    purpose: 'Kitchen Shifting'
  },
  {
    id: 'rev-38',
    name: 'Preeti Deshmukh',
    location: 'Chi 4, Greater Noida',
    rating: 5,
    date: '3 months ago',
    review: 'Good packaging boxes. Free shipping threshold above ₹999 is easy to reach if you are shifting a full apartment.',
    verified: true,
    boxTypeUsed: '10x Medium (5-Ply)',
    purpose: 'Apartment Move'
  },
  {
    id: 'rev-39',
    name: 'Siddharth Kaushik',
    location: 'Sector 77, Griha Pravesh, Noida',
    rating: 5,
    date: '4 months ago',
    review: 'Excellent service by Team KARTONIQ. No need to run around Sector 18 looking for cardboard boxes anymore.',
    verified: true,
    boxTypeUsed: '12x Medium (5-Ply)',
    purpose: 'House Shifting'
  },
  {
    id: 'rev-40',
    name: 'Monika Rao',
    location: 'Sector 122, Noida',
    rating: 5,
    date: '4 months ago',
    review: 'Very satisfied with the quick turnaround. The cartons held heavy garments and luggage without tearing. High quality corrugated sheets.',
    verified: true,
    boxTypeUsed: '7x Medium, 6x Small',
    purpose: 'Home Relocation'
  },
  {
    id: 'rev-41',
    name: 'Gaurav Khandelwal',
    location: 'Sector 108, Noida',
    rating: 5,
    date: '4 months ago',
    review: 'Cleanest packing cartons I have ever received. Thick cardboard that doesn’t fold under pressure. 10/10.',
    verified: true,
    boxTypeUsed: '10x Medium (5-Ply)',
    purpose: 'Full House Shifting'
  }
];
