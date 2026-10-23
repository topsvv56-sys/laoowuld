export interface Job {
  id: string;
  no: string;
  title: string;
  locKey: 'headquarters' | 'thongkhankham' | 'itecc_exhibit' | 'itecc_mall';
  location: string;
  categoryKey: 'cat-mgt' | 'cat-it' | 'cat-mkt' | 'cat-adm' | 'cat-ops';
  type: string;
  responsibilities: string[];
  requirements: string[];
  startDate?: string;
  endDate?: string;
}

export interface Category {
  key: 'cat-mgt' | 'cat-it' | 'cat-mkt' | 'cat-adm' | 'cat-ops';
  title: string;
  icon: string;
  color: string;
}

export interface Application {
  id: string;
  title: string;
  location: string;
  candidateName: string;
  date: string;
  status: string;
}

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
}

export type ViewType =
  | "jobs"
  | "login"
  | "signup"
  | "talent"
  | "contact"
  | "detail"
  | "tracker"
  | "about";

export type LocationFilter =
  | "all"
  | "headquarters"
  | "thongkhankham"
  | "itecc_exhibit"
  | "itecc_mall";

export type LanguageType = "lo" | "en";

export const CATEGORIES: Category[] = [
  { key: 'cat-mgt', title: '1. ລະດັບບໍລິຫານ ແລະ ຫົວໜ້າ', icon: 'briefcase', color: 'bg-indigo-900 text-white' },
  { key: 'cat-it', title: '2. ໄອທີ, ສື່ ແລະ ຄວາມຄິດສ້າງສັນ', icon: 'laptop', color: 'bg-slate-700 text-white' },
  { key: 'cat-mkt', title: '3. ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ', icon: 'megaphone', color: 'bg-amber-600 text-white' },
  { key: 'cat-adm', title: '4. ການເງິນ, ນິຕິກຳ ແລະ ບໍລິຫານຫ້ອງການ', icon: 'file-text', color: 'bg-purple-800 text-white' },
  { key: 'cat-ops', title: '5. ບໍລິການໜ້າຮ້ານ ແລະ ປະຕິບັດການທົ່ວໄປ', icon: 'concierge-bell', color: 'bg-teal-700 text-white' }
];

export const ALL_JOBS: Job[] = [
  // 1. Management (ລະດັບບໍລິຫານ ແລະ ຫົວໜ້າ)
  { 
    id: 'mgt-01', no: '01', title: 'ຫົວໜ້າຂະແໜງ ພັດທະນາບຸກຄະລາກອນ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-mgt', type: 'Full-time',
    responsibilities: [
      'ວາງແຜນຍຸດທະສາດການສັນຫາ ແລະ ພັດທະນາບຸກຄະລາກອນທົ່ວກຸ່ມບໍລິສັດ ລາວເວີລ ມະຫາຊົນ',
      'ຈັດທຳຫຼັກສູດຝຶກອົບຮົມ ແລະ ປະເມີນຜົນການປະຕິບັດງານ (KPIs / Performance Appraisal)',
      'ຄຸ້ມຄອງນະໂຍບາຍຄ່າຕອບແທນ, ສະຫວັດດີການ ແລະ ແຮງງານສຳພັນໃຫ້ສອດຄ່ອງກັບກົດໝາຍແຮງງານລາວ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີຂຶ້ນໄປ ສາຂາການຄຸ້ມຄອງບຸກຄະລາກອນ, ບໍລິຫານທຸລະກິດ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'ມີປະສົບການໃນລະດັບຫົວໜ້າງານ HR ຢ່າງໜ້ອຍ 3-5 ປີ',
      'ມີຄວາມເປັນຜູ້ນຳສູງ, ເກັ່ງດ້ານການສື່ສານ ແລະ ການແກ້ໄຂຂໍ້ຂັດແຍ່ງ'
    ]
  },
  { 
    id: 'mgt-02', no: '01', title: 'ຜູ້ຈັດການພະແນກ ຂາຍ ແລະ ການຕະຫຼາດ', locKey: 'thongkhankham', location: 'ສູນການຄ້າທົ່ງຂັນຄຳ', categoryKey: 'cat-mgt', type: 'Full-time',
    responsibilities: [
      'ວາງແຜນຍຸດທະສາດການຂາຍພື້ນທີ່ເຊົ່າ ແລະ ໂປຣໂມຊັ່ນດຶງດູດລູກຄ້າເຂົ້າມາສູນການຄ້າທົ່ງຂັນຄຳ',
      'ຄຸ້ມຄອງທີມງານຂາຍ, ເຈລະຈາສັນຍາກັບຮ້ານຄ້າລາຍໃຫຍ່ ແລະ ຕິດຕາມຍອດຂາຍລວມ',
      'ວິເຄາະທ່າອ່ຽງຕະຫຼາດ ແລະ ພຶດຕິກຳຜູ້ບໍລິໂພກ ເພື່ອພັດທະນາພື້ນທີ່ໃຫ້ເກີດລາຍຮັບສູງສຸດ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີ ສາຂາການຕະຫຼາດ, ການຂາຍ, ບໍລິຫານທຸລະກິດ',
      'ມີປະສົບການບໍລິຫານງານຂາຍພື້ນທີ່ເຊົ່າ/ສູນການຄ້າ ຢ່າງໜ້ອຍ 3 ປີ',
      'ມີທັກສະການເຈລະຈາຕໍ່ຮອງ ແລະ ການປິດການຂາຍທີ່ໂດດເດັ່ນ'
    ]
  },
  { 
    id: 'mgt-03', no: '01', title: 'ຫົວໜ້າຂະແໜງ ການຕະຫຼາດ', locKey: 'itecc_exhibit', location: 'ລາວ-ໄອເຕັກ', categoryKey: 'cat-mgt', type: 'Full-time',
    responsibilities: [
      'ວາງແຜນການຕະຫຼາດ ແລະ ປະຊາສຳພັນງານວາງສະແດງສິນຄ້າລະດັບຊາດ ແລະ ສາກົນ ທີ່ ລາວ-ໄອເຕັກ',
      'ສ້າງແຄມເປນການຕະຫຼາດທັງແບບ Online ແລະ Offline ເພື່ອດຶງດູດຜູ້ຮ່ວມອອກບູດ ແລະ ຜູ້ເຂົ້າຊົມງານ',
      'ປະສານງານກັບບັນດາສະຖານທູດ, ສະພາການຄ້າ ແລະ ພາກທຸລະກິດຕ່າງໆ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີ ການຕະຫຼາດ, ນິເທດສາດ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'ມີປະສົບການດ້ານ Event Marketing / Exhibition ຢ່າງໜ້ອຍ 2-3 ປີ',
      'ສາມາດສື່ສານພາສາອັງກິດໄດ້ດີ'
    ]
  },
  { 
    id: 'mgt-04', no: '01', title: 'ຜູ້ຈັດການພະແນກ ການຕະຫຼາດ', locKey: 'itecc_mall', location: 'ໄອເຕັກມໍ', categoryKey: 'cat-mgt', type: 'Full-time',
    responsibilities: [
      'ກຳນົດທິດທາງການຕະຫຼາດຂອງ ໄອເຕັກມໍ ເພື່ອເພີ່ມ Traffic ຜູ້ມາຊື້ເຄື່ອງ ແລະ ໃຊ້ບໍລິການ',
      'ວາງແຜນກິດຈະກຳຕາມເທດສະການ, Weekend Market, Concert ແລະ Seasonal Campaigns',
      'ຄວບຄຸມງົບປະມານການຕະຫຼາດ ແລະ ວັດແທກ ROI ຂອງແຕ່ລະແຄມເປນ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີຂຶ້ນໄປ ສາຂາການຕະຫຼາດ ຫຼື ບໍລິຫານທຸລະກິດ',
      'ມີປະສົບການດ້ານ Retail/Mall Marketing ຢ່າງໜ້ອຍ 3-5 ປີ',
      'ມີຄວາມຄິດສ້າງສັນ ແລະ ເຂົ້າໃຈທ່າອ່ຽງ Lifestyle ຂອງໄວໜຸ່ມ ແລະ ຄອບຄົວ'
    ]
  },
  { 
    id: 'mgt-05', no: '02', title: 'ຫົວໜ້າຂະແໜງ ບໍລິຫານຫ້ອງການ', locKey: 'itecc_mall', location: 'ໄອເຕັກມໍ', categoryKey: 'cat-mgt', type: 'Full-time',
    responsibilities: [
      'ຄຸ້ມຄອງວຽກງານບໍລິຫານທົ່ວໄປ, ຄວາມສະອາດ, ຄວາມປອດໄພ ແລະ ພູມິທັດພາຍໃນ ໄອເຕັກມໍ',
      'ຄວບຄຸມລະບົບເອກະສານ, ໜັງສືເຂົ້າ-ອອກ ແລະ ວຽກງານຈັດຊື້-ຈັດຈ້າງອຸປະກອນຫ້ອງການ',
      'ດູແລ ແລະ ປະສານງານແກ້ໄຂບັນຫາປະຈຳວັນຂອງບັນດາຮ້ານຄ້າຜູ້ເຊົ່າພາຍໃນສູນ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີ ບໍລິຫານທຸລະກິດ, ການຈັດການທົ່ວໄປ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'ມີປະສົບການວຽກງານ Admin / Office Management ຢ່າງໜ້ອຍ 2 ປີ',
      'ມີຄວາມລະອຽດຮອບຄອບ ແລະ ມີທັກສະການແກ້ໄຂບັນຫາສະເພາະໜ້າໄດ້ດີ'
    ]
  },
  { 
    id: 'mgt-06', no: '03', title: 'ຫົວໜ້າຂະແໜງ ຂາຍ', locKey: 'itecc_mall', location: 'ໄອເຕັກມໍ', categoryKey: 'cat-mgt', type: 'Full-time',
    responsibilities: [
      'ນຳພາທີມງານຂາຍພື້ນທີ່ຮ້ານຄ້າ, ພື້ນທີ່ບູດໂປຣໂມຊັ່ນ ແລະ ປ້າຍໂຄສະນາພາຍໃນ ໄອເຕັກມໍ',
      'ສ້າງ ແລະ ຮັກສາສາຍພົວພັນອັນດີກັບບັນດາຄູ່ຄ້າ, ແບຣນສິນຄ້າ ແລະ ຜູ້ເຊົ່າ',
      'ວາງແຜນເປົ້າໝາຍການຂາຍປະຈຳເດືອນ ແລະ ລາຍງານຍອດຂາຍຕໍ່ຜູ້ບໍລິຫານ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີ ການຂາຍ, ການຕະຫຼາດ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'ມີປະສົບການໃນວຽກງານຂາຍພື້ນທີ່ສູນການຄ້າ ຫຼື ອະສັງຫາລິມະຊັບ 2 ປີຂຶ້ນໄປ',
      'ມີມະນຸດສຳພັນດີ ແລະ ທັກສະການນຳສະເໜີ (Presentation Skills) ທີ່ເຂັ້ມແຂງ'
    ]
  },
  { 
    id: 'mgt-07', no: '04', title: 'ຫົວໜ້າຂະແໜງ ສູນອາຫານ', locKey: 'itecc_mall', location: 'ໄອເຕັກມໍ', categoryKey: 'cat-mgt', type: 'Full-time',
    responsibilities: [
      'ຄຸ້ມຄອງ ແລະ ບໍລິຫານ Food Court ໄອເຕັກມໍ ທັງດ້ານມາດຕະຖານສຸຂະອະນາໄມ ແລະ ຄຸນນະພາບອາຫານ',
      'ຄຸ້ມຄອງການເກັບເງິນລະບົບ Food Court Card, ກວດສອບຍອດຂາຍ ແລະ ບັນຊີຮ້ານອາຫານ',
      'ຄັດເລືອກ ແລະ ສັນຫາຮ້ານອາຫານໃໝ່ໆທີ່ມີຊື່ສຽງ ແລະ ຄຸນນະພາບເຂົ້າມາເປີດໃຫ້ບໍລິການ'
    ],
    requirements: [
      'ຈົບການສຶກສາຊັ້ນສູງ ຫຼື ປະລິນຍາຕີ ສາຂາການໂຮງແຮມ, ການບໍລິການ, ບໍລິຫານທຸລະກິດ',
      'ມີປະສົບການບໍລິຫານສູນອາຫານ, ຮ້ານອາຫານຂະໜາດໃຫຍ່ ຫຼື F&B ຢ່າງໜ້ອຍ 2 ປີ',
      'ມີຄວາມຮູ້ດ້ານມາດຕະຖານ Food Safety & Hygiene'
    ]
  },

  // 2. IT, Creative & Media (ໄອທີ, ສື່ ແລະ ຄວາມຄິດສ້າງສັນ)
  { 
    id: 'it-01', no: '06', title: 'ວິຊາການ ໄອທີຊັບພອດ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-it', type: 'Full-time',
    responsibilities: [
      'ດູແລ ແລະ ແກ້ໄຂບັນຫາຄອມພິວເຕີ, ປຣິນເຕີ, ລະບົບ Network (LAN, Wi-Fi) ແລະ ອຸປະກອນໄອທີທົ່ວຫ້ອງການ',
      'ຕິດຕັ້ງ ແລະ ອັບເດດ Windows, MS Office, Antivirus ແລະ ໂປຣແກຣມນຳໃຊ້ພາຍໃນອົງກອນ',
      'ຊ່ວຍເຫຼືອດູແລລະບົບ Backup ຂໍ້ມູນ ແລະ ລະບົບກ້ອງວົງຈອນປິດ (CCTV)'
    ],
    requirements: [
      'ຈົບຊັ້ນສູງ ຫຼື ປະລິນຍາຕີ ສາຂາວິທະຍາສາດຄອມພິວເຕີ, ໄອທີ ຫຼື ວິສະວະກຳເຄືອຂ່າຍ',
      'ມີຄວາມຮູ້ພື້ນຖານດ້ານ Network Troubleshooting, Hardware & Software',
      'ມີຈິດໃຈບໍລິການ (Service Mind) ແລະ ພ້ອມຮຽນຮູ້ລະບົບໃໝ່'
    ]
  },
  { 
    id: 'it-02', no: '05', title: 'ວິຊາການ ຕັດຕໍ່ວິດີໂອ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-it', type: 'Full-time',
    responsibilities: [
      'ຕັດຕໍ່ວິດີໂອໂປຣໂມດ, ຄລິບສັ້ນ TikTok, Reels ແລະ ວິດີໂອສຳພາດ/ງານອີເວັ້ນຂອງກຸ່ມ ລາວເວີລ',
      'ໃສ່ສຽງ, Sound Effects, Color Grading ແລະ Motion Graphics ໃຫ້ໜ້າສົນໃຈ',
      'ຮ່ວມມືກັບທີມ Content Creator ໃນການວາງ Storyboard ແລະ ແນວທາງວິດີໂອ'
    ],
    requirements: [
      'ຊຳນານການນຳໃຊ້ໂປຣແກຣມ Adobe Premiere Pro, After Effects ຫຼື CapCut PC',
      'ມີຜົນງານວິດີໂອ (Showreel / Portfolio) ປະກອບການສະໝັກ',
      'ມີຄວາມຄິດສ້າງສັນ, ເຂົ້າໃຈຈັງຫວະຕັດຕໍ່ ແລະ ຮັກສາເສັ້ນຕາຍຂອງວຽກໄດ້ດີ'
    ]
  },
  { 
    id: 'it-03', no: '04', title: 'ວິຊາການ ສ້າງຄອນເທັ້ນ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-it', type: 'Full-time',
    responsibilities: [
      'ຄິດ ແລະ ຂຽນຄອນເທັ້ນ (Copywriting), ບົດໂພສ Facebook, TikTok, Website ແລະ ບົດຄວາມ PR',
      'ວາງແຜນຕາຕະລາງການໂພສເນື້ອຫາ (Content Calendar) ຂອງແຕ່ລະສາຂາ',
      'ວິເຄາະ Engagement ແລະ ສ້າງສັນຮູບແບບຄອນເທັ້ນໃໝ່ໆຕາມກະແສ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີ ນິເທດສາດ, ພາສາລາວ/ສື່ສານມວນຊົນ, ການຕະຫຼາດ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'ມີທັກສະການຂຽນພາສາລາວໄດ້ຢ່າງຖືກຕ້ອງ, ມ່ວນອອນຊອນ ແລະ ດຶງດູດຜູ້ອ່ານ',
      'ມີຄວາມເຂົ້າໃຈໃນການເຮັດສື່ Social Media Platform ຕ່າງໆ'
    ]
  },
  { 
    id: 'it-04', no: '03', title: 'ວິຊາການ ອອກແບບ ແລະ ຖ່າຍທຳ', locKey: 'itecc_exhibit', location: 'ລາວ-ໄອເຕັກ', categoryKey: 'cat-it', type: 'Full-time',
    responsibilities: [
      'ຖ່າຍຮູບ ແລະ ຖ່າຍວິດີໂອບັນຍາກາດງານວາງສະແດງ, ງານລ້ຽງ ແລະ ອີເວັ້ນຕ່າງໆ ທີ່ ລາວ-ໄອເຕັກ',
      'ອອກແບບສື່ສິ່ງພິມ (Artwork), ປ້າຍໄວນິວ, Backdrop, Standee, Poster ໂປຣໂມດງານ',
      'ຈັດການ ແລະ ເກັບຮັກສາຄັງໄຟລ໌ຮູບພາບ ແລະ ວິດີໂອຂອງອົງກອນ'
    ],
    requirements: [
      'ນຳໃຊ້ກ້ອງ Mirrorless / DSLR, ອຸປະກອນໄຟ ແລະ Gimbal ໄດ້ຢ່າງຄ່ອງແຄ້ວ',
      'ຊຳນານການໃຊ້ Adobe Photoshop, Illustrator ແລະ Lightroom',
      'ມີ Portfolio ດ້ານການຖ່າຍຮູບ ແລະ ອອກແບບກຣາບຟຣິກ'
    ]
  },
  { 
    id: 'it-05', no: '07', title: 'ວິຊາການ ແສງສີສຽງ', locKey: 'itecc_exhibit', location: 'ລາວ-ໄອເຕັກ', categoryKey: 'cat-it', type: 'Full-time',
    responsibilities: [
      'ຄວບຄຸມລະບົບສຽງ (Mixer, Microphone), ລະບົບໄຟເວທີ (Stage Lighting) ແລະ ຈໍ LED ໃຫຍ່ໃນຫ້ອງປະຊຸມ/ງານດອງ',
      'ກວດກາ, ຕິດຕັ້ງ ແລະ ທົດສອບອຸປະກອນກ່ອນເລີ່ມງານທຸກຄັ້ງ ເພື່ອບໍ່ໃຫ້ມີຂໍ້ຜິດພາດ',
      'ບຳລຸງຮັກສາ ແລະ ສ້ອມແປງອຸປະກອນສຽງ-ແສງໃຫ້ພ້ອມໃຊ້ງານຕະຫຼອດເວລາ'
    ],
    requirements: [
      'ຈົບຊັ້ນສູງຂຶ້ນໄປ ສາຂາໄຟຟ້າ-ເອເລັກໂຕຣນິກ, ສຽງ-ແສງ ຫຼື ມີປະສົບການດ້ານ Audio-Visual',
      'ມີປະສົບການຄວບຄຸມລະບົບສຽງ-ແສງໃນງານ Event, Concert ຫຼື ງານດອງ 1 ປີຂຶ້ນໄປ',
      'ສາມາດເຮັດວຽກຕາມຕາຕະລາງງານອີເວັ້ນ (ລວມທັງຕອນແລງ ຫຼື ທ້າຍອາທິດ) ໄດ້'
    ]
  },
  { 
    id: 'it-06', no: '05', title: 'ວິຊາການ ຕັດຕໍ່ວິດີໂອກຣາບຟຣິກ', locKey: 'itecc_mall', location: 'ໄອເຕັກມໍ', categoryKey: 'cat-it', type: 'Full-time',
    responsibilities: [
      'ສ້າງວິດີໂອ Motion Graphics, Animation ສັ້ນ ແລະ ຄລິບໂຄສະນາສິນຄ້າຮ້ານຄ້າໃນ ໄອເຕັກມໍ',
      'ຕັດຕໍ່ວິດີໂອສະຫຼຸບກິດຈະກຳ, Mini Concert ແລະ ໂປຣໂມຊັ່ນຕ່າງໆຂອງສູນການຄ້າ',
      'ອອກແບບ Title, Subtitle, Intro/Outro ສຳລັບສື່ Social Media'
    ],
    requirements: [
      'ຊຳນານໂປຣແກຣມ After Effects, Premiere Pro, Illustrator',
      'ມີຄວາມເຂົ້າໃຈເລິກເຊິ່ງກ່ຽວກັບ Motion Typography, Visual Rhythm ແລະ Color Scheme',
      'ມີຕົວຢ່າງຜົນງານ Motion Graphics / Video Portfolio'
    ]
  },

  // 3. Marketing & Sales (ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ)
  { 
    id: 'mkt-01', no: '03', title: 'ວິຊາການອາວຸໂສ ພົວພັນການຄ້າ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-mkt', type: 'Full-time',
    responsibilities: [
      'ພົວພັນປະສານງານກັບຄູ່ຄ້າທຸລະກິດ, ສະມາຄົມການຄ້າ, ອົງການຈັດຕັ້ງພາກລັດ ແລະ ຕ່າງປະເທດ',
      'ຈັດກຽມເອກະສານສັນຍາຮ່ວມມື, MOU ແລະ ນຳສະເໜີໂຄງການພັດທະນາທຸລະກິດຂອງກຸ່ມ ລາວເວີລ',
      'ເຂົ້າຮ່ວມກອງປະຊຸມເຈລະຈາ ແລະ ຕິດຕາມຄວາມຄືບໜ້າຂອງຂໍ້ຕົກລົງທາງການຄ້າ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີ ສາຂາສາຍພົວພັນສາກົນ, ເສດຖະສາດ, ບໍລິຫານທຸລະກິດ',
      'ມີປະສົບການດ້ານ Business Development ຫຼື ພົວພັນຕ່າງປະເທດ 3 ປີຂຶ້ນໄປ',
      'ສື່ສານພາສາອັງກິດໄດ້ດີຫຼາຍ'
    ]
  },
  { 
    id: 'mkt-02', no: '02', title: 'ວິຊາການ ຂາຍ', locKey: 'thongkhankham', location: 'ສູນການຄ້າທົ່ງຂັນຄຳ', categoryKey: 'cat-mkt', type: 'Full-time',
    responsibilities: [
      'ຕິດຕໍ່ ແລະ ນຳສະເໜີພື້ນທີ່ເຊົ່າຂາຍເຄື່ອງ, ລັອກຂາຍອາຫານ ແລະ ພື້ນທີ່ບູດໃຫ້ແກ່ພໍ່ຄ້າຊາວຂາຍ',
      'ພາລູກຄ້າສຳຫຼວດພື້ນທີ່ຈິງ, ອະທິບາຍລາຄາ ແລະ ເງື່ອນໄຂການເຊົ່າ',
      'ຕິດຕາມການຕໍ່ສັນຍາ ແລະ ຊ່ວຍເຫຼືອລູກຄ້າຜູ້ເຊົ່າໃນການເລີ່ມຕົ້ນເປີດຮ້ານ'
    ],
    requirements: [
      'ຈົບຊັ້ນສູງ ຫຼື ປະລິນຍາຕີ ສາຂາການຂາຍ, ການຕະຫຼາດ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'ມີທັກສະການເຈລະຈາ, ຍິ້ມແຍ້ມແຈ່ມໃສ, ຮັກວຽກງານບໍລິການ',
      'ຫາກມີປະສົບການຂາຍພື້ນທີ່ຕະຫຼາດ ຫຼື ສູນການຄ້າ ຈະພິຈາລະນາເປັນພິເສດ'
    ]
  },
  { 
    id: 'mkt-03', no: '04', title: 'ພະນັກງານ ປະຊາສຳພັນ', locKey: 'thongkhankham', location: 'ສູນການຄ້າທົ່ງຂັນຄຳ', categoryKey: 'cat-mkt', type: 'Part-time',
    responsibilities: [
      'ຕ້ອນຮັບ ແລະ ໃຫ້ຂໍ້ມູນແກ່ລູກຄ້າທີ່ມາໃຊ້ບໍລິການທີ່ສູນການຄ້າທົ່ງຂັນຄຳ',
      'ປະກາດສຽງຕາມສາຍ (ແຈ້ງໂປຣໂມຊັ່ນ, ປະກາດລົດຂວາງທາງ, ເດັກນ້ອຍພັດຫຼົງ, ຂອງຕົກເຮ່ຍ)',
      'ຊ່ວຍເຫຼືອການຈັດກິດຈະກຳສົ່ງເສີມການຂາຍ ແລະ ແຈກຂອງລາງວັນໜ້າລານກິດຈະກຳ'
    ],
    requirements: [
      'ນ້ຳສຽງມ່ວນ, ຊັດເຈນ, ອອກສຽງພາສາລາວໄດ້ຖືກຕ້ອງ ແລະ ຄ່ອງແຄ້ວ',
      'ມີບຸກຄະລິກກະພາບດີ, ມີມະນຸດສຳພັນດີ ແລະ ມີຄວາມອົດທົນ',
      'ນັກສຶກສາທີ່ກຳລັງຮຽນຢູ່ກໍສາມາດສະໝັກເຮັດວຽກແບບ Part-time ໄດ້'
    ]
  },
  { 
    id: 'mkt-04', no: '02', title: 'ວິຊາການ ຈັດງານລ້ຽງ ແລະ ງານປະຊຸມ', locKey: 'itecc_exhibit', location: 'ລາວ-ໄອເຕັກ', categoryKey: 'cat-mkt', type: 'Full-time',
    responsibilities: [
      'ຮັບບຸກກິ້ງ, ໃຫ້ຄຳປຶກສາ ແລະ ວາງແຜນການຈັດງານດອງ, ງານລ້ຽງສັງສັນ, ກອງປະຊຸມສຳມະນາ',
      'ປະສານງານກັບທີມງານຈັດສະຖານທີ່, ທີມອາຫານ-ເຄື່ອງດື່ມ (Catering) ແລະ ທີມແສງສີສຽງ',
      'ຄວບຄຸມດູແລຄວາມຮຽບຮ້ອຍໃນມື້ຈັດງານຕົວຈິງຕັ້ງແຕ່ເລີ່ມຈົນຈົບງານ'
    ],
    requirements: [
      'ຈົບຊັ້ນສູງ ຫຼື ປະລິນຍາຕີ ສາຂາການໂຮງແຮມ, ການທ່ອງທ່ຽວ, ການຕະຫຼາດ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'ມີປະສົບການວຽກງານ Banquet, Wedding Coordinator ຫຼື Event Organizer 1 ປີຂຶ້ນໄປ',
      'ມີຄວາມຄ່ອງແຄ້ວ, ແກ້ໄຂບັນຫາສະເພາະໜ້າໄດ້ດີ ແລະ ທົນຕໍ່ແຮງກົດດັນໄດ້'
    ]
  },
  { 
    id: 'mkt-05', no: '04', title: 'ວິຊາການ ປະຊາສຳພັນ', locKey: 'itecc_exhibit', location: 'ລາວ-ໄອເຕັກ', categoryKey: 'cat-mkt', type: 'Part-time',
    responsibilities: [
      'ຕ້ອນຮັບແຂກ VIP, ຄະນະຜູ້ແທນ ແລະ ຜູ້ມາຮ່ວມງານວາງສະແດງສິນຄ້າ',
      'ໃຫ້ຂໍ້ມູນຕຳແໜ່ງບູດ, ຕາຕະລາງກິດຈະກຳ ແລະ ການລົງທະບຽນເຂົ້າຮ່ວມງານ',
      'ປະສານງານກັບສື່ມວນຊົນ ແລະ ນັກຂ່າວໃນມື້ເປີດພິທີ'
    ],
    requirements: [
      'ຮູບຮ່າງໜ້າຕາ ແລະ ບຸກຄະລິກກະພາບດີ, ຍິ້ມແຍ້ມແຈ່ມໃສ',
      'ສາມາດສື່ສານພາສາອັງກິດ ຫຼື ພາສາຈີນຂັ້ນພື້ນຖານໄດ້',
      'ມີຄວາມຮັບຜິດຊອບຕໍ່ເວລາ ແລະ ຮັກວຽກງານບໍລິການ'
    ]
  },
  { 
    id: 'mkt-06', no: '06', title: 'ວິຊາການ ບໍລິການລູກຄ້າ', locKey: 'itecc_mall', location: 'ໄອເຕັກມໍ', categoryKey: 'cat-mkt', type: 'Full-time',
    responsibilities: [
      'ປະຈຳເຄົາເຕີປະຊາສຳພັນ ແລະ Customer Service ຂອງ ໄອເຕັກມໍ',
      'ຕອບຄຳຖາມ, ຮັບເລື່ອງຮ້ອງຮຽນຈາກລູກຄ້າ ແລະ ປະສານງານແກ້ໄຂຢ່າງທັນການ',
      'ຈັດການລະບົບສະສົມຄະແນນ, ແລກຂອງລາງວັນ ແລະ ບັດກຳນົນຂອງສູນການຄ້າ'
    ],
    requirements: [
      'ຈົບຊັ້ນສູງ ຫຼື ປະລິນຍາຕີ ທຸກສາຂາວິຊາ',
      'ມີໃຈຮັກການບໍລິການ, ສຸພາບ, ໃຈເຢັນ ແລະ ມີທັກສະການຟັງທີ່ດີ',
      'ສາມາດນຳໃຊ້ຄອມພິວເຕີຫ້ອງການພື້ນຖານໄດ້'
    ]
  },
  { 
    id: 'mkt-07', no: '08', title: 'ພະນັກງານ ປະຊາສຳພັນ', locKey: 'itecc_mall', location: 'ໄອເຕັກມໍ', categoryKey: 'cat-mkt', type: 'Part-time',
    responsibilities: [
      'ປະກາດສຽງຕາມສາຍແຈ້ງຂ່າວສານ, ໂປຣໂມຊັ່ນ ແລະ ກິດຈະກຳບັນເທີງໃນ ໄອເຕັກມໍ',
      'ຊ່ວຍເຫຼືອລູກຄ້າໃນການຊອກຫາຮ້ານຄ້າ, ໂຮງຮູບເງົາ, ໂບລິ້ງ ແລະ ສູນອາຫານ',
      'ຊ່ວຍເຫຼືອງານບໍລິຫານທົ່ວໄປທີ່ເຄົາເຕີຂໍ້ມູນ'
    ],
    requirements: [
      'ນ້ຳສຽງດີ, ໄຫວພິບດີ, ມີຄວາມກະຕືລືລົ້ນ',
      'ສາມາດເຮັດວຽກເປັນກະ ຫຼື ເຮັດວຽກທ້າຍອາທິດໄດ້',
      'ຍິນດີຕ້ອນຮັບນັກສຶກສາທີ່ຊອກວຽກ Part-time'
    ]
  },

  // 4. Finance & Admin (ການເງິນ, ນິຕິກຳ ແລະ ບໍລິຫານຫ້ອງການ)
  { 
    id: 'adm-01', no: '02', title: 'ວິຊາການ ນິຕິກຳ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-adm', type: 'Full-time',
    responsibilities: [
      'ກວດກາ ແລະ ຮ່າງສັນຍາທາງທຸລະກິດ, ສັນຍາເຊົ່າພື້ນທີ່, ສັນຍາຈ້າງ ແລະ ເອກະສານນິຕິກຳຕ່າງໆ',
      'ໃຫ້ຄຳປຶກສາດ້ານກົດໝາຍແຮງງານ, ກົດໝາຍວິສາຫະກິດ ແລະ ລະບຽບການຂອງຕະຫຼາດຫຼັກຊັບ',
      'ຕິດຕາມ ແລະ ປະສານງານກັບໜ່ວຍງານພາກລັດກ່ຽວກັບໃບອະນຸຍາດດຳເນີນທຸລະກິດ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີຂຶ້ນໄປ ສາຂານິຕິສາດ (ກົດໝາຍທຸລະກິດ/ກົດໝາຍແພ່ງ)',
      'ມີປະສົບການວຽກງານນິຕິກຳອົງກອນຢ່າງໜ້ອຍ 2 ປີ',
      'ມີຄວາມລະອຽດຮອບຄອບສູງໃນການກວດສອບຂໍ້ຄວາມໃນສັນຍາ'
    ]
  },
  { 
    id: 'adm-02', no: '07', title: 'ວິຊາການ ການເງິນ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-adm', type: 'Full-time',
    responsibilities: [
      'ກວດສອບ ແລະ ບັນທຶກລາຍຮັບ-ລາຍຈ່າຍປະຈຳວັນ, ໃບແຈ້ງໜີ້, ໃບຮັບເງິນ ແລະ ໃບກຳກັບພາສີ',
      'ຈັດທຳລາຍງານກະແສເງິນສົດ (Cash Flow) ແລະ ກວດສອບຍອດເງິນຝາກທະນາຄານ',
      'ປະສານງານກັບທະນາຄານ ແລະ ດຳເນີນການຈ່າຍເງິນເດືອນພະນັກງານ'
    ],
    requirements: [
      'ຈົບປະລິນຍາຕີ ສາຂາການເງິນ-ການທະນາຄານ ຫຼື ການບັນຊີ',
      'ມີປະສົບການດ້ານການເງິນ/ບັນຊີ 1-2 ປີຂຶ້ນໄປ',
      'ຊຳນານການໃຊ້ MS Excel (VLOOKUP, Pivot Table) ແລະ ໂປຣແກຣມບັນຊີ'
    ]
  },
  { 
    id: 'adm-03', no: '08', title: 'ພະນັກງານ ຈັດລຽງເອກະສານ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-adm', type: 'Full-time',
    responsibilities: [
      'ຈັດເກັບ, ແຍກປະເພດ ແລະ ລົງທະບຽນເອກະສານສຳຄັນຂອງບໍລິສັດທັງແບບ Hard Copy ແລະ ດິຈິຕອນ',
      'ສະແກນເອກະສານ, ສຳເນົາເອກະສານ ແລະ ແຈກຢາຍເອກະສານໄປຍັງພະແນກທີ່ກ່ຽວຂ້ອງ',
      'ຊ່ວຍເຫຼືອງານທົ່ວໄປຂອງຫ້ອງການຕາມການມອບໝາຍ'
    ],
    requirements: [
      'ຈົບຊັ້ນກາງ ຫຼື ຊັ້ນສູງ ທຸກສາຂາວິຊາ',
      'ມີຄວາມເປັນລະບຽບຮຽບຮ້ອຍ, ລະອຽດຮອບຄອບ ແລະ ຊື່ສັດ',
      'ນຳໃຊ້ຄອມພິວເຕີພື້ນຖານ (Word, Excel) ໄດ້'
    ]
  },
  { 
    id: 'adm-04', no: '03', title: 'ວິຊາການ ບໍລິຫານອາຄານ', locKey: 'thongkhankham', location: 'ສູນການຄ້າທົ່ງຂັນຄຳ', categoryKey: 'cat-adm', type: 'Full-time',
    responsibilities: [
      'ກວດກາລະບົບສາທາລະນູປະໂພກ: ລະບົບໄຟຟ້າ, ນ້ຳປະປາ, ແອ, ລິຟ ແລະ ລະບົບດັບເພີງ',
      'ປະສານງານກັບຊ່າງສ້ອມແປງພາຍນອກ ແລະ ຜູ້ຮັບເໝົາໃນການບຳລຸງຮັກສາອາຄານ',
      'ຮັບແຈ້ງບັນຫາການຊຳລຸດຈາກຮ້ານຄ້າຜູ້ເຊົ່າ ແລະ ດຳເນີນການແກ້ໄຂຢ່າງຮີບດ່ວນ'
    ],
    requirements: [
      'ຈົບຊັ້ນສູງ ຫຼື ປະລິນຍາຕີ ສາຂາວິສະວະກຳໄຟຟ້າ, ເຄື່ອງກົນ ຫຼື ການຈັດການອາຄານ',
      'ມີປະສົບການດູແລອາຄານ ຫຼື ສູນການຄ້າ 1 ປີຂຶ້ນໄປ',
      'ມີຄວາມຮັບຜິດຊອບສູງ ແລະ ພ້ອມແກ້ໄຂເຫດສຸກເສີນໄດ້'
    ]
  },
  { 
    id: 'adm-05', no: '05', title: 'ວິຊາການ ບໍລິຫານຫ້ອງການ', locKey: 'itecc_exhibit', location: 'ລາວ-ໄອເຕັກ', categoryKey: 'cat-adm', type: 'Full-time',
    responsibilities: [
      'ຄຸ້ມຄອງວຽກງານເອກະສານສັນຍາເຊົ່າຫ້ອງປະຊຸມ ແລະ ພື້ນທີ່ວາງສະແດງສິນຄ້າ',
      'ຈັດກຽມຕາຕະລາງການນຳໃຊ້ຫ້ອງປະຊຸມ ແລະ ປະສານງານທີມງານສະໜັບສະໜູນທຸກພາກສ່ວນ',
      'ເບີກຈ່າຍ ແລະ ຄວບຄຸມສະຕັອກອຸປະກອນຫ້ອງການ'
    ],
    requirements: [
      'ຈົບຊັ້ນສູງ ຫຼື ປະລິນຍາຕີ ສາຂາບໍລິຫານທຸລະກິດ, ການຈັດການ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'ມີຄວາມຄ່ອງແຄ້ວດັ່ງວຽກງານປະສານງານ ແລະ ມະນຸດສຳພັນດີ',
      'ສາມາດນຳໃຊ້ MS Office ໄດ້ເປັນຢ່າງດີ'
    ]
  },

  // 5. Operations & Services (ບໍລິການໜ້າຮ້ານ ແລະ ປະຕິບັດການທົ່ວໄປ)
  { 
    id: 'ops-01', no: '09', title: 'ພະນັກງານ ຂັບລົດ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-ops', type: 'Full-time',
    responsibilities: [
      'ຂັບລົດຮັບ-ສົ່ງຜູ້ບໍລິຫານ, ແຂກ VIP ແລະ ພະນັກງານໄປປະຕິບັດວຽກງານນອກສະຖານທີ່',
      'ດູແລ, ອະນາໄມ ແລະ ກວດເຊັກສະພາບຄວາມພ້ອມຂອງລົດ (ນ້ຳມັນ, ລົມຢາງ, ນ້ຳກັ່ນ) ໃຫ້ປອດໄພສະເໝີ',
      'ນຳລົດເຂົ້າກວດເຊັກໄລຍະ ແລະ ຕໍ່ທະບຽນ/ປະກັນໄພຕາມກຳນົດ'
    ],
    requirements: [
      'ມີໃບຂັບຂີ່ລົດໃຫຍ່ຖືກຕ້ອງຕາມກົດໝາຍ (ຫາກມີປະເພດ ຂ ຫຼື ຄ ຈະພິຈາລະນາເປັນພິເສດ)',
      'ຮູ້ເສັ້ນທາງໃນນະຄອນຫຼວງວຽງຈັນ ແລະ ຕ່າງແຂວງເປັນຢ່າງດີ',
      'ເປັນຄົນສຸພາບ, ໃຈເຢັນ, ບໍ່ດື່ມສິ່ງມຶນເມົາໃນເວລາປະຕິບັດໜ້າທີ່'
    ]
  },
  { 
    id: 'ops-02', no: '10', title: 'ພະນັກງານ ຮັກສາຄວາມປອດໄພ', locKey: 'headquarters', location: 'ຫ້ອງການໃຫຍ່', categoryKey: 'cat-ops', type: 'Full-time',
    responsibilities: [
      'ກວດກາຄວາມສະຫງົບຮຽບຮ້ອຍບໍລິເວນທາງເຂົ້າ-ອອກ ແລະ ອາຄານຫ້ອງການໃຫຍ່ຕະຫຼອດ 24 ຊົ່ວໂມງ',
      'ບັນທຶກການເຂົ້າ-ອອກຂອງບຸກຄົນພາຍນອກ ແລະ ຍານພາຫະນະທຸກຄັນ',
      'ກວດກາປະຕູ-ປ່ອງຢ້ຽມ, ລະບົບໄຟ ແລະ ອຸປະກອນດັບເພີງໃນເວລາກາງຄືນ'
    ],
    requirements: [
      'ສຸຂະພາບຮ່າງກາຍແຂງແຮງ, ສາຍຕາດີ, ບໍ່ມີປະຫວັດອາດຊະຍາກຳ',
      'ມີຄວາມຊື່ສັດ, ຕື່ນຕົວ ແລະ ມີຄວາມຮັບຜິດຊອບສູງ',
      'ສາມາດເຂົ້າເວນປ່ຽນກະ (ກາງເວັນ-ກາງຄືນ) ໄດ້'
    ]
  },
  { 
    id: 'ops-03', no: '05', title: 'ພະນັກງານ ຮັກສາຄວາມປອດໄພ', locKey: 'thongkhankham', location: 'ສູນການຄ້າທົ່ງຂັນຄຳ', categoryKey: 'cat-ops', type: 'Full-time',
    responsibilities: [
      'ດູແລຄວາມປອດໄພຊີວິດ ແລະ ຊັບສິນຂອງລູກຄ້າ ແລະ ພໍ່ຄ້າຊາວຂາຍໃນສູນການຄ້າທົ່ງຂັນຄຳ',
      'ຈັດລະບຽບການຈອດລົດຈັກ ແລະ ລົດໃຫຍ່ບໍ່ໃຫ້ກີດຂວາງທາງເຂົ້າ-ອອກ',
      'ລະງັບເຫດການຜິດຖຽງກັນ ຫຼື ເຫດສຸກເສີນພາຍໃນບໍລິເວນຕະຫຼາດ'
    ],
    requirements: [
      'ເພດຊາຍ, ຮ່າງກາຍແຂງແຮງ, ມີຄວາມອົດທົນຕໍ່ສະພາບອາກາດ',
      'ມີມະນຸດສຳພັນທີ່ດີໃນການຕັກເຕືອນ ແລະ ຊ່ວຍເຫຼືອລູກຄ້າ',
      'ພ້ອມປະຕິບັດວຽກງານຕາມກະເວລາທີ່ກຳນົດ'
    ]
  },
  { 
    id: 'ops-04', no: '06', title: 'ວິຊາການ Clean and Clear', locKey: 'itecc_exhibit', location: 'ລາວ-ໄອເຕັກ', categoryKey: 'cat-ops', type: 'Full-time',
    responsibilities: [
      'ຄວບຄຸມມາດຕະຖານຄວາມສະອາດຂອງຫ້ອງວາງສະແດງ, ຫ້ອງປະຊຸມ, ຫ້ອງນ້ຳ ແລະ ພື້ນທີ່ສ່ວນລວມ',
      'ວາງແຜນການເຮັດຄວາມສະອາດໃຫຍ່ (Big Cleaning) ກ່ອນ ແລະ ຫຼັງຈົບແຕ່ລະງານ Event',
      'ຄຸ້ມຄອງການນຳໃຊ້ນ້ຳຢາເຄມີ ແລະ ອຸປະກອນທຳຄວາມສະອາດໃຫ້ປອດໄພ ແລະ ປະຢັດ'
    ],
    requirements: [
      'ຈົບຊັ້ນກາງ ຫຼື ຊັ້ນສູງ ທຸກສາຂາວິຊາ',
      'ມີປະສົບການຄວບຄຸມງານແມ່ບ້ານ/ທຳຄວາມສະອາດໃນໂຮງແຮມ ຫຼື ສູນການຄ້າ 1 ປີຂຶ້ນໄປ',
      'ເປັນຄົນຮັກຄວາມສະອາດ, ລະອຽດຖີ່ຖ້ວນ ແລະ ມີຄວາມເປັນຜູ້ນຳທີມ'
    ]
  },
  { 
    id: 'ops-05', no: '08', title: 'ພະນັກງານ ເກັບເງິນສູນອາຫານ', locKey: 'itecc_exhibit', location: 'ລາວ-ໄອເຕັກ', categoryKey: 'cat-ops', type: 'Full-time',
    responsibilities: [
      'ປະຈຳເຄົາເຕີຂາຍ ແລະ ຕື່ມເງິນບັດອາຫານ (Cash Card) ໃຫ້ແກ່ລູກຄ້າທີ່ມາທ່ຽວງານ',
      'ຄິດໄລ່ເງິນ, ທອນເງິນ ແລະ ຮັບຊຳລະຜ່ານລະບົບ QR Code / ເງິນສົດ ຢ່າງຖືກຕ້ອງ',
      'ສະຫຼຸບຍອດຂາຍປະຈຳວັນ ແລະ ສົ່ງມອບເງິນໃຫ້ພະແນກການເງິນຢ່າງຄົບຖ້ວນ'
    ],
    requirements: [
      'ຈົບຊັ້ນກາງຂຶ້ນໄປ ສາຂາການບັນຊີ, ການເງິນ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'ມີຄວາມຊື່ສັດສຸດຈະລິດ, ຮອບຄອບ, ບໍ່ເຄີຍມີປະຫວັດທາງການເງິນເສື່ອມເສຍ',
      'ຍິ້ມແຍ້ມແຈ່ມໃສ, ມີມະນຸດສຳພັນດີ ແລະ ຄິດໄລ່ເລກໄດ້ໄວ'
    ]
  },
  { 
    id: 'ops-06', no: '09', title: 'ພະນັກງານ ຕິດຕັ້ງບູດ', locKey: 'itecc_exhibit', location: 'ລາວ-ໄອເຕັກ', categoryKey: 'cat-ops', type: 'Full-time',
    responsibilities: [
      'ປະກອບ ແລະ ຕິດຕັ້ງໂຄງສ້າງບູດມາດຕະຖານ (Standard Booth), ພາຕິຊັນ ແລະ ພົມປູພື້ນ',
      'ຕິດຕັ້ງປ້າຍຊື່ບໍລິສັດ, ປ້າຍໂຄສະນາ, ໂຕະ, ຕັ່ງ ແລະ ປັກສຽບໄຟຟ້າປະຈຳບູດ',
      'ຮື້ຖອນ, ເກັບມ້ຽນ ແລະ ກວດນັບອຸປະກອນບູດຫຼັງຈົບງານວາງສະແດງ'
    ],
    requirements: [
      'ເພດຊາຍ, ຮ່າງກາຍແຂງແຮງ, ບໍ່ຢ້ານຄວາມສູງ, ຍົກຂອງໜັກໄດ້',
      'ມີທັກສະງານຊ່າງພື້ນຖານ (ຊ່າງໄມ້, ຊ່າງສີ ຫຼື ຊ່າງໄຟຟ້າ ຈະພິຈາລະນາພິເສດ)',
      'ເຮັດວຽກເປັນທີມໄດ້ດີ ແລະ ສາມາດເຮັດວຽກລ່ວງເວລາ (OT) ໃນໄລຍະຕິດຕັ້ງງານໄດ້'
    ]
  },
  { 
    id: 'ops-07', no: '07', title: 'ພະນັກງານ ເກັບເງິນສູນອາຫານ', locKey: 'itecc_mall', location: 'ໄອເຕັກມໍ', categoryKey: 'cat-ops', type: 'Full-time',
    responsibilities: [
      'ປະຈຳເຄົາເຕີອອກບັດ ແລະ ຕື່ມເງິນບັດ Food Court ໄອເຕັກມໍ',
      'ຮັບຊຳລະຄ່າອາຫານ, ຄືນເງິນມັດຈຳບັດ ແລະ ຕອບຄຳຖາມລູກຄ້າ',
      'ກວດນັບເງິນສົດໃນລິ້ນຊັກ ແລະ ກວດສອບຍອດຂາຍໃນລະບົບ POS ໃຫ້ກົງກັນ'
    ],
    requirements: [
      'ຈົບຊັ້ນກາງ ຫຼື ຊັ້ນສູງ ສາຂາການບັນຊີ ຫຼື ການຂາຍ',
      'ມີຄວາມລະອຽດຮອບຄອບໃນການນັບເງິນ ແລະ ທອນເງິນ',
      'ມີໃຈຮັກການບໍລິການ ແລະ ຍິ້ມແຍ້ມແຈ່ມໃສ'
    ]
  },
  { 
    id: 'ops-08', no: '09', title: 'ພະນັກງານ ຕົບແຕ່ງສະຖານທີ່', locKey: 'itecc_mall', location: 'ໄອເຕັກມໍ', categoryKey: 'cat-ops', type: 'Full-time',
    responsibilities: [
      'ຕົບແຕ່ງພາຍໃນ ແລະ ພາຍນອກສູນການຄ້າຕາມເທດສະການ (ປີໃໝ່ລາວ, ປີໃໝ່ສາກົນ, ວັນວາເລັນທາຍ, Halloween)',
      'ຈັດສວນ, ດູແລຕົ້ນໄມ້ປະດັບ, ນ້ຳພຸ ແລະ ຈຸດຖ່າຍຮູບ (Photo Spot) ພາຍໃນສູນ',
      'ສ້ອມແປງ ແລະ ປ່ຽນແປງອຸປະກອນຕົບແຕ່ງທີ່ຊຳລຸດໃຫ້ສວຍງາມຕະຫຼອດເວລາ'
    ],
    requirements: [
      'ມີຫົວຄິດປະດິດສ້າງ, ຮັກຄວາມສວຍງາມ ແລະ ມີທັກສະງານສິລະປະ/ງານຊ່າງ',
      'ມີຄວາມຄ່ອງແຄ້ວ, ສາມາດເຮັດວຽກໃນບ່ອນສູງ ແລະ ເຮັດວຽກກາງຄືນໄດ້ (ກໍລະນີຕິດຕັ້ງງານໃຫຍ່)',
      'ມີຄວາມຮັບຜິດຊອບ ແລະ ເຮັດວຽກຮ່ວມກັບທີມງານໄດ້ດີ'
    ]
  }
];

export const JOBS_EN_MAP: Record<string, {
  title: string;
  location: string;
  responsibilities: string[];
  requirements: string[];
}> = {
  'mgt-01': {
    title: 'HR Development Section Manager',
    location: 'Headquarters',
    responsibilities: [
      'Formulate recruitment strategies and talent development across Lao World Public Company',
      'Design corporate training curriculum and oversee KPIs & performance appraisal systems',
      'Manage compensation, benefits, and employee relations in accordance with Lao labor regulations'
    ],
    requirements: [
      "Bachelor's degree or higher in Human Resources, Business Administration, or related fields",
      'Minimum 3-5 years of leadership experience in HR management',
      'Strong leadership, excellent communication, and dispute resolution skills'
    ]
  },
  'mgt-02': {
    title: 'Sales & Marketing Department Manager',
    location: 'Thongkhankham Mall',
    responsibilities: [
      'Develop leasing sales strategies and promotional campaigns to drive shopper traffic to Thongkhankham Mall',
      'Lead the sales team, negotiate master lease contracts with anchor tenants, and track revenue targets',
      'Analyze market trends and consumer behaviors to maximize retail space monetization'
    ],
    requirements: [
      "Bachelor's degree in Marketing, Sales, Business Administration, or related fields",
      'At least 3 years of experience in retail leasing or commercial mall sales management',
      'Outstanding negotiation and deal-closing capabilities'
    ]
  },
  'mgt-03': {
    title: 'Marketing Section Manager',
    location: 'Lao-ITECC',
    responsibilities: [
      'Plan marketing and PR for national and international trade exhibitions at Lao-ITECC',
      'Create multi-channel online and offline marketing campaigns to attract exhibitors and visitors',
      'Liaise with foreign embassies, chambers of commerce, and business associations'
    ],
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related disciplines",
      '2-3+ years of experience in event marketing or trade exhibition management',
      'Fluent English communication skills'
    ]
  },
  'mgt-04': {
    title: 'Marketing Department Manager',
    location: 'ITECC Mall',
    responsibilities: [
      'Lead marketing strategy for ITECC Mall to increase shopper foot traffic and brand awareness',
      'Organize festive events, weekend markets, concert promotions, and seasonal campaigns',
      'Manage marketing budget allocation and evaluate campaign ROI'
    ],
    requirements: [
      "Bachelor's degree or higher in Marketing or Business Administration",
      '3-5 years of proven experience in retail or shopping mall marketing',
      'Creative mindset with deep understanding of youth and family lifestyle trends'
    ]
  },
  'mgt-05': {
    title: 'Office Administration Section Manager',
    location: 'ITECC Mall',
    responsibilities: [
      'Supervise general administration, cleanliness, security, and facility landscaping at ITECC Mall',
      'Oversee document workflow, incoming/outgoing correspondence, and office procurement',
      'Address day-to-day tenant requests and maintain smooth facility operations'
    ],
    requirements: [
      "Bachelor's degree in Business Administration, General Management, or related fields",
      'At least 2 years of experience in office administration or facility management',
      'Detail-oriented with strong problem-solving and interpersonal skills'
    ]
  },
  'mgt-06': {
    title: 'Sales Section Manager',
    location: 'ITECC Mall',
    responsibilities: [
      'Lead the retail leasing team for mall shops, promotional booth spaces, and advertising billboards',
      'Build and nurture strong relationships with corporate clients, brands, and commercial tenants',
      'Establish monthly sales targets and report commercial metrics to executive leadership'
    ],
    requirements: [
      "Bachelor's degree in Sales, Marketing, or related disciplines",
      '2+ years of experience in commercial real estate or mall space sales',
      'Excellent relationship-building and presentation skills'
    ]
  },
  'mgt-07': {
    title: 'Food Court Section Manager',
    location: 'ITECC Mall',
    responsibilities: [
      'Manage ITECC Mall Food Court ensuring top food hygiene, cleanliness, and service quality standards',
      'Supervise food court card cash systems, sales reconciliation, and vendor accounting',
      'Source, evaluate, and onboard reputable dining concepts and food vendors'
    ],
    requirements: [
      'Higher Diploma or Bachelor’s degree in Hospitality, Service Management, or Business',
      'Minimum 2 years of experience in food court, large restaurant, or F&B operations management',
      'Strong knowledge of food safety, hygiene regulations, and customer service'
    ]
  },
  'it-01': {
    title: 'IT Support Officer',
    location: 'Headquarters',
    responsibilities: [
      'Maintain and troubleshoot office computers, printers, local network (LAN/Wi-Fi), and IT equipment',
      'Install and update Windows OS, MS Office, antivirus, and internal enterprise software',
      'Support data backup routines and monitor corporate CCTV surveillance systems'
    ],
    requirements: [
      'Diploma or Bachelor’s in Computer Science, Information Technology, or Network Engineering',
      'Solid foundational knowledge in computer hardware, software, and basic networking',
      'Customer-oriented service mindset with passion to learn new technologies'
    ]
  },
  'it-02': {
    title: 'Video Editor & Motion Designer',
    location: 'Headquarters',
    responsibilities: [
      'Edit promotional video reels, TikTok/Facebook clips, interviews, and corporate event videos',
      'Incorporate sound effects, background audio, color grading, and motion graphics',
      'Collaborate with content creators on storyboards, visual direction, and creative concepts'
    ],
    requirements: [
      'Proficiency in Adobe Premiere Pro, After Effects, or CapCut PC',
      'Strong video portfolio/showreel demonstrating creative pacing and visual flair',
      'Creative storytelling skills with strict adherence to production deadlines'
    ]
  },
  'it-03': {
    title: 'Content Creator & Copywriter',
    location: 'Headquarters',
    responsibilities: [
      'Write compelling copy, articles, and PR posts for Facebook, TikTok, and official websites',
      'Plan and maintain monthly social media content calendars across all company facilities',
      'Analyze audience engagement metrics and produce viral, trend-aware multimedia content'
    ],
    requirements: [
      "Bachelor's degree in Communications, Journalism, Marketing, or related fields",
      'Outstanding writing and storytelling skills with authentic tone',
      'Deep understanding of social media platforms, algorithms, and digital trends'
    ]
  },
  'it-04': {
    title: 'Graphic Designer & Videographer',
    location: 'Lao-ITECC',
    responsibilities: [
      'Photograph and film exhibitions, banquets, trade fairs, and national events at Lao-ITECC',
      'Design event marketing collateral including backdrops, vinyl banners, posters, and flyers',
      'Catalog and maintain the corporate digital photo and video archives'
    ],
    requirements: [
      'Proficiency with DSLR/Mirrorless cameras, studio lighting, and camera gimbals',
      'Expert skills in Adobe Photoshop, Illustrator, and Lightroom',
      'Compelling graphic design and event photography portfolio'
    ]
  },
  'it-05': {
    title: 'Audio-Visual & Stage Lighting Technician',
    location: 'Lao-ITECC',
    responsibilities: [
      'Operate audio mixing consoles, stage lighting rigs, and large LED display screens during events',
      'Setup, test, and calibrate equipment prior to showtime ensuring flawless technical execution',
      'Maintain, inspect, and service audio-visual equipment regularly'
    ],
    requirements: [
      'Higher diploma or vocational degree in Electronics, Sound Engineering, or AV Production',
      'At least 1 year of hands-on experience controlling AV systems for concerts, conferences, or weddings',
      'Flexibility to work according to event schedules including evenings and weekends'
    ]
  },
  'it-06': {
    title: 'Motion Graphics & Video Specialist',
    location: 'ITECC Mall',
    responsibilities: [
      'Produce engaging motion graphics, 2D animations, and digital ads for mall brands and events',
      'Edit event recap videos, concerts, promotional campaigns, and tenant highlights',
      'Design modern title sequences, kinetic typography, intros, and social media bumpers'
    ],
    requirements: [
      'Proficient in Adobe After Effects, Premiere Pro, and Illustrator',
      'Strong understanding of motion design principles, visual rhythm, and typography',
      'Proven portfolio showcasing motion design and video editing work'
    ]
  },
  'mkt-01': {
    title: 'Senior Commercial Relations Officer',
    location: 'Headquarters',
    responsibilities: [
      'Coordinate with corporate partners, trade associations, government agencies, and international entities',
      'Draft partnership agreements, MOUs, and prepare business development presentation decks',
      'Participate in commercial negotiations and follow up on execution of strategic agreements'
    ],
    requirements: [
      "Bachelor's degree in International Relations, Economics, Business, or Law",
      '3+ years of experience in business development or international liaison',
      'Fluent spoken and written English skills'
    ]
  },
  'mkt-02': {
    title: 'Commercial Leasing & Sales Officer',
    location: 'Thongkhankham Mall',
    responsibilities: [
      'Contact prospective vendors and present retail shop spaces, food stalls, and promotional booths',
      'Conduct on-site space viewings, explain lease terms, pricing structures, and utility contracts',
      'Manage lease renewals and assist commercial tenants during their store opening setup'
    ],
    requirements: [
      'Diploma or Bachelor’s degree in Sales, Marketing, or Business Administration',
      'Strong interpersonal and sales negotiation skills with a warm service attitude',
      'Previous experience in shopping mall or market leasing is a definite plus'
    ]
  },
  'mkt-03': {
    title: 'Customer Public Relations Officer',
    location: 'Thongkhankham Mall',
    responsibilities: [
      'Welcome and provide information to shoppers and visitors at Thongkhankham Mall',
      'Make public address system announcements for promotions, vehicle notices, and emergency alerts',
      'Support on-site promotional sales activities and gift redemption campaigns'
    ],
    requirements: [
      'Clear, pleasant speaking voice with polite and articulate communication skills',
      'Well-groomed appearance with friendly interpersonal skills and patience',
      'Students looking for flexible part-time shifts are welcome to apply'
    ]
  },
  'mkt-04': {
    title: 'Banquet & Convention Coordinator',
    location: 'Lao-ITECC',
    responsibilities: [
      'Handle event bookings, consult with clients, and plan weddings, banquets, and seminars',
      'Coordinate with venue setup teams, banquet catering services, and audio-visual technicians',
      'Supervise on-site event execution from start to finish ensuring client satisfaction'
    ],
    requirements: [
      'Diploma or Bachelor’s degree in Hospitality, Tourism, Marketing, or related fields',
      '1+ years of experience as banquet coordinator, wedding planner, or event organizer',
      'Fast-paced problem-solving skills and ability to thrive under pressure'
    ]
  },
  'mkt-05': {
    title: 'Exhibition Public Relations Officer',
    location: 'Lao-ITECC',
    responsibilities: [
      'Welcome VIP delegates, dignitaries, and attendees at major trade exhibitions',
      'Provide booth locations, event schedules, and facilitate on-site visitor registration',
      'Assist visiting media and press correspondents during opening ceremonies'
    ],
    requirements: [
      'Professional demeanor and grooming with cheerful hospitality mindset',
      'Good conversational English or Chinese language abilities',
      'High punctuality and strong commitment to customer service'
    ]
  },
  'mkt-06': {
    title: 'Customer Service Officer',
    location: 'ITECC Mall',
    responsibilities: [
      'Staff the main information and customer service counter at ITECC Mall',
      'Answer customer inquiries, handle feedback/complaints courteously, and coordinate swift resolutions',
      'Manage loyalty point redemptions, gift certificates, and shopper rewards programs'
    ],
    requirements: [
      'Higher diploma or Bachelor’s degree in any field',
      'Service-oriented attitude with calm temperament and active listening skills',
      'Basic proficiency in office computer software'
    ]
  },
  'mkt-07': {
    title: 'Mall Information & PR Assistant',
    location: 'ITECC Mall',
    responsibilities: [
      'Broadcast mall announcements regarding entertainment events, movie showtimes, and promotions',
      'Guide visitors to retail shops, cinema, bowling alley, and food courts',
      'Support information desk administration and routine visitor inquiries'
    ],
    requirements: [
      'Pleasant voice, quick responsiveness, and positive energy',
      'Ability to work rotating shifts including weekends',
      'University students seeking part-time experience are encouraged to apply'
    ]
  },
  'adm-01': {
    title: 'Legal Affairs Officer',
    location: 'Headquarters',
    responsibilities: [
      'Review and draft commercial contracts, lease agreements, vendor contracts, and legal notices',
      'Provide legal guidance regarding labor law, corporate governance, and securities regulations',
      'Liaise with relevant government ministries regarding business permits and regulatory compliance'
    ],
    requirements: [
      "Bachelor's degree or higher in Law (Corporate/Civil Law)",
      'At least 2 years of corporate legal experience',
      'High precision and meticulous attention to detail in contractual analysis'
    ]
  },
  'adm-02': {
    title: 'Finance & Accounting Officer',
    location: 'Headquarters',
    responsibilities: [
      'Verify and record daily revenue, expenditures, invoices, receipts, and tax documentation',
      'Prepare cash flow reports and reconcile corporate bank accounts',
      'Coordinate with partner banks and execute monthly employee payroll disbursements'
    ],
    requirements: [
      "Bachelor's degree in Finance, Banking, or Accounting",
      '1-2+ years of experience in corporate accounting or financial operations',
      'Proficiency in MS Excel (VLOOKUP, Pivot Tables) and accounting software'
    ]
  },
  'adm-03': {
    title: 'Document Control & Archive Clerk',
    location: 'Headquarters',
    responsibilities: [
      'Organize, categorize, and archive company documents in both physical and digital formats',
      'Scan, photocopy, and distribute incoming/outgoing corporate correspondence',
      'Assist general office operations as assigned by department heads'
    ],
    requirements: [
      'Vocational diploma or higher in any discipline',
      'Highly organized, systematic, honest, and detail-oriented',
      'Basic computer literacy in MS Word and Excel'
    ]
  },
  'adm-04': {
    title: 'Building & Facilities Management Officer',
    location: 'Thongkhankham Mall',
    responsibilities: [
      'Inspect building utilities: electrical systems, plumbing, air conditioning, elevators, and fire safety',
      'Coordinate with external maintenance contractors for preventive building servicing',
      'Log tenant maintenance requests and dispatch technicians for prompt repair'
    ],
    requirements: [
      'Diploma or Bachelor’s in Electrical Engineering, Mechanical Engineering, or Building Management',
      '1+ years of building maintenance or shopping center facility experience',
      'High sense of responsibility and readiness to respond to facility emergencies'
    ]
  },
  'adm-05': {
    title: 'Office Administration Coordinator',
    location: 'Lao-ITECC',
    responsibilities: [
      'Manage venue rental contracts and documentation for conference halls and exhibition areas',
      'Coordinate venue reservation schedules and communicate with internal support teams',
      'Monitor and control office supplies inventory and disbursement records'
    ],
    requirements: [
      'Diploma or Bachelor’s in Business Administration, Management, or related fields',
      'Strong interpersonal and cross-departmental coordination skills',
      'Proficient in Microsoft Office (Word, Excel, PowerPoint)'
    ]
  },
  'ops-01': {
    title: 'Executive & Corporate Driver',
    location: 'Headquarters',
    responsibilities: [
      'Safely chauffeur executives, VIP delegations, and staff to external appointments and province visits',
      'Perform daily vehicle pre-trip inspections (fuel, tire pressure, coolant) and maintain cleanliness',
      'Schedule periodic vehicle maintenance, annual inspections, and insurance renewals'
    ],
    requirements: [
      'Valid driving license (heavy vehicle category is an added advantage)',
      'Thorough knowledge of roads and routes in Vientiane Capital and surrounding provinces',
      'Polite, punctual, calm demeanor with strict zero-alcohol policy on duty'
    ]
  },
  'ops-02': {
    title: 'Corporate Security Guard',
    location: 'Headquarters',
    responsibilities: [
      'Patrol corporate entrances and headquarters building around the clock (24/7)',
      'Record all visitor entries, deliveries, and vehicle movements at security checkpoints',
      'Conduct nightly rounds verifying doors, windows, lighting, and fire safety gear'
    ],
    requirements: [
      'Good physical fitness, clear vision, and clean background record',
      'Honest, vigilant, alert, and dependable work ethic',
      'Willingness and stamina to work rotating 12-hour day/night shifts'
    ]
  },
  'ops-03': {
    title: 'Mall Security Officer',
    location: 'Thongkhankham Mall',
    responsibilities: [
      'Safeguard shoppers, vendors, and property within Thongkhankham Mall grounds',
      'Direct motorcycle and car traffic in parking areas to keep entry lanes unobstructed',
      'De-escalate disputes and handle security incidents calmly and professionally'
    ],
    requirements: [
      'Physically fit and resilient in various weather conditions',
      'Courteous and firm communication skills when assisting customers',
      'Ready to work rotating shift schedules'
    ]
  },
  'ops-04': {
    title: 'Clean & Clear Facility Supervisor',
    location: 'Lao-ITECC',
    responsibilities: [
      'Enforce cleanliness standards across exhibition halls, meeting rooms, restrooms, and public foyers',
      'Plan and execute pre-event and post-event deep cleaning cycles',
      'Manage inventory of cleaning chemicals and janitorial machinery safely and cost-effectively'
    ],
    requirements: [
      'Vocational diploma or higher in any field',
      '1+ years of housekeeping or janitorial supervisory experience in hotels or commercial centers',
      'Keen eye for detail, cleanliness enthusiast, with team leadership abilities'
    ]
  },
  'ops-05': {
    title: 'Food Court Cashier',
    location: 'Lao-ITECC',
    responsibilities: [
      'Issue and top up food court cash cards for exhibition attendees and visitors',
      'Calculate totals, provide correct change, and process QR code and cash payments accurately',
      'Reconcile daily card sales and submit cash funds to accounting promptly'
    ],
    requirements: [
      'Vocational certificate or higher in Accounting, Finance, or related areas',
      'High honesty, precision in financial transactions, and spotless financial record',
      'Friendly customer greeting with quick calculation skills'
    ]
  },
  'ops-06': {
    title: 'Exhibition Booth Setup Technician',
    location: 'Lao-ITECC',
    responsibilities: [
      'Assemble standard exhibition shell booths, aluminum modular partitions, and carpet flooring',
      'Mount company fascia signage, spotlights, power sockets, and rental furniture for exhibitors',
      'Dismantle, inspect, and organize booth structures back into storage after event closure'
    ],
    requirements: [
      'Physically fit, comfortable with heights, able to lift heavy materials',
      'Basic carpentry, painting, or electrical skills preferred',
      'Good team player with willingness to work overtime during event setup phases'
    ]
  },
  'ops-07': {
    title: 'Food Court Cashier',
    location: 'ITECC Mall',
    responsibilities: [
      'Staff the Food Court card counter at ITECC Mall issuing and recharging smart cards',
      'Process card transactions, refund card deposits, and answer visitor questions',
      'Perform cash drawer balancing and reconcile POS system sales records at shift end'
    ],
    requirements: [
      'Vocational diploma in Accounting, Commerce, or Sales',
      'High precision in cash handling and math calculations',
      'Cheerful personality with dedicated customer service orientation'
    ]
  },
  'ops-08': {
    title: 'Landscape & Mall Decor Specialist',
    location: 'ITECC Mall',
    responsibilities: [
      'Design and install festive mall decorations (Lao New Year, Christmas, Valentine’s, Halloween)',
      'Maintain ornamental gardens, indoor greenery, water fountains, and photo opportunity spots',
      'Repair and refresh decorative elements to keep the mall visually attractive at all times'
    ],
    requirements: [
      'Creative artistic flair, love for aesthetic design, and handy crafts/carpentry skills',
      'Comfortable working at heights and during night shifts when major installations take place',
      'Responsible, reliable, and works collaboratively with creative teams'
    ]
  }
};

export function getJobTitle(job: Job, lang: LanguageType): string {
  if (lang === 'en') {
    return JOBS_EN_MAP[job.id]?.title || job.title;
  }
  return job.title;
}

export function getJobLocation(job: Job, lang: LanguageType): string {
  if (lang === 'en') {
    return JOBS_EN_MAP[job.id]?.location || job.location;
  }
  return job.location;
}

export function getJobType(job: Job, lang: LanguageType): string {
  if (lang === 'lo') {
    return job.type === 'Part-time' ? 'ນອກເວລາ' : 'ເຕັມເວລາ';
  }
  return job.type;
}

export function getJobResponsibilities(job: Job, lang: LanguageType): string[] {
  if (lang === 'en') {
    return JOBS_EN_MAP[job.id]?.responsibilities || job.responsibilities;
  }
  return job.responsibilities;
}

export function getJobRequirements(job: Job, lang: LanguageType): string[] {
  if (lang === 'en') {
    return JOBS_EN_MAP[job.id]?.requirements || job.requirements;
  }
  return job.requirements;
}

export function getCategoryTitle(catKey: string, lang: LanguageType): string {
  const titles: Record<string, { lo: string; en: string }> = {
    'cat-mgt': { lo: '1. ລະດັບບໍລິຫານ ແລະ ຫົວໜ້າ', en: '1. Management & Executives' },
    'cat-it': { lo: '2. ໄອທີ, ສື່ ແລະ ຄວາມຄິດສ້າງສັນ', en: '2. IT, Creative & Media' },
    'cat-mkt': { lo: '3. ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ', en: '3. Marketing & Sales' },
    'cat-adm': { lo: '4. ການເງິນ, ນິຕິກຳ ແລະ ບໍລິຫານຫ້ອງການ', en: '4. Finance, Legal & Administration' },
    'cat-ops': { lo: '5. ບໍລິການໜ້າຮ້ານ ແລະ ປະຕິບັດການທົ່ວໄປ', en: '5. Operations & Frontline Services' },
  };
  return titles[catKey] ? titles[catKey][lang] : catKey;
}

export const I18N = {
  lo: {
    // Nav
    nav_home: 'ໜ້າຫຼັກ',
    nav_jobs: 'ຕຳແໜ່ງງານ',
    nav_tracker: 'ຕິດຕາມໃບສະໝັກ',
    nav_talent: 'ຝາກ CV',
    nav_about: 'ກ່ຽວກັບພວກເຮົາ',
    nav_contact: 'ຕິດຕໍ່ພວກເຮົາ',
    nav_saved: 'ວຽກທີ່ບັນທຶກໄວ້',
    btn_login: 'ເຂົ້າສູ່ລະບົບ',
    btn_signup: 'ລົງທະບຽນ',
    btn_logout: 'ອອກຈາກລະບົບ',
    status_logged_in: '● ເຂົ້າສູ່ລະບົບແລ້ວ',

    // Hero & Search
    hero_title: 'ຮ່ວມງານກັບພວກເຮົາ - ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ',
    hero_subtitle: 'ເປີດຮັບສະໝັກບຸກຄະລາກອນທີ່ມີຄວາມຮູ້ຄວາມສາມາດ ເພື່ອເຕີບໂຕໄປພ້ອມກັບກຸ່ມບໍລິສັດ ລາວເວີລ',
    search_placeholder: 'ຄົ້ນຫາຕຳແໜ່ງງານ ຫຼື ສາຂາ...',
    tab_all: 'ທັງໝົດ (33)',
    tab_hq: 'ຫ້ອງການໃຫຍ່ (10)',
    tab_thong: 'ສູນການຄ້າທົ່ງຂັນຄຳ (5)',
    tab_exhibit: 'ລາວ-ໄອເຕັກ (9)',
    tab_mall: 'ໄອເຕັກມໍ (9)',
    no_jobs_found: 'ບໍ່ພົບຕຳແໜ່ງງານທີ່ທ່ານຄົ້ນຫາ',
    try_search_again: 'ລອງປ່ຽນຄຳສັບຄົ້ນຫາ ຫຼື ເລືອກ \'ທັງໝົດ\'',
    job_status_open: 'ເປີດຮັບສະໝັກ',
    job_deadline: 'ປິດຮັບ:',
    btn_details: 'ລາຍລະອຽດ',
    btn_easy_apply: 'ສະໝັກດ່ວນ',

    // Detail View
    back_to_jobs: 'ກັບຄືນໜ້າຕຳແໜ່ງວຽກ',
    breadcrumb_position: 'ຕຳແໜ່ງ >',
    company_name_full: 'ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ',
    responsibilities_title: 'ໜ້າທີ່ຮັບຜິດຊອບ',
    requirements_title: 'ຄຸນສົມບັດສະເພາະ',
    benefits_title: 'ຜົນປະໂຫຍດ ແລະ ສະຫວັດດີການ',
    benefit_social_security: 'ປະກັນສັງຄົມ ແລະ ປະກັນໄພສຸຂະພາບຕາມລະບຽບກົດໝາຍແຮງງານ',
    benefit_bonus: 'ໂບນັດປະຈຳປີ ແລະ ເງິນລາງວັນຕາມຜົນງານ (KPI Bonus)',
    benefit_leave: 'ວັນພັກປະຈຳປີ, ວັນພັກບຸນປະເພນີ ແລະ ວັນລາພັກພິເສດ',
    benefit_training: 'ໂອກາດຝຶກອົບຮົມ ແລະ ເຕີບໂຕໃນສາຍອາຊີບກັບກຸ່ມບໍລິສັດ ລາວເວີລ',
    summary_title: 'ຂໍ້ມູນສະຫຼຸບ',
    label_facility: 'ສະຖານທີ່ປະຈຳການ:',
    label_job_type: 'ປະເພດການຈ້າງ:',
    label_salary: 'ເງິນເດືອນ:',
    salary_structure: 'ອີງຕາມປະສົບການ & ໂຄງສ້າງ',
    label_open_date: 'ວັນທີເປີດຮັບສະໝັກ:',
    label_deadline: 'ວັນທີປິດຮັບສະໝັກ:',
    label_status: 'ສະຖານະ:',
    inquire_more: 'ຕ້ອງການສອບຖາມເພີ່ມເຕີມ?',
    inquire_desc: 'ຕິດຕໍ່ຝ່າຍບຸກຄົນ: 021 415 555 ຫຼື ອີເມວ hr.careers@laoworld.la',

    // Saved Jobs
    saved_title: 'ວຽກທີ່ບັນທຶກໄວ້',
    saved_desc: 'ລາຍການຕຳແໜ່ງງານທີ່ທ່ານສົນໃຈ ແລະ ກົດບັນທຶກໄວ້ເບິ່ງພາຍຫຼັງ',
    saved_empty_title: 'ຍັງບໍ່ມີຕຳແໜ່ງງານທີ່ບັນທຶກໄວ້',
    saved_empty_desc: 'ກົດໄອຄອນຫົວໃຈຢູ່ບັດວຽກເພື່ອບັນທຶກໄວ້ທີ່ນີ້',
    btn_back_jobs: 'ກັບຄືນໜ້າຕຳແໜ່ງງານ',

    // Tracker View
    tracker_title: 'ຕິດຕາມສະຖານະໃບສະໝັກ',
    tracker_desc: 'ກວດສອບຂັ້ນຕອນ ແລະ ຄວາມຄືບໜ້າຂອງຕຳແໜ່ງທີ່ທ່ານໄດ້ຍື່ນສະໝັກໄວ້ກັບ ລາວເວີລ ມະຫາຊົນ',
    tracker_empty_title: 'ຍັງບໍ່ມີປະຫວັດການສະໝັກ',
    tracker_empty_desc: 'ກະລຸນາເລືອກຕຳແໜ່ງ ແລະ ກົດ "ສະໝັກດ່ວນ" ເພື່ອສົ່ງໃບສະໝັກ',
    app_id_label: 'ເລກທີໃບສະໝັກ:',
    app_submitted_date: 'ຍື່ນເມື່ອ:',
    step_submitted: '1. ຍື່ນແລ້ວ',
    step_reviewing: '2. ກວດສອບ CV',
    step_interview: '3. ສຳພາດ',
    step_offer: '4. ຜົນການຄັດເລືອກ',

    // Talent Pool
    talent_badge: 'ຄັງບຸກຄະລາກອນ ລາວເວີລ',
    talent_title: 'ຝາກ CV ໄວ້ລ່ວງໜ້າ',
    talent_desc: 'ຫາກຍັງບໍ່ທັນພົບຕຳແໜ່ງທີ່ກົງກັບຄວາມສາມາດຂອງທ່ານໃນຕອນນີ້, ສາມາດຝາກຊີວະປະຫວັດໄວ້ໃນຄັງບຸກຄະລາກອນຂອງ Lao World. ເມື່ອມີຕຳແໜ່ງໃໝ່ທີ່ເໝາະສົມ, ທີມງານ HR ຈະຕິດຕໍ່ທ່ານທັນທີ!',
    label_fullname: 'ຊື່ ແລະ ນາມສະກຸນ',
    label_phone: 'ເບີໂທລະສັບ / WhatsApp',
    label_email: 'ອີເມວ',
    talent_pref_loc: 'ສາຂາທີ່ສະດວກປະຈຳການ',
    talent_field: 'ສາຍງານທີ່ທ່ານມີຄວາມຊຳນານ ຫຼື ສົນໃຈ',
    talent_upload: 'ອັບໂຫຼດຊີວະປະຫວັດ (.pdf, .docx)',
    talent_upload_drag: 'ຄລິກ ຫຼື ລາກໄຟລ໌ CV ມາວາງທີ່ນີ້',
    talent_upload_hint: 'ຮອງຮັບໄຟລ໌ PDF, DOCX (ຂະໜາດບໍ່ເກີນ 10MB)',
    talent_notes: 'ຂໍ້ຄວາມສັ້ນໆແນະນຳຕົນເອງ',
    talent_notes_placeholder: 'ບອກພວກເຮົາສັ້ນໆກ່ຽວກັບປະສົບການ ແລະ ເປົ້າໝາຍອາຊີບຂອງທ່ານ...',
    talent_submit_btn: 'ສົ່ງຂໍ້ມູນຊີວະປະຫວັດ',
    talent_submitting: 'ກຳລັງສົ່ງຂໍ້ມູນ...',

    // Contact
    contact_badge: 'ຕິດຕໍ່ທີມງານສັນຫາບຸກຄະລາກອນ',
    contact_title: 'ຕິດຕໍ່ພະແນກສັນຫາບຸກຄະລາກອນ',
    contact_desc: 'ມີຂໍ້ສົງໄສກ່ຽວກັບຕຳແໜ່ງວຽກ, ຂັ້ນຕອນການສຳພາດ, ຫຼື ຕ້ອງການສອບຖາມຂໍ້ມູນເພີ່ມເຕີມ ສາມາດຕິດຕໍ່ພວກເຮົາໄດ້ຜ່ານຊ່ອງທາງລຸ່ມນີ້:',
    card_hotline_title: 'ສາຍດ່ວນ HR',
    card_hotline_sub: 'ຈັນ - ສຸກ: 08:30 - 17:30',
    card_email_title: 'ອີເມວສັນຫາວຽກ',
    card_email_sub: 'ສົ່ງ CV ໄດ້ຕະຫຼອດ 24 ຊມ',
    card_hq_title: 'ຫ້ອງການໃຫຍ່',
    card_hq_sub: 'ຖະໜົນກຳແພງເມືອງ, ບ້ານໂພນທັນ, ເມືອງໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ',
    card_social_title: 'Facebook Page',
    card_social_sub: 'ຕອບກັບພາຍໃນ 24 ຊົ່ວໂມງ',
    contact_send_msg: 'ຝາກຂໍ້ຄວາມສອບຖາມກັບຝ່າຍ HR',
    placeholder_fullname: 'ຊື່ ແລະ ນາມສະກຸນຂອງທ່ານ',
    placeholder_phone: 'ເບີໂທລະສັບຕິດຕໍ່',
    placeholder_subject: 'ຫົວຂໍ້ທີ່ຕ້ອງການສອບຖາມ...',
    placeholder_msg: 'ພິມຂໍ້ຄວາມຂອງທ່ານທີ່ນີ້...',
    btn_send_msg: 'ສົ່ງຂໍ້ຄວາມ',
    btn_send_email: 'ສົ່ງຜ່ານ Email',
    btn_send_whatsapp: 'ສົ່ງຜ່ານ WhatsApp',
    facilities_title: '4 ສະຖານທີ່ປະຈຳການ',

    // About
    about_badge: 'ກ່ຽວກັບພວກເຮົາ',
    about_title: 'ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ',
    about_slogan: '“Together, We create a world”',
    about_desc: 'ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ ເປັນກຸ່ມບໍລິສັດຊັ້ນນຳຂອງ ສປປ ລາວ ທີ່ດຳເນີນທຸລະກິດດ້ານການບໍລິຫານສູນການຄ້າ, ສູນວາງສະແດງສິນຄ້າລະດັບຊາດ ແລະ ສາກົນ, ສູນອາຫານ ແລະ ຄວາມບັນເທີງຄົບວົງຈອນ ພາຍໃຕ້ຄຳຂວັນ “Together, We create a world”.',

    // Apply Modal
    apply_modal_title: 'ສະໝັກດ່ວນ',
    apply_step_1: '1. ຂໍ້ມູນສ່ວນຕົວ',
    apply_step_2: '2. ອັບໂຫຼດຊີວະປະຫວັດ',
    apply_step_3: '3. ສົ່ງໃບສະໝັກ',
    apply_select_job: 'ເລືອກຕຳແໜ່ງງານທີ່ຕ້ອງການສະໝັກ',
    apply_fullname_placeholder: 'ປ້ອນຊື່ ແລະ ນາມສະກຸນ',
    apply_phone_placeholder: '020 xxxx xxxx',
    apply_upload_title: 'ອັບໂຫຼດຊີວະປະຫວັດ (.pdf, .docx)',
    apply_drag_text: 'ລາກ & ວາງໄຟລ໌',
    apply_or_click: 'ຫຼື ຄລິກເພື່ອເລືອກໄຟລ໌ (.pdf, .docx)',
    btn_cancel: 'ຍົກເລີກ',
    btn_submit_apply: 'ສົ່ງໃບສະໝັກ',
    apply_submitting: 'ກຳລັງສົ່ງ...',

    // Auth
    login_title: 'ເຂົ້າສູ່ລະບົບ',
    login_subtitle: 'ເຂົ້າສູ່ລະບົບ ເພື່ອເບິ່ງວຽກທີ່ເໝາະກັບທັກສະຂອງທ່ານ ແລະ ສະໝັກວຽກໄດ້ທັນທີ',
    login_tab_phone: 'ໃຊ້ເບີໂທລະສັບ',
    login_tab_email: 'ໃຊ້ອີເມວ',
    label_phone_num: 'ເບີໂທລະສັບ',
    label_email_addr: 'ອີເມວ',
    label_password: 'ລະຫັດຜ່ານ',
    placeholder_phone_input: '5xxxxxxx',
    placeholder_email_input: 'example@email.com',
    placeholder_password: '••••••••',
    btn_login_submit: 'ເຂົ້າສູ່ລະບົບ',
    or_continue_with: 'ຫຼື ເຂົ້າສູ່ລະບົບດ້ວຍ',
    no_account_yet: 'ຍັງບໍ່ມີບັນຊີ?',
    btn_go_signup: 'ລົງທະບຽນໃໝ່',
    signup_title: 'ລົງທະບຽນສະມາຊິກ',
    signup_subtitle: 'ສ້າງບັນຊີໃໝ່ ເພື່ອບັນທຶກວຽກ, ຕິດຕາມໃບສະໝັກ ແລະ ຮັບການແຈ້ງເຕືອນວຽກໃໝ່',
    signup_tab_phone: 'ລົງທະບຽນດ້ວຍເບີໂທ',
    signup_tab_email: 'ລົງທະບຽນດ້ວຍອີເມວ',
    btn_signup_submit: 'ລົງທະບຽນ',
    have_account: 'ມີບັນຊີແລ້ວບໍ?',
    btn_go_login: 'ເຂົ້າສູ່ລະບົບ',

    // Footer
    footer_company_desc: 'ກຸ່ມບໍລິສັດຊັ້ນນຳຂອງ ສປປ ລາວ ດ້ານການບໍລິຫານສູນການຄ້າ, ສູນວາງສະແດງສິນຄ້າລະດັບຊາດ-ສາກົນ, ສູນອາຫານ ແລະ ຄວາມບັນເທີງຄົບວົງຈອນ.',
    footer_lsx: 'ບໍລິສັດຈົດທະບຽນໃນຕະຫຼາດຫຼັກຊັບລາວ (LSX)',
    footer_facilities_title: 'ສາຂາປະຈຳການ (33 ຕຳແໜ່ງ)',
    footer_quick_menu: 'ເມນູຫຼັກ',
    footer_contact_title: 'ຕິດຕໍ່ພະແນກສັນຫາ',
    footer_pos_count_10: '10 ຕຳແໜ່ງ',
    footer_pos_count_5: '5 ຕຳແໜ່ງ',
    footer_pos_count_9: '9 ຕຳແໜ່ງ',
    footer_all_jobs: 'ຕຳແໜ່ງວຽກທັງໝົດ',
    footer_talent: 'ຝາກ CV',
    footer_about: 'ກ່ຽວກັບພວກເຮົາ',
    footer_contact_hr: 'ຕິດຕໍ່ຝ່າຍບຸກຄົນ',
    footer_hours_text: 'ວັນຈັນ - ວັນສຸກ (08:30 - 17:30)',
    footer_hours_label: 'ໂມງການເຮັດວຽກ',
    footer_copyright: 'ສະຫງວນລິຂະສິດທຸກປະການ.',
    footer_developer: 'ພັດທະນາໂດຍ',
    developer_name: 'Mr. Hannalong Savayvanh',
    about_dev_title: 'ຜູ້ພັດທະນາລະບົບ',
    about_dev_role: 'Full-Stack Developer & System Architecture',
    about_dev_desc: 'ອອກແບບ ແລະ ພັດທະນາລະບົບຮັບສະໝັກງານອອນລາຍ Lao World Careers Portal'
  },
  en: {
    // Nav
    nav_home: 'Home',
    nav_jobs: 'Jobs',
    nav_tracker: 'My Applications',
    nav_talent: 'Talent Pool',
    nav_about: 'About Us',
    nav_contact: 'Contact Us',
    nav_saved: 'Saved Jobs',
    btn_login: 'Log In',
    btn_signup: 'Sign Up',
    btn_logout: 'Log Out',
    status_logged_in: '● Logged In',

    // Hero & Search
    hero_title: 'Join Our Team - Lao World Public Company',
    hero_subtitle: 'Explore career opportunities and grow your professional future with Lao World Public Company',
    search_placeholder: 'Search job title or location...',
    tab_all: 'All Jobs (33)',
    tab_hq: 'Headquarters (10)',
    tab_thong: 'Thongkhankham Mall (5)',
    tab_exhibit: 'Lao-ITECC Exhibit (9)',
    tab_mall: 'ITECC Mall (9)',
    no_jobs_found: 'No open positions found',
    try_search_again: 'Try different search keywords or select \'All Jobs\'',
    job_status_open: 'Open',
    job_deadline: 'Deadline:',
    btn_details: 'Details',
    btn_easy_apply: 'Easy Apply',

    // Detail View
    back_to_jobs: 'Back to Openings',
    breadcrumb_position: 'Position >',
    company_name_full: 'Lao World Public Company',
    responsibilities_title: 'Key Responsibilities',
    requirements_title: 'Qualifications & Requirements',
    benefits_title: 'Benefits & Compensation',
    benefit_social_security: 'Social security and health insurance in accordance with labor laws',
    benefit_bonus: 'Annual bonus and performance-based incentive (KPI Bonus)',
    benefit_leave: 'Annual paid leave, public holidays, and special leaves',
    benefit_training: 'Continuous training programs and clear career advancement pathways',
    summary_title: 'Job Summary',
    label_facility: 'Facility / Location:',
    label_job_type: 'Employment Type:',
    label_salary: 'Salary:',
    salary_structure: 'Competitive & based on experience',
    label_open_date: 'Posted Date:',
    label_deadline: 'Closing Date:',
    label_status: 'Status:',
    inquire_more: 'Have Questions?',
    inquire_desc: 'Contact HR: +856 21 415 555 or email hr.careers@laoworld.la',

    // Saved Jobs
    saved_title: 'Saved Jobs',
    saved_desc: 'Positions you bookmarked for later review and fast application',
    saved_empty_title: 'No saved jobs yet',
    saved_empty_desc: 'Click the heart icon on any job card to save it here',
    btn_back_jobs: 'Back to Openings',

    // Tracker View
    tracker_title: 'Application Status Tracker',
    tracker_desc: 'Monitor the screening progress and status of your submitted applications at Lao World',
    tracker_empty_title: 'No Applications Found',
    tracker_empty_desc: 'Please browse available jobs and click "Easy Apply" to submit your application',
    app_id_label: 'Application ID:',
    app_submitted_date: 'Submitted on:',
    step_submitted: '1. Submitted',
    step_reviewing: '2. Screening CV',
    step_interview: '3. Interview',
    step_offer: '4. Decision / Offer',

    // Talent Pool
    talent_badge: 'Lao World Talent Network',
    talent_title: 'Join Our Talent Pool',
    talent_desc: "Haven't found the right role yet? Leave your CV in our talent network. Our HR team will reach out as soon as matching openings appear!",
    label_fullname: 'Full Name',
    label_phone: 'Phone / WhatsApp',
    label_email: 'Email Address',
    talent_pref_loc: 'Preferred Facility',
    talent_field: 'Functional Expertise / Field',
    talent_upload: 'Upload CV / Resume (.pdf, .docx)',
    talent_upload_drag: 'Click or drag & drop CV file here',
    talent_upload_hint: 'Supports PDF, DOCX (up to 10MB)',
    talent_notes: 'Cover Note / Brief Intro',
    talent_notes_placeholder: 'Briefly introduce your background and career goals...',
    talent_submit_btn: 'Submit CV to Talent Pool',
    talent_submitting: 'Submitting...',

    // Contact
    contact_badge: 'Contact Recruitment Team',
    contact_title: 'Contact HR & Recruitment',
    contact_desc: 'Have questions about open vacancies, application processes, or working at Lao World? Reach out through our direct channels:',
    card_hotline_title: 'HR Hotline',
    card_hotline_sub: 'Mon - Fri: 08:30 - 17:30',
    card_email_title: 'Recruitment Email',
    card_email_sub: 'Accepting CVs 24/7',
    card_hq_title: 'Headquarters',
    card_hq_sub: 'Kamphengmeuang Rd, Phonthan Village, Xaysettha District, Vientiane Capital',
    card_social_title: 'Facebook Page',
    card_social_sub: 'Response within 24 hours',
    contact_send_msg: 'Send Message to HR Team',
    placeholder_fullname: 'Your Full Name',
    placeholder_phone: 'Contact Phone Number',
    placeholder_subject: 'Subject (e.g. Inquire about IT Support role)',
    placeholder_msg: 'Type your message here...',
    btn_send_msg: 'Send Message',
    btn_send_email: 'Send via Email',
    btn_send_whatsapp: 'Send via WhatsApp',
    facilities_title: '4 Operating Facilities',

    // About
    about_badge: 'About Us',
    about_title: 'Lao World Public Company',
    about_slogan: '“Together, We create a world”',
    about_desc: 'Lao World Public Company is a leading corporate group in Lao PDR operating shopping mall management, national and international exhibition centers, food courts, and entertainment complexes under the motto “Together, We create a world”.',

    // Apply Modal
    apply_modal_title: 'Easy Apply',
    apply_step_1: '1. Personal Info',
    apply_step_2: '2. Upload Resume',
    apply_step_3: '3. Submit',
    apply_select_job: 'Select Position to Apply',
    apply_fullname_placeholder: 'Enter your full name',
    apply_phone_placeholder: '020 xxxx xxxx',
    apply_upload_title: 'Upload Resume (.pdf, .docx)',
    apply_drag_text: 'Drag & drop file',
    apply_or_click: 'or click to browse (.pdf, .docx)',
    btn_cancel: 'Cancel',
    btn_submit_apply: 'Submit Application',
    apply_submitting: 'Submitting...',

    // Auth
    login_title: 'Welcome Back',
    login_subtitle: 'Sign in to discover positions matching your skills and apply immediately',
    login_tab_phone: 'Use Phone Number',
    login_tab_email: 'Use Email',
    label_phone_num: 'Phone Number',
    label_email_addr: 'Email Address',
    label_password: 'Password',
    placeholder_phone_input: '5xxxxxxx',
    placeholder_email_input: 'example@email.com',
    placeholder_password: '••••••••',
    btn_login_submit: 'Log In',
    or_continue_with: 'Or continue with',
    no_account_yet: "Don't have an account?",
    btn_go_signup: 'Create an Account',
    signup_title: 'Create an Account',
    signup_subtitle: 'Register to save jobs, track applications, and receive instant job alerts',
    signup_tab_phone: 'Register with Phone',
    signup_tab_email: 'Register with Email',
    btn_signup_submit: 'Sign Up',
    have_account: 'Already have an account?',
    btn_go_login: 'Log In',

    // Footer
    footer_company_desc: "Lao PDR's leading corporate group in shopping mall management, national/international exhibition centers, food courts, and comprehensive entertainment.",
    footer_lsx: 'Listed on the Lao Securities Exchange (LSX)',
    footer_facilities_title: 'Operating Facilities (33 Openings)',
    footer_quick_menu: 'Quick Links',
    footer_contact_title: 'Contact Recruitment',
    footer_pos_count_10: '10 Openings',
    footer_pos_count_5: '5 Openings',
    footer_pos_count_9: '9 Openings',
    footer_all_jobs: 'All Job Openings',
    footer_talent: 'Talent Pool (Drop CV)',
    footer_about: 'About Lao World',
    footer_contact_hr: 'Contact HR Team',
    footer_hours_text: 'Monday - Friday (08:30 - 17:30)',
    footer_hours_label: 'Office Hours',
    footer_copyright: 'All rights reserved.',
    footer_developer: 'Developed by',
    developer_name: 'Mr. Hannalong Savayvanh',
    about_dev_title: 'System Developer',
    about_dev_role: 'Full-Stack Developer & System Architecture',
    about_dev_desc: 'Designed & Developed the Lao World Careers Portal recruitment system'
  }
};
