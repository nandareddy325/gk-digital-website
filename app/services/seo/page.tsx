import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { getServiceBySlug } from "@/components/data/services";

const service = getServiceBySlug("seo");

export const metadata = service
  ? { title: service.metaTitle, description: service.metaDescription }
  : {};

export default function Page() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
