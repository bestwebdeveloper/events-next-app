import { MESSAGES } from '../../constants/constants';
import { Event, NewEvent } from '../events';

const events: { [key: string]: Event } = {
  '13755': {
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    id: 13755,
    location: '',
    organiser: '',
    promoImage: 'https://picsum.photos/seed/13755/640/360',
    time: '2021-04-14',
    title: 'React Summit Remote Edition',
  },
  '13759': {
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
    id: 13759,
    location: '',
    organiser: 'vueconfus',
    promoImage: 'https://picsum.photos/seed/13759/640/360',
    time: '2021-04-14',
    title: 'Vueconf.US',
  },
  '13252': {
    description:
      'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
    id: 13252,
    location: 'Romania, Cluj-Napoca',
    organiser: 'jsheroes',
    promoImage: 'https://picsum.photos/seed/13252/640/360',
    time: '2021-04-15',
    title: 'JSHeroes',
  },
  '13528': {
    description:
      'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.',
    id: 13528,
    location: 'U.K., London',
    organiser: 'JavaScriptCon',
    promoImage: 'https://picsum.photos/seed/13528/640/360',
    time: '2021-04-21',
    title: 'International JavaScript Conference London',
  },
  '13840': {
    description:
      'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    id: 13840,
    location: '',
    organiser: 'strapijs',
    promoImage: 'https://picsum.photos/seed/13840/640/360',
    time: '2021-04-22',
    title: 'Strapi Conference',
  },
  '13977': {
    description:
      'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.',
    id: 13977,
    location: '',
    organiser: 'ngconf',
    promoImage: 'https://picsum.photos/seed/13977/640/360',
    time: '2021-04-22',
    title: 'ng-conf',
  },
  '14009': {
    description:
      'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    id: 14009,
    location: '',
    organiser: 'GeekleOfficial',
    promoImage: 'https://picsum.photos/seed/14009/640/360',
    time: '2021-04-27',
    title: 'React Case Study Festival',
  },
  '13920': {
    description:
      'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.',
    id: 13920,
    location: '',
    organiser: 'vuedayit',
    promoImage: 'https://picsum.photos/seed/13920/640/360',
    time: '2021-04-29',
    title: 'vueday',
  },
  '13797': {
    description:
      'Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.',
    id: 13797,
    location: '',
    organiser: 'webdirections',
    promoImage: 'https://picsum.photos/seed/13797/640/360',
    time: '2021-05-21',
    title: 'Lazy Load',
  },
  '14020': {
    description:
      'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.',
    id: 14020,
    location: '',
    organiser: 'Frontend_Love',
    promoImage: 'https://picsum.photos/seed/14020/640/360',
    time: '2021-05-21',
    title: 'JSWorld Conference USA',
  },
  '14021': {
    description:
      'Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources.',
    id: 14021,
    location: '',
    organiser: 'GeekleOfficial',
    promoImage: 'https://picsum.photos/seed/14021/640/360',
    time: '2021-06-01',
    title: 'Online Angular Global Summit',
  },
  '13974': {
    description:
      'Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.',
    id: 13974,
    location: '',
    organiser: 'fwdays',
    promoImage: 'https://picsum.photos/seed/13974/640/360',
    time: '2021-06-05',
    title: 'JavaScript fwdays',
  },
  '13253': {
    description:
      'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.',
    id: 13253,
    location: 'Ukraine, Lviv',
    organiser: 'LvivJS',
    promoImage: 'https://picsum.photos/seed/13253/640/360',
    time: '2021-06-06',
    title: 'LvivJS',
  },
  '13756': {
    description:
      'Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.',
    id: 13756,
    location: '',
    organiser: 'thejsnation',
    promoImage: 'https://picsum.photos/seed/13756/640/360',
    time: '2021-06-09',
    title: 'JSNation Live',
  },
  '13988': {
    description:
      'Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.',
    id: 13988,
    location: '',
    organiser: '',
    promoImage: 'https://picsum.photos/seed/13988/640/360',
    time: '2021-06-09',
    title: 'OpenJS World',
  },
  '14056': {
    description:
      'Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedures whereas bricks-and-clicks processes.',
    id: 14056,
    location: '',
    organiser: 'Frontend_Love',
    promoImage: 'https://picsum.photos/seed/14056/640/360',
    time: '2021-06-11',
    title: 'JSworld Conference Africa',
  },
  '14028': {
    description:
      'Synergistically evolve 2.0 technologies rather than just in time initiatives. Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.',
    id: 14028,
    location: '',
    organiser: 'enterjsconf',
    promoImage: 'https://picsum.photos/seed/14028/640/360',
    time: '2021-06-15',
    title: 'enterJS Vue Day',
  },
  '14013': {
    description:
      'Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before process-centric communities. Dramatically evisculate holistic innovation rather than client-centric data.',
    id: 14013,
    location: '',
    organiser: 'webdirections',
    promoImage: 'https://picsum.photos/seed/14013/640/360',
    time: '2021-06-17',
    title: 'Code',
  },
  '13254': {
    description:
      'Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services.',
    id: 13254,
    location: 'Norway, Larvik',
    organiser: 'ReactNorway',
    promoImage: 'https://picsum.photos/seed/13254/640/360',
    time: '2021-06-18',
    title: 'React Day Norway',
  },
  '13761': {
    description:
      'Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.',
    id: 13761,
    location: '',
    organiser: 'webdirections',
    promoImage: 'https://picsum.photos/seed/13761/640/360',
    time: '2021-06-18',
    title: 'Global Scope',
  },
  '13255': {
    description:
      'Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.',
    id: 13255,
    location: 'U.K., Newquay',
    organiser: 'halfstackconf',
    promoImage: 'https://picsum.photos/seed/13255/640/360',
    time: '2021-07-02',
    title: 'HalfStack Newquay',
  },
  '13256': {
    description:
      'Quickly aggregate B2B users and worldwide potentialities. Progressively plagiarize resource-leveling e-commerce through resource-leveling core competencies. Dramatically mesh low-risk high-yield alignments before transparent e-tailers.',
    id: 13256,
    location: 'Spain, Barcelona',
    organiser: 'jscamp',
    promoImage: 'https://picsum.photos/seed/13256/640/360',
    time: '2021-07-15',
    title: 'JSCAMP',
  },
  '13702': {
    description:
      'Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with distinctive quality vectors. Globally revolutionize global sources through interoperable services.',
    id: 13702,
    location: 'U.S.A., Columbus, OH',
    organiser: 'JSFriendsConf',
    promoImage: 'https://picsum.photos/seed/13702/640/360',
    time: '2021-08-20',
    title: 'JavaScript and Friends',
  },
  '13257': {
    description:
      'Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences. Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation manufactured products.',
    id: 13257,
    location: 'U.S.A., Brooklyn, NY',
    organiser: 'ReactNewYork',
    promoImage: 'https://picsum.photos/seed/13257/640/360',
    time: '2021-09-10',
    title: 'React Day New York',
  },
  '14008': {
    description:
      'Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an expanded array of niche markets through robust products. Appropriately implement visionary e-services vis-a-vis strategic web-readiness.',
    id: 14008,
    location: 'U.S.A., Atlanta, GA',
    organiser: 'renderATL',
    promoImage: 'https://picsum.photos/seed/14008/640/360',
    time: '2021-09-13',
    title: 'render(ATL)',
  },
  '14033': {
    description:
      'Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence. Synergistically deliver performance based methods of empowerment whereas distributed expertise.',
    id: 14033,
    location: 'Hungary, Budapest',
    organiser: 'jsconfbp',
    promoImage: 'https://picsum.photos/seed/14033/640/360',
    time: '2021-09-23',
    title: 'JSConf Budapest',
  },
  '14029': {
    description:
      'Efficiently enable enabled sources and cost effective products. Completely synthesize principle-centered information after ethical communities. Efficiently innovate open-source infrastructures via inexpensive materials.',
    id: 14029,
    location: '',
    organiser: 'enterjsconf',
    promoImage: 'https://picsum.photos/seed/14029/640/360',
    time: '2021-09-27',
    title: 'enterJS',
  },
  '13994': {
    description:
      'Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies whereas interdependent quality vectors. Rapaciously utilize enterprise experiences via 24/7 markets.',
    id: 13994,
    location: '',
    organiser: 'js_days',
    promoImage: 'https://picsum.photos/seed/13994/640/360',
    time: '2021-10-04',
    title: 'javascript days',
  },
  '13258': {
    description:
      'Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results.',
    id: 13258,
    location: 'Sweden, Stockholm',
    organiser: 'nordicjs',
    promoImage: 'https://picsum.photos/seed/13258/640/360',
    time: '2021-10-07',
    title: 'Nordic.js',
  },
  '13757': {
    description:
      'Quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than frictionless technology. Globally network focused materials vis-a-vis cost effective manufactured products.',
    id: 13757,
    location: '',
    organiser: 'conf42com',
    promoImage: 'https://picsum.photos/seed/13757/640/360',
    time: '2021-10-28',
    title: 'Conf42: JavaScript',
  },
  '14010': {
    description:
      'Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation. Phosfluorescently leverage others enterprise-wide "outside the box" thinking with e-business collaboration and idea-sharing. Proactively leverage other resource-leveling convergence rather than inter-mandated networks.',
    id: 14010,
    location: 'India, Mumbai',
    organiser: 'react_india',
    promoImage: 'https://picsum.photos/seed/14010/640/360',
    time: '2021-11-12',
    title: 'React India',
  },
  '13910': {
    description:
      'Rapaciously seize adaptive infomediaries and user-centric intellectual capital. Collaboratively unleash market-driven "outside the box" thinking for long-term high-impact solutions. Enthusiastically engage fully tested process improvements before top-line platforms.',
    id: 13910,
    location: '',
    organiser: 'xtremejsconf',
    promoImage: 'https://picsum.photos/seed/13910/640/360',
    time: '2021-11-22',
    title: 'Xtreme JS',
  },
};

class EventsDB {
  private db: Map<number, Event> = new Map();
  private nextId: number;

  constructor(obj: { [key: string]: Event }) {
    this.resetData(Object.values(obj));

    this.nextId = Math.max(...Object.keys(obj).map(Number)) + 1;
  }

  getAllData(): Event[] {
    return Array.from(this.db.values());
  }

  getData(id: number): Event {
    return this.db.get(id);
  }

  updateData(id: number, newData: Event): Event {
    const event = this.getData(id);

    if (event !== undefined) {
      const newEvent = Object.assign({}, event, newData);

      this.setData(id, newEvent);

      return newEvent;
    } else {
      throw new Error(MESSAGES.INVALID_EVENT_ID);
    }
  }

  addData(newData: NewEvent): Event {
    const newEvent = Object.assign({ id: this.nextId }, newData);

    this.setData(this.nextId, newEvent);
    // TODO: check for overlapping safe integer
    this.nextId++;

    return newEvent;
  }

  private setData(id: number, data: Event): void {
    this.db.set(id, data);
    this.resetData(this.getAllData());
  }

  private resetData(eventsArray: Event[]): void {
    this.db = new Map();

    eventsArray.sort((a, b) => (a.time > b.time ? 1 : a.time < b.time ? -1 : 0));

    eventsArray.forEach((event) => {
      this.db.set(event.id, event);
    });
  }
}

export const eventsDB = new EventsDB(events);
