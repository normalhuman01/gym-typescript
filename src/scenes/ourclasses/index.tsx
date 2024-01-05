import { SelectedPage } from "@/shared/types";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ClassType } from "@/shared/types";
import Class from "@/scenes/ourclasses/Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Praesent viverra risus arcu, id posuere felis varius commodo. Donec ornare sollicitudin condimentum.",
    image: Image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Praesent viverra risus arcu, id posuere felis varius commodo. Donec ornare sollicitudin condimentum.",
    image: Image2,
  },
  {
    name: "Ab core Classes",
    description:
      "Praesent viverra risus arcu, id posuere felis varius commodo. Donec ornare sollicitudin condimentum.",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Praesent viverra risus arcu, id posuere felis varius commodo. Donec ornare sollicitudin condimentum.",
    image: Image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Praesent viverra risus arcu, id posuere felis varius commodo. Donec ornare sollicitudin condimentum.",
    image: Image5,
  },
  {
    name: "Training Classes",
    description:
      "Praesent viverra risus arcu, id posuere felis varius commodo. Donec ornare sollicitudin condimentum.",
    image: Image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Unrivalved Gym. Unparalleled Training Fitness Classes. World
              Classes Studios to get the Body Shapes That you Dream of.. Get
              Your Dream Body Now.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
