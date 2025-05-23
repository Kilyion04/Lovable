
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  // Configurez les classes en fonction de la direction
  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-16";
      case "down":
        return "-translate-y-16";
      case "left":
        return "translate-x-16";
      case "right":
        return "-translate-x-16";
      case "none":
        return "scale-95";
      default:
        return "translate-y-16";
    }
  };

  const animationStyle = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 transform-none"
          : `opacity-0 ${getDirectionClasses()}`,
        className
      )}
      style={animationStyle}
    >
      {children}
    </div>
  );
}
