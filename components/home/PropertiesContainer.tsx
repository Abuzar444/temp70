import { fetchProperties } from "@/utils/actions";
import PropertiesList from "./PropertiesList";
import EmptyList from "./EmptyList";
import type { PropertyCardProps } from "@/utils/types";

export default async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <div>
        <EmptyList
          heading="No results."
          message="Try another search."
          btnText="Clear search"
        />
      </div>
    );
  }
  return <PropertiesList properties={properties} />;
}
