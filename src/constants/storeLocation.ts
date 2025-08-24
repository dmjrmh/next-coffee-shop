export type Store = {
  id: string
  name: string
  address: string
  distanceKm: number
  features?: string[]
  openHour?: string
}

const STORES: Store[] = [
  {
    id: '1',
    name: 'Grand City',
    address:
      'Starbucks Grand city Surabaya, Ground Floors 26B+27+28A, Jl. Walikota Mustajab',
    distanceKm: 2,
    features: ['Promo', 'WiFi', 'Drive-Thru'],
    openHour: '08:00 - 22:00',
  },
  {
    id: '2',
    name: 'Kenjeran Surabaya',
    address:
      'Jl. Kenjeran No. 550 Kelurahan Kalljudan Kecamatan Sukollio Surabaya',
    distanceKm: 2.6,
    features: ['24 Hour Service', 'Mobile Payment'],
    openHour: '08:00 - 22:00',
  },
  {
    id: '3',
    name: 'Galaxy Mall 2 (Reserve Store)',
    address:
      'Starbucks Galaxy Mall 2, Ground Floors #074, Jl. Dharma Husada Indah',
    distanceKm: 2.9,
    features: ['Reserve Store', 'WiFi'],
    openHour: '08:00 - 22:00',
  },
  {
    id: '4',
    name: 'Manyar Kertoarjo',
    address: 'Starbucks Manyar Kertoarjo JalanManyar Kertoarjo No. 33 A',
    distanceKm: 3,
    features: ['Oven-Warmed Food'],
    openHour: '08:00 - 22:00',
  },
  {
    id: '5',
    name: 'Tunjungan Plaza',
    address: 'Starbucks Tunjungan Plaza 4, G.D Iovar LC ic',
    distanceKm: 3.2,
    features: ['WiFi', 'Mobile Payment'],
    openHour: '08:00 - 22:00',
  },
]

export default STORES
