import MagicButton from "./UI/MagicButton";
import Card from "./UI/card";
import ManIcon from "./icon/manIcon";
import NavigateButtonIcon from "./icon/navigateButton";

export default function ContactUs() {
  const CONTACT_US = "Contact Us";
  const CONTACT_US_TEXT =
    "Let’s get this conversation started. Tell us a bit about yourself. We’ll get in touch as soon as we can.";
  const NAME = "Name: ";
  const NAME_TEXT = "Changwhi Oh - Full Stack Developer";
  const EMAIL = "Email: ";
  const EMAIL_TEXT = "admin@washroomfinder.info";
  return (
    <section id="contact" className="flex justify-center p-6 my-12">
      <section className="max-w-xl p-4 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center">{CONTACT_US}</h1>
        <section className="w-md flex justify-center mt-10">
          <Card>
              <h1 className="text-xl font-bold my-6 text-center">{CONTACT_US_TEXT}</h1>
              <section className="py-2">
                <p className="text-sm sm:text-md p-1 text-center">
                  {<span className="font-bold sm:text-md">{NAME}</span>}
                  {NAME_TEXT}
                </p>
                <p className="text-sm sm:text-md p-1 text-center">
                  {<span className="font-bold">{EMAIL}</span>}
                  {EMAIL_TEXT}
                </p>
              </section>
              <a
                className="text-center"
                href="mailto:admin@washroomfinder.info"
              >
                <MagicButton
                  title="Let's get in touch  "
                  icon={"📬"}
                  position="right"
                />
              </a>
          </Card>
        </section>
      </section>
    </section>
  );
}
