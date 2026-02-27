export default function FormDetails() {
  return (
    <div className="">
      <form action="" method="post">
        <h3>Enter details</h3>
        <label htmlFor="nameInput">
          Name
          <input type="text" name="nameInput" id="nameMember" />
        </label>
        <label htmlFor="">
          Email
          <input type="email" name="mailInput" id="memberMail" />
        </label>
        <label htmlFor="guestInput">
          Guest Email(s)
          <input type="text" name="guestInput" id="guestName" />
        </label>
        <button type="button">Add Guests</button>
        <label htmlFor="comments">
          Please share anything that will help prepare our meeting
          <textarea name="comments" id="memberComments"></textarea>
        </label>
        <button type="submit">
          Please share anything that will help prepare our meeting
        </button>
      </form>
    </div>
  );
}
