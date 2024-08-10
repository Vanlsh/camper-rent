import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.content}>
      <h2>Discover Your Perfect Camper</h2>
      {/* <img
        src={}
        alt="Camper ready for an adventure"
        className={css.image}
      /> */}
      <p>
        At Camper Explorer, we make it easy for you to find the perfect camper
        for your next adventure. Whether you{"'"}re seeking a cozy retreat or a
        rugged vehicle to explore the great outdoors, our diverse collection of
        campers has something for everyone.
      </p>
      <p>
        Our site offers a user-friendly catalog where you can browse a wide
        range of campers, each detailed with essential information and
        high-quality images. Use our intuitive filters to narrow down your
        search by price, size, and features, ensuring you find a camper that
        fits your needs and budget.
      </p>
      <p>
        Start exploring today and find the camper that will make your journey
        unforgettable.
      </p>
    </section>
  );
};

export default HomePage;
