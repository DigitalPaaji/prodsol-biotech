import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Bath,
  Beaker,
  Boxes,
  Check,
  Factory,
  Flower2,
  Footprints,
  Gem,
  Hand,
  Heart,
  HeartHandshake,
  Hotel,
  Leaf,
  PackageCheck,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  User,
  Waves,
} from "lucide-react";

import {
  categories,
  getCategoryBySlug,
} from "../../components/data/productCategories";
import Image from "next/image";

const iconMap = {
  Sparkles,
  User,
  Baby,
  PawPrint,
  HeartHandshake,
  Heart,
  ShieldCheck,
  Flower2,
  Waves,
  Bath,
  Footprints,
  Stethoscope,
  Hand,
  Hotel,
  Leaf,
  Gem,
};

const manufacturingSteps = [
  {
    number: "01",
    title: "Concept & Consultation",
    description:
      "We understand your target audience, product positioning, ingredients, texture and packaging requirements.",
  },
  {
    number: "02",
    title: "Formulation Development",
    description:
      "Our product development team creates customized formulations based on your desired performance and market segment.",
  },
  {
    number: "03",
    title: "Sampling & Approval",
    description:
      "Product samples are prepared for fragrance, colour, texture and performance approval before bulk production.",
  },
  {
    number: "04",
    title: "Bulk Manufacturing",
    description:
      "Approved formulations are manufactured under controlled production and quality assurance processes.",
  },
  {
    number: "05",
    title: "Filling & Packaging",
    description:
      "Products are filled into selected bottles, tubes, jars, pumps, sachets or customized packaging formats.",
  },
  {
    number: "06",
    title: "Dispatch & Support",
    description:
      "Final products are packed, inspected and prepared for domestic or export-ready delivery.",
  },
];

const manufacturingCapabilities = [
  {
    icon: Beaker,
    title: "Custom Formulations",
    description:
      "Create products based on preferred ingredients, actives, fragrance, colour, texture and performance.",
  },
  {
    icon: Factory,
    title: "Contract Manufacturing",
    description:
      "Complete manufacturing support from bulk formulation to filling, packing and finished goods.",
  },
  {
    icon: Boxes,
    title: "Private Label Solutions",
    description:
      "Launch products under your own brand with customized formulations and packaging.",
  },
  {
    icon: PackageCheck,
    title: "Packaging Support",
    description:
      "Support for bottles, jars, tubes, pumps, sprays, droppers, sachets and refillable packaging.",
  },
];

const qualityPoints = [
  "Controlled manufacturing environment",
  "Raw material and packaging inspection",
  "Batch-wise production monitoring",
  "Quality and stability-focused development",
  "Scalable production capabilities",
  "Domestic and export-ready solutions",
];

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Product Category | Prodsol Biotech",
    };
  }

  return {
    title: `${category.title} Manufacturing | Prodsol Biotech`,
    description: category.description,
  };
}

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const Icon = iconMap[category.icon] || Sparkles;

  const currentIndex = categories.findIndex(
    (item) => item.slug === category.slug,
  );

  const previousCategory =
    categories[(currentIndex - 1 + categories.length) % categories.length];

  const nextCategory = categories[(currentIndex + 1) % categories.length];

  return (
    <main className="overflow-hidden bg-white ">
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Background Image Container - Height controlled by image aspect ratio */}
        <div className="relative w-full">
          {/* Mobile / Tablet Image */}
          <Image
            src="/about.webp"
            alt="About Us Background"
            width={1920}
            height={600}
            className="w-full h-auto object-cover lg:hidden"
            priority
            quality={100}
          />

          {/* Desktop Image */}
          <Image
            src="/about0.webp"
            alt="About Us Background"
            width={1920}
            height={600}
            className="hidden lg:block w-full h-auto object-cover"
            priority
            quality={100}
          />

          {/* Dark Overlay - Optional, remove if not needed */}
          <div className="absolute inset-0 bg-linear-to-br from-transparent via-[#005D4F]/10 to-[#005D4F]/30" />

          {/* Content Container - Positioned absolutely over the image */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-8 md:py-12">
              <div className="max-w-2xl ml-auto text-right">
                {/* About Us Heading */}
                <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2 md:mb-4 leading-tight">
                  {category.title}
                  <span className="mt-2 block font-serif text-3xl italic text-[#fdeb44de] sm:text-4xl lg:text-5xl">
                    manufacturing solutions
                  </span>
                </h1>

                {/* Breadcrumb */}
                <div className="flex items-center justify-end gap-2 text-xs sm:text-sm md:text-base text-white/90">
                  <Link
                    href="/"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                  <span className="text-white/70">/</span>
                  <span className="text-[#fdeb44de] font-medium">
                    {category.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="relative min-h-">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={`${category.title} manufacturing`}
            className={`h-full w-full object-cover ${category.imagePosition}`}
          />

          <div className={`absolute inset-0 ${category.overlay}`} />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f8faf8] via-[#f8faf8]/65 to-[#f8faf8]/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        <div className="relative flex min-h-[720px] items-center py-24 px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
          <div className="max-w-3xl">
            <Link
              href="/products"
              className="mb-9 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00385d]"
            >
              <ArrowLeft className="h-4 w-4" />
              Explore All Categories
            </Link>


            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#00385d]">
              Private Label & Contract Manufacturing
            </p>

            <h1 className="max-w-3xl text-5xl font-light leading-[1.05] text-gray-950 sm:text-5xl lg:text-6xl">
              {category.title}
              <span className="mt-2 block font-serif text-3xl italic text-[#00385d] sm:text-4xl lg:text-5xl">
                manufacturing solutions
              </span>
            </h1>

        


            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-gray-300/60 pt-7">
              <div>
                <p className="text-3xl font-light text-gray-900">
                  {category.items.length}+
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                  Available Products
                </p>
              </div>

              <div>
                <p className="text-3xl font-light text-gray-900">
                  Custom
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                  Formulation Support
                </p>
              </div>

              <div>
                <p className="text-3xl font-light text-gray-900">
                  End-to-End
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                  Manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Capabilities */}
      <section className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
        <div className=" py-20 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#00385d]">
                Manufacturing Capabilities
              </p>

              <h2 className="max-w-3xl text-4xl font-light leading-tight text-gray-900 sm:text-5xl">
                Flexible solutions for established and emerging brands.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Choose complete turnkey manufacturing or individual services based
              on your existing product development and packaging needs.
            </p>
          </div>

          <div className="grid gap-px bg-gray-200 sm:grid-cols-2 xl:grid-cols-4">
            {manufacturingCapabilities.map((capability) => {
              const CapabilityIcon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="group bg-white p-8 transition-colors duration-300 hover:bg-[#00385d]"
                >
                  <div className="mb-10 flex h-12 w-12 items-center justify-center bg-[#edf6f1] text-[#00385d] transition group-hover:bg-white/15 group-hover:text-white">
                    <CapabilityIcon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-4 text-xl font-medium text-gray-900 transition group-hover:text-white">
                    {capability.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-500 transition group-hover:text-white/75">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Manufacturing Range */}
      <section
        id="product-range"
        className="relative overflow-hidden bg-[#f4f7f9] py-20 lg:py-28"
      >
        {/* Background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-px bg-gray-200/70" />
          <div className="absolute right-0 top-0 h-full w-px bg-gray-200/70" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#00385d 1px, transparent 1px), linear-gradient(90deg, #00385d 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

          <div className="absolute -right-32 top-24 h-96 w-96 rounded-full border border-[#00385d]/5" />
          <div className="absolute -right-16 top-40 h-72 w-72 rounded-full border border-[#00385d]/5" />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
          {/* Section Heading */}
          <div className="mb-14 grid gap-10 border-b border-[#00385d]/10 pb-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-[#00385d]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#00385d]">
                  Manufacturing Portfolio
                </p>
              </div>

              <h2 className="max-w-4xl text-4xl font-light leading-[1.1] text-gray-900 sm:text-5xl lg:text-6xl">
                Complete{" "}
                <span className="font-serif italic text-[#00385d]">
                  {category.title.toLowerCase()}
                </span>{" "}
                formulation range
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                Professionally developed formulations available for private
                label, third-party manufacturing, bulk supply and customized
                product development.
              </p>
            </div>

              <div className="border-l-2 border-[#00385d] bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#00385d] text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-4xl font-light text-[#00385d]">
                    {String(category.items.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-800">
                  Available Formulations
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Customizable by active ingredients, fragrance, texture, colour,
                  packaging format and target market.
                </p>
              </div>
          </div>

          {/* Manufacturing Information Bar */}
          <div className="mb-10 grid overflow-hidden border border-[#00385d]/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Manufacturing Type",
                value: "Private Label",
              },
              {
                label: "Customization",
                value: "Formula & Packaging",
              },
              {
                label: "Production",
                value: "Scalable Capacity",
              },
              {
                label: "Support",
                value: "End-to-End",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`p-5 sm:p-6 ${
                  index !== 3
                    ? "border-b border-gray-100 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  {item.label}
                </p>

                <p className="text-sm font-semibold text-gray-800">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Product Grid */}
         {/* Product Grid */}
<div className="grid gap-px overflow-hidden border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {category.items.map((product, index) => (
    <article
      key={product}
      className="group relative min-h-[155px] bg-white p-6 transition-colors duration-300 hover:bg-[#00385d]"
    >
      <div className="flex h-full flex-col justify-between">
        <span className="text-xs font-bold text-[#00385d] transition-colors group-hover:text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="mt-10">
          <h3 className="text-lg font-medium leading-7 text-gray-900 transition-colors group-hover:text-white">
            {product}
          </h3>

          <div className="mt-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#00385d] transition-colors group-hover:bg-white" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400 transition-colors group-hover:text-white/65">
              Available for manufacturing
            </span>
          </div>
        </div>
      </div>
    </article>
  ))}
</div>

          {/* Bottom Manufacturing CTA */}
          <div className="mt-14 grid overflow-hidden bg-[#00385d] lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-7 sm:p-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
                Custom Product Development
              </p>

              <h3 className="max-w-2xl text-2xl font-light leading-snug text-white sm:text-3xl">
                Need a customized {category.title.toLowerCase()} formulation for
                your brand?
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                Share your preferred ingredients, product benefits, texture,
                fragrance, packaging and required quantity with our
                manufacturing team.
              </p>
            </div>

            <div className="border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#00385d] transition-all duration-300 hover:gap-6 hover:bg-gray-100"
              >
                Request Formulation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Feature Section */}
      <section className="bg-[#101713] text-white px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
        <div className="grid min-h-[650px] lg:grid-cols-2">
          <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">
            <img
              src="/compliance.webp"
              alt="Cosmetic formulation research and development"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#72c49b]">
                Research & Product Development
              </p>

              <h2 className="text-4xl font-light leading-tight sm:text-5xl">
                Formulations developed around your brand vision.
              </h2>

              <p className="mt-7 text-base leading-8 text-white/65">
                Whether you need a ready formulation or a product developed from
                scratch, our team can support ingredient selection, texture
                development, fragrance matching and performance-based product
                development.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  "Ingredient customization",
                  "Texture development",
                  "Fragrance selection",
                  "Performance targeting",
                  "Sample development",
                  "Packaging compatibility",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center border border-white/20">
                      <Check className="h-3.5 w-3.5 text-[#72c49b]" />
                    </span>

                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-11 inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all hover:gap-5 hover:bg-white hover:text-gray-900"
              >
                Discuss Custom Formulation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="bg-[#f5f6f3] px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
        <div className="grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#00385d]">
              Packaging Solutions
            </p>

            <h2 className="max-w-xl text-4xl font-light leading-tight text-gray-900 sm:text-5xl">
              Packaging selected for function, presentation and market fit.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600">
              Select from a wide range of packaging formats suitable for retail,
              professional, travel, hospitality and clinical products.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Bottles",
                "Jars",
                "Tubes",
                "Pumps",
                "Sprays",
                "Droppers",
                "Sachets",
                "Refill Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-gray-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-h-[530px] grid-cols-2 gap-4">
            <div className="relative row-span-2 overflow-hidden">
              <img
                src="/formulation.webp"
                alt="Cosmetic product packaging"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            <div className="relative min-h-[250px] overflow-hidden">
              <img
                src="/process1.webp"
                alt="Product filling process"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="relative min-h-[250px] overflow-hidden">
              <img
                src="/packaging.webp"
                alt="Finished cosmetic products"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#00385d] px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-48 right-20 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative grid gap-10 py-20 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/65">
              Start Your Brand
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-tight sm:text-5xl">
              Looking for a reliable {category.title.toLowerCase()}{" "}
              manufacturing partner?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Share your product concept, formulation requirements, packaging
              preference and target quantity with our team.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-3 bg-white px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#00385d] transition-all hover:gap-5"
          >
            Request Manufacturing Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <nav className="px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 grid border-x border-gray-100 md:grid-cols-2">
        <Link
          href={`/products/${previousCategory.slug}`}
          className="group border-b border-gray-100 p-8 transition hover:bg-gray-50 md:border-b-0 md:border-r lg:p-10"
        >
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Previous Category
          </span>

          <span className="flex items-center gap-4 text-xl font-medium text-gray-800">
            <ArrowLeft className="h-5 w-5 text-[#00385d] transition-transform group-hover:-translate-x-1" />
            {previousCategory.title}
          </span>
        </Link>

        <Link
          href={`/products/${nextCategory.slug}`}
          className="group p-8 text-right transition hover:bg-gray-50 lg:p-10"
        >
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Next Category
          </span>

          <span className="flex items-center justify-end gap-4 text-xl font-medium text-gray-800">
            {nextCategory.title}
            <ArrowRight className="h-5 w-5 text-[#00385d] transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </nav>
    </main>
  );
}
