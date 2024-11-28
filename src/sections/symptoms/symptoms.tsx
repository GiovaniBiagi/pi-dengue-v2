import { symptoms } from "./constants";

export const SymptomsSection = () => {
  return (
    <section className="p-4" id="symptoms">
      <h2 className="mb-4 text-2xl font-bold">Os sintomas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {symptoms.map((symptom) => (
          <article key={symptom.id} className="border rounded-lg flex gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={symptom.image}
              alt={`Sintomas de` ${symptom.title}}
              className="w-44 object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{symptom.title}</h3>
              <ul className="list-disc">
                {symptom.redSymptoms.map((redSymptom) => (
                  <li key={redSymptom} className="text-red-500">
                    {redSymptom}
                  </li>
                ))}
              </ul>
              <ul className="list-disc">
                {symptom.blueSymptoms.map((blueSymptom) => (
                  <li key={blueSymptom} className="text-blue-700">
                    {blueSymptom}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};