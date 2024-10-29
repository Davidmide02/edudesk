// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import HeaderComponent from "./components/header";
import dashboard from "./assets/dashbaord.svg";
import stat from "./assets/stat.svg";

import expense from "./assets/expense.svg";
import effortless from "./assets/effortless.svg";
import effort from "./assets/effort.svg";
import monitor from "./assets/monitor.svg";
import outstanding from "./assets/outstanding.svg";
import avatar from "./assets/Avatar group.svg";
import FqaSection from "./components/fqa";
import Wrapper from "./components/section";
import TakeSection from "./components/takecontrol";
import Footer from "./components/footer";
import TrustSection from "./components/trustsectiom";

const cardStat = [effortless, expense, effortless];
const cardStatDash = [effort, monitor];
// const priceInfo = [
//   {
//     title: "Monthly plan",
//     desc: "Perfect for small school or short-term needs.",
//     amount: "5000",
//     duration: "Per month",
//   },
//   {
//     title: "Quarterly plan",
//     desc: "Opt for termly billing to save more.",
//     amount: "30000",
//     duration: "Quarterly",
//   },
//   {
//     title: "Yearly plan",
//     desc: "Our best value for schools looking for long term solutions.",
//     amount: "60000",
//     duration: "Per year",
//   },
// ];

const steps = [
  {
    number: 1,
    title: "Set Up Your Account",
    description:
      "Quickly sign up, input your school’s basic details and pay subscription to get started with our financial management tool",
  },
  {
    number: 2,
    title: "Profile Setup",
    description:
      "Complete additional profile information, such as uploading a school logo, inputting basic details and school fees details.",
  },
  {
    number: 3,
    title: "Add Necessary Details",
    description:
      "Enter student information, class information and staff information; including payment schedules and bank details.",
  },
  {
    number: 4,
    title: "Fund Your Wallet",
    description:
      "Deposit the necessary funds into the secure platform wallet to cover salary payments.",
  },
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className="fixed w-full z-10 bg-[#DDE4F2] top-0">
        <div className="upperheader text-[#4B8BBE] p-2 text-center text-sm">
          Buy Now And Save 20% Off Plan
          <a href="#" className="text-[#0b162d] underline">
            See Plans And Pricing
          </a>
        </div>
        <div className="nav relative">
          <HeaderComponent />
        </div>
      </header>

      <main className="mt-40 px-10">
        <div className="relative isolate overflow-hidden bg-gray-900 pt-2 rounded-md">
          <div className="max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl pt-10 pb-0 sm:pt-48 lg:pt-20">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  Start Managing Your School Finances Today
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl lg:text-[3.2rem] font-semibold tracking-tight text-white sm:text-7xl">
                  Simplify School Finances With Our All-In-One Management
                  Platform.
                </h1>
                <p className="mt-8 text-pretty lg:text-2xl text-center text-lg font-thin text-white sm:text-xl/8 px-10">
                  Gain full control over income and expenses processes - all
                  from one seamless plaform designed for schools
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 mb-4">
                  <button className="textr-[#002F49] bg-white px-4 py-1.5 rounded-full">
                    Start 30 days free trial
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
              <div className="img mt-10">
                <img src={dashboard} alt="dash" />
              </div>
            </div>
          </div>
        </div>

        {/* <section className="trust-group p-4 mt-6"></section> */}
        <section className="trust-group p-4 mt-6">
          <TrustSection />
        </section>

        <Wrapper>
          <div className="flex justify-between items-center flex-wrap px-6">
            <div className="text-center md:text-left md:w-[35%] mb-10 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">
                Manage School Finances More Efficiently With Edudesks
              </h2>
              <p>
                EduDesks is your comprehensive solution for seamless school
                financial management. Design to simplify budgeting, tracking
                expenses, and managing payments, with features like automated
                fee collection, detailed financial reports, and real time
                analytics, you can gain better control over your institution's
                finances
              </p>
            </div>
            <div className="md:w-[30%]">
              <img src={stat} alt="stat" />
            </div>
          </div>
        </Wrapper>

        <Wrapper>
          <div className="center flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:w-[58%] text-[#4B8BBE] text-center font-semibold">
              Comprehensive Features To Manage Your School's Finances
            </h1>
            <p className="md:w-[35%] mt-10">
              Streamline Your School's Financial Operations By Efficiently
              Managing Salary Payments And Expenses.
            </p>
          </div>
          <div className="img mt-10">
            <div className="three grid md:grid-cols-3 gap-x-2 gap-y-2 md:gap-y-0 grid-cols-1">
              {cardStat.map((card) => (
                <img src={card} />
              ))}
            </div>
            <div className="two grid md:grid-cols-2 grid-cols-1 gap-y-2 md:gap-y-0 gap-x-2 mt-5">
              {cardStatDash.map((card) => (
                <img src={card} />
              ))}
            </div>
          </div>
        </Wrapper>

        <Wrapper>
          <div className="flex justify-between items-center flex-wrap px-6">
            <div className="md:w-[30%]">
              <img src={outstanding} alt="stat" />
            </div>
            <div className="text-left md:w-[35%]">
              <h2 className="text-2xl font-semibold mb-4">
                Effortless Salary Payments Made Simple
              </h2>
              <p>
                Streamline your school's payroll process with our secure wallet
                system that allows for quick and easy salary payments. With just
                a few clicks, you can reduce administrative workload, eliminate
                errors, and ensure that your staff are paid accurately and on
                time, allowing you to focus more on what truly matters educating
                and supporting your students
              </p>
            </div>
          </div>
        </Wrapper>
        <section className="features mt-10 pt-40">
          <div className="center flex flex-col justify-center items-center">
            <h1 className="text-4xl md:w-[55%] text-[#4B8BBE]">
              Affordable Plans For School's Needs
            </h1>
            <p className="md:w-[35%] mt-10">
              Choose The Best Plan for your School's Need And Budget
            </p>
          </div>
          {/* card */}

          <div className="card-continer-price grid grid-cols-1 md:grid-cols-3 text-left mt-10 gap-y-4 md:gap-y-0">
            <div className="bg-white text-black p-6 rounded-lg w-72 shadow-lg">
              <h3 className="text-xl font-semibold">Monthly plan</h3>
              <p className="text-sm mt-2 w-[90%]">
                Perfect for small school or short-term needs
              </p>
              <p className="text-xl font-bold my-4">
                ₦ 5000
                <span className="ml-1.5 text-xs">Per month</span>
              </p>
              <button className="bg-[#0a2b47] hover:bg-[#09233c] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                Start 30 days free trial →
              </button>
            </div>
            {/* {priceInfo.map((info) => (
              <div className="bg-white text-black p-6 rounded-lg w-72 shadow-lg">
                <h3 className="text-xl font-semibold">{info.title}</h3>
                <p className="text-sm mt-2 w-[90%]">{info.desc}</p>
                <p className="text-lg font-bold my-4">
                  ₦ {info.amount}
                  <span className="ml-1.5 text-xs">{info.duration}</span>
                </p>
                <p className="bg-white text-[#0f3555] px-3 py-1 rounded-full text-sm font-medium mb-6 inline-block">
                  Save 20% a year
                </p>
                <button className="bg-[#0a2b47] hover:bg-[#09233c] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                  Start 30 days free trial →
                </button>
              </div>
            ))} */}

            <div className="bg-[#0f3555] text-white  rounded-lg w-72 text-left shadow-lg">
              <div className="top p-6">
                <h3 className="text-xl font-semibold">Quarterly plan</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Opt for termly billing to save more.
                </p>
                <p className="text-xl font-bold my-4">
                  ₦ 30000
                  <span className="ml-1.5 text-xs">Quarterly</span>
                </p>
              </div>
              <div className="sub bg-[#DDE4F2] rounded-t-full text-center p-2">
                <p className="bg-white text-[#0f3555] px-3 py-1 rounded-full text-sm font-medium mb-6 inline-block">
                  Save 20% a year
                </p>
                <button className="bg-[#0a2b47] hover:bg-[#09233c] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                  Start 30 days free trial →
                </button>
              </div>
            </div>

            <div className="bg-white text-black p-6 rounded-lg w-72 shadow-lg">
              <h3 className="text-xl font-semibold">Yearly plan</h3>
              <p className="text-sm mt-2 w-[90%]">
                Our best value for schools looking for long term solutions
              </p>
              <p className="text-xl font-bold my-4">
                ₦ 60000
                <span className="ml-1.5 text-xs">Per year</span>
              </p>
              <button className="bg-[#0a2b47] hover:bg-[#09233c] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                Start 30 days free trial →
              </button>
            </div>
          </div>
        </section>

        {/* how it works section */}
        <section className="features mt-10 pt-40">
          <div className="center flex flex-col justify-center items-center">
            <h1 className="text-4xl md:w-[55%] text-[#4B8BBE] text-center">
              How it Works
            </h1>
            <p className="mt-10">
              Manage Your School's income And Expenses in just A Few Simple
              Steps
            </p>
          </div>
          {/*  number*/}
          {/* <div className="bg-[#e7edf5] p-8 rounded-lg"> */}

          <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center mt-10">
            {steps.map((step) => (
              <div key={step.number} className="text-left max-w-xs">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    step.number % 2 === 0 ? "bg-[#5993c2]" : "bg-[#0f3555]"
                  } text-white font-semibold mb-4`}
                >
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm w-[70%]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          {/* </div> */}
        </section>

        <Wrapper>
          <div className="container flex justify-between flex-wrap items-center">
            <FqaSection />
            <div className="card mt-10 flex flex-col items-center justify-center">
              <div className="bg-[#002F49] text-white p-6 rounded-lg w-72 shadow-lg">
                <div className="img flex flex-col justify-center items-center">
                  <img src={avatar} alt="img" />
                </div>
                <p className="font-semibold mt-2 w-[90%]">
                  Still have questions
                </p>
                <p className="my-4">
                  Can't find the answer you're looking for? Please chat our
                  friendly team
                </p>
                <button className="text-[#0a2b47] hover:bg-[#d1e0ef] bg-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
                  Get in touch →
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </main>
      <footer>
        <Wrapper>
          <TakeSection />
          <Footer />
        </Wrapper>
      </footer>
    </>
  );
}

export default App;
