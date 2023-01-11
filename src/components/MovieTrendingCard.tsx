type Props = {
  urlImage: string;
  titleMovie: string;
  numberList: number;
  views: number;
};

export function MovieTrendingCard({
  numberList,
  titleMovie,
  urlImage,
  views,
}: Props): JSX.Element {
  return (
    <section className="grid grid-cols-1 grid-rows-[1fr_220px] p-4">
      <figure className="col-span-full row-span-full">
        <img
          src={`${import.meta.env.PUBLIC_MDB_IMAGE}/original${urlImage}`}
          alt={titleMovie}
          className="w-full h-full object-cover"
        />
      </figure>
      <section className="row-start-[-2] row-end-[-1] col-span-full">
        <p className="text-4xl font-title">0{numberList}</p>
        <h4 className="text-2xl font-sans font-bold">{titleMovie}</h4>
        <p>{views} vistas</p>
      </section>
    </section>
  );
}
