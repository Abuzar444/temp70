import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "../../utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

export default async function FavoriteToggleButton({
  propertyId,
}: {
  propertyId: string;
}) {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  console.log("favoriteToggleButton");
  const favoriteId = await fetchFavoriteId({ propertyId });
  console.log("favoriteId" + favoriteId);
  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
}
