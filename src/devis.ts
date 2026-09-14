import devi01 from './devi-01-mahalakshmi.webp';
import devi02 from './devi-02-mahadurga.webp';
import devi03 from './devi-03-mahakali.webp';
import devi04 from './devi-04-mahasaraswati.webp';
import devi05 from './devi-05-mahaparvati.webp';
import devi06 from './devi-06-kamakhya.webp';
import devi07 from './devi-07-kamakshi.webp';
import devi08 from './devi-08-bhramaramba.webp';
import devi09 from './devi-09-chamundeshwari.webp';
import devi10 from './devi-10-jogulamba.webp';
import devi11 from './devi-11-vishalakshi.webp';
import devi12 from './devi-12-mangala-gauri.webp';
import devi13 from './devi-13-jwalamukhi.webp';
import devi14 from './devi-14-manikyamba.webp';
import devi15 from './devi-15-puruhutika.webp';
import devi16 from './devi-16-biraja.webp';
import devi17 from './devi-17-ekaveerika.webp';
import devi18 from './devi-18-lalita-madhaveshwari.webp';

export interface Devi {
  id: number;
  name: string;
  shaktiPeetha: string;
  location: string;
  description: string;
  color: string;
  gridPosition: { col: number; row: number };
  longDescription: string;
  sourceName: string;
  sourceUrl: string;
  image: string;
}

const deviImages: Record<number, string> = {
  1: devi01,
  2: devi02,
  3: devi03,
  4: devi04,
  5: devi05,
  6: devi06,
  7: devi07,
  8: devi08,
  9: devi09,
  10: devi10,
  11: devi11,
  12: devi12,
  13: devi13,
  14: devi14,
  15: devi15,
  16: devi16,
  17: devi17,
  18: devi18,
};

interface DeviData {
  id: number;
  name: string;
  shaktiPeetha: string;
  location: string;
  description: string;
  color: string;
  gridPosition: { col: number; row: number };
  longDescription: string;
  sourceName: string;
  sourceUrl: string;
}

const devisData: DeviData[] = [
  {
    id: 1,
    name: 'Mahalakshmi',
    shaktiPeetha: 'Kolhapur, Maharashtra',
    location: 'Maharashtra',
    description: 'Goddess of wealth, fortune, and prosperity, seated on a pink lotus.',
    color: '#E8B830',
    gridPosition: { col: 1, row: 1 },
    longDescription:
      'The Mahalakshmi Temple at Kolhapur, also known as Ambabai Mandir, is one of the 18 Maha Shakta Pithas. The temple is considered one of the three and a half Shakti Peethas in the Shakta tradition. According to belief, Goddess Mahalakshmi appeared here to slay the demon Kolhasur. The idol, made of a gemstone weighing approximately 40 kg, is worshipped as the consort of Maha Vishnu. It is customary for Vaishnavas to visit Tirumala Venkateswara Temple, Kolhapur Mahalakshmi Temple, and Padmavathi Temple as a pilgrimage for moksha.',
    sourceName: 'Wikipedia - Mahalakshmi Temple, Kolhapur',
    sourceUrl: 'https://en.wikipedia.org/wiki/Mahalakshmi_Temple,_Kolhapur',
  },
  {
    id: 2,
    name: 'Mahadurga',
    shaktiPeetha: 'Vaishno Devi',
    location: 'Jammu & Kashmir',
    description: 'The invincible warrior goddess who rides a lion and wields weapons.',
    color: '#D63648',
    gridPosition: { col: 2, row: 1 },
    longDescription:
      'The Vaishno Devi Temple, situated on the Trikuta mountain at an elevation of 5,200 feet in Katra, Jammu and Kashmir, is one of the 108 Shakta Pithas. The goddess Vaishno Devi is considered a manifestation of Mahakali, Mahalakshmi, and Mahasaraswati. According to tradition, the skull of Sati fell here, making it one of the holiest Shakta Pithas. The temple is governed by the Shri Mata Vaishno Devi Shrine Board and attracts millions of pilgrims annually.',
    sourceName: 'Wikipedia - Vaishno Devi Temple',
    sourceUrl: 'https://en.wikipedia.org/wiki/Vaishno_Devi_Temple',
  },
  {
    id: 3,
    name: 'Mahakali',
    shaktiPeetha: 'Ujjain, Madhya Pradesh',
    location: 'Madhya Pradesh',
    description: 'The fierce destroyer of evil, dark-complexioned, standing on Lord Shiva.',
    color: '#3D2B5E',
    gridPosition: { col: 3, row: 1 },
    longDescription:
      'The Mahakaleshwar Temple at Ujjain houses the Mahakali Shakti Peeth, known as the Ujjaini Pitham. According to the Shakta pitha tradition, the upper lip of Sati fell at this location. Ujjain is regarded as one of the three most sacred Shakta Pithas, symbolizing the annihilation aspect of the Mother Goddess. The temple is also home to one of the twelve Jyotirlingas, making it sacred to both Shaivism and Shaktism.',
    sourceName: 'Wikipedia - Shakta Pithas',
    sourceUrl: 'https://en.wikipedia.org/wiki/Shakta_pithas',
  },
  {
    id: 4,
    name: 'Mahasaraswati',
    shaktiPeetha: 'Sharada / Kashmir',
    location: 'Jammu & Kashmir',
    description: 'Goddess of knowledge, wisdom, and arts, playing the veena, riding a swan.',
    color: '#F5F0E8',
    gridPosition: { col: 4, row: 1 },
    longDescription:
      'Sharada Peeth, located in the Neelum Valley of Kashmir, was a ruined Hindu temple and ancient centre of learning dedicated to the goddess Sharada, the Kashmiri name for Saraswati. Between the 6th and 12th centuries CE, it was among the most prominent temple universities in South Asia. The goddess Sharada is revered as a tripartite embodiment of Shakti: Sharada (learning), Saraswati (knowledge), and Vagdevi (speech). It is believed that the right hand of Sati fell here, making it one of the 18 Maha Shakta Pithas.',
    sourceName: 'Wikipedia - Sharada Peeth',
    sourceUrl: 'https://en.wikipedia.org/wiki/Sharada_Peeth',
  },
  {
    id: 5,
    name: 'Mahaparvati',
    shaktiPeetha: 'Various Parvati traditions',
    location: 'Pan-India',
    description: 'The divine mother of the Himalayas, consort of Lord Shiva.',
    color: '#2E9B8F',
    gridPosition: { col: 5, row: 1 },
    longDescription:
      'Parvati, the divine mother of the Himalayas, is the consort of Lord Shiva and one of the central deities of Hinduism. She is considered the complete avatar of Adi Parashakti, encompassing all other goddess forms. Parvati is worshipped across India in numerous forms and traditions, representing the nurturing and benevolent aspect of the Divine Mother. She is the mother of Ganesha and Kartikeya and represents love, devotion, and spiritual harmony.',
    sourceName: 'Wikipedia - Parvati',
    sourceUrl: 'https://en.wikipedia.org/wiki/Parvati',
  },
  {
    id: 6,
    name: 'Kamakhya',
    shaktiPeetha: 'Guwahati, Assam',
    location: 'Assam',
    description: 'Tantric goddess of desire and creation, the bleeding goddess of Assam.',
    color: '#C73E5A',
    gridPosition: { col: 6, row: 1 },
    longDescription:
      'The Kamakhya Temple, situated on Nilachal Hills in Guwahati, Assam, is one of the oldest and most revered centres of Tantric practices. Dedicated to the goddess Kamakhya, the temple is the centre of the Kulachara Tantra Marga and the site of the Ambubachi Mela, an annual festival celebrating the menstruation of the goddess. The temple is structurally dated to the 8th-9th century with many subsequent rebuildings. Kamakhya is regarded as the goddess of desire and the embodiment of Kama, making this Peetha symbolic of creation.',
    sourceName: 'Wikipedia - Kamakhya Temple',
    sourceUrl: 'https://en.wikipedia.org/wiki/Kamakhya_Temple',
  },
  {
    id: 7,
    name: 'Kamakshi',
    shaktiPeetha: 'Kanchipuram, Tamil Nadu',
    location: 'Tamil Nadu',
    description: 'The goddess whose eyes are full of love, holding a sugarcane bow and arrows.',
    color: '#F0A04B',
    gridPosition: { col: 1, row: 2 },
    longDescription:
      'The Kamakshi Amman Temple in Kanchipuram, Tamil Nadu, is dedicated to Goddess Kamakshi, a primary aspect of Adi Shakti. Founded by the Pallava kings between the 5th and 8th centuries CE, it is believed that the navel of Sati fell here, giving the name Nabhi Peetham. The temple is the center of the Kanchi Kamakoti Peetham. Kamakshi is revered as a major deity of Shaktism and is depicted holding a sugarcane bow and arrows of flowers, symbolizing love and desire.',
    sourceName: 'Wikipedia - Kamakshi Amman Temple',
    sourceUrl: 'https://en.wikipedia.org/wiki/Kamakshi_Amman_Temple',
  },
  {
    id: 8,
    name: 'Bhramaramba',
    shaktiPeetha: 'Srisailam, Andhra Pradesh',
    location: 'Andhra Pradesh',
    description: 'Goddess in the form of a bee, the divine mother of Srisailam.',
    color: '#6B4F8E',
    gridPosition: { col: 2, row: 2 },
    longDescription:
      'The Mallikarjuna Temple at Srisailam houses the Bhramaramba Shakti Peeth, one of the 18 Maha Shakta Pithas. The goddess Bhramaramba, also known as Bhramari, is depicted as the consort of Mallikarjuna (Shiva). The legend of Daksha Yaga and the falling of Sati\'s body parts gave rise to this Shakta Pitha. The temple is unique as it houses both a Jyotirlinga and a Shakta Pitha, making it sacred to both Shaivism and Shaktism. Bhramaramba is associated with the form of a bee (bhramara).',
    sourceName: 'Wikipedia - Mallikarjuna Temple, Srisailam',
    sourceUrl: 'https://en.wikipedia.org/wiki/Mallikarjuna_Temple,_Srisailam',
  },
  {
    id: 9,
    name: 'Chamundeshwari',
    shaktiPeetha: 'Mysuru, Karnataka',
    location: 'Karnataka',
    description: 'Slayer of demons Chanda and Munda, riding a lion on Chamundi Hill.',
    color: '#A63332',
    gridPosition: { col: 3, row: 2 },
    longDescription:
      'The Chamundeshwari Temple, located atop Chamundi Hills about 13 km from Mysuru, Karnataka, is one of the 18 Shakta Pithas. It is known as Krouncha Pitha, as the region was known in Puranic times as Krouncha Puri. It is believed that the hair of Sati fell here. The goddess Chamundeshwari is revered as Nada Devi (state goddess) by the people of Karnataka. According to legend, Goddess Durga slew the demon king Mahishasura on this hill, from which the city of Mysuru derives its name.',
    sourceName: 'Wikipedia - Chamundeshwari Temple',
    sourceUrl: 'https://en.wikipedia.org/wiki/Chamundeshwari_Temple',
  },
  {
    id: 10,
    name: 'Jogulamba',
    shaktiPeetha: 'Alampur, Telangana',
    location: 'Telangana',
    description: 'Fierce goddess with scorpion symbolism, one of the Ashtadasha Shakti Peethas.',
    color: '#7A5C3A',
    gridPosition: { col: 4, row: 2 },
    longDescription:
      'The Jogulamba Temple at Alampur, Telangana, is one of the 18 Maha Shakta Pithas. The goddess is depicted in a fierce form with scorpion symbolism. Alampur is also home to the Navabrahma temples, a group of nine temples dedicated to Shiva. The original temple was destroyed and subsequently rebuilt. Jogulamba Devi is worshipped as a powerful form of the Divine Mother, and the temple sits at the confluence of the Tungabhadra and Krishna rivers.',
    sourceName: 'Wikipedia - Alampur',
    sourceUrl: 'https://en.wikipedia.org/wiki/Alampur,_Telangana',
  },
  {
    id: 11,
    name: 'Vishalakshi',
    shaktiPeetha: 'Varanasi, Uttar Pradesh',
    location: 'Uttar Pradesh',
    description: 'The large-eyed goddess worshipped at the sacred ghats of the Ganges.',
    color: '#D4762A',
    gridPosition: { col: 5, row: 2 },
    longDescription:
      'The Vishalakshi Temple at Varanasi (Kashi) is one of the 18 Maha Shakta Pithas. The goddess Vishalakshi, meaning "the large-eyed one," is an aspect of Adi Shakti. According to tradition, the earrings or eyes of Sati fell at this sacred site on the banks of the Ganges. Varanasi is one of the oldest continuously inhabited cities in the world, and the Vishalakshi Temple holds great significance for Shakta devotees. The goddess is also associated with Annapurna, the provider of nourishment.',
    sourceName: 'Wikipedia - Shakta Pithas',
    sourceUrl: 'https://en.wikipedia.org/wiki/Shakta_pithas',
  },
  {
    id: 12,
    name: 'Mangala Gauri',
    shaktiPeetha: 'Gaya, Bihar',
    location: 'Bihar',
    description: 'The auspicious four-armed goddess, worshipped for wellbeing and fortune.',
    color: '#E87B9E',
    gridPosition: { col: 6, row: 2 },
    longDescription:
      'The Mangala Gauri Temple in Gaya, Bihar, is one of the 18 Maha Shakta Pithas. The temple is dedicated to Mangala Gauri, an auspicious form of the goddess Parvati. According to tradition, the breast of Sati fell at this location. The goddess is worshipped as the grantor of wellbeing and fortune. Gaya is also one of the most sacred places for Hindu ancestral rituals (pind daan), making the Mangala Gauri Temple a significant pilgrimage destination for both Shakta and ancestral worship.',
    sourceName: 'Wikipedia - Shakta Pithas',
    sourceUrl: 'https://en.wikipedia.org/wiki/Shakta_pithas',
  },
  {
    id: 13,
    name: 'Jwalamukhi',
    shaktiPeetha: 'Kangra, Himachal Pradesh',
    location: 'Himachal Pradesh',
    description: 'The flaming goddess, where eternal blue flames burn from the rock as her tongue.',
    color: '#FF6B35',
    gridPosition: { col: 1, row: 3 },
    longDescription:
      'The Jwalamukhi Temple, located in Kangra, Himachal Pradesh, is one of the 18 Maha Shakta Pithas. The temple is unique in that it has no idol; instead, eternal blue flames burn from natural gas vents in the rock, representing the tongue of the goddess. According to tradition, the tongue of Sati fell here. The flames are considered a divine manifestation of the goddess Jwalamukhi, meaning "the flaming mouth." The temple attracts devotees throughout the year, especially during the Navratri festival.',
    sourceName: 'Wikipedia - Jwalamukhi Temple',
    sourceUrl: 'https://en.wikipedia.org/wiki/Jwalamukhi_Temple',
  },
  {
    id: 14,
    name: 'Manikyamba',
    shaktiPeetha: 'Draksharamam, Andhra Pradesh',
    location: 'Andhra Pradesh',
    description: 'The ruby-hued goddess, with precious gem symbolism at Draksharamam.',
    color: '#B8336A',
    gridPosition: { col: 2, row: 3 },
    longDescription:
      'The Manikyamba Temple at Draksharamam, Andhra Pradesh, is one of the 18 Maha Shakta Pithas. The goddess Manikyamba, whose name means "ruby-hued," is the presiding deity alongside Bhimeshwara (Shiva). According to tradition, the left cheek of Sati fell at this site. The Draksharamam temple complex is one of the five Pancharama Kshetras dedicated to Shiva. Manikyamba Devi is associated with precious gem symbolism and is worshipped as a powerful form of the Divine Mother.',
    sourceName: 'Wikipedia - Draksharamam',
    sourceUrl: 'https://en.wikipedia.org/wiki/Draksharamam',
  },
  {
    id: 15,
    name: 'Puruhutika',
    shaktiPeetha: 'Pithapuram, Andhra Pradesh',
    location: 'Andhra Pradesh',
    description: 'Goddess who fulfills all desires, the beloved deity of Pithapuram.',
    color: '#3A7CA5',
    gridPosition: { col: 3, row: 3 },
    longDescription:
      'The Puruhutika Devi Temple at Pithapuram, Andhra Pradesh, is one of the 18 Maha Shakta Pithas. The Kukkuteswara Swamy Temple houses the shrine of Puruhutika Devi. According to the Shakta pitha tradition, the back of Sati fell here, and the Peetha is known as Pushkarini Pitham. The goddess Puruhutika is believed to fulfill all desires of her devotees. Pithapuram is also known as Dakshina Kashi and is a significant pilgrimage town in Andhra Pradesh.',
    sourceName: 'Wikipedia - Shakta Pithas',
    sourceUrl: 'https://en.wikipedia.org/wiki/Shakta_pithas',
  },
  {
    id: 16,
    name: 'Biraja',
    shaktiPeetha: 'Jajpur, Odisha',
    location: 'Odisha',
    description: 'Fierce goddess with a spear, riding a buffalo, the presiding deity of Jajpur.',
    color: '#C44536',
    gridPosition: { col: 4, row: 3 },
    longDescription:
      'The Biraja Temple at Jajpur, Odisha, is one of the 18 Maha Shakta Pithas, known as the Oddyana Pitham. According to tradition, the navel of Sati fell at this location. The goddess Biraja is depicted as a fierce deity holding a spear and riding a buffalo. Jajpur, also known as Nabhigaya, is considered a sacred place for ancestral rites similar to Gaya. The temple dates back to ancient times and is a major Shakta pilgrimage center in eastern India.',
    sourceName: 'Wikipedia - Biraja Temple',
    sourceUrl: 'https://en.wikipedia.org/wiki/Biraja_Temple',
  },
  {
    id: 17,
    name: 'Ekaveerika',
    shaktiPeetha: 'Mahur, Maharashtra',
    location: 'Maharashtra',
    description: 'Fierce form of the goddess Renuka, mother of Parashurama, at Mahur.',
    color: '#5B7553',
    gridPosition: { col: 5, row: 3 },
    longDescription:
      'The Renuka Temple at Mahur, Maharashtra, is one of the 18 Maha Shakta Pithas, known as the Moola Pitham. According to tradition, the left hand of Sati fell here. The goddess Ekaveerika is identified with Renuka, the mother of the sage Parashurama. Renuka is revered as a powerful form of the Divine Mother in Maharashtra and southern India. The temple at Mahur is situated amidst scenic hills and is an important pilgrimage destination, especially during Navratri.',
    sourceName: 'Wikipedia - Shakta Pithas',
    sourceUrl: 'https://en.wikipedia.org/wiki/Shakta_pithas',
  },
  {
    id: 18,
    name: 'Lalita Madhaveshwari',
    shaktiPeetha: 'Prayagraj, Uttar Pradesh',
    location: 'Uttar Pradesh',
    description: 'The beautiful playful goddess, consort of Madhava, at the Triveni Sangam.',
    color: '#D4A537',
    gridPosition: { col: 6, row: 3 },
    longDescription:
      'The Lalita Madhaveshwari Temple at Prayagraj (Allahabad), Uttar Pradesh, is associated with the Triveni Sangam — the sacred confluence of the Ganges, Yamuna, and the mythical Saraswati rivers. The goddess is worshipped as the beautiful and playful consort of Madhava (Vishnu). Prayagraj is one of the four sites of the Kumbh Mela, the largest pilgrimage gathering in the world. The Shakta tradition associates this site with the fingers of Sati, making it a revered destination for devotees of the Divine Mother.',
    sourceName: 'Wikipedia - Prayagraj',
    sourceUrl: 'https://en.wikipedia.org/wiki/Prayagraj',
  },
];

export const devis: Devi[] = devisData.map((d) => ({
  ...d,
  image: deviImages[d.id],
}));
