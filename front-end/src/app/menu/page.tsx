import { MenuFoodCardComponent } from "./menuFoodCardComponent";
import CategoryButton from "./categoryButton";

export default function Page() {
  return (
    <div className="py-8">
      <CategoryButton />
      <MenuFoodCardComponent />
    </div>
  );
}
