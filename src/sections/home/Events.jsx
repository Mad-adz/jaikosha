import { EventCard } from "../../components";
import { events } from "../../constants";

const Events = () => {
  return (
    <section className="py-8 bg-yellow-50/50">
      <div className="container">
        <h3 className="text-3xl font-bold mb-16">
          Join Our Spiritual Gatherings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {events.map((event, index) => (
            <div key={index} className="mb-16">
              <EventCard
                title={event.title}
                datetime={event.datetime}
                location={event.location}
                url={event.url}
                image={event.image}
                description={event.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
