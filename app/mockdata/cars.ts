import Challenger from '@/app/assets/mock/dodge/image 35.svg'
import Charger from '@/app/assets/mock/dodge/image 36.svg'
import Durango from '@/app/assets/mock/dodge/image 37.svg'
import GrandCaravan from '@/app/assets/mock/dodge/image 38.svg'

import Cherokee from '@/app/assets/mock/jeep/image 30.svg';
import Gladiator from '@/app/assets/mock/jeep/image 31.svg';
import GrandCherokee from '@/app/assets/mock/jeep/image 32.svg';
import Wrangler from '@/app/assets/mock/jeep/image 33.svg';

import LEXUS_IS from '@/app/assets/mock/lexus/image 23.svg';
import LEXUS_NX from '@/app/assets/mock/lexus/image 24.svg';
import LEXUS_UX from '@/app/assets/mock/lexus/image 25.svg';
import LEXUS_MS from '@/app/assets/mock/lexus/image 26.svg';
import LEXUS_LS from '@/app/assets/mock/lexus/image 27.svg';
import LEXUS_ES from '@/app/assets/mock/lexus/image 28.svg';
import LEXUS_OS from '@/app/assets/mock/lexus/image 29.svg';

import Camry from '@/app/assets/mock/toyota/image 10.svg';
import Corolla from '@/app/assets/mock/toyota/image 11.svg';
import Crown from '@/app/assets/mock/toyota/image 12.svg';
import Sienna from '@/app/assets/mock/toyota/image 13.svg';
import Runner_4 from '@/app/assets/mock/toyota/image 14.svg';
import Rav_4 from '@/app/assets/mock/toyota/image 15.svg';
import Prius from '@/app/assets/mock/toyota/image 16.svg';
import Tacoma from '@/app/assets/mock/toyota/image 17.svg';
import Highlander from '@/app/assets/mock/toyota/image 18.svg';
import Innova from '@/app/assets/mock/toyota/image 19.svg';
import LandCruiser from '@/app/assets/mock/toyota/image 20.svg';
import Sequoia from '@/app/assets/mock/toyota/image 21.svg';
import Fortuner from '@/app/assets/mock/toyota/image 22.svg';
import Supra from '@/app/assets/mock/toyota/image 3.svg';
import CorollaCross from '@/app/assets/mock/toyota/image 4.svg';

import VolvoS60 from '@/app/assets/mock/volvo/image 39.svg'
import VolvoV60 from '@/app/assets/mock/volvo/image 40.svg'
import VolvoXC40 from '@/app/assets/mock/volvo/image 41.svg'
import VolvoXC60 from '@/app/assets/mock/volvo/image 42.svg'
import VolvoXC90 from '@/app/assets/mock/volvo/image 43.svg'
import VolvoXC91 from '@/app/assets/mock/volvo/image 44.svg'

export default function getMockedCars() {
    return [
        {
            id: 1,
            slug: 'challenger',
            name: 'Challenger',
            image: Challenger,
            brand: 'Dodge',
            price: 183500,
        },
        {
            id: 2,
            slug: 'charger',
            name: 'Charger',
            image: Charger,
            brand: 'Dodge',
            price: 164416,
        },
        {
            id: 3,
            slug: 'durango',
            name: 'Durango',
            image: Durango,
            brand: 'Dodge',
            price: 173224,
        },
        {
            id: 4,
            slug: 'grand-caravan',
            name: 'Grand Caravan',
            image: GrandCaravan,
            brand: 'Jeep',
            price: 180000
        },
        {
            id: 5,
            slug: 'cherokee',
            name: 'Cherokee',
            image: Cherokee,
            brand: 'Jeep',
            price: 180000,
        },
        {
            id: 6,
            slug: 'gladiator',
            name: 'Gladiator',
            image: Gladiator,
            brand: 'Jeep',
            price: 180000,
        },
        {
            id: 7,
            slug: 'grand-cherokee',
            name: 'Grand Cherokee',
            image: GrandCherokee,
            brand: 'Jeep',
            price: 180000,
        },
        {
            id: 8,
            slug: 'wrangler',
            name: 'Wrangler',
            image: Wrangler,
            brand: 'Jeep',
            price: 180000,
        },
        {
            id: 9,
            slug: 'lexus-is',
            name: 'Lexus IS',
            image: LEXUS_IS,
            brand: 'Lexus',
            price: 180000,
        },
        {
            id: 10,
            slug: 'lexus-nx',
            name: 'Lexus NX',
            image: LEXUS_NX,
            brand: 'Lexus',
            price: 180000,
        },
        {
            id: 11,
            slug: 'lexus-ux',
            name: 'Lexus UX',
            image: LEXUS_UX,
            brand: 'Lexus',
            price: 180000,
        },
        {
            id: 12,
            slug: 'lexus-ms',
            name: 'Lexus MS',
            image: LEXUS_MS,
            brand: 'Lexus',
            price: 180000,
        },
        {
            id: 13,
            slug: 'lexus-ls',
            name: 'Lexus LS',
            image: LEXUS_LS,
            brand: 'Lexus',
            price: 180000,
        },
        {
            id: 14,
            slug: 'lexus-es',
            name: 'Lexus ES',
            image: LEXUS_ES,
            brand: 'Lexus',
            price: 180000,
        },
        {
            id: 15,
            slug: 'lexus-oc',
            name: 'Lexus OC',
            image: LEXUS_OS,
            brand: 'Lexus',
            price: 180000,
        },
        {
            id: 16,
            slug: 'camry',
            name: 'Camry',
            image: Camry,
            brand: 'Toyota',
            price: 180000,
        },
        {
            id: 17,
            slug: 'corolla',
            name: 'Corolla',
            image: Corolla,
            brand: 'Toyota',
            price: 180000,
        },
        {
            id: 18,
            slug: 'highlander',
            name: 'Highlander',
            image: Highlander,
            brand: 'Toyota',
            price: 180000,
        },
        {
            id: 19,
            slug: 'innova',
            name: 'Innova',
            image: Innova,
            brand: 'Toyota',
            price: 180000,
        },
        {
            id: 20,
            slug: 'land-cruiser',
            name: 'Land Cruiser',
            image: LandCruiser,
            brand: 'Toyota',
            price: 180000,
        },
        {
            id: 21,
            slug: 'crown',
            name: 'Crown',
            image: Crown,
            brand: 'Toyota',
            price: 180000,
        },
        {
            id: 22,
            slug: 'prius',
            name: 'Prius',
            image: Prius,
            brand: 'Toyota',
            price: 180000,
        },
        {
            id: 23,
            slug: 'sienna',
            name: 'Sienna',
            image: Sienna,
            brand: 'Toyota',
            price: 180000,
        },
        {
            id: 24,
            slug: 'tacoma',
            name: 'Tacoma',
            image: Tacoma,
            brand: 'Toyota',
            price: 180000,
        },
        {
            id: 25,
            slug: 'sequoia',
            name: 'Sequoia',
            image: Sequoia,
            brand: 'Toyota',
            price: 180000,
        },
        {
           id: 26,
           slug: 'fortuner',
           name: 'Fortuner',
           image: Fortuner,
           brand: 'Toyota',
           price: 180000
        },
        {
            id: 27,
            slug: '4runner',
            name: '4Runner',
            image: Runner_4,
            brand: 'Toyota',
            price: 180000
        },
        {
            id: 28,
            slug: 'rav-4',
            name: 'Rav 4',
            image: Rav_4,
            brand: 'Toyota',
            price: 180000
        },
        {
            id: 29,
            slug: 'supra',
            name: 'Supra',
            image: Supra,
            brand: 'Toyota',
            price: 180000
        },
        {
            id: 30,
            slug: 'corolla-cross',
            name: 'Corolla Cross',
            image: CorollaCross,
            brand: 'Toyota',
            price: 200000
        },
        {
            id: 31,
            slug: 'volvo-s60',
            name: 'Volvo S60',
            image: VolvoS60,
            brand: 'Volvo',
            price: 180000
        },
        {
            id: 32,
            slug: 'volvo-v60',
            name: 'Volvo V60',
            image: VolvoV60,
            brand: 'Volvo',
            price: 180000
        },
        {
            id: 33,
            slug: 'volvo-xc40',
            name: 'Volvo XC40',
            image: VolvoXC40,
            brand: 'Volvo',
            price: 180000
        },
        {
            id: 33,
            slug: 'volvo-xc40',
            name: 'Volvo XC40',
            image: VolvoXC40,
            brand: 'Volvo',
            price: 180000
        },
        {
            id: 34,
            slug: 'volvo-xc60',
            name: 'Volvo XC60',
            image: VolvoXC60,
            brand: 'Volvo',
            price: 180000
        },
        {
            id: 35,
            slug: 'volvo-xc90',
            name: 'Volvo XC90',
            image: VolvoXC90,
            brand: 'Volvo',
            price: 180000
        },
        {
            id: 36,
            slug: 'volvo-s91',
            name: 'Volvo S91',
            image: VolvoXC91,
            brand: 'Volvo',
            price: 180000
        },
    ]
}