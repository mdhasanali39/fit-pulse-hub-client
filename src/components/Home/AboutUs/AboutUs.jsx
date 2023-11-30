/* eslint-disable react/no-unescaped-entities */
import Title from "../../Shared/Title/Title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutUs = () => {
  return (
    <div className="my-20">
      <Title
        heading_first="about"
        heading_last="us"
        subHeading="Know more about we"
      ></Title>
      <div>
        <div className="mt-10 mb-8 px-5 pb-10">
          <Tabs>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-semibold">
                  Welcome to FitPulseHub - Your Ultimate Fitness Destination!
                </h2>
                <p className="w-3/4 mx-auto">
                  At FitPulseHub, we believe that fitness is not just a journey;
                  it's a lifestyle. Our mission is to empower individuals on
                  their path to wellness by providing a dynamic and inclusive
                  fitness hub that caters to all fitness levels and goals.
                </p>
              </div>
              <TabList>
                {/* tab 1 */}
                <Tab>
                  <h3 className="text-lg text-black-text font-semibold hover:text-action-text transition">
                    Our Vision
                  </h3>
                </Tab>
                {/* tab 2  */}
                <Tab>
                  <h3 className="text-lg text-black-text font-semibold hover:text-action-text transition">
                    State-of-the-Art Facilities
                  </h3>
                </Tab>
                {/* tab 3  */}
                <Tab>
                  <h3 className="text-lg text-black-text font-semibold hover:text-action-text transition">
                    Expert Guidance
                  </h3>
                </Tab>
                {/* tab 4  */}
                <Tab>
                  <h3 className="text-lg text-black-text font-semibold hover:text-action-text transition">
                    Diverse Fitness Programs
                  </h3>
                </Tab>
                {/* tab 5  */}
                <Tab>
                  <h3 className="text-lg text-black-text font-semibold hover:text-action-text transition">
                    Community Spirit
                  </h3>
                </Tab>
                {/* tab 6  */}
                <Tab>
                  <h3 className="text-lg text-black-text font-semibold hover:text-action-text transition">
                    Your Fitness, Your Way
                  </h3>
                </Tab>
              </TabList>
            </div>

            <div className="w-3/4 mx-auto">
              {/* TabPanel 1  */}
              <TabPanel>
                <h2>
                  We envision a community where everyone embraces a healthier
                  and happier lifestyle. FitPulseHub is more than just a gym;
                  it's a vibrant space that fosters a sense of belonging,
                  motivation, and achievement.
                </h2>
              </TabPanel>
              {/* TabPanel 2 */}
              <TabPanel>
                <h2>
                  Discover a cutting-edge fitness experience with our
                  state-of-the-art facilities. From top-notch equipment to
                  expertly designed workout spaces, FitPulseHub is dedicated to
                  providing you with the tools you need to achieve your fitness
                  aspirations.
                </h2>
              </TabPanel>
              {/* TabPanel 3 */}
              <TabPanel>
                <h2>
                  Our team of experienced and certified fitness professionals is
                  here to guide you every step of the way. Whether you're a
                  beginner looking to kickstart your fitness journey or a
                  seasoned athlete seeking to elevate your performance, our
                  trainers are committed to helping you reach your full
                  potential.
                </h2>
              </TabPanel>
              {/* TabPanel 4 */}
              <TabPanel>
                <h2>
                  At FitPulseHub, we understand that one size does not fit all.
                  That's why we offer a diverse range of fitness programs,
                  including group classes, personalized training sessions, and
                  specialized workshops. Whatever your fitness preferences, we
                  have something for everyone.
                </h2>
              </TabPanel>
              {/* TabPanel 5 */}
              <TabPanel>
                <h2>
                  Join a community that shares your passion for health and
                  fitness. At FitPulseHub, you'll find like-minded individuals
                  who inspire and support each other. From group workouts to
                  community events, we foster connections that extend beyond the
                  gym.
                </h2>
              </TabPanel>
              {/* TabPanel 6 */}
              <TabPanel>
                <h2>
                  We believe in empowering you to define your fitness journey.
                  Whether you're into high-intensity workouts, yoga, or strength
                  training, FitPulseHub provides the flexibility for you to
                  tailor your fitness routine to your unique preferences.
                </h2>
              </TabPanel>
            </div>
          </Tabs>
        </div>

        <div className="h-[550px] w-full">
          <img
            className="h-full rounded-md w-full object-cover object-top"
            src="https://i.ibb.co/HFTCgHp/about-bg.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
