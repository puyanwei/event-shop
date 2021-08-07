import { AttendEventForm } from "./AttendEventForm/AttendEventForm";
import "./AttendEvent.scss";

const AttendEventPage = () => {
  return (
    <div className="stadionFET">
      <main>
        <h1 className="form-title">Attend Event</h1>
        <section className="discountin">
          <h4>Early bird offer</h4>
          <p>
            Discount are available for groups. The bigger the group, the bigger
            the discount. Prices are as follows:
          </p>
        </section>
        <section className="pricetable">
          <h4>Price per attendee</h4>
          <div className="flex-space-inbetween margin-sm">
            <span>1-3</span>
            <span>£50</span>
          </div>
          <div className="rectangle" />
          <div className="flex-space-inbetween margin-sm">
            <span>4-6</span>
            <span>£40</span>
          </div>
          <div className="rectangle" />
          <div className="flex-space-inbetween margin-sm">
            <span>6+</span>
            <span>£35</span>
          </div>
          <div className="rectangle" />
        </section>
        <div className="margin-lg" />
      </main>
      <AttendEventForm />
    </div>
  );
};

export default AttendEventPage;
