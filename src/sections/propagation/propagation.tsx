"use server";

import { getDengueData } from "@/services/dengue";
import { PropagationChart } from "./components/propagation-chart";
import { format, compareAsc } from "date-fns";
import { ToastContainer } from "react-toastify";

export const PropagationSection = async () => {
  const response = await getDengueData();

  if (!response.data) {
    return <div>Erro ao carregar dados</div>;
  }

  const data = response.data
    .sort(
      (
        a: { data_iniSE: string | number | Date },
        b: { data_iniSE: string | number | Date }
      ) => compareAsc(new Date(a.data_iniSE), new Date(b.data_iniSE))
    )
    .map((data: { data_iniSE: string; casos: number }) => ({
      date: format(data.data_iniSE, "dd/MM/yyyy"),
      value: data.casos,
    }));

  return (
    <section className="p-4" id="propagation-data">
      <ToastContainer />
      <h2 className="mb-4 text-2xl font-bold">Situação da dengue na cidade</h2>
      <PropagationChart data={data} />;
    </section>
  );
};

export default PropagationSection;
