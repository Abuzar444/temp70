import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

type PriceInputProps = {
  defaultValue?: number;
  placeholder?: string;
  name?: string;
  id?: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
};

export default function PriceInput({ defaultValue }: PriceInputProps) {
  const name = "price";
  return (
    <div className="mb-2">
      <Label htmlFor="price" className="text-sm font-medium">
        Price ($)
      </Label>
      <Input
        type="number"
        name={name}
        id={name}
        min={0}
        defaultValue={defaultValue || 100}
        placeholder="Enter price"
        required
        className="w-full border border-gray-300 rounded-md p-2"
      />
    </div>
  );
}
