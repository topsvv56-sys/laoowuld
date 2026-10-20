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
  | "saved"
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
  { key: 'cat-mgt', title: '1. ລະດັບບໍລິຫານ ແລະ ຫົວໜ້າ (Management)', icon: 'briefcase', color: 'bg-indigo-900 text-white' },
  { key: 'cat-it', title: '2. ໄອທີ, ສື່ ແລະ ຄວາມຄິດສ້າງສັນ (IT, Creative & Media)', icon: 'laptop', color: 'bg-slate-700 text-white' },
  { key: 'cat-mkt', title: '3. ການຕະຫຼາດ, ການຂາຍ ແລະ ປະຊາສຳພັນ (Marketing & Sales)', icon: 'megaphone', color: 'bg-amber-600 text-white' },
  { key: 'cat-adm', title: '4. ການເງິນ, ນິຕິກຳ ແລະ ບໍລິຫານຫ້ອງການ (Finance & Admin)', icon: 'file-text', color: 'bg-purple-800 text-white' },
  { key: 'cat-ops', title: '5. ບໍລິການໜ້າຮ້ານ ແລະ ປະຕິບັດການທົ່ວໄປ (Operations & Services)', icon: 'concierge-bell', color: 'bg-teal-700 text-white' }
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

export const I18N = {
  lo: {
    nav_jobs: 'ຕຳແໜ່ງງານ (Jobs)',
    nav_tracker: 'ຕິດຕາມໃບສະໝັກ',
    nav_talent: 'ຝາກ CV (Talent Pool)',
    nav_about: 'ກ່ຽວກັບພວກເຮົາ (About)',
    nav_contact: 'ຕິດຕໍ່ພວກເຮົາ (Contact)',
    nav_saved: 'ວຽກທີ່ບັນທຶກໄວ້ (Saved Jobs)',
    btn_login: 'ເຂົ້າສູ່ລະບົບ',
    btn_signup: 'ລົງທະບຽນ',
    status_logged_in: '● ເຂົ້າສູ່ລະບົບແລ້ວ',
    search_placeholder: 'ຄົ້ນຫາຕຳແໜ່ງງານ ຫຼື ສາຂາ...',
    tab_all: 'ທັງໝົດ (33)',
    tab_hq: 'ຫ້ອງການໃຫຍ່ (10)',
    tab_thong: 'ສູນການຄ້າທົ່ງຂັນຄຳ (5)',
    tab_exhibit: 'ລາວ-ໄອເຕັກ (9)',
    tab_mall: 'ໄອເຕັກມໍ (9)',
    btn_details: 'ລາຍລະອຽດ',
    btn_easy_apply: 'ສະໝັກດ່ວນ',
    saved_title: 'ວຽກທີ່ບັນທຶກໄວ້ (Saved Jobs)',
    saved_desc: 'ລາຍການຕຳແໜ່ງງານທີ່ທ່ານສົນໃຈ ແລະ ກົດບັນທຶກໄວ້ເບິ່ງພາຍຫຼັງ',
    btn_back_jobs: 'ກັບຄືນໜ້າຕຳແໜ່ງງານ',
    talent_title: 'ຝາກ CV ໄວ້ລ່ວງໜ້າ (Join Talent Pool)',
    talent_desc: 'ຫາກຍັງບໍ່ທັນພົບຕຳແໜ່ງທີ່ກົງກັບຄວາມສາມາດຂອງທ່ານໃນຕອນນີ້, ສາມາດຝາກຊີວະປະຫວັດໄວ້ໃນຄັງບຸກຄະລາກອນຂອງ Lao World. ເມື່ອມີຕຳແໜ່ງໃໝ່ທີ່ເໝາະສົມ, ທີມງານ HR ຈະຕິດຕໍ່ທ່ານທັນທີ!',
    contact_title: 'ຕິດຕໍ່ພະແນກສັນຫາບຸກຄະລາກອນ',
    contact_desc: 'ມີຂໍ້ສົງໄສກ່ຽວກັບຕຳແໜ່ງວຽກ, ຂັ້ນຕອນການສຳພາດ, ຫຼື ຕ້ອງການສອບຖາມຂໍ້ມູນເພີ່ມເຕີມ ສາມາດຕິດຕໍ່ພວກເຮົາໄດ້ຜ່ານຊ່ອງທາງລຸ່ມນີ້:',
    label_fullname: 'ຊື່ ແລະ ນາມສະກຸນ',
    label_phone: 'ເບີໂທລະສັບ / WhatsApp',
    label_email: 'ອີເມວ',
    talent_pref_loc: 'ສາຂາທີ່ສະດວກປະຈຳການ',
    talent_field: 'ສາຍງານທີ່ທ່ານມີຄວາມຊຳນານ ຫຼື ສົນໃຈ',
    talent_upload: 'ອັບໂຫຼດຊີວະປະຫວັດ (Upload CV/Resume)',
    talent_notes: 'ຂໍ້ຄວາມສັ້ນໆແນະນຳຕົນເອງ (Cover Note)',
    talent_submit_btn: 'ສົ່ງຂໍ້ມູນເຂົ້າ Talent Pool',
    contact_send_msg: 'ຝາກຂໍ້ຄວາມສອບຖາມກັບຝ່າຍ HR'
  },
  en: {
    nav_jobs: 'Jobs',
    nav_tracker: 'Track Applications',
    nav_talent: 'Talent Pool (Drop CV)',
    nav_about: 'About Us',
    nav_contact: 'Contact Us',
    nav_saved: 'Saved Jobs',
    btn_login: 'Log In',
    btn_signup: 'Sign Up',
    status_logged_in: '● Logged In',
    search_placeholder: 'Search job title or location...',
    tab_all: 'All Jobs (33)',
    tab_hq: 'Headquarters (10)',
    tab_thong: 'Thongkhankham Mall (5)',
    tab_exhibit: 'Lao-ITECC Exhibit (9)',
    tab_mall: 'ITECC Mall (9)',
    btn_details: 'Details',
    btn_easy_apply: 'Easy Apply',
    saved_title: 'Saved Jobs',
    saved_desc: 'Positions you bookmarked for later review and fast application',
    btn_back_jobs: 'Back to Openings',
    talent_title: 'Join Our Talent Pool (Drop CV)',
    talent_desc: "Haven't found the right role yet? Leave your CV in our talent network. Our HR team will reach out as soon as matching openings appear!",
    contact_title: 'Contact HR & Recruitment',
    contact_desc: 'Have questions about open vacancies, application processes, or working at Lao World? Reach out through our direct channels:',
    label_fullname: 'Full Name',
    label_phone: 'Phone / WhatsApp',
    label_email: 'Email Address',
    talent_pref_loc: 'Preferred Facility',
    talent_field: 'Functional Expertise / Interested Field',
    talent_upload: 'Upload CV / Resume (.pdf, .docx)',
    talent_notes: 'Brief Introduction / Cover Note',
    talent_submit_btn: 'Submit to Talent Pool',
    contact_send_msg: 'Send Message to HR Team'
  }
};
