import { HugeiconsIcon } from "@hugeicons/react"
import { Menu09Icon } from "@hugeicons/core-free-icons"
import { Button } from "../ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const authorInformationMenuContent = [
  {
    title: "Initial Submission Instructions",
    href: "/author-informations/initial-submission-instructions",
  },
  {
    title: "Revised Submission Instructions",
    href: "/author-informations/revised-submission-instructions",
  },
  {
    title: "Final-Camera Ready Instructions",
    href: "/author-informations/final-camera-ready-instructions",
  },
  {
    title: "Presentation Instructions",
    href: "/author-informations/presentation-instructions",
  },
  {
    title: "Paper Upload FAQs",
    href: "/author-informations/paper-upload-faqs",
  },
]

const mainLinks = [
  { title: "Venue", href: "/venue" },
  { title: "Committee", href: "/committee" },
  { title: "Registration Fees", href: "/registrations" },
  { title: "Our Partners", href: "/our-partners" },
  { title: "FAQs", href: "/faq" },
  { title: "Gallery", href: "/gallery" },
]

export default function MobileNavigation() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="focus-visible:ring-0">
          <HugeiconsIcon
            icon={Menu09Icon}
            size={24}
            className="shrink-0 text-red-950"
            color="currentColor"
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-72 p-4">
        <nav className="flex flex-col gap-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="author-info" className="border-none">
              <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline">
                Author Information
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1 pt-1 pl-4">
                  {authorInformationMenuContent.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col gap-1 border-t pt-2">
            {mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block border-b py-3 text-sm font-medium transition-colors last:border-none hover:text-primary"
              >
                {link.title}
              </a>
            ))}
          </div>
        </nav>
      </PopoverContent>
    </Popover>
  )
}
