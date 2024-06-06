import Avatar from "./UI/avatar";
import Card from "./UI/card";

export default function Testimonial() {
  const TEXT = `"RestStop Vancity has been a lifesaver! Finding a clean and accessible washroom in the city has never been easier. Thank you for this amazing service!"`;
  const NAME = "John Doe";
  const TITLE = "Vancouver Resident";

  return (
    <section id="testimonial" className="p-6 my-12 flex justify-center">
      <Card>
        <p className="text-lg p-4">{TEXT}</p>
        <div className="flex items-center mt-4 p-4">
          <Avatar fallback="JD"></Avatar>
          <div className="ml-3">
            <div className="font-medium">{NAME}</div>
            <div className="text-sm text-gray-500">{TITLE}</div>
          </div>
        </div>
      </Card>
    </section>
  );
}
