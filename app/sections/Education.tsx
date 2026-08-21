type Study = {
  id: string;
  qualification: string;
  institution: string;
  meta: string;
};

const studies: Study[] = [
  {
    id: "btech",
    qualification: "B.Tech, Computer Science",
    institution: "LNCT College, Bhopal",
    meta: "08.2022—06.2026 · GPA 7.88/10",
  },
  {
    id: "isc",
    qualification: "ISC — Class 12",
    institution: "Christukula Mission Higher Secondary School, Satna",
    meta: "03.2020—05.2021 · 85.80%",
  },
  {
    id: "icse",
    qualification: "ICSE — Class 10",
    institution: "Christukula Mission Higher Secondary School, Satna",
    meta: "03.2018—05.2019 · 85.67%",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-block scroll-mt-20">
      <h2 className="font-serif text-4xl tracking-tight text-neutral-950">
        Education
      </h2>

      <ul className="mt-12 divide-y divide-dashed divide-neutral-200 border-y border-dashed border-neutral-200">
        {studies.map((study) => (
          <li key={study.id} className="py-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-sm font-medium text-neutral-950">
                {study.qualification}
              </p>
              <p className="text-xs text-neutral-400">{study.meta}</p>
            </div>
            <p className="mt-1 text-sm text-neutral-600">{study.institution}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
