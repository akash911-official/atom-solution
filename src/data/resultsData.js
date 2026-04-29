import brandImage from '../assets/images/result-brand.png'
import ecommerceImage from '../assets/images/result-ecommerce.png'
import saasImage from '../assets/images/result-saas.png'

export const resultsData = [
  {
    image: ecommerceImage,
    title: 'E-Commerce Scale-Up',
    metrics: [
      { label: 'Revenue Growth', value: '+287%' },
      { label: 'ROAS', value: '4.8x' },
    ],
    description:
      'Transformed paid advertising strategy resulting in tripled revenue within 8 months.',
  },
  {
    image: saasImage,
    title: 'SaaS Growth',
    metrics: [
      { label: 'User Acquisition', value: '+412%' },
      { label: 'CAC Reduction', value: '-58%' },
    ],
    description:
      'Optimized funnel and targeting dramatically increased conversions while reducing costs.',
  },
  {
    image: brandImage,
    title: 'Brand Repositioning',
    metrics: [
      { label: 'Brand Awareness', value: '+195%' },
      { label: 'Lead Quality', value: '+340%' },
    ],
    description:
      'Complete brand overhaul positioned client as industry leader with premium pricing power.',
  },
]
