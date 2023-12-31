"use client";

import { featuredProjectsList } from "@/constants";
import GetInTouchCard from "@/app/components/homepage-components/GetInTouchCard";

import {
  CaseStudyHeader,
  CaseStudyTechStack,
} from "@/app/components/case-studies-components/index";
interface CaseStudyProps {
  params: {
    details: string;
  };
}

const CaseStudy = ({ params }: CaseStudyProps) => {
  const mainProject = featuredProjectsList.find(
    (project) => project.caseStudyLink === params.details
  );

  return (
    <main className="flex w-full flex-col items-center overflow-hidden bg-white800 dark:bg-black300">
      <CaseStudyHeader mainProject={mainProject} />
      <CaseStudyTechStack mainProject={mainProject} />
      <GetInTouchCard />
    </main>
  );
};

export default CaseStudy;
