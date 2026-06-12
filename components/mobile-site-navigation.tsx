"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { navigation, siteConfig } from "@/lib/site"

function MobileSidebarContent() {
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()

  return (
    <>
      <Sidebar side="right" className="border-l border-sidebar-border">
        <SidebarHeader className="border-b border-sidebar-border p-5">
          <div className="flex min-h-12 items-center">
            <Image
              src="/so.webp"
              alt=""
              width={20}
              height={20}
              className="mr-2 size-5"
            />
            <span className="font-semibold tracking-[-0.04em]">
              {siteConfig.name}
            </span>
          </div>
          <p className="label mt-5 text-sidebar-foreground/50">
            Navigation Index
          </p>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="p-3">
            <SidebarGroupLabel className="rounded-none px-3">
              Operating Profiles
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {navigation.map((item, index) => {
                  const isBookLink = item.href === "/#book"
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : !isBookLink && pathname === item.href

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="h-12 rounded-none border-b border-sidebar-border px-3 text-xs tracking-[0.12em] uppercase hover:bg-signal hover:text-white data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpenMobile(false)}
                        >
                          <span className="font-mono text-[0.6rem] opacity-45">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter className="p-5">
          <Link
            href="/learn-how"
            onClick={() => setOpenMobile(false)}
            className="flex items-center justify-between border border-sidebar-border p-4 text-xs tracking-[0.12em] uppercase transition-colors hover:bg-sidebar-foreground hover:text-sidebar"
          >
            Learn How
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          <p className="mt-3 text-xs leading-5 text-sidebar-foreground/45">
            Private AI Systems for Real Business Work.
          </p>
        </SidebarFooter>
      </Sidebar>
      <SidebarTrigger className="size-16 rounded-none border-l border-foreground/15 hover:bg-foreground hover:text-background" />
    </>
  )
}

export function MobileSiteNavigation() {
  return (
    <div className="ml-auto md:hidden">
      <SidebarProvider
        defaultOpen={false}
        className="min-h-0 w-auto min-w-0 bg-transparent"
      >
        <MobileSidebarContent />
      </SidebarProvider>
    </div>
  )
}
