import { Card } from "../../components";
import StandardIcon from "../../assets/img/standardIcon.svg";
import DeepCleanIcon from "../../assets/img/deepCleanIcon.svg";
import MoveIcon from "../../assets/img/moveIcon.svg";

export const Services = () => (
  <>
    <h1>About our services</h1>
    <section className="spaceBetween">
      <Card title="Standard" icon={StandardIcon}>
        Entails a comprehensive maintenance of residential spaces to ensure
        cleanliness, hygiene, and organization. Dusting surfaces, vacuuming
        carpets and rugs, mopping floors, sanitizing bathrooms and kitchens.
      </Card>
      <Card title="Deep cleaning" icon={DeepCleanIcon}>
        Involves a thorough and intensive cleaning targeting areas that are
        often overlooked during regular cleaning routines. This service goes
        beyond the basic cleaning tasks to address accumulated dirt, grime, and
        stains in hard-to-reach places.
      </Card>
      <Card title="Move in/move out" icon={MoveIcon}>
        Specializes in preparing residences for new occupants or ensuring the
        return of a property to its original condition after tenants vacate.
        This service focuses on thorough cleaning of all areas, including
        interiors, fixtures, and appliances.
      </Card>
    </section>
  </>
);
