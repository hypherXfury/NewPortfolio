import {
  CompanyExperienceCard,
  OpensourceExperienceCard,
} from "@/app/components/CompanyExperienceCard";
import { Section } from "@/app/components/Section";
import { AnnotatedText } from "../components/AnnotatedText ";

export default function Experience() {
  return (
    <Section id="experience" className="my-20">
      <AnnotatedText variant="doubleUnderline" color="text-rose-300">

      <h2 className="font-serif text-3xl text-neutral-900">Work Experience</h2>
      </AnnotatedText>

      <CompanyExperienceCard />
      <OpensourceExperienceCard />
    </Section>
  );
}
