import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

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
]

export default function DesktopNavigation() {
  return (
    <NavigationMenu className="bg-white p-2 px-4">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/">Home</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Author Information</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-120">
              {authorInformationMenuContent.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Travel</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-120">
              <ListItem href="/venue" title="Venue & Accomodations">
                Explore event location details and find recommended places to stay during your trip.
              </ListItem>
              <ListItem href="/visa" title="Visa">
                Review travel requirements and find guidelines for submitting your application.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Program</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-120">
              <ListItem href="/speakers" title="Speakers">
                Discover the keynote speakers, industry experts, and panelists presenting at the event.
              </ListItem>
              <ListItem href="/program-overview" title="Program at a Glance">
                Get a quick overview of the event schedule, session topics, and daily activities.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/committee">Committee</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/registrations">Registration Fees</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/our-partners">Our Partners</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/faq">FAQs</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
