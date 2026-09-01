import { HugeiconsIcon } from "@hugeicons/react"
import { Menu09Icon } from "@hugeicons/core-free-icons"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const authorInformationMenuContent = [
  {
    title: "Initial Submission Instructions",
    href: "/author-informations/initial-submission-instructions",
    description: "Find out more about how you can submit your manuscript",
  },
  {
    title: "Revised Submission Instructions",
    href: "/author-informations/revised-submission-instructions",
    description: "Find out more about how you can submit your manuscript after your initial submission",
  },
  {
    title: "Final-Camera Ready Instructions",
    href: "/author-informations/final-camera-ready-instructions",
    description: "Find out more about how you can submit your manuscript after your initial submission",
  },
  {
    title: "Presentation Instructions",
    href: "/author-informations/presentation-instructions",
    description: "Find out more about the presentation process and any common issues you may encounter",
  },
  {
    title: "Paper Upload FAQs",
    href: "/author-informations/paper-upload-faqs",
    description: "Find out more about the paper upload process and any common issues you may encounter",
  },
  {
    title: "Poster Submission Guidelines",
    href: "/author-informations/poster-submission",
    description: "Find out more about the poster upload process and any common issues you may encounter",
  },
]

const travelMenuContent = [
  {
    title: "Venue & Accomodations",
    href: "/venue",
    description: "Explore event location details and find recommended places to stay during your trip.",
  },
  {
    title: "Visa",
    href: "/visa",
    description: "Review travel requirements and find guidelines for submitting your application.",
  },
]

const programMenuContent = [
  {
    title: "Speakers",
    href: "/speakers",
    description: "Discover the keynote speakers, industry experts, and panelists presenting at the event.",
  },
  {
    title: "Program at a Glance",
    href: "/program-overview",
    description: "Get a quick overview of the event schedule, session topics, and daily activities.",
  },
]

const singleLinks = [
  { title: "Committee", href: "/committee" },
  { title: "Registration Fees", href: "/registrations" },
  { title: "Our Partners", href: "/our-partners" },
  { title: "FAQs", href: "/faq" },
]

export default function MobileNavigation() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="focus-visible:ring-0">
          <HugeiconsIcon icon={Menu09Icon} size={24} className="shrink-0 text-red-950" color="currentColor" />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="max-h-[85vh] w-80 overflow-y-auto p-4">
        <nav className="flex flex-col gap-1">
          <a href="/" className="block py-2 text-sm font-medium transition-colors hover:text-primary">
            Home
          </a>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="author-info" className="border-none">
              <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">Author Information</AccordionTrigger>
              <AccordionContent>
                <div className="ml-2 flex flex-col gap-3 border-l-2 border-muted pt-1 pl-3">
                  {authorInformationMenuContent.map((item) => (
                    <a key={item.href} href={item.href} className="group flex flex-col gap-0.5 transition-colors">
                      {item.title}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="travel" className="border-none">
              <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">Travel</AccordionTrigger>
              <AccordionContent>
                <div className="ml-2 flex flex-col gap-3 border-l-2 border-muted pt-1 pl-3">
                  {travelMenuContent.map((item) => (
                    <a key={item.href} href={item.href} className="group flex flex-col gap-0.5 transition-colors">
                      {item.title}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="program" className="border-none">
              <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">Program</AccordionTrigger>
              <AccordionContent>
                <div className="ml-2 flex flex-col gap-3 border-l-2 border-muted pt-1 pl-3">
                  {programMenuContent.map((item) => (
                    <a key={item.href} href={item.href} className="group flex flex-col gap-0.5 transition-colors">
                      {item.title}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col gap-1 pt-2">
            {singleLinks.map((link) => (
              <a key={link.href} href={link.href} className="block py-2 text-sm font-medium transition-colors hover:text-primary">
                {link.title}
              </a>
            ))}
          </div>
        </nav>
      </PopoverContent>
    </Popover>
  )
}
