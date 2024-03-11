export default function Contact() {
  return(
    <div>
    <section className="Contact">
  <div className="row">
    <div className="image">
      <img src="images/contact-img.svg" alt="" />
    </div>
    <form action="" method="post">
      <h3>Contact Us</h3>
      <input
        type="email"
        placeholder="enter your email"
        name="email"
        required=""
        maxLength={50}
        className="box"
      />
      <input
        type="number"
        placeholder="enter your number"
        name="number"
        required=""
        maxLength={50}
        className="box"
      />
      <textarea
        name="msg"
        className="box"
        placeholder="enter your message"
        required=""
        maxLength={500}
        defaultValue={""}
      />
      <input
        type="submit"
        defaultValue="send message"
        className="inline-btn"
        name="submit"
      />
    </form>
  </div>
</section>
</div>
)
}



