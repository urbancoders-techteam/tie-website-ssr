import { imageBaseUrl } from "@/utils/config";

const ChooseUsImg1 = imageBaseUrl + "testchoose1.svg";
const ChooseUsImg2 = imageBaseUrl + "testchoose2.svg";
const ChooseUsImg3 = imageBaseUrl + "testchoose3.svg";
const ChooseUsImg4 = imageBaseUrl + "testchoose4.svg";
const ChooseUsImg5 = imageBaseUrl + "ChooseUsImg05.svg";

export const whyChooseUsData = [
  {
    title: "Supportive Environment",
    content: [
      "Experience a supportive and motivating atmosphere that fosters learning and growth.",
    ],
    image: ChooseUsImg5,
  },

  {
    title: "Expert Guidance",
    content: [
      "Benefit from our experienced instructors who provide personalized attention.",
    ],
    image: ChooseUsImg1,
  },
  {
    title: "Proven Results",
    content: [
      "Join a community of successful test-takers who have achieved their goals.",
    ],
    image: ChooseUsImg2,
  },
  {
    title: "Comprehensive Resources",
    content: [
      "Access a wealth of study materials and practice tests to optimize your preparation.",
    ],
    image: ChooseUsImg3,
  },
  {
    title: "Flexible Learning",
    content: [
      "Enjoy flexible schedules and learning formats tailored to your needs.",
    ],
    image: ChooseUsImg4,
  },
];

const testprep1 = imageBaseUrl + "testprep1.png";
const testprep2 = imageBaseUrl + "testprep2.png";
const testprep3 = imageBaseUrl + "testprep3.png";
const testprep4 = imageBaseUrl + "testprep4.png";
const testprep5 = imageBaseUrl + "testprep5.png";
const testprep6 = imageBaseUrl + "testprep6.png";

const testexam1 = imageBaseUrl + "testexam1.svg";
const testexam2 = imageBaseUrl + "testexam2.svg";
const testexam3 = imageBaseUrl + "tesrexam3.svg";
const testexam4 = imageBaseUrl + "testexam4.svg";

export const OurTestData = [
  {
    title: "ILETS",
    path: "/test/ilets",
    image: "/images/ielts.svg",
    info: {
      title: "IELTS",
      content:
        "Are you planning to study, work, or migrate abroad? The International English Language Testing System (IELTS) is a globally recognized examination that assesses your English language proficiency.",
      image: testprep2,
      cta: "BOOK YOUR IELTS DEMO",
    },
    features: {
      heading:
        "The IELTS exam, which lasts approximately 2 hours and 45 minutes, assesses your proficiency across four essential areas: Listening, Reading, Writing, and Speaking.Two versions are accessible: Academic and General Training.",

      items: [
        {
          title: "Listening",

          items: [
            "(30 mins)",
            "Measures ability to understand spoken English in various contexts.",
          ],

          image: testexam1,
        },
        {
          title: "READING",
          items: [
            "(60 mins)",
            "Tests comprehension and interpretation of written English passages.",
          ],

          image: testexam2,
        },
        {
          title: "Writing",
          items: [
            "(60 mins)",
            "Assesses written communication skills, including coherence and accuracy.",
          ],

          image: testexam3,
        },
        {
          title: "Speaking",
          items: [
            "(15-20 mins)",
            "Evaluates oral communication proficiency and ability to convey ideas fluently.",
          ],

          image: testexam4,
        },
      ],
    },
    reasons: [
      {
        title: "Availability",
        items: ["Offered in 140+ countries with 1600+ test centers globally."],
        image: ChooseUsImg1,
      },
      {
        title: "Recognition",
        items: ["Accepted worldwide."],
        image: ChooseUsImg2,
      },
      {
        title: "Enhances Significance",
        items: ["Aids immigration pathways."],
        image: ChooseUsImg3,
      },
      {
        title: "Ease of Access",
        items: ["User-friendly in computer and paper formats."],
        image: ChooseUsImg4,
      },
    ],
    package: [
      {
        id: 3,
        title: "IELTS GENERAL",
        items: [
          "Batch Size 2-3 students",
          "Personalised Feedback",
          "Doubt solving session",
          "5 Simulation Test",
          "Online/Offline Classes",
        ],
        topColor: "#F59E0B",

        packagePrice: "10000",
        mostpopular: true,
      },
      {
        id: 4,
        title: "IELTS ACADEMICS",
        items: [
          "1:1 Classes",
          "Flexible Timing",
          "Personalised Feedback",
          "Doubt solving session",
          "10 Simulation Test",
          "Hybrid Mode Classes",
        ],
        topColor: "#10B981",
        packagePrice: "12000",
      },
    ],
    faq: [
      {
        title: "How to register for the examination?",
        Desc: (
          <>
            To book an IELTS exam, visit the official IELTS website -
            <a
              style={{ color: "#00999E", cursor: "pointer" }}
              href="https://www.ieltsidpindia.com/registration/ielts-test-dates-india "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ieltsidpindia.com/registration/ielts-test-dates-india
            </a>
            ,create an account, select your preferred test date and location,
            and complete the registration process by providing the required
            information and payment.
          </>
        ),
      },

      {
        title: "How much is the IELTS fee in India?",
        Desc: "Effective February 2024, the registration fee for the IELTS Academic and General Training exam is INR 17,000. The fee for IELTS UKVI is INR 17,250, and IELTS Life Skills (A1 and B1) costs INR 16,050. Apart from these, there are other fees related to rescheduling, relocation, and revaluation.",
      },
      {
        title: "Can I take the IELTS test in one day?",
        Desc: "For paper-based IELTS, Speaking can be scheduled on the same day or within 7 days of the other sections. In computer-based tests, all sections, including Speaking, are typically completed on the same day.",
      },
      {
        title:
          "Can I retake the IELTS exam if I'm not satisfied with my score?",
        Desc: "You can retake the IELTS exam as many times as needed, with a minimum 3-day waiting period between attempts. IELTS One Skill Retake option allows targeting specific skills without retaking the entire test, currently available for IELTS on Computer bookings.",
      },
      {
        title: "What if I need to postpone or cancel my IELTS application?",
        Desc: "You can cancel your IELTS test registration before the test date by notifying the test center. Refund policies vary based on the timing of cancellation and exceptional circumstances.",
      },
      {
        title: "What can I bring into the IELTS test room?",
        Desc: "In the IELTS test room, bring only pens, pencils, erasers, and your passport/national ID used for registration. Mobile phones, watches, and other belongings must be switched off and left outside to avoid disqualification.",
      },
      {
        title: "How can I send my IELTS scores to institutions?",
        Desc: "Access the IDP IELTS website and sign up. Once logged in, find and click on 'Request a Test Report Form.' Select your desired universities from the list or search by country.",
      },
      {
        title:
          "How is the Academic test different from the General Training test?",
        Desc: "The Academic test focuses on academic language skills, while the General Training test assesses language proficiency in a practical, everyday context.",
      },
      {
        title: "What is the scoring system for the IELTS test?",
        Desc: "The IELTS Academic test uses a nine-band scale to measure proficiency, with Band 1 indicating non-user and Band 9 indicating expert user.",
      },
      {
        title: "How long is the IELTS Academic test valid for?",
        Desc: "IELTS scores are valid for two years from the test date.",
      },
      {
        title:
          "Are the test dates for the General Training test the same as the Academic test?",
        Desc: "Paper-based IELTS offers 48 test dates annually, while Computer-delivered IELTS is available up to 7 days a week. Both the Academic and General Training modules are accessible throughout the year, with the General Training module offered on 24 specific dates.",
      },
      {
        title: "How long does it take to receive my IELTS test results?",
        Desc: "For paper-based examinations, results are typically released on the 13th day following the exam date, whereas computer-based examination scores are available within 3-5 days post the examination date.",
      },
    ],
  },
  {
    title: "TOEFL",
    path: "/test/toefl",
    image: "/images/toefl.svg",
    info: {
      title: "TOEFL",
      content:
        "Welcome to a world of opportunities with TOEFL! It's your passport to success, whether for studying abroad, advancing in an English-speaking career, or enhancing your language skills.",
      image: testprep5,
      cta: "BOOK YOUR TOEFL DEMO",
    },
    features: {
      heading:
        "The TOEFL exam, which lasts approximately 2 hours , assesses your proficiency across four essential areas: Listening, Reading, Writing, and Speaking.Two versions are accessible: TOEFL IBT and TOEFL ESSENTIAL.",

      items: [
        {
          title: "Reading",

          items: [
            "(35 mins)",
            "Evaluates comprehension and analysis of written English passages.",
          ],

          image: testexam1,
        },
        {
          title: "Writing",
          items: [
            "(29 mins)",
            "Assesses ability to express ideas clearly and effectively in written English.",
          ],

          image: testexam2,
        },
        {
          title: "Speaking",
          items: [
            "(16 mins)",
            "Measures proficiency in verbal communication and expression of ideas in English.",
          ],

          image: testexam3,
        },
        {
          title: "Listening",
          items: [
            "(36 mins)",
            "Tests comprehension of spoken English in various contexts and accents.",
          ],

          image: testexam4,
        },
      ],
    },
    reasons: [
      {
        title: "Widely Accepted",
        items: ["Accepted by 11,000 institutions in 150+ countries."],
        image: ChooseUsImg1,
      },
      {
        title: "Global Recognition",
        items: ["Recognized as a reliable measure"],
        image: ChooseUsImg2,
      },
      {
        title: "Internet-Based Testing (iBT)",
        items: ["Offers the flexibility of taking the test online"],
        image: ChooseUsImg3,
      },
      {
        title: "Gateway to Opportunities",
        items: ["Opens doors admission to professional development."],
        image: ChooseUsImg4,
      },
    ],
    package: [
      {
        id: 9,
        title: "TOEFL BASICS",
        items: [
          "Batch Size 2-3 students",
          "Personalised Feedback",
          "Doubt solving session",
          "5 Simulation Test",
          "Online/Offline Classes",
        ],
        topColor: "#F59E0B",

        packagePrice: "12000",
        mostpopular: true,
      },
      {
        id: 10,
        title: "TOEFL ULTIMATE",
        items: [
          "1:1 Classes",
          "Flexible Timing",
          "Personalised Feedback",
          "Doubt solving session",
          "10 Simulation Test",
          "Hybrid Mode Classes",
        ],
        topColor: "#10B981",

        packagePrice: "15000",
      },
    ],
    faq: [
      {
        title: "How to register for the examination?",
        Desc: "The easiest way to register is through your ETS account. You can also register by phone or by mail. Use the TOEFL iBT Registration Form (PDF) and see “How to Register” in the TOEFL iBT® Information Bulletin (PDF).",
      },
      {
        title: "Does TOEFL Essentials cost less than TOEFL iBT?",
        Desc: "TOEFL Essentials is generally more affordable than TOEFL iBT due to its shorter format and content.  In India, the TOEFL iBT Test costs $205 and the TOEFL Essentials costs $120.",
      },
      {
        title: "Is TOEFL iBT better than IELTS?",
        Desc: "Both exams assess English proficiency similarly, but the choice depends on university or country preferences. IELTS is widely used globally with abundant preparation materials, while TOEFL is favoured primarily in the US.",
      },
      {
        title: "Can I use TOEFL Essentials for job applications?",
        Desc: "While some employers may acknowledge TOEFL Essentials scores for language proficiency, TOEFL iBT scores are typically preferred by most institutions and companies.",
      },
      {
        title: "What documents are required for the TOEFL exam?",
        Desc: "The only required document is your ID (valid passport for Indian citizens). ETS recommends that candidates bring their registration information, but it is not required for entry.",
      },
      {
        title: "How can I send my TOEFL scores to institutions?",
        Desc: "Request official TOEFL score reports via the ETS website. TOEFL iBT allows free sending of scores to four universities; additional reports cost ₹1,640 each, while TOEFL Essentials offers unlimited score reports to institutions at no cost.",
      },
      {
        title: "Can I retake the TOEFL iBT test?",
        Desc: "Yes, you can retake the TOEFL iBT test as many times as you wish, but you must wait at least 3 days between test dates. There is no limit to the number of times you can take the TOEFL iBT test.",
      },
      {
        title: "How soon can I receive my TOEFL iBT scores?",
        Desc: "TOEFL iBT scores are available within 4 days after the test date. TOEFL Essential scores are available after 6 days from the examination.",
      },
      {
        title: "Can I reschedule my TOEFL test?",
        Desc: "A 4-day notice before the date of examination and a rescheduling fee of $60 must be paid.",
      },
      {
        title: "What is the scoring system for the TOEFL test?",
        Desc: "TOEFL Essentials and IELTS use a 1-12 scoring scale for each section, rounded to the nearest whole number for TOEFL Essentials. In contrast, TOEFL iBT rates skills on a 1-120 scale, with each section graded from 1-30, and the total score is the sum of all four sections.",
      },
      {
        title: "How long is the TOEFL test valid for?",
        Desc: "TOEFL scores are valid for two years from the test date.",
      },
    ],
  },
  {
    title: "PTE",
    path: "/test/pte",
    image: "/images/pte.svg",
    info: {
      title: "PTE",
      content:
        "Welcome to PTE, your gateway to global success. This computer-based English proficiency test offers a quick and reliable assessment of your language skills, opening doors to academic and professional opportunities worldwide.",
      image: testprep3,
      cta: "BOOK YOUR PTE DEMO",
    },
    features: {
      heading:
        "PTE features four sections: speaking, writing, reading, and listening. The exam lasts around 3 to 3.5 hours, with scores valid for two years.PTE offers two versions: PTE Academic and PTE Core.",

      items: [
        {
          title: "Speaking and Writing",

          items: [
            "(54-67 mins)",
            "Assesses students on their two key communication skills: verbal and written",
          ],

          image: testexam1,
        },
        {
          title: "Reading",
          items: [
            "(29-30 mins)",
            "Examines applicants' ability to understand written instructions in the language.",
          ],

          image: testexam2,
        },
        {
          title: "Listening",
          items: [
            "(30-43 mins)",
            "Evaluate your ability to understand spoken English",
          ],

          image: testexam3,
        },
      ],
    },
    reasons: [
      {
        title: "Versatile Exam Schedules",
        items: ["Offers test dates throughout the year"],
        image: ChooseUsImg1,
      },
      {
        title: "Global Recognition",
        items: ["Accepted by thousands of universities worldwide"],
        image: ChooseUsImg2,
      },
      {
        title: "Fast Results",
        items: ["Scores typically available within 2-3 days"],
        image: ChooseUsImg3,
      },
      {
        title: "Fair Grading",
        items: ["Unbiased scoring through artificial intelligence"],
        image: ChooseUsImg4,
      },
    ],
    package: [
      {
        id: 5,
        title: "PTE BASICS",
        items: [
          "Batch Size 2-3 students",
          "Personalised Feedback",
          "Doubt solving session",
          "5 Simulation Test",
          "Online/Offline Classes",
        ],
        topColor: "#F59E0B",

        packagePrice: "12000",
        mostpopular: true,
      },
      {
        id: 6,
        title: "PTE ULTIMATE",
        items: [
          "1:1 Classes",
          "Flexible Timing",
          "Personalised Feedback",
          "Doubt solving session",
          "10 Simulation Test",
          "Hybrid Mode Classes",
        ],
        topColor: "#10B981",

        packagePrice: "15000",
      },
    ],
    faq: [
      {
        title: "How to register for the examination?",
        Desc: (
          <>
            To register for the PTE exam, visit{" "}
            <a
              style={{ color: "#00999E", cursor: "pointer" }}
              href="https://www.pearsonpte.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              pearsonpte.com.
            </a>
            , book &apos;PTE Academic&apos; at a nearby center, schedule, create
            or log in to myPTE, complete your profile, review ID policy, submit,
            and receive confirmation via email and myPTE dashboard.
          </>
        ),
      },
      {
        title: "How much is the PTE fee in India?",
        Desc: "The registration fee for PTE Academic, PTE Academic online, PTE Core, and PTE Academic UKVI exams is INR 17,000. For PTE Home A1, A2, and B1 exams, the fee is ₹14435 INR. Additional fees apply for rescheduling, relocation, and revaluation.",
      },
      {
        title: "Can I take the PTE test in one day?",
        Desc: "All sections, including Speaking, are typically completed on the same day. For PTE Academic, PTE Academic UKVI, or PTE Core tests, you have two hours, while for PTE Home tests, you have 30 minutes.",
      },
      {
        title: "Can I retake the PTE exam if I'm not satisfied with my score?",
        Desc: "You can retake the PTE exam if you're unsatisfied with your score, but you must wait until you've received your scores from the previous test before booking a new one.",
      },
      {
        title: "What if I need to postpone or cancel my PTE application?",
        Desc: "You can cancel and reschedule your test for free if it's more than 14 days away. However, if it's within 14 days, you can only cancel and need to schedule a new one. For cancellations made 14 days before the test, you're entitled to a full refund, for 8-13 days, it's a 50% refund, and for 7 days or less, there's no refund.",
      },
      {
        title: "What can I bring into the PTE test room?",
        Desc: "You are not allowed to take anything other than your passport into the PTE test-room. Markers and reusable notepads and a bottle of water will be given to you in the test-room.",
      },
      {
        title: "How can I send my PTE scores to institutions?",
        Desc: "All you have to do is sign in to your myPTE account, go to your score, and start the process to send it to your choice of institution and program.",
      },
      {
        title: "What is the scoring system for the PTE test?",
        Desc: "PTE carefully combines AI technology with human expertise to deliver fast, fair and accurate scores for every test taker.",
      },
      {
        title: "How long is the PTE Academic test valid for?",
        Desc: "PTE scores are valid for two years from the test date.",
      },
      {
        title: "How long does it take to receive my PTE test results?",
        Desc: "Most test scores are now returned within just 2 days.",
      },
      {
        title: "How is the PTE Academic exam scored?",
        Desc: "You can cancel or reschedule for free more than 14 days ahead. Within 14 days, only cancellation is allowed. Full refund for cancellations 14 days before, 50% for 8-13 days, and no refund for 7 days or less.",
      },
    ],
  },
  {
    title: "GRE",
    path: "/test/gre",
    image: "/images/gre.svg",
    info: {
      title: "GRE",
      content:
        "Embarking on your journey to graduate, business, or law school? Whether you're refining your ambitions or solidifying your path, showcasing your best is essential. The GRE General Test empowers you to demonstrate your potential and seize opportunities for success.",
      image: testprep4,
      cta: "BOOK YOUR GRE DEMO",
    },
    features: {
      heading:
        "The GRE features Analytical Writing, Verbal Reasoning, and Quantitative Reasoning sections, spanning approximately 1 hour and 58 minutes. Scores retain validity for 5 years, optimizing opportunities for graduate program pursuits.",

      items: [
        {
          title: "Analytical Writing",

          items: [
            "(30 mins)",
            "Assesses complex idea expression and language proficiency.",
          ],

          image: testexam1,
        },
        {
          title: "Verbal Reasoning",
          items: [
            "(41 mins)",
            "evaluates candidates’ proficiency level with English text and grammar.",
          ],

          image: testexam2,
        },
        {
          title: "Quantitative Reasoning",
          items: [
            "(47 mins)",
            "examines mathematical analysis and application skills",
          ],

          image: testexam3,
        },
      ],
    },
    reasons: [
      {
        title: "Versatility",
        items: ["Accepted by thousands of institutions worldwide"],
        image: ChooseUsImg1,
      },
      {
        title: "Flexibility",
        items: ["Test offered year-round at numerous centers globally"],
        image: ChooseUsImg2,
      },
      {
        title: "Accessibility",
        items: ["Offers both at-home and in-person testing"],
        image: ChooseUsImg3,
      },
      {
        title: "Scholarships",
        items: ["Institutions offer financial aid based on GRE scores"],
        image: ChooseUsImg4,
      },
    ],
    package: [
      {
        id: 7,
        title: "GRE BASICS",
        items: [
          "Batch Size 2-3 students",
          "Personalised Feedback",
          "Doubt solving session",
          "5 Simulation Test",
          "Online/Offline Classes",
        ],
        topColor: "#F59E0B",
        packagePrice: "35000",
        mostpopular: true,
      },
      {
        id: 8,
        title: "GRE ULTIMATE",
        items: [
          "1:1 Classes",
          "Flexible Timing",
          "Personalised Feedback",
          "Doubt solving session",
          "10 Simulation Test",
          "Hybrid Mode Classes",
          "online: Yes",
        ],
        topColor: "#10B981",

        packagePrice: "45000",
      },
    ],
    faq: [
      {
        title: "How do I register for the GRE exam?",
        Desc: (
          <>
            Prospective examinees have the option to enroll for the GRE test via
            the official ETS (Educational Testing Service) website at{" "}
            <a
              style={{ color: "#00999E", cursor: "pointer" }}
              href="https://www.ets.org/gre.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ets.org/gre.html.
            </a>{" "}
          </>
        ),
      },
      {
        title: "What is the cost of the GRE General Test?",
        Desc: "The GRE General Test fee in most areas of the world is $205, which includes up to four score reports for the test taker to send to institutions. Additional score reports can be ordered for $27 per report.",
      },
      {
        title:
          "When will the universities/institutions receive my official GRE scores?",
        Desc: "You can check your unofficial GRE scores on the test day itself (excluding Analytical Writing scores). Official scores will be sent to your designated institutions within 10-15 days after the test, accessible in your My GRE account.",
      },
      {
        title: "Can I cancel my GRE scores?",
        Desc: "After finishing your GRE revised general test, you'll have the choice to report or cancel your scores before the unofficial scores display. Cancelling scores won't be reported to universities or included in your official score report.",
      },
      {
        title:
          "What is the rescheduling and cancelling policy associated with the GRE?",
        Desc: "You can cancel or change your GRE registration up to four days before the test date to avoid forfeiting the fee. Cancelling within this window refunds half of the fee, while changing the date incurs a US$50 charge.",
      },
      {
        title: "How often can I take the GRE exam?",
        Desc: "Test takers can take the GRE exam once every 21 days, up to five times within a continuous rolling 12-month period.",
      },
      {
        title: "For how long will the exam results be valid?",
        Desc: "The exam result will be valid for 5 years after taking the exam.",
      },
      {
        title: "Is the GRE exam an adaptive exam?",
        Desc: "Yes, the GRE exam is adaptive at the section level. It begins with average difficulty questions in Verbal and Quantitative Reasoning, with the difficulty of subsequent sections based on performance.",
      },
      {
        title:
          "What are the ID requirements for taking the GRE revised general test?",
        Desc: "A valid passport is the only ID accepted by the testing centers to allow you to take the GRE.",
      },
      {
        title: "How is scoring done in the GRE?",
        Desc: "The GRE scoring system ranges from 130 to 170 for Verbal Reasoning and Quantitative Reasoning sections, with one-point increments. The Analytical Writing section scores from 0 to 6, in half-point increments.",
      },
    ],
  },
  {
    title: "GMAT",
    path: "/test/gmat",
    image: "/images/gmat.svg",
    info: {
      title: "GMAT",
      content:
        "Unlock your dream business school with GMAT™ Focus Edition. Elevate your academic and career prospects. A strong performance opens doors to top-tier schools and prestigious opportunities.",
      image: testprep1,
      cta: "BOOK YOUR GMAT DEMO",
    },
    features: {
      heading:
        "Experience the streamlined GMAT™ Focus Edition: quicker testing, flexible sections, completed in just 2 hours and 15 minutes. Scores range from 205 to 805, assessing essential skills in Quantitative Reasoning, Verbal Reasoning, and Data Insights.",

      items: [
        {
          title: "Quantitative Reasoning",

          items: [
            "(45 mins)",
            "Tests algebraic and arithmetic skills applied to problem-solving.",
          ],

          image: testexam1,
        },
        {
          title: "Verbal Reasoning",
          items: [
            "(45 mins)",
            "Assesses reading comprehension, critical reasoning, and argument evaluation.",
          ],

          image: testexam2,
        },
        {
          title: "Data Insights",
          items: [
            "(45 mins)",
            "Evaluates data analysis and real-world application, crucial for modern business.",
          ],

          image: testexam3,
        },
      ],
    },
    reasons: [
      {
        title: "Premier Endorsement",
        items: ["Gateway to over 7,700 business schools."],
        image: ChooseUsImg1,
      },
      {
        title: "Widely Accepted",
        items: ["Recognized by business schools globally"],
        image: ChooseUsImg2,
      },
      {
        title: "Scholarship Giveaway",
        items: ["Provides financial aid to top business schools."],
        image: ChooseUsImg3,
      },
      {
        title: "Accessibility",
        items: ["Offers both in-person and online test options"],
        image: ChooseUsImg4,
      },
    ],
    package: [
      {
        id: 1,
        title: "GMAT BASICS",
        items: [
          "Batch Size 2-3 students",
          "Personalised Feedback",
          "Doubt solving session",
          "5 Simulation Test",
          "Online/Offline Classes",
        ],
        topColor: "#F59E0B",
        packagePrice: "35000",
      },
      {
        id: 2,
        title: "GMAT ULTIMATE",
        items: [
          "1:1 Classes",
          "Flexible Timing",
          "Personalised Feedback",
          "Doubt solving session",
          "10 Simulation Test",
          "Hybrid Mode Classes",
        ],
        topColor: "#10B981",
        packagePrice: "45000",
      },
    ],
    faq: [
      {
        title: "What are the GMAT fees in India?",
        Desc: "In India, the fee for GMAT ON-SITE is INR 22,800, while GMAT ONLINE costs INR 24,600. Rescheduling or cancelling your GMAT exam incurs an additional fee.",
      },
      {
        title: "How can I register for the GMAT exam?",
        Desc: (
          <>
            Register for the GMAT exam at{" "}
            <a
              style={{ color: "#00999E", cursor: "pointer" }}
              href="https://www.mba.com/exams/gmat-exam"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.mba.com/exams/gmat-exam.
            </a>{" "}
            Choose your date and location, pay online, and provide personal
            details to finalize registration. Receive a confirmation email with
            test details.
          </>
        ),
      },
      {
        title: "How will the scoring be different on the New GMAT Test?",
        Desc: "The New GMAT Focus Edition will give you one single total score based on three sections. The score range for each section will be from 60 to 90 and the overall score will range from 205 to 805.",
      },
      {
        title: "Select Section Order",
        Desc: "You can answer the three sections in any order, giving you a more personalized testing experience.",
      },
      {
        title: "How soon will I receive my GMAT scores after taking the exam?",
        Desc: "Expect a detailed Official Score Report within 3-5 days* of completing the exam, providing comprehensive performance insights.",
      },
      {
        title: "Is the GMAT Exam gone?",
        Desc: "The previous GMAT exam has been replaced by the updated GMAT Focus Edition, effective February 1, 2024.",
      },
      {
        title: "How many times can I take the GMAT Focus Edition?",
        Desc: "All attempts of the GMAT exam, regardless of edition or administration method, count toward the five attempts allowed within a rolling 12-month period and the total lifetime limit of eight attempts.",
      },
      {
        title:
          "Is the GMAT Exam Focus Edition delivered both online and at test centers?",
        Desc: "Yes, the GMAT Exam Focus Edition will be delivered at both test centres and online.",
      },
      {
        title: "For how long will the exam results be valid?",
        Desc: "The exam result will be valid for 5 years after taking the exam.",
      },
      {
        title: "Is there a score penalty for unanswered questions in GMAT?",
        Desc: "The new version of GMAT penalises unanswered questions. It’s essential to complete all sections of the exam. It’s best not to leave any section of the GMAT incomplete.",
      },
      {
        title: "Does GMAT offer flexible score sending?",
        Desc: "Yes, one can choose schools for free score reports after the exam, enabling focus without immediate score transmission concerns.",
      },
      {
        title: "Is the GMAT Focus an adaptive exam?",
        Desc: "GMAT Focus adjusts difficulty based on responses and allows changing up to three answers per section, reducing stress and promoting confident decision-making.",
      },
    ],
  },
  {
    title: "SAT",
    path: "/test/sat",
    image: "/images/sat.svg",
    info: {
      title: "SAT",
      content:
        "The SAT is your ticket to higher education, unlocking doors to top-tier schools and scholarships, shaping your academic and career journey.",
      image: testprep6,
      cta: "BOOK YOUR SAT DEMO",
    },
    features: {
      heading:
        "The new Digital SAT: a streamlined computer-based format with 2 hours and 14 minutes of testing time. Featuring combined Reading and Writing sections and a separate Math section, each with adaptive & timed modules.",

      items: [
        {
          title: "Reading and Writing",

          items: [
            "(64 mins)",
            "Two 32-minute modules assesses comprehension, vocabulary, analysis across varied text types and rhetorical contexts",
          ],

          image: testexam1,
        },
        {
          title: "Maths",
          items: [
            "(60 mins)",
            "Two 35-minute modules cover algebra, advanced math, problem-solving, data analysis, and geometry concepts",
          ],

          image: testexam2,
        },
      ],
    },
    reasons: [
      {
        title: "Scholarship Opportunities",
        items: ["High scores can lead to financial aid"],
        image: ChooseUsImg1,
      },
      {
        title: "College Admission",
        items: ["Accepted by many colleges globally"],
        image: ChooseUsImg2,
      },
      {
        title: "Flexibility",
        items: ["Offered multiple times a year"],
        image: ChooseUsImg3,
      },
      {
        title: "Standardized Evaluation",
        items: ["Common measure for comparing applicants"],
        image: ChooseUsImg4,
      },
    ],
    package: [
      {
        id: 11,
        title: "SAT BASICS",
        items: [
          "Batch Size 2-3 students",
          "Personalised Feedback",
          "Doubt solving session",
          "5 Simulation Test",
          "Online/Offline Classes",
        ],
        topColor: "#F59E0B",
        packagePrice: "50000",
        mostpopular: true,
      },
      {
        id: 12,
        title: "SAT ULTIMATE",
        items: [
          "1:1 Classes",
          "Flexible Timing",
          "Personalised Feedback",
          "Doubt solving session",
          "10 Simulation Test",
          "Hybrid Mode Classes",
        ],
        topColor: "#10B981",
        packagePrice: "60000",
      },
    ],
    faq: [
      {
        title: "How can I register for the digital SAT?",
        Desc: "Registering for the Digital SAT online via the College Board website is simple, involving determining registration dates, creating an account, filling out the form, selecting a test center and date, uploading a photo, and making payment.",
      },
      {
        title: "What is the registration fees for digital SAT?",
        Desc: "The SAT exam fee for India is $60 (INR 4994.93), with an additional regional fee of $43 (INR 3579.70), totaling $103 (INR 8574.63).",
      },
      {
        title: "What is the structure of the digital SAT?",
        Desc: "The digital SAT will be shorter, with 2 Reading/Writing sections, a 10-minute break, and 2 Math sections. It will also become adaptive, with the difficulty of the second module in each section adjusted based on performance in the first module.",
      },
      {
        title: "How is the Digital SAT scored?",
        Desc: "The SAT score comprises Reading/Writing and Math, each ranging from 200-800, totaling 400-1600. A perfect score is 1600, with around 1000 being average. Guessing is penalty-free, so answer all questions.",
      },
      {
        title: "What does it mean that the SAT is an “adaptive” test?",
        Desc: "The digital SAT test now takes about two hours instead of three by employing adaptive testing. Difficulty in the second modules of Reading/Writing and Math adjusts based on performance in the first modules.",
      },
      {
        title: "What are the overall features of the SAT Digital?",
        Desc: "Students can flag uncertain questions but can't revisit completed sections. On-screen timer aids time management. On-screen calculator provided for math section.Digital format ensures quicker SAT result access. Basic maths formulas cheat sheet provided with the test.",
      },
      {
        title: "How soon will I receive my SAT scores after taking the test?",
        Desc: "New digital SAT promises quicker score delivery, with results available within days instead of weeks, minimizing overall waiting time.",
      },
      {
        title: "What should I bring on test day?",
        Desc: "On test day, students should bring an acceptable photo ID, their admission ticket, No. 2 pencils, an approved calculator for the Math section, and snacks.",
      },
      {
        title:
          "Will students still be able to use scratch paper and write things down while taking the exam?",
        Desc: "Yes, testing centers should still have scratch paper available and students can bring in pens and pencils to write with.",
      },
      {
        title: "Will the digital SAT have an essay?",
        Desc: "No, students will not have to write an essay on the digital SAT.",
      },
      {
        title: "Where can you take the digital SAT?",
        Desc: "Digital SAT can be taken at a school or test centre with a proctor present; there's no at-home option.",
      },
      {
        title:
          "Are Calculators allowed on the maths section of the Digital SAT?",
        Desc: "Digital SAT permits calculator use throughout the maths section. You can opt for your approved calculator or utilise the onscreen graphing calculator within the testing app.",
      },
      {
        title: "How many times SAT is conducted in a year?",
        Desc: "Students can take the SAT exam as many times as they wish since there are no restrictions set by the College Board. In India, the SAT is administered seven times a year, typically in March, May, June, August, October, and December.",
      },
      {
        title: "Can the SAT digital date be rescheduled?",
        Desc: "The College Board allows applicants to sit for the SAT seven times a year and offers the option to reschedule the exam day for a fee of $29.",
      },
      {
        title: "Can one cancel the SAT digital exam?",
        Desc: "Applicants can cancel SAT test registration anytime. If cancelled five days before the test, they get a $10 refund; otherwise, no refund is issued.",
      },
    ],
  },
];
