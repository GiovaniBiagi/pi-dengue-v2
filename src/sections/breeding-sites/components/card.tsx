import Image from "next/image";

export type CardProps = {
  title: string;
  image: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ title, image, ...props }: CardProps) => {
  return (
    <article
      className="bg-red-500 rounded-lg w-full min-h-32 p-4 flex justify-between items-center relative"
      {...props}
    >
      <div className="max-w-[75%] lg:max-w-[45%]">
        <p className="text-white text-xl font-bold">{title}</p>
      </div>
      <Image
        src={image}
        alt={title}
        width={64}
        height={64}
        className="absolute -top-4 right-4 lg:w-24 lg:h-w-24"
      />
    </article>
  );
};