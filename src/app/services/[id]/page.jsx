export default function ServiceDetailPage({ params }) {
  const data = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image: "https://i.ibb.co.com/TDqnfvz4/Web-Development.jpg",
      service_description:
        "Building responsive and high-performance websites using modern technologies.",
    },
    {
      _id: "2",
      service_name: "Graphic Design",
      service_image: "https://i.ibb.co.com/n8KyNhr1/graphic-design.png",
      service_description:
        "Creating stunning visuals, logos, and branding materials for businesses.",
    },
    {
      _id: "3",
      service_name: "Digital Marketing",
      service_image: "https://i.ibb.co.com/sdM81YSg/digital-marketing.png",
      service_description:
        "Boosting online presence with SEO, social media marketing, and paid ads.",
    },
    {
      _id: "4",
      service_name: "Mobile App Development",
      service_image: "https://i.ibb.co.com/nsM3fXwv/mobile-application.jpg",
      service_description:
        "Developing high-quality mobile applications for iOS and Android platforms.",
    },
    {
      _id: "5",
      service_name: "Cybersecurity",
      service_image: "https://i.ibb.co.com/h14fyv5B/cybersecurity.jpg",
      service_description:
        "Ensuring data protection and security with advanced cybersecurity solutions.",
    },
  ];
  const id = params.id;
  const singleData = data.find((service) => service._id === id);
  return (
    <div className="space-y-5 w-11/12 mx-auto mt-10">
      <h1>ServiceDetailPage</h1>
      <p>Id: {id}</p>
      <p>{singleData.service_name}</p>
      <img className="w-40 h-40" src={singleData.service_image} alt="" />
    </div>
  );
}
