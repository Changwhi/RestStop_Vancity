import Card from "./UI/card";
import ManIcon from "./icon/manIcon";

export default function ContactUs() {
  const CONTACT_US = "Contact Us";
  const CONTACT_US_TEXT =
    "Let’s get this conversation started. Tell us a bit about yourself. We’ll get in touch as soon as we can.";
  const NAME = "Name: ";
  const NAME_TEXT = "Changwhi Oh";
  const EMAIL = "Email: ";
  const EMAIL_TEXT = "admin@washroomfinder.info";
  const COMMENT = "Comment: ";
  const COMMENT_TEXT =
    "Hi, I have been working as a full-stack developer. I hope you can find a washroom by using this.";

  return (
    <section className="max-w-xl p-4 flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center">{CONTACT_US}</h1>
      <h1 className="text-sm my-6 text-center">{CONTACT_US_TEXT}</h1>
      <section className="w-md flex justify-center">
        <Card>
            <section className="py-2">
              <p className="text-sm sm:text-md p-1">
                {<span className="font-bold sm:text-md">{NAME}</span>}
                {NAME_TEXT}
              </p>
              <p className="text-sm sm:text-md p-1">
                {<span className="font-bold">{EMAIL}</span>}
                {EMAIL_TEXT}
              </p>
              <p className="text-sm sm:text-md p-1">
                {<span className="font-bold">{COMMENT} </span>}
                {COMMENT_TEXT}
              </p>
          </section>
        </Card>
      </section>
    </section>
  );
}
