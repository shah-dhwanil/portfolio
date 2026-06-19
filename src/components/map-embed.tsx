interface MapEmbedProps {
  src: string;
}

export function MapEmbed({ src }: MapEmbedProps) {
  return (
    <section className="relative h-[250px] w-full rounded-[16px] mb-[30px] border border-border overflow-hidden md:h-[380px] md:rounded-[18px]">
      <figure className="h-full">
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1) invert(1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location map"
        />
      </figure>
    </section>
  );
}
