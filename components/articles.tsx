"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { articlesData } from "@/lib/data";
import Project from "./article";
import { useSectionInView } from "@/lib/hooks";
import Article from "./article";

export default function Articles() {
  const { ref } = useSectionInView("Articles", 0.5);

  return (
    <section ref={ref} id="articles" className="scroll-mt-28 mb-28">
      <SectionHeading>My articles</SectionHeading>
      <div>
        {articlesData.map((article, index) => (
          <React.Fragment key={index}>
            <Article {...article} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
