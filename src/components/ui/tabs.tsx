
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

// Create a context to track tab positions
const TabsPositionContext = React.createContext<{
  registerTabPosition: (id: string, left: number, width: number) => void;
}>({
  registerTabPosition: () => {},
})

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Track positions of tabs
  const [tabPositions, setTabPositions] = React.useState<Record<string, {left: number, width: number}>>({})
  
  const registerTabPosition = React.useCallback((id: string, left: number, width: number) => {
    setTabPositions(prev => ({
      ...prev,
      [id]: { left, width }
    }))
  }, [])
  
  // Set CSS variables for animation when value changes
  React.useEffect(() => {
    if (props.value && tabPositions[props.value]) {
      document.documentElement.style.setProperty(
        `--tabs-trigger-${props.value}-left`, 
        `${tabPositions[props.value].left}px`
      )
      document.documentElement.style.setProperty(
        `--tabs-trigger-${props.value}-width`, 
        `${tabPositions[props.value].width}px`
      )
    }
  }, [props.value, tabPositions])
  
  return (
    <TabsPositionContext.Provider value={{ registerTabPosition }}>
      <TabsPrimitive.Root
        ref={ref}
        className={cn(className)}
        {...props}
      />
    </TabsPositionContext.Provider>
  )
})
Tabs.displayName = TabsPrimitive.Root.displayName

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
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const { registerTabPosition } = React.useContext(TabsPositionContext)
  
  // Store the position of this trigger for animation
  React.useEffect(() => {
    if (triggerRef.current && props.value && typeof props.value === 'string') {
      const parentList = triggerRef.current.closest('[role="tablist"]');
      if (parentList) {
        // Get position relative to the parent TabsList
        const parentRect = parentList.getBoundingClientRect();
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const left = triggerRect.left - parentRect.left;
        const width = triggerRect.width;
        
        // Register this tab's position
        registerTabPosition(props.value, left, width);
      }
    }
  }, [props.value, registerTabPosition]);
  
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
