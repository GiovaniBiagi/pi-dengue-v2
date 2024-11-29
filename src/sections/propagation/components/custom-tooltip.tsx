import { type TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

export const CustomTooltip = <V extends ValueType, T extends NameType>({
  active,
  payload,
  label,
}: TooltipProps<V, T>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-red-200">
        <p className="label">{`Data: ${label}`}</p>
        <p className="label text-blue-500">{`Casos confirmados: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
