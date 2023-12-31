import axios from "axios";
import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Wrapper from "@/components/Wrapper";
import { homeBannerImages } from "@/constants";
import Announcement from "@/components/announcements/Announcement";
import Event from "@/components/events/Event";

interface Announcements {
  id: string;
  title: string;
  creationDate: Date;
  author: string;
  content: string;
  photo_img_links: string;
}

interface Events {
  id: string;
  title: string;
  creationDate: Date;
  eventDate: Date;
  content: string;
  photo_img_links: string;
}

const Home = () => {
  const [announcements, setAnnouncements] = useState<Announcements[]>([]);
  const [events, setEvents] = useState<Events[]>([]);

  // useEffect(() => {
  //   const getAnnouncements = async () => {
  //     try {
  //       const response = await axios.get('https://psits-uc-main-api.onrender.com/api/announcement')
  //       console.log(response.data)
  //     } catch (error: any) {
  //       throw new Error(error)
  //     }
  //   };
  //   const getEvents = async () => {
  //     try {
  //       const response = await axios.get('https://psits-uc-main-api.onrender.com/api/event')
  //       console.log(response.data)
  //     } catch (error: any) {
  //       throw new Error(error)
  //     }
  //   };

  //   getAnnouncements();
  //   getEvents();
  // }, [])

  return (
    <Wrapper title="PSITS | Home" className="mt-10">
      <Slide indicators>
        {homeBannerImages.map((slideImage) => (
          <div
            key={slideImage.name}
            className="flex items-center justify-center rounded h-[500px] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${slideImage.banner})` }}
          />
        ))}
      </Slide>
      <div className="my-10 flex justify-center gap-4">
        <Event events={events} />
        <Announcement announcements={announcements} />
      </div>
    </Wrapper>
  );
};

export default Home;
