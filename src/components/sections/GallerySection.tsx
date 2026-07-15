import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Norway in Pictures"
          description="Explore a visual collection of Norway’s places, natural landscapes, cultural traditions, historical figures and football identity."
          className="[&_h2]:text-white [&_p:last-child]:text-slate-300"
        />

        <GalleryGrid />
      </Container>
    </section>
  );
}
