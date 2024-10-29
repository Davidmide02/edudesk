
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/react";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
      question: "Can parents pay school fees into the website?",
      answer:
        "Currently, the platform does not support fee collection. However, you can manage and track school fees by entering the income manually.",
    },
    {
      question: "Can I edit payment details after setting them up?",
      answer:
        "Yes, you can easily modify employee payment details and schedules whenever needed.",
    },
    {
      question: "How easy is it to set up EduDesks?",
      answer:
        "Very easy! EduDesks has a simple setup process, with guided steps to get you up and running fast.",
    },
    {
      question: "What happens if the wallet runs out of funds?",
      answer:
        "If your wallet runs low, you will be notified, and you can quickly top it up to continue making payments without interruption.",
    },
    {
      question: "How do I pay staff salaries?",
      answer:
        "You can pay staff salaries directly from the platform by funding your wallet, entering employee details, or directly from their profile.",
    },
    {
      question: "Can I track income and expenses?",
      answer:
        "Absolutely! EduDesks lets you easily track and categorize income and expenses, making budgeting simple.",
    },
  ];


  const FqaSection = ()=>{
    return(
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Frequently asked questions
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure key={faq.question} as="div" className="pt-6">
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusSmallIcon
                            aria-hidden="true"
                            className="h-6 w-6 group-data-[open]:hidden"
                          />
                          <MinusSmallIcon
                            aria-hidden="true"
                            className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-left text-gray-600">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div> 
    )
  }
  export default FqaSection;