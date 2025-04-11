import React from "react";
import profilePic from "../../assets/profile-pic.png";
import TestimonialCard from "./TestimonialCard";
import styles from "./testimonial.module.css";
function TestimonialSection() {
  const details = [
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      name:"Gladis Lennon",
      occupation:"Head of SEO",
      img:{profilePic}
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name:"Gladis Lennon",
      occupation:"Head of SEO",
      img:{profilePic}
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      name:"Gladis Lennon",
      occupation:"Head of SEO",
      img:{profilePic}
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      name:"Gladis Lennon",
      occupation:"Head of SEO",
      img:{profilePic}
    },
    {
      review:
        "Lorem ipsum dolor. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      name:"Gladis Lennon",
      occupation:"Head of SEO",
      img:{profilePic}
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      name:"Gladis Lennon",
      occupation:"Head of SEO",
      img:{profilePic}
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      name:"Gladis Lennon",
      occupation:"Head of SEO",
      img:{profilePic}
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      name:"Gladis Lennon",
      occupation:"Head of SEO",
      img:{profilePic}
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      name:"Gladis Lennon",
      occupation:"Head of SEO",
      img:{profilePic}
    }
  ];
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        {
          details.map((eachDetail, idx)=><TestimonialCard key={idx} detail={eachDetail} />)
        }
      </div>
    </section>
  );
}

export default TestimonialSection;
