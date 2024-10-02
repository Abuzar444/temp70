import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ImageInput() {
  const name = "image";
  return (
    <div className="md-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        name={name}
        id={name}
        required
        accept="image/*"
        type="file"
        className="max-w-xs"
      />
    </div>
  );
}
