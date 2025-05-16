
import * as React from "react";
import { cn } from "@/lib/utils";

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-border md:before:mx-auto md:before:translate-x-0", className)}
    {...props}
  />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative flex gap-6 pb-8 md:gap-10 md:pb-10 md:even:flex-row-reverse", className)}
    {...props}
  />
));
TimelineItem.displayName = "TimelineItem";

const TimelineItemTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold text-foreground mb-2", className)}
    {...props}
  />
));
TimelineItemTitle.displayName = "TimelineItemTitle";

const TimelineItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col flex-1 gap-1 rounded-lg border bg-card p-4 shadow-sm", className)}
    {...props}
  />
));
TimelineItemContent.displayName = "TimelineItemContent";

const TimelineItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute left-0 top-5 flex h-10 w-10 -translate-x-1/3 items-center justify-center rounded-full border shadow-sm bg-background md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2", className)}
    {...props}
  />
));
TimelineItemIndicator.displayName = "TimelineItemIndicator";

export {
  Timeline,
  TimelineItem,
  TimelineItemTitle,
  TimelineItemContent,
  TimelineItemIndicator
};
