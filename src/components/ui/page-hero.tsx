"use client";
import React from "react";
import {ChildMotion, FadeMotion, WrapperMotion} from "./wrapper-motion";
import WrapperContent from "./wrapper-content";
import {cn} from "@/libs/utils";
import Button from "./button";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Shape001 from "@/assets/shape-001";

interface PageHeroType {
  className?: string;
  children?: React.ReactNode;
}

// ====================== page hero ======================

const PageHero = ({className, children}: PageHeroType) => {
  return (
    <WrapperMotion>
      <section className="relative overflow-hidden">
        <WrapperContent
          className={cn(
            "grid grid-cols-1 gap-20 lg:grid-cols-2 items-center relative z-2",
            className,
          )}
        >
          {children}
        </WrapperContent>
        <FadeMotion>
          <Shape001 className="absolute top-1/2 -translate-y-1/2" />
        </FadeMotion>
      </section>
    </WrapperMotion>
  );
};

// ====================== Content Text Hero ======================

const ContentTextHero = ({className, children}: PageHeroType) => {
  return (
    <div className={cn("flex flex-col gap-5 items-start", className)}>
      {children}
    </div>
  );
};

// ====================== title Hero ======================

const TitleHero = ({className, children}: PageHeroType) => {
  return (
    <ChildMotion>
      <h2
        className={cn(
          "text-[54px] lg:text-[76px] font-bold leading-[115%]",
          className,
        )}
      >
        {children}
      </h2>
    </ChildMotion>
  );
};

// ====================== sub title Hero ======================

const SubTitleHero = ({className, children}: PageHeroType) => {
  return (
    <ChildMotion>
      <p
        className={cn(
          "font-semibold text-[20px] md:text-[24px] leading-[115%]",
          className,
        )}
      >
        {children}
      </p>
    </ChildMotion>
  );
};

interface ActionHeroType extends PageHeroType {
  link?: string;
}

// ====================== Action Hero ======================

const ActionHero = ({className, children, link}: ActionHeroType) => {
  const router = useRouter();
  return (
    <ChildMotion>
      <Button
        onClick={() => router.push(`${link}`)}
        size="lg"
        className={cn(className)}
      >
        {children}
      </Button>
    </ChildMotion>
  );
};

interface ContentImageHeroType extends PageHeroType {
  src: string;
  alt: string;
}

const ContentImageHero = ({className, src, alt}: ContentImageHeroType) => {
  return (
    <ChildMotion>
      <div className={cn("relative aspect-square", className)}>
        <Image src={src} alt={alt} fill priority />
      </div>
    </ChildMotion>
  );
};

export {
  PageHero,
  ContentTextHero,
  TitleHero,
  SubTitleHero,
  ActionHero,
  ContentImageHero,
};
