const docRows = document.querySelectorAll('.doc-row');
const docModal = document.getElementById('docModal');
const closeBtn = document.getElementById('docCloseBtn');
const createModal = document.getElementById('createModal');
const openCreateModalBtn = document.getElementById('openCreateModalBtn');
const createCloseBtn = document.getElementById('createCloseBtn');
const dashboardModal = document.getElementById('dashboardModal');
const dashboardCloseBtn = document.getElementById('dashboardCloseBtn');
const roleSwitcher = document.getElementById('roleSwitcher');
const roleSwitcherBtn = document.getElementById('roleSwitcherBtn');
const roleSwitcherMenu = document.getElementById('roleSwitcherMenu');
const roleSwitcherOptions = Array.from(document.querySelectorAll('.role-switcher-option[data-role]'));
const mainFilterBlocks = Array.from(document.querySelectorAll('.filter-form .filter-block'));
const mainSearchInput = document.querySelector('.head-actions input[type="text"]');
const mainDocCounter = document.querySelector('.content-card .counter');
const mainDocsTableBody = document.querySelector('.table-wrap tbody');
const openTestBuilderBtn = document.getElementById('openTestBuilderBtn');
const testBuilderBackBtn = document.getElementById('testBuilderBackBtn');
const createHomeView = document.getElementById('createHomeView');
const testBuilderView = document.getElementById('testBuilderView');
const tbStep1 = document.getElementById('tbStep1');
const tbStep2 = document.getElementById('tbStep2');
const tbStep3 = document.getElementById('tbStep3');
const tbToStep2Btn = document.getElementById('tbToStep2Btn');
const tbGenerateQuestionsBtn = document.getElementById('tbGenerateQuestionsBtn');
const tbAddQuestionBtn = document.getElementById('tbAddQuestionBtn');
const tbFinalizeBtn = document.getElementById('tbFinalizeBtn');
const tbSaveDraftBtn = document.getElementById('tbSaveDraftBtn');
const tbLoadDraftBtn = document.getElementById('tbLoadDraftBtn');
const tbMetaInfo = document.getElementById('tbMetaInfo');
const tbValidationOutput = document.getElementById('tbValidationOutput');
const tbQuestionSearch = document.getElementById('tbQuestionSearch');
const tbAutosaveState = document.getElementById('tbAutosaveState');
const testDocSelect = document.getElementById('testDocSelect');
const testVersionSelect = document.getElementById('testVersionSelect');
const questionCountInput = document.getElementById('questionCountInput');
const questionsContainer = document.getElementById('questionsContainer');
const stepPills = Array.from(document.querySelectorAll('[data-step-pill]'));
const dashViewButtons = Array.from(document.querySelectorAll('.dash-view-grid [data-view]'));
const dashViewPanels = Array.from(document.querySelectorAll('[data-view-panel]'));
const dashboardViewTitle = document.getElementById('dashboardViewTitle');
const dashboardSubTitle = document.getElementById('dashboardSubTitle');
const dashboardTypeSelect = document.getElementById('dashboardTypeSelect');
const metricTotal = document.getElementById('metricTotal');
const kpiCards = Array.from(document.querySelectorAll('.kpi-card'));
const testOverviewCardsSection = document.getElementById('testOverviewCardsSection');
const overviewCardsGrid = document.getElementById('overviewCardsGrid');
const overviewPassPieSection = document.getElementById('overviewPassPieSection');
const overviewPassPieDonut = document.getElementById('overviewPassPieDonut');
const overviewPassRateValue = document.getElementById('overviewPassRateValue');
const overviewPassCount = document.getElementById('overviewPassCount');
const overviewFailCount = document.getElementById('overviewFailCount');
const miniBarsContainer = document.getElementById('miniBarsContainer');
const leaderList = document.getElementById('leaderList');
const alertList = document.getElementById('alertList');
const analyticsTableBody = document.getElementById('analyticsTableBody');
const barChartContainer = document.getElementById('barChartContainer');
const lineChartPolyline = document.getElementById('lineChartPolyline');
const lineChartPoints = document.getElementById('lineChartPoints');
const pieDonut = document.getElementById('pieDonut');
const pieLegend = document.getElementById('pieLegend');
const docCardsGrid = document.getElementById('docCardsGrid');
const insightDetailTitle = document.getElementById('insightDetailTitle');
const insightDetailText = document.getElementById('insightDetailText');
const insightDetailContent = document.getElementById('insightDetailContent');
const dashboardDrillModal = document.getElementById('dashboardDrillModal');
const dashboardDrillCloseBtn = document.getElementById('dashboardDrillCloseBtn');
const dashboardDrillTitle = document.getElementById('dashboardDrillTitle');
const dashboardDrillSubtitle = document.getElementById('dashboardDrillSubtitle');
const dashboardDrillBody = document.getElementById('dashboardDrillBody');
const dashRuleTypeFilter = document.getElementById('dashRuleTypeFilter');
const dashRuleTypeDropdown = document.getElementById('dashRuleTypeDropdown');
const dashRuleTypeTrigger = document.getElementById('dashRuleTypeTrigger');
const dashRuleTypeCheckboxes = Array.from(
  document.querySelectorAll('#dashRuleTypeDropdown input[type="checkbox"]'),
);
const dashDocNameDropdown = document.getElementById('dashDocNameDropdown');
const dashDocNameTrigger = document.getElementById('dashDocNameTrigger');
const dashDocNameMenu = document.getElementById('dashDocNameMenu');
const dashVersionDropdown = document.getElementById('dashVersionDropdown');
const dashVersionTrigger = document.getElementById('dashVersionTrigger');
const dashVersionMenu = document.getElementById('dashVersionMenu');
const dashDocNameFilter = document.getElementById('dashDocNameFilter');
const dashVersionFilter = document.getElementById('dashVersionFilter');
const bankRegionFilter = document.getElementById('bankRegionFilter');
const bankBranchTypeFilter = document.getElementById('bankBranchTypeFilter');
const bankDepartmentFilter = document.getElementById('bankDepartmentFilter');
const headOfficeOnlyFilter = document.getElementById('headOfficeOnlyFilter');
const dashPeriodButtons = Array.from(document.querySelectorAll('.dash-period button'));
const dashSegmentButtons = Array.from(document.querySelectorAll('.dash-segment button'));
let dashDocNameCheckboxes = [];
let dashVersionCheckboxes = [];

const modalDocId = document.getElementById('modalDocId');
const modalDocRef = document.getElementById('modalDocRef');
const modalDocRefBottom = document.getElementById('modalDocRefBottom');
const modalDocTitle = document.getElementById('modalDocTitle');
const modalOrg = document.getElementById('modalOrg');
const modalStage = document.getElementById('modalStage');
const modalDate = document.getElementById('modalDate');
const modalSummary = document.getElementById('modalSummary');
const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');
const DRAFT_KEY = 'agro_test_builder_draft_v1';
const ROLE_STORAGE_KEY = 'agro_active_role_v1';
const KANSELYARIYA_PAGE = 'kanselyariya.html';
const KANSELYARIYA_PATH = 'kanselyariya/kanselyariya.html';
let autosaveTimer = null;
let currentDashboardType = 'test';
const DASHBOARD_REFRESH_MS = 15000;
let dashboardAutoRefreshTimer = null;
let dashboardRefreshTick = 0;
const DEFAULT_DASHBOARD_DOCS = [
  { name: "О внесении изменений и дополнений в Инструкции...", ruleType: 'Nizom', versions: ['v3.0', 'v2.1'] },
  { name: 'Шаблон служебной записки', ruleType: 'Qoida', versions: ['v2.0', 'v1.0'] },
  { name: 'Стандарт корпоративного стиля и оформления до...', ruleType: 'Standart', versions: ['v2.1'] },
  { name: 'Методические указания по оценке залогового обе...', ruleType: "Ko'rsatma", versions: ['v1.0'] },
  { name: 'Положение о документообороте', ruleType: 'Tartib', versions: ['v1.2', 'v1.0'] },
];
const DASHBOARD_ANALYTICS = {
  test: [
    { name: 'Kreditlash nizomi', version: 'v3.0', ruleType: 'Nizom', region: 'г. Ташкент', branchType: 'Головной офис', department: 'Кредитный отдел', headOffice: true, updatedDaysAgo: 2, employeeCount: 240, submitted: 213, avgScore: 84, passRate: 86, retryRate: 9 },
    { name: 'Ichki muomala qoidasi', version: 'v2.0', ruleType: 'Qoida', region: 'Самаркандская область', branchType: 'Региональный', department: 'Операционный отдел', headOffice: false, updatedDaysAgo: 9, employeeCount: 205, submitted: 178, avgScore: 76, passRate: 78, retryRate: 17 },
    { name: 'Korporativ standart', version: 'v2.1', ruleType: 'Standart', region: 'Ферганская область', branchType: 'Региональный', department: 'Маркетинг', headOffice: false, updatedDaysAgo: 18, employeeCount: 182, submitted: 151, avgScore: 71, passRate: 69, retryRate: 24 },
    { name: 'Metodik ko‘rsatma', version: 'v1.0', ruleType: "Ko'rsatma", region: 'Бухарская область', branchType: 'Региональный', department: 'Риск-менеджмент', headOffice: false, updatedDaysAgo: 27, employeeCount: 220, submitted: 200, avgScore: 74, passRate: 74, retryRate: 19 },
    { name: 'Kadrlar yo‘riqnomasi', version: 'v1.3', ruleType: "Yo'riqnoma", region: 'г. Ташкент', branchType: 'Головной офис', department: 'Отдел кадров', headOffice: true, updatedDaysAgo: 34, employeeCount: 166, submitted: 142, avgScore: 79, passRate: 81, retryRate: 11 },
  ],
  compliance: [
    { name: 'AML/KYC yo‘riqnoma', version: 'v4.2', ruleType: "Yo'riqnoma", region: 'г. Ташкент', branchType: 'Головной офис', department: 'Комплаенс', headOffice: true, updatedDaysAgo: 1, employeeCount: 148, submitted: 132, avgScore: 88, passRate: 91, retryRate: 6 },
    { name: 'FATF talablari', version: 'v2.5', ruleType: 'Standart', region: 'Самаркандская область', branchType: 'Региональный', department: 'Комплаенс', headOffice: false, updatedDaysAgo: 6, employeeCount: 139, submitted: 126, avgScore: 82, passRate: 83, retryRate: 11 },
    { name: 'Ichki nazorat reglamenti', version: 'v1.9', ruleType: 'Reglament', region: 'Андижанская область', branchType: 'Региональный', department: 'Внутренний аудит', headOffice: false, updatedDaysAgo: 14, employeeCount: 131, submitted: 119, avgScore: 77, passRate: 76, retryRate: 18 },
    { name: 'Anti-fraud standarti', version: 'v1.3', ruleType: 'Standart', region: 'Бухарская область', branchType: 'Региональный', department: 'Комплаенс', headOffice: false, updatedDaysAgo: 22, employeeCount: 111, submitted: 98, avgScore: 71, passRate: 72, retryRate: 25 },
    { name: 'PEP monitoring qoidasi', version: 'v1.1', ruleType: 'Qoida', region: 'г. Ташкент', branchType: 'Головной офис', department: 'Комплаенс', headOffice: true, updatedDaysAgo: 35, employeeCount: 93, submitted: 76, avgScore: 74, passRate: 79, retryRate: 14 },
  ],
  performance: [
    { name: 'Filial KPI reglamenti', version: 'v3.1', ruleType: 'Reglament', region: 'Ферганская область', branchType: 'Региональный', department: 'Операционный отдел', headOffice: false, updatedDaysAgo: 4, employeeCount: 310, submitted: 268, avgScore: 81, passRate: 83, retryRate: 10 },
    { name: 'Mijoz servisi standarti', version: 'v2.4', ruleType: 'Standart', region: 'Самаркандская область', branchType: 'Региональный', department: 'Отдел по работе с клиентами', headOffice: false, updatedDaysAgo: 12, employeeCount: 276, submitted: 233, avgScore: 78, passRate: 79, retryRate: 15 },
    { name: 'Sotuvlar metodikasi', version: 'v1.8', ruleType: "Ko'rsatma", region: 'г. Ташкент', branchType: 'Головной офис', department: 'Кредитный отдел', headOffice: true, updatedDaysAgo: 19, employeeCount: 255, submitted: 214, avgScore: 80, passRate: 82, retryRate: 12 },
    { name: 'Operatsion nazorat tartibi', version: 'v2.0', ruleType: 'Tartib', region: 'Джизакская область', branchType: 'Региональный', department: 'Операционный отдел', headOffice: false, updatedDaysAgo: 28, employeeCount: 228, submitted: 185, avgScore: 73, passRate: 75, retryRate: 18 },
    { name: 'Depozit kampaniyasi nizomi', version: 'v1.5', ruleType: 'Nizom', region: 'Наманганская область', branchType: 'Региональный', department: 'Отдел депозитов', headOffice: false, updatedDaysAgo: 45, employeeCount: 204, submitted: 167, avgScore: 72, passRate: 74, retryRate: 20 },
  ],
  executive: [
    { name: 'Strategik KPI paketi', version: 'v5.0', ruleType: 'Nizom', region: 'г. Ташкент', branchType: 'Головной офис', department: 'Юридический отдел', headOffice: true, updatedDaysAgo: 3, employeeCount: 180, submitted: 150, avgScore: 89, passRate: 92, retryRate: 5 },
    { name: 'Audit konsolidatsiyasi', version: 'v2.2', ruleType: 'Reglament', region: 'г. Ташкент', branchType: 'Головной офис', department: 'Внутренний аудит', headOffice: true, updatedDaysAgo: 11, employeeCount: 138, submitted: 116, avgScore: 85, passRate: 88, retryRate: 8 },
    { name: 'Risk portfeli sharhi', version: 'v4.1', ruleType: 'Standart', region: 'Самаркандская область', branchType: 'Региональный', department: 'Риск-менеджмент', headOffice: false, updatedDaysAgo: 26, employeeCount: 126, submitted: 101, avgScore: 79, passRate: 80, retryRate: 13 },
    { name: 'Kadrlar samaradorligi hisobot', version: 'v1.4', ruleType: 'Qoida', region: 'Ферганская область', branchType: 'Региональный', department: 'Отдел кадров', headOffice: false, updatedDaysAgo: 33, employeeCount: 120, submitted: 94, avgScore: 77, passRate: 78, retryRate: 16 },
    { name: 'IT barqarorlik ko‘rsatmasi', version: 'v3.3', ruleType: "Ko'rsatma", region: 'г. Ташкент', branchType: 'Головной офис', department: 'IT-отдел', headOffice: true, updatedDaysAgo: 58, employeeCount: 132, submitted: 110, avgScore: 83, passRate: 86, retryRate: 9 },
  ],
};
const DASHBOARD_ANALYTICS_BASE = JSON.parse(JSON.stringify(DASHBOARD_ANALYTICS));
let currentInsightType = 'summary';
let latestDashboardInsights = null;
let activeDrillCardKey = null;
let drillTopicMode = null;
let latestDrillContext = null;

const DASHBOARD_PRESETS = {
  test: {
    subtitle: "Тестлар бўйича аналитика",
    metric: "∑ Тестов: 128",
    kpis: [
      { label: "Jami testlar", value: "128", note: "+12% o‘tgan oyga nisbatan" },
      { label: "O‘rtacha o‘tish foizi", value: "81%", note: "+4% yaxshilanish" },
      { label: "Topshirgan hodimlar", value: "742", note: "Faol: 589" },
      { label: "Qiyin savollar ulushi", value: "23%", note: "Qayta ko‘rib chiqish kerak" },
    ],
    miniBars: [
      { label: "Kreditlash nizomi v3.0", value: 86 },
      { label: "Ichki muomala qoidasi v2.0", value: 78 },
      { label: "Korporativ standart v2.1", value: 69 },
      { label: "Metodik ko‘rsatma v1.0", value: 74 },
      { label: "Depozit siyosati v1.2", value: 82 },
      { label: "Riskni boshqarish reglamenti v2.0", value: 71 },
      { label: "Kadrlar bo‘yicha yo‘riqnoma v1.3", value: 76 },
    ],
    insights: [
      "Qaysi hujjat bo‘yicha xatolar ko‘p ekanligi",
      "Qaysi bo‘lim testlarni vaqtida topshirmayotgani",
      "Qaysi savol varianti ko‘proq noto‘g‘ri tanlanayotgani",
      "Versiyalar bo‘yicha natijalar farqi",
      "Qayta o‘qitish kerak bo‘lgan hodimlar ro‘yxati",
    ],
    leaders: [
      { name: "Yuridik", score: "92%" },
      { name: "IT", score: "88%" },
      { name: "Kredit", score: "81%" },
      { name: "Operatsion", score: "74%" },
      { name: "Risk", score: "67%" },
    ],
    alerts: [
      { level: "danger", tag: "Kritik", text: "3 ta filialda topshirish darajasi 50% dan past" },
      { level: "warn", tag: "Diqqat", text: "12 ta savol bo‘yicha xato ulushi 40% dan yuqori" },
      { level: "info", tag: "Info", text: "v2.1 dan v3.0 ga o‘tishda natija +9% oshgan" },
    ],
    tableRows: [
      ["Kreditlash nizomi", "v3.0", "213", "84/100", "86%", "9%", "ok", "Past"],
      ["Ichki muomala qoidasi", "v2.0", "178", "76/100", "78%", "17%", "warn", "O‘rta"],
      ["Korporativ standart", "v2.1", "151", "71/100", "69%", "24%", "bad", "Yuqori"],
      ["Metodik ko‘rsatma", "v1.0", "200", "74/100", "74%", "19%", "warn", "O‘rta"],
    ],
    bars: [
      { label: "Yuridik", value: 92 },
      { label: "Kredit", value: 81 },
      { label: "Operatsion", value: 74 },
      { label: "Risk", value: 67 },
      { label: "IT", value: 88 },
    ],
    linePoints: "40,210 160,172 280,180 400,130 520,118 640,86 760,64",
    pie: {
      gradient: "conic-gradient(#37af71 0 61%, #f2c35f 61% 88%, #ea6b6b 88% 100%)",
      legend: [
        { cls: "ok", text: "Muvaffaqiyatli: 61%" },
        { cls: "mid", text: "Qayta topshirgan: 27%" },
        { cls: "bad", text: "Topshirmagan: 12%" },
      ],
    },
    cards: [
      { title: "Jami xodimlar", meta: "Bosh ofis kesimida", value: "742" },
      { title: "Test topshirganlar", meta: "Faol ishtirokchilar", value: "589" },
      { title: "O'tganlar", meta: "Muvaffaqiyatli topshirganlar", value: "478" },
      { title: "Yeqilganlar", meta: "Qayta topshirish kerak", value: "111" },
      { title: "Jami testlar", meta: "Shakllantirilgan testlar", value: "128" },
      { title: "Qiyin savollar ulushi", meta: "Murakkab savollar nisbati", value: "23%" },
    ],
    insightDetails: {
      summary: {
        title: "Umumiy holat bo‘yicha tafsilot",
        text: "Eng yuqori natija Yuridik bo‘limida qayd etilgan. O‘rtacha topshirish vaqti 14 daqiqa. Qayta topshirish ko‘proq Operatsion va Risk yo‘nalishlarida kuzatilgan.",
      },
      risk: {
        title: "Risk signal bo‘yicha tafsilot",
        text: "Korporativ standart v2.1 testida xato ulushi yuqori. 3 ta filialda o‘tish foizi 50% dan past. Ushbu guruhlarga qayta trening va qayta test tavsiya etiladi.",
      },
      questions: {
        title: "Savollar analizi bo‘yicha tafsilot",
        text: "12-, 18- va 23-savollarda noto‘g‘ri javob ulushi eng yuqori. Variantlar formulirovkasi qayta ko‘rib chiqilsa, o‘tish foizi 5-7% ga oshishi mumkin.",
      },
      staff: {
        title: "Xodimlar kesimi bo‘yicha tafsilot",
        text: "Yangi ishga kirgan xodimlarda test yakunlash vaqti uzoqroq. Tajribali xodimlar esa yuqori ball ko‘rsatmoqda. Segmentlarga ajratilgan o‘quv yo‘li samaraliroq bo‘ladi.",
      },
    },
  },
  compliance: {
    subtitle: "Комплаенс ва nazorat ko‘rsatkichlari",
    metric: "∑ Проверок: 64",
    kpis: [
      { label: "Compliance testlar", value: "64", note: "+8 ta yangi tekshiruv" },
      { label: "Qonuniy moslik", value: "89%", note: "Regulyator talablariga mos" },
      { label: "Aniqlangan buzilishlar", value: "17", note: "-3 ta kamaygan" },
      { label: "Yopilgan incidentlar", value: "41", note: "So‘nggi 30 kun" },
    ],
    miniBars: [
      { label: "AML/KYC yo‘riqnoma", value: 91 },
      { label: "FATF talablari", value: 83 },
      { label: "Ichki nazorat reglamenti", value: 76 },
      { label: "Anti-fraud standarti", value: 72 },
    ],
    insights: [
      "Yuqori riskli filiallar kesimida buzilishlar soni",
      "Regulyator tekshiruvi oldidan tayyorlik holati",
      "Noto‘g‘ri javob berilgan compliance savollar ro‘yxati",
      "AML/KYC bo‘yicha qayta o‘qitilishi kerak guruhlar",
      "Kritik buzilishlar eskalatsiya holati",
    ],
    leaders: [
      { name: "Compliance", score: "94%" },
      { name: "Yuridik", score: "90%" },
      { name: "Audit", score: "88%" },
      { name: "Risk", score: "79%" },
      { name: "Operatsion", score: "73%" },
    ],
    alerts: [
      { level: "danger", tag: "Kritik", text: "2 ta filialda AML check-list to‘liq yopilmagan" },
      { level: "warn", tag: "Diqqat", text: "PEP bo‘yicha 9 ta case qo‘shimcha tekshiruvda" },
      { level: "info", tag: "Info", text: "So‘nggi oyda compliance test o‘tish +6% yaxshilandi" },
    ],
    tableRows: [
      ["AML/KYC yo‘riqnoma", "v4.2", "132", "88/100", "91%", "6%", "ok", "Past"],
      ["FATF talablari", "v2.5", "126", "82/100", "83%", "11%", "warn", "O‘rta"],
      ["Ichki nazorat reglamenti", "v1.9", "119", "77/100", "76%", "18%", "warn", "O‘rta"],
      ["Anti-fraud standarti", "v1.3", "98", "71/100", "72%", "25%", "bad", "Yuqori"],
    ],
    bars: [
      { label: "Compliance", value: 94 },
      { label: "Yuridik", value: 90 },
      { label: "Audit", value: 88 },
      { label: "Risk", value: 79 },
      { label: "Operatsion", value: 73 },
    ],
    linePoints: "40,220 160,192 280,170 400,158 520,130 640,102 760,82",
    pie: {
      gradient: "conic-gradient(#2cae69 0 68%, #f0c15c 68% 89%, #df6464 89% 100%)",
      legend: [
        { cls: "ok", text: "Moslik yuqori: 68%" },
        { cls: "mid", text: "Nazorat ostida: 21%" },
        { cls: "bad", text: "Riskli: 11%" },
      ],
    },
    cards: [
      { title: "AML/KYC yo‘riqnoma v4.2", meta: "132 xodim topshirdi", value: "91%" },
      { title: "FATF talablari v2.5", meta: "126 xodim topshirdi", value: "83%" },
      { title: "Ichki nazorat reglamenti v1.9", meta: "119 xodim topshirdi", value: "76%" },
      { title: "Anti-fraud standarti v1.3", meta: "98 xodim topshirdi", value: "72%" },
    ],
    insightDetails: {
      summary: {
        title: "Compliance umumiy holati",
        text: "Tizimda compliance bo‘yicha ijobiy trend kuzatilmoqda. Yuqori riskli filiallar soni kamaygan, biroq anti-fraud bo‘limida qo‘shimcha trening zarur.",
      },
      risk: {
        title: "Compliance risk tafsiloti",
        text: "AML/KYC nazoratida 2 ta filial kritik thresholdga yaqin. Ular bo‘yicha haftalik monitoring va manual review rejimi yoqilgan.",
      },
      questions: {
        title: "Compliance savollari analizi",
        text: "Qonunchilikka doir murakkab savollarda xato ulushi baland. Savollarni amaliy case formatida qayta yozish tavsiya etiladi.",
      },
      staff: {
        title: "Compliance xodimlar kesimi",
        text: "Front-office xodimlari audit blokiga nisbatan pastroq natija ko‘rsatmoqda. Segmentatsiyalangan o‘quv modulidan so‘ng farq qisqargan.",
      },
    },
  },
  performance: {
    subtitle: "Филиалlar kesimida samaradorlik dashboardi",
    metric: "∑ Филиалов: 39",
    kpis: [
      { label: "Faol filiallar", value: "39", note: "100% tizimda faol" },
      { label: "Yuqori natijali filial", value: "14", note: "85%+ o‘tish foizi" },
      { label: "O‘rtacha ball", value: "79/100", note: "+3 punkt" },
      { label: "Kechikkan topshirish", value: "11%", note: "-2% kamaydi" },
    ],
    miniBars: [
      { label: "Toshkent sh. filiali", value: 93 },
      { label: "Samarqand filiali", value: 84 },
      { label: "Buxoro filiali", value: 79 },
      { label: "Farg‘ona filiali", value: 74 },
    ],
    insights: [
      "Qaysi filiallar jadvaldan kech qolayotgani",
      "Eng yuqori natija bergan filiallar reytingi",
      "Filiallar kesimida savol murakkablik farqi",
      "Hududlar bo‘yicha qayta topshirish dinamikasi",
      "Rag‘batlantirish kerak bo‘lgan jamoalar",
    ],
    leaders: [
      { name: "Toshkent sh.", score: "93%" },
      { name: "Namangan", score: "89%" },
      { name: "Samarqand", score: "84%" },
      { name: "Buxoro", score: "79%" },
      { name: "Farg‘ona", score: "74%" },
    ],
    alerts: [
      { level: "danger", tag: "Kritik", text: "2 ta hududda kechikkan topshirish 25% dan yuqori" },
      { level: "warn", tag: "Diqqat", text: "3 ta filialda qayta topshirish ko‘rsatkichi oshgan" },
      { level: "info", tag: "Info", text: "Top 5 filialda natija o‘rtacha +7% ga ko‘tarilgan" },
    ],
    tableRows: [
      ["Toshkent sh. filiali", "v3.0", "84", "89/100", "93%", "5%", "ok", "Past"],
      ["Samarqand filiali", "v3.0", "71", "82/100", "84%", "12%", "warn", "O‘rta"],
      ["Buxoro filiali", "v3.0", "66", "77/100", "79%", "16%", "warn", "O‘rta"],
      ["Farg‘ona filiali", "v3.0", "62", "72/100", "74%", "22%", "bad", "Yuqori"],
    ],
    bars: [
      { label: "Toshkent sh.", value: 93 },
      { label: "Namangan", value: 89 },
      { label: "Samarqand", value: 84 },
      { label: "Buxoro", value: 79 },
      { label: "Farg‘ona", value: 74 },
    ],
    linePoints: "40,218 160,198 280,178 400,165 520,138 640,109 760,88",
    pie: {
      gradient: "conic-gradient(#32ad6b 0 58%, #efc768 58% 86%, #e06a6a 86% 100%)",
      legend: [
        { cls: "ok", text: "Yaxshi filiallar: 58%" },
        { cls: "mid", text: "Barqaror: 28%" },
        { cls: "bad", text: "Qo‘llab-quvvatlash kerak: 14%" },
      ],
    },
    cards: [
      { title: "Toshkent sh. filiali", meta: "84 xodim topshirdi", value: "93%" },
      { title: "Samarqand filiali", meta: "71 xodim topshirdi", value: "84%" },
      { title: "Buxoro filiali", meta: "66 xodim topshirdi", value: "79%" },
      { title: "Farg‘ona filiali", meta: "62 xodim topshirdi", value: "74%" },
    ],
    insightDetails: {
      summary: {
        title: "Filiallar umumiy holati",
        text: "Yuqori natija asosan markaziy va yirik hududiy filiallarda. Ba’zi hududlarda topshirish intizomi sustroq, jadval monitoringini kuchaytirish kerak.",
      },
      risk: {
        title: "Filiallar risk tafsiloti",
        text: "Qayta topshirish ko‘p bo‘lgan filiallarda savol murakkabligi va ichki briefing sifati pastligi kuzatilmoqda.",
      },
      questions: {
        title: "Filiallar savol kesimi",
        text: "Kredit va compliance savollari bo‘yicha hududlar o‘rtasida katta tafovut bor. Murakkab bloklarni modulga ajratish foydali bo‘ladi.",
      },
      staff: {
        title: "Filial xodimlar kesimi",
        text: "Yangi filial xodimlari uchun adaptatsion test yo‘li joriy etilsa, 1-oylik natijalar sezilarli yaxshilanadi.",
      },
    },
  },
  executive: {
    subtitle: "Топ-менежмент учун qisqa KPI dashboard",
    metric: "∑ KPI: 24",
    kpis: [
      { label: "Strategik KPI bajarilishi", value: "87%", note: "+5% chorak bo‘yicha" },
      { label: "Risk darajasi", value: "O‘rta", note: "Nazorat ostida" },
      { label: "Xodimlar qamrovi", value: "91%", note: "Testga jalb qilinganlar" },
      { label: "Regulyator readiness", value: "88%", note: "Auditga tayyorlik" },
    ],
    miniBars: [
      { label: "Biznes blok", value: 89 },
      { label: "Risk va compliance", value: 86 },
      { label: "Operatsion blok", value: 81 },
      { label: "Qo‘llab-quvvatlash blok", value: 77 },
    ],
    insights: [
      "Qisqa muddatli strategik risklar",
      "KPI bajarilishida ortda qolayotgan yo‘nalishlar",
      "Regulyator tekshiruviga tayyorlik indeksi",
      "Qaror qabul qilish uchun prioritet action-lar",
      "Kelgusi oy uchun tavsiya etilgan fokus nuqtalar",
    ],
    leaders: [
      { name: "Biznes blok", score: "89%" },
      { name: "Risk & Compliance", score: "86%" },
      { name: "Operatsion", score: "81%" },
      { name: "IT", score: "79%" },
      { name: "Support", score: "77%" },
    ],
    alerts: [
      { level: "danger", tag: "Kritik", text: "2 ta KPI targetdan >10% orqada qolmoqda" },
      { level: "warn", tag: "Diqqat", text: "3 ta departamentda qayta topshirish oshgan" },
      { level: "info", tag: "Info", text: "Executive view uchun avtomatik weekly report tayyor" },
    ],
    tableRows: [
      ["Strategik KPI blok", "Q2", "24", "87/100", "87%", "10%", "warn", "O‘rta"],
      ["Risk & Compliance", "Q2", "18", "86/100", "86%", "8%", "ok", "Past"],
      ["Operatsion KPI", "Q2", "21", "81/100", "81%", "14%", "warn", "O‘rta"],
      ["Audit readiness", "Q2", "12", "88/100", "88%", "6%", "ok", "Past"],
    ],
    bars: [
      { label: "Biznes", value: 89 },
      { label: "Risk", value: 86 },
      { label: "Operatsion", value: 81 },
      { label: "IT", value: 79 },
      { label: "Support", value: 77 },
    ],
    linePoints: "40,230 160,212 280,186 400,160 520,146 640,118 760,96",
    pie: {
      gradient: "conic-gradient(#2ea866 0 64%, #eec769 64% 85%, #e06c6c 85% 100%)",
      legend: [
        { cls: "ok", text: "Targetga mos: 64%" },
        { cls: "mid", text: "Kuzatuvda: 21%" },
        { cls: "bad", text: "Intervensiya kerak: 15%" },
      ],
    },
    cards: [
      { title: "Strategik KPI", meta: "24 ko‘rsatkich", value: "87%" },
      { title: "Risk & Compliance", meta: "18 ko‘rsatkich", value: "86%" },
      { title: "Operatsion KPI", meta: "21 ko‘rsatkich", value: "81%" },
      { title: "Audit readiness", meta: "12 ko‘rsatkich", value: "88%" },
    ],
    insightDetails: {
      summary: {
        title: "Executive umumiy holat",
        text: "Asosiy KPI lar bo‘yicha ijobiy trend mavjud. Risk profili boshqariladigan darajada, ammo 2 ta yo‘nalishda tezkor qo‘shimcha choralar kerak.",
      },
      risk: {
        title: "Executive risk tafsiloti",
        text: "Strategik KPI blokida ikki indikator targetdan ortda. Resurslarni qayta taqsimlash va haftalik nazorat uchrashuvi tavsiya etiladi.",
      },
      questions: {
        title: "Executive savollar analizi",
        text: "Murakkab savollar asosan risk-regulation mavzusida. Qaror qabul qiluvchi guruhlar uchun qisqa briefing formatini kuchaytirish kerak.",
      },
      staff: {
        title: "Executive xodimlar kesimi",
        text: "Rahbarlar darajasida qamrov yuqori, lekin o‘rta bo‘g‘in rahbarlarda bir xil natija yo‘q. Mentorlik asosida targetli trening tavsiya qilinadi.",
      },
    },
  },
};

function applyAllBehavior(checkboxes, changedCheckbox) {
  const all = checkboxes.find((c) => c.value === '__all');
  const specifics = checkboxes.filter((c) => c.value !== '__all');
  if (!all) return;

  if (changedCheckbox && changedCheckbox.value === '__all') {
    specifics.forEach((c) => {
      c.checked = changedCheckbox.checked;
    });
    return;
  }

  const allSpecificChecked = specifics.length > 0 && specifics.every((c) => c.checked);
  all.checked = allSpecificChecked;
}

function ensureAllCheckedMeansSelectAll(checkboxes) {
  const all = checkboxes.find((c) => c.value === '__all');
  if (!all || !all.checked) return;
  checkboxes
    .filter((c) => c.value !== '__all')
    .forEach((c) => {
      c.checked = true;
    });
}

function syncBodyScroll() {
  const isAnyModalOpen =
    docModal?.classList.contains('show') ||
    createModal?.classList.contains('show') ||
    dashboardModal?.classList.contains('show') ||
    dashboardDrillModal?.classList.contains('show');
  document.body.style.overflow = isAnyModalOpen ? 'hidden' : '';
}

function openModal(row) {
  const ref = row.children[0]?.textContent.trim() || 'DOC-000';
  const title = row.querySelector('td:nth-child(2) strong')?.textContent.trim() || 'Документ';
  const org = row.children[3]?.textContent.trim() || '—';
  const date = row.children[4]?.textContent.trim() || '—';
  const stage = row.children[7]?.textContent.trim() || '—';
  const relationType = row.children[6]?.textContent.trim() || '';

  modalDocId.textContent = ref;
  modalDocRef.textContent = ref;
  if (modalDocRefBottom) modalDocRefBottom.textContent = ref;
  modalDocTitle.textContent = title;
  modalOrg.textContent = org;
  modalStage.textContent = stage;
  modalDate.textContent = date === '—' ? '2026-04-17' : date;
  modalSummary.textContent = relationType
    ? `${title} bo'yicha topshiriq (${relationType}) ijrosi uchun javob tayyorlash.`
    : `${title} bo'yicha topshiriq ijrosi uchun javob tayyorlash.`;

  docModal.classList.add('show');
  docModal.setAttribute('aria-hidden', 'false');
  syncBodyScroll();
}

function closeModal() {
  docModal.classList.remove('show');
  docModal.setAttribute('aria-hidden', 'true');
  syncBodyScroll();
}

function openCreateModal() {
  resetTestBuilder();
  createModal?.classList.add('show');
  createModal?.setAttribute('aria-hidden', 'false');
  syncBodyScroll();
}

function closeCreateModal() {
  createModal?.classList.remove('show');
  createModal?.setAttribute('aria-hidden', 'true');
  syncBodyScroll();
}

function openDashboardModal() {
  closeRoleSwitcher();
  dashboardModal?.classList.add('show');
  dashboardModal?.setAttribute('aria-hidden', 'false');
  initDashboardDocFilters();
  ensureAllCheckedMeansSelectAll(dashRuleTypeCheckboxes);
  syncRuleTypeFilterSelect();
  updateRuleTypeTriggerText();
  ensureAllCheckedMeansSelectAll(dashDocNameCheckboxes);
  syncDocNameFilterSelect();
  updateDocNameTriggerText();
  ensureAllCheckedMeansSelectAll(dashVersionCheckboxes);
  syncVersionFilterSelect();
  updateVersionTriggerText();
  applyDashboardDocFilters();
  syncBodyScroll();
}

function closeDashboardModal() {
  dashboardModal?.classList.remove('show');
  dashboardModal?.setAttribute('aria-hidden', 'true');
  syncBodyScroll();
}

function openRoleSwitcher() {
  roleSwitcher?.classList.add('open');
  roleSwitcherMenu?.removeAttribute('hidden');
  roleSwitcherBtn?.setAttribute('aria-expanded', 'true');
}

function closeRoleSwitcher() {
  roleSwitcher?.classList.remove('open');
  roleSwitcherMenu?.setAttribute('hidden', '');
  roleSwitcherBtn?.setAttribute('aria-expanded', 'false');
}

function toggleRoleSwitcher() {
  if (roleSwitcher?.classList.contains('open')) {
    closeRoleSwitcher();
    return;
  }
  openRoleSwitcher();
}

function setActiveRole(role) {
  if (roleSwitcherBtn) {
    roleSwitcherBtn.textContent = role;
  }

  roleSwitcherOptions.forEach((option) => {
    const isActive = option.getAttribute('data-role') === role;
    option.classList.toggle('active', isActive);
    option.setAttribute('aria-pressed', String(isActive));
  });
}

function getCurrentPageName() {
  const path = window.location.pathname || '';
  const pieces = path.split('/').filter(Boolean);
  return pieces[pieces.length - 1] || 'index.html';
}

function persistRole(role) {
  try {
    localStorage.setItem(ROLE_STORAGE_KEY, role);
  } catch {
    // ignore storage unavailability
  }
}

function getPersistedRole() {
  try {
    return localStorage.getItem(ROLE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function redirectByRole(role) {
  const page = getCurrentPageName();
  if (role === 'Kanselyariya' && page !== KANSELYARIYA_PAGE) {
    window.location.href = KANSELYARIYA_PATH;
    return true;
  }
  if (page === KANSELYARIYA_PAGE && role !== 'Kanselyariya') {
    window.location.href = 'index.html';
    return true;
  }
  return false;
}

function setDashboardView(view) {
  const titles = {
    overview: 'УПРАВЛЕНЧЕСКИЙ ОТЧЁТ — TEST ANALYTICS',
    table: 'УПРАВЛЕНЧЕСКИЙ ОТЧЁТ — ТАБЛИЦА',
    bar: 'УПРАВЛЕНЧЕСКИЙ ОТЧЁТ — ГИСТОГРАММА',
    line: 'УПРАВЛЕНЧЕСКИЙ ОТЧЁТ — ЛИНЕЙНЫЙ',
    pie: 'УПРАВЛЕНЧЕСКИЙ ОТЧЁТ — КРУГОВАЯ',
    cards: 'УПРАВЛЕНЧЕСКИЙ ОТЧЁТ — КАРТОЧКИ',
  };

  dashViewButtons.forEach((btn) => {
    const isActive = btn.getAttribute('data-view') === view;
    btn.classList.toggle('active', isActive);
  });

  dashViewPanels.forEach((panel) => {
    const isVisible = panel.getAttribute('data-view-panel') === view;
    panel.classList.toggle('hidden', !isVisible);
  });

  if (dashboardViewTitle) {
    dashboardViewTitle.textContent = titles[view] || titles.overview;
  }
}

function resolveMetricTone(title) {
  const t = (title || '').toLowerCase();
  if (t.includes('jami xodim')) return { tone: 'total', chip: "Qamrov" };
  if (t.includes('test topshirgan')) return { tone: 'submitted', chip: "Faollik" };
  if (t.includes("o'tgan")) return { tone: 'passed', chip: "Natija" };
  if (t.includes('yeqilgan') || t.includes('yiqilgan')) return { tone: 'failed', chip: "Risk" };
  if (t.includes('jami test')) return { tone: 'tests', chip: "Hajm" };
  if (t.includes('qiyin savollar')) return { tone: 'difficulty', chip: "Murakkablik" };
  return { tone: 'default', chip: "Ko'rsatkich" };
}

function getCardKeyFromTitle(title) {
  const t = normalizeFilterValue(title);
  if (t.includes('jami xodim')) return 'totalEmployees';
  if (t.includes('test topshirgan')) return 'submittedEmployees';
  if (t.includes("otgan")) return 'passedEmployees';
  if (t.includes('yeqilgan') || t.includes('yiqilgan')) return 'failedEmployees';
  if (t.includes('jami test')) return 'totalTests';
  if (t.includes('qiyin savollar')) return 'hardQuestions';
  return 'unknown';
}

function buildMetricCardHTML(card) {
  const { tone, chip } = resolveMetricTone(card.title);
  const key = card.key || getCardKeyFromTitle(card.title);
  return `<article class="metric-card metric-${tone}" data-card-key="${key}" role="button" tabindex="0">
    <span class="metric-chip">${chip}</span>
    <h6>${card.title}</h6>
    <p>${card.meta}</p>
  <b class="metric-value">${card.value}</b>
  </article>`;
}

function parseNumeric(text) {
  const cleaned = String(text || '').replace(/[^0-9.]/g, '');
  return Number(cleaned || 0);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function normalizeFilterValue(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/['’ʼ`]/g, '')
    .replace(/[^a-z0-9а-яёўқғҳ]+/giu, ' ')
    .trim();
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function weightedAverage(items, valueKey, weightKey) {
  const totalWeight = items.reduce((sum, item) => sum + Number(item[weightKey] || 0), 0);
  if (!totalWeight) return 0;
  const total = items.reduce(
    (sum, item) => sum + Number(item[valueKey] || 0) * Number(item[weightKey] || 0),
    0,
  );
  return total / totalWeight;
}

function roundNumber(value) {
  return Math.round(Number(value) || 0);
}

function getRiskMeta(passRate) {
  if (passRate >= 85) return { cls: 'ok', label: 'Past' };
  if (passRate >= 75) return { cls: 'warn', label: "O‘rta" };
  return { cls: 'bad', label: 'Yuqori' };
}

function getSelectedValues(selectElement) {
  return selectElement
    ? Array.from(selectElement.selectedOptions)
        .map((option) => option.value.trim())
        .filter(Boolean)
    : [];
}

function matchesOptionalSelection(value, selectedValues) {
  if (!selectedValues.length) return true;
  const normalizedValue = normalizeFilterValue(value);
  return selectedValues.some((item) => normalizeFilterValue(item) === normalizedValue);
}

function getActiveDashboardPeriodLimit() {
  const active = dashPeriodButtons.find((button) => button.classList.contains('active'));
  const label = normalizeFilterValue(active?.textContent || '');
  if (label.includes('1 день')) return 1;
  if (label.includes('1 неделя')) return 7;
  if (label.includes('1 месяц')) return 30;
  if (label.includes('1 год')) return 365;
  return 90;
}

function getActiveDashboardSegmentKey() {
  const active = dashSegmentButtons.find((button) => button.classList.contains('active'));
  const label = normalizeFilterValue(active?.textContent || '');
  return label.includes('территориально') ? 'region' : 'department';
}

function getDashboardRecords(type = currentDashboardType) {
  return (DASHBOARD_ANALYTICS[type] || []).map((record) => ({ ...record }));
}

function buildTestQuestionBank(record, testIndex) {
  const totalQuestions = clamp(16 + (testIndex % 5) * 3, 12, 30);
  return Array.from({ length: 8 }, (_, idx) => {
    const number = idx + 1;
    const hard = number % 3 === 0 || number === 7;
    const options = [
      `${record.name}: asosiy tushuncha`,
      `${record.name}: amaliy holat`,
      `${record.name}: me'yoriy talab`,
      `${record.name}: javobgarlik tartibi`,
    ];
    const correctIndex = (idx + testIndex) % options.length;
    return {
      id: `${record.name}-${number}`,
      text: `${number}-savol. ${record.name} bo‘yicha nazorat savoli`,
      options,
      correctAnswer: `ABCD`.charAt(correctIndex),
      hard,
      wrongRate: clamp(record.retryRate + (hard ? 12 : 4) + (idx % 4) * 3, 6, 92),
      totalQuestions,
    };
  });
}

function buildDrillContext(records) {
  const firstNames = ['Aziza', 'Bekzod', 'Diyor', 'Malika', 'Sardor', 'Kamola', 'Jahongir', 'Sitora', 'Farrux', 'Nigina'];
  const lastNames = ['Karimov', 'Rasulov', 'Yuldashev', 'Saidova', 'Kadirov', 'Ismoilova', 'Tursunov', 'Nazarova'];
  const middleNames = ['Anvar o‘g‘li', 'Botir o‘g‘li', 'Shuhrat qizi', 'Alisher qizi', 'Umar o‘g‘li', 'Zafar qizi'];
  const roles = ['Kanselyariya', 'Rahbar-yordamchi', 'Rahbar', 'Yurist-yordamchi', 'Yurist-rahbar', 'Ijrochi'];
  const tests = records.map((record, idx) => ({
    topic: record.name,
    version: record.version,
    totalQuestions: clamp(16 + (idx % 5) * 3, 12, 30),
    questions: buildTestQuestionBank(record, idx),
  }));

  const employees = [];
  let globalIndex = 0;
  records.forEach((record, recordIndex) => {
    const test = tests[recordIndex];
    const passCount = roundNumber((record.submitted * record.passRate) / 100);
    const submittedCount = record.submitted;
    for (let i = 0; i < record.employeeCount; i += 1) {
      const idx = globalIndex + i;
      const fullName = `${lastNames[idx % lastNames.length]} ${firstNames[idx % firstNames.length]} ${middleNames[idx % middleNames.length]}`;
      const role = roles[idx % roles.length];
      const department = record.department;
      const submitted = i < submittedCount;
      const passed = submitted && i < passCount;
      let attempt = null;
      if (submitted) {
        const shift = randomInt(-3, 3);
        const baseCorrect = roundNumber((test.totalQuestions * record.avgScore) / 100);
        const threshold = roundNumber(test.totalQuestions * 0.7);
        let correctAnswers = clamp(baseCorrect + shift, 0, test.totalQuestions);
        if (passed) correctAnswers = Math.max(correctAnswers, threshold);
        if (!passed) correctAnswers = Math.min(correctAnswers, threshold - 1);
        attempt = {
          topic: test.topic,
          version: test.version,
          result: `${correctAnswers}/${test.totalQuestions}`,
          passed,
        };
      }
      employees.push({
        fullName,
        role,
        department,
        attempt,
      });
    }
    globalIndex += record.employeeCount;
  });

  return { employees, tests };
}

function mutateDashboardAnalytics() {
  const types = Object.keys(DASHBOARD_ANALYTICS);
  types.forEach((type) => {
    const records = DASHBOARD_ANALYTICS[type];
    const baseRecords = DASHBOARD_ANALYTICS_BASE[type] || [];
    records.forEach((record, idx) => {
      const base = baseRecords[idx] || record;
      const submittedMin = Math.max(0, Math.round(base.employeeCount * 0.45));
      record.submitted = clamp(base.submitted + randomInt(-10, 10), submittedMin, base.employeeCount);
      record.avgScore = clamp(base.avgScore + randomInt(-3, 3), 55, 99);
      record.passRate = clamp(base.passRate + randomInt(-4, 4), 50, 99);
      record.retryRate = clamp(base.retryRate + randomInt(-3, 3), 1, 40);
      record.updatedDaysAgo = clamp(base.updatedDaysAgo + randomInt(-2, 2), 0, 365);
    });
  });
}

function pulseDashboardUpdate() {
  const dashMain = document.querySelector('.dashboard-main');
  if (!dashMain) return;
  dashMain.classList.remove('live-update-pulse');
  void dashMain.offsetWidth;
  dashMain.classList.add('live-update-pulse');
}

function refreshDashboardLiveData() {
  dashboardRefreshTick += 1;
  mutateDashboardAnalytics();
  applyDashboardDocFilters();
  pulseDashboardUpdate();
}

function startDashboardAutoRefresh() {
  if (!dashboardTypeSelect) return;
  if (dashboardAutoRefreshTimer) {
    clearInterval(dashboardAutoRefreshTimer);
  }
  dashboardAutoRefreshTimer = setInterval(() => {
    refreshDashboardLiveData();
  }, DASHBOARD_REFRESH_MS);
}

function getDashboardDocsMeta(type = currentDashboardType) {
  const records = getDashboardRecords(type);
  if (!records.length) return DEFAULT_DASHBOARD_DOCS;

  const docsMap = new Map();
  records.forEach((record) => {
    const key = `${record.name}__${record.ruleType}`;
    if (!docsMap.has(key)) {
      docsMap.set(key, { name: record.name, ruleType: record.ruleType, versions: new Set() });
    }
    docsMap.get(key)?.versions.add(record.version);
  });

  return Array.from(docsMap.values()).map((doc) => ({
    name: doc.name,
    ruleType: doc.ruleType,
    versions: Array.from(doc.versions).sort((a, b) => b.localeCompare(a, undefined, { numeric: true })),
  }));
}

function getFilteredDashboardRecords(type = currentDashboardType) {
  const records = getDashboardRecords(type);
  const selectedRuleTypes = getSelectedValues(dashRuleTypeFilter);
  const selectedDocNames = getSelectedValues(dashDocNameFilter);
  const selectedVersions = getSelectedValues(dashVersionFilter);
  const selectedRegion = bankRegionFilter?.value || '';
  const selectedBranchType = bankBranchTypeFilter?.value || '';
  const selectedDepartment = bankDepartmentFilter?.value || '';
  const headOfficeOnly = Boolean(headOfficeOnlyFilter?.checked);
  const periodLimit = getActiveDashboardPeriodLimit();

  return records.filter((record) => {
    if (!matchesOptionalSelection(record.ruleType, selectedRuleTypes)) return false;
    if (!matchesOptionalSelection(record.name, selectedDocNames)) return false;
    if (!matchesOptionalSelection(record.version, selectedVersions)) return false;
    if (selectedRegion && !normalizeFilterValue(selectedRegion).startsWith('все') && normalizeFilterValue(record.region) !== normalizeFilterValue(selectedRegion)) {
      return false;
    }
    if (selectedBranchType && !normalizeFilterValue(selectedBranchType).startsWith('все') && normalizeFilterValue(record.branchType) !== normalizeFilterValue(selectedBranchType)) {
      return false;
    }
    if (selectedDepartment && !normalizeFilterValue(selectedDepartment).startsWith('все') && normalizeFilterValue(record.department) !== normalizeFilterValue(selectedDepartment)) {
      return false;
    }
    if (headOfficeOnly && !record.headOffice) return false;
    if (Number(record.updatedDaysAgo) > periodLimit) return false;
    return true;
  });
}

function buildDashboardCards(records) {
  const totalEmployees = records.reduce((sum, record) => sum + record.employeeCount, 0);
  const totalSubmitted = records.reduce((sum, record) => sum + record.submitted, 0);
  const totalPassed = records.reduce(
    (sum, record) => sum + roundNumber((record.submitted * record.passRate) / 100),
    0,
  );
  const totalFailed = Math.max(totalSubmitted - totalPassed, 0);
  const averageScore = roundNumber(weightedAverage(records, 'avgScore', 'submitted'));
  const averageDifficulty = roundNumber(
    average(records.map((record) => record.retryRate + Math.max(0, 100 - record.passRate) / 2)),
  );

  return [
    { key: 'totalEmployees', title: 'Jami xodimlar', meta: `${records.length} ta hujjat kesimida`, value: `${totalEmployees}` },
    { key: 'submittedEmployees', title: 'Test topshirganlar', meta: 'Faol ishtirokchilar', value: `${totalSubmitted}` },
    { key: 'passedEmployees', title: "O'tganlar", meta: 'Muvaffaqiyatli topshirganlar', value: `${totalPassed}` },
    { key: 'failedEmployees', title: 'Yeqilganlar', meta: 'Qayta topshirish kerak', value: `${totalFailed}` },
    { key: 'totalTests', title: 'Jami testlar', meta: 'Filtrlangan hujjatlar soni', value: `${records.length}` },
    { key: 'hardQuestions', title: 'Qiyin savollar ulushi', meta: "Retry va xato ulushi asosida", value: `${averageDifficulty}%` },
  ];
}

function buildDashboardTableRows(records) {
  return records.map((record) => {
    const risk = getRiskMeta(record.passRate);
    return [
      record.name,
      record.version,
      `${record.submitted}`,
      `${record.avgScore}/100`,
      `${record.passRate}%`,
      `${record.retryRate}%`,
      risk.cls,
      risk.label,
    ];
  });
}

function buildDashboardMiniBars(records) {
  return records
    .slice()
    .sort((a, b) => b.passRate - a.passRate)
    .map((record) => ({
      label: `${record.name} ${record.version}`,
      value: record.passRate,
    }));
}

function buildDashboardGroups(records, key) {
  const grouped = new Map();
  records.forEach((record) => {
    const groupKey = record[key];
    if (!grouped.has(groupKey)) {
      grouped.set(groupKey, { label: groupKey, submitted: 0, passed: 0 });
    }
    const group = grouped.get(groupKey);
    if (!group) return;
    group.submitted += record.submitted;
    group.passed += roundNumber((record.submitted * record.passRate) / 100);
  });

  return Array.from(grouped.values())
    .map((group) => ({
      label: group.label,
      value: group.submitted ? roundNumber((group.passed / group.submitted) * 100) : 0,
    }))
    .sort((a, b) => b.value - a.value);
}

function buildDashboardLinePoints(records) {
  const buckets = [0, 0, 0, 0, 0, 0, 0];
  records.forEach((record) => {
    const days = Number(record.updatedDaysAgo || 0);
    const index = days <= 1 ? 0 : days <= 7 ? 1 : days <= 14 ? 2 : days <= 30 ? 3 : days <= 60 ? 4 : days <= 120 ? 5 : 6;
    buckets[index] += record.submitted;
  });

  const maxValue = Math.max(...buckets, 1);
  const minY = 50;
  const maxY = 220;
  const xPoints = [40, 160, 280, 400, 520, 640, 760];
  return buckets
    .map((value, idx) => {
      const ratio = value / maxValue;
      const y = roundNumber(maxY - ratio * (maxY - minY));
      return `${xPoints[idx]},${y}`;
    })
    .join(' ');
}

function buildDashboardPie(records) {
  const totalEmployees = records.reduce((sum, record) => sum + record.employeeCount, 0);
  const passed = records.reduce(
    (sum, record) => sum + roundNumber((record.submitted * record.passRate) / 100),
    0,
  );
  const retry = records.reduce(
    (sum, record) => sum + roundNumber((record.submitted * record.retryRate) / 100),
    0,
  );
  const notSubmitted = Math.max(totalEmployees - records.reduce((sum, record) => sum + record.submitted, 0), 0);
  const totalBase = Math.max(totalEmployees, passed + retry + notSubmitted, 1);
  const passedPct = roundNumber((passed / totalBase) * 100);
  const retryPct = roundNumber((retry / totalBase) * 100);
  const remainingPct = Math.max(100 - passedPct - retryPct, 0);

  return {
    gradient: `conic-gradient(#37af71 0 ${passedPct}%, #f2c35f ${passedPct}% ${passedPct + retryPct}%, #ea6b6b ${passedPct + retryPct}% 100%)`,
    legend: [
      { cls: 'ok', text: `Muvaffaqiyatli: ${passedPct}%` },
      { cls: 'mid', text: `Qayta topshirgan: ${retryPct}%` },
      { cls: 'bad', text: `Topshirmagan: ${remainingPct}%` },
    ],
  };
}

function buildDashboardAlerts(records, groups, segmentKey) {
  if (!records.length) {
    return [
      { level: 'warn', tag: 'Diqqat', text: "Tanlangan filtrlar bo‘yicha ma'lumot topilmadi" },
      { level: 'info', tag: 'Info', text: 'Filterlarni yumshatib qayta urinib ko‘ring' },
      { level: 'info', tag: 'Info', text: 'Ko‘rsatkichlar mavjud hujjatlar asosida hisoblanadi' },
    ];
  }

  const weakest = records.slice().sort((a, b) => a.passRate - b.passRate)[0];
  const mostRetry = records.slice().sort((a, b) => b.retryRate - a.retryRate)[0];
  const bestGroup = groups[0];
  const groupLabel = segmentKey === 'region' ? 'hudud' : "bo‘lim";

  return [
    {
      level: weakest.passRate < 75 ? 'danger' : 'warn',
      tag: weakest.passRate < 75 ? 'Kritik' : 'Diqqat',
      text: `${weakest.name} ${weakest.version} bo‘yicha o‘tish darajasi ${weakest.passRate}%`,
    },
    {
      level: mostRetry.retryRate > 18 ? 'warn' : 'info',
      tag: mostRetry.retryRate > 18 ? 'Diqqat' : 'Info',
      text: `${mostRetry.name} da qayta topshirish ulushi ${mostRetry.retryRate}%`,
    },
    {
      level: 'info',
      tag: 'Info',
      text: bestGroup ? `Eng yaxshi ${groupLabel}: ${bestGroup.label} (${bestGroup.value}%)` : `Tanlangan ${groupLabel} bo‘yicha data yetarli emas`,
    },
  ];
}

function buildDashboardInsights(records, groups) {
  if (!records.length) {
    return {
      summary: { title: "Umumiy holat bo‘yicha tafsilot", text: "Tanlangan filtrlar bo‘yicha hozircha ma'lumot topilmadi." },
      risk: { title: "Risk signal bo‘yicha tafsilot", text: "Risk tahlili uchun mos yozuv yo‘q. Filterlarni yumshatib ko‘ring." },
      questions: { title: "Savollar analizi bo‘yicha tafsilot", text: "Savollar kesimida tahlil ko‘rsatish uchun kamida bitta hujjat qolishi kerak." },
      staff: { title: "Xodimlar kesimi bo‘yicha tafsilot", text: "Xodimlar segmenti bo‘yicha natijalar tanlangan filtrlar bilan topilmadi." },
    };
  }

  const avgPass = roundNumber(average(records.map((record) => record.passRate)));
  const avgRetry = roundNumber(average(records.map((record) => record.retryRate)));
  const weakest = records.slice().sort((a, b) => a.passRate - b.passRate)[0];
  const strongest = groups[0];

  return {
    summary: {
      title: "Umumiy holat bo‘yicha tafsilot",
      text: `${records.length} ta hujjat bo‘yicha o‘rtacha o‘tish darajasi ${avgPass}% ni tashkil etdi. Eng yaxshi natija ${strongest?.label || 'mavjud emas'} segmentida kuzatildi.`,
    },
    risk: {
      title: "Risk signal bo‘yicha tafsilot",
      text: `${weakest.name} ${weakest.version} eng past natijani ko‘rsatdi: ${weakest.passRate}%. Qayta topshirish ulushi o‘rtacha ${avgRetry}% ni tashkil qilmoqda.`,
    },
    questions: {
      title: "Savollar analizi bo‘yicha tafsilot",
      text: `Murakkablik indikatori o‘rtacha ${roundNumber(avgRetry + (100 - avgPass) / 2)}% ga teng. Eng ko‘p qayta ishlash talab qilgan hujjatlar prioritetga chiqarildi.`,
    },
    staff: {
      title: "Xodimlar kesimi bo‘yicha tafsilot",
      text: `Filtrlangan kesimda xodimlar faolligi ${records.reduce((sum, record) => sum + record.submitted, 0)} ta topshirish bilan qayd etildi. Segmentlar bo‘yicha eng kuchli natija ${strongest?.label || 'aniqlanmadi'}da.`,
    },
  };
}

function getDashboardMetricText(type, records) {
  if (type === 'compliance') return `∑ Проверок: ${records.length}`;
  if (type === 'performance') return `∑ Филиалов: ${new Set(records.map((record) => record.region)).size}`;
  if (type === 'executive') return `∑ Отчётов: ${records.length}`;
  return `∑ Тестов: ${records.reduce((sum, record) => sum + record.submitted, 0)}`;
}

function updateOverviewPassPie(summary) {
  const submittedCard = summary.cards.find((c) => c.title.toLowerCase().includes('test topshirgan'));
  const passedCard = summary.cards.find((c) => c.title.toLowerCase().includes("o'tgan"));
  const submitted = parseNumeric(submittedCard?.value);
  const passed = parseNumeric(passedCard?.value);

  let percent = submitted > 0 ? Math.round((passed / submitted) * 100) : 0;
  if (!Number.isFinite(percent) || percent < 0) percent = 0;
  if (percent > 100) percent = 100;
  const failed = Math.max(submitted - passed, 0);

  if (overviewPassRateValue) overviewPassRateValue.textContent = `${percent}%`;
  if (overviewPassCount) overviewPassCount.textContent = `${passed}`;
  if (overviewFailCount) overviewFailCount.textContent = `${failed}`;
  if (overviewPassPieDonut) {
    overviewPassPieDonut.style.background = `conic-gradient(#2ea866 0 ${percent}%, #e6edf7 ${percent}% 100%)`;
  }
}

function renderDashboardPreset(type) {
  const preset = DASHBOARD_PRESETS[type] || DASHBOARD_PRESETS.test;
  const records = getFilteredDashboardRecords(type);
  const segmentKey = getActiveDashboardSegmentKey();
  const groups = buildDashboardGroups(records, segmentKey);
  const summary = {
    subtitle: preset.subtitle,
    metric: getDashboardMetricText(type, records),
    cards: buildDashboardCards(records),
    miniBars: buildDashboardMiniBars(records),
    tableRows: buildDashboardTableRows(records),
    bars: groups.slice(0, 5),
    leaders: groups.slice(0, 5).map((group) => ({ name: group.label, score: `${group.value}%` })),
    linePoints: buildDashboardLinePoints(records),
    pie: buildDashboardPie(records),
    alerts: buildDashboardAlerts(records, groups, segmentKey),
  };
  latestDashboardInsights = buildDashboardInsights(records, groups);

  if (dashboardSubTitle) dashboardSubTitle.textContent = summary.subtitle;
  if (metricTotal) metricTotal.textContent = summary.metric;

  kpiCards.forEach((card, idx) => {
    const kpi = summary.cards[idx];
    if (!kpi) return;
    const label = card.querySelector('.kpi-label');
    const value = card.querySelector('.kpi-value');
    const note = card.querySelector('.kpi-note');
    if (label) label.textContent = kpi.title;
    if (value) value.textContent = kpi.value;
    if (note) note.textContent = kpi.meta;
  });

  if (miniBarsContainer) {
    miniBarsContainer.innerHTML = summary.miniBars.length
      ? summary.miniBars
      .map(
        (row) =>
          `<div><span>${row.label}</span><i style="width:${row.value}%"></i><b>${row.value}%</b></div>`,
      )
      .join('')
      : '<div><span>Ma\'lumot yo‘q</span><i style="width:0%"></i><b>0%</b></div>';
  }

  if (leaderList) {
    leaderList.innerHTML = summary.leaders.length
      ? summary.leaders
      .map(
        (item, idx) =>
          `<div><strong>${idx + 1}.</strong><span>${item.name}</span><b>${item.score}</b></div>`,
      )
      .join('')
      : '<div><strong>0.</strong><span>Ma\'lumot yo‘q</span><b>0%</b></div>';
  }

  if (alertList) {
    alertList.innerHTML = summary.alerts
      .map((item) => `<article class="alert ${item.level}"><span>${item.tag}</span>${item.text}</article>`)
      .join('');
  }

  if (analyticsTableBody) {
    analyticsTableBody.innerHTML = summary.tableRows.length
      ? summary.tableRows
      .map(
        (row) =>
          `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td><td><span class="status ${row[6]}">${row[7]}</span></td></tr>`,
      )
      .join('')
      : '<tr><td colspan="7">Tanlangan filtrlar bo‘yicha ma\'lumot topilmadi</td></tr>';
  }

  if (barChartContainer) {
    barChartContainer.innerHTML = summary.bars.length
      ? summary.bars
      .map((row) => `<div><span>${row.label}</span><i style="width:${row.value}%"></i><b>${row.value}%</b></div>`)
      .join('')
      : '<div><span>Ma\'lumot yo‘q</span><i style="width:0%"></i><b>0%</b></div>';
  }

  if (lineChartPolyline) {
    lineChartPolyline.setAttribute('points', summary.linePoints);
  }
  if (lineChartPoints) {
    lineChartPoints.innerHTML = summary.linePoints
      .split(' ')
      .map((point) => {
        const [cx, cy] = point.split(',');
        return `<circle cx="${cx}" cy="${cy}" r="5"></circle>`;
      })
      .join('');
  }

  if (pieDonut) {
    pieDonut.style.background = summary.pie.gradient;
  }
  if (pieLegend) {
    pieLegend.innerHTML = summary.pie.legend
      .map((item) => `<li><i class="${item.cls}"></i>${item.text}</li>`)
      .join('');
  }

  if (docCardsGrid) {
    docCardsGrid.innerHTML = summary.cards
      .map((card) => buildMetricCardHTML(card))
      .join('');
  }

  if (overviewCardsGrid) {
    overviewCardsGrid.innerHTML = summary.cards
      .map((card) => buildMetricCardHTML(card))
      .join('');
  }
  updateOverviewPassPie(summary);
  if (testOverviewCardsSection) {
    testOverviewCardsSection.classList.toggle('hidden', type !== 'test');
  }
  if (overviewPassPieSection) {
    overviewPassPieSection.classList.toggle('hidden', type !== 'test');
  }
}

function setInsightDetail(type) {
  currentInsightType = type;
  const details =
    latestDashboardInsights ||
    (DASHBOARD_PRESETS[currentDashboardType] || DASHBOARD_PRESETS.test).insightDetails ||
    DASHBOARD_PRESETS.test.insightDetails;
  const selected = details[type] || details.summary;
  if (insightDetailTitle) insightDetailTitle.textContent = selected.title;
  if (insightDetailText) insightDetailText.textContent = selected.text;
  if (insightDetailText) insightDetailText.classList.remove('hidden');
  if (insightDetailContent) {
    insightDetailContent.classList.add('hidden');
    insightDetailContent.innerHTML = '';
  }
  closeDashboardDrillModal();
  activeDrillCardKey = null;
  drillTopicMode = null;
  latestDrillContext = null;
}

function openDashboardDrillModal() {
  dashboardDrillModal?.classList.add('show');
  dashboardDrillModal?.setAttribute('aria-hidden', 'false');
  syncBodyScroll();
}

function closeDashboardDrillModal() {
  dashboardDrillModal?.classList.remove('show');
  dashboardDrillModal?.setAttribute('aria-hidden', 'true');
  document
    .querySelector('.dashboard-drill-window')
    ?.classList.remove(
      'accent-totalEmployees',
      'accent-submittedEmployees',
      'accent-passedEmployees',
      'accent-failedEmployees',
      'accent-totalTests',
      'accent-hardQuestions',
    );
  syncBodyScroll();
  activeDrillCardKey = null;
  drillTopicMode = null;
}

function setDrillModalAccent(cardKey) {
  const win = document.querySelector('.dashboard-drill-window');
  if (!win) return;
  win.classList.remove(
    'accent-totalEmployees',
    'accent-submittedEmployees',
    'accent-passedEmployees',
    'accent-failedEmployees',
    'accent-totalTests',
    'accent-hardQuestions',
  );
  win.classList.add(`accent-${cardKey}`);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showDrillContent(title, html, subtitle = '') {
  if (dashboardDrillTitle) dashboardDrillTitle.textContent = title;
  if (dashboardDrillSubtitle) {
    dashboardDrillSubtitle.textContent = subtitle;
    dashboardDrillSubtitle.classList.toggle('hidden', !subtitle);
  }
  if (dashboardDrillBody) {
    dashboardDrillBody.innerHTML = html;
  }
  openDashboardDrillModal();
}

function renderEmployeeDrill(title, rows, includeTopic = false, includeResult = false) {
  if (!rows.length) {
    showDrillContent(title, '<div class="drill-toolbar">Tanlangan filtrlar bo‘yicha xodim topilmadi.</div>');
    return;
  }

  const headers = ['№', 'F.I.Sh', 'Rol', "Bo‘lim"];
  if (includeTopic) headers.push('Test mavzusi');
  if (includeResult) headers.push('Natija');

  const bodyRows = rows
    .map((item, idx) => {
      const cols = [
        `<td>${idx + 1}</td>`,
        `<td>${escapeHtml(item.fullName)}</td>`,
        `<td>${escapeHtml(item.role)}</td>`,
        `<td>${escapeHtml(item.department)}</td>`,
      ];
      if (includeTopic) cols.push(`<td>${escapeHtml(item.attempt?.topic || '-')}</td>`);
      if (includeResult) cols.push(`<td>${escapeHtml(item.attempt?.result || '-')}</td>`);
      return `<tr>${cols.join('')}</tr>`;
    })
    .join('');

  showDrillContent(
    title,
    `<div class="drill-toolbar"><span>Jami: ${rows.length} ta xodim</span></div>
     <div class="drill-table-wrap">
       <table class="drill-table">
         <thead><tr>${headers.map((item) => `<th>${item}</th>`).join('')}</tr></thead>
         <tbody>${bodyRows}</tbody>
       </table>
     </div>`,
  );
}

function renderTestTopicsDrill(mode) {
  if (!latestDrillContext?.tests?.length) {
    showDrillContent("Jami testlar", '<div class="drill-toolbar">Filtrlangan kesimda testlar topilmadi.</div>');
    return;
  }

  drillTopicMode = mode;
  const title = mode === 'hardQuestions' ? 'Qiyin savollar ulushi bo‘yicha testlar' : 'Jami testlar ro‘yxati';
  const buttons = latestDrillContext.tests
    .map(
      (test, idx) =>
        `<button class="drill-topic-btn" type="button" data-drill-action="open-topic" data-topic="${escapeHtml(test.topic)}">
          <span class="drill-topic-index">${idx + 1}</span>${escapeHtml(test.topic)}
          <small>${escapeHtml(test.version)} · ${test.totalQuestions} savol</small>
        </button>`,
    )
    .join('');
  showDrillContent(title, `<div class="drill-topic-grid">${buttons}</div>`);
}

function renderTestTopicDetails(topic) {
  const test = latestDrillContext?.tests?.find((item) => item.topic === topic);
  if (!test) return;
  const hardOnly = drillTopicMode === 'hardQuestions';
  const questions = hardOnly ? test.questions.filter((q) => q.hard) : test.questions;
  const subtitle = hardOnly ? 'Faqat qiyin savollar ko‘rsatilmoqda' : 'Savollar, variantlar va to‘g‘ri javoblar';
  const cards = questions
    .map((q) => {
      const options = q.options
        .map((opt, idx) => `<li>${'ABCD'.charAt(idx)}. ${escapeHtml(opt)}</li>`)
        .join('');
      return `<article class="drill-question-card">
        <h6>${escapeHtml(q.text)}</h6>
        <ul class="drill-options">${options}</ul>
        <div class="drill-answer">To‘g‘ri javob: ${q.correctAnswer}${hardOnly ? ` · Noto‘g‘ri javoblar: ${q.wrongRate}%` : ''}</div>
      </article>`;
    })
    .join('');

  showDrillContent(
    `${test.topic} — ${hardOnly ? 'Qiyin savollar' : 'Savollar tafsiloti'}`,
    `<div class="drill-toolbar">
      <span>${questions.length} ta savol</span>
      <button class="drill-back-btn" type="button" data-drill-action="back-topics">Orqaga</button>
    </div>
    <div class="drill-content">${cards || '<div class="drill-toolbar">Qiyin savollar topilmadi.</div>'}</div>`,
    subtitle,
  );
}

function openCardDrillDown(cardKey) {
  const records = getFilteredDashboardRecords(currentDashboardType);
  latestDrillContext = buildDrillContext(records);
  activeDrillCardKey = cardKey;
  setDrillModalAccent(cardKey);

  const employees = latestDrillContext.employees || [];
  if (cardKey === 'totalEmployees') {
    renderEmployeeDrill('Jami xodimlar ro‘yxati', employees);
    return;
  }
  if (cardKey === 'submittedEmployees') {
    renderEmployeeDrill('Test topshirgan xodimlar', employees.filter((item) => item.attempt), true, false);
    return;
  }
  if (cardKey === 'passedEmployees') {
    renderEmployeeDrill('Muvaffaqiyatli o‘tgan xodimlar', employees.filter((item) => item.attempt?.passed), true, true);
    return;
  }
  if (cardKey === 'failedEmployees') {
    renderEmployeeDrill('Yiqilgan xodimlar', employees.filter((item) => item.attempt && !item.attempt.passed), true, true);
    return;
  }
  if (cardKey === 'totalTests') {
    renderTestTopicsDrill('allTests');
    return;
  }
  if (cardKey === 'hardQuestions') {
    renderTestTopicsDrill('hardQuestions');
    return;
  }
}

function initDashboardDocFilters() {
  initDocNameDropdownOptions();
  updateDashboardVersionFilterOptions();
}

function initDocNameDropdownOptions() {
  if (!dashDocNameMenu || !dashDocNameFilter) return;
  const names = new Set();
  getDashboardDocsMeta().forEach((doc) => names.add(doc.name));

  dashDocNameMenu.innerHTML = '';
  dashDocNameFilter.innerHTML = '';

  const allLabel = document.createElement('label');
  allLabel.innerHTML = '<input type="checkbox" value="__all" checked /> Barchasi';
  dashDocNameMenu.appendChild(allLabel);

  Array.from(names).sort().forEach((name) => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" value="${name.replace(/"/g, '&quot;')}" /> ${name}`;
    dashDocNameMenu.appendChild(label);

    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    dashDocNameFilter.appendChild(option);
  });

  dashDocNameCheckboxes = Array.from(
    dashDocNameMenu.querySelectorAll('input[type="checkbox"]'),
  );
  dashDocNameCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      applyAllBehavior(dashDocNameCheckboxes, checkbox);
      syncDocNameFilterSelect();
      updateDocNameTriggerText();
      updateDashboardVersionFilterOptions();
      applyDashboardDocFilters();
    });
  });
}

function getSelectedDocNamesLower() {
  return dashDocNameFilter
    ? Array.from(dashDocNameFilter.selectedOptions).map((o) => o.value.trim().toLowerCase()).filter(Boolean)
    : [];
}

function updateDashboardVersionFilterOptions() {
  if (!dashVersionFilter || !dashVersionMenu) return;
  const prevSelected = new Set(
    Array.from(dashVersionFilter.selectedOptions).map((o) => o.value.trim().toLowerCase()).filter(Boolean),
  );
  const selectedDocNames = getSelectedDocNamesLower();
  const versions = new Set();
  getDashboardDocsMeta().forEach((doc) => {
    const useDoc = !selectedDocNames.length || selectedDocNames.includes(doc.name.toLowerCase());
    if (!useDoc) return;
    doc.versions.forEach((version) => versions.add(version));
  });
  dashVersionMenu.innerHTML = '';
  dashVersionFilter.innerHTML = '';

  const allLabel = document.createElement('label');
  allLabel.innerHTML = '<input type="checkbox" value="__all" /> Barchasi';
  dashVersionMenu.appendChild(allLabel);

  const sortedVersions = Array.from(versions).sort((a, b) =>
    b.localeCompare(a, undefined, { numeric: true }),
  );
  sortedVersions.forEach((version) => {
    const label = document.createElement('label');
    const checked = prevSelected.has(version.toLowerCase()) ? 'checked' : '';
    label.innerHTML = `<input type="checkbox" value="${version}" ${checked} /> ${version}`;
    dashVersionMenu.appendChild(label);

    const option = document.createElement('option');
    option.value = version;
    option.textContent = version;
    option.selected = prevSelected.has(version.toLowerCase());
    dashVersionFilter.appendChild(option);
  });

  dashVersionCheckboxes = Array.from(
    dashVersionMenu.querySelectorAll('input[type="checkbox"]'),
  );

  const anySpecificChecked = dashVersionCheckboxes.some((c) => c.value !== '__all' && c.checked);
  const allCheckbox = dashVersionCheckboxes.find((c) => c.value === '__all');
  if (allCheckbox) allCheckbox.checked = !anySpecificChecked;
  ensureAllCheckedMeansSelectAll(dashVersionCheckboxes);

  dashVersionCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      applyAllBehavior(dashVersionCheckboxes, checkbox);

      syncVersionFilterSelect();
      updateVersionTriggerText();
      applyDashboardDocFilters();
    });
  });

  syncVersionFilterSelect();
  updateVersionTriggerText();
}

function applyDashboardDocFilters() {
  renderDashboardPreset(currentDashboardType);
  if (activeDrillCardKey) {
    openCardDrillDown(activeDrillCardKey);
    return;
  }
  setInsightDetail(currentInsightType);
}

function syncRuleTypeFilterSelect() {
  if (!dashRuleTypeFilter) return;
  const selected = new Set(
    dashRuleTypeCheckboxes
      .filter((c) => c.checked && c.value !== '__all')
      .map((c) => c.value.trim().toLowerCase()),
  );
  Array.from(dashRuleTypeFilter.options).forEach((opt) => {
    opt.selected = selected.has(opt.value.trim().toLowerCase());
  });
}

function updateRuleTypeTriggerText() {
  if (!dashRuleTypeTrigger) return;
  const selected = dashRuleTypeCheckboxes.filter((c) => c.checked && c.value !== '__all');
  const totalSpecific = dashRuleTypeCheckboxes.filter((c) => c.value !== '__all').length;
  if (!selected.length) {
    dashRuleTypeTrigger.textContent = 'Ichki qoida turi (barchasi)';
    return;
  }
  if (selected.length === totalSpecific) {
    dashRuleTypeTrigger.textContent = 'Ichki qoida turi (barchasi)';
    return;
  }
  if (selected.length <= 2) {
    dashRuleTypeTrigger.textContent = selected.map((c) => c.value).join(', ');
    return;
  }
  dashRuleTypeTrigger.textContent = `${selected.length} ta tur tanlandi`;
}

function syncDocNameFilterSelect() {
  if (!dashDocNameFilter) return;
  const selected = new Set(
    dashDocNameCheckboxes
      .filter((c) => c.checked && c.value !== '__all')
      .map((c) => c.value.trim().toLowerCase()),
  );
  Array.from(dashDocNameFilter.options).forEach((opt) => {
    opt.selected = selected.has(opt.value.trim().toLowerCase());
  });
}

function updateDocNameTriggerText() {
  if (!dashDocNameTrigger) return;
  const selected = dashDocNameCheckboxes.filter((c) => c.checked && c.value !== '__all');
  const totalSpecific = dashDocNameCheckboxes.filter((c) => c.value !== '__all').length;
  if (!selected.length) {
    dashDocNameTrigger.textContent = "Hujjat nomi (barchasi)";
    return;
  }
  if (selected.length === totalSpecific) {
    dashDocNameTrigger.textContent = "Hujjat nomi (barchasi)";
    return;
  }
  if (selected.length <= 2) {
    dashDocNameTrigger.textContent = selected.map((c) => c.value).join(', ');
    return;
  }
  dashDocNameTrigger.textContent = `${selected.length} ta hujjat tanlandi`;
}

function syncVersionFilterSelect() {
  if (!dashVersionFilter) return;
  const selected = new Set(
    dashVersionCheckboxes
      .filter((c) => c.checked && c.value !== '__all')
      .map((c) => c.value.trim().toLowerCase()),
  );
  Array.from(dashVersionFilter.options).forEach((opt) => {
    opt.selected = selected.has(opt.value.trim().toLowerCase());
  });
}

function updateVersionTriggerText() {
  if (!dashVersionTrigger) return;
  const selected = dashVersionCheckboxes.filter((c) => c.checked && c.value !== '__all');
  const totalSpecific = dashVersionCheckboxes.filter((c) => c.value !== '__all').length;
  if (!selected.length) {
    dashVersionTrigger.textContent = 'Hujjat versiyasi (barchasi)';
    return;
  }
  if (selected.length === totalSpecific) {
    dashVersionTrigger.textContent = 'Hujjat versiyasi (barchasi)';
    return;
  }
  if (selected.length <= 2) {
    dashVersionTrigger.textContent = selected.map((c) => c.value).join(', ');
    return;
  }
  dashVersionTrigger.textContent = `${selected.length} ta versiya tanlandi`;
}

function getMainPageSelectedValues(blockIndex) {
  const block = mainFilterBlocks[blockIndex];
  if (!block) return [];
  return Array.from(block.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
}

function ensureMainTableEmptyState() {
  if (!mainDocsTableBody) return null;
  let row = mainDocsTableBody.querySelector('.table-empty-state');
  if (!row) {
    row = document.createElement('tr');
    row.className = 'table-empty-state hidden';
    row.innerHTML = '<td colspan="8">Tanlangan filtrlar bo‘yicha hujjat topilmadi</td>';
    mainDocsTableBody.appendChild(row);
  }
  return row;
}

function applyMainPageFilters() {
  if (!docRows.length) return;

  const selectedRuleTypes = getMainPageSelectedValues(0);
  const selectedOrgNames = getMainPageSelectedValues(1);
  const selectedRelationTypes = getMainPageSelectedValues(2);
  const selectedStatuses = getMainPageSelectedValues(3);
  const query = normalizeFilterValue(mainSearchInput?.value || '');
  let visibleCount = 0;

  docRows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    const ruleType = cells[2]?.textContent.trim() || '';
    const orgName = cells[3]?.textContent.trim() || '';
    const relationType = cells[6]?.textContent.trim() || '';
    const status = cells[7]?.textContent.trim() || '';
    const haystack = normalizeFilterValue(row.textContent);

    const matches =
      matchesOptionalSelection(ruleType, selectedRuleTypes) &&
      matchesOptionalSelection(orgName, selectedOrgNames) &&
      matchesOptionalSelection(relationType, selectedRelationTypes) &&
      matchesOptionalSelection(status, selectedStatuses) &&
      (!query || haystack.includes(query));

    row.classList.toggle('hidden', !matches);
    if (matches) visibleCount += 1;
  });

  if (mainDocCounter) {
    mainDocCounter.textContent = String(visibleCount);
  }

  const emptyStateRow = ensureMainTableEmptyState();
  emptyStateRow?.classList.toggle('hidden', visibleCount > 0);
}

function showTestBuilder() {
  createHomeView?.classList.add('hidden');
  testBuilderView?.classList.remove('hidden');
  setActiveStep(1);
}

function showCreateHome() {
  createHomeView?.classList.remove('hidden');
  testBuilderView?.classList.add('hidden');
}

function resetTestBuilder() {
  showCreateHome();
  tbStep1?.classList.remove('hidden');
  tbStep2?.classList.add('hidden');
  tbStep3?.classList.add('hidden');
  setActiveStep(1);
  if (testDocSelect) testDocSelect.value = '';
  if (testVersionSelect) testVersionSelect.value = '';
  if (questionCountInput) questionCountInput.value = '5';
  if (questionsContainer) questionsContainer.innerHTML = '';
  if (tbQuestionSearch) tbQuestionSearch.value = '';
  if (tbValidationOutput) {
    tbValidationOutput.classList.add('hidden');
    tbValidationOutput.textContent = '';
  }
  if (tbAutosaveState) tbAutosaveState.textContent = 'Autosave: hali saqlanmagan';
  populateDocSelect();
  updateMetaInfo();
}

function populateDocSelect() {
  if (!testDocSelect) return;
  const rows = Array.from(document.querySelectorAll('.doc-row td:nth-child(2) strong'));
  const current = testDocSelect.value;
  testDocSelect.innerHTML = '<option value="">Hujjatni tanlang</option>';
  rows.forEach((item, idx) => {
    const title = item.textContent.trim();
    const option = document.createElement('option');
    option.value = title;
    option.textContent = title || `Hujjat ${idx + 1}`;
    testDocSelect.appendChild(option);
  });
  testDocSelect.value = current;
}

function setActiveStep(step) {
  stepPills.forEach((pill) => {
    const value = Number(pill.getAttribute('data-step-pill'));
    pill.classList.toggle('active', value === step);
    pill.classList.toggle('done', value < step);
  });
}

function getOptionLetter(index) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (index < alphabet.length) return alphabet[index];
  return `V${index + 1}`;
}

function createOptionRow({ qNumber, type, letter, text = '', checked = false }) {
  const row = document.createElement('label');
  row.className = 'option-row';
  const markerType = type === 'multi' ? 'checkbox' : 'radio';
  row.innerHTML = `
    <input class="correct-marker" type="${markerType}" ${markerType === 'radio' ? `name="q${qNumber}-correct"` : ''} />
    <span class="option-letter">${letter}</span>
    <input type="text" placeholder="Variant ${letter} matni" value="${text.replace(/"/g, '&quot;')}" />
    <button type="button" class="remove-option-btn">✕</button>
  `;
  const marker = row.querySelector('.correct-marker');
  if (marker) marker.checked = checked;
  return row;
}

function updateQuestionNumbers() {
  const cards = Array.from(questionsContainer?.querySelectorAll('.question-card') || []);
  cards.forEach((card, idx) => {
    const number = idx + 1;
    card.setAttribute('data-qnumber', String(number));
    const title = card.querySelector('h4');
    if (title) title.textContent = `Savol ${number}`;
    const typeSelect = card.querySelector('.question-type-select');
    const markerType = typeSelect?.value === 'multi' ? 'checkbox' : 'radio';
    card.querySelectorAll('.correct-marker').forEach((m) => {
      m.type = markerType;
      if (markerType === 'radio') {
        m.setAttribute('name', `q${number}-correct`);
      } else {
        m.removeAttribute('name');
      }
    });
  });
  updateMetaInfo();
}

function createQuestionCard(data = {}) {
  const currentCount = questionsContainer?.querySelectorAll('.question-card').length || 0;
  const qNumber = currentCount + 1;
  const type = data.type || 'single';
  const questionText = data.questionText || '';
  const options = data.options || [
    { letter: 'A', text: '', correct: false },
    { letter: 'B', text: '', correct: false },
    { letter: 'C', text: '', correct: false },
    { letter: 'D', text: '', correct: false },
  ];

  const card = document.createElement('article');
  card.className = 'question-card';
  card.setAttribute('data-qnumber', String(qNumber));
  card.innerHTML = `
    <div class="question-card-head">
      <div class="question-card-title">
        <h4>Savol ${qNumber}</h4>
        <span class="question-status incomplete">Tugallanmagan</span>
      </div>
      <div class="question-card-actions">
        <button type="button" class="mini-action-btn duplicate-question-btn">Nusxalash</button>
        <button type="button" class="mini-action-btn danger remove-question-btn">O'chirish</button>
      </div>
    </div>
    <textarea placeholder="Savol matnini kiriting">${questionText}</textarea>
    <div class="question-toolbar">
      <label>
        <span>Savol turi</span>
        <select class="question-type-select">
          <option value="single">Variantlar bilan (bitta to'g'ri javob)</option>
          <option value="multi">Multi select variantlar (ko'p to'g'ri javob)</option>
        </select>
      </label>
    </div>
    <div class="options-list"></div>
    <button type="button" class="add-option-btn">+ Variant qo'shish</button>
    <p class="correct-hint">To'g'ri javob(lar)ni chapdagi belgidan tanlang.</p>
  `;

  const typeSelect = card.querySelector('.question-type-select');
  const optionsList = card.querySelector('.options-list');
  const addOptionBtn = card.querySelector('.add-option-btn');
  const removeQuestionBtn = card.querySelector('.remove-question-btn');
  const duplicateQuestionBtn = card.querySelector('.duplicate-question-btn');

  if (typeSelect) typeSelect.value = type;
  options.forEach((opt, idx) => {
    optionsList?.appendChild(
      createOptionRow({
        qNumber,
        type,
        letter: opt.letter || getOptionLetter(idx),
        text: opt.text || '',
        checked: Boolean(opt.correct),
      }),
    );
  });

  typeSelect?.addEventListener('change', () => {
    updateQuestionNumbers();
  });

  addOptionBtn?.addEventListener('click', () => {
    if (!optionsList) return;
    const idx = optionsList.querySelectorAll('.option-row').length;
    optionsList.appendChild(
      createOptionRow({
        qNumber: Number(card.getAttribute('data-qnumber')),
        type: typeSelect?.value || 'single',
        letter: getOptionLetter(idx),
      }),
    );
    updateQuestionNumbers();
  });

  optionsList?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains('remove-option-btn')) return;
    const row = target.closest('.option-row');
    if (!row || !optionsList) return;
    if (optionsList.querySelectorAll('.option-row').length <= 2) return;
    row.remove();
    updateQuestionNumbers();
    scheduleAutosave();
  });

  removeQuestionBtn?.addEventListener('click', () => {
    card.remove();
    updateQuestionNumbers();
    scheduleAutosave();
  });

  duplicateQuestionBtn?.addEventListener('click', () => {
    const state = getQuestionState(card);
    createQuestionCard(state);
    updateQuestionNumbers();
    scheduleAutosave();
  });

  card.addEventListener('input', () => {
    refreshQuestionStatus(card);
    scheduleAutosave();
  });
  card.addEventListener('change', () => {
    refreshQuestionStatus(card);
    scheduleAutosave();
  });

  questionsContainer?.appendChild(card);
  refreshQuestionStatus(card);
  updateQuestionNumbers();
}

function generateQuestionForms(count) {
  if (!questionsContainer) return;
  questionsContainer.innerHTML = '';
  for (let i = 0; i < count; i += 1) {
    createQuestionCard();
  }
  updateMetaInfo();
}

function getQuestionState(card) {
  const type = card.querySelector('.question-type-select')?.value || 'single';
  const questionText = card.querySelector('textarea')?.value || '';
  const options = Array.from(card.querySelectorAll('.option-row')).map((row, idx) => ({
    letter: row.querySelector('.option-letter')?.textContent || getOptionLetter(idx),
    text: row.querySelector('input[type="text"]')?.value || '',
    correct: Boolean(row.querySelector('.correct-marker')?.checked),
  }));
  return { type, questionText, options };
}

function collectBuilderState() {
  return {
    doc: testDocSelect?.value || '',
    version: testVersionSelect?.value || '',
    questions: Array.from(questionsContainer?.querySelectorAll('.question-card') || []).map(getQuestionState),
  };
}

function renderFromState(state) {
  if (!state || !questionsContainer) return;
  if (testDocSelect) testDocSelect.value = state.doc || '';
  if (testVersionSelect) testVersionSelect.value = state.version || '';
  questionsContainer.innerHTML = '';
  (state.questions || []).forEach((q) => createQuestionCard(q));
  tbStep1?.classList.add('hidden');
  tbStep2?.classList.add('hidden');
  tbStep3?.classList.remove('hidden');
  setActiveStep(3);
}

function saveDraft() {
  const state = collectBuilderState();
  localStorage.setItem(DRAFT_KEY, JSON.stringify(state));
  showValidation('Draft saqlandi.', false);
  if (tbAutosaveState) tbAutosaveState.textContent = `Autosave: ${new Date().toLocaleTimeString()}`;
}

function loadDraft() {
  const raw = localStorage.getItem(DRAFT_KEY);
  if (!raw) {
    showValidation('Draft topilmadi.', true);
    return;
  }
  try {
    const state = JSON.parse(raw);
    renderFromState(state);
    showValidation('Draft yuklandi.', false);
    if (tbAutosaveState) tbAutosaveState.textContent = `Autosave: ${new Date().toLocaleTimeString()}`;
  } catch {
    showValidation('Draft fayli buzilgan.', true);
  }
}

function showValidation(message, isError = false) {
  if (!tbValidationOutput) return;
  tbValidationOutput.classList.remove('hidden');
  tbValidationOutput.classList.toggle('error', isError);
  tbValidationOutput.textContent = message;
}

function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  if (toast._timer) clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function validateQuestions() {
  const cards = Array.from(questionsContainer?.querySelectorAll('.question-card') || []);
  if (!cards.length) {
    showValidation('Kamida 1 ta savol bo‘lishi kerak.', true);
    return false;
  }
  const issues = [];
  cards.forEach((card, idx) => {
    const number = idx + 1;
    const questionText = card.querySelector('textarea')?.value.trim() || '';
    const options = Array.from(card.querySelectorAll('.option-row'));
    const filled = options.filter((o) => (o.querySelector('input[type="text"]')?.value.trim() || '').length);
    const correctCount = options.filter((o) => o.querySelector('.correct-marker')?.checked).length;
    if (!questionText) issues.push(`Savol ${number}: matn kiritilmagan.`);
    if (filled.length < 2) issues.push(`Savol ${number}: kamida 2 ta variant matni kerak.`);
    if (correctCount < 1) issues.push(`Savol ${number}: kamida 1 ta to'g'ri javob tanlanishi kerak.`);
  });
  if (issues.length) {
    showValidation(issues.join(' | '), true);
    return false;
  }
  showValidation('Tekshiruv muvaffaqiyatli. Test tayyor.', false);
  return true;
}

function finalizeTest() {
  const isValid = validateQuestions();
  if (!isValid) return;
  saveDraft();
  showValidation('Test yakunlandi va avtomatik saqlandi.', false);
  showToast('Test bank xodimlariga yuborildi.');
}

function updateMetaInfo() {
  if (!tbMetaInfo) return;
  const cards = Array.from(questionsContainer?.querySelectorAll('.question-card') || []);
  const total = cards.length;
  const completed = cards.filter((c) => c.classList.contains('is-complete')).length;
  const pending = total - completed;
  tbMetaInfo.textContent = `${total} ta savol | ${completed} tayyor | ${pending} tugallanmagan`;
}

function refreshQuestionStatus(card) {
  const questionText = card.querySelector('textarea')?.value.trim() || '';
  const options = Array.from(card.querySelectorAll('.option-row'));
  const filled = options.filter((o) => (o.querySelector('input[type="text"]')?.value.trim() || '').length);
  const correctCount = options.filter((o) => o.querySelector('.correct-marker')?.checked).length;
  const isComplete = Boolean(questionText) && filled.length >= 2 && correctCount >= 1;
  card.classList.toggle('is-complete', isComplete);
  const status = card.querySelector('.question-status');
  if (status) {
    status.textContent = isComplete ? 'Tayyor' : 'Tugallanmagan';
    status.classList.toggle('ok', isComplete);
  }
  updateMetaInfo();
}

function scheduleAutosave() {
  if (autosaveTimer) clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => {
    const state = collectBuilderState();
    localStorage.setItem(DRAFT_KEY, JSON.stringify(state));
    if (tbAutosaveState) tbAutosaveState.textContent = `Autosave: ${new Date().toLocaleTimeString()}`;
  }, 700);
}

function filterQuestions(query) {
  const q = query.trim().toLowerCase();
  const cards = Array.from(questionsContainer?.querySelectorAll('.question-card') || []);
  cards.forEach((card) => {
    const questionText = card.querySelector('textarea')?.value.toLowerCase() || '';
    const optionText = Array.from(card.querySelectorAll('.option-row input[type="text"]'))
      .map((i) => i.value.toLowerCase())
      .join(' ');
    const match = !q || questionText.includes(q) || optionText.includes(q);
    card.classList.toggle('hidden', !match);
  });
}

docRows.forEach((row) => {
  row.addEventListener('click', () => openModal(row));
});

closeBtn?.addEventListener('click', closeModal);
openCreateModalBtn?.addEventListener('click', openCreateModal);
createCloseBtn?.addEventListener('click', closeCreateModal);
dashboardCloseBtn?.addEventListener('click', closeDashboardModal);
mainFilterBlocks.forEach((block) => {
  block.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', applyMainPageFilters);
  });
});
mainSearchInput?.addEventListener('input', applyMainPageFilters);
roleSwitcherBtn?.addEventListener('click', toggleRoleSwitcher);
roleSwitcherOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const role = option.getAttribute('data-role');
    if (!role) return;
    setActiveRole(role);
    persistRole(role);
    closeRoleSwitcher();
    redirectByRole(role);
  });
});
openTestBuilderBtn?.addEventListener('click', showTestBuilder);
testBuilderBackBtn?.addEventListener('click', showCreateHome);
tbAddQuestionBtn?.addEventListener('click', () => createQuestionCard());
tbFinalizeBtn?.addEventListener('click', finalizeTest);
tbSaveDraftBtn?.addEventListener('click', saveDraft);
tbLoadDraftBtn?.addEventListener('click', loadDraft);
tbQuestionSearch?.addEventListener('input', (e) => {
  const target = e.target;
  if (!(target instanceof HTMLInputElement)) return;
  filterQuestions(target.value);
});
testDocSelect?.addEventListener('change', scheduleAutosave);
testVersionSelect?.addEventListener('change', scheduleAutosave);
dashRuleTypeFilter?.addEventListener('change', applyDashboardDocFilters);
dashVersionFilter?.addEventListener('change', applyDashboardDocFilters);
bankRegionFilter?.addEventListener('change', applyDashboardDocFilters);
bankBranchTypeFilter?.addEventListener('change', applyDashboardDocFilters);
bankDepartmentFilter?.addEventListener('change', applyDashboardDocFilters);
headOfficeOnlyFilter?.addEventListener('change', applyDashboardDocFilters);

dashRuleTypeTrigger?.addEventListener('click', () => {
  dashRuleTypeDropdown?.classList.toggle('open');
  dashDocNameDropdown?.classList.remove('open');
  dashVersionDropdown?.classList.remove('open');
});

dashRuleTypeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    applyAllBehavior(dashRuleTypeCheckboxes, checkbox);
    syncRuleTypeFilterSelect();
    updateRuleTypeTriggerText();
    applyDashboardDocFilters();
  });
});

dashDocNameTrigger?.addEventListener('click', () => {
  dashDocNameDropdown?.classList.toggle('open');
  dashRuleTypeDropdown?.classList.remove('open');
  dashVersionDropdown?.classList.remove('open');
});

dashVersionTrigger?.addEventListener('click', () => {
  dashVersionDropdown?.classList.toggle('open');
  dashRuleTypeDropdown?.classList.remove('open');
  dashDocNameDropdown?.classList.remove('open');
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const metricCard = target.closest('.metric-card[data-card-key]');
  if (metricCard && dashboardTypeSelect) {
    const cardKey = metricCard.getAttribute('data-card-key');
    if (cardKey) openCardDrillDown(cardKey);
    return;
  }

  const drillAction = target.closest('[data-drill-action]');
  if (!drillAction || !dashboardTypeSelect) return;
  const action = drillAction.getAttribute('data-drill-action');
  if (action === 'open-topic') {
    const topic = drillAction.getAttribute('data-topic');
    if (topic) renderTestTopicDetails(topic);
  }
  if (action === 'back-topics') {
    if (drillTopicMode) renderTestTopicsDrill(drillTopicMode);
  }
});

dashPeriodButtons.forEach((button) => {
  button.addEventListener('click', () => {
    dashPeriodButtons.forEach((item) => item.classList.toggle('active', item === button));
    applyDashboardDocFilters();
  });
});

dashSegmentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    dashSegmentButtons.forEach((item) => item.classList.toggle('active', item === button));
    applyDashboardDocFilters();
  });
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;

  if (roleSwitcher && !roleSwitcher.contains(target)) {
    closeRoleSwitcher();
  }

  if (!dashRuleTypeDropdown && !dashDocNameDropdown && !dashVersionDropdown) return;
  if (dashRuleTypeDropdown && !dashRuleTypeDropdown.contains(target)) {
    dashRuleTypeDropdown.classList.remove('open');
  }
  if (dashDocNameDropdown && !dashDocNameDropdown.contains(target)) {
    dashDocNameDropdown.classList.remove('open');
  }
  if (dashVersionDropdown && !dashVersionDropdown.contains(target)) {
    dashVersionDropdown.classList.remove('open');
  }
});

tbToStep2Btn?.addEventListener('click', () => {
  if (!testDocSelect?.value || !testVersionSelect?.value) {
    alert('Iltimos, hujjat va versiyani tanlang.');
    return;
  }
  tbStep1?.classList.add('hidden');
  tbStep2?.classList.remove('hidden');
  setActiveStep(2);
});

tbGenerateQuestionsBtn?.addEventListener('click', () => {
  const count = Number(questionCountInput?.value || 0);
  if (!Number.isInteger(count) || count < 1 || count > 50) {
    alert('Savollar soni 1 dan 50 gacha bo‘lishi kerak.');
    return;
  }
  generateQuestionForms(count);
  tbStep2?.classList.add('hidden');
  tbStep3?.classList.remove('hidden');
  setActiveStep(3);
});

docModal?.addEventListener('click', (event) => {
  if (event.target.matches('[data-close="true"]')) {
    closeModal();
  }
});

createModal?.addEventListener('click', (event) => {
  if (event.target.matches('[data-create-close="true"]')) {
    closeCreateModal();
  }
});

dashboardModal?.addEventListener('click', (event) => {
  if (event.target.matches('[data-dashboard-close="true"]')) {
    closeDashboardModal();
  }
});

dashboardDrillModal?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.matches('[data-drill-close="true"]')) {
    closeDashboardDrillModal();
  }
});
dashboardDrillCloseBtn?.addEventListener('click', closeDashboardDrillModal);

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  closeRoleSwitcher();
  if (docModal?.classList.contains('show')) {
    closeModal();
  }
  if (createModal?.classList.contains('show')) {
    closeCreateModal();
  }
  if (dashboardModal?.classList.contains('show')) {
    closeDashboardModal();
  }
  if (dashboardDrillModal?.classList.contains('show')) {
    closeDashboardDrillModal();
  }
});

accordionTriggers.forEach((trigger) => {
  const panelId = trigger.getAttribute('data-accordion-trigger');
  const panel = document.getElementById(panelId);

  if (!panel) return;

  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isExpanded));
    panel.classList.toggle('open', !isExpanded);
  });
});

dashViewButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const view = btn.getAttribute('data-view') || 'overview';
    setDashboardView(view);
  });
});

dashboardTypeSelect?.addEventListener('change', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) return;
  currentDashboardType = target.value;
  currentInsightType = 'summary';
  initDashboardDocFilters();
  ensureAllCheckedMeansSelectAll(dashDocNameCheckboxes);
  syncDocNameFilterSelect();
  updateDocNameTriggerText();
  ensureAllCheckedMeansSelectAll(dashVersionCheckboxes);
  syncVersionFilterSelect();
  updateVersionTriggerText();
  applyDashboardDocFilters();
});

initDashboardDocFilters();
ensureAllCheckedMeansSelectAll(dashRuleTypeCheckboxes);
syncRuleTypeFilterSelect();
updateRuleTypeTriggerText();
ensureAllCheckedMeansSelectAll(dashDocNameCheckboxes);
syncDocNameFilterSelect();
updateDocNameTriggerText();
ensureAllCheckedMeansSelectAll(dashVersionCheckboxes);
syncVersionFilterSelect();
updateVersionTriggerText();
applyDashboardDocFilters();
setDashboardView('overview');
applyMainPageFilters();
setInsightDetail(currentInsightType);
const initialRole = getPersistedRole() || roleSwitcherBtn?.textContent?.trim() || 'Yurist-rahbar';
setActiveRole(initialRole);
persistRole(initialRole);
redirectByRole(initialRole);
startDashboardAutoRefresh();

document.addEventListener('visibilitychange', () => {
  if (!dashboardTypeSelect) return;
  if (document.hidden) {
    if (dashboardAutoRefreshTimer) clearInterval(dashboardAutoRefreshTimer);
    dashboardAutoRefreshTimer = null;
    return;
  }
  startDashboardAutoRefresh();
});
