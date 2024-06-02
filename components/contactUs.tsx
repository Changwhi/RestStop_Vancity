import Card from "./UI/card";
import ManIcon from "./icon/manIcon";

export default function ContactUs() {
  const CONTACT_US = "Contact Us";
  const CONTACT_US_TEXT =
    "Let’s get this conversation started. Tell us a bit about yourself. We’ll get in touch as soon as we can.";
  const NAME = "Name: ";
  const NAME_TEXT = "Changwhi Oh";
  const EMAIL = "Email: ";
  const EMAIL_TEXT = "changwhi.washroom.finder@gmail.com";
  const COMMENT = "Comment: ";
  const COMMENT_TEXT = "Hi, I have been working as a full-stack developer. I hope you can find a washroom by using this.";
 
  return (
    <section className="max-w-4xl mx-auto p-4 flex-col items-center">
      <h1 className="text-4xl font-bold text-center">{CONTACT_US}</h1>
      <h1 className="text-sm my-6 text-center">{CONTACT_US_TEXT}</h1>
      <section className="w-full flex justify-center items-center">
        <Card>
          <section className="flex justify-center">{<ManIcon />}</section>
          <section className="py-2">
            <p className="text-sm sm:text-md text-center">
              {<span className="font-bold">{NAME}</span>}
              {<br></br>} {NAME_TEXT}
            </p>
          </section>
          <section className="py-2">
            <p className="text-sm sm:text-md text-center">
              {<span className="font-bold">{EMAIL}</span>}
              {<br></br>}
              {EMAIL_TEXT}
            </p>
          </section>
          <section className="py-2">
            <p className="text-sm sm:text-md text-center">
              {<span className="font-bold">{COMMENT} </span>}
              {<br></br>}
              {COMMENT_TEXT}
            </p>
          </section>
        </Card>
      </section>
    </section>
  );
}
