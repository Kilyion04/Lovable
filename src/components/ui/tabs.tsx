
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground relative",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  // Get access to the parent Tabs context
  const tabsContext = TabsPrimitive.useRootContext()
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  
  // Store the position of this trigger for animation
  React.useEffect(() => {
    if (triggerRef.current && props.value && typeof props.value === 'string') {
      // Store this element's position for animations
      document.documentElement.style.setProperty(
        `--tabs-trigger-${props.value}-left`, 
        `${triggerRef.current.offsetLeft}px`
      )
      document.documentElement.style.setProperty(
        `--tabs-trigger-${props.value}-width`, 
        `${triggerRef.current.offsetWidth}px`
      )
    }
  }, [props.value, tabsContext.orientation])
  
  return (
    <TabsPrimitive.Trigger
      ref={(node) => {
        // Handle both refs
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
        triggerRef.current = node
      }}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative z-10",
        "data-[state=active]:text-foreground",
        "group",
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-elastic-x origin-left",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

